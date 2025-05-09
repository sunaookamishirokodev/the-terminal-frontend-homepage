import type { UserData } from "@/typings/tanstack";
import { useQuery } from "@tanstack/react-query";
import { api } from "./config";

export const fetchUser = () => api.get<UserData>("/users/@me");

export function useUserQuery(staleTime = 0) {
  return useQuery({
    queryFn: () => api.get<{ data: UserData }>("/users/@me"),
    queryKey: ["me"],
    staleTime,
  });
}
