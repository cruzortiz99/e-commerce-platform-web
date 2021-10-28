import { useEffect, useState } from "react"

export interface ScreenDimensions {
  height: number
  width: number
  xs: boolean
  sm: boolean
  md: boolean
  l: boolean
  xl: boolean
}

class ScreenSize implements ScreenDimensions {
  width = 0
  height = 0
  xs: boolean
  sm: boolean
  md: boolean
  l: boolean
  xl: boolean
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
    this.xs = 540 > window.screen.width
    this.sm = 720 > window.screen.width
    this.md = 960 > window.screen.width
    this.l = 1140 > window.screen.width
    this.xl = 1140 <= window.screen.width
  }
}

export const useScreenDimension = function (): ScreenDimensions {
  const [screenDimensions, setScreenDimensions] = useState<ScreenDimensions>(
    new ScreenSize(window.screen.width, window.screen.height)
  )
  useEffect(() => {
    setScreenDimensions(
      new ScreenSize(window.screen.width, window.screen.height)
    )
  }, [window.screen.width, window.screen.height])
  return screenDimensions
}
