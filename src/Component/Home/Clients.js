import React from "react";
import {Link} from "react-router-dom";

import satez from "../../assets/images/client/satez.png"
import trimatric from "../../assets/images/client/trimatric.png"
import uttaran from "../../assets/images/client/uttaran.png"
import indecor from "../../assets/images/client/indecor.png"
import futureBangladesh from "../../assets/images/client/futurebangladesh.png"
import leafmarc from "../../assets/images/client/leafmarc.png"

class Clients extends React.Component{
    render() {
        return(
            <>
                <div className="row mt30">
                    <div className="col-lg-12">
                        <h2 className="sectionTitle">Clients</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <Link to="/">
                                    <img src={satez} alt="Client" />
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="/">
                                    <img src={trimatric} alt="Client" />
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="/">
                                    <img src={uttaran} alt="Client" />
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Link to="/">
                                    <img src={indecor} alt="Client" />
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="/">
                                    <img src={futureBangladesh} alt="Client" />
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="/">
                                    <img src={leafmarc} alt="Client" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Clients;
