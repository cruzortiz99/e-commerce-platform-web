/* Core CSS required for Ionic components to work properly */
import { IonApp, IonRouterOutlet } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import "@ionic/react/css/core.css"
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"
import React from "react"
import ReactDOM from "react-dom"
import { Route } from "react-router"
import "./assets/css/App.css"
import "./assets/css/index.css"
import reportWebVitals from "./reportWebVitals"
import routes from "./router"

ReactDOM.render(
  <React.StrictMode>
    <IonReactRouter>
      <IonRouterOutlet>
        <IonApp>
          {routes.map((route, key) => (
            <Route
              key={key}
              exact={route.exact}
              render={(props) => (
                <route.component
                  {...props}
                  pageName={route.pageName}
                  routes={route.routes}></route.component>
              )}
            />
          ))}
        </IonApp>
      </IonRouterOutlet>
    </IonReactRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
