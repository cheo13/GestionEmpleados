import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  try {
    // Crear empleados
    const employee1 = await prisma.employee.create({
      data: {
        firstName: 'John',
        lastName: 'Doe',
        birthDate: new Date('1990-01-01'),
        gender: 'Male',
        address: '123 Main St',
        phoneNumber: '123-456-7890',
        email: 'john.doe@example.com',
        jobTitle: 'Software Engineer',
        salary: 80000,
      },
    });

    const employee2 = await prisma.employee.create({
      data: {
        firstName: 'Jane',
        lastName: 'Smith',
        birthDate: new Date('1995-05-15'),
        gender: 'Female',
        address: '456 Oak St',
        phoneNumber: '987-654-3210',
        email: 'jane.smith@example.com',
        jobTitle: 'Marketing Specialist',
        salary: 60000,
      },
    });

    // Crear departamentos
    const department1 = await prisma.department.create({
      data: {
        name: 'Engineering',
        description: 'Software Development',
        location: 'City A',
      },
    });

    const department2 = await prisma.department.create({
      data: {
        name: 'Marketing',
        description: 'Marketing and Advertising',
        location: 'City B',
      },
    });

    // Crear títulos de trabajo
    const jobTitle1 = await prisma.jobTitle.create({
      data: {
        name: 'Software Engineer',
        title: 'Engineer',
        description: 'Software Development',
      },
    });

    const jobTitle2 = await prisma.jobTitle.create({
      data: {
        name: 'Marketing Specialist',
        title: 'Specialist',
        description: 'Marketing and Advertising',
      },
    });

    console.log('Seed ejecutado con éxito!');
  } catch (error) {
    console.error('Error durante la ejecución del seed:', error);
    process.exit(1);
  } finally {
    // Cerrar el Prisma Client al final
    await prisma.$disconnect();
  }

}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });