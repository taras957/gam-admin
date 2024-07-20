import { createClient } from '@supabase/supabase-js';

const apiKey = process.env.REACT_APP_SUPERBASE_API_TOKEN as string;
const apiUrl = process.env.REACT_APP_SUPERBASE_API_URL as string;

export const supabase = createClient(apiUrl, apiKey);
