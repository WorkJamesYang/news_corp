import React from 'react'

export default function Article(props) {
    return (
        <li className="article-item">
            <div>
                <img alt="article thumbnail" src={props.references[props.related.thumbnail.default[0]].link.media}/>
            </div>
            <div>
                <h4>{props.headline.default}</h4>
                <span>{props.date.live}</span>
                <div dangerouslySetInnerHTML={{__html: props.standfirst.default}}/>
                <a href={props.link.canonical}>Read more</a>
            </div>
            
        </li>
    )
}