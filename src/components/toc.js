import React from 'react'
import Scrollspy from 'react-scrollspy'

export default function Toc(props) {
    const { post } = props
    console.log(post)
    let url = post.items.map(function(post) {
        return post['url'].substring(1)
    })
    return (
        <div className="toc">
            <h3 className="uppercase tracking-wider font-light text-xs">Table of Content</h3>
            <nav>
                <Scrollspy items={url} currentClassName="is-current" className="toc-list">
                {post.items.map(p => (
                    <li key={p.url}>
                        <a href={p.url}>{p.title}</a>
                    </li>
                ))}
                </Scrollspy>
            </nav>
        </div>
    )
}
