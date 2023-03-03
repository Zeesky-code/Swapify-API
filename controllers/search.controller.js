const jssoup = require('@aghajari/jssoup');
const Spotify = require('spotify-finder');


async function getSpotifyLink(req,res){
    const url = req.body.url;
    const doc = await jssoup.loadFromURL(url);
    const title = doc.title();
    const client = new Spotify({
        consumer: {
          key: process.env.CLIENT_ID, // from v2.1.0 is required
          secret: process.env.CLIENT_SECRET  // from v2.1.0 is required
        }
    })
    const params ={
        q: title,
        type: 'track'
    }
    client.search(params)
    .then(data => {
        // do something with data
        res.render('result', {
            title: title,
            link: data.tracks.items[0].external_urls.spotify,
            file: req.file
        });
        
    })

}


module.exports = {getSpotifyLink}