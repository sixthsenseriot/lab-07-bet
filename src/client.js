import { createClient } from "@supabase/supabase-js";

const URL = "https://jgfvimkbtgdbccdfgbzw.supabase.co";
const API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpnZnZpbWtidGdkYmNjZGZnYnp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NDM4ODEsImV4cCI6MjA2OTQxOTg4MX0.IILV8vpWacCC0W_vv4yDuydnIqD9A8T6sQDkcglCe1g";

export const supabase = createClient(URL, API_KEY);
