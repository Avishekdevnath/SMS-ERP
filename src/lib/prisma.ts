import { PrismaClient, Prisma } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Database utility functions
export const db = {
  // User operations
  user: {
    create: async (data: Prisma.UserCreateInput) => {
      return await prisma.user.create({ data })
    },
    findById: async (id: string) => {
      return await prisma.user.findUnique({
        where: { id },
        include: {
          studentProfile: true,
          mentorProfile: true,
          sreProfile: true,
        },
      })
    },
    findByEmail: async (email: string) => {
      return await prisma.user.findUnique({
        where: { email },
        include: {
          studentProfile: true,
          mentorProfile: true,
          sreProfile: true,
        },
      })
    },
    update: async (id: string, data: Prisma.UserUpdateInput) => {
      return await prisma.user.update({
        where: { id },
        data,
        include: {
          studentProfile: true,
          mentorProfile: true,
          sreProfile: true,
        },
      })
    },
    delete: async (id: string) => {
      return await prisma.user.delete({ where: { id } })
    },
    findMany: async (params?: Prisma.UserFindManyArgs) => {
      return await prisma.user.findMany({
        ...params,
        include: {
          studentProfile: true,
          mentorProfile: true,
          sreProfile: true,
        },
      })
    },
  },

  // Batch operations
  batch: {
    create: async (data: Prisma.BatchCreateInput) => {
      return await prisma.batch.create({ data })
    },
    findById: async (id: string) => {
      return await prisma.batch.findUnique({
        where: { id },
        include: {
          missions: true,
          students: {
            include: {
              student: {
                include: {
                  user: true,
                },
              },
            },
          },
        },
      })
    },
    findByCode: async (code: string) => {
      return await prisma.batch.findUnique({
        where: { code },
        include: {
          missions: true,
          students: {
            include: {
              student: {
                include: {
                  user: true,
                },
              },
            },
          },
        },
      })
    },
    update: async (id: string, data: Prisma.BatchUpdateInput) => {
      return await prisma.batch.update({
        where: { id },
        data,
        include: {
          missions: true,
          students: {
            include: {
              student: {
                include: {
                  user: true,
                },
              },
            },
          },
        },
      })
    },
    delete: async (id: string) => {
      return await prisma.batch.delete({ where: { id } })
    },
    findMany: async (params?: Prisma.BatchFindManyArgs) => {
      return await prisma.batch.findMany({
        ...params,
        include: {
          missions: true,
          students: {
            include: {
              student: {
                include: {
                  user: true,
                },
              },
            },
          },
        },
      })
    },
  },

  // Mission operations
  mission: {
    create: async (data: Prisma.MissionCreateInput) => {
      return await prisma.mission.create({ data })
    },
    findById: async (id: string) => {
      return await prisma.mission.findUnique({
        where: { id },
        include: {
          batch: true,
          students: {
            include: {
              student: {
                include: {
                  user: true,
                },
              },
            },
          },
          mentors: {
            include: {
              mentor: {
                include: {
                  user: true,
                },
              },
            },
          },
        },
      })
    },
    update: async (id: string, data: Prisma.MissionUpdateInput) => {
      return await prisma.mission.update({
        where: { id },
        data,
        include: {
          batch: true,
          students: {
            include: {
              student: {
                include: {
                  user: true,
                },
              },
            },
          },
          mentors: {
            include: {
              mentor: {
                include: {
                  user: true,
                },
              },
            },
          },
        },
      })
    },
    delete: async (id: string) => {
      return await prisma.mission.delete({ where: { id } })
    },
    findMany: async (params?: Prisma.MissionFindManyArgs) => {
      return await prisma.mission.findMany({
        ...params,
        include: {
          batch: true,
          students: {
            include: {
              student: {
                include: {
                  user: true,
                },
              },
            },
          },
          mentors: {
            include: {
              mentor: {
                include: {
                  user: true,
                },
              },
            },
          },
        },
      })
    },
  },

  // Student Profile operations
  studentProfile: {
    create: async (data: Prisma.StudentProfileCreateInput) => {
      return await prisma.studentProfile.create({
        data,
        include: {
          user: true,
          batches: {
            include: {
              batch: true,
            },
          },
          missions: {
            include: {
              mission: {
                include: {
                  batch: true,
                },
              },
            },
          },
        },
      })
    },
    findByUserId: async (userId: string) => {
      return await prisma.studentProfile.findUnique({
        where: { userId },
        include: {
          user: true,
          batches: {
            include: {
              batch: true,
            },
          },
          missions: {
            include: {
              mission: {
                include: {
                  batch: true,
                },
              },
            },
          },
        },
      })
    },
    update: async (userId: string, data: Prisma.StudentProfileUpdateInput) => {
      return await prisma.studentProfile.update({
        where: { userId },
        data,
        include: {
          user: true,
          batches: {
            include: {
              batch: true,
            },
          },
          missions: {
            include: {
              mission: {
                include: {
                  batch: true,
                },
              },
            },
          },
        },
      })
    },
  },

  // Mentor Profile operations
  mentorProfile: {
    create: async (data: Prisma.MentorProfileCreateInput) => {
      return await prisma.mentorProfile.create({
        data,
        include: {
          user: true,
          missions: {
            include: {
              mission: {
                include: {
                  batch: true,
                },
              },
            },
          },
        },
      })
    },
    findByUserId: async (userId: string) => {
      return await prisma.mentorProfile.findUnique({
        where: { userId },
        include: {
          user: true,
          missions: {
            include: {
              mission: {
                include: {
                  batch: true,
                },
              },
            },
          },
        },
      })
    },
    update: async (userId: string, data: Prisma.MentorProfileUpdateInput) => {
      return await prisma.mentorProfile.update({
        where: { userId },
        data,
        include: {
          user: true,
          missions: {
            include: {
              mission: {
                include: {
                  batch: true,
                },
              },
            },
          },
        },
      })
    },
  },

  // Junction table operations
  studentBatch: {
    create: async (data: Prisma.StudentBatchCreateInput) => {
      return await prisma.studentBatch.create({
        data,
        include: {
          student: {
            include: {
              user: true,
            },
          },
          batch: true,
        },
      })
    },
    findByStudentAndBatch: async (studentId: string, batchId: string) => {
      return await prisma.studentBatch.findUnique({
        where: {
          studentId_batchId: {
            studentId,
            batchId,
          },
        },
        include: {
          student: {
            include: {
              user: true,
            },
          },
          batch: true,
        },
      })
    },
  },

  studentMission: {
    create: async (data: Prisma.StudentMissionCreateInput) => {
      return await prisma.studentMission.create({
        data,
        include: {
          student: {
            include: {
              user: true,
            },
          },
          mission: {
            include: {
              batch: true,
            },
          },
        },
      })
    },
    findByStudentAndMission: async (studentId: string, missionId: string) => {
      return await prisma.studentMission.findUnique({
        where: {
          studentId_missionId: {
            studentId,
            missionId,
          },
        },
        include: {
          student: {
            include: {
              user: true,
            },
          },
          mission: {
            include: {
              batch: true,
            },
          },
        },
      })
    },
  },

  missionMentor: {
    create: async (data: Prisma.MissionMentorCreateInput) => {
      return await prisma.missionMentor.create({
        data,
        include: {
          mission: {
            include: {
              batch: true,
            },
          },
          mentor: {
            include: {
              user: true,
            },
          },
        },
      })
    },
    findByMissionAndMentor: async (missionId: string, mentorId: string) => {
      return await prisma.missionMentor.findUnique({
        where: {
          missionId_mentorId: {
            missionId,
            mentorId,
          },
        },
        include: {
          mission: {
            include: {
              batch: true,
            },
          },
          mentor: {
            include: {
              user: true,
            },
          },
        },
      })
    },
  },
}

export default prisma 