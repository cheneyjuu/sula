import React from 'react';
import { CreateForm, Form } from 'sula';

export default () => {

  const config = {
    "mode": "create",
    "container": {
      "type": "div",
      "props": {
        "style": {
          "background": "#fff",
          "padding": "24px",
          "borderRadius": 2,
          "margin": "0 auto 72px",
          "maxWidth": 1000
        }
      }
    },
    "itemLayout": {
      "labelCol": {
        "span": 6
      },
      "wrapperCol": {
        "span": 8
      }
    },
    "fields": [
      {
        "name": "senderName",
        "label": "请输入新密码",
        "field": {
          "type": "input",
          "props": {
            "placeholder": "请输入新密码"
          }
        },
        "rules": [
          {
            "required": true,
            "message": "该项为必填项"
          }
        ]
      },
      {
        "name": "recipientName",
        "label": "再次确认输入",
        "field": {
          "type": "input",
          "props": {
            "placeholder": "再次确认输入"
          }
        },
        "rules": [
          {
            "required": true,
            "message": "该项为必填项"
          }
        ]
      }
    ],
    "submit": {
      "url": "/api/manage/add.json",
      "method": "post"
    },
  }

  return <CreateForm {...config} />

}
