const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const auth = require('../middleware/auth');

//=======================================================================>>>

router.post('/createUser', userController.createUser);

router.post('/loginUser',userController.loginUser);

router.get('/getUser/:userId', auth.validToken, auth.authorization , userController.getUser);

router.put('/updatedUser/:userId',auth.validToken, auth.authorization,userController.updateUser);

router.delete('/deleteUser/:userId',auth.validToken,auth.authorization, userController.deleteUser);


module.exports = router;

