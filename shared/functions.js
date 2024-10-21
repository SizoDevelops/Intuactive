import { Dimensions, PixelRatio, Platform } from "react-native"

export const SLIDER_WIDTH = Dimensions.get("window").width
export const SLIDER_HEIGHT = Dimensions.get("window").height





const scale = SLIDER_WIDTH / 370;

export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}