import React, {useEffect, useRef} from 'react'
import {DeviceEventEmitter, EventSubscription} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {SelectButton} from '@/components/Select'

interface Props {
  options: string[]
  title: string
  value: string
  onChange: (value: string | undefined) => void
}

export const ListSelect: React.FC<Props> = ({
  title,
  options,
  value,
  onChange,
}) => {
  const subscriptionRef = useRef<EventSubscription>()
  const resetFilterSubscriptionRef = useRef<EventSubscription>()
  const eventNameRef = useRef<string>()

  const navigation = useNavigation()

  useEffect(() => {
    subscriptionRef.current?.remove()
    onChange(undefined)

    eventNameRef.current =
      'LIST_SELECT_ON_CHANGE_EVENT_' +
      title
        .split(' ')
        .map(x => x.toUpperCase())
        .join('_')

    subscriptionRef.current = DeviceEventEmitter.addListener(
      eventNameRef.current,
      handleChange,
    )

    resetFilterSubscriptionRef.current = DeviceEventEmitter.addListener(
      'RESET_FILTERS',
      () => {
        onChange(undefined)
      },
    )

    return () => {
      subscriptionRef.current?.remove()
      resetFilterSubscriptionRef.current?.remove()
    }
  }, [title, options])

  function handleChange(index: number) {
    onChange(options[index])
  }

  return (
    <SelectButton
      title={value ?? title}
      onPress={() =>
        navigation.navigate('ListSelectListScreen', {
          title,
          data: options,
          eventName: eventNameRef.current,
        })
      }
    />
  )
}
