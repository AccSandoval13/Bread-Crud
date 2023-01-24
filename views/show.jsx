const React = require('react')
const Default = require(',/layouts/Default')
const bread = require('../models/bread')


function Show {(bread)} {

    // 
    // 

return (
    <Default> 
        <h3> {bread.name} </h3>
        <p> 
            and it 
            {
                bread.hasGluten
                    ? <span> does </span> 
                    // falsy 
                    : <span> does NOT </span>

            }
        have gluten 
        </p>
        <img src={bread.image} alt={bread.name}/>  
    </Default>
)
        }

module.export = Show 