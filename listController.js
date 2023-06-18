const listModel = require('./listModel');

//GET 
module.exports.getList = async ( req, res ) => {
    const myList = await listModel.find();
    res.send(myList)
}

//post
module.exports.saveList = async (req, res) => {
    const { title } = req.body;
    listModel.create({ title })
    .then((data) => {
        console.log('list added')
        res.send(data)
    })
}

//put 

module.exports.editList = async ( req, res) => {
    const { _id, title} = req.body;
    listModel.findByIdAndUpdate(_id, {title})
    .then(() => res.send('Edited'))
}
//delete
module.exports.deleteList = async (req , res) => {
    const { _id } = req.body;
    listModel.findByIdAndDelete(_id)
    .then(() => res.send('deleted'))
}