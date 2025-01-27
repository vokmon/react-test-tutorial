import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetProfile(userId: string) {
  return useQuery({
    queryKey: ["useGetProfile", userId],
    queryFn: async () => {
      const url = `https://jsonplaceholder.typicode.com/users/${userId}`
      const result = await axios.get(url);
      return result.data;
    },
  });
}
