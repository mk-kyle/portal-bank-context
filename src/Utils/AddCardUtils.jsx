import { useContext } from "react"
import { cardContext } from "../App"


function AddCardUtils() {

    const { newCard, setSendCard } = useContext(cardContext)

    const showCards = newCard.map((item, indx) => {
        // let cardNameSpace = item.cardNumber.match(/.{1,4}/g)
        // let cardAmountSpace = item.cardAmount.match(/.{1,3}/g)

        const addCardToPayHandler = () => {
            setSendCard(item)
        }
        return (
            <div key={`container${indx}`} onClick={addCardToPayHandler} className="rounded-xl p-4 flex flex-col gap-2 my-4 w-full" style={{ backgroundColor: item.backGround }}>
                <div className="flex justify-between items-center">
                    <div key={`image${indx}`}>{item.imgUrl}</div>
                    <div key={`bankName${indx}`}>{item.bankName}</div>
                </div>
                <div key={`cardName${indx}`}>Name: {item.cardName}</div>
                <div key={`cardNumber${indx}`}>Number: {item.cardNumber}</div>
                <div key={`cvv2${indx}`}>Cvv2: {item.cvv2}</div>
                <div key={`date&Amount${indx}`} className="flex justify-between items-center">
                    <div key={`dateContainer${indx}`}>
                        <span key={`year${indx}`}>Date: {item.year} </span>
                        <span key={`month${indx}`}>/ {item.month}</span>
                    </div>
                    <span key={`amount${indx}`} className="font-semibold">$ {item.cardAmount}</span>
                </div>
            </div>
        )
    })


    if (newCard.length !== 0) {
        return (
            <div className="w-full h-full">
                {showCards}
            </div>
        )
    } else {
        return (
            <div className="text-white text-5xl">
                No Cards
            </div>
        )
    }
}

export default AddCardUtils