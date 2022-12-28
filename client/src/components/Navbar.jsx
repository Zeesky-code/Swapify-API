import { Component } from "react";
import {MenuData} from "./MenuData";
import './Navbar.css';

class NavBar extends Component{
    render(){
        return (
            <nav className="NavbarItems">
                <h1>Swapify</h1>
                <ul>
                    {MenuData.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a href={item.url} className={item.cName}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavBar;