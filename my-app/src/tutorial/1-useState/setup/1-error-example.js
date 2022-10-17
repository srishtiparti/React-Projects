import React from 'react';

const ErrorExample = () => {
  let title = 'random title'
  const handleClick = ()=>{
    title ='Hello People'
  }
  return(
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}> Random Title</button>
    </React.Fragment>
  );
};

export default ErrorExample;
