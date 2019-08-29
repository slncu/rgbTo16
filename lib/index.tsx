import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { rgbToHex } from './rgbToHex'
import { hexToRGB } from './hexToRGB'
import { isRGB, isHEX } from './validation'
import './style.scss'
const { useState } = React

const App = () => {
  const [rgb, setRGB] = useState({
    R: '00',
    G: '00',
    B: '00'
  })
  const [hex, setHEX] = useState('000000')

  const onBlurRGB = () => {
    if (!isRGB([rgb.R, rgb.G, rgb.B])) {
      return
    }
    setHEX(rgbToHex(rgb.R, rgb.G, rgb.B))
  }

  const onBlurHEX = () => {
    if (hex.length !== 6) {
      return
    }
    if (!isHEX(hex)) {
      return
    }

    setRGB(hexToRGB(hex))
  }

  return (
    <div className='wrapper'>
      <div className='rgb'>
        <div className='label-red'>
          <label htmlFor='red'>R</label>
          <input
            name='red'
            type='text'
            maxLength={3}
            onChange={e =>
              setRGB({
                R: e.target.value,
                G: rgb.G,
                B: rgb.B
              })
            }
            onBlur={onBlurRGB}
            value={rgb.R}
          />
        </div>
        <div className='label-green'>
          <label htmlFor='green'>G</label>
          <input
            name='green'
            type='text'
            maxLength={3}
            onChange={e =>
              setRGB({
                R: rgb.R,
                G: e.target.value,
                B: rgb.B
              })
            }
            onBlur={onBlurRGB}
            value={rgb.G}
          />
        </div>
        <div className='label-blue'>
          <label htmlFor='blue'>B</label>
          <input
            name='blue'
            type='text'
            maxLength={3}
            onChange={e =>
              setRGB({
                R: rgb.R,
                G: rgb.G,
                B: e.target.value
              })
            }
            onBlur={onBlurRGB}
            value={rgb.B}
          />
        </div>
      </div>
      <div className='hexadecimal'>
        <label htmlFor='hex'>HEX</label>
        <br />
        #
        <input
          name='hex'
          type='text'
          maxLength={6}
          value={hex}
          onChange={e => setHEX(e.target.value)}
          onBlur={onBlurHEX}
        />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
