/*global chrome*/
import React from 'react';
import ImageAnnotation from '../Components/ImageAnnotation/ImageAnnotation';
import './Report.css'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Help from '../Components/Help/Help';
import Reddit1 from '../images/Reddit/Reddit1.PNG'
import Reddit2 from '../images/Reddit/Reddit2.PNG'
import Reddit3 from '../images/Reddit/Reddit3.PNG'
import Reddit4 from '../images/Reddit/Reddit4.PNG'
import Reddit5 from '../images/Reddit/Reddit5.PNG'
import Reddit6 from '../images/Reddit/Reddit6.PNG'

class Reddit extends React.Component {

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

        var images = [
            {
                "img": Reddit1,
                "url": "www.Reddit.com",
                "time": "Wed, 14 Apr 2021 13:17:30 GMT"
            },
            {
                "img": Reddit2,
                "url": "www.Reddit.com",
                "time": "Wed, 14 Apr 2021 13:17:30 GMT"
            },
            {
                "img": Reddit3,
                "url": "www.Reddit.com",
                "time": "Wed, 14 Apr 2021 13:17:30 GMT"
            },
            {
                "img": Reddit4,
                "url": "www.Reddit.ie",
                "time": "Wed, 14 Apr 2021 13:17:30 GMT"
            },
            {
                "img": Reddit5,
                "url": "www.Reddit.com",
                "time": "Wed, 14 Apr 2021 13:17:30 GMT"
            },
            {
                "img": Reddit6,
                "url": "www.Reddit.com",
                "time": "Wed, 14 Apr 2021 13:17:30 GMT"
            }
        ]

        
        return (
            <div className="report">
               
                <Help className="no-print"/>

                <div class="row">
                    <div class="col-12">
                        <div className="imgAnnot uploadedImg row">
                            {
                                <Tabs defaultActiveKey="0" className="no-print" id="uncontrolled-tab-example">
                                    {
                                        images != undefined ?
                                            images.map((imageObj, i) => (
                                                <Tab eventKey={i} title={"Screenshot " + (i + 1)} >
                                                    <ImageAnnotation img={imageObj.img} i={i} url={imageObj.url} time={imageObj.time} />
                                                </Tab>
                                            ))
                                            :
                                            null
                                    }
                                </Tabs>
                                

                            }
                            <p className="genMsg">This doc was generated by <a href="https://brianlunch.github.io/ConsentAnnotationToolSite/#/">https://brianlunch.github.io/ConsentAnnotationToolSite/#/</a></p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Reddit;