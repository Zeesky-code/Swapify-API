import React from 'react';
import './homePage.css';


function Home(){
    return(<>
    <div className="home">
        <h1>Listen to music from <span>every</span> where</h1>
        <form>
            <input type="search" placeholder='Enter Link'/>
            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </div>
    </>)
}

export default Home;


