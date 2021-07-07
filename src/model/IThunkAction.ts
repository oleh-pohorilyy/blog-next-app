import { ThunkAction } from 'redux-thunk'

import { IAction } from './IAction'
import { IAppState } from './IAppState'

export type IThunkAction = ThunkAction<
  Promise<void>,
  IAppState,
  unknown,
  IAction
>
