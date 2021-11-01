import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

export default () => {
  const [collapsed, setCollapsed] = useState(true);
  return <div
    onClick={() => {
      setCollapsed(true)
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
