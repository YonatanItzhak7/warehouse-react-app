import {Component} from 'react'
import Employee from './Employee.component'
class Employees extends Component {
    render(){
        return (
            <div>
        <Employee first ="Yonatan" last ="Itzhak" date="29/9/97" Pic ="stickman1.jpg"/>
        <Employee first ="Znavo" last ="Ardai" date="1/1/94" Pic ="stickman2.jpg"/>
        <Employee first ="Yossi" last ="Balacho" date="1/1/97" Pic ="stickman3.jpg"/>
        <Employee first ="Daniel" last ="Rubin" date="1/1/96" Pic ="stickman4.jpg"/>
        <Employee first ="Ilan" last ="Itzhak" date="3/5/96" Pic ="stickman5.jpg"/>
        </div>
        )
    }
}