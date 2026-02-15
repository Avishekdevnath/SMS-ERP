import { PrismaClient, UserRole, UserStatus } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding fixed user accounts...')

  // Fixed user accounts for the closed system
  const users = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'TempPass123!',
      role: UserRole.STUDENT,
      status: UserStatus.ACTIVE,
    },
    {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      password: 'TempPass123!',
      role: UserRole.MENTOR,
      status: UserStatus.ACTIVE,
    },
    {
      name: 'Mike Chen',
      email: 'mike.chen@example.com',
      password: 'TempPass123!',
      role: UserRole.SRE,
      status: UserStatus.ACTIVE,
    },
    {
      name: 'Alex Rodriguez',
      email: 'alex.rodriguez@example.com',
      password: 'TempPass123!',
      role: UserRole.MANAGER,
      status: UserStatus.ACTIVE,
    },
    {
      name: 'Lisa Wang',
      email: 'lisa.wang@example.com',
      password: 'TempPass123!',
      role: UserRole.DEVELOPER,
      status: UserStatus.ACTIVE,
    },
    {
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'TempPass123!',
      role: UserRole.ADMIN,
      status: UserStatus.ACTIVE,
    },
    // Add more fixed accounts as needed
    {
      name: 'Emily Brown',
      email: 'emily.brown@example.com',
      password: 'TempPass123!',
      role: UserRole.STUDENT,
      status: UserStatus.ACTIVE,
    },
    {
      name: 'David Wilson',
      email: 'david.wilson@example.com',
      password: 'TempPass123!',
      role: UserRole.STUDENT,
      status: UserStatus.ACTIVE,
    },
    {
      name: 'Jennifer Smith',
      email: 'jennifer.smith@example.com',
      password: 'TempPass123!',
      role: UserRole.MENTOR,
      status: UserStatus.ACTIVE,
    },
    {
      name: 'Robert Davis',
      email: 'robert.davis@example.com',
      password: 'TempPass123!',
      role: UserRole.SRE,
      status: UserStatus.ACTIVE,
    },
  ]

  for (const userData of users) {
    try {
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email: userData.email }
      })

      if (existingUser) {
        console.log(`⚠️  User ${userData.email} already exists, skipping...`)
        continue
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(userData.password, 12)

      // Create user
      const user = await prisma.user.create({
        data: {
          name: userData.name,
          email: userData.email,
          password: hashedPassword,
          role: userData.role,
          status: userData.status,
          firstLogin: true, // All new users must change password on first login
        }
      })

      console.log(`✅ Created user: ${user.name} (${user.email}) - Role: ${user.role}`)

      // Create profile based on role
      if (user.role === UserRole.STUDENT) {
        await prisma.studentProfile.create({
          data: {
            userId: user.id,
            phone: '+1234567890',
            address: '123 Main St, City, State',
            emergencyContact: 'Emergency Contact',
          }
        })
        console.log(`  📚 Created student profile for ${user.name}`)
      } else if (user.role === UserRole.MENTOR) {
        await prisma.mentorProfile.create({
          data: {
            userId: user.id,
            phone: '+1234567890',
            expertise: ['JavaScript', 'React', 'Node.js'],
            bio: 'Experienced mentor with expertise in web development',
            availability: 'Weekdays 9 AM - 5 PM',
          }
        })
        console.log(`  👨‍🏫 Created mentor profile for ${user.name}`)
      } else if (user.role === UserRole.SRE) {
        await prisma.sREProfile.create({
          data: {
            userId: user.id,
            phone: '+1234567890',
            department: 'Student Relations',
          }
        })
        console.log(`  📞 Created SRE profile for ${user.name}`)
      }

    } catch (error) {
      console.error(`❌ Error creating user ${userData.email}:`, error)
    }
  }

  console.log('\n🎉 Seeding completed!')
  console.log('\n📋 Login Credentials:')
  console.log('All users have the temporary password: TempPass123!')
  console.log('Users will be required to change their password on first login.')
  console.log('\n👥 Available Users:')
  users.forEach(user => {
    console.log(`  • ${user.name} (${user.email}) - ${user.role}`)
  })
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 