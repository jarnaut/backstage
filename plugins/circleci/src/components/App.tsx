import { Route, Switch } from 'react-router';
import React from 'react';
import { BuildsPage } from 'pages/BuildsPage';
// import { DetailedViewPage } from 'pages/DetailedViewPage';
import { SettingsPage } from 'pages/SettingsPage';
import { Provider, useDispatch } from 'react-redux';

import store, { Dispatch } from 'state/store';

const RehydrateSettings = () => {
  const dispatch: Dispatch = useDispatch();

  React.useEffect(() => {
    dispatch.settings.rehydrate();
  }, []);
  return null;
};
export const App = () => {
  return (
    <Provider store={store}>
      <>
        <RehydrateSettings />
        <Switch>
          <Route path="/circleci" component={BuildsPage} exact />
          <Route path="/circleci/settings" component={SettingsPage} />
        </Switch>
      </>
      {/* <Route path="/build/:buildId" component={DetailedViewPage} />  */}
    </Provider>
  );
};
