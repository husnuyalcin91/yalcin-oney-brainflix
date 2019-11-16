const express = require('express');
const cors = require('cors');
const sideBarVideos = require('./routes/sideBarVideos');

const app = express();

//to be able to share the data with client
app.use(cors());

app.get('/', (request, response) => {
    //should response.send the API docu
    response.send('Welcome');
});

app.use('/videos', sideBarVideos);

app.listen(8080, () => {
    console.log('server is ready')
})