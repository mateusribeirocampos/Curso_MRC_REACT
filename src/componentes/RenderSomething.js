import React from 'react'

const RenderSomething = () => {
    const funcaoif = (x) => {
        if(x===0){
            return <h1>Not OK!!!</h1>
        }else{
            return <h1>Ok!!!</h1>
        }
    };
  return (
    <div>
    {funcaoif(true)}
    {funcaoif(false)}
    </div>
  )
}

export default RenderSomething