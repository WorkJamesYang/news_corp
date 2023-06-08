import React, {useState,useMemo} from 'react'
import Pager from './components/Pager/Pager'
import Article from './components/Article/Article'
import data from './data/capi.json'
import './App.css'

let pageSize = 3
function App() {
  const [currentPage, setCurrentPage] = useState(1)

  /*get currentTableData */
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize
    const lastPageIndex = firstPageIndex + pageSize
    return data.results.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  return (
    <>
      <ul className='list-container'>
        {currentTableData.map(item => <Article key={item.id} {...item}/>)}
      </ul>
      <Pager
      articleLength={data.results.length}
      panelNumber={5}
      currentPage={currentPage}
      pageSize={pageSize}
      onPageChange={page => setCurrentPage(page)}/>
    </>
  )
}

export default App
