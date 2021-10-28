import { RouteComponentProps } from "react-router"

export interface AppRoute {
  pageName: string
  path: string
  exact: boolean
  component: (props: AppRoutedPage) => JSX.Element
  routes?: AppRoute[]
}

export interface AppRoutedPage extends RouteComponentProps {
  pageName: string
  routes?: AppRoute[]
}
