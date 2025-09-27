import { countryDetails, statesDetails } from "./apiCountry";
import supabase, { supabaseURL } from "./supabase";

export async function getHotels() {
  let { data, error } = await supabase
    .from("hotels")
    .select("* ,hotel_rooms(*)");
  if (error) throw new Error(error.message);
  return data;
}
export async function getAllHotels() {
  let { data, error } = await supabase
    .from("hotels")
    .select("*, states(*), hotel_rooms(*)")
  if (error) throw new Error(error.message);
  return data;
}
export async function searchHotels({ fieldset, value }) {
  let { data, error } = await supabase
    .from("hotels")
    .select("*, destinations(*)")
    .like(fieldset, `%${value}%`);
  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  return data;
}
export async function getRooms() {
  let { data, error } = await supabase
    .from("hotel_rooms")
    .select("*, hotels(address,star_rating,hotel_name,description)");
  if (error) {
    console.log(error);
  }
  return data;
}

//version 1
export async function createHotel({ newHotel, id }) {
  console.log(newHotel);
  const [countryDetailsData, stateDetailsData] = await Promise.all([
    countryDetails(newHotel.country),
    statesDetails(newHotel.country, newHotel.province),
  ]);

  const hasImagePath = newHotel.images?.startsWith?.(supabaseURL);
  const hotelName = `${Math.random()}-${newHotel.images?.name}`.replace("/", "");
  const imagePath = hasImagePath
    ? newHotel.images
    : `${supabaseURL}/storage/v1/object/public/destination/${hotelName}`;

 
  // Insert or get country
  let { data: countryQueryData } = await supabase
    .from("country")
    .select("*")
    .eq("country_code", countryDetailsData.iso2);
  console.log(countryQueryData);
  if (countryQueryData.length === 0) {
    let { data: newCountryData, error: insertingError } = await supabase
      .from("country")
      .insert({
        country_name: countryDetailsData.name,
        country_code: countryDetailsData.iso2,
        capital: countryDetailsData.capital,
        country_latitude: countryDetailsData.latitude,
        country_longitude: countryDetailsData.longitude,
      })
      .select();

    if (newCountryData.length > 0) {
      countryQueryData = newCountryData;
    } else {
      throw new Error(JSON.stringify(insertingError));
    }
  }

  // Insert or get state
  let { data: stateQueryData } = await supabase
    .from("states")
    .select("*")
    .eq("province",stateDetailsData.name).eq("city", newHotel.city);
  if (stateQueryData.length === 0) {
    const { data: newStateData, error: insertingErrorState } = await supabase
      .from("states")
      .insert({
        country_id: countryQueryData[0].id,
        province: stateDetailsData.name,
        city: newHotel.city,
        latitude: stateDetailsData.latitude,
        longitude: stateDetailsData.longitude,
      })
      .select();

    if (insertingErrorState)
      throw new Error(JSON.stringify(insertingErrorState));
    stateQueryData = newStateData; // Use newly inserted state data
  }
   const {data: existedHotel} = await supabase
    .from("hotels")
    .select("*, states(*)")
    .eq("hotel_name", newHotel.hotel_name)
    .eq("address", newHotel.address)
    .eq("state_id",stateQueryData[0].id)
    console.log(existedHotel)
  if (existedHotel.length > 0) throw new Error("The Hotel Already Exist")
  // Create or update hotel
  let query = supabase.from("hotels");
  if (!id) {
    query = query.insert([
      {
        hotel_name: newHotel.hotel_name,
        address: newHotel.address,
        contact_information: newHotel.contact_information,
        hotel_type: newHotel.hotel_type,
        description: newHotel.description,
        images: imagePath,
        per_night: newHotel.per_night,
        state_id: stateQueryData[0].id,
      },
    ]);
  } else {
    query = query.update({ ...newHotel, images: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();
  if (error) {
    throw new Error("Error creating hotel: " + JSON.stringify(error));
  }

  // Upload image if necessary
  if (!hasImagePath) {
    const { error: fileError } = await supabase.storage
      .from("destination")
      .upload(hotelName, newHotel.images);

    if (fileError) {
      await supabase.from("destination").delete().eq("id", data.id);
      throw new Error(
        "Error uploading the image: " + JSON.stringify(fileError)
      );
    }
  }

  return data;
}

export async function deleteHotel(id) {
  console.log(id);
  const { data, error } = await supabase.from("hotels").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(error);
  }
  return data;
}
export async function getHotel(id){
  
let { data: hotels, error } = await supabase
  .from('hotels')
  .select('*').eq("id", id).single()
  if (error) throw new Error(error)
  return hotels
}
export async function editHotel({editData, id}){
const { data, error } = await supabase
  .from('hotels')
  .update(editData)
  .eq('id', id)
  .select()
  .single()
  if (error) throw new Error(error)
  return data
}
