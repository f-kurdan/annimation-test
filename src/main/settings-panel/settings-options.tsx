import React, { useRef } from 'react'
import OpacityInput from './settings-options/opacity-input'
import ScaleInput from './settings-options/scale-input'
import TranslateInput from './settings-options/translate-input'

const SettingsOptions = () => {
  return (
    <ul className='settings-panel__options'>
      <li>
        <TranslateInput axis='X' />
      </li>
      <li>
        <TranslateInput axis='Y' />
      </li>
      <li>
        <OpacityInput />
      </li>
      <li>
        <ScaleInput />
      </li>
    </ul>
  )
}

export default SettingsOptions