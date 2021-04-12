import React from 'react';
import './Info.css'
import { FaQuestionCircle, FaGithub, FaChrome } from 'react-icons/fa'


const Info = () => {
    return (
        <div className="info text-left row justify-content-center" id="info">


            <h3 className="display-4 text-center col-12 text-theme"> Find Out More</h3>
            <div className="AboutContent col-10">
                <h3>Project Background</h3>
                <p>
                    The GDPR lays out specific requirements on how to request and collect consent – something a lot of websites
                    get wrong. With limited human and technological resources, it is difficult for researchers, activists and
                    authorities to manually inspect all websites for compliance. This project can help solve this by allowing the
                    internet community to report GDPR violations without legal knowledge which allows for the crowdsourcing of
                    possible GDPR violations on a larger scale than before.
            </p>



                <h3>Project Privacy</h3>
                <p>The tool collects no data from the user. It collects no personal data, none of the screenshotted images or any of the user generated documents.
                All data processing of the users annotations and document generation takes place client-side ensuring complete anonymity and privacy</p>



                <h3>Project Implementation</h3>
                <p>The project consists of two parts, the chrome extension and the annotation tool. For information on how to use the tool click here</p>
                <ul>
                    <li>
                        <p>
                            The <b>chrome extension</b> allows users to screenshot their browser  to capture consent dialogue boxes they
                            feel may be violating the law. Users can take as many screenshots necessary before right clicking
                            the chrome extension icon and opening them in the annotation tool.
                    </p>
                    </li>
                    <li>

                        <p>
                            The <b>annotation tool </b>allows users to highlight areas of the image and use checkboxes and text boxes to describe what they feel is wrong with the higlighted area.
                            A report is generated linking the issues they highlighted to the relevant legal clauses so the user can report these possible violations to the relevant authorities.
                    </p>
                    </li>
                </ul>

                <p>All issues in the checkboxes and generated documents can be fully customised as they are generated from JSON files within the project.
                These can be edited by following the instructions in the github repo</p>

                <p>The annotation tool can be used in isolation to highlight issues with images stored on your computer, here.</p>

                <h3>Contributors</h3>
                <br />

                <div className="row">
                    <div className="col">
                        <h4>Brian Lynch</h4>
                        <p>Project Developer</p>
                        <div className="row" style={{"paddingLeft":"15px"}}>
                            <a href="http://github.com/brianlunch" target="_blank"><h4><FaGithub className="zoom"  style={{"marginRight":"12px"}}/></h4></a>
                            <a href="http://github.com/brianlunch" target="_blank"><h4><FaGithub className="zoom" /></h4></a>
                        </div>
                    </div>
                    <div className="col">
                        <h4>Harshvardhan Pandit</h4>
                        <p>Project Supervisor</p>
                        <div className="row" style={{"paddingLeft":"15px"}}>
                            <a href="http://github.com/brianlunch" target="_blank"><h4><FaGithub className="zoom"  style={{"marginRight":"12px"}}/></h4></a>
                            <a href="http://github.com/brianlunch" target="_blank"><h4><FaGithub className="zoom" /></h4></a>
                        </div>
                    </div>
                    <div className="col">
                        <h4>Dave Lewis</h4>
                        <p>Project Supervisor</p>
                        <div className="row" style={{"paddingLeft":"15px"}}>
                            <a href="http://github.com/brianlunch" target="_blank"><h4><FaGithub className="zoom"  style={{"marginRight":"12px"}}/></h4></a>
                            <a href="http://github.com/brianlunch" target="_blank"><h4><FaGithub className="zoom" /></h4></a>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
};



export default Info;