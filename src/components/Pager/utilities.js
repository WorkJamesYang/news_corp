/**
 * 
 * calculate min panel number 
 */
export function getMinNumber(props) {
    console.log(props)
    let min = props.currentPage - Math.floor(props.panelNumber / 2 )
    return min < 1 ? 1 : min
}

/**
 * 
 * @param {*} min 
 * @param {*} pageNumber 
 */
export function getMaxNumber(min, pageNumber, props){
    let max = min  + props.panelNumber - 1
    return max > pageNumber ? pageNumber : max

}

/**
 * navigate to certain page
 * @param {*} target target page number
 * @param {*} props  all props
 */
export function toPage(target, props){
    if(props.currentPage === target){
        return // Object.is('current page number','target page number')
    }
    props.onPageChange && props.onPageChange(target)
}


/**
 * calculate total number of pages
 * @param {*} props 
 */
export function getPageNumber(props){
    return Math.ceil(props.articleLength / props.pageSize)
}