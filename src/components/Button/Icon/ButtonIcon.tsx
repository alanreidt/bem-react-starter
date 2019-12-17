import React, { FC } from 'react'

import { ReactComponent as Icon } from '../../../logo.svg'
import { cnButton } from '../index'

export const ButtonIcon: FC = () => (
  <Icon width="30" className={ cnButton("Icon") } />
)
