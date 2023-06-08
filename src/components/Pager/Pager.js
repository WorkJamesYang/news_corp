import React from 'react'
import {getPageNumber, getMinNumber, getMaxNumber, toPage }from './utilities'
import './Pager.css'
/** 
 * pagination component
 */
const Pager = props =>{
    const pageNumber = getPageNumber(props)
    if(pageNumber === 0){
        return null
    }
    const min = getMinNumber(props)
    const max = getMaxNumber(min, pageNumber, props)
    const numbers = []
    for(let i = min ; i <= max ; i ++){
        numbers.push(<span key={i} onClick={() =>{toPage(i,props)}}  className={i === props.currentPage ? 'item active': 'item'}>{i}</span>)
    }

    return (
        <div className='pager'>
            <span onClick={() =>{toPage(1,props)}} 
                className={props.currentPage === 1 ? 'item disabled' : 'item'} >first</span>
            <span  onClick={() =>{toPage(props.currentPage - 1 < 1 ? 1: props.currentPage -1,props)}}
            className={props.currentPage === 1 ? 'item disabled' : 'item'}>prev</span>
            {numbers}
            <span onClick={() =>{toPage(props.currentPage + 1 >  pageNumber ? pageNumber : props.currentPage + 1,props)}} className={props.currentPage === pageNumber ? 'item disabled' : 'item'}>next</span>
            <span onClick={() =>{toPage(pageNumber,props)}} className={props.currentPage === pageNumber ? 'item disabled' : 'item'}>last</span>
            <span className='current'>{props.currentPage}</span>/<span>{pageNumber}</span>
        </div>
    )
}
export default Pager
