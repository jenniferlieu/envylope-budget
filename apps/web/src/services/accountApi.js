import { getApi } from "./api";

export async function getAllAccounts() {
  return getApi("account");
}
