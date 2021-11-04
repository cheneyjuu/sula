import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useModel } from 'umi';

export default ({collapsed}) => {
  const { initialState, setInitialState } = useModel('@@initialState');
  return <div
    onClick={(event) => {
      setInitialState({
        ...initialState,
        data: {
          layout: !collapsed
        }
      })
    }}
    style={{
      marginLeft: '6em',
      cursor: 'pointer',
      fontSize: '16px',
    }}
  >
    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    <span style={{paddingLeft: '2em'}}>All products</span>
  </div>
}
