import { promises as fs } from 'fs'
import path from 'path'
import bcrypt from 'bcryptjs'

export type User = {
  id: string
  name: string
  email: string
  password: string
  role?: 'user' | 'admin'
}

const usersFile = path.join(process.cwd(), 'data', 'users.json')

async function ensureUsersFile() {
  await fs.mkdir(path.dirname(usersFile), { recursive: true })
  try {
    await fs.access(usersFile)
  } catch {
    await fs.writeFile(usersFile, '[]', 'utf8')
  }
}

export async function readUsers(): Promise<User[]> {
  await ensureUsersFile()
  const content = await fs.readFile(usersFile, 'utf8')
  return JSON.parse(content) as User[]
}

export async function writeUsers(users: User[]) {
  await ensureUsersFile()
  await fs.writeFile(usersFile, JSON.stringify(users, null, 2), 'utf8')
}

export async function findUserByEmail(email: string) {
  const users = await readUsers()
  return users.find((user) => user.email.toLowerCase() === email.toLowerCase())
}

export async function addUser(user: Omit<User, 'id'>) {
  const users = await readUsers()
  const newUser: User = {
    id: crypto.randomUUID(),
    ...user,
  }
  users.push(newUser)
  await writeUsers(users)
  return newUser
}

export async function validateUser(email: string, password: string) {
  const user = await findUserByEmail(email)
  if (!user) {
    return null
  }

  const isValid = await bcrypt.compare(password, user.password)
  return isValid ? user : null
}
