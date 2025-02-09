"use client"
import React from 'react'
import { Form, Input, Button, notification } from 'antd'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const StyledForm = styled(Form<FormValues>)`
  .ant-form-item-label > label {
    font-size: 16px;
    color: #2c3e50;
  }

  .ant-btn {
    width: 100%;
    background-color: #2c3e50;
    
    &:hover {
      background-color: #34495e !important;
    }
  }
`;

type FormValues = {
  name: string;
  email: string;
}

const ContactPage = () => {
  const [form] = Form.useForm<FormValues>();

  const onFinish = (values: FormValues) => {
    // Get existing contacts or initialize empty array
    const existingContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    
    // Add new contact
    const newContacts = [...existingContacts, values];
    
    // Save to localStorage
    localStorage.setItem('contacts', JSON.stringify(newContacts));
    
    // Show success notification
    notification.success({
      message: 'Success!',
      description: 'Your contact information has been saved.',
      placement: 'bottom',
    });

    // Reset form
    form.resetFields();
  };

  return (
    <Container>
      <StyledForm
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' }
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </StyledForm>
    </Container>
  )
}

export default ContactPage