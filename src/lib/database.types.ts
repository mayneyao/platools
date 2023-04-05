export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      product: {
        Row: {
          created_at: string | null
          description: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: number
          name?: string
        }
      }
      user_product_ownerships: {
        Row: {
          created_at: string | null
          id: number
          license_key: string | null
          paid: boolean
          product_id: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          license_key?: string | null
          paid: boolean
          product_id: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          license_key?: string | null
          paid?: boolean
          product_id?: number
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
