const express = require('express');
const router = express.Router()
let BookList = require('../../Booklist')
const uuid = require('uuid')



router.get('/', (req, res) => {res.json(BookList)})



router.post('/', (req, res) => {

    const newBook = {
        id: uuid.v4(),
        title: req.body.title,
        author: req.body.author,
    };
    if(!newBook.title || !newBook.author){
        return res.status(400).json({msg: 'Please add Book Name and Author'})
    }
    BookList.push(newBook)
    // res.json(members)
    res.redirect('/')
})

router.delete('/:id', (req, res) => {
    
    const found = BookList.some(book => book.id === parseInt(req.params.id));
    const paramsID = req.params.id

    if(found) {
        book = book.filter(({id}) => id !== parseInt(paramsID))
        res.json({
            msg: `Member with ID# ${paramsID} Deleted`, book})
    }else{
        res.status(404).json({msg: `member with  id# ${paramsID} NOT FOUND`})
    }
})




module.exports = router