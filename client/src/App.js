import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Placeholder components
const Dashboard = () => <div>Dashboard</div>;
const Chatbot = () => <div>Chatbot</div>;
const FinancialAdvice = () => <div>Financial Advice</div>;
const LoanRenewal = () => <div>Loan Renewal</div>;
const GoalSetting = () => <div>Goal Setting</div>;

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
