import { useContext, useState } from "react"
import { cardContext } from "../App"
import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.css'


function AddCard() {

    const { newCard, setNewCard, bankCode } = useContext(cardContext)

    const [cardName, setCardName] = useState()
    const [cardNumber, setCardNumber] = useState()
    const [cvv2, setCvv2] = useState()
    const [year, setYear] = useState()
    const [month, setMonth] = useState()
    const [cardAmount, setCardAmount] = useState()
    const [imgUrl, setImgUrl] = useState(null)
    const [backGround, setBackGround] = useState('')
    const [bankName, setBankName] = useState('')


    const cardNameHandler = (event) => {
        setCardName(event.target.value);
    }

    const cardNumberHandler = (event) => {
        setCardNumber(event.target.value)

        const findBankCode = event.target.value[0] + event.target.value[1] + event.target.value[2] + event.target.value[3]
        const findCode = bankCode.find((e) => e.code == findBankCode)
        if (findCode) {
            bankCode.map((evt) => {
                if (findBankCode == evt.code) {
                    setImgUrl(<img className="rounded-full" src={evt.url} alt="bank" />)
                    setBackGround(evt.bg.backgroundColor)
                    setBankName(evt.bankName)
                }
            })
        } else return setImgUrl(null)
    }

    const cvvHandler = (event) => {
        setCvv2(event.target.value)
    }

    const yearHandler = (event) => {
        setYear(event.target.value)
    }

    const monthHandler = (event) => {
        setMonth(event.target.value)
    }

    const AmountHandler = (event) => {
        setCardAmount(event.target.value)
    }

    const nameCardHandler = (event) => {
        if (event.which !== 8 && event.which !== 46 && event.which !== 39 && event.which !== 37 && event.which !== 9 && event.which < 65 || event.which > 90) {
            event.preventDefault()
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

    const dateCardHandler = (event) => {
        if (event.which !== 8 && event.which !== 46 && event.which !== 39 && event.which !== 37 && event.which !== 9 && event.which < 48 || event.which < 96 && event.which > 57 || event.which > 105) {
            event.preventDefault()
        }
    }

    const yearBlurHandler = (event) => {
        if (event.target.value < 10 && event.target.value > 0 && event.target.value.length == 1) {
            event.target.value = '0' + event.target.value
        } else if (event.target.value == '00') {
            event.target.value = ''
        } else if (event.target.value > 12){
            event.target.value = '12'
        }
    }


    const monthBlurHandler = (event) => {
        if (event.target.value < 10 && event.target.value > 0 && event.target.value.length == 1) {
            event.target.value = '0' + event.target.value
        } else if (event.target.value == '00') {
            event.target.value = ''
        } else if (event.target.value > 12){
            event.target.value = '12'
        }
    }

    const addNewCardHandler = () => {
        if (imgUrl && cvv2.length > 2 && cardName.length > 2 && cardNumber.length == 16 && year.length == 2 && month.length == 2 && cardAmount.length > 3) {
            const addNewCard = {
                id: Math.random() * 100,
                bankName: bankName,
                cardName: cardName,
                cardNumber: cardNumber,
                cvv2: cvv2,
                year: year,
                month: month,
                imgUrl: imgUrl,
                backGround: backGround,
                cardAmount: cardAmount,
            }
            setNewCard([...newCard, addNewCard])
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

    return (
        <div className="pt-4">
            <input onChange={cardNameHandler} onKeyDown={nameCardHandler} type="text" maxLength={20} placeholder="Card Name ..." className="block w-full rounded-2xl h-10 bg-[#ffffff63] outline-none pl-2 text-white mb-4 focus:border-b-2 border-blue-500 focus:placeholder:font-semibold" />
            <div className="flex justify-center items-center mb-4 gap-4">
                {imgUrl}<input type="text" onChange={cardNumberHandler} onKeyDown={numberCardHandler} maxLength={16} placeholder="Card Number ..." className=" w-full rounded-2xl h-10 bg-[#ffffff63] outline-none pl-2 text-white focus:border-b-2 border-blue-500 focus:placeholder:font-semibold" />
            </div>
            <input type="text" onChange={cvvHandler} onKeyDown={numberCardHandler} maxLength={4} placeholder="CVV 2 ..." className="block w-full rounded-2xl h-10 bg-[#ffffff63] outline-none pl-2 text-white mb-4 focus:border-b-2 border-blue-500 focus:placeholder:font-semibold" />
            <div className="flex justify-center items-center gap-4">
                <input onBlur={yearBlurHandler} type="text" onChange={yearHandler} onKeyDown={dateCardHandler} maxLength={2} placeholder="YY ..." className="block w-1/2 rounded-2xl h-10 bg-[#ffffff63] outline-none pl-2 text-white mb-4 focus:border-b-2 border-blue-500 focus:placeholder:font-semibold" />
                <input onBlur={monthBlurHandler} type="text" onChange={monthHandler} onKeyDown={dateCardHandler} maxLength={2} placeholder="MM ..." className="block w-1/2 rounded-2xl h-10 bg-[#ffffff63] outline-none pl-2 text-white mb-4 focus:border-b-2 border-blue-500 focus:placeholder:font-semibold" />
            </div>
            <input type="text" onChange={AmountHandler} onKeyDown={numberCardHandler} maxLength={10} placeholder="Amount ..." className=" w-full rounded-2xl h-10 bg-[#ffffff63] outline-none pl-2 text-white focus:border-b-2 border-blue-500 focus:placeholder:font-semibold" />
            <button onClick={addNewCardHandler} className="w-full h-12 bg-lime-700 rounded-full font-bold text-white mt-4 hover:bg-lime-800">Add New Card</button>
        </div>
    )
}

export default AddCard