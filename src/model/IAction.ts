import { postsActions } from 'redux/actions'

const actions = { ...postsActions }

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
type ActionCreatorsTypes<T extends { [key: string]: (...args: any[]) => any }> =
  ReturnType<PropertiesTypes<T>>
export type IAction = ActionCreatorsTypes<typeof actions>
