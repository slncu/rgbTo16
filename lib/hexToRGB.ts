export const hexToRGB = (hex: string) => {
  const R = parseInt(hex.slice(0, 2), 16).toString()
  const G = parseInt(hex.slice(2, 4), 16).toString()
  const B = parseInt(hex.slice(4, 6), 16).toString()

  return {
    R,
    G,
    B
  }
}
