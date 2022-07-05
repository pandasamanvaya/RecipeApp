
import React from "react"
import { ItemContext } from "./Context"

export default function ItemList(){
    let ctx = React.useContext(ItemContext)
    console.log(ctx)
    return <>
        <h2>ItemList</h2>
    </>
}