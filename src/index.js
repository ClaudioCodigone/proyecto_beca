import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter} from 'react-router-dom';
import App from './App';
import LogInPage from './components/LogInPage';
import CreateAccount from './components/CreateAccount';
import Footer from './components/Footer';
import LogIn from './components/LogIn';

class IndexClass extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <LogIn />
          <Route exact path="/" component={App} />
          <Route exact path="/LogInPage" component={LogInPage} />
          <Route exact path="/CreateAccount" component={CreateAccount} />
          <Footer />
        </div>
      </BrowserRouter>

    )
  }
}


ReactDOM.render(<IndexClass />,
  document.querySelector('#root')
);
