import { StyleProp, ViewStyle } from "react-native"

interface ButtonProps {
  width?: number | string,
  height?: number | string,
  containerStyle?: StyleProp<ViewStyle>,
  title: string,
  fontSize?: number,
  fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined,
  padding?: number,
  paddingTop?: number,
  paddingBottom?: number,
  paddingLeft?: number,
  paddingRight?: number,
  margin?: number,
  marginTop?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
  borderWidth?: number,
  borderColor?: string
}

export type { ButtonProps }