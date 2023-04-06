const express = require('express')
const router = express.Router()
const cors = require('cors')
const apiuser = require('../schema/schema')
const apidata = require('../schema/schema')

// ----------------------------------------create------------------------------------------//
router.post('/post', async (req, res) => {
          const { name, age, company, jobrole } = req.body
          const user = await new apiuser({
                    name: name,
                    age: age,
                    company: company,
                    jobrole: jobrole

          })

          try {
                    user.save().then(() => {
                              res.send("saved")
                    }).catch((e) => {
                              console.log(e)
                    })

          } catch (err) {
                    res.send(err)
          }



})

// ----------------------------------------update-------------------------------------------//
router.patch('/update/:id', async (req, res) => {
          try {
                    const { age, jobrole } = req.body
                    const find = await apidata.findById(req.params.id)
                    find.age = age
                    find.jobrole = jobrole

                    find.save().then(() => {
                              res.send(find)
                    }).catch((e) => {
                              console.log(e)
                    })





          } catch (e) {
                    res.send(e)
          }


})

// -----------------------------------------read---------------------------------------------//
router.get('/get', async (req, res) => {
          try {
                    const data = await apidata.find({})
                    res.send({ "employees": data })
          }
          catch (err) {
                    res.send(err)

          }

})

// ----------------------------------------delete--------------------------------------------//
router.delete('/delete/:id', async (req, res) => {
          try {
                    const del = await apidata.findByIdAndDelete(req.params.id)
                    res.send(del)

          } catch (e) {
                    console.log(e)
          }


})




module.exports = router;