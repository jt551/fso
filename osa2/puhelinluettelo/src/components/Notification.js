import React from 'react'

const Notification = (props) => {
    
    if( props.message === null && props.err === null){
        return null
    }
    else if (props.message){
        return(
        <div className="notify">
            <p>{props.message}</p>
        </div>
        )
    }
    else if (props.err){
        return (
        <div className="error">
            <p>{props.err}</p>
        </div>
        )
    }
        
    
}

export default Notification;