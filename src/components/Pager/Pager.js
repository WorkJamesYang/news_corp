import React from 'react'
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
        <>
            <span onClick={() =>{toPage(1,props)}} 
                className={props.currentPage === 1 ? 'item disabled' : 'item'} >first</span>
            <span  onClick={() =>{toPage(props.currentPage - 1 < 1 ? 1: props.currentPage -1,props)}}
            className={props.currentPage === 1 ? 'item disabled' : 'item'}>prev</span>
            {numbers}
            <span onClick={() =>{toPage(props.currentPage + 1 >  pageNumber ? pageNumber : props.currentPage + 1,props)}} className={props.currentPage === pageNumber ? 'item disabled' : 'item'}>next</span>
            <span onClick={() =>{toPage(pageNumber,props)}} className={props.currentPage === pageNumber ? 'item disabled' : 'item'}>last</span>
            <span className='current'>{props.currentPage}</span>/<span>{pageNumber}</span>
        </>
    )
}
export default Pager
/**
 * 
 * calculate min panel number 
 */
function getMinNumber(props) {
    console.log(props)
    let min = props.currentPage - Math.floor(props.panelNumber / 2 )
    return min < 1 ? 1 : min
}

/**
 * 
 * @param {*} min 
 * @param {*} pageNumber 
 */
function getMaxNumber(min, pageNumber, props){
    let max = min  + props.panelNumber - 1
    return max > pageNumber ? pageNumber : max

}

/**
 * navigate to certain page
 * @param {*} target target page number
 * @param {*} props  all props
 */
function toPage(target, props){
    if(props.currentPage === target){
        return // Object.is('current page number','target page number')
    }
    props.onPageChange && props.onPageChange(target)
}


/**
 * calculate total number of pages
 * @param {*} props 
 */
function getPageNumber(props){
    return Math.ceil(props.articleLength / props.pageSize)
}