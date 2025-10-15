import { createClient } from '@supabase/supabase-js'

// Use direct initialization instead of auth-helpers to avoid cookie parsing issues
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  {
    auth: {
      persistSession: true,
      storageKey: 'supabase-auth',
      storage: {
        getItem: (key) => {
          if (typeof window === 'undefined') return null
          return JSON.parse(window.localStorage.getItem(key) || 'null')
        },
        setItem: (key, value) => {
          if (typeof window === 'undefined') return
          window.localStorage.setItem(key, JSON.stringify(value))
        },
        removeItem: (key) => {
          if (typeof window === 'undefined') return
          window.localStorage.removeItem(key)
        },
      },
    },
  }
)
