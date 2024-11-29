export interface Notification {
  id?: string;
  message: string;
  type: string;
  userId: string;
  isRead: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
