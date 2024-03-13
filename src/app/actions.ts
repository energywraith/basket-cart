"use server";

import { AppMachineContext } from "@/context/AppMachineContext/types";

interface OnProcessCompleteResponse {
  success: boolean;
}

const errors = {
  noAPIURL: "You need to provide `API_URL` enviroment variable.",
  default: "Your order could not be completed.",
};

export async function onProcessComplete(
  data: AppMachineContext
): Promise<OnProcessCompleteResponse> {
  if (!process.env.API_URL) {
    throw new Error(errors.noAPIURL);
  }

  try {
    const response = await fetch(process.env.API_URL, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API: ${response.statusText}`);
    }

    const responseJSON = await response.json();

    if (!responseJSON.success) {
      throw new Error(errors.default);
    }

    return responseJSON;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw errors.default;
  }
}
