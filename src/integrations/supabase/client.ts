import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://kunaal-naik-website.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1bmFhbC1uYWlrLXdlYnNpdGUiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTczMzg3MzM4MiwiZXhwIjoyMDQ5NDQ5MzgyfQ.7wtEKGxjmgJHFYxCxGZLDQ4VawIrOcGmb6qjr8P_QYs"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)