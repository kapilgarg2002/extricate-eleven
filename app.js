//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const moongoose = require("mongoose");


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://kapil:kapil@cluster0.jxchm.mongodb.net/contactsDB";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });





moongoose.connect("mongodb+srv://kapil:kapil@cluster0.jxchm.mongodb.net/ISTE_EVENTDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});





//Defining mongoose schema for information

const identity = new moongoose.Schema({
  
  // _id: moongoose.Schema.Types.ObjectId,
  name: String,
  college: String,
  roll: String,
  teamleader: String,
  rollnumber: Number,
  mail: String,
  teamMember1: String,
  rollnumber1: Number,
  mail1: String,
  teamMember2: String,
  rollnumber2: Number,
  mail2: String,
  question1: Boolean,
  question2: Boolean,
  question3: Boolean,
  question4: Boolean,
  question5: Boolean,
  question6: Boolean,
  question7: Boolean,
  question8: Boolean,
  question9: Boolean,
  question10: Boolean,
  question11: Boolean
});







//Defining mongoose model for the above schema
const ids = moongoose.model("id", identity);







  // defining questions, Stories, answers

  const questions = {
    Team1: "153",
    Team2: "0168352479",
    Team3: "160",
    Team4: "652",
    Team5: "222",
    Team6: "1610",
    Team7: "3793305600",
    Team8: "41388",
    Team9: "86",
    Team10: "6",
    Team11: "167"

  };

  const stories = {
    Team1: "Steve and Dustin were looking for clues at the downtown hawking’s when suddenly more and more people started filtering in. This was strange, the movie was already half way through. It was difficult getting out of the theatre, all the people were scared and kept pulling them back. They all witnessed a blinding light coming from the public library and made it more and more troublesome for them to reach the library. Help them get out of the hall and reach the library.",

    Team2: "Will and Nancy decided to go to the swimming pool in the Harrington’s house in search of a way to free Eleven.Nancy was searching some clues along the edge of the pool when she heard her name being called, and the voice was familiar. She couldn’t believe it, but it was Barbara’s voice coming deep from the water. She hesitantly touched the surface of the water, then her face, and in no time, she was being pulled into it; and Will went into aid, but it was futile, as the very next moment they realised that they were in the “Upside Down” with messy roots and slime all around. They knew that they needed to make their way out, or they might end up just like Barbara.",

    Team3: "Max and Billy were heading towards The Palace, a local arcade in Hawkins.The Palace featured a variety of games, including Dragon's Lair, Dig Dug, Centipede, Galaga,and Pac-Man etc.On reaching the arcade,they met Keith (who worked at the arcade) but didn't interrupt him much and continued their search.While searching the arcade, Max came across a hidden old-looking green door beside the Pac-Man machine, which was surprising, she immediately called out for Billy.What possibly could be the key to open that door? Who could possibly know about it? Maybe Keith? Then in no time they went out for Keith and asked him about the key to open that door. Keith said he didn’t know much about it but yes he had a bunch of 100 old keys having different numbers on it. Probably one out of those keys could unlock that door but how to find which one?",

    Team4: "Lucas and Hopper were rushing towards Hawking High School in a desperate attempt to get some clues. They were looking in every classroom in hopes of getting hints and then finally reached the chemistry lab. There they found a yellow piece of paper which seemed to have been torn away from a lab manual, and it had a list of elements required to make a potion. Help them find this missing element.",

    Team5: "Mike and Jonathan scrambled to search for the password to rescue Eleven in the Star court Mall. Mike and Jonathan on searching the second floor had a flashing red light catch their attention at the Ice Cream Parlour. On approaching the counter, they found Steve’s camera. The camera was placed on top of an envelope. On opening the envelope, they find a picture of Eleven tied in a room. There was a riddle written behind the picture. Help them understand what Steve wanted to tell them.",

    Team6: "Finally, inside the library it was as if the light had vanished, but you could see the brightness outside the windows. They were searching from floor to floor looking for the source when they heard a voice coming from somewhere.  That is when Dustin reminded Steve of a tale of the whispering book. They started looking for the book on different shelves.",

    Team7: "Finally when Will and Nancy return to the actual world in the same swimming pool. The water in the pool soon began to drain into a single hole at the bottom, causing a rapid swirl. Will and Nancy clung on the pool's edge for support in order to avoid getting trapped in it. After the pool had been drained, they approached the hole that was intended to be covered otherwise and discovered a box with a lock on it, and they knew that this could be their only hope of saving Eleven.",

    Team8: "As the door was unlocked the room turned out to be a storeroom that had an abundance of tools and other useful things, but they have a limited capacity so they can take only some of them so they have to make some wise choices to make the situation turn in their favour.",

    Team9: "Now they had all the ingredients required for making the potion. The only step left was to mix them all together and heat it for an hour. But there was a huge challenge in front of them. There were a number of different potions which can be made using the given ingredients. Help Lucas and Hopper figure out the correct formula. ",

    Team10: "	On figuring out the cryptic message, Jonathan informs Mike about the photo as they rush to the third floor towards the cinema control room. To their shock, the room floor was covered in blood with the glass window smashed to pieces. Jonathan without hesitation starts opening shelves as he shuffles through grubby movie reels. Mike then comes across another envelope with some pictures, behind which were strange symbols. Help them make sense of these symbols and reach the Hawkin’s Lab."
  }

const answers = {
    Team1: "Given an array of N integers which is the total number of people present in the theatre, where each person represents the max number of steps that can be made forward from that person. Find the minimum number of jumps to reach the end of the line finally helping steve and dustin to reach the library. input:- https://drive.google.com/file/d/1fZQZJ5lQstjidgKr_n8xV_p9azYjQ1sO/view?usp=sharing",

    Team2: "There are 10 tasks that they need to do in a particular order to get out of this Upside Down world. \n Following are some hints that define this order: Task 0 must be done before Task 1 and Task 2. Task 1 must be done before Task 3 and Task 9. Task 5 requires Task 3 to be completed and then is followed by Task 2. Task 7 requires Task 3 and Task 4. Task 4 requires Task 2 and Task 6. Task 8  requires Task 6. Task 3 and Task 9 need Task 8 to be completed. (Note: In case of multiple choices, go in the increasing order of the task number)",

    Team3: "Given an array of n positive integers and a number k. Find the minimum number of swaps required to bring all the numbers less than or equal to k together.The answer of this question gives you the number written on the key which unlocks that door. input:- https://drive.google.com/file/d/1TonY1s4PqVI5TRTrTcmXkt5exc2iSUos/view?usp=sharing",

    Team4: "Find the index of the element X = “eulaeuvern” which they need in order to complete the formula of the potion from the string containing other elements A = input:- https://drive.google.com/file/d/10hS0NSDxwKw02nGuH88HrQEzaZh5uRb8/view?usp=sharing",

    Team5: "A string S of length N, consisting of lowercase letters of the English alphabet, is given.You must choose some number K between 0 and N. Then, you select K characters of S and permute them however you want. In this process, the positions of the other N-K characters remain unchanged. You have to perform this operation exactly once. Determine the minimum K so that it is possible to sort S alphabetically. input:- https://drive.google.com/file/d/1dVbsg4DiIsXMIgR_dPk5e4nyeRGLQX0a/view?usp=sharing",

    Team6: "Given an array of size N which is the total number of books in the library and an integer X which is the sum of the 3 books they are in search of. Find the triplet in the array which sums up to the given integer X thus helping dustin and steve in finding the books they are in search off. input:- https://drive.google.com/file/d/1STQehrh2DH5yD-ewefCOZpu2cKY5UHZ5/view?usp=sharing",

    Team7: "Given an array Arr that contains N integers (may be positive, negative or zero). Find the product of the maximum product subarray. The output of this question is the key of the lock that they found. Hurry up and unlock it.  input:- https://drive.google.com/file/d/1WhT-ix2P4FayERroKqjk_BfBBVRUVwE1/view?usp=sharing",

    Team8: "In the storehouse, we see 10 tools with varying weights and applicabilities. But we have a carrying capacity of maximum 30Kg only. The weights of the tools in a particular order are 7, 4, 2, 9, 7, 2, 1, 3, 3, 9 and their applicabilities in the same specified order are 11, 18, 10, 15, 21, 19, 16, 12, 14, 13. Also the information in this new world is passed in a differant language. So the final answer can be obtained by performing an unsigned circular right shift on the first five digits after decimal when the total applicability is devided by the total weight we have selected. Perform operation in 16 bits",

    Team9: "Given an array having the volumes of N potions and a positive integer K, you have to modify the volume of each potion either by increasing or decreasing them by K only once. After modifying, the volumes should be a non-negative integer. Find out what could be the possible minimum difference of the volumes of smallest and largest potion after you have modified each potion.input:-Input k= 5 N=100  Arr  =  11, 76, 18, 47, 82, 40, 1, 32, 11, 37, 30, 26, 73, 35, 43, 16, 68, 30, 42,  33, 41, 78, 7, 65, 24, 73, 63, 18, 41, 81, 85, 87, 18, 57, 29, 57, 55, 66, 92, 37, 83, 18, 43, 77, 11, 63, 69, 51, 73, 33, 15, 50, 78, 18, 15, 45, 50, 41, 64, 57, 83, 81, 90, 55, 37, 35, 75, 67, 69, 50, 8, 15, 97, 43, 66, 59, 59, 40, 59, 60, 80, 72, 97, 59, 47, 52, 97, 31, 90, 20, 4, 23, 84, 9, 86, 65, 55, 74, 94, 97 ",

    Team10: "There is a game where a scientist uses bombs to bomb a string that consists of letters 'A' and 'B'. He uses a bombs to bomb a substring which is either 'AB' or 'BB'. When he bombs such a substring, the substring gets deleted from the string and the remaining parts of the string get concatenated. The scientist wonders what the shortest string he can make is. Help him find the length of the shortest string which will in turn lead them to the Hawkin’s Lab and save Eleven.input:- https://drive.google.com/file/d/1ip1E74jFN_C9oxiIPRNsvHXT4whxpD4O/view?usp=sharing ",
}





//Setting things up
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");





// HANDLING GET REQUESTS



app.get("/", (req, res) => {
  res.render("login", { eUsername: "", ePassword: "" });
});





app.get("/register", (req, res) => {
  res.render("register", { label: "" });
});





//HANDLING POST REQUETS
app.post("/", (req, res) => {
  var username = String(req.body.username);
  var roll = parseInt(req.body.roll);
  ids.find({ name: username, roll: roll }, function (err, result) {
    if (result.length !== 0) {
      res.render("start", {  user: username });
    } else {
      ids.find({ name: username }, function (err, response) {
        if (response.length !== 0)
          res.render("login", { eUsername: "Incorrect Credentials" });
        else
          res.render("register", {
            label: "Let's get going with Registration",
          });
      })
    }
  });
});

app.post("/game",(req,res)=>{
  res.render("landing", { Teamnumber: "Team1", question: answers.Team1,story: stories.Team1, user: req.body.user });
});



app.post("/register", (req, res) => {
  let iden = new ids({
    
    name: req.body.username,
    college: req.body.college,
    teamleader: req.body.Teamleader,
    rollnumber: req.body.rollnumber,
    mail: req.body.mail,
    teamMember1: req.body.member1,
    rollnumber1: req.body.rollnumber1,
    mail1: req.body.mail1,
    teamMember2: req.body.member2,
    rollnumber2: req.body.rollnumber2,
    mail2: req.body.mail2,
    roll: parseInt(req.body.roll),
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
    question6: false,
    question7: false,
    question8: false,
    question9: false,
    question10: false,
    question11: false
  },
  {
    timestamps: true
  });
  ids.find({ name: iden.name }, function (err, result) {
    if (result.length !== 0) {
      console.log("Team name Already exist");
      res.render("register", { label: "Team name Already Exist" });
    } else {
      ids.create(iden, function (err) {
        if (!err) {
          console.log("Success");
          res.render("success");
        } else {
          console.log(err);
        }
      });
    }
  });
  
});


app.post("/teamselection", (req, res) => {

  const num = req.body.Team;

  ids.findOne({name: req.body.user},function(err,found){
    if(!err){

      if(found.question1 && found.question2 && found.question3 && found.question4 && found.question5 && found.question6 && found.question7 && found.question8 && found.question9 && found.question10 ){
        res.render("final", {Teamnumber: "Team11", user: req.body.user});
      } else{


        switch (num) {
        case "Team1":
          if(found.question1){
            if(found.question6){
              res.render("done", {user: req.body.user });
            } else{
              res.render("landing", { Teamnumber: "Team6",  question: answers.Team6, story: stories.Team6,user: req.body.user });
            } 
          } else res.render("landing", { Teamnumber: "Team1", question: answers.Team1, story: stories.Team1,user: req.body.user });
          break;
        case "Team2":
          if(found.question2){
            if(found.question7){
              res.render("done", {user: req.body.user });
            } else{
              res.render("landing", { Teamnumber: "Team7", question: answers.Team7, story: stories.Team7,user: req.body.user });
            }
          } else res.render("landing", { Teamnumber: "Team2", question: answers.Team2, story: stories.Team2,user: req.body.user });
          break;
        case "Team3":
          if(found.question3){
            if(found.question8){
              res.render("done", {user: req.body.user });
            } else{
              res.render("landing", { Teamnumber: "Team8", question: answers.Team8, story: stories.Team8,user: req.body.user });
            }
          } else res.render("landing", { Teamnumber: "Team3", question: answers.Team3, story: stories.Team3,user: req.body.user });
          break;
        case "Team4":
          if(found.question4){
            if(found.question9){
              res.render("done", {user: req.body.user });
            } else{
              res.render("landing", { Teamnumber: "Team9", question: answers.Team9, story: stories.Team9,user: req.body.user });
            }
          } else res.render("landing", { Teamnumber: "Team4", question: answers.Team4, story: stories.Team4,user: req.body.user });
          break;
        case "Team5":
          if(found.question5){
            if(found.question10){
              res.render("done", {user: req.body.user });
            } else{
            res.render("landing", { Teamnumber: "Team10", question: answers.Team10, story: stories.Team10,user: req.body.user });
            }
          } else res.render("landing", { Teamnumber: "Team5", question: answers.Team5,story: stories.Team5,user: req.body.user });
          break;
      }
      }
    } else{ console.log(err);}
  })
});




app.post("/answer", (req, res) => {



  const ans = String(req.body.Solution);
  console.log(req.body.user);
  console.log(req.body.teamnumber);
  const num = req.body.teamnumber;

  switch (num) {
    case "Team1":
         if (questions.Team1 === ans) {
          console.log("Success");
          ids.findOneAndUpdate({name: req.body.user}, {question1: true}, {returnOriginal: false}, function(err,doc){
            if(err){
              console.log(err);
            } else{
              console.log(doc);
            }
          });
          res.render("landing", { Teamnumber: "Team6", question: answers.Team6,story: stories.Team6, user: req.body.user });
        } else {
          res.render("wrong", {user: req.body.user });
        }
      break;
    case "Team2":
         if (questions.Team2 === ans) {
            console.log("Success");
            ids.findOneAndUpdate({name: req.body.user}, {question2: true}, {returnOriginal: false}, function(err,doc){
            if(err){
              console.log(err);
            } else{
               res.render("landing", { Teamnumber: "Team7", question: answers.Team7,story: stories.Team7, user: req.body.user });
              console.log(doc);
            }
          });
           
          } else {
            res.render("wrong", {user: req.body.user });
          }
      break;
    case "Team3":
          if (questions.Team3 === ans) {
            console.log("Success");
            ids.findOneAndUpdate({name: req.body.user}, {question3: true}, {returnOriginal: false}, function(err,doc){
            if(err){
              console.log(err);
              
            } else{
              console.log(doc);
              res.render("landing", { Teamnumber: "Team8", question: answers.Team8, story: stories.Team8, user: req.body.user });
            }
          });
            
          } else {
            res.render("wrong", {user: req.body.user });
          }
      break;
    case "Team4":
        if (questions.Team4 === ans) {
            console.log("Success");
            ids.findOneAndUpdate({name: req.body.user}, {question4: true}, {returnOriginal: false}, function(err,doc){
            if(err){
              console.log(err);
              
            } else{
              console.log(doc);
            }
          });
            res.render("landing", { Teamnumber: "Team9",  question: answers.Team9,story: stories.Team9, user: req.body.user });
          } else {
            res.render("wrong", {user: req.body.user });
          }
      break;
    case "Team5":
        if (questions.Team5 === ans) {
            console.log("Success");
            ids.findOneAndUpdate({name: req.body.user}, {question5: true}, {returnOriginal: false}, function(err,doc){
            if(err){
              console.log(err);
              
            } else{
              console.log(doc);
            }
          });
            res.render("landing", { Teamnumber: "Team10", question: answers.Team10, story: stories.Team10, user: req.body.user });
          } else {
            res.render("wrong", {user: req.body.user });
          }
      break;
    case "Team6":
        if (questions.Team6 === ans) {
            console.log("Success");
            ids.findOneAndUpdate({name: req.body.user}, {question6: true}, {returnOriginal: false}, function(err,doc){
            if(err){
              console.log(err);
              
            } else{
              console.log(doc);
            }
          });
            res.render("done", {user: req.body.user });
          } else {
            res.render("wrong", {user: req.body.user });
          }
      break;
    case "Team7":
        if (questions.Team7 === ans) {
            console.log("Success");
            ids.findOneAndUpdate({name: req.body.user}, {question7: true}, {returnOriginal: false}, function(err,doc){
            if(err){
              console.log(err);
              
            } else{
              console.log(doc);
            }
          });
            res.render("done", {user: req.body.user });
          } else {
            res.render("wrong", {user: req.body.user });
          }
      break;
    
    case "Team8":
        if (questions.Team8 === ans) {
            console.log("Success");
            ids.findOneAndUpdate({name: req.body.user}, {question8: true}, {returnOriginal: false}, function(err,doc){
            if(err){
              console.log(err);
              
            } else{
              console.log(doc);
            }
          });
            res.render("done", {user: req.body.user });
          } else {
            res.render("wrong", {user: req.body.user });
          }
      break;

    case "Team9":
        if (questions.Team9 === ans) {
            console.log("Success");
            ids.findOneAndUpdate({name: req.body.user}, {question9: true}, {returnOriginal: false}, function(err,doc){
            if(err){
              console.log(err);
              
            } else{
              console.log(doc);
            }
          });
            res.render("done", {user: req.body.user });
          } else {
            res.render("wrong", {user: req.body.user });
          }
      break;

    case "Team10":
        if (questions.Team10 === ans) {
            console.log("Success");
            ids.findOneAndUpdate({name: req.body.user}, {question10: true}, {returnOriginal: false}, function(err,doc){
            if(err){
              console.log(err);
              
            } else{
              console.log(doc);
            }
          });
            res.render("done", {user: req.body.user });
          } else {
            res.render("wrong", {user: req.body.user });
          }
      break;
      case "Team11":
          if (questions.Team11 === ans) {
            console.log("Success");
            ids.findOneAndUpdate({name: req.body.user}, {question11: true}, {returnOriginal: false}, function(err,doc){
            if(err){
              console.log(err);
              
            } else{
              console.log(doc);
            }
          });
            res.render("congo");
          } else {
            res.render("wrong", {user: req.body.user });
          }
      break;
    default:
      break;
  }
 

});


//Server Initialisation
app.listen(process.env.PORT||3000, (req, res) => {
  console.log("Server Up and running at port 3000");
});
