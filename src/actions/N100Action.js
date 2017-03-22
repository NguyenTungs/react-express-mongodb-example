

import AppDispatcher from '../dispatcher/AppDispatcher';

import Constants from '../constants/AppConstants';

import api from '../api/n100';

const N100Action = {

    loadN100s() {

        console.log('loadN100s');

        AppDispatcher.dispatch({
            type: Constants.LOAD_N100S_REQUEST
        });

        api.listN100s()
            .then(({ data }) =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_N100S_SUCCESS,
                    n100s: data
                })
            )
            .catch(err =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_N100S_FAIL,
                    error: err
                })
            );
    },
    createN100(n100) {

        api.createN100(n100).then(() =>

                this.loadN100s()
            )
            .catch(err =>
                console.error(err)
            );
    }

}



export default N100Action;
