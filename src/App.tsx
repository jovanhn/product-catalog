import './App.css'
import {HashRouter} from "react-router-dom";

import Routes from './routes/Routes'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {

  return (
    <>
            <HashRouter>
                <Header/>
                <Routes/>
                <Footer/>
            </HashRouter>
    </>
  )
}

export default App
