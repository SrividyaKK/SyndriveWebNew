import React from "react";
import users from '../../components/users';
import CardList from '../../components/CardList/CardList';

class AdmitHistory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		}
	}
	componentDidMount() {
    	this.setState({ users: users.filter((user) => user.addressed) })
    }

	render() {
		return (!users.length)?
			<h1 className='f4'>Your history would appear here</h1> 
			:
			<div>
				<CardList users={this.state.users} />
			</div>
	}
}

export default AdmitHistory;