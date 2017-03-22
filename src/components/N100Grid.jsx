
import React from 'react';

import N100 from './N100.jsx';

const N100Grid = React.createClass({

	render(){

		return (

			<div>

				{
					this.props.n100s.map( n100 =>
					  	<N100 key={n100.id} id={ n100.id } nv102={ n100.nv102 } nv101={ n100.nv101 }/>
					)
				}

			</div>

		)
	}


});


export default N100Grid;