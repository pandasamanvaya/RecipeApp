import React from "react";
import { ItemContext } from "./Context";
import Item from "./Item";

export default function ItemList(){
    let ctx = React.useContext(ItemContext);
    console.log("Here");
    console.log(ctx);
    return <div className="container">
         <div className="row">
            {
                ctx.items.map(item => <Item item={item}/>)
            }
            </div>
    </div>
}