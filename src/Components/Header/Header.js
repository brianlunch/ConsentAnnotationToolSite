import React from 'react';
import HeaderItem from '../HeaderItem/HeaderItem'
import Title from '../Title/Title'
import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'
import './Header.css'
import { FaQuestionCircle, FaGithub, FaChrome } from 'react-icons/fa'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="header" id="home">

                <div class="row text-center justify-content-center">
                    <div class="col-12">
                        <Title title="Consent Annotation Tool" subtitle="A tool to link legal clauses to user highlighted issues in consent dialogues." />
                        <br />
                    </div>

                    <div class="col-12 card-deck text-center justify-content-center">

                        <div class="row justify-content-center">
                            <div class="col-12 col-lg-3">
                                <a target="_blank" href ="https://github.com/brianlunch/ConsentAnnotationTool">
                                    <HeaderItem title="Chrome Extension"><FaChrome /></HeaderItem>
                                </a>

                            </div>

                            <div class="col-12 col-lg-3">
                                <Link
                                    to="HowTo"
                                >
                                    <HeaderItem title="How to Use"><FaQuestionCircle /></HeaderItem>
                                </Link>
                            </div>
                            <div class="col-12 col-lg-3">
                                 <a target="_blank" href ="https://github.com/brianlunch/ConsentAnnotationTool">
                                <HeaderItem title="Project Github"><FaGithub /></HeaderItem>
                                </a>
                            </div>



                        </div>

                    </div>
                </div>
            </div>
        );
    }
}



export default Header;
