import { Dispatch, SetStateAction } from "react";

type CellProps = {
  id: number;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  cell: string;
  winngMessage: string
}

const Cell = ({ go, setGo, id, cells, setCells, cell, winngMessage }: CellProps) => {
  const handleClick = (e) => {
    if (winngMessage){
      return
    }
    const notTaken = !cells[id]
    if(notTaken) {
      if (go === "X") {
        handelCellChange("X");
        setGo("O")
      }else if (go === "O") {
        handelCellChange("O");
        setGo("X")
      }
    }
    }
  const handelCellChange = (cellToChange: string) => {
    let copyCells = [...cells];
    copyCells[id] = cellToChange;
    setCells(copyCells);
  }
  return (
    <div className="square" onClick={handleClick}>
      <div className={cell}>{cell? (cell === "O" ? "O" : "X"): ""}</div>
    </div>
  )
}
export default Cell;