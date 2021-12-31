var express = require('express');
var router = express.Router();
const auth = require('../controllers/authControllers')
const localRestrict = require('../middleware/localRestrict')
const jwtRestrict = require('../middleware/jwtRestrict')
const {playerUser} = require('../models')
const {superAdmin} = require('../models')



/* GET home page. */

router.get('/admin/register', (req, res) => {
  res.render('register', {title: 'Register'})
})
router.post('/admin/register', auth.register)



router.get('/login', (req, res) => {
  const title = 'Login'
  res.render('login', {title})
})
router.post('/login', auth.login)


router.get('/',localRestrict,async function(req, res, next) {
  const dataPlayer = await playerUser.findAll()
  const admin = req.user.dataValues.username
  res.render('dashboard', { title: 'Express', admin , players:dataPlayer});
});


router.get('/player/:id', localRestrict, async(req, res) => {
  const id = req.params.id
  const admin = req.user.dataValues.username
  await playerUser.findOne({
    where: {id: id}
  }).then(player => {
    res.render('player', {title:'profile', player, admin})
  })
  .catch(err => res.send(err))
})



router.get('/delete/:id', async(req, res) => {
  const id = req.params.id
  await playerUser.destroy({
    where: {id: id}
  })
  .then(() => res.redirect('/'))
  .catch((err) => {
    console.log(err);
    res.json({
      messege:'filed to delete',
      err:err
    })
  })
})



router.get('/update/:id', localRestrict, async(req, res) => {
  const id = req.params.id
  const admin = req.user.dataValues.username
  await playerUser.findOne({
    where:{id:id}
  })
  .then(player => {
    res.render('update', {title:'Update',admin, player})
  })
  .catch(err => res.send(err))
})

router.post('/update/:id', async(req, res) => {
  const id = req.params.id
  await playerUser.update({
    username:req.body.username,
    score:req.body.score,
    diamond:req.body.diamond
  },{
    returning:true,
    where: {id: id}
  })
  .then(() => res.redirect('/'))
  .catch((err) => {
    console.log(err);
    res.send('updating filed')
  })
})

router.get('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})


// api router

router.post('/api/register', auth.jwtRegister)
router.post('/api/login', auth.jwtLogin)
router.get('/api/profile', jwtRestrict, auth.apiProfile)


module.exports = router;
