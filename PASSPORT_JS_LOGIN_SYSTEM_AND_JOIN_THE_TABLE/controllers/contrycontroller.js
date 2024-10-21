const contryModle = require('../models/contryModel')

const Viewcontry = async (req, res) => {
    try {
        const contry = await contryModle.find({});
        return res.render('contry/view_contry', {
            contry: contry
        })

    } catch (error) {
        console.log(error);
        return false;

    }
}
const Addcontry = (req, res) => {
    return res.render('contry/add_contry')
}

const insertcontry = async (req, res) => {
    // console.log(req.body.contry);
    try {
        const contry = req.body.contry;
        await contryModle.create({
            contry: contry,

        })
        // console.log('contry add');
        req.flash('success', "contry Add Successfully");
           
        return res.redirect('/contry')


    } catch (error) {
        console.log(error);
        return false;

    }



}

const deletcontry = async (req, res) => {
    try {
        deleteid = req.query.deleteId;
        console.log(deleteid);

        await contryModle.findByIdAndDelete(deleteid);
        console.log('contry deleteee');
        req.flash('success', "contry Deleted Successfully");
      
        return res.redirect('/contry')

    } catch (error) {
        console.log(error);
        return false;

    }
}
const editcontry = async (req, res) => {
    try {
        editid = req.query.editid;
        console.log(editid);
        const single = await contryModle.findById(editid);
        return res.render('contry/edit_contry', {
            single
        })
       
    } catch (error) {
        console.log(error);
        return false;

    }
}

const updatecontry = async (req, res) => {
    try {
        const { editid, contry } = req.body;
        await contryModle.findByIdAndUpdate(editid, {
            contry: contry
        })
        console.log('your contry is being updated');
        return res.redirect('/contry')
        

    } catch (error) {
        console.log(error);
        return false;

    }
}
module.exports = {
    Viewcontry, Addcontry, insertcontry, deletcontry, editcontry, updatecontry
}