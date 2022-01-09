import React from "react";

import profile from "../assets/images/zakir.png"
import {ExternalLink} from "react-external-link";
import {Link} from "react-router-dom";

class ProfileSidebar extends React.Component{
    render() {
        return(
            <>
                <div className="col-lg-4 profileColumn">
                    <div className="profileSidebar">
                        <div className="psHeader">
                            <svg preserveAspectRatio="none" viewBox="0 0 100 100">
                                <polygon points="0 20, 100 20, 0 100" opacity=".65"></polygon>
                            </svg>
                            <svg className="svg2" preserveAspectRatio="none" viewBox="0 0 100 120">
                                <polygon points="0 20, 100 20, 15 120" opacity=".8"></polygon>
                            </svg>
                            <div className="psContent" >
                                <h3 style={{color: '#00000'}}>Zakir Hossain</h3>
                                <span style={{color: '#00000'}}>Web Design & Developer</span>
                            </div>
                        </div>
                        <div className="psPhoto">
                            <img src={profile} alt="" />
                            <div className="psSocial">
                                <ExternalLink href="https://github.com/EngZakirHossain" target="_blank" className="git" data-toggle="tooltip" data-placement="top" title="GitHub">
                                    <i className="icofont-github"></i>
                                </ExternalLink>
                                <ExternalLink href="https://www.linkedin.com/in/zakirhossain4969/" target="_blank" className="link" data-toggle="tooltip" data-placement="top" title="linkedin">
                                    <i className="icofont-linkedin"></i>
                                </ExternalLink>
                                <ExternalLink href="https://www.facebook.com/zakir.hossain.4969/" target="_blank" className="fac" data-toggle="tooltip" data-placement="top" title="facebook">
                                    <i className="icofont-facebook"></i>
                                </ExternalLink>
                                <ExternalLink href="https://twitter.com/Zakir4969" target="_blank" className="ins" data-toggle="tooltip" data-placement="top" title="instagram">
                                    <i className="icofont-twitter"></i>
                                </ExternalLink>
                                <ExternalLink href="https://www.fiverr.com/zakirhossain281" target="_blank" className="fac" data-toggle="tooltip" data-placement="top" title="fiverr">
                                    <i className="icofont-code"></i>
                                </ExternalLink>
                            </div>
                        </div>
                        <div className="psSkills">
                            <div className="pssBox" data-count="82">
                                <div className="pssbCount">82.</div>
                                <h5>Backend Development</h5>
                                <div className="pssbBars">
                                    <div className="pssbBar" style={{width: '82%'}}></div>
                                </div>
                            </div>
                            <div className="pssBox" data-count="75">
                                <div className="pssbCount">75.</div>
                                <h5>Frontend Development</h5>
                                <div className="pssbBars">
                                    <div className="pssbBar gr2" style={{width: '75%'}}></div>
                                </div>
                            </div>
                            <div className="pssBox" data-count="90">
                                <div className="pssbCount">90.</div>
                                <h5>UI UX</h5>
                                <div className="pssbBars">
                                    <div className="pssbBar gr3" style={{width: '90%'}}></div>
                                </div>
                            </div>
                            <div className="pssBox" data-count="90">
                                <div className="pssbCount">95.</div>
                                <h5>Shopify Designer</h5>
                                <div className="pssbBars">
                                    <div className="pssbBar gr3" style={{width: '95%'}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="psFooter">
                            <Link to="/" className="btt_btn only_icon btt_reverse"><span><i className="icon icon-DownloadCloud"></i></span></Link>
                            <Link to="/contact" className="btt_btn"><span><i className="icon icon-Bag"></i> Hire Me</span></Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProfileSidebar;
