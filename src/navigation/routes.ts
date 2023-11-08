import { Route } from "../types/navigation.types";
import { lazy } from "react";

export const ROUTE_REQUEST: Route = {
  id: "ROUTE_REQUEST",
  path: "/",
  component: lazy(() => import("../pages/RequestPage")),
  exact: true
};

export const ROUTE_RESPONSE: Route = {
  id: "ROUTE_RESPONSE",
  path: "/response",
  component: lazy(() => import("../pages/ResponsePage")),
  exact: true
};

export const navigation = {
  routes: [ROUTE_REQUEST, ROUTE_RESPONSE]
};
