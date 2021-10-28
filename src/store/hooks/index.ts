import { useEffect, useRef, useState } from "react"
import { Observable } from "rxjs"

export function useObservable<T, R extends Observable<T>>(
  observable: R,
  initialValue?: T
): [T | undefined, R] {
  const [value, setValue] = useState(initialValue)
  const refObservable = useRef(observable)
  useEffect(() => {
    const subscription = refObservable.current.subscribe(setValue)
    return () => {
      subscription.unsubscribe()
    }
  }, [])
  return [value, refObservable.current]
}
