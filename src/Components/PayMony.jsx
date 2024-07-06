import { useContext, useState } from "react"
import { cardContext } from "../App"

import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.css'


function PayMony() {

  const { bankCode, sendCard, setSendCard, newCard, setNewCard, historyDes, setHistoryDes, addNewHistory, setAddNewHistory } = useContext(cardContext)
  const [desImgUrl, setDesImgUrl] = useState('')
  const [PassValue, setPassValue] = useState('')
  const [desAmountValue, setDesAmountValue] = useState('')

  const destinationCardHandler = (event) => {
    const firstFourItem = event.target.value[0] + event.target.value[1] + event.target.value[2] + event.target.value[3]
    const findCodeBank = bankCode.find((e) => e.code == firstFourItem)
    if (findCodeBank) {
      bankCode.map((bank) => {
        if (bank.code == firstFourItem) {
          setDesImgUrl(<img className="rounded-full" src={bank.url} alt="bankIcon" />)
          setHistoryDes(event.target.value)
        }
      })
    } else {
      setDesImgUrl('')
    }
  }

  const numberCardHandler = (event) => {
    if (event.target.value.length == 0 && event.which == 48) {
      event.preventDefault()
    } else if (event.target.value.length == 0 && event.which == 96) {
      event.preventDefault()
    }
    if (event.which !== 8 && event.which !== 46 && event.which !== 39 && event.which !== 37 && event.which !== 9 && event.which < 48 || event.which < 96 && event.which > 57 || event.which > 105) {
      event.preventDefault()
    }
  }


  const passwordHandler = (event) => {
    setPassValue(event.target.value)
  }

  const desAmountdHandler = (event) => {
    setDesAmountValue(event.target.value)
  }


  const payMonyHandler = () => {
    if (desAmountValue <= sendCard.cardAmount && PassValue.length > 7 && desImgUrl && historyDes.length == 16) {
      const newAmount = sendCard.cardAmount - desAmountValue
      setSendCard({ ...sendCard, cardAmount: newAmount })
      const payIsDone = newCard.map((card) => {
        if (card.id == sendCard.id) {
          return ({ ...card, cardAmount: newAmount })
        } else {
          return card
        }
      })
      const sendHistory = {
        historyDes: historyDes,
        desImgUrl: sendCard.imgUrl,
        cardAmount: desAmountValue,
        cardNumber: sendCard.cardNumber,
      }
      setAddNewHistory([...addNewHistory, sendHistory])
      setNewCard(payIsDone)
    } else {
      const err = () => {
        new Notify({
          status: 'error',
          title: 'Pleas Fill Inputs',
        })
      }
      err()
    }
  }


  if (sendCard) {
    return (
      <div>
        <input readOnly defaultValue={sendCard.cardName} type="text" className="block w-full rounded-2xl h-10 bg-[#ffffff63] outline-none pl-2 text-white mb-4 focus:border-b-2 border-blue-500 focus:placeholder:font-semibold mt-4" />
        <div className="flex justify-center items-center mb-4 gap-4">{sendCard.imgUrl}<input defaultValue={sendCard.cardNumber} readOnly type="text" className="block w-full rounded-2xl h-10 bg-[#ffffff63] outline-none pl-2 text-white focus:border-b-2 border-blue-500 focus:placeholder:font-semibold" /></div>
        <div className="flex justify-center items-center gap-4 mb-4">{desImgUrl}<input onChange={destinationCardHandler} onKeyDown={numberCardHandler} maxLength={16} type="text" placeholder="Destination Card ..." className="block w-full rounded-2xl h-10 bg-[#ffffff63] outline-none pl-2 text-white focus:border-b-2 border-blue-500 focus:placeholder:font-semibold" /></div>
        <input onChange={passwordHandler} type="password" placeholder="Password" maxLength={10} className="block w-full rounded-2xl h-10 bg-[#ffffff63] outline-none pl-2 text-white mb-4 focus:border-b-2 border-blue-500 focus:placeholder:font-semibold" />
        <input onChange={desAmountdHandler} type="text" placeholder="Amount ?" maxLength={10} onKeyDown={numberCardHandler} className="block w-full rounded-2xl h-10 bg-[#ffffff63] outline-none pl-2 text-white mb-4 focus:border-b-2 border-blue-500 focus:placeholder:font-semibold" />
        <button onClick={payMonyHandler} className="w-full h-12 bg-lime-700 rounded-full font-bold text-white hover:bg-lime-800">Pay</button>
      </div>
    )
  } else {
    return (
      <div>
        <input readOnly placeholder="Your Card Name ..." type="text" className="block w-full rounded-2xl h-10 bg-[#ffffff63] outline-none pl-2 text-white mb-4 focus:border-b-2 border-blue-500 focus:placeholder:font-semibold mt-4" />
        <input readOnly placeholder="Your Card Number ..." type="text" className="block w-full rounded-2xl h-10 bg-[#ffffff63] outline-none pl-2 text-white mb-4 focus:border-b-2 border-blue-500 focus:placeholder:font-semibold" />
        <input readOnly placeholder="Destination Card ..." type="text" className="block w-full rounded-2xl h-10 bg-[#ffffff63] outline-none pl-2 text-white mb-4 focus:border-b-2 border-blue-500 focus:placeholder:font-semibold" />
        <input readOnly placeholder="Password" type="text" className="block w-full rounded-2xl h-10 bg-[#ffffff63] outline-none pl-2 text-white mb-4 focus:border-b-2 border-blue-500 focus:placeholder:font-semibold" />
        <input readOnly placeholder="Amount ?" type="text" className="block w-full rounded-2xl h-10 bg-[#ffffff63] outline-none pl-2 text-white mb-4 focus:border-b-2 border-blue-500 focus:placeholder:font-semibold" />
        <button className="w-full h-12 bg-lime-700 rounded-full font-bold text-white hover:bg-lime-800">Pay</button>
      </div>
    )
  }

}

export default PayMony