import React from 'react'
import { getPageNumber, getMinNumber, getMaxNumber, toPage }from './utilities'
import './Pager.css'

/** 
 * pagination component
 */
const Pager = props =>{
    const {
        currentPage,
    } = props
    const pageNumber = getPageNumber(props)
    if(pageNumber === 0){
        return null
    }
    const min = getMinNumber(props)
    const max = getMaxNumber(min, pageNumber, props)
    const numbers = []
    for(let i = min ; i <= max ; i ++){
        numbers.push(<span key={i} onClick={() =>{toPage(i,props)}}  className={i === currentPage ? 'item active': 'item'}>{i}</span>)
    }

    return (
        <div className='pager'>
            <span data-testid="test-first" onClick={() =>{toPage(1, props)}} 
                className={currentPage === 1 ? 'item disabled' : 'item'} >first</span>
            <span  onClick={() =>{toPage(currentPage - 1 < 1 ? 1: currentPage -1, props)}}
            className={currentPage === 1 ? 'item disabled' : 'item'}>prev</span>
            {numbers}
            <span onClick={() =>{toPage(currentPage + 1 >  pageNumber ? pageNumber : currentPage + 1, props)}} className={currentPage === pageNumber ? 'item disabled' : 'item'}>next</span>
            <span onClick={() =>{toPage(pageNumber, props)}} className={currentPage === pageNumber ? 'item disabled' : 'item'}>last</span>
            <span className='current'>{currentPage}</span>/<span>{pageNumber}</span>
        </div>
    )
}
export default Pager
