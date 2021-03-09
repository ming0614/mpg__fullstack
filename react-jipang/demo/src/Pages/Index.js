import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';


class Index extends Component{
    constructor(props){
        super(props)
        this.state = { 
            list:[
                {cid:123,title:'mpg1'},
                {cid:456,title:'mpg2'},
                {cid:789,title:'mpg3'}
            ]
        }
    }
    render (){
        return ( 
            <div>
                <Redirect to="/home/" />
                <h2> Index-page</h2>,
                <ul>
                    {
                        this.state.list.map((item,index) =>{
                            return (
                                <li key={index}>
                                    <Link to={'/list/'+item.id}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default Index;