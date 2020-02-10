const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // const email = req.body.email;
  // const password = req.body.password;

//   User.findOne({email})
//     .then(user => {
//       if (!user) {
//         // Use the validations to send the error
//         errors.email = 'User not found';
//         return res.status(404).json(errors);
//       }

//       bcrypt.compare(password, user.password)
//         .then(isMatch => {
//           if (isMatch) {
//             res.json({msg: 'Success'});
//           } else {
//             // And here:
//             errors.password = 'Incorrect password'
//             return res.status(400).json(errors);
//           }
//         })
//     })
// })

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
