import React, { Component } from 'react'
import ProductsTabe from './ProductsTabe'
import '../styles/AddProducts.css'
import { connect } from 'react-redux'
import axios from 'axios'

class AddProducts extends Component {
    constructor(){
        super();
        this.state={
            airplane:undefined,
            limit:undefined,
            tempName:undefined,
            tempWeight:undefined,
            tempType:'safety',
            products:[],
            startButton:'btn btn-small disabled',
            className:'row',
        }
    }
    componentDidMount(){
        if(window.innerWidth<992){
          this.setState({
            className:'col 4'
          });
        }
      }
    onAddClick=()=>{
        var name =this.state.tempName;
        var weight = this.state.tempWeight;
        var type = this.state.tempType;
        var limit = this.state.limit;        
        if(name!==undefined && weight!==undefined && type!==undefined){
            if(weight>0 && weight<limit){
                let newLimit = limit-weight;
                let newProducts = this.state.products;
                newProducts.push({name,weight,type})
                this.setState({products:newProducts,limit:newLimit})
                if(
                    this.props.data.airplane===undefined ||
                    this.props.data.date===undefined ||
                    this.props.data.destination===undefined ||
                    this.props.data.from===undefined 
                ){ }else{
                        this.setState({startButton:'btn waves-effect waves-light btn-small orange'})
                }              
            }
            else{
                alert("Podaj poprawną wage.")
            }
        }else{
            alert("Wypełnij wszystkie pola.")
        }
    }
    addTemp=(e)=>{        
        let value = e.target.value;
        let type = e.target.id;
        switch (type) {
            case 'typeOfProduct':
                this.setState({
                    tempType:value
                })
                break;
            case 'weight':
                this.setState({tempWeight:value})
                break;
            case 'nameProduct':
                this.setState({tempName:value})
                break;
            default:
                break;
        }
    }
    handleSender=()=>{
        let products = this.state.products;
        this.props.sender(products,'PRODUCTS_POST')
        
        axios.post('https://demo8898282.mockable.io/test',{
            data:'this.props.data' 
        });
    }


    componentDidMount(){
            this.setState({airplane:this.props.data.airplane})
            if(this.props.data.airplane==='Airbus'){
                this.setState({limit:35000})
            }else{
                this.setState({limit:38000})
            }       
    }
    
    render() {
        const state = this.state;
        const props = this.props.data;

        return (
            <div className="addProducts">

                        <div className="row center-align">
                            <div className="col s6"><h4>Dodaj towar</h4></div>
                            <div className="col s6"><h6>Pozostało: {state.limit}kg</h6></div>
                        </div>

                        <div className='row'id="addLine">
                                <div className="input-field col s6">
                                    <input placeholder="Nazwa ładunku" id="nameProduct" type="text" className="validate z-depth-2 truncate" onChange={this.addTemp}/>
                                    <label>*<b>Ładunek</b></label>
                                </div>
                                <div className="input-field col s6">
                                    <input placeholder="Ciężar ładnku (w kilogramach)"id="weight" type="text" className="validate z-depth-2 truncate"onChange={this.addTemp}/>
                                    <label>*<b>Waga</b></label>
                                </div>
                        </div>

                        <div className='row'>
                            <div className="input-field col s6 type">
                                    <select required id="typeOfProduct" onChange={this.addTemp}>
                                        <option value="safety">Ładunek zwykły</option>
                                        <option value="dangerous">Ładunek NIEBEZPIECZNY</option>
                                    </select>
                                <label htmlFor="typeOfProduct">*<b>Rodzaj ładunku</b></label>
                            </div>
                            <div className="col 4">
                                <a class="btn-floating btn-small waves-effect waves-light orange" onClick={()=>{this.onAddClick()}}>
                                <i class="material-icons">add</i></a>
                            </div>
                        </div>
                
                
                <div className="row">
                <table className="striped centered">
                    <tbody>
                            {this.state.products.map((product)=>{
                            return <ProductsTabe products={product}></ProductsTabe>
                            })}
                    </tbody>
                </table>
                </div>
                <div className="row sender">
 
                        <a className={state.startButton} onClick={()=>this.handleSender()}>Wyślij formularz</a>

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
export default connect(mapStateToProps,mapDispatchToProps)(AddProducts) 