/*global chrome*/
import React from 'react';
import ImageAnnotation from '../Components/ImageAnnotation/ImageAnnotation';
import '../Components/Report/Report.css'
import it from '../images/IrishTimes.PNG'
import consent from '../images/consent.png'
import test from '../images/test.jpg'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Help from '../Components/Help/Help';
import { NavLink } from 'react-router-dom'
import HowToGif from '../images/HowToHighlight.gif'
import HowToExt from '../images/HowToExt1.gif'
import DocGif from '../images/DocGif.gif'
import HowTo from '../images/HowTo.gif'
import './Study.css'

class Report extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null
        };
        this.imgChange = this.imgChange.bind(this)
        this.printState = this.printState.bind(this)
    }

    printState = () => {
        console.log(this.state);
    }

    imgChange = (event) => {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        }, this.printState)
    }



    render() {

        var images = ["Google", "Facebook", "Reddit", "Spotify", "Netflix"]
        var rand = Math.floor(Math.random() * 4);
        var randomPage = images[rand];

        return (
            <div className="row  justify-content-center">


                
                <div className="col-10 text-left instructions">
                    <h3>Instructions</h3>
                    <ul>
                        <li>Please <b>watch the below video</b> on how to use the tool.</li>
                        <li>Continue to the tool where you will be shown <b>{randomPage}'s</b>  consent dialogue (Please note the site).</li>
                        <li>Use the tool to as much (or as little) as you like to highlight possible violations as shown.</li>
                        <li> Please read the terms used in the annotation box on the right side of the screen.</li>
                        <li>Take a look at the document generated and then <b>return to the Questionnaire</b>.</li>
                    </ul>

                    
                </div>
                <div className="row bb align-items-center justify-content-center">
                <div className="col-4 text-left">
                <h3>How to use the tool in 4 Steps</h3>
                <br/>
                <ol>
                    
                        <li className="jt">Highlight problematic area of the Screenshot.</li>
                        <li className="jt">Annotate your highlight by clicking the appropriate issues on the right.</li>
                        <li className="jt">Make as many observations on as many of the screenshots as you like.</li>
                        <li className="jt">Preview the generated document and save it.</li>
                    </ol>
                    <br/>
                    <p>If there are no notable issues with the screenshot please just highlight a random area of the image and pick a random issue from the list!</p>
                </div>

                <div className="col-8">

                <img src={HowTo}/>
                </div>
                <br/>
               
                </div>
               <div className="col-12">
                   <br/>
               <NavLink
                        className="nav-link"
                        exact activeClassName="nav-link--active"
                        to={randomPage}

                    >
                        <button className="btn btn-success w-50">Continue to the Tool</button>
                    </NavLink>
               </div>
            </div>
        );
    }
}

export default Report;
