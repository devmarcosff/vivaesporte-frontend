import nookies from 'nookies'

export const getAuthToken = async (): Promise<string | null> => {
  const cookies = nookies.get()
  const token = cookies.USER_TOKEN || null

  return token
}