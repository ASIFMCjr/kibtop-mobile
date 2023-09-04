import React from 'react'
import {SvgProps} from 'react-native-svg'

interface Props {
  size: number
  focused: boolean
  FocusedIcon: React.FC<SvgProps>
  DefaultIcon: React.FC<SvgProps>
}

export const TabBarIcon: React.FC<Props> = ({
  size,
  focused,
  FocusedIcon,
  DefaultIcon,
}) => {
  if (focused) {
    return <FocusedIcon width={size} />
  }

  return <DefaultIcon width={size} />
}
