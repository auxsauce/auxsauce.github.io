// App.jsx > Body.jsx > Main.jsx

// react
import React from 'react';

// projects
import Progress from './Progress';
import BDA from '../projects/BDA';
import Diffuse from '../projects/Diffuse';
import BikeStar from '../projects/BikeStar';
import Cofi from '../projects/Cofi';

export default function Main(){
    return(
        <div className="Main" onScroll={(e) => {}} >
            <Progress />
            <BDA />
            <Diffuse />
            <BikeStar />
            <Cofi />
        </div>
    )
}