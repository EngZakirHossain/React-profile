import React, {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";
import {ExternalLink} from "react-external-link";

function Education (){

    const [education, setEducation] = useState([]);
    const educationCollectionRef = collection(db, "educations");

    useEffect(() => {
        const getEducation = async () => {
            const data = await getDocs(educationCollectionRef);
            // console.log(data);
            setEducation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        }
        getEducation();
    }, []);


    return(
        <>
            <div className="col-lg-6">
                <h2 className="sectionTitle">Education</h2>
                <div className="kr-accordion" id="edication_accordion">

                    {education.map((edu) => {
                        return(
                            <>
                                <div className="card">
                                    <div className="card-header" id="ea_01">
                                        <h2 className="mb-0">
                                            <ExternalLink className="" href="#" data-toggle="collapse" data-target="#ea_col_01" aria-expanded="true" aria-controls="ea_col_01">
                                                <i className="icon icon-Medal"></i>
                                                <span>{edu.name}</span>
                                            </ExternalLink>
                                        </h2>
                                    </div>
                                    <div id="ea_col_01" className="collapse show" aria-labelledby="ea_01"
                                         data-parent="#edication_accordion">
                                        <div className="card-body">
                                            <div className="ac_meta"><span>{edu.field}</span><span>Passing Year: {edu.end}</span><span>{edu.cgpa}</span>
                                            </div>
                                            {edu.description}
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}

                </div>
            </div>
        </>
    );
}

export default Education;
