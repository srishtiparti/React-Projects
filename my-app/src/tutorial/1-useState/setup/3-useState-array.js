import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople] = React.useState(data)

  const removeItem =(id)=>{
    let newPeople =people.filter((person)=>{
      if(person.id!==id){
      return person
      }
      
    })
    setPeople(newPeople)
  }

  return (
    <>
    {
      people.map((person)=>{
        const {id,name} = person
        return (
          <div key={id} className ='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={()=>removeItem(id)} >Remove Item</button>
          </div>
        )
      })
    }
    <button type='button' className='btn' onClick={()=>setPeople([])}>Clear All Items</button>
    </>
  );
};

export default UseStateArray;
