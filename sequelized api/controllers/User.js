const { User } = require("../models");

// const listOfUsers = async function (req, res) {
//   const users = await User.findAll();
//   //return res.send(users);
//   return res.render("users/index.pug", { users });
// };


///////////RENDERING VIEWS///////////////
const renderSignUp = function (req, res) {
  return res.render("register");
  
};

const renderLogin = function(req,res){
  return res.render('login');
}

const renderDashboard = function(req,res) {
  return res.render('dashboard')
}
/////////////////////////////////////////


const createUser = async function (req, res) {
  const body = req.body;
  console.log(body);
  await User.create({
    lastName: `${body.lName}`, 
    firstName: `${body.fName}`, 
    email: `${body.email}` , 
    password: `${body.password}`});
  res.redirect(302, "/users/login");
  // } catch (err) {
  //   console.log("error", err);
  //   return res.status(504).send({
  //   res.status(504).send({
  //     error: err.errors[0].message,
  //   });
  
};
//Delete Implementation
// res.redirect("/users?message=delete is done");

const deleteUser = async (req, res) => {
  console.log("delete");
  await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send(`User ${req.params.id} has been deleted!`);
};

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

//Update
const updateUser = async (req, res) => {
  console.log("update user");
//Edit Post Render
// const renderEditUser = async function (req, res) {
//   const user = await User.findByPk(req.params.id);
//   res.render("users/edit.pug", {user});
//   }
}
//Updating User
const editUser = async function (req, res) {
  const body = req.body;
  const user = await User.update(
    {
      lastName: `${body.lastName}`,
      firstName: `${body.firstName}`,
      email: `${body.email}`,
      address: `${body.address}`,
      phoneNumber: `${body.phoneNumber}`,
      picture: `${body.picture}`,
    },
    {
      where: { id: `${req.params.id}` },
    }
  );
  //return res.send(users);
  return res.json({ user });
  console.log(body);
  try {
    const user = await User.findByPk(req.params.id);
    await user.update({
      lastName: body.lName,
      firstName: body.fName,
      email: body.email,
      address: body.address,
      phoneNumber: body.phone,
      picture: body.picture,
    });
    res.redirect(302, `/users/${user.id}`);
  } catch (err) {
    console.log("error", err);
    return res.status(504).send({
      error: err.errors[0].message,
    });
  }
};

module.exports = {
  //listOfUsers,
  renderSignUp,
  renderLogin,
  renderDashboard,
  createUser,
  deleteUser,
  //singleUser,
  updateUser,
  editUser
}