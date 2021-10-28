import appSuspenseWrapper from "./appSuspenseWrapper"
import { AppRoute } from "./index.d"
import { AppHome } from "./lazyPages"

export const AppRoutes: AppRoute[] = [
  {
    path: "/",
    pageName: "Home",
    exact: false,
    component: appSuspenseWrapper(AppHome)
  }
]
export default AppRoutes
