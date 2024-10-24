import { Dimensions} from "react-native"

export const SLIDER_WIDTH = Dimensions.get("window").width
export const SLIDER_HEIGHT = Dimensions.get("window").height





const scale = SLIDER_WIDTH / 412;

export function normalize(size) {8
  const newSize = size * scale 
  
    return Math.round(newSize)
  
}