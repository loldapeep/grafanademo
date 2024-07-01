import { locationSearchToObject } from '@grafana/runtime';
import BrowseDashboardsPage from 'app/features/browse-dashboards/BrowseDashboardsPage';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import BrowseDashboardsPage from "./features/browse-dashboards/BrowseDashboardsPage";
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { SafeDynamicImport } from './core/components/DynamicImports/SafeDynamicImport';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const route = {
  path: '/dashboards',
  component: SafeDynamicImport(
    () => import(/* webpackChunkName: "DashboardListPage"*/ 'app/features/browse-dashboards/BrowseDashboardsPage')
  ),
}
root.render(
  <React.StrictMode>
      <Switch>
        <Route
          exact={true}
          sensitive={true}
          path={route.path}
          key={route.path}
          render={(props: RouteComponentProps) => {

            return <BrowseDashboardsPage {...props} route={route} queryParams={locationSearchToObject(props.location.search)} />
          }}
        />        
        <Route path='/'>
          <div>lmao</div>
        </Route>
      </Switch>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
