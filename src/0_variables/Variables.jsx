import React from 'react'
import './estilos.scss'

function General () {
  return (
    <div style={{ maxWidth: '500px' }}>
        <h1 style={{ color: 'white' }}>VARIABLES</h1>
        <p className='variable1'> Variables : las variables se crean con el simbolo dolar &quot; $color:red;&quot;</p>
        <p className='variable2'> La misma variable puede cambiar su valor dependiendo de donde se encuentre &quot; $color:yellow;&quot;</p>
        <p className='variable3'> La misma variable puede cambiarse localmente &quot; $color:green;&quot;</p>
        <p className='variable2'> Para cambiar una variable localmente de manera global &quot; $color: purple !global&quot; y se cambiaria en todas partes</p>
        <h1 style={{ color: 'white' }}>VARIABLES CONDICIONALES</h1>
        <button className='button1'>DON T CLICK ME</button>
        <h1 style={{ color: 'white' }}>SASS:MAP</h1>
        <p className='estado1'>Con sass:Map se puede recorrer un varArray</p>
        <h1 className='estado2'>ESTADO</h1>
        <pre style={{ color: 'white' }}>
        @use "sass:map";
<br/>
        $color:(
    "success":green,
    "info":yellow,
        "warning":red,
);
<br/>
.estado1
    color:map.get($color,"info")

        </pre>
        <div className="pulse">INTERPOLACION</div>
         </div>
  )
}

export default General
