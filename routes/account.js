const express = require ('express');
const router = express.Router();
const Acc = require('../models/account');

router.get("/getByUsername/:username", (req, res, next) => {
    Acc.find({"Username": { "$regex": `^(?)${req.params.username.toLowerCase()}`, "$options": "i"}})
        .then(data => res.json(data))
        .catch(next)
});
router.get("/getById/:id", (req, res, next) => {
    Acc.find({"_id":req.params.id})
        .then(data => res.json(data))
        .catch(next)
});
router.get("/getUsername/:id", (req, res, next) => {
    Acc.findById(req.params.id, {'Username':1, '_id':0})
        .then(data=> res.json(data))
        .catch(next)
});
router.get("/getBuilds/:id", (req, res, next) => {
    Acc.findById(req.params.id, {'Builds':1, '_id':0})
        .then(data=> res.json(data))
        .catch(next)
});
router.get("/getComments/:id", (req, res, next) => {
    Acc.findById(req.params.id, {'Comments':1, '_id':0})
        .then(data=> res.json(data))
        .catch(next)
});
router.get("/getReviews/:id", (req, res, next) => {
    Acc.findById(req.params.id, {'Reviews':1, '_id':0})
        .then(data=> res.json(data))
        .catch(next)
});
router.post("/makeAccount", (req, res, next) => {
    if(req.body.Name && req.body.Username && req.body.Password ){
        Acc.find({"Username":req.body.Username})
            .then(data=> {
                if(data.length>0)
                    res.json({
                        error: "Account already exists"
                    });
                else {
                    Acc.create(req.body)
                        .then(data => res.json(data))
                        .catch(next)
                }
            })

    }else {
        res.json({
            error: "an input field is empty"
        })
    }
});
router.delete("/deleteAccount/:id", (req, res, next) => {
    Acc.findByIdAndDelete(req.params.id)
        .then(res.send())
        .catch(next)
});

router.post("/addBuild", (req, res, next) => {
    if(req.body.id && req.body.buildId){
        Acc.findByIdAndUpdate(req.body.id, {$push: {Builds: req.body.buildId} }, {new: true})
            .then(data=> res.json(data))
            .catch(next)
    }else {
        res.json({
            error: "an input field is empty"
        })
    }
});

module.exports = router;
