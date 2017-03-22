import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _n100s = [];
let _loadingError = null;
let _isLoading = true;

function formatN100(n100) {
    let _n100 = {
        id: n100._id,
        nv101: n100.NV101,
        nv102: n100.NV102,
        nl145: n100.NL145
    };
    // console.log('formatN100>>>>', _n100)
    return _n100
}

const TasksStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getN100s() {
        return _n100s;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {

    // console.log('actionN100>>>>', action.type, action.n100s);
    switch(action.type) {
        case AppConstants.LOAD_N100S_REQUEST: {
            _isLoading = true;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_N100S_SUCCESS: {
            _isLoading = false;
            _n100s = action.n100s.map( formatN100 );
            _loadingError = null;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_N100S_FAIL: {
            _loadingError = action.error;

            TasksStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler N100S');
        }
    }
});

export default TasksStore;