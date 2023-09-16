const express = require('express');
const adressRoutes = require('./api/components/adress/routes');

const app = express();
const port = 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));


// Adding headers to our requests.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT,DELETE');
        return res.sendStatus(200).json({});
    }
    next();
});
 
app.use('/adress', adressRoutes); // Configuring adresses endpoints   
app.use('/adress/:id', adressRoutes)


app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message
    });
    next();
});
