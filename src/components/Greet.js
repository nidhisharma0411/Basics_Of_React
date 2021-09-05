import React from 'react';


//curly braces ko use me leke hm heroname or baki sari values ko change krdete h
const Greet = ({name,heroName}) => {
    return (
        <div>
            <h1>Hello {name} a.k.a. {heroName}</h1>
        </div>
    )
}


//when we use export here then it comes to know that we can use any name for this particular component 
//but after that if we remove this export statement from here then we get an error

export default Greet;