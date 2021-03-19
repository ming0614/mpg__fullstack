import Raect,{Component} from 'react';
class Example3 extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }

    }
    componentDidMount(){
        console.log(`> ${this.state.count}`)
    }
    componentDidUpdate(){
        console.log(` ${this.state.count}`)
    }
    render(){
        return(
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.addCount.bind(this)}>click</button>
            </div>
        )
    }
    addCount(){
        this.setState({count:this.state.count+1})
    }
}
export default Example3