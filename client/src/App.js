import "./index.css";
import Navbar from "./components/Navbar";
import Home from './components/HomePage';

export default function App(){
    return(
        <div className="App">
            <Navbar/>
            <Home/>
        </div>
    )
}