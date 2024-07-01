import React from 'react';
import {
  useLocation
  // useNavigate,
} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import { Performance } from './performance';

const Test = observer(() => {
  const routerLocation = useLocation();
  console.info(routerLocation.search);

  return (
    <div className={classNames('test')}>
      <Performance />
    </div>
  );
});

export default Test;
