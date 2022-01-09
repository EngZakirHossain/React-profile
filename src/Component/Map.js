import React from "react";
import GoogleMapReact from 'google-map-react';

import Marker from "../assets/images/marker.png";

const MyLocation = ({ text }) => <div><img src={Marker} className="signImg" alt="location" /><strong>{text}</strong></div>;

class Map extends React.Component{
    static defaultProps = {
        center: {
            lat: 23.774624,
            lng: 90.355275,
        },
        zoom: 16
    };

    render() {
        return(
            <>
                <section className="comonSection mapSection mb30">
                    <div className="map">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyBJtPMZ_LWZKuHTLq5o08KSncQufIhPU3o' }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                            <MyLocation
                                lat={23.774624}
                                lng={90.355275}
                                text="Home"
                            />

                        </GoogleMapReact>
                    </div>
                </section>
            </>
        );
    }
}



export default Map;

