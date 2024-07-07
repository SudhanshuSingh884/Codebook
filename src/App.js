//import logo from './logo.png';
import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import { Header,Footer } from './components';

function App() {
  return (
    <div className="App dark:bg-dark">
      <Header/>
    <AllRoutes/>
    <Footer/>
    </div>
  );
}

export default App;
