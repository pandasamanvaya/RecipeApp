import axios from "axios";
import React from "react";

export const ItemContext = React.createContext();

// const initState = {
//     "id" : 0,
//     "name" : "",
//     "pic" : "",
//     "ingredients" : []
// }

// const modifyItemReducer = (state, action) => {
//     switch(action.type){
//         default: return state;
//     }
// }

export default function ItemProvider(){

    let [items, setItems] = React.useState([]);
    React.useEffect(() => {
        console.log("loop")
        axios.get("http://localhost:1234/items").then(response =>{
            setItems(response.data);
        });
    },[]);
    console.log("return");
    return (<ItemContext.Provider value={{items}}></ItemContext.Provider>);
}