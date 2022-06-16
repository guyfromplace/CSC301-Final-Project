const express = require ('express');
const router = express.Router();
const GPU = require('../models/gpu');

router.get("/getAll", (req, res, next) => {
    //this will return all the Mobos stored in the database
    GPU.find({})
        .then(data => res.json(data))
        .catch(next)
});

router.get("/getBrands", (req, res, next) => {
    //this will return all Mobos from the database
    GPU.find({},"Manufacturer")
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
    GPU.find({},"Name")
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
    GPU.find({},"Price")
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

router.get("/getPowers", (req, res, next) => {
    //this will return all CPUs from the database
    GPU.find({},"Power")
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
router.get("/getChipBrands", (req, res, next) => {
    //this will return all Mobos from the database
    GPU.find({},"Chipset_Manufacturer")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Chipset_Manufacturer))
                    result.push(obj.Chipset_Manufacturer);
            }
            res.json(result);
        })
        .catch(next)
});

router.get("/getClocks", (req, res, next) => {
    //this will return all CPUs from the database
    GPU.find({},"Clock")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.Clock))
                    result.push(obj.Clock);
            }

            res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});
router.get("/getInterfaces", (req, res, next) => {
    //this will return all CPUs from the database
    GPU.find({},"Interface")
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
router.get("/getVRAMs", (req, res, next) => {
    //this will return all CPUs from the database
    GPU.find({},"VRAM")
        .then(data => {
            const result =[];
            for (var i in data) {
                var obj = JSON.parse(JSON.stringify(data[i]));
                if(!result.includes(obj.VRAM))
                    result.push(obj.VRAM);
            }

            res.json(result.sort(function(a, b){return a-b}));
        })
        .catch(next)
});

router.get("/getGPU/:id",(req, res, next) =>{
    GPU.findById(req.params.id)
        .then(data => res.json(data))
        .catch(next)
});

module.exports = router;
