import { Link } from "react-router-dom"
import React from 'react';
import './homePage.css';

function NavBar(){
    return
}

function SignUpButton(){
    return <Link to="/signup" className="nav-link">
        <button className="btn btn-primary" >
            <span style={{ "fontSize": "24px" }}>
                Click Me!
            </span>
        </button>
    </Link>
}

function SignInButton(){
    return <Link to="/login" className="nav-link">
        <button className="btn btn-primary" >
            <span style={{ "fontSize": "24px" }}>
                Click Me!
            </span>
        </button>
    </Link>
}

function LandingFrameMessage() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("http://localhost:9000/")
            .then((res) => res.json())
            .then((data) => setData(data.message));

    }, []);

    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }
    return( 
        <main>
            <div>

                <div className="header">
                    <h1>Swapify</h1>

                </div>

                <div style={{ "fontSize": "36px" }}>
                    This is the landing page and here's some content.
                    How much wood would a woodchuck chuck if a
                    woodchuck would chuck wood?
                </div>
                <br />
                <SignUpButton />
                <SignUpButton/>
            </div>
        </main>
    
    )
}

function HomePage() {
    return(
        <LandingFrameMessage />
    )
}

export default HomePage