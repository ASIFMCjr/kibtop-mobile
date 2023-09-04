import React from 'react'
import {ImageRequireSource} from 'react-native'
import {SvgProps} from 'react-native-svg'

import AllCategoriesIcon from '@/assets/icons/allCategoriesIcon.svg'

export interface ICategory {
  title: string
  iconImage: ImageRequireSource | React.FC<SvgProps>
  filters: IFilter[]
  titleForHeader?: string
}

export interface IFilter {
  title: string
  type: FiltersTypesEnum
  selectType?: SelectTypesEnum
  options?: string[]
  units?: string
  showIf?: {
    filterName: string
    in: string[]
    default?: boolean
  }
}

export enum SelectTypesEnum {
  RANGE,
  BUTTON,
  LOCATION,
  RADIO,
  LIST,
  CHECKBOX,
  SEARCH,
}

export enum FiltersTypesEnum {
  SELECT,
  SELECT_HALF_WITH,
  SEGMENTED,
}

export const CategoriesList: ICategory[] = [
  {
    title: 'All categories',
    iconImage: AllCategoriesIcon,
    filters: [],
  },
  {
    title: 'Real estate',
    iconImage: require('@/assets/icons/realEstateCategoryIcon.png'),
    filters: [
      {
        title: 'Proprety types',
        type: FiltersTypesEnum.SELECT,
        selectType: SelectTypesEnum.LIST,
        options: ['Apartments', 'House', 'Land', 'Other'],
      },
      {
        title: '',
        type: FiltersTypesEnum.SEGMENTED,
        options: ['Buy', 'Rent'],
      },
      {
        title: '',
        type: FiltersTypesEnum.SEGMENTED,
        options: ['All', 'Resale', 'New'],
      },
      {
        title: 'Rooms',
        type: FiltersTypesEnum.SELECT_HALF_WITH,
        selectType: SelectTypesEnum.CHECKBOX,
        options: ['Studio', '1+1', '2+1', '2+2', '3+1', '4+1 and more'],
        showIf: {
          filterName: 'Proprety types',
          in: ['Apartments', 'House'],
          default: true,
        },
      },
      {
        title: 'Space',
        type: FiltersTypesEnum.SELECT_HALF_WITH,
        selectType: SelectTypesEnum.RANGE,
        showIf: {
          filterName: 'Proprety types',
          in: ['Land', 'Other'],
        },
        units: 'm²',
      },
      {
        title: 'Price',
        type: FiltersTypesEnum.SELECT_HALF_WITH,
        selectType: SelectTypesEnum.RANGE,
        units: '$',
      },
    ],
  },
  {
    title: 'Auto',
    iconImage: require('@/assets/icons/autoCategoryIcon.png'),
    filters: [
      {
        title: 'Car type',
        type: FiltersTypesEnum.SELECT,
        selectType: SelectTypesEnum.LIST,
        options: ['Cars', 'Other technique'],
      },
      {
        title: 'Brand',
        type: FiltersTypesEnum.SELECT,
        selectType: SelectTypesEnum.SEARCH,
        options: ['Buy', 'Rent'],
      },
      {
        title: 'Millage',
        type: FiltersTypesEnum.SELECT,
        selectType: SelectTypesEnum.RANGE,
        units: 'km',
      },
      {
        title: 'Year',
        type: FiltersTypesEnum.SELECT_HALF_WITH,
        selectType: SelectTypesEnum.RANGE,
      },
      {
        title: 'Price',
        type: FiltersTypesEnum.SELECT_HALF_WITH,
        selectType: SelectTypesEnum.RANGE,
        units: '$',
      },
    ],
  },
  {
    title: 'Job',
    iconImage: require('@/assets/icons/jobCategoryIcon.png'),
    filters: [
      {
        title: '',
        type: FiltersTypesEnum.SEGMENTED,
        options: ['look for job', 'look for employee'],
      },
      {
        title: 'Profession',
        type: FiltersTypesEnum.SELECT,
        selectType: SelectTypesEnum.LIST,
        options: [
          'Retail/sales/purchasing',
          'Logisitcs/Warehouse/Delivery',
          'Construction / finishing works',
          'Administrative staff / HR / Secretariat',
          'Security/security',
          'Cleaning / Home staff',
          'Beauty / Fitness / Sports',
          'Education/translation',
          'Culture / Arts / Entertaiment',
          'Medicine / Pharmacy',
          'IT / computers',
          'Banking / Finance / Insurance / Jurisprudance',
          'Real estate',
          'Advertising / Design / PR',
          'Production / Working specialtes',
          'Work aboard',
          'Accounting',
          'Hotel and restaurant business',
          'Service stations / Car washes',
          'Part-time employment',
          'Other occupations',
        ],
      },
      {
        title: 'Employment',
        type: FiltersTypesEnum.SELECT_HALF_WITH,
        selectType: SelectTypesEnum.RADIO,
        options: ['Full time', 'Partial', 'Remote'],
      },
      {
        title: 'Salary',
        type: FiltersTypesEnum.SELECT_HALF_WITH,
        selectType: SelectTypesEnum.RANGE,
        units: '$',
      },
    ],
  },
  {
    title: 'Services',
    iconImage: require('@/assets/icons/servicesCategoryIcon.png'),
    filters: [
      {
        title: 'Service type',
        type: FiltersTypesEnum.SELECT,
        selectType: SelectTypesEnum.LIST,
        options: [
          'Cleaning',
          'Business',
          'Domestic service',
          'Beauty / Health',
          'Education',
          'Transport',
          'Construction / Repair',
          'Other',
        ],
      },
    ],
  },
  {
    title: 'For kids',
    iconImage: require('@/assets/icons/kidsCategoryIcon.png'),
    filters: [
      {
        title: 'Goods type',
        type: FiltersTypesEnum.SELECT,
        selectType: SelectTypesEnum.LIST,
        options: [
          "Children's clothing",
          "Children's shoes",
          'Baby stollers / Transport',
          "Children's toys / Furniture",
          'Other goods for children',
        ],
      },
    ],
  },
  {
    title: 'Electronics',
    iconImage: require('@/assets/icons/electronicsCategoryIcon.png'),
    filters: [
      {
        title: 'Goods type',
        type: FiltersTypesEnum.SELECT,
        selectType: SelectTypesEnum.LIST,
        options: [
          'Phones and accessories',
          'Appliances',
          'Computers / Tables / Games',
          'TV / Photo / Video / Audio',
          'Other technique',
        ],
      },
    ],
  },
  {
    title: 'Fashion and style',
    titleForHeader: 'Fashion\nand style',
    iconImage: require('@/assets/icons/fashionAndStyleCategoryIcon.png'),
    filters: [
      {
        title: 'Goods type',
        type: FiltersTypesEnum.SELECT,
        selectType: SelectTypesEnum.LIST,
        options: [
          "Women's clothing",
          "Women's shoes",
          "Children's clothes",
          "Children's shoes",
          "Men's clothing",
          'Accessories',
        ],
      },
    ],
  },
  {
    title: 'House and garden',
    titleForHeader: 'House\nand garden',
    iconImage: require('@/assets/icons/houseAndGardenCategoryIcon.png'),
    filters: [
      {
        title: 'Goods type',
        type: FiltersTypesEnum.SELECT,
        selectType: SelectTypesEnum.LIST,
        options: [
          'Furniture',
          'Food / Drinks',
          'Garden',
          'Interior items',
          'Construction / Renovation',
          'Other household goods',
        ],
      },
    ],
  },
]
