export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      agenda: {
        Row: {
          banner_url: string | null
          created_at: string
          description: string | null
          event_date: string | null
          event_type: string
          featured: boolean | null
          id: string
          location: string | null
          responsible: string | null
          status: string
          time: string | null
          title: string
          unit_name: string | null
          updated_at: string
        }
        Insert: {
          banner_url?: string | null
          created_at?: string
          description?: string | null
          event_date?: string | null
          event_type?: string
          featured?: boolean | null
          id?: string
          location?: string | null
          responsible?: string | null
          status?: string
          time?: string | null
          title: string
          unit_name?: string | null
          updated_at?: string
        }
        Update: {
          banner_url?: string | null
          created_at?: string
          description?: string | null
          event_date?: string | null
          event_type?: string
          featured?: boolean | null
          id?: string
          location?: string | null
          responsible?: string | null
          status?: string
          time?: string | null
          title?: string
          unit_name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      cell_groups: {
        Row: {
          city: string | null
          created_at: string
          id: string
          interested: number | null
          leader: string | null
          name: string
          neighborhood: string | null
          participants: number | null
          schedule: string | null
          status: string
          updated_at: string
        }
        Insert: {
          city?: string | null
          created_at?: string
          id?: string
          interested?: number | null
          leader?: string | null
          name: string
          neighborhood?: string | null
          participants?: number | null
          schedule?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          city?: string | null
          created_at?: string
          id?: string
          interested?: number | null
          leader?: string | null
          name?: string
          neighborhood?: string | null
          participants?: number | null
          schedule?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      communications: {
        Row: {
          comm_type: string
          created_at: string
          id: string
          message: string | null
          sent_at: string | null
          status: string
          target_audience: string | null
          title: string
          unit_name: string | null
          updated_at: string
        }
        Insert: {
          comm_type?: string
          created_at?: string
          id?: string
          message?: string | null
          sent_at?: string | null
          status?: string
          target_audience?: string | null
          title: string
          unit_name?: string | null
          updated_at?: string
        }
        Update: {
          comm_type?: string
          created_at?: string
          id?: string
          message?: string | null
          sent_at?: string | null
          status?: string
          target_audience?: string | null
          title?: string
          unit_name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      content: {
        Row: {
          author: string | null
          body: string | null
          category: string | null
          content_type: string
          created_at: string
          featured: boolean | null
          id: string
          media_url: string | null
          published_at: string | null
          status: string
          thumbnail_url: string | null
          title: string
          updated_at: string
        }
        Insert: {
          author?: string | null
          body?: string | null
          category?: string | null
          content_type?: string
          created_at?: string
          featured?: boolean | null
          id?: string
          media_url?: string | null
          published_at?: string | null
          status?: string
          thumbnail_url?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          author?: string | null
          body?: string | null
          category?: string | null
          content_type?: string
          created_at?: string
          featured?: boolean | null
          id?: string
          media_url?: string | null
          published_at?: string | null
          status?: string
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      donation_records: {
        Row: {
          amount: number
          created_at: string
          donated_at: string | null
          donation_id: string | null
          donor_name: string | null
          id: string
          method: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          donated_at?: string | null
          donation_id?: string | null
          donor_name?: string | null
          id?: string
          method?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          donated_at?: string | null
          donation_id?: string | null
          donor_name?: string | null
          id?: string
          method?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "donation_records_donation_id_fkey"
            columns: ["donation_id"]
            isOneToOne: false
            referencedRelation: "donations"
            referencedColumns: ["id"]
          },
        ]
      }
      donations: {
        Row: {
          campaign: string
          contributions_count: number | null
          created_at: string
          description: string | null
          goal_amount: number | null
          id: string
          period: string | null
          status: string
          total_amount: number | null
          updated_at: string
        }
        Insert: {
          campaign: string
          contributions_count?: number | null
          created_at?: string
          description?: string | null
          goal_amount?: number | null
          id?: string
          period?: string | null
          status?: string
          total_amount?: number | null
          updated_at?: string
        }
        Update: {
          campaign?: string
          contributions_count?: number | null
          created_at?: string
          description?: string | null
          goal_amount?: number | null
          id?: string
          period?: string | null
          status?: string
          total_amount?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      event_registrations: {
        Row: {
          attended: boolean | null
          created_at: string
          email: string | null
          event_id: string
          id: string
          name: string
          phone: string | null
        }
        Insert: {
          attended?: boolean | null
          created_at?: string
          email?: string | null
          event_id: string
          id?: string
          name: string
          phone?: string | null
        }
        Update: {
          attended?: boolean | null
          created_at?: string
          email?: string | null
          event_id?: string
          id?: string
          name?: string
          phone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_registrations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          banner_url: string | null
          created_at: string
          description: string | null
          end_date: string | null
          event_type: string
          featured: boolean | null
          id: string
          location: string | null
          max_capacity: number | null
          registrations_count: number | null
          start_date: string | null
          status: string
          time: string | null
          title: string
          unit_name: string | null
          updated_at: string
        }
        Insert: {
          banner_url?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          event_type?: string
          featured?: boolean | null
          id?: string
          location?: string | null
          max_capacity?: number | null
          registrations_count?: number | null
          start_date?: string | null
          status?: string
          time?: string | null
          title: string
          unit_name?: string | null
          updated_at?: string
        }
        Update: {
          banner_url?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          event_type?: string
          featured?: boolean | null
          id?: string
          location?: string | null
          max_capacity?: number | null
          registrations_count?: number | null
          start_date?: string | null
          status?: string
          time?: string | null
          title?: string
          unit_name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      members: {
        Row: {
          city: string | null
          created_at: string
          email: string | null
          id: string
          ministry: string | null
          name: string
          notes: string | null
          phone: string | null
          status: string
          tags: string[] | null
          unit_id: string | null
          unit_name: string | null
          updated_at: string
        }
        Insert: {
          city?: string | null
          created_at?: string
          email?: string | null
          id?: string
          ministry?: string | null
          name: string
          notes?: string | null
          phone?: string | null
          status?: string
          tags?: string[] | null
          unit_id?: string | null
          unit_name?: string | null
          updated_at?: string
        }
        Update: {
          city?: string | null
          created_at?: string
          email?: string | null
          id?: string
          ministry?: string | null
          name?: string
          notes?: string | null
          phone?: string | null
          status?: string
          tags?: string[] | null
          unit_id?: string | null
          unit_name?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "members_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "units"
            referencedColumns: ["id"]
          },
        ]
      }
      ministries: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          leader: string | null
          name: string
          status: string
          team_count: number | null
          updated_at: string
          volunteers_count: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          leader?: string | null
          name: string
          status?: string
          team_count?: number | null
          updated_at?: string
          volunteers_count?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          leader?: string | null
          name?: string
          status?: string
          team_count?: number | null
          updated_at?: string
          volunteers_count?: number | null
        }
        Relationships: []
      }
      prayer_requests: {
        Row: {
          city: string | null
          created_at: string
          id: string
          is_private: boolean
          name: string
          phone: string | null
          request: string
          response: string | null
          responsible: string | null
          status: string
          updated_at: string
          urgency: string
        }
        Insert: {
          city?: string | null
          created_at?: string
          id?: string
          is_private?: boolean
          name: string
          phone?: string | null
          request: string
          response?: string | null
          responsible?: string | null
          status?: string
          updated_at?: string
          urgency?: string
        }
        Update: {
          city?: string | null
          created_at?: string
          id?: string
          is_private?: boolean
          name?: string
          phone?: string | null
          request?: string
          response?: string | null
          responsible?: string | null
          status?: string
          updated_at?: string
          urgency?: string
        }
        Relationships: []
      }
      settings: {
        Row: {
          category: string | null
          created_at: string
          id: string
          key: string
          updated_at: string
          value: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: string
          key: string
          updated_at?: string
          value?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: string
          key?: string
          updated_at?: string
          value?: string | null
        }
        Relationships: []
      }
      units: {
        Row: {
          address: string | null
          city: string | null
          contact: string | null
          created_at: string
          id: string
          image_url: string | null
          map_url: string | null
          name: string
          responsible: string | null
          schedule: string | null
          status: string
          updated_at: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          contact?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          map_url?: string | null
          name: string
          responsible?: string | null
          schedule?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          address?: string | null
          city?: string | null
          contact?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          map_url?: string | null
          name?: string
          responsible?: string | null
          schedule?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      visitors: {
        Row: {
          city: string | null
          created_at: string
          follow_up_status: string
          id: string
          interest: string | null
          name: string
          notes: string | null
          origin: string | null
          phone: string | null
          unit_name: string | null
          updated_at: string
          visit_date: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          follow_up_status?: string
          id?: string
          interest?: string | null
          name: string
          notes?: string | null
          origin?: string | null
          phone?: string | null
          unit_name?: string | null
          updated_at?: string
          visit_date?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string
          follow_up_status?: string
          id?: string
          interest?: string | null
          name?: string
          notes?: string | null
          origin?: string | null
          phone?: string | null
          unit_name?: string | null
          updated_at?: string
          visit_date?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      prayer_requests_public: {
        Row: {
          city: string | null
          created_at: string | null
          id: string | null
          name: string | null
          request: string | null
          status: string | null
          urgency: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string | null
          id?: string | null
          name?: string | null
          request?: string | null
          status?: string | null
          urgency?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string | null
          id?: string | null
          name?: string | null
          request?: string | null
          status?: string | null
          urgency?: string | null
        }
        Relationships: []
      }
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
