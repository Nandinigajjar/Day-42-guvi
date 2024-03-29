
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import CreateShortUrl from './components/CreateShortUrl';
import UrlList from './components/UrlList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/create-short-url" component={CreateShortUrl} />
          <Route path="/url-list" component={UrlList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
