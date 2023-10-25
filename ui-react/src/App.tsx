import { Button, ConfigProvider, Form, Input } from "antd"
import { io } from "socket.io-client"

function App() {

  const [form] = Form.useForm()

  const testConnect = () => {
    io('http://localhost:9999/')
    form.resetFields()
  }

  const onFinish = (values: unknown) => {
    console.log("💡 ~ onFinish ~ values:", values)
  }

  return (
    <div className="block">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#272727",
          },
          components: {
            Button: {
              colorPrimary: "#000",

            },
          },
        }}
      >
        <Form
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
        >
          <Form.Item name="roomID" rules={[{ required: true, message: 'Please input Room ID!' }]}>
            <Input placeholder="Room ID" allowClear />
          </Form.Item>
          <Form.Item name="name" rules={[{ required: true, message: 'Please input your Name!' }]}>
            <Input placeholder="Name" allowClear />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>
          </Form.Item>
          <Button htmlType="button" onClick={testConnect}>
            TEST
          </Button>
        </Form>
      </ConfigProvider>
    </div>
  )
}

export default App
