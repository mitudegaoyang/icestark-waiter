// import React, { FC } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './routes/Home'
import List from './routes/List'
import Detail from './routes/Detail'
import './App.css';

// const App: FC = () => (
//   <Router>
//     <Route path="/" component={Home}>
//       <Route path="list" component={List} />
//       {/* <Route path="inbox" component={Inbox} /> */}
//     </Route>
//   </Router>
// );

// export default App;

export default function App(props) {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/list" component={List}></Route>
        <Route exact path="/list/detail/:contractId" component={Detail} />
      </Switch>
    </Router>
  );
}
