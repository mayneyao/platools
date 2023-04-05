import { createClient } from '@supabase/supabase-js'
import { type Database } from '@/lib/database.types'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVER_KEY) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVER_KEY,
)