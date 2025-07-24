import { createClient } from "@supabase/supabase-js";
const supabaseURL = "https://akaonixjnyznlmskiimd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrYW9uaXhqbnl6bmxtc2tpaW1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5NDc1NjMsImV4cCI6MjA2ODUyMzU2M30.82wMTG4Gis1icoTiBLPsjBK8C7LpnZlb086kh5z4UBM";

const supabase = createClient(supabaseURL, supabaseKey);
export default supabase;
