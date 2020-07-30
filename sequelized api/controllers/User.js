const { User } = require("../models/");
const { generateHash } = require("../helper/passwordHash");




///////////RENDERING VIEWS///////////////
const renderSignUp = async function (req, res) {
  return res.render("register");
  
};

const renderLogin = async function(req,res){
  return res.render('login');
}

const renderDashboard = async function(req,res) {
  return res.render('dashboard')
}
/////////////////////////////////////////


const createUser = async (req, res, error) => {
  const body = req.body;
  console.log(body);
  
    await User.create({
      firstName: `${body.fName}`,
      lastName: `${body.lName}`,
      email: `${body.email}`,
      password: generateHash(body.password),
    });
    res.redirect(302, "/users/login");
}


// const deleteUser = async (req, res) => {
//   console.log("delete");
//   await User.destroy({
//     where: {
//       id: req.params.id,
//     },
//   });
//   res.send(`User ${req.params.id} has been deleted!`);
// };

//const singleUser = async (req, res) => {
  //console.log(user);
  /*
  const user = await User.findAll({
    where: {
      id: req.params.id,
    },
  });
  return res.render("users/show.pug", { user });
  console.log(user);
  */
//   const user = await User.findByPk(req.params.id);
//   res.render("users/show.pug", { user });
// };


//Updating User
// const editUser = async function (req, res) {
//   const body = req.body;
//   const user = await User.update(
//     {
//       lastName: `${body.lastName}`,
//       firstName: `${body.firstName}`,
//       email: `${body.email}`,
//       password: `${body.password}`,
//     },
//     {
//       where: { id: `${req.params.id}` },
//     }
//   );
 
// };

module.exports = {
  //listOfUsers,
  renderSignUp,
  renderLogin,
  renderDashboard,
  createUser,
  //deleteUser,
  //editUser
}