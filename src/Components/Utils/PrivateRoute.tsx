// @ts-nocheck
import { Route, Navigate } from "react-router-dom";
import TokenService from "../../services/token-service";

export default function PrivateRoute({ element, ...props }) {
  const Component = element;
  return (
    <Route
      {...props}
      render={(componentProps) =>
        TokenService.hasAuthToken() ? (
          <Component {...componentProps} />
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: componentProps.location },
            }}
          />
        )
      }
    />
  );
}
