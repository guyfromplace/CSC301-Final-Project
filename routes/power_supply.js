const express = require ('express');
const router = express.Router();
const PS = require('../models/power_supply');

router.get("/getAll", (req, res, next) => {
    //this will return all the Mobos stored in the database
    PS.find({})
        .then(data => res.json(data))
        .catch(next)
});

router.get("/getBrands", (req, res, next) => {
    //this will return all Mobos from the database
    PS.find({},"Manufacturer")
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
    PS.find({},"Name")
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

router.get("/getPrices", (req, res, next) => {
    //this will return all CPUs from the database
    PS.find({},"Price")
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
router.get("/getEfficiencyRating", (req, res, next) => {
    //this will return all CPUs from the database
    PS.find({},"Efficiency_Rating")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Efficiency_Rating))
                    result.push(obj.Efficiency_Rating);
            }
            res.json(result);
        })
        .catch(next)
});
router.get("/getPowers", (req, res, next) => {
    //this will return all CPUs from the database
    PS.find({},"Power")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Power))
                    result.push(obj.Power);
            }

            res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});

router.get("/getPS/:id",(req, res, next) =>{
    PS.findById(req.params.id)
        .then(data => res.json(data))
        .catch(next)
});

module.exports = router;
