import { ConfigProvider } from "antd"
import { FC, useReducer } from "react"
import CenterContainer from "./components/CenterContainer"
import FormJoin from "./components/FormJoin"
import { theme } from "./helpers/constants"
import { AppContext, initialState, reducer } from "./useReducer/useReducer"

const App: FC = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CenterContainer>
      <ConfigProvider theme={theme} >
        <AppContext.Provider value={{ state, dispatch }}>
          {!state.isAuth && <FormJoin />}
        </AppContext.Provider>
      </ConfigProvider>
    </CenterContainer>
  )
}

export default App
