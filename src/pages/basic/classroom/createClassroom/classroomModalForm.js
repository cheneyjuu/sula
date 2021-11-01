import React from 'react';
import { CreateForm, Form } from 'sula';

export default () => {
  const config = {
    'mode': 'create',
    'container': {
      'type': 'div',
      'props': {
        'style': {
          'background': '#fff',
          'padding': '24px',
          'borderRadius': 2,
          'margin': '0 auto 72px',
          'maxWidth': 1000,
        },
      },
    },
    'itemLayout': {
      'labelCol': {
        'span': 6,
      },
      'wrapperCol': {
        'span': 8,
      },
    },
    'fields': [
      {
        'name': 'username',
        'label': '账 号',
        'field': {
          'type': 'input',
          'props': {
            'placeholder': '请输入账号',
          },
        },
        'rules': [
          {
            'required': true,
            'message': '该项为必填项',
          },
        ],
      },
      {
        'name': 'password',
        'label': '密 码',
        'field': {
          'type': 'input',
          'props': {
            'placeholder': '请输入密码',
          },
        },
        'rules': [
          {
            'required': true,
            'message': '该项为必填项',
          },
        ],
      },
      {
        'name': 'subSchoolName',
        'label': '分 校',
        'field': {
          'type': 'select',
          'props': {
            'placeholder': '请选择分校',
          },
        },
        'remoteSource': {
          'url': '/api/basicData/subSchoolList.json',
        },
        'rules': [
          {
            'required': true,
            'message': '该项为必填项',
          },
        ],
      },
    ],
    "submit": {
      "url": "/api/manage/add.json",
      "method": "post"
    },
  };

  return <CreateForm {...config} />
}
