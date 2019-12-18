import React, { FC } from 'react'

import { classnames } from '@bem-react/classnames'
import { IButtonProps, cnButton } from './index'

export const Button: FC<IButtonProps> = ({
  children,
  className,
  as: Component = 'button',
  ...props
}) => (
  <Component {...props} className={ classnames(cnButton(), className) }>
    {children}
  </Component>
)
