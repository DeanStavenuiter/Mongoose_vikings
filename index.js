//Make sure to require your model so you can connect to the DB
const { Model } = require("mongoose");

const VikingModel = require("./models/User.js");

//This line of code connects to the Database
require("./db");

//Iteration 2:

//Iteration 3:
// const Ragnar = {
//     firstName: "Ragnar",
//     familyName: "Lodbrok",
//     strength: 800,
//     weapon: "Axe"
// }

let vikingArr = [
  {
    firstName: "Ragnar",
    familyName: "Lodbrok",
    strength: 999,
    weapon: "Axe",
  },
  {
    firstName: "Floki",
    familyName: "No",
    strength: 400,
    weapon: "Knife",
  },
  {
    firstName: "Lagertha",
    familyName: "Lodbrok",
    strength: 700,
    weapon: "Bows and arrows",
  },
  {
    firstName: "Rollo",
    familyName: "No",
    strength: 850,
    weapon: "Sword",
  },
  {
    firstName: "Bjorn",
    familyName: "Lodbrok",
    strength: 800,
    weapon: "Axe",
  },
];
//create a viking
// VikingModel.create(Ragnar)
// .then((newVikinginDb) => {
//     console.log('Nice, now you got a new viking', newVikinginDb)
// }).catch((error) => {
//     console.log("There was an error", error)
// });

// delete viking
// VikingModel.findByIdAndDelete('63db9dbac9c391dde44689df')
//   .then((deletedViking) => {
//     console.log("Here is a object of the deleted viking", deletedViking);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//insert array into the database
// VikingModel.insertMany(vikingArr)
// .then((vikingArrDb) => {
//     console.log("the array was created", vikingArrDb)
// })
// .catch((error) => {
//     console.log(error)
// })

//update one viking
VikingModel.findOneAndUpdate(
  { name: "Ragnar" },
  {strength: 1000},
  { new: true } //gives the new schema in the console
)
  .then((updateViking) => {
    console.log("Nice, now you updated", updateViking);
  })
  .catch((error) => {
    console.log("There was an error", error);
  });