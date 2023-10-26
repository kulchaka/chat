import { Button, Form, Input } from "antd"
import axios, { AxiosResponse } from "axios"
import { FC, useContext } from "react"
import { io } from "socket.io-client"
import { AppContext } from "../useReducer/useReducer"

export interface IFormJoin {
  roomID: string
  name: string
}

const backendHost = 'http://localhost:9999'

const FormJoin: FC = () => {

  const context = useContext(AppContext)


  const [form] = Form.useForm<IFormJoin>()
  const roomIdValue = Form.useWatch('roomID', form)
  const nameValue = Form.useWatch('name', form)

  const testConnect = () => {
    io(backendHost)
    form.resetFields()
  }

  const onFinish = async (values: IFormJoin) => {
    const { roomID, name } = values

    try {
      const response = await axios.post<AxiosResponse<string[]>>(`${backendHost}/rooms`, {
        roomID,
        name
      })
      context?.dispatch({
        type: 'IS_AUTH',
        payload: true
      })
      console.log("💡 ~ onFinish ~ response:", response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        name="roomID"
        rules={[{
          required: true,
          message: 'Please input Room ID!'
        }]}>
        <Input placeholder="Room ID" allowClear />
      </Form.Item>
      <Form.Item
        name="name"
        rules={[{
          required: true,
          message: 'Please input your Name!'
        }]}>
        <Input placeholder="Name" allowClear />
      </Form.Item>
      <Form.Item>
        <Button disabled={!(!!roomIdValue?.length && !!nameValue?.length)} type="primary" htmlType="submit">
          Sign in
        </Button>
      </Form.Item>
      <Button htmlType="button" onClick={testConnect}>
        TEST
      </Button>
    </Form>
  )
}

export default FormJoin