import React from 'react';
import { Button, Field, Form, FormList } from 'sula';
import { Space, Table } from 'antd';

export default class AddSubSchool extends React.Component {
  render() {
    return (
      <div>
        <Form layout="vertical">
          <FormList label="分校信息录入" name="et">
            {(fields, list) => {
              console.log('list: ', list);
              const { add, remove} = list
              return (
                <div>
                  <Table
                    components={{
                      body: {
                        row: (props) => {
                          return <tr {...props} style={{ verticalAlign: 'baseline' }} />;
                        },
                        cell: (props) => {
                          return <td {...props} style={{ padding: '24px 24px 0' }} />;
                        },
                      },
                    }}
                    pagination={false}
                    dataSource={fields}
                    rowKey="fieldKey"
                    columns={[
                      {
                        title: '名称',
                        key: 'subSchoolName',
                        render: (_, record) => {
                          const { name, fieldKey } = record;
                          return (
                            <Field
                              rules={[
                                {
                                  required: true,
                                },
                              ]}
                              name={[name, 'subSchoolName']}
                              fieldKey={[fieldKey, 'subSchoolName']}
                              field="input"
                            />
                          );
                        },
                      },
                      {
                        title: '编码',
                        key: 'subSchoolCode',
                        render: (_, record) => {
                          const { name, fieldKey } = record;
                          return (
                            <Field
                              name={[name, 'code']}
                              fieldKey={[fieldKey, 'code']}
                              field="input"
                            />
                          );
                        },
                      },
                      {
                        title: '',
                        width: 200,
                        key: 'operation',
                        render: (_, record) => {
                          return (
                            <Space>
                              <a
                                onClick={() => {
                                  remove(record.name);
                                }}
                              >
                                删除
                              </a>
                              <a
                                onClick={() => {
                                  add(undefined, record.name + 1);
                                }}
                              >
                                添加
                              </a>
                            </Space>
                          );
                        },
                      },
                    ]}
                  />
                  <Button
                    block
                    type="dashed"
                    style={{ marginTop: 16 }}
                    onClick={() => {
                      add();
                    }}
                  >
                    添加
                  </Button>
                </div>
              );
            }}
          </FormList>
        </Form>
      </div>
    );
  }
}
