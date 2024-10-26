import React from 'react'
import Svg, { Path } from 'react-native-svg'

export default function HomeIcon({strokeWidth, strokeColor}) {
  return (
    <Svg width="34" height="34" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M8.02091 18.9584L26.2501 8.75006M23.698 34.2709H24.0626C25.512 23.1608 28.7134 12.3507 33.5476 2.24297L33.9209 1.45839L33.5417 1.07922L32.7572 1.45256C22.6494 6.28671 11.8393 9.4881 0.729248 10.9376V11.3021L8.02091 18.5938V29.8959H8.3855L10.9726 27.4313C11.9918 26.4612 13.1244 25.6175 14.3457 24.9186L23.698 34.2709Z" stroke={strokeColor} strokeWidth={2}/>
    </Svg>
  )
}