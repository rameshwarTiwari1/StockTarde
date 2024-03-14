const mongoose = require('mongoose');

// Replace the placeholder with your MongoDB Atlas URI
const mongoDB = 'mongodb+srv://rameshwarkt8080:1mOwEOawEGrrciWe@stocktest.ujzncih.mongodb.net/?retryWrites=true&w=majority&appName=stocktest';
mongoose.set('strictQuery', false);
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Mongodb connected successfully..."))
.catch((err) => console.log(err));

module.exports = mongoose;
// 1mOwEOawEGrrciWe
// rameshwarkt8080