import React from 'react';
import Navbar from '../Components/transparent-nav/Navbar'
import Help from '../Components/Help/Help'
import Header from '../Components/Header/Header'
import Info from '../Components/Info/Info';
import HowToGif from '../images/HowToHighlight.gif'
import HowToExt from '../images/HowToExt1.gif'
import DocGif from '../images/DocGif.gif'


const HowTo = () => {
    return (
        <div>
            <Navbar className="navbarC" />
            <br /><br /><br />
            <h3 className="display-4 text-center col-12 text-theme"> How To </h3>

            <div className="row align-items-end howTo">


                <div className="col-xl-7 text-left">
                    <h3 className="text-theme">Using the Chrome Extension</h3>
                    <p>The chrome extension screenshots the users browser window. The user can screenshot as many screenshots ncessary, the amount of screenshot will appear beside the tool icon.</p>
                    <h4>Instructions</h4>
                    <ul>
                        <li>Install the extension from the chrome store and it it to your extension toolbar.</li>
                        <li>Click the extension icon to take a screenshot. Take as many as necessary.</li>
                        <li>Right-click the extension icon and click 'Open Annotation tool with Screenhots' to annotate the screenshots. </li>
                    </ul>
                </div>
                <div className="col-xl-5">
                    <img className="gif" id="gif" src={HowToExt} />
                </div>

            </div>

            <div className="row align-items-end howTo">

                <div className="col-lg-7 text-left">
                    <h3 className="text-theme"  >Using the Annotation Tool</h3>
                    <p>The purpose of this tool is to highlight problematic areas of a consent dialogue box and note the issues with the highlighted areas.</p>
                    <h4>Instructions</h4>
                    <ul>
                        <li>Click and drag to highlight a possibly problematic area of your screenshot, click 'confirm' to create an annotation box on the right.</li>
                        <li>Select an appropriate domain and use the checkboxes in the annotation box to note what the issue is.</li>
                        <li>Check as many checkboxes as necessary and add additional comments if necessary.</li>
                    </ul>
                </div>
                <div className="col-lg-5">
                    <img className="gif" id="gif" src={HowToGif} />
                </div>
            </div>
            <div className="row align-items-end howTo">

                <div className="col-lg-7 text-left">
                    <h3 className="text-theme"  >Document Generation</h3>
                    <p>A document is then generated using your annotations  that associates your annotations with legal clauses and articles. This document can then be used to report the possible violations to the appropriate authorities.</p>
                    <h4>Instructions</h4>
                    <ul>
                        <li>Select an template from the dropdown below the annotated image and click 'Save Document'</li>
                        <li>Scroll down to look at a preview of the document that will be generated for each screenshot.</li>

                        <li>Click save, then choose a location on your PC to store the document and click 'save' again.</li>
                    </ul>
                </div>
                <div className="col-lg-5">
                    <img className="gif" id="gif" src={DocGif} />
                </div>
            </div>


        </div>
    );
};

export default HowTo;