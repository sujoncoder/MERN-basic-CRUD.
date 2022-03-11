import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div>
        <ul>
          <Link className='links' to="/">Home</Link>
          <Link className='links' to="/user">User</Link>
          <Link className='links' to="/addUser">AddUser</Link>
         </ul>
        </div>
    );
};

export default Home;