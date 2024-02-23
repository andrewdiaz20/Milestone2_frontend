import { useEffect, useState } from "react"

function GroceryItem(props){
    const [view,setView] = useState(false)

    const simpleStyle ={
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }

    const detailStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundimage': 'src\image\Foddie Central.png',
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }

    const simpleView = () => {
        return(
            <div style={simpleStyle}>
                <h3>{props.item.itemName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return(
            <div style={detailStyle}>
                <h2>{props.item.itemName}</h2>
                <h3>{props.item.collectionName}</h3>
            </div>
        )
    }

    return (
        <div onClick ={() => setView(!view)} style={{'display': 'inline-block'}}>
            <p>GroceryItem</p>
        </div>
    )
}

export default GroceryItem