import supabase from "./supabase";
export const getUsers = async () => {
  let { data: profiles, error } = await supabase.from("profiles").select("*");
  if (error) throw new Error(error);
  return profiles;
};
