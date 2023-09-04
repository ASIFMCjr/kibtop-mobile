import React from 'react'

import {SegmentedControl} from '@/components/SegmentedControl'

import {CategoriesList, FiltersTypesEnum} from '@/constants/categories'

import {selectComponentBySelectType} from './utils'

export type FilterValueType = string | string[] | undefined | [number, number]
export interface IFilterValues {
  [key: string]: FilterValueType
}

interface Props {
  categoryIndex: number
  replaceListsWithRadio?: boolean
  values: IFilterValues
  onValueChange: (key: string, newValue: FilterValueType) => void
}

export const FiltersList: React.FC<Props> = ({
  categoryIndex,
  replaceListsWithRadio = false,
  values,
  onValueChange,
}) => {
  return (
    <>
      {CategoriesList[categoryIndex].filters.map(
        ({type, options, title, selectType, showIf, units}) => {
          if (showIf) {
            const value = values[showIf.filterName]

            if (!value && !showIf.default) {
              return null
            }

            if (typeof value === 'string' && !showIf.in.includes(value)) {
              return null
            }
          }

          const props = {
            options: options || [],
            halfWidth: type === FiltersTypesEnum.SELECT_HALF_WITH,
            title,
            onChange: (value: FilterValueType) => onValueChange(title, value),
            value: values[title],
            units,
          }

          let ComponentToRender = null

          if (type === FiltersTypesEnum.SEGMENTED) {
            ComponentToRender = SegmentedControl
          }

          if (
            [
              FiltersTypesEnum.SELECT,
              FiltersTypesEnum.SELECT_HALF_WITH,
            ].includes(type) &&
            selectType !== undefined
          ) {
            ComponentToRender = selectComponentBySelectType(
              selectType,
              replaceListsWithRadio,
            )
          }

          return ComponentToRender && <ComponentToRender {...props} />
        },
      )}
    </>
  )
}
