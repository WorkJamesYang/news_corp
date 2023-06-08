import React from 'react'

export default function Article(props) {
    return (
        <li>
            <h4>{props.headline.default}</h4>
            <span>{props.date.live}</span>
            <div dangerouslySetInnerHTML={{__html: props.standfirst.default}}/>
            {/* <img alt="article thumbnail" src={props.headline.default}/> */}
            <a href={props.link.canonical}>Read more</a>
        </li>
    )
}