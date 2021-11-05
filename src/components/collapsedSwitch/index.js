import { MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined, RightOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useModel } from 'umi';
import { Divider } from 'antd';
import ProductsCard from '@/components/collapsedSwitch/productsCard'

export default ({ collapsed }) => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const [openCard, setOpenCard] = useState(false)
  return (
    <>
      <div
        onClick={(event) => {
          setInitialState({
            ...initialState,
            data: {
              layout: !collapsed,
            },
          });
        }}
        style={{
          marginLeft: '6em',
          cursor: 'pointer',
          fontSize: '16px',
          display: 'inline-block'
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <Divider type="vertical" style={{height: '80%'}} />
      <span 
        style={{ 
          paddingLeft: '2em',
          cursor: 'pointer',
        }}
        onMouseEnter={
          () => {
            setOpenCard(true)
          }
        } 
        onMouseLeave={() => {setOpenCard(false)}}
      >
        All products
        { openCard ? <DownOutlined /> : <RightOutlined /> }
      </span>
      {
        openCard ? <ProductsCard /> : null
      }
    </>
  );
};
