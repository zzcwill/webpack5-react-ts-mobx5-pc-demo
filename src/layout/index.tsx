import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks';

import './index.less';

const Layout = () => {
  const [{ appStore }] = useStore();

  useEffect(() => {
    appStore.initAppData();
  }, []);

  if (appStore.appLoading) {
    return (
      <div className="layout-loading">
        <div>layout-loading</div>
      </div>
    );
  }

  return <Outlet />;
};

export default observer(Layout);
