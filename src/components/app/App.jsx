import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPage from '../../pages/listPage/ListPage';
import DetailPage from '../../pages/detailPage/DetailPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListPage} />
        <Route path="/:id" component={DetailPage} />
      </Switch>
    </Router>
  );
}
