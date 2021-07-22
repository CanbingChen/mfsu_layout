import React, { FC, useEffect, useState, useCallback } from 'react';
import { Layout, Skeleton } from 'antd';
import { connect } from 'dva';
import moment from 'moment';

import Header from './header';
import Menu from './menu';
import 'moment/locale/zh-cn';
import { notificationError } from '@/utils';

moment.locale('zh-cn');

const ENV_PLATFORM = process.env.PLATFORM ?? '';

const Index: FC<{ [property: string]: any }> = (props) => {
  const { children, route, App } = props;
  //判断是否需要显示介绍页，以及显示哪一个介绍页
  const parseChild = () => {
    // const rte = parseIntroduce(location.pathname, routes, App)
    // if (rte) {
    //   return <Introduce type={rte} />
    // }
    return children;
  };
  const main = (
    <Layout>
      <Header />
      <Menu />
      <Layout.Content>{parseChild()}</Layout.Content>
      {/* <Robot /> */}
    </Layout>
  );

  const loading = (
    <>
      <Header />
      <Layout>
        <Layout.Sider>
          <Skeleton.Input active />
        </Layout.Sider>
        <Layout.Content>
          <Skeleton active paragraph={{ rows: 6 }} />
          <Skeleton.Input active />
        </Layout.Content>
      </Layout>
    </>
  );
  return <Layout>{main}</Layout>;
  // return <Layout>{initApp ? main : loading}</Layout>;
};

export default Index;
// export default connect(({ App, industryHome }: any) => ({
//   App,
//   collapsed: App.collapsed,
//   industryHome,
// }))(Index);
