import React from 'react';


import N100Editor from './components/N100Editor.jsx';

import N100Grid from './components/N100Grid.jsx';

import N100sStore from './stores/N100sStore';

import N100Action from './actions/N100Action';


function getStateFromFlux() {

    return {
        isLoading: N100sStore.isLoading(),
        n100s: N100sStore.getN100s()
    };
}

const App = React.createClass({

    getInitialState() {
        return getStateFromFlux();
    },

    componentWillMount() {

        N100Action.loadN100s();
    },

    componentDidMount() {

        N100sStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {


        N100sStore.removeChangeListener(this._onChange);
    },

    handleAddN100(n100){
        
        N100Action.createN100(n100);

    },

    render() {
        return (
            <div className='App'>

                <N100Editor n100={this.handleAddN100}/>

                <N100Grid n100s={this.state.n100s} n100={'Nguyen Tung'} n100ss={[{nv102: 'Nguyen Tung'}, {nv102: 'Nguyen Tung Son'}]} />

            </div>

           
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default App;