import './App.css';
import  Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter ,Route,Switch } from 'react-router-dom'
import Swagger from './screens/Swagger';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import Error404 from './screens/Error404/Error404';



const App = () => (
  <BrowserRouter>
 
      <Header />
      <main>
      <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/editor" component={Swagger} exact/>
      <Route path="/login" component={()  => <LoginScreen /> }/>
      <Route path="/register" component={()  => <RegisterScreen /> }/>
      <Route path="/*" component={Error404} exact/>
      
      </Switch>
      </main>

       <Footer />
  </BrowserRouter>
);

export default App;
