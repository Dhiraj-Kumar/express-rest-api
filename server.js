const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
const app = express();

app.use(bodyParser.json());
app.use('/api/v1', userRoutes);

mongoose.connect('mongodb+srv://mongoadmin:Sm3kZmRp1YoqWMFB@dhiraj-cluster.zojd6.mongodb.net/UsersDB?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
}).on('error', (err) => {
    console.log(err);
});

let port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});