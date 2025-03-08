import { v4 as uuidv4 } from "uuid";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const useUserId = () => {
  const config = useRuntimeConfig();

  const expirationDays = Number(config.public.cookieExpirationDays) || 365;
  const cookieSecure = config.public.cookieSecure === true;

  const getUserId = (): string => {
    let userId = cookies.get("user_id");

    if (!userId) {
      userId = uuidv4();
      cookies.set("user_id", userId, {
        path: "/",
        maxAge: expirationDays * 24 * 60 * 60,
        secure: cookieSecure,
        sameSite: "strict",
      });
    }

    return userId;
  };

  return { getUserId };
};
