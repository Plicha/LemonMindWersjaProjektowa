const initState={
    from:undefined,
    destination:undefined,
    airplane:'Airbus',
    date:undefined,
    file:undefined,
    products:[]
}
const rootReducer = ( state = initState, action)=>{
    if(action.type === 'FROM_POST'){
        let newFrom = action.action;
        return{
            ...state,
            from:newFrom
        }
    }
    if(action.type === 'DEST_POST'){
        let newDest = action.action;
        return{
            ...state,
            destination:newDest
        }
    }
    if(action.type === 'AIRPLANE_POST'){
        let newAri = action.action;
        return{
            ...state,
            airplane:newAri
        }
    }
    if(action.type === 'DATE_POST'){
        let newDate = action.action;
        return{
            ...state,
            date:newDate
        }
    }
    if(action.type === 'FILE_POST'){
        let newFile = action.action;
        return{
            ...state,
            file:newFile
        }
    }
    if(action.type === 'PRODUCTS_POST'){
        let newFile = action.action;
        let output = {
            ...state,
            products:newFile
        }
        console.log(output);
        return{
            ...state,
            products:newFile
        } 
        
    }  
    return state;
}
export default rootReducer