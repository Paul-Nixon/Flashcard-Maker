import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Homepage from './components/pages/Homepage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Homepage} exact/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Layout>
  );
}

export default App;
