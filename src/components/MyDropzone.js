import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/Form.css'
class MyDropzone extends Component {
    constructor(){
        super();
        this.state={
            fileName:undefined,
        }
    }
    handler = (e) =>{ 
        let files=e.target.files;
        
        if(
            files[0].type==='image/png' ||
            files[0].type==='image/jpeg' ||
            files[0].type==='application/pdf' ||
            files[0].type==='application/doc' ||
            files[0].type==='application/docx'
            ){
                this.setState({fileName:files[0].name})
                let reader=new FileReader();

                reader.readAsDataURL(files[0]);
                reader.onload=(e)=>{
                    const formData ={file:e.target.result}
                    this.props.sender(formData,'FILE_POST');
            }
            }else{
                alert('Niepoprawny format pliku')
            }
    }
    render() {
        return (
            <div>
                <div className="container row">
                    <h4>Dokumenty transportowe</h4>
                    <div className="dragdropLabel">Przeciągnij plik na pole poniżej( .jpg, .png, .doc, .docx, .pdf)</div>
                </div>
                <div className="container dragdrop">
                    <input type="file" id="dragdrop" 
                    accept="image/png, image/jpg, application/pdf,application/doc,application/docx"

                    className="custom-file-input" onChange={this.handler}/>
                    <div className="fileName">{this.state.fileName}</div>
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
export default connect(mapStateToProps,mapDispatchToProps)(MyDropzone)