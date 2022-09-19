import React from 'react'

const iconStyles = (col) => {
    const id = col + 1;
    const colors = {
        1: "#ADFF2F",
        2: "#800000",
        3: "#FF00FF",
        4: "#FAC96D",
        5: "#FEF41F",
        6: "#BAB86C",
        7: "#556B2F",
        8: "#FF80AA",
        9: "#00FFFF",
        10: "#FFE87C",
        11: "#E9AB17",
        12: "#8B8000",
    }
    const styles = {
        color: colors[id],

    }
    return styles;
};



export const Card = ({rowIndex, items, playGame, qrow, qcol, play}) => {


  return (
    <>
        {items.length > 0 ? items.map((item, index) => {
            return (
                <div key={index} className={`col-md-2 m-0 ${!play ? 'disabled' : ''}`}>
                    <span className={`game-icon ${index === qcol && rowIndex === qrow && play ? 'active' : 'inactive'}`}
                        style={iconStyles(index)}
                        onClick={() => playGame(rowIndex, index)}
                        dangerouslySetInnerHTML={{__html: item }}
                    >

                    </span>
                </div>
            )
        }): "hello"}
    </>
  )
}
