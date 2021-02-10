import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPage from '../../pages/listPage/ListPage';
import DetailPage from '../../pages/detailPage/DetailPage';
import Header from '../header/header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ListPage} />
        <Route path="/:id" component={DetailPage} />
      </Switch>
    </Router>
  );
}
