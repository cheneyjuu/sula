import React from 'react';
import { QueryTable } from 'sula';

export default () => {
  const formFields = [
    {
      'name': 'subSchoolCode',
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
      'name': 'subSchoolName',
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
      name: 'subSchoolAddress',
      label: '教室地址',
      field: 'input',
    },
    {
      name: 'subSchoolPosition',
      label: '教学点',
      field: 'input',
    },
    {
      name: 'classSeat',
      label: '座位排、列',
      field: 'input',
    },
    {
      name: 'remainSeat',
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
        'key': 'subSchoolCode',
        'title': '编码',
      },
      {
        'key': 'subSchoolName',
        'title': '名称',
      },
      {
        'key': 'subSchoolAddress',
        'title': '教室地址',
      },
      {
        'key': 'subSchoolPosition',
        'title': '教学点',
      },
      {
        'key': 'classSeat',
        'title': '座位排、列',
      },
      {
        'key': 'remainSeat',
        'title': '保留座位',
      },
      {
        'key': 'status',
        'title': '状态',
        'render': {
          'type': 'tag',
          'props': {
            'children': '#{text}',
            'color': '#{text === "using" ? "#f50" : text === "valid" ? "#87d068" : "#2db7f5"}',
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
      'name': 'subSchoolName',
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
      'name': 'subSchoolPosition',
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
    url: 'https://randomuser.me/api',
    method: 'GET',
    convertParams({ params }) {
      return {
        results: params.pageSize,
        ...params,
      };
    },
    converter({ data }) {
      return {
        list: data.results.map((item, index) => {
          return {
            ...item,
            id: `${index}`,
            subSchoolCode: `${item.id.name}`,
            subSchoolName: `${item.name.first} ${item.name.last}`,
            subSchoolAddress: item.location.country,
            index,
          };
        }),
        total: 100
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
