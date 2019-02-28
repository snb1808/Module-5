import React from 'react';

const MessageInput = props => {

    return (
        <div className='message_input'>
            <form onSubmit={props.handleSubmit}>
                <input type='text' name='content'/>
                <input className='button' type='submit' value='Send' />
            </form>
        </div>
    )

}

export default MessageInput;