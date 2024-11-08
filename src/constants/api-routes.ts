import controllers from "@/constants/controllers";

let API_ROUTES = {
  AUTH: {
    root: controllers.AUTH,
    LOGIN: "login",
    LOGOUT: "Logout",
    REGISTER: "register",
    RESET_PASSWORD: "reset-password",
    FORGET_PASSWORD: "forgot-password",
  },
} as const;

const controllersArr = Object.entries(API_ROUTES).map(
  ([controllerKey, { root, ...routes }]) => {
    const routesArr = Object.entries(routes);
    const routesPrefixed = Object.fromEntries(
      routesArr.map(([routeKey, route]) => [routeKey, `${root}/${route}`])
    );
    return [controllerKey, { ...routesPrefixed, root }];
  }
);
API_ROUTES = Object.fromEntries(controllersArr) as typeof API_ROUTES;

export default API_ROUTES;
