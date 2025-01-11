import { axios } from "@/store";
import { useQuery } from "@tanstack/react-query";

const getAllUsers = async (search?: string) => {
  //   console.log(search);

  const token = localStorage.getItem("token");
  const { data } = await axios.get(`user`, {
    params: { search: search || "" },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const useGetAllUsers = (search?: string) => {
  return useQuery({
    queryKey: ["all-users", search],
    queryFn: () => getAllUsers(search),
  });
};
