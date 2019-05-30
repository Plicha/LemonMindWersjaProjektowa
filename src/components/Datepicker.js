import React, { Component } from 'react'
import { connect } from 'react-redux'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../styles/Datepicker.css'

class Datepicker extends Component {constructor(){
    super();
    this.handleDayClick = this.handleDayClick.bind(this);
        this.state={
            selectedDay: undefined,
            className:'col s6',
            headerName:'col s6 dateDescription'
        };
    }
    componentDidMount(){
        if(window.innerWidth<992){
          this.setState({
            headerName:'col s12 dateDescription',
            className:'col s11'
          });
        }
      }
    handleDayClick = (day, modifiers = {}) => {
        let today = new Date();
        if(day>today){
        if (modifiers.disabled) {
          return;
        }
        this.setState({
          selectedDay: modifiers.selected ? undefined : day,
        });
        this.props.sender(day,'DATE_POST');
        }else{
            alert('niepoprawna data')
        }
    }
    MONTHS = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];
    WEEKDAYS_LONG = ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'];
    WEEKDAYS_SHORT = ['Nd','Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob'];

    render() {
        const state = this.state;
        const birthdayStyle = `.DayPicker-Day--highlighted {
            background-color: orange;
            color: white;
        }`;
        const modifiers = {
            highlighted: state.selectedDay,
        };
        return (
            <div>
                <div className={this.state.headerName}>
                    <h4>*Wybierz date transportu</h4>
                    <p>(z wyłączeniem weekendów)</p>
                    <div className="container center-align">
                        <b>{this.state.selectedDay ? this.state.selectedDay.toLocaleDateString() : <span style={{color:'red'}}>Nie wybrano daty</span>}</b>
                    </div>
                </div>
                <div className={this.state.className}>
                    <style>{birthdayStyle}</style>
                    <DayPicker
                    onDayClick={this.handleDayClick}
                    electedDays={this.state.selectedDay}
                    modifiers={modifiers}
                    disabledDays={{ daysOfWeek: [0, 6] }}
                    firstDayOfWeek={1}
                    locale="pl"
                    months={this.MONTHS}
                    weekdaysLong={this.WEEKDAYS_LONG}
                    weekdaysShort={this.WEEKDAYS_SHORT}
                    />
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
export default connect(mapStateToProps,mapDispatchToProps)(Datepicker)