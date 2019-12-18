import React, { FC } from 'react'

import { ReactComponent as Logo } from '../../logo.svg'
import { classnames } from '@bem-react/classnames'
import { IIconProps, cnIcon } from './index'

export const Icon: FC<IIconProps> = ({
  className,
  ...props
}) => (
  <Icon className={ classnames(cnIcon(), className) }>
    <Logo {...props}/>
  </Icon>
)
