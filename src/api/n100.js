


var axios = require('axios');

var config = require('../../etc/config.json');


const apiN100 = {

	listN100s() {
        return axios.get(`${config.apiPrefix}/n100s`);
    },

    createN100(n100) {
    	console.log(`${config.apiPrefix}/n100s`)
        return axios.post(`${config.apiPrefix}/n100s`, n100);
    },
    tungns: function(){
    	console.log('hello')
    }

    
}



export default apiN100;