import React, {Component} from 'react';

import {Link} from 'react-router-dom';


export default class Header extends Component {
    render(){
        // console.log(this.props)
        return(
            <div>
               <Link to="/">{this.props.siteName}</Link>
            </div>
        )
    }
}