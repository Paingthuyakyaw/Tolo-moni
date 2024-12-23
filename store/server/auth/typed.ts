export interface AuthProp {
  message: string;
  data: {
    username: string;
    email: string;
    gender: string;
    image: null | string;
    created_at: string;
    updated_at: string;
  };
}

export interface userPayload {
  username: string;
  email: string;
  gender: string;
  password: string;
}
