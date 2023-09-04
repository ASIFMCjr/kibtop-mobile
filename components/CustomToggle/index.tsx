import SwitchToggle from 'react-native-switch-toggle'
import {colors} from '@/styles/colors'
import React from 'react'

interface CustomToggleProps {
  isEnabled: boolean
  toggleSwitch: () => void
}

const CustomToggle = ({isEnabled, toggleSwitch}: CustomToggleProps) => {
  return (
    <SwitchToggle
      switchOn={isEnabled}
      onPress={toggleSwitch}
      circleColorOff={colors.blue}
      circleColorOn={colors.blue}
      backgroundColorOn={colors.lightGray}
      backgroundColorOff={colors.lightGray}
      containerStyle={{
        width: 52,
        height: 30,
        borderRadius: 20,
        padding: 5,
      }}
      circleStyle={{
        width: 22,
        height: 22,
        borderRadius: 20,
      }}
    />
  )
}

export default CustomToggle
