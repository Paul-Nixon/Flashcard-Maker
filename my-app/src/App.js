import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import WebsiteHomepage from './components/pages/WebsiteHomepage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import UserDashboard from './components/pages/UserDashboard';
import { AuthProvider } from './contexts/AuthContext';
import { CategoriesProvider } from './contexts/CategoriesContext';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={WebsiteHomepage} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/user" exact >
          <AuthProvider><CategoriesProvider><UserDashboard></UserDashboard></CategoriesProvider></AuthProvider>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
