import React from 'react';
import Contacts from '../Contacts';
import './Card.css'
import MapWithAMarker from '../Map/Map';
// import Checkbox from '@material-ui/core/Checkbox';

class CardContents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        const { name, dob, bloodGroup, id, contacts, lat, lng, isChecked } = this.props;
        const year = Number(dob.substr(6, 4));
        const month = Number(dob.substr(3, 2)) - 1;
        const day = Number(dob.substr(0, 2));
        let today = new Date();
        let age = today.getFullYear() - year;
        if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
            age--;
        }

        return (
            <div>
                <p className='f5'><b>Name: </b>{name}</p>
                <hr class="mw3 bb bw1 b--black-10" />
                <p className='f5 tl'></p>
                <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDBgA7QvYJPhmHlWV5mMskI28-3S_T0VVo&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `300px`, width: `300px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    lat={lat}
                    lng={lng}
                />
                <p className='f6 tl'><b>DOB: </b>{day}.{month + 1}.{year} (Age: {age}) <br />
                <b>Blood Group: </b>{bloodGroup}</p>
                <p className='f6 tl'><b>Emergency Contacts: </b></p>
                {
                    contacts.map((contact, i) => {
                        return (
                            <Contacts key={i}
                                index={i}
                                name={contacts[i].name}
                                number={contacts[i].number}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default CardContents;