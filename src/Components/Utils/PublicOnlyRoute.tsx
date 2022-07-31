// @ts-nocheck
import { Route, Navigate } from "react-router-dom";
import TokenService from "../../services/token-service";

export default function PublicOnlyRoute({ element, ...props }): Route {
  const Component = element;
  return (
    <Route
      {...props}
      render={(componentProps) =>
        TokenService.hasAuthToken() ? (
          <Navigate to={"/"} />
        ) : (
          <Component {...componentProps} />
        )
      }
    />
  );
}
