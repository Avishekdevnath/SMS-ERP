import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { UserRole } from '@prisma/client'

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, role } = await req.json()

    if (!name || !email || !password || !role) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const normalizedEmail = String(email).toLowerCase().trim()
    const requestedRole = String(role).toUpperCase()

    if (!Object.values(UserRole).includes(requestedRole as UserRole)) {
      return NextResponse.json({ error: 'Invalid role' }, { status: 400 })
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    })

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        name: String(name).trim(),
        email: normalizedEmail,
        password: hashedPassword,
        role: requestedRole as UserRole,
      },
    })

    const { password: passwordHash, ...userWithoutPassword } = user
    void passwordHash
    return NextResponse.json({ user: userWithoutPassword }, { status: 201 })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 })
  }
} 
