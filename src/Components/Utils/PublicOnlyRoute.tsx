// @ts-nocheck
import { Navigate, Route } from "react-router-dom";

import TokenService from "../../services/token-service";

export default function PublicOnlyRoute({ children }): Route {
  return TokenService.hasAuthToken() ? <Navigate to={"/"} /> : children;
}
