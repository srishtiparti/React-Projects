import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users,setUsers] = useState([]);

  const getUsers = async()=>{
    const response = await fetch(url);
    const users = await response.json()
    setUsers(users) //- infinite loop.. it will rerender as setUSer can be set as many times
    // add [] so that it only happens once
    console.log(users);
  }

  useEffect(()=>{
    getUsers();
  },[])
  return<>
  <h3>Github User</h3>
  <ul className='users'>
  {users.map((user)=>{
    const {id,login,avatar_url,html_url} = user
    return<li key={id}>
      <img src={avatar_url} alt={login}/>
      <div>
        <h4>{login}</h4>
        <a href={html_url}><h4>Profile</h4></a>
      </div>
    </li>
  })}
  </ul>
  </>
  }

export default UseEffectFetchData;
