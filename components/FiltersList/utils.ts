import {
  CheckboxSelect,
  ListSelect,
  RadioSelect,
  RangeSelect,
  SearchSelect,
} from '@/components/Select'
import {SelectTypesEnum} from '@/constants/categories'

export function selectComponentBySelectType(
  selectType: SelectTypesEnum,
  replaceListsWithRadio: boolean = false,
) {
  if (selectType === SelectTypesEnum.LIST && replaceListsWithRadio) {
    return RadioSelect
  }

  switch (selectType) {
    case SelectTypesEnum.RADIO:
      return RadioSelect
    case SelectTypesEnum.CHECKBOX:
      return CheckboxSelect
    case SelectTypesEnum.LIST:
      return ListSelect
    case SelectTypesEnum.SEARCH:
      return SearchSelect
    case SelectTypesEnum.RANGE:
      return RangeSelect
    default:
      return null
  }
}
