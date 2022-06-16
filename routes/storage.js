const express = require ('express');
const router = express.Router();
const Stor = require('../models/storage');

router.get("/getAll", (req, res, next) => {
    //this will return all the Mobos stored in the database
    Stor.find({})
        .then(data => res.json(data))
        .catch(next)
});

router.get("/getBrands", (req, res, next) => {
    //this will return all Mobos from the database
    Stor.find({},"Manufacturer")
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
    Stor.find({},"Name")
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
    Stor.find({},"Price")
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
    Stor.find({},"Type")
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
router.get("/getCapacites", (req, res, next) => {
    //this will return all CPUs from the database
    Stor.find({},"Capacity")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Capacity))
                    result.push(obj.Capacity);
            }
            res.json(result);
        })
        .catch(next)
});
router.get("/getSpeeds", (req, res, next) => {
    //this will return all CPUs from the database
    Stor.find({},"Speed")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Speed))
                    result.push(obj.Speed);
            }
            res.json(result);
        })
        .catch(next)
});
router.get("/getInterfaces", (req, res, next) => {
    //this will return all CPUs from the database
    Stor.find({},"Interface")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Interface))
                    result.push(obj.Interface);
            }
            res.json(result);
        })
        .catch(next)
});
router.get("/getProtocols", (req, res, next) => {
    //this will return all CPUs from the database
    Stor.find({},"Protocol")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Protocol))
                    result.push(obj.Protocol);
            }
            res.json(result);
        })
        .catch(next)
});
router.get("/getPowers", (req, res, next) => {
    //this will return all CPUs from the database
    Stor.find({},"Power")
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

router.get("/getStorage/:id",(req, res, next) =>{
    Stor.findById(req.params.id)
        .then(data => res.json(data))
        .catch(next)
});

module.exports = router;
