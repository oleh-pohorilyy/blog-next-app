import { ThunkAction } from 'redux-thunk'

import { IAction } from './IAction'
import { IAppState } from './IAppState'

export type IThunkAction<ReturnType = void> = ThunkAction<
  Promise<ReturnType>,
  IAppState,
  unknown,
  IAction
>
