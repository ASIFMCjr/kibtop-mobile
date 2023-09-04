import React, {ReactNode} from 'react'
import {
  DeviceEventEmitter,
  EventSubscription,
  Keyboard,
  Text,
  View,
} from 'react-native'
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet'
import {SvgProps} from 'react-native-svg'

import {Button} from '@/components/Button'
import {SelectButton, SmallSelectButton} from '@/components/Select'
import {BaseSelectHandle} from './components/Handle'

import styles from './styles'

interface Props {
  title: string
  children: ReactNode
  halfWidth?: boolean
  snapPoints?: number[] | string[]
  small?: boolean
  SmallButtonIcon?: React.FC<SvgProps>
  value?: string | null
  showValue?: boolean
  hasPrefix?: boolean
  validateBeforeSubmit?: () => boolean
  onResetFilter?: () => void
  headerTitle?: string
}

export class BaseSelect extends React.Component<Props, {}> {
  private keyboardDidHideSubscription: EventSubscription | undefined
  private resetFilterSubscription: EventSubscription | undefined
  private modalRef: React.RefObject<BottomSheetModal>

  constructor(props: Props) {
    super(props)

    this.modalRef = React.createRef<BottomSheetModal>()
  }

  componentDidMount() {
    this.keyboardDidHideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      this.handleKeyboardHide.bind(this),
    )

    this.resetFilterSubscription = DeviceEventEmitter.addListener(
      'RESET_FILTERS',
      () => {
        this.props.onResetFilter?.()
      },
    )
  }
  componentWillUnmount() {
    this.keyboardDidHideSubscription?.remove()
    this.resetFilterSubscription?.remove()
  }

  public close() {
    this.modalRef.current?.dismiss()
  }

  public open() {
    this.modalRef.current?.present()
  }

  private handleKeyboardHide() {
    this.modalRef.current?.snapToIndex(0)
  }

  render() {
    const {
      snapPoints = ['60%'],
      children,
      title,
      halfWidth = false,
      small = false,
      SmallButtonIcon,
      value,
      showValue = true,
      hasPrefix = false,
      validateBeforeSubmit,
      headerTitle,
    } = this.props

    const valueWithPrefix = value ? [title, value].join(': ') : title
    const valueString = hasPrefix ? valueWithPrefix : value || title
    const buttonTitle = showValue ? valueString : title

    return (
      <>
        <BottomSheetModal
          snapPoints={snapPoints}
          ref={this.modalRef}
          backdropComponent={props => (
            <BottomSheetBackdrop
              {...props}
              opacity={0.3}
              appearsOnIndex={0}
              disappearsOnIndex={-1}
            />
          )}
          handleComponent={BaseSelectHandle}>
          <View style={{flex: 1, paddingBottom: 35}}>
            <View style={styles.modalHeaderContainer}>
              <Text style={styles.modalHeaderTitle}>
                {headerTitle ?? title}
              </Text>
            </View>
            {children}
            <Button
              onPress={() => {
                if (validateBeforeSubmit && !validateBeforeSubmit()) {
                  return
                }

                this.close()
              }}
              title={'Apply'}
            />
          </View>
        </BottomSheetModal>
        {small && SmallButtonIcon ? (
          <SmallSelectButton
            title={buttonTitle}
            Icon={SmallButtonIcon}
            onPress={this.open.bind(this)}
          />
        ) : (
          <SelectButton
            title={buttonTitle}
            onPress={this.open.bind(this)}
            halfWidth={halfWidth}
          />
        )}
      </>
    )
  }
}
