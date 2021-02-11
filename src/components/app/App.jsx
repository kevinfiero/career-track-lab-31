import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPage from '../../pages/listPage/ListPage';
import DetailPage from '../../pages/detailPage/DetailPage';
import Header from '../header/Header';
import './App.css';

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  function handleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <section>
      <ThemeContext.Provider value={darkTheme}>
        <Router>
          <Header onClick = {handleTheme} />
          <Switch>
            <Route exact path="/" component={ListPage} />
            <Route path="/:id" component={DetailPage} />
          </Switch>
        </Router>
      </ThemeContext.Provider>
    </section>

  );
}
