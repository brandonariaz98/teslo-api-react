import { tesloApi } from "@/api/tesloApi";
import type { AuthResponse } from "../interface/auth.response";

export const registerAction = async (
  email: string,
  password: string,
  fullName: string,
): Promise<AuthResponse> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>("/auth/register", {
      email,
      password,
      fullName,
    });

    return data;
  } catch (error) {
    throw error;
  }
};
