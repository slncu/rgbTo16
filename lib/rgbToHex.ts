export const rgbToHex = (red: string, green: string, blue: string) => {
  let r = parseInt(red)
    .toString(16)
    .padStart(2, '0')
  let g = parseInt(green)
    .toString(16)
    .padStart(2, '0')
  let b = parseInt(blue)
    .toString(16)
    .padStart(2, '0')

  return `${r}${g}${b}`
}
