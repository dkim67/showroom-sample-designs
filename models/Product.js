const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    wall: {
        colors: {
            primary: String,
            secondary: String
        }
    },
    curtain: {
        colors: {
            primary: String,
            secondary: String
        }
    },
    couch: {
        colors: {
            primary: String,
            secondary: String
        }
    },
    floor: {
        colors: {
            primary: String
        }
    }
})

mongoose.model('products', productSchema);