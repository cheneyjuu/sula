import React, { useState } from 'react';
import { request } from 'sula';
import { getLocale, history, Link } from 'umi';
import RightContent from '@/components/rightContent';
import CollapsedSwitch from '@/components/collapsedSwitch';
import { BasicLayoutProps, DefaultFooter } from '@ant-design/pro-layout';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

//  https://umijs.org/zh-CN/plugins/plugin-initial-state
export async function getInitialState() {
  const { pathname, href = '' } = location;
  const data = {
    layout: {
      collapsed: false,
    },
  };
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

      const menus = await request({
        url: '/api/menus',
        method: 'get'
      });

      if (!currentUser || currentUser === 'none') {
        history.push('/user/login' + redirect);
        return;
      }

      return {
        currentUser,
        data,
      };
    } catch (error) {
      history.push('/user/login');
    }
  }

  return {
    data,
  };
}

// https://umijs.org/zh-CN/plugins/plugin-layout
export const layout = async (event: any) => {
  console.log('the event is initailState', event);
  const { initialState, loading, error, refresh, setInitialState } = event;
  let collapsed = initialState?.data?.layout;

  return {
    title: 'Sula-Demo',
    logo: 'https://img.alicdn.com/tfs/TB1GfPJxYH1gK0jSZFwXXc7aXXa-56-56.svg',
    siderWidth: 208,
    navTheme: 'light',
    layout: 'mix',
    fixSiderbar: true,
    // 隐藏nav底部的collapsed
    collapsedButtonRender: false,
    collapsed: collapsed.collapsed,
    menu: {
      // type: 'group',
      defaultOpenAll: true,
      ignoreFlatMenu: true,
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
    itemRender: (route: any, params: any, routes: any, paths: any) => {
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
      content: null,
      fontSize: 13,
    },
    headerTheme: 'light',
    headerContentRender: () => <CollapsedSwitch collapsed={collapsed} />,
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
                src="https://img.alicdn.com/tfs/TB1GfPJxYH1gK0jSZFwXXc7aXXa-56-56.svg"
                width="14px"
              />
            ),
            href: 'https://github.com/umijs/sula-real',
          },
          { key: 'sula', title: 'Sula', href: 'https://github.com/umijs/sula' },
        ]}
        copyright="Sula.JS"
      />
    ),
  };
};
