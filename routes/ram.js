const express = require ('express');
const router = express.Router();
const RAM = require('../models/ram');

router.get("/getAll", (req, res, next) => {
    //this will return all the Mobos stored in the database
    RAM.find({})
        .then(data => res.json(data))
        .catch(next)
});

router.get("/getBrands", (req, res, next) => {
    //this will return all Mobos from the database
    RAM.find({},"Manufacturer")
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
    RAM.find({},"Name")
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
    RAM.find({},"Price")
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
router.get("/getTypes", (req, res, next) => {
    //this will return all CPUs from the database
    RAM.find({},"Type")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Type))
                    result.push(obj.Type);
            }
            res.json(result);
        })
        .catch(next)
});
router.get("/getSpeeds", (req, res, next) => {
    //this will return all CPUs from the database
    RAM.find({},"Speed")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Speed))
                    result.push(obj.Speed);
            }

            res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});
router.get("/getCapacites", (req, res, next) => {
    //this will return all CPUs from the database
    RAM.find({},"Capacity")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Capacity))
                    result.push(obj.Capacity);
            }

            res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});
router.get("/getSlots", (req, res, next) => {
    //this will return all CPUs from the database
    RAM.find({},"Slots")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Slots))
                    result.push(obj.Slots);
            }

            res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});

router.get("/getRAM/:id",(req, res, next) =>{
    RAM.findById(req.params.id)
        .then(data => res.json(data))
        .catch(next)
});
module.exports = router;
