import React from 'react';
import { Avatar, Badge, Space, Tooltip } from 'antd';
import { GithubOutlined, UserOutlined } from '@ant-design/icons';
import Dropdown from '@/components/avatarDropdown';
import LocaleSwitch from '@/components/localeSwitch';
import NotificationDropdown from '@/components/notificationDropdown';

export default () => {
  return (
    <Space align="center" style={{ marginRight: 24 }}>
      {/*<Tooltip title="github">*/}
      {/*  <GithubOutlined*/}
      {/*    onClick={() => {*/}
      {/*      window.open('https://github.com/umijs/sula-real');*/}
      {/*    }}*/}
      {/*    style={{*/}
      {/*      color: '#24292f',*/}
      {/*      fontSize: 26,*/}
      {/*      display: 'block',*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</Tooltip>*/}
      {/*<LocaleSwitch />*/}
      <NotificationDropdown />
      <Badge count={5}>
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Badge>
      <Dropdown />
    </Space>
  );
};
