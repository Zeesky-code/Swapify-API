import React, { useState } from 'react';
import './homePage.css';

function Home() {
    const [url, setUrl] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/search', {
            method: 'POST',
            body: JSON.stringify({ url }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(
            (res) => res.json())
        .then((data) => {
            setResponse(data.link);
            console.log(response)
        });
    };

    return (
        <div className="home">
            <h1>Listen to music from <span>every</span> where</h1>
            <a>{response}</a>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


export default Home;


