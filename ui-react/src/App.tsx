import { Button } from "antd"
import { io } from "socket.io-client"

function App() {

  const connectSocket = () => {
    io('http://localhost:9999/')
  }

  return (
    <>
      CHAT
      <Button onClick={connectSocket}>TEST</Button>
    </>
  )
}

export default App
