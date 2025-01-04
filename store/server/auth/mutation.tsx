import { axios } from "@/store";
import { AuthProp, loginPayload, loginProp, userPayload } from "./typed";
import { useMutation } from "@tanstack/react-query";

const register = async (payload: userPayload): Promise<AuthProp> => {
  const { data } = await axios.post("user/signup", payload, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return data;
};

export const useRegisetr = () => {
  return useMutation({
    mutationFn: (payload: userPayload) => register(payload),
  });
};

const login = async (payload: loginPayload): Promise<loginProp> => {
  const { data } = await axios.post("/auth/login", payload, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload: loginPayload) => login(payload),
    onSuccess: (data) => {
      console.log(data);

      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.data.userId.toString());
    },
  });
};
