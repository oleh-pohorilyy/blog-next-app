import { HYDRATE } from 'next-redux-wrapper'
import { postsActions } from 'redux/actions'

const hydrateAction = (payload: any) => ({ type: HYDRATE, payload })

const actions = { ...postsActions, hydrateAction }

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
type ActionCreatorsTypes<T extends { [key: string]: (...args: any[]) => any }> =
  ReturnType<PropertiesTypes<T>>
export type IAction = ActionCreatorsTypes<typeof actions>
