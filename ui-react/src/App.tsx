import { ConfigProvider } from "antd"

import { FC } from "react"
import CenterContainer from "./components/CenterContainer"
import FormJoin from "./components/Form"
import { theme } from "./helpers/constants"

const App: FC = () => {
  return (
    <CenterContainer>
      <ConfigProvider theme={theme} >
        <FormJoin />
      </ConfigProvider>
    </CenterContainer>
  )
}

export default App
