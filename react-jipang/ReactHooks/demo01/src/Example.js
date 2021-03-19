import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


// class  Example extends Component{
//     constructor(props){
//         super(props)
//         this.state= { count :0}
//     }
//     render(){
//         return(
//             <div>
//                 <p>{this.state.count}</p>
//                 <button onClick={this.addCount.bind(this)}>Click</button>
//             </div>
//         )
//     }
//     addCount(){
//         this.setState({count:this.state.count+1})
//     }
// }
function Index(){
    useEffect(()=>{
        console.log('useEffect 来了 Index页面');
        return () =>{
            console.log('走了index')
        }
    },[])
    return <h2>Index</h2>
}
function List(){
    useEffect(()=>{
        console.log('useEffect 来了 List页面') 
        return () =>{
            console.log('走了List')
        }
    })
    return <h2>List</h2>
}
function Example(){
    const [count, setCount] =useState(0) //数组解构
    useEffect(() =>{
        console.log(`${count}`)
    },[count])
    return (
        <div>
            <p>{count}</p>
            <button onClick={() =>{setCount(count+1) }}>Click</button>
            <Router>
                <ul>
                    <li> <Link to="/">首页</Link></li>
                    <li><Link to="/list">List</Link></li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>
        </div>
    )
}
export default Example;