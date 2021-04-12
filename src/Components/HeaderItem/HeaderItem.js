import React from 'react';
import './HeaderItem.css'

class HeaderItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className = "headerItem">
            <h1>{this.props.children}</h1>
            <h2>{this.props.title}</h2>
            
        </div>
        );
    }
}


export default HeaderItem;
