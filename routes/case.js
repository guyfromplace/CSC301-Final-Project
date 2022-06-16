const express = require ('express');
const router = express.Router();
const Case = require('../models/case');

router.get("/getAll", (req, res, next) => {
    //this will return all the Mobos stored in the database
    Case.find({})
        .then(data => res.json(data))
        .catch(next)
});

router.get("/getBrands", (req, res, next) => {
    //this will return all Mobos from the database
    Case.find({},"Manufacturer")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Manufacturer))
                    result.push(obj.Manufacturer);
            }
            res.json(result);
        })
        .catch(next)
});

router.get("/getNames", (req, res, next) => {
    //this will return all CPUs from the database
    Case.find({},"Name")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Name))
                    result.push(obj.Name);
            }
            res.json(result);
        })
        .catch(next)
});

router.get("/getColors", (req, res, next) => {
    //this will return all CPUs from the database
    Case.find({},"Color")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Color))
                    result.push(obj.Color);
            }
            res.json(result);
        })
        .catch(next)
});

router.get("/getFormFactors", (req, res, next) => {
    //this will return all CPUs from the database
    Case.find({},"Form_Factor")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Form_Factor))
                    result.push(obj.Form_Factor);
            }
            res.json(result);
        })
        .catch(next)
});
router.get("/getPrices", (req, res, next) => {
    //this will return all CPUs from the database
    Case.find({},"Price")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Price))
                    result.push(obj.Price);
            }

            res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});

router.get("/getCase/:id",(req, res, next) =>{
    Case.findById(req.params.id)
        .then(data => res.json(data))
        .catch(next)
});

module.exports = router;
