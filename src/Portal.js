import { Component } from 'react';
import ReactDOM from 'react-dom';


const portalRoot = document.getElementById('portal');

export default class portal extends Component {
    render(){
        return ReactDOM.createPortal();
        
    }
}