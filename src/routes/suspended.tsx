import React, { Suspense, lazy } from 'react';

// 为异步组件添加 lazy 和 Suspense
export function suspended<T>(Component: any) {
  const LazyComponent = lazy(Component);
  const fallback = null;
  const SuspenseInfo = (props: T) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );

  return SuspenseInfo;
}
