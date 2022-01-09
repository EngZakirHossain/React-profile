import React from "react";


class Preloader extends React.Component{
    render() {
        return(
            <>
                <div className="preloader">
                    <div className="preloader-inner">
                        <div className="preloader-box">
                            <div className="letter">Z</div>
                            <div className="letter">A</div>
                            <div className="letter">K</div>
                            <div className="letter">I</div>
                            <div className="letter">R</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Preloader;
