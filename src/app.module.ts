import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { RoomsModule } from './rooms/rooms.module';
import { BookingsModule } from './bookings/bookings.module';
import { PaymentsModule } from './payments/payments.module';
import { NotificationsModule } from './notifications/notifications.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables
    MongooseModule.forRoot(process.env.MONGO_URI), AuthModule, RoomsModule, BookingsModule, PaymentsModule, NotificationsModule, UsersModule, // MongoDB URI
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
