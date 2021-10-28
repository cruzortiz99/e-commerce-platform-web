import { BehaviorSubject, Subscription } from "rxjs"
import { StoreManagement } from "../index.d"

export class CountStore extends StoreManagement<number> {
  private static _store?: CountStore
  public static get store(): CountStore | undefined {
    return CountStore._store
  }
  private static set store(value: CountStore | undefined) {
    CountStore._store = value
  }

  static init(value: number): CountStore {
    if (!CountStore.store) {
      CountStore.store = new CountStore(value)
    }
    return CountStore.store
  }

  private constructor(initialState: number) {
    super()
    this.initialState = initialState
    this.subject = new BehaviorSubject<number>(initialState)
  }
  subscribe(setValue: (value: number) => void): Subscription {
    const subscription = this.subject.subscribe(setValue)
    return subscription
  }
  reset(): void {
    this.subject.next(this.initialState)
  }
  unsubscribe(): void {
    this.subject.complete()
    this.subject.unsubscribe()
  }
}

export default CountStore.init(0)
