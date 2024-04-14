import type { AstroCookies } from 'astro'
import type { User } from 'lucia'
import { lucia } from '.'

export function getSessionID(cookies: AstroCookies): string | null {
  const auth_session = cookies.get('auth_session')
  if (!auth_session) return null
  return lucia.readSessionCookie(`auth_session=${auth_session.value}`)
}

export async function getUser(cookies: AstroCookies): Promise<User | null> {
  const session_id = getSessionID(cookies)
  if (!session_id) return null
  const { user } = await lucia.validateSession(session_id)
  return user
}
