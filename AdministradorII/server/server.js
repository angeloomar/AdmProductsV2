const express =  require("express");
const {connectMongo} = require("./config/mongoose.config");
const { productRouter } = require("./router/products.router");
const cors = require('cors');

connectMongo();

app = express();
app.use(cors());
app.use(express.json());

app.use('/products', productRouter);

app.listen(3001, ()=> {
    console.log("It's alive!");
});
