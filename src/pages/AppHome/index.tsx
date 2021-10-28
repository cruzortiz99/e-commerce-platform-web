import React from "react"
import { AppRoutedPage } from "../../router/index.d"
import AppHomeView, { PrimaryMenuItems } from "./view"
import { americanFootball, carSport, hammer, pizza } from "ionicons/icons"

function AppHome(props: AppRoutedPage): JSX.Element {
  const menuItems: PrimaryMenuItems[] = [
    { label: "4° Floor", route: "/4", icon: hammer },
    { label: "3° Floor", route: "/3", icon: pizza },
    { label: "2° Floor", route: "/2", icon: carSport },
    { label: "1° Floor", route: "/", icon: americanFootball }
  ]
  return (
    <AppHomeView
      {...props}
      menuItems={menuItems.map((item) => ({
        ...item,
        selected: props.location.pathname === item.route
      }))}
    />
  )
}

export default AppHome
