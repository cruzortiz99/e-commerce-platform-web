import { BehaviorSubject, Subscription } from "rxjs"

export abstract class StoreManagement<T> {
  protected _initialState: T
  public get initialState(): T {
    return this._initialState
  }
  protected set initialState(value: T) {
    this._initialState = value
  }
  subject: BehaviorSubject<T>
  abstract subscribe(setValue: (value: T) => void): Subscription
  abstract unsubscribe(): void
  abstract reset(): void
}
