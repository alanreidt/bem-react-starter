import { withBemMod } from '@bem-react/core'

import { cnButton } from '../index'

export interface IButtonThemeActionProps {
  theme?: 'action'
}

export const withButtonThemeAction = withBemMod<IButtonThemeActionProps>(cnButton(), {
  theme: 'action',
})
