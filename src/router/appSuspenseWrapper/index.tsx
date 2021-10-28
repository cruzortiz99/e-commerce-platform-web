import React, { Suspense } from "react"
import { AppRoutedPage } from "../index.d"

function appSuspenseWrapper(
  Component?: (props: AppRoutedPage) => JSX.Element | null
) {
  return (props: AppRoutedPage): JSX.Element => (
    <Suspense fallback={<h1>Error Loading Page</h1>}>
      {Component && <Component {...props} />}
    </Suspense>
  )
}
export default appSuspenseWrapper
