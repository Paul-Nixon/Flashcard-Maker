import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Homepage from './components/pages/Homepage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Layout>
  );
}

export default App;
