import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonSplitPane,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react"
import { ellipsisVertical } from "ionicons/icons"
import React from "react"
import { AppRoutedPage } from "../../../router/index.d"
import { useScreenDimension } from "../../../utils/hooks"

export interface PrimaryMenuItems {
  label: string
  route: string
  icon?: string
  selected?: boolean
}

export interface AppHomeViewProps extends AppRoutedPage {
  menuItems?: PrimaryMenuItems[]
}

function AppHomeView(props: AppHomeViewProps): JSX.Element {
  const screenDimensions = useScreenDimension()
  return (
    <IonSplitPane content-id="main-content">
      <IonMenu side="start" menuId="primary-menu" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Elevator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {props.menuItems?.map((menuItem, key) => (
              <IonItem key={key} routerLink={menuItem.route}>
                {menuItem.icon && <IonIcon slot="start" icon={menuItem.icon} />}
                <IonText
                  style={menuItem.selected ? { fontWeight: "bold" } : {}}>
                  {menuItem.label}
                </IonText>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonMenu>
      <IonMenu side="end" menuId="utility-menu" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Utils</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>App Name</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonCol>
              content
              {props.routes?.map((page, key) => (
                <page.component
                  {...props}
                  key={key}
                  pageName={page.pageName}></page.component>
              ))}
            </IonCol>
          </IonGrid>
        </IonContent>
        {screenDimensions.md && (
          <IonFooter>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton menu="primary-menu" autoHide={false} />
              </IonButtons>
              <IonButtons slot="end">
                <IonButton>
                  <IonMenuButton menu="utility-menu" autoHide={false}>
                    <IonIcon icon={ellipsisVertical} />
                  </IonMenuButton>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonFooter>
        )}
      </IonPage>
    </IonSplitPane>
  )
}

export default React.memo(AppHomeView)
