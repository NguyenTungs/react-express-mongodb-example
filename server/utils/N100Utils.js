var mongoose = require('mongoose')


require('../models/N100');

const N100 = mongoose.model('N100');


exports.area = () => {
	console.log('tungns')
};


// exports.deleteNote = (id) => {
// 	return Note.findById(id).remove();
// }


//N100 
//

exports.listN100s = () => {
	return N100.find();
};


exports.createN100 = (data) => {


	const n100 = new N100({
        NV101: data.nv101,
	    NV102:  data.nv102,
	    NL145: new Date
    });


	return n100.save();
};
