import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    {
        const { lat, lng } = props;
        return (
            <GoogleMap
                defaultZoom={17}
                defaultCenter={{ lat, lng }}
            >
                <Marker
                    position={{ lat, lng }}
                />
            </GoogleMap>
        )
    }
));

export default MapWithAMarker;