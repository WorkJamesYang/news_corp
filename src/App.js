import React from 'react'
import Article from './components/Article/Article'
import data from './data/capi.json'
import './App.css'

function App() {
  return (
    <>
      <ul>
        {data.results.map(item => <Article key={item.id} {...item}/>)}
      </ul>
    </>
  )
}

export default App
