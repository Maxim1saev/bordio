import { useContext } from "react";

import { AuthContext } from "./context";

export const useAuth = () => {
  const authValue: any = useContext(AuthContext);

  return authValue;
};
