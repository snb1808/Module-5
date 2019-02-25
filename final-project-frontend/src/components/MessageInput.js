import React from 'react';

const MessageInput = props => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type='text' name='content'/>
                <input className='button' type='submit' value='Post Message' />
            </form>
        </div>
    )

}

export default MessageInput;