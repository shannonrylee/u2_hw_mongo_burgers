// create 5 burgers (at least 3 should be beef)
burgersDataBase> db.burgers.insertMany([
    ... { burger: "beef", toppings: ["lettuce", "tomatoe"], cheese: "none" },
    ... { burger: "beef", toppings: "none", cheese: "1 slice" },
    ... { burger: "beef", toppings: "lettuce", cheese: "none"},
    ... { burger: "tofu", toppings: ["lettuce", "tomatoe"], cheese: "none" },
    ... { burger: "turkey", toppings: "tomatoe", cheese: " 1 slice" }
    ... ])
// find all the burgers
burgersDataBase> db.burgers.find({})
// show just the meat of each burger
burgersDataBase> db.burgers.find({}, { burger: 1 } )
// show just the toppings of each burger
burgersDataBase> db.burgers.find({}, { toppings: 1 } )
// show everything but the cheese
burgersDataBase> db.burgers.find({}, { burgers: 1, toppings: 1 })
// find all the burgers with beef
burgersDataBase> db.burgers.find( { burger: "beef" } )
// find all the burgers that are not beef
burgersDataBase> db.burgers.find( { burger: { $ne: "beef" }})
// find the first burger with cheese
burgersDataBase> db.burgers.find( { cheese: 0 } )
// find one and update the first burger with cheese to have a property of 'double cheese'
burgersDataBase> db.burgers.updateOne({ cheese: "1 slice" }, { $set: { cheese: "double cheese" } })
// find the burger you updated to have double cheese
burgersDataBase> db.burgers.find( {cheese:'double cheese'} )
// find and update all the beef burgers to be 'veggie'
burgersDataBase> db.burgers.updateMany( { burger: "beef" }, { $set: { burger:'veggie' } })
// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
burgersDataBase> db.burgers.deleteMany( { burger: "veggie" } )
// drop the collection
//Expected Output
//true
burgersDataBase> db.burgers.drop()
// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
burgersDataBase> db.dropDatabase()
{ ok: 1, dropped: 'burgersDataBase' }
//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

// Change the name of the key cheese to 'pumpkinSpice'

// find all the burgers with ketchup (or another topping you used at least once)

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger 