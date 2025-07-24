import supabase from "./supabase";
export async function getDestinations() {
  let { data, error } = await supabase
    .from("destinations")
    .select("*");
  if (error) throw new Error("Error While getting the Destination");
  return data;
}

