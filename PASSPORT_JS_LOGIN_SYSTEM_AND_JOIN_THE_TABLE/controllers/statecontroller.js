const contryModle = require('../models/contryModel')
const stateModle = require('../models/stateModel')

const Viewstatepage = async (req, res) => {
    try {
        let state = await stateModle.find({}).populate("contryId");
        console.log(state);
        
        return res.render('state/view_state',{
            state:state
        })

    } catch (error) {
        console.log(error);
        return false;

    }
}
const Addstatepage = async(req, res) => {
    try {
        const contry = await contryModle.find({})
        return res.render('state/Add_state',{
            contry:contry
        })
        
    } catch (error) {
        console.log(error);
        return false;
        
    }
}

const insertstatepage = async (req, res) => {
    // console.log(req.body.contry);
    try {
        const{contry, state} = req.body
        console.log(req.body);
        
        
        await stateModle.create({
            contryId: contry,
            state: state

        })
        console.log('Added state...');
        return res.redirect('/state')


    } catch (error) {
        console.log(error);
        return false;

    }



}

const deletstate = async (req, res) => {
    try {
        deleteid = req.query.deleteId;
        // console.log(deleteid);

        await stateModle.findByIdAndDelete(deleteid);
        console.log('state Deleted...');
        return res.redirect('/state')

    } catch (error) {
        console.log(error);
        return false;

    }
}
const editstate = async (req, res) => {
    try {
        editid = req.query.subeditid;
        // console.log(editid);
        const contry = await contryModle.find({})
        const single = await stateModle.findById(editid).populate("contryId");
        // console.log(single);
        
        return res.render('state/edit_state', {
            single:single,
            contry:contry
        })

    } catch (error) {
        console.log(error);
        return false;

    }
}

const updatestate = async (req, res) => {
    try {
        const { editid, contry , state} = req.body;
        // console.log(editid,contry);
        await stateModle.findByIdAndUpdate(editid, {
            contryId: contry,
            state: state
        })
        console.log('state Updated...');
        return res.redirect('/state')
        

    } catch (error) {
        console.log(error);
        return false;

    }
}

module.exports = {
    Viewstatepage, Addstatepage,insertstatepage,deletstate, editstate,updatestate 
}