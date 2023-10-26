import { Dispatch, createContext } from "react"

export interface IState {
  isAuth: boolean
}

interface IContext {
  state: IState
  dispatch: Dispatch<Action>
}

export type Action = { type: 'IS_AUTH'; payload: boolean }

export const initialState: IState = {
  isAuth: false
}

export const AppContext = createContext<IContext | null>(null)

export const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case 'IS_AUTH':
      return {
        ...state,
        isAuth: action.payload
      }
    default:
      return state
  }
}