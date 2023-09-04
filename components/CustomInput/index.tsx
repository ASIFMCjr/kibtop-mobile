import React from 'react'
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import {SvgProps} from 'react-native-svg'
import {colors} from '@/constants/colors'
import styles from './styles'

interface Props extends TextInputProps {
  Icon?: React.FC<SvgProps>
  RightIcon?: React.FC<SvgProps>
  onRightIconPress?: () => void
  placeholder: string
  sqared?: boolean
  halfWidth?: boolean
  CustomTextInputComponent?: React.FC<TextInputProps>
  keyboardType?: KeyboardTypeOptions
  value?: string | null
  onChangeText: (value: string) => void
  containerStyles?: ViewStyle[] | ViewStyle
  errorMessage?: string
  hasError?: boolean
}

export const CustomInput: React.FC<Props> = ({
  Icon,
  RightIcon,
  onRightIconPress,
  placeholder,
  sqared = false,
  halfWidth = false,
  CustomTextInputComponent = TextInput,
  keyboardType = 'default',
  value,
  onChangeText,
  containerStyles,
  errorMessage,
  hasError = false,
  ...rest
}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={[
          styles.container,
          containerStyles,
          sqared && styles.sqaredContainer,
          halfWidth && styles.halfWidthContainer,
          hasError && styles.hasErrorContainer,
        ]}>
        {Icon && <Icon />}
        <CustomTextInputComponent
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={colors.grayText}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          {...rest}
        />
        {RightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            <RightIcon />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  )
}
