import React, { useState } from 'react';
import { request } from 'sula';
import { getLocale, history, Link } from 'umi';
import RightContent from '@/components/rightContent';
import CollapsedSwitch from '@/components/collapsedSwitch';
import { BasicLayoutProps, DefaultFooter } from '@ant-design/pro-layout';
import { MenuUnfoldOutlined, MenuFoldOutlined  } from '@ant-design/icons';

//  https://umijs.org/zh-CN/plugins/plugin-initial-state
export async function getInitialState() {
  const { pathname, href = '' } = location;
  if (pathname !== '/user/login') {
    try {
      let redirect = '';
      if (href.includes('?')) {
        redirect = '?redirect=' + href;
      }

      const currentUser = await request({
        url: '/api/current.json',
        method: 'post',
      });

      if (!currentUser || currentUser === 'none') {
        history.push('/user/login' + redirect);
        return;
      }
      return {
        currentUser,
      };
    } catch (error) {
      history.push('/user/login');
    }
  }

  return {};
}

// https://umijs.org/zh-CN/plugins/plugin-layout
export const layout = (): BasicLayoutProps => {

  let collapsed = false;

  return {
    title: '南泉分校',
    logo: 'https://img.alicdn.com/tfs/TB1GfPJxYH1gK0jSZFwXXc7aXXa-56-56.svg',
    siderWidth: 208,
    navTheme: 'light',
    layout: 'mix',
    fixSiderbar: true,
    collapsedButtonRender: false,
    collapsed,
    menu: {
      // type: 'group',
      defaultOpenAll: true,
      ignoreFlatMenu: true
    },
    breadcrumbRender: (routers = []) => {
      return [
        {
          path: '/',
          breadcrumbName: getLocale() === 'zh-CN' ? '主页' : 'Home',
        },
        ...routers,
      ];
    },
    // hash 路由跳转
    itemRender: (route, params, routes, paths) => {
      const last = routes.indexOf(route) === routes.length - 1;
      const { path, breadcrumbName } = route;
      if (last) {
        return <span>{breadcrumbName}</span>;
      }
      return <Link to={path}>{breadcrumbName}</Link>;
    },
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: '南泉分校',
      fontSize: 13,
    },
    headerTheme: 'light',
    headerContentRender: () =>  <CollapsedSwitch />,
    footerRender: () => (
      <DefaultFooter
        links={[
          {
            key: 'sula-real',
            title: 'Sula Real',
            href: 'https://github.com/umijs/sula-real',
          },
          {
            key: 'logo',
            title: (
              <img
                src='https://img.alicdn.com/tfs/TB1GfPJxYH1gK0jSZFwXXc7aXXa-56-56.svg'
                width='14px'
              />
            ),
            href: 'https://github.com/umijs/sula-real',
          },
          { key: 'sula', title: 'Sula', href: 'https://github.com/umijs/sula' },
        ]}
        copyright='Sula.JS'
      />
    ),
  };
};
