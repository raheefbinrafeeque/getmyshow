import './App.css';
import {Header, Footer} from './components'
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <>
      <Header></Header>
      <AllRoutes />
      <Footer></Footer>
    </>
  );
}

export default App;
