# Swapify

## Overview
This API allows users to convert a music link from Apple Music to a Spotify URL. The API is built using Node.js and Express.js.

## Endpoints
### Search

- URL: /search

- Method: POST

- Request Body:
  - url: (String) The music link to be converted.
- Success Response:

  - Code: 200
  - Content:
  ```
  {
      "title": "Song Title",
      "link": "https://open.spotify.com/track/..."
  }
  ```
  
  
## Setup
- [ ] Clone the repository: `git clone https://github.com/Zeesky-code/Swapify-API`
- [ ] Install dependencies: npm install

- [ ] Create a .env file in the root of the project and add the following environment variables:
    ```
    CLIENT_ID: Your Spotify client ID
    CLIENT_SECRET: Your Spotify client secret
    ```
- [ ] Start the server: npm start


> **Note**
> Make sure to get Spotify CLIENT_ID and CLIENT_SECRET to use it in the API
> The request should have url in the request body
> The search route is "/search"

## Usage
Make a POST request to /search with a JSON body containing the url key and the music link as the value. The API will return a Spotify URL in the response.
