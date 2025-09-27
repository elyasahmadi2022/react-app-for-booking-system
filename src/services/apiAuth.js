import supabase from "./supabase";
export const getlogin = async ({ email, password }) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) throw new Error(error);
  return data 
};
