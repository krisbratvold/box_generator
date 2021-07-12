import React from 'react';

const BoxDisplay = (props) => {
    const { allColors } = props;
    return (
        <div className="size">
            {
                allColors.map((color, i) => {
                    return (<div key={i} style={{height:200, width:200, backgroundColor: color.color, margin: 10}}></div>
                    )
                })
            }
        </div>
    );
}

export default BoxDisplay;