import { ReactType } from 'react'
import { IClassNameProps } from '@bem-react/core'
import { cn } from '@bem-react/classname'

export interface IIconProps extends IClassNameProps {
  as?: ReactType
}

export const cnIcon = cn('Icon')
