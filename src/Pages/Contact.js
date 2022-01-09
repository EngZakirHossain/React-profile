import React from "react";
import Map from "../Component/Map";
import {ContactForm} from "../Component/ContactForm";

class Contact extends React.Component{
    render() {
        return(
            <>
                <Map />
                <section className="comonSection contactSection">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="sectionTitle">Contact Me</h2>
                            </div>
                        </div>
                        <div className="row mb30">
                            <div className="col-lg-12">
                                <div className="contact_form">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Contact;
