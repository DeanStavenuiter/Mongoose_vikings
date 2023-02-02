// require mongoose and destructor Schema and model from it
const { Schema, model } = require("mongoose");
//Create a viking schema here

const vikingSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    familyName: {
        type: String,
        required: true,
    },
    strength: Number,
    weapong: String,
});

//creates the model first argument is the name of the collection and the second is the name of the model you want to use
const VikingModel = model('viking', vikingSchema);

//exports model 
module.exports = VikingModel


//<======Don't forget Module.export ============>
//<================Schema=====================>
