import React, { Component } from 'react'
import InputSection from './InputSection'
import AddProducts from './AddProducts'
import Datepicker from './Datepicker'
import MyDopzone from './MyDropzone'
import '../styles/Form.css'



class Form extends Component {
    constructor(){
        super();
        this.state={
            files: []
            };
    }
    
    render() {
        return (
            <div>
                <main>
                    <div className="container">
                        <div className="form">
                            <div className="card">
                                <div className="card-content blue darken-4" id="formTitle">
                                    <i class="material-icons orange-icon">local_airport</i>
                                    <h4 className="grey-text text-lighten-5">Formularz transportowy</h4>
                                </div>
                                <InputSection/>
                                <div className="divider"/>
                                <div className="card-content center-align"id="dragDrop">
                                <MyDopzone></MyDopzone>
                                </div>
                                <div className="divider"></div>
                                <div className="row" id='dateSection'>
                                    <Datepicker/>
                                </div>
                                <div class="divider"/>
                                <div className="addProducts">
                                    <AddProducts/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}


export default Form