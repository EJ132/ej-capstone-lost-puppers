// @ts-nocheck
import { Navigate, Route } from "react-router-dom";

import TokenService from "../../services/token-service";
import Login from "../Login/Login";

export default function PrivateRoute({ element, ...props }) {
  const Component = element;

  const result = (
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

  console.log(result);

  return <Route exact path="/help" element={<Login />} />;
}
