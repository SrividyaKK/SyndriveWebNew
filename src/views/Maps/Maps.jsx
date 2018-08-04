import React from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

//Getting current location
let lat, lng;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
    });
}
if(lat==undefined || lng==undefined) 
{
    lat = 9.978221;
    lng = 76.2795793
}

const CustomSkinMap = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={18}
            defaultCenter={{ lat, lng }}
        >
            <Marker
                position={{ lat, lng }}
            />
        </GoogleMap>
    ))
);

function Maps({ ...props }) {
    return (
        <CustomSkinMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDBgA7QvYJPhmHlWV5mMskI28-3S_T0VVo"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    );
}

export default Maps;
