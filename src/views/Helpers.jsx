import React from "react";
import '../Helpers.css';



function getStars(value) {
    switch(parseInt(value)) {
        case 0:
            return [0,0,0,0,0];
        case 5:
            return [50,0,0,0,0];
        case 10:
            return [50,0,0,0,0];
        case 15:
            return [50,0,0,0,0];
        case 20:
            return [100,0,0,0,0];
        case 25:
            return [100,50,0,0,0];
        case 30:
            return [100,50,0,0,0];
        case 35:
            return [100,50,0,0,0];
        case 40:
            return [100,100,0,0,0];
        case 45:
            return [100,100,50,0,0];
        case 50:
            return [100,100,50,0,0];
        case 55:
            return [100,100,50,0,0];
        case 60:
            return [100,100,100,0,0];
        case 65:
            return [100,100,100,50,0];
        case 70:
            return [100,100,100,50,0];
        case 75:
            return [100,100,100,50,0];
        case 80:
            return [100,100,100,100,0];
        case 85:
            return [100,100,100,100,50];
        case 90:
                return [100,100,100,100,50];
        case 95:
                return [100,100,100,100,50];
        case 100:
            return [100,100,100,100,100]; 
        default:
            return []
    } 
}
 
export default function Rating ({value}) {
    return (
    <div>
        {
            getStars(value).map((value) => (
                <img src={`/images/${value}.png`} className="change" width = {20} />
        ))}
        
    </div>
    )
}