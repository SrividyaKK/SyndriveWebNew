import React from 'react';

const Contacts = ({ name, number, key, index }) => {
	return (
		<div className='container-fluid row'>
			<div className='tl col-md-2'>
				<div>
					<b>{index+1}. Name: </b>{name} <br />
					<b>Ph: </b>{number} <br />
				</div>
			</div>
		</div>
	);
}

export default Contacts;