import { Button, Form, Input } from "antd"
import axios from "axios"
import { FC } from "react"
import { io } from "socket.io-client"

interface IFormJoin {
  roomID: string
  name: string
}

const FormJoin: FC = () => {

  const [form] = Form.useForm<IFormJoin>()
  const roomIdValue = Form.useWatch('roomID', form)
  const nameValue = Form.useWatch('name', form)

  const testConnect = () => {
    io('http://localhost:9999/')
    form.resetFields()
  }

  const onFinish = (values: IFormJoin) => {
    console.log("💡 ~ onFinish ~ values:", values)
    const { roomID, name } = values
    axios.post("/", {
      roomID,
      name
    })
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