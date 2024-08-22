"use server";

import { cookies } from "next/headers";

export const createAuthCookie = async (token) => {
  cookies().set("userAuth", "myToken", { secure: true });
};

export const deleteAuthCookie = async () => {
  cookies().delete("userAuth");
};