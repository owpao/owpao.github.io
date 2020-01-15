import React from 'react'

const ScrollSpy = () => {
    return <div className="row">
        {/*<div className="col s12 m9 l10">*/}
        {/*    <div id="introduction" className="section scrollspy">*/}
        {/*        <p>Content </p>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div className="col hide-on-small-only s12 m3 l2">
            <ul className="section table-of-contents">
                <li><a href="#introduction">Introduction</a></li>
            </ul>
        </div>
    </div>
}

export default ScrollSpy