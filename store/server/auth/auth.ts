import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthProp, loginPayload, loginProp, userPayload } from "./typed";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    signUp: build.mutation<AuthProp, userPayload>({
      query: (userData) => ({
        url: "user/signup",
        method: "POST",
        body: userData,
      }),
    }),
    login: build.mutation<loginProp, loginPayload>({
      query: (userData) => ({
        url: "auth/login",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = authApi;
