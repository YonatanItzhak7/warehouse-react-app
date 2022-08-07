import {Component} from 'react'
import Workerimg from 'Workerimg.components'
class Employee extends Component {
constructor(props){
    super()
}
render(){
    return(
        <div>
            <h2>{this.props.first}</h2>
            <h2>{this.props.last}</h2>
            <h2>{this.props.date}</h2>
            <Workerimg width="20%"/>
        </div>
    )
}
}

export default Employee;