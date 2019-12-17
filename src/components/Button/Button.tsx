import React, { FC } from 'react'

import { IButtonProps, cnButton } from './index'

export const Button: FC<IButtonProps> = ({
  children,
  className,
  as: Component = 'button',
  ...props
}) => (
  <Component {...props} className={ cnButton({}, [className]) }>
    {children}
  </Component>
)
