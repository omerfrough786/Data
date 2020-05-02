const express = require('express');
const router = express.Router()
let members = require('../../Members')
const uuid = require('uuid')



router.get('/', (req, res) => {res.json(members)})

//Get a single Member
router.get('/:id', (req, res) => {
    
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    }else{
        res.status(404).json({msg: `No member Found with the id of ${req.params.id}`})
    }
})

router.post('/', (req, res) => {
    // res.send(req.body)
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active',
    };
    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg: 'Please add name and email'})
    }
    members.push(newMember)
    // res.json(members)
    res.redirect('/')
})

router.put('/:id', (req, res) => {
    
    const found = members.some(member => member.id === parseInt(req.params.id));
    
    if(found) {
        const updateMember = req.body;
        members.forEach( (member) => {
            if(member.id == parseInt(req.params.id)){
                member.name = updateMember.name ? updateMember.name : member.name;
                member.email = updateMember.email ? updateMember.email : member.email;

                res.json({msg: 'Upaded member', member})
            }
            
        })
            }else{
                res.status(404).json({msg: `No member Found with the id of ${req.params.id}`})
            }
            })

            //Delete Member

            router.delete('/:id', (req, res) => {
    
                const found = members.some(member => member.id === parseInt(req.params.id));
                const paramsID = req.params.id

                if(found) {
                    members = members.filter(({id}) => id !== parseInt(paramsID))
                    res.json({
                        msg: `Member with ID# ${paramsID} Deleted`, members})
                }else{
                    res.status(404).json({msg: `member with  id# ${paramsID} NOT FOUND`})
                }
            })

           

      

module.exports = router