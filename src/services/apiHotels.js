import supabase from "./supabase";

export async function getHotels() {
  let { data, error } = await supabase
    .from("hotels")
    .select(
      "hotel_name,address, contact,rating,image,price,destinations(country,city, description)"
    );
  if (error) throw new Error(error.message);
  return data;
}

export async function searchHotels({fieldset,value}){
  let { data, error } = await supabase
  .from('hotels')
  .select("*, destinations(*)")
  .like(fieldset, `%${value}%`)
  if (error){
    console.log(error)
    throw new Error(error.message)
  }
  return data 
}