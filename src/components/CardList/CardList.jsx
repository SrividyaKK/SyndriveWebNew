import React from 'react'; 

import CardContents from '../Card/CardContents';
import Card from "components/Card/Card.jsx";
// import CardIcon from "components/Card/CardIcon.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
// import CardFooter from 'components/Card/CardFooter.jsx';
import Checkbox from '@material-ui/core/Checkbox'
import './CardList.css';

// import avatar from "assets/img/faces/marc.jpg";

class CardList extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
    	this.setState({ users: this.props.users })
    }

    deleteCard(i) {
        console.log("run    ");
        const { users } = this.state;
        this.setState({
        	users: users.map((user, index) => {
        				if (index===i) {user.addressed=true}
        				return user;
        			})
        			.filter((user, index) => index!==i)});
        // this.setState({ hidden: !this.state.hidden });
    }

	render() {
		const { users } = this.state;

		return (	
			<div className='card-list'>
				{
					users.map((user, i) => {
						return (
							<Card profile className='ma2 pa4' style={{width: 'auto'}}>
				                <CardAvatar profile>
				                    {/* <img src={`http://robohash.org/${i}`} alt="..." /> */}
									<img src={users[i].imgUrl} alt='profile-photo' />
				                </CardAvatar>
				                { /* <CardBody profile> */}
			                	<CardContents key={i} 
									id={users[i].id} 
									name={users[i].name} 
									dob={users[i].dob}
									bloodGroup={users[i].bloodGroup}
									lat={users[i].location.lat}
									lng={users[i].location.lng}
									// photo={'http://i0.wp.com/www.coldashpreschool.org.uk/wp-content/uploads/2017/01/Blank-Profile-Pic.jpg'}
									contacts={users[i].contacts}
									//isChecked={false}
								/>
				                { /* </CardBody > */}
				               	<div className='tl'>
					                <Checkbox
				                        label='Issue Addressed'
				                        onChange={() => this.deleteCard(i)}
				                    />Issue Addressed
				                </div>
				            </Card >
						);
					})
				}
			</div>
		);
	}
}

export default CardList;