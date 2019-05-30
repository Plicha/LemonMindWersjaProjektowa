import React, { Component } from 'react'
import { connect } from 'react-redux'
class InputSection extends Component {
    
    handleOnChange=(e)=>{
        
        let text = e.target.value;
        let typeName = e.target.id; 
        switch (typeName) {
            case 'from': this.props.sender(text,'FROM_POST');
                break;
            case 'destination': this.props.sender(text,'DEST_POST');
                break;
            case 'airbus_type': this.props.sender(text,'AIRPLANE_POST');
                break;
            default:
                break;
        }
    }
    render() {                
        return (
            <div className="row card-action">
                <div className="input-field col s6">
                    <input
                    placeholder="Lotnisko początkowe" 
                    id="from" type="text" 
                    className="validate z-depth-2 truncate"
                    onChange={this.handleOnChange}/>
                    <label htmlFor="from">*<b>Transport z:</b></label>
                </div>
                <div className="input-field col s6">
                    <input placeholder="Lotnisko docelowe"id="destination" type="text"
                     className="validate collection-item z-depth-2 truncate"onChange={this.handleOnChange}/>
                    <label htmlFor="destination">*<b>Transport do:</b></label>
                </div>
                <div>
                    <label htmlFor="airbus_type">*<b>Typ samolotu</b></label>
                    <select required id="airbus_type" onChange={this.handleOnChange}>
                        <option value="Airbus">Airbus A380  | ładowność: 35 ton</option>
                        <option value="Boeing">Boeing 747  | ładowność: 38 ton</option>
                    </select>
                </div>
            </div>                 
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        data:state
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        sender: (input,type) => {dispatch({type:type, action: input})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(InputSection)