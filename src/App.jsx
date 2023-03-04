import React from 'react'
import General from './0_variables/Variables'
import Partial from './1_Partials/Partial'
import Mixin from './2_Mixin/Mixin'
import Extend from './3_Extend/Extend'
import Math from './4_Math/Math'
import ReglasAt from './5_ReglasAt/ReglasAt'
import Formato from './Formato/Formato'
function App () {
  return (
    <div>
      <Formato/>
      <General/>
        <Partial/>
        <Mixin/>
        <Extend/>
        <Math/>
        <ReglasAt/>
    </div>
  )
}

export default App
