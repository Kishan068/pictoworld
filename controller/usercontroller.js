var usermodel = require('../model/usermodel');
var categorymodel = require('../model/categorymodel');

exports.puzzle = async (req,res) => {

    var image_name = req.file.originalname;

    function makeid(length)
    {
        let result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        let counter = 0;
        while (counter < length)
        {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    
    var f_name = req.body.name.toUpperCase();
    var total_char = f_name.length;
    var name = makeid(14 - total_char);
    var f1_name = name + f_name;
    var shuffled = f1_name.split('').sort(function(){return 0.5 - Math.random()}).join('');

    req.body.name;
    req.body.puzzle_name = shuffled;
    req.body.image = image_name;

    var data = await usermodel.create(req.body);

    res.status(200).json({
        status:"Image Uploaded",
        data
    })
}

exports.category = async (req,res) => {

    var image_name = req.file.originalname;

    req.body.name;
    req.body.image = image_name;

    var data = await categorymodel.create(req.body);

    res.status(200).json({
        status:"Category Created",
        data
    })
}

exports.select = async (req,res) => {
    
    var data = await usermodel.find({"cat_id":req.params.id});

    res.status(200).json(
        data
    )
}

exports.get_all_cat = async (req,res) => {
    
    var data = await categorymodel.find();

    res.status(200).json(
        data
    )
}
