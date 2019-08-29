import { rgbToHex } from '../lib/rgbToHex'
import { hexToRGB } from '../lib/hexToRGB'
import { isRGB, isHEX } from '../lib/validation'

describe('function: rbgToHex', () => {
  it('should return two digit number when input number is one digit', () => {
    const red = '1'
    const green = '2'
    const blue = '3'

    expect(rgbToHex(red, green, blue)).toBe('010203')
  })
})

describe('function: hexToRGB', () => {
  it('should return decimal number', () => {
    const hex = 'ffffff'
    expect(hexToRGB(hex)).toStrictEqual({
      red: '255',
      green: '255',
      blue: '255'
    })
  })
})

describe('function: isRGB', () => {
  it('should return true when each input number is not greater than 255', () => {
    const values = ['0', '0', '0']
    expect(isRGB(values)).toBeTruthy()
  })

  it('should return false when some input number is greater than 255', () => {
    const values = ['256', '0', '0']
    expect(isRGB(values)).toBeFalsy()
  })
})

describe('function: isHEX', () => {
  it('should return true when input number is hexadecimal number', () => {
    const value = 'ff0011'
    expect(isHEX(value)).toBeTruthy()
  })

  it('should return false when input number is not hexadecimal number', () => {
    const value = 'ff0あ11'
    expect(isHEX(value)).toBeFalsy()
  })
})
