const { Router } = require('express');
const { getList, saveList,editList, deleteList,  } = require('./listController');
const router = Router();

router.get('/', getList);

router.post('/saveList',saveList);

router.put('/editList' , editList)

router.delete('/deleteList', deleteList)



module.exports = router;