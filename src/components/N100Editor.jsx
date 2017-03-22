import React from 'react';

import N100Action from '../actions/N100Action';



const N100Editor = React.createClass({

	getInitialState(){
		return {
			nv101: '',
			nv102: ''
		}
	},

	handleNV101Change(event){

		this.setState({nv101: event.target.value})

	},

	handleNV102Change(event){
		this.setState({nv102: event.target.value})
	},

	handleAddN100(e){
		

		let n100 = {
			nv101: this.state.nv101,
			nv102: this.state.nv102
		}

		console.log('handleAddN100<>>>', N100Action);

		this.props.n100(n100)

		this.setState({nv101: '', nv102: ''});
	},

	render(){

		return (
			<div>
				<input type='text' value={this.state.nv101} onChange={this.handleNV101Change} />
				
				<input type='text' value={this.state.nv102} onChange={this.handleNV102Change} />
				

				<button onClick={this.handleAddN100}> Add N100 </button>
			</div>
		)


	}
});

export default N100Editor;