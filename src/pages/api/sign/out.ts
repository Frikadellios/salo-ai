// File: src/pages/api/sign/out.ts

import { lucia } from '@/lucia/index'
import { getSessionID } from '@/lucia/user'
import type { APIContext } from 'astro'

export async function GET({
  cookies,
  redirect,
}: APIContext): Promise<Response> {
  await lucia.invalidateSession(getSessionID(cookies))
  const sessionCookie = lucia.createBlankSessionCookie()
  cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
  return redirect('/')
}
