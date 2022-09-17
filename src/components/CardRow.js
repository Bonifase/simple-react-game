/* eslint-disable array-callback-return */
import React from 'react'
import { Card } from './Card'

export const CardRow = ({rowItems}) => {
    // console.log(rowItems)
    const [score, setScore] = React.useState(0);
    const [qcol, setqCol] = React.useState(3);
    const [qrow, setqRow] = React.useState(1);
    // const [acol, setCol] = React.useState();
    // const [arow, setRow] = React.useState();
    const [gameItems, setGameItems] = React.useState(rowItems)
    const indices = [0, 1, 2, 3, 4, 5]

    const playGame = (rowIndex, colIndex) => {
        console.log(rowIndex, colIndex);
        const newItems = shuffle(gameItems)
        setGameItems(newItems);
        console.log(gameItems[rowIndex][colIndex])
        console.log(gameItems[qrow][qcol])
        if (gameItems[rowIndex][colIndex] === gameItems[qrow][qcol]){
            const newScore = score + 1;
            setScore(newScore);
            setqCol(indices[indices.length * Math.random() | 0]);
            setqRow(indices[indices.length * Math.random() | 0]);
        }


    };

    function shuffle(sourceArray) {
        for (var i = 0; i < sourceArray.length - 1; i++) {
            var j = i + Math.floor(Math.random() * (sourceArray.length - i));

            var temp = sourceArray[j];
            sourceArray[j] = sourceArray[i];
            sourceArray[i] = temp;
        }
        return sourceArray;
    }

    function resetGame() {
        setScore(0);
    }

  return (
    <div className="container pt-5">
        <div className="row m-4">
            <div className="col-sm-3">
            <div className="row m-0 p-0">
                Score: {score}
            </div>
            <div className="row reset">
                <button onClick={resetGame} className="btn btn-secondary">Restart Game</button>
            </div>

            </div>
            <div className="col-sm-6">
            {gameItems.length > 0 ? gameItems.map((colItems, index) => {
                return (
                    <div key={index} className="row m-0 p-0">
                        <Card
                            rowIndex={index}
                            items={shuffle(colItems)}
                            playGame={playGame}
                            qrow={qrow}
                            qcol={qcol}
                        />
                    </div>
                )
                })
                :
                ""
            }
            </div>
            <div className="col-sm-3"></div>
        </div>
    </div>
  )
}
