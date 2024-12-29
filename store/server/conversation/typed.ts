export interface ConversationProps {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  participants: Participant[];
}

export interface Participant {
  id: number;
  userId: number;
  conversationId: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
}

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  gender: string;
  image: null;
  createdAt: Date;
  updatedAt: Date;
}
