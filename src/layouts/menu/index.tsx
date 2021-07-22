/* eslint-disable no-shadow */
import React, { FC, useState, useCallback, useEffect, useMemo } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter, Link } from 'umi';
import { useDispatch } from 'dva';
import { RouteComponentProps } from 'react-router';
import styles from './index.less';
import routes from '@/../config/route';

const SIDER_MENU_WIDTH = 200;
const SIDER_MENU_COLLAPSED_WIDTH = 60;

const XDMenu: FC<RouteComponentProps> = (props) => {
  const { Sider } = Layout;

  const [selectedKeys, setSelectedKeys] = useState<string[]>();

  const [openedSubMenu, setOpenedSubMenu] = useState<string[]>();

  // 计算菜单

  const renderMenu = useMemo(() => {
    const renderMenu = (route) => {
      if (Array.isArray(route.routes)) {
        if (route.routes.length <= 0) return null;
        return (
          <Menu.SubMenu
            key={route.path}
            title={route.name}
          >
            {/* subMenu下如果有mainRoutes 则证明有二级菜单 */}
            {route.routes.map((sub) => {
              return renderMenu(sub);
            })}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </Menu.Item>
        );
      }
    };
    return routes.map(renderMenu);
  }, []);

  return (
    <Sider
      collapsible
      width={SIDER_MENU_WIDTH}
      collapsedWidth={SIDER_MENU_COLLAPSED_WIDTH}
      className={styles.xd_sider}
      trigger={null}
    >
      <Menu
        mode="inline"
        selectedKeys={selectedKeys}
        openKeys={openedSubMenu}
        style={{ height: '100%' }}
        onOpenChange={(openKeys) => {
          setOpenedSubMenu(openKeys as string[]);
        }}
        onSelect={({ key }) => {
          setSelectedKeys([key as string]);
        }}
      >
        {renderMenu}
      </Menu>
    </Sider>
  );
};

export default withRouter(XDMenu);
