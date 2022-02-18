import React from 'react';

const Card = ({name, email, id}) =>{
    //const {name, email, id} = props
    return(

        <div className='bg-washed-green dib br3 pa3 grow shadow-5 tc'style={{margin:"8px"}}>
            <img style={{width:"180px", height:"250px"}} alt="My Friend"
            //src={`../images/${props.id}leilani-angel.jpg`} />
            src={`../images/${id}.jpg`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;