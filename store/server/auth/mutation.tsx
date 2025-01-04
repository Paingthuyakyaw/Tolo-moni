import { axios } from "@/store";
import { AuthProp, userPayload } from "./typed";
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
