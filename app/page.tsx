"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cell from "./components/cell";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", "",])
  const [go, setGo] = useState("X")
  const [winngMessage, setwinngMessage] = useState("")
  
  useEffect(() => {
    winningCombos.forEach((combo) => {
      const owins = combo.every((cell) => cells[cell] === "O")
      const xwins = combo.every((cell) => cells[cell] === "X")
      if(owins) {
        setwinngMessage("O wins!")
      }else if (xwins) {
        setwinngMessage("X wins!")
      }
    })
  }, [cells])

  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winngMessage) {
      setwinngMessage("Draw!")
    }
  }, [cells, winningCombos])


  return (
    <main className="container">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell 
          id={index} 
          go={go} 
          setGo={setGo} 
          key={index} 
          cells={cells} 
          setCells={setCells}
          cell={cell}
          winngMessage={winngMessage}
          />
        ))}
      </div>
      <div>{winngMessage}</div>
      {!winngMessage && <div>{`its ${go} turn!`}</div>}
    </main>
  );
}
