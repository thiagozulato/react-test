import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Spin } from 'antd';

const Comps = {
  './Pages/InitialPage': lazy(() => import('./Pages/InitialPage')),
  './Pages/Page1': lazy(() => import('./Pages/Page1')),
  './Pages/Teste': lazy(() => import('./Pages/Teste')),
  './Pages/Profile': lazy(() => import('./Pages/Profile')),
  './Pages/Profile/Detail': lazy(() => import('./Pages/Profile/Detail')),
  './Pages/Profile/Account': lazy(() => import('./Pages/Profile/Account'))
}

function WaitingComponent(LazyComponent, extraProps, route) {
  // let LazyComponent = lazy(() => import(`${component}`));
  return props => (
    <Suspense fallback={<Spin spinning />}>
      <LazyComponent {...props} {...extraProps} route={route} />
    </Suspense>
  );
}

function renderRoutes(routes, extraProps = {}, switchProps = {}) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => {
        if(route.redirect) {
          return (
              <Redirect
                key={route.key || i}
                exact
                from={route.path}
                to={route.redirect}
              />
          );
        }

        return (
          <Route
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            render={WaitingComponent(Comps[route.component], extraProps, route)}
          />
        )
      }
    )}
    </Switch>
  ) : null;
}

export const createRouteMenus = (routes) => {
  const pathTo = [];

  routes.forEach(route => {
    if (!route.redirect) {
      pathTo.push({
        path: route.path,
        key: route.key,
        description: route.description
      })
    }
  })

  return pathTo;
}

export default renderRoutes;