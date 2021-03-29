import React from "react";
import Scrollspy from 'react-scrollspy'

function renderItems(items, url) {
    return (
        <Scrollspy items={url} currentClassName="is-current" className="toc-list">
            {items.map((item) => {
                return (
                    <li key={item.url}>
                        <a href={item.url}>
                            {item.title}
                        </a>
                        {item.items && renderItems(item.items)}
                    </li>
                );
            })}
        </Scrollspy>
    );
}

function Toc(props) {
    let url = props.items.map((item) => {
        return item.url.substring(1)
    })
    return (
        <div className="toc">
            <h3 className="uppercase tracking-wider font-light text-xs">Table of Content</h3>
            <nav>
                {renderItems(props.items, url)}
            </nav>
        </div>
    );
}

export default Toc