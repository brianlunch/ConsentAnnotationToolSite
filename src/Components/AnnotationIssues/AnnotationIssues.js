import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './AnnotationIssues.css'
import Collapse from 'react-bootstrap/Collapse'
import { FaChevronDown, FaLessThanEqual } from 'react-icons/fa';
import AnnotationIssue from '../AnnotationIssue/AnnotationIssue';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import ReactPDF from '@react-pdf/renderer';
import MyDocument from '..//PDFgen/PDFgen'



function onMouseOver(props, key) {
    props.onMouseOver(key);
}

function printTing(props) {
    console.log("hello");
}

function onMouseOut(props, key) {
    props.onMouseOut(key);
}



function handleSubmit() {

}

function setOpen() {

}
function checkOpen(props) {
    console.log("ye");
    if (props.issues.length != 0) {
        console.log(props.issues[0].open);
        return props.issues[0].open;
    }
}

function AnnotationIssues(props) {


    return (
        <div className=" text-left maxH col-11 align-items-start">
           <br />
                {props.annotations.map(annotation => (
                    
                        <AnnotationIssue
                            annotation={annotation}
                            mouseOver={props.onMouseOver}
                            mouseOut={props.onMouseOut}
                            issues={props.issues}
                            onClickM={props.onClickM}
                        />
                    
                ))}
            
        

        </div>
    );


}

export default AnnotationIssues;