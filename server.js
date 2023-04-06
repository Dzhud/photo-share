const express = require('express');
const app = express();
const port = 8080;
//So evrytin in public folder is served up as a static file
app.use(express.static('public'));   
app.listen(port, ()=> {
    console.log(`Saving photo app on http://localhost:${port}`);
})
