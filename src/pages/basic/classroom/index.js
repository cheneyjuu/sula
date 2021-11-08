import React from 'react';
import { QueryTable } from 'sula';

export default () => {
  const formFields = [
    {
      'name': 'cno',
      'label': '编码',
      'field': {
        'type': 'input',
        'props': {
          'placeholder': '请输入编码',
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
      'name': 'cname',
      'label': '名称',
      'field': {
        'type': 'input',
        'props': {
          'placeholder': '请输入名称',
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
      name: 'addr',
      label: '教室地址',
      field: 'input',
    },
    {
      name: 'branchschool',
      label: '教学点',
      field: 'input',
    },
    {
      name: 'classSeat',
      label: '座位排、列',
      field: 'input',
    },
    {
      name: 'seated',
      label: '保留座位',
      field: 'input',
    },
  ];

  const config = {
    "layout": "horizontal",
    'rowKey': 'id',
    'columns': [
      {
        'key': 'id',
        'title': '序号',
        'sorter': true,
      },
      {
        'key': 'cno',
        'title': '编码',
      },
      {
        'key': 'cname',
        'title': '名称',
      },
      {
        'key': 'addr',
        'title': '教室地址',
      },
      {
        'key': 'branchschool',
        'title': '教学点',
      },
      {
        'key': 'classSeat',
        'title': '座位排、列',
      },
      {
        'key': 'seated',
        'title': '保留座位',
      },
      {
        'key': 'ison',
        'title': '状态',
        'render': {
          'type': 'tag',
          'props': {
            'children': 'OPEN',
            // "color": '#{text === "1" ? "#2db7f5" : "#f50"}'
          },
        },
      },
      {
        'key': 'operator',
        'title': '操作',
        'render': [
          {
            'type': 'icon',
            'props': {
              'type': 'edit',
            },
            'action': {
              'type': 'route',
              'path': '/form/card/edit/#{record.id}',
            },
          },
          {
            'type': 'icon',
            'props': {
              'type': 'delete',
            },
            'tooltip': '删除',
            'confirm': '确定要删除吗？',
            'visible': '#{record.id % 3 === 0}',
            'action': [
              {
                'type': 'request',
                'url': '/api/manage/delete.json',
                'method': 'POST',
                'params': {
                  'rowKeys': '#{record.id}',
                },
              },
              'refreshtable',
            ],
          },
        ],
      },
    ]
  };

  const queryFields = [
    {
      'name': 'cname',
      'label': '名称',
      'field': {
        'type': 'input',
        'props': {
          'placeholder': '请输入名称',
        },
      },
      "itemLayout": {
        labelCol: {span: 4},
        labelAlign: "left"
      }
    },
    {
      'name': 'branchschool',
      'label': '教学点',
      'field': {
        'type': 'input',
        'props': {
          'placeholder': '请输入教学点',
        },
      },
    },
  ]

  const remoteDataSource = {
    url: '/api/classroom.json',
    method: 'POST',
    convertParams({ params }) {
      return {
        ...params,
      };
    },
    converter({ data }) {
      console.log(data)
      return {
        list: data.results.map((item, index) => {
          console.log(item);
          return {
            ...item,
            id: item.id,
            classSeat: `${item.row}、${item.col}`
          };
        }),
        total: 10
      };
    },
  };

  const actions =  [
    {
      type: 'button',
      props: {
        children: '新增',
        type: 'primary',
      },
      action: [{
        type: 'modalform',
        title: '新建教室',
        container: {
          type: 'card',
        },
        width: 1200,
        fields: formFields,
        submit: {
          url: 'https://www.mocky.io/v2/5ed7a8b63200001ad9274ab5',
          method: 'post',
        },
      }],
    },
  ]

  return <QueryTable
    fields={queryFields}
    remoteDataSource={remoteDataSource}
    actionsRender={actions}
    layout={'horizontal'}
    {...config} />;
}
