let mongoose = require('mongoose');
const Person = require('./person.js')



mongoose.connect('mongodb+srv://jawher:jawher111111@cluster0.luumil2.mongodb.net/?retryWrites=true&w=majority', (error) => {
  if (error) {
    console.log('failed to connect with the database');
  }
  console.log("the database is connected successfully");
});
/*const personOne = new Person({ name: "amine", age: 20,favoriteFoods: 'makrouna' })

personOne.save()*/
  
  /*var arrayOfPeople = [{name:"jawher", age:"5", favoriteFoods:["carrot"]},{name:"mokhtar", age:"55",favoriteFoods:["blueberries"]}]
  Person.create(arrayOfPeople)*/
  /*Person.find({
    name: 'jawher'   
  })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })*/
  /*Person.findOne({
    favoriteFoods:["blueberries"]   
  })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })*/
  /*Person.findById({
    _id : "62e69a94e0a5aa56851d42cc" 
  })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })*/
/*let updatedUser=Person.findByIdAndUpdate("62e694afee447db476513031",  { name: "wafi", age: 21, favouriteFood: ["hamburger"] },
{
  new: true,
  upsert: true,
}).then((data)=>{
    console.log(`${data} is updated`)}).catch((error)=>{
        console.log("error")
    })*/

    /*Person.findOneAndUpdate({name: "jawher" }, 
        {age: 25}, null, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Original Doc : ",docs);
        }
    });*/
   /*Person.findOneAndDelete({_id: "62e69a94e0a5aa56851d42cd" } , function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted User : ", docs);
        }
    });*/
    /*Person.remove({name: "mary"}, function (err, result) {
        if (err){
            console.log(err)
        }else{
            console.log("Result :", result) 
        }
    });*/
    
    

     Person.find({favoriteFoods : "makrouna" })
    .select({age:0})
    .limit(2)
    .sort({name: 1})    //      .sort({name: 'asc'})
    .exec((err,person)=>{
    console.log("chain search query..")
      if(err){
        console.log(err)
      }
      else {
          console.log(Person)
      };
   })