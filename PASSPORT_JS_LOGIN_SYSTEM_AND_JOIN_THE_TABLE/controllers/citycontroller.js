const contryModel = require('../models/contryModel')
const stateModel = require('../models/stateModel')
const cityModle = require('../models/cityModel');


const viewcitypage = async (req, res) => {
    try {
        let city = await cityModle.find({}).populate("contryId").populate('stateId');
        // console.log(city);
        
        return res.render('city/view_city',{
            city:city
        })

    } catch (error) {
        console.log(error);
        return false;

    }
}
const addcitypage = async(req, res) => {
    try {
        const contry = await contryModel.find({})
        const state = await stateModel.find({})
        return res.render('city/add_city',{
            contry:contry,
            state:state
        })
        
    } catch (error) {
        console.log(error);
        return false;
        
    }
}

const insertcitypage = async (req, res) => {
    try {
        const{contry, state,city} = req.body;
         console.log(req.body);
        await cityModle.create({
            contryId: contry,
            stateId: state,
            city:city

        })
        console.log('Added city...');
        return res.redirect('/city')


    } catch (error) {
        console.log(error);
        return false;

    }

}

const deletecitypage = async (req, res) => {
    try {
        deleteid = req.query.deleteId;
        // console.log(deleteid);

        await cityModle.findByIdAndDelete(deleteid);
        console.log('city Deleted...');
        return res.redirect('/city')

    } catch (error) {
        console.log(error);
        return false;

    }
}
const editcitypage = async (req, res) => {
    try {
        editid = req.query.editid;
        // console.log(editid);
        const contry = await contryModel.find({})
        const state = await stateModel.find({}).populate("contryId")
        const single = await cityModle.findById(editid).populate("contryId").populate("stateId");;
        // console.log(single);
        
        return res.render('city/edit_city', {
            single:single,
            contry:contry,
            state:state
        })

    } catch (error) {
        console.log(error);
        return false;

    }
}

const updatecitypage = async (req, res) => {
    try {
        const { editid, contry , state,city} = req.body;
        // console.log(editid,contry);
        await cityModle.findByIdAndUpdate(editid, {
            contryId: contry,
            subcontryId: state,
            city:city
        })
        console.log('city Updated...');
        return res.redirect('/city')
        

    } catch (error) {
        console.log(error);
        return false;

    }
}

// Ajex fot filter contrywise
const contrywisefilter = async(req,res) => {
    try{
        let id = req.query.id;
        let subcat = await stateModel.find({}).populate("contryId");
        let fil = subcat.filter((val)=>{
            return val.contryId.id == id;
        })
        return res.json({
            contry : fil
        })
    }catch(err){
        console.log(err);
        return false;
    }
}
module.exports = {

    contrywisefilter,viewcitypage, addcitypage,insertcitypage,deletecitypage,editcitypage,updatecitypage
}