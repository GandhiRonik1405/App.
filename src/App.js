import React from 'react'
import './App.css'
import './Component/StateChange.css'
import StateChange from './Component/StateChange'
import ClearState from './Component/ClearState'

import UpdateState from './Component/UpdateState'
import TodoList from './Component/TodoList'
import UseEffect from './Component/UseEffect/UseEffect'
import UseEffect2 from './Component/UseEffect/UseEffect2'

// import GithubApi from './Component/UseEffect/GithubApi'



const App = () => {


  return (

    <>


 
      <ClearState />
      <StateChange />
      <UpdateState />
      <TodoList />
      <UseEffect />
      <UseEffect2 /> 
        {/* <GithubApi /> */}
    </>
  )
}

export default App




