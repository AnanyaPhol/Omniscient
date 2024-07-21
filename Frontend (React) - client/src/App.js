import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';
import FinancialAdvice from './components/FinancialAdvice';
import LoanRenewal from './components/LoanRenewal';
import GoalSetting from './components/GoalSetting';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/chat" component={Chatbot} />
          <Route path="/advice" component={FinancialAdvice} />
          <Route path="/loan" component={LoanRenewal} />
          <Route path="/goals" component={GoalSetting} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
