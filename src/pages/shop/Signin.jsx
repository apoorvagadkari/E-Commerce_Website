import React from "react";
import {useDispatch} from 'react-redux'
//import { registerUser } from "../../post";

import { useState } from 'react'
//Antdesign
import { Button, Form, Input } from 'antd';

//const dispatch=useDispatch()
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const Signin = () => {
    const [Username, setName] = useState("");
const [Email, setEmail] = useState("");
const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
    'http://localhost:3000/Signin', {
        method: "post",
        body: JSON.stringify({ Username, Email }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    result = await result.json();
    console.warn(result);
    if (result) {
        alert("Data saved succesfully");
        setEmail("");
        setName("");
    }
};

         // Remaining form Data
    //mongodb+srv://mattOsuch:brainhub123@cluster0-jlasm.mongodb.net/test
 
   return(
  <Form

  method="post"
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      //value={Username} onChange={(e) => setName(e.target.value)}
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      //value={Email} onChange={(e) => setEmail(e.target.value)}
      rules={[
        {
          required: true,
          message: 'Please input your email',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" >
        Submit
      </Button>
      
    </Form.Item>
  </Form>
    )
} ;
