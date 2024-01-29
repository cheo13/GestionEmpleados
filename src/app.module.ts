import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService} from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { JobtitleModule } from './jobtitle/jobtitle.module';

@Module({
  imports: [PrismaModule, EmployeeModule, DepartmentModule, JobtitleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
