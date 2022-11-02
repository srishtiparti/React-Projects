import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading,setLoading] = useState(true)
  const [isError,setIsError] = useState(false)
  const [user,setUser] = useState([])

  // we can use this function or use fetch in useEffect
  const getUser = async()=>{
    const data = await fetch(url);
    const user = data.json()
    setUser(user)

  }

  useEffect(()=>{
    fetch(url)
    .then((resp)=>{
      if(resp.status>= 200 && resp.status<299){
        return resp.json()
      }
      else{
        setLoading(false)
        setIsError(true)
      }
    })
    .then((user)=>{
      const {login} = user;
      setUser(login)
      setLoading(false)
    })
    .catch((error)=>console.log(error))
  },[])

  if(loading){
    return <h2>Loading....</h2>
  }
  if(isError){
    return<h2>Error...</h2>
  }
  return <h2>{user}</h2>;
};

export default MultipleReturns;
