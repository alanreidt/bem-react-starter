import { ReactType } from 'react'
import { IClassNameProps } from '@bem-react/core'
import { cn } from '@bem-react/classname'

export interface IButtonProps extends IClassNameProps {
  as?: ReactType
}

export const cnButton = cn('Button')
