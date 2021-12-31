const { superAdmin } = require("../models");
const { playerUser } = require("../models");

const localPassport = require("../lib/localPassport");

// for jwt Strategy
const format = user => {
  const { id, username, author, score, diamond } = user;
  return {
    id,
    username,
    author,
    score,
    diamond,
    accessToken: user.generateToken(),
  };
};

module.exports = {
  register: (req, res, next) => {
    superAdmin
      .register(req.body)
      .then(() => {
        res.redirect("/login");
      })
      .catch(err => next(err));
  },
  login: localPassport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  }),
  jwtRegister: (req, res, next) => {
    playerUser
      .register(req.body)
      .then(() => {
        res.json({
          messeges: "data berhasil di simpan!",
        });
      })
      .catch(err => next(err));
  },
  jwtLogin: (req, res) => {
    playerUser
      .authenticate(req.body)
      .then(user => {
        res.json(format(user));
      })
      .catch(err => {
        res.json(err);
      });
  },
  apiProfile: (req, res) => {
    const currentUser = req.user;
    res.json(currentUser);
  },
};
