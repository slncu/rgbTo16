export const isRGB = (values: Array<string>): boolean => {
  return values.every(v => parseInt(v, 10) <= 255)
}

export const isHEX = (value: string): boolean => {
  return /[0-9A-F|a-f]{6}/.test(value)
}
