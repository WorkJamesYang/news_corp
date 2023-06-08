import React, {useState} from 'react'
import Article from './components/Article/Article'
import Pager from './components/Pager/Pager'
import data from './data/capi.json'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <>
      <ul>
        {/* {data.results.map(item => <Article key={item.id} {...item}/>)} */}
      </ul>
      <Pager
      articleLength={data.results.length}
      panelNumber={5}
      currentPage={currentPage}
      pageSize={3}
      onPageChange={page => setCurrentPage(page)}/>
    </>
  )
}

export default App
