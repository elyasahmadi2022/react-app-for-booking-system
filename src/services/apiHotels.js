import supabase from "./supabase";

export async function getHotels() {
  let { data, error } = await supabase
    .from("hotels")
    .select("* ,hotel_rooms(*)");
  if (error) throw new Error(error.message);
  return data;
}
export async function getAllHotels(){
  let {data, error} = await supabase.from("hotels")
  .select('*, states(*), hotel_rooms(*)')
  if (error) throw new Error(error.message)
  return data
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
export async function getRooms(){
  let {data, error} = await supabase.from("hotel_rooms").select("*, hotels(address,star_rating,hotel_name,description)")
  if (error) {
    console.log(error)
  }
  return data;
}