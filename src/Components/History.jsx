import { useContext, useState } from "react"
import { cardContext } from "../App"


function History() {

  const { addNewHistory } = useContext(cardContext)
  // const [showHistory, setShowHistory] = useState()


  let makeShowHistory
  if (addNewHistory.length !== 0) {
    makeShowHistory = addNewHistory.map((item) => {
      return (
        <div className="bg-[#ffffff53] rounded-xl my-4 p-4">
          <div>{item.desImgUrl}</div>
            <div>from: {item.cardNumber}</div>
            <div>to: {item.historyDes}</div>
          <div>$ {item.cardAmount}</div>
        </div>
      )
    })
    // setShowHistory(makeShowHistory)
  }


  if (addNewHistory.length !== 0) {
    return (
      <div>{makeShowHistory}</div>
    )
  } else {
    return (
      <div>No History</div>
    )
  }

}

export default History