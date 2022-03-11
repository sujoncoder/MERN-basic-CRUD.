import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef()
    const emailRef = useRef()

    const handleOnSubmit = e => {
        // @ts-ignore
        const name = nameRef.current.value;
        // @ts-ignore
        const email = emailRef.current.value;
        const newUser = {name,email}
        console.log(newUser)

        e.preventDefault()
    }
    return (
        <div>
            <h1>Please add an user.</h1>
            <form onSubmit={handleOnSubmit}>
                <input type="text" ref={nameRef} placeholder='write your name' />
                <input type="email" ref={emailRef} placeholder='write your email' />
                <input type="submit" value="Add user" />
            </form>
        </div>
    );
};

export default AddUser;