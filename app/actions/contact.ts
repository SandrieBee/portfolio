'use server'

import { createClient } from '@/app/utils/supabase/server'

export async function submitMessage(formData: FormData) {
  const supabase = await createClient()

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required.' }
  }

  const { error } = await supabase.from('messages').insert({ name, email, message })

  if (error) {
    console.error('Error submitting message:', error)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  return { success: true }
}
