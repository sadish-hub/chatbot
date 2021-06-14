import React from "react";

import "./LinkList.css";

const LinkList = (props) => {
    const getDescription = (desc) => props.actionProvider.handleAODescription(desc);
    const linkMarkup = props.options.map((link) => (
        <li key={link.id} className="link-list-item">
            {link.desc ?
                <div id={link.id} className="link-list-item-url" onClick={() => getDescription(link.desc)}>
                    {link.text}
                </div>
                :
                <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-list-item-url">
                    {link.text}
                </a>
            }
        </li>
    ));

    return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkList;