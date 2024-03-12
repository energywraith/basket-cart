"use server";

import { AppMachineContext } from "@/context/AppMachineContext/types";

interface OnProcessCompleteResponse {
  success: boolean;
}

export async function onProcessComplete(
  data: AppMachineContext
): Promise<OnProcessCompleteResponse> {
  if (!process.env.API_URL) {
    console.error("You need to provide `API_URL` enviroment variable.");
    return { success: false };
  }

  const response = await fetch(process.env.API_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error(response);
  }

  const responseJSON = await response.json();

  return responseJSON;
}
