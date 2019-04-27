import React from 'react';


const Cover = (props) => {
    return (
        <div className="o-row">
    		<div className="c-cover">
    			<img src={props.image}
    				 alt="cover image"
    				 className="c-cover__image" />
    		</div>
        </div>
    )
}

export default Cover;
