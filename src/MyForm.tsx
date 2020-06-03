import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'

import { Template } from './Template'

type FormDataType = {
  title: string
  name: string
  accountNumber: string
}
export const MyForm = () => {
  const [formData, setFormData] = useState<FormDataType>()
  const [form] = Form.useForm()

  const handleFinish = (values: any) => {
    console.log(values)
    setFormData(values)
  }
  if (formData) {
    return (
      <Template
        title={formData?.title}
        name={formData?.name}
        accountNumber={formData?.accountNumber}
      />
    )
  }
  return (
    <Form form={form} onFinish={handleFinish}>
      <Form.Item label="ข้อความด้านบน" name="title">
        <Input type="text" />
      </Form.Item>
      <Form.Item label="ชื่อ" name="name">
        <Input type="text" />
      </Form.Item>
      <Form.Item label="หมายเลขบัญชี" name="accountNumber">
        <Input type="number" />
      </Form.Item>
      <Button htmlType="submit">ตกลง</Button>
    </Form>
  )
}
