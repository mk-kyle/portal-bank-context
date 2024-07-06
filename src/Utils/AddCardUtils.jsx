import { useContext } from "react"
import { cardContext } from "../App"


function AddCardUtils() {

    const { newCard } = useContext(cardContext)

    const showCards = newCard.map((item, indx) => {
        let cardNameSpace = item.cardNumber.match(/.{1,4}/g)
        let cardAmountSpace = item.cardAmount.match(/.{1,3}/g)
        return (
            <span onClick={addCardToPayHandler} className="rounded-xl p-4 flex flex-col gap-2 w-80 my-3" style={{ backgroundColor: item.backGround }}>
                <div className="flex justify-between items-center">
                    <div>{item.imgUrl}</div>
                    <div>{item.bankName}</div>
                </div>
                <div>Name: {item.cardName}</div>
                <div>Number: {cardNameSpace.join(' ')}</div>
                <div>Cvv2: {item.cvv2}</div>
                <div className="flex justify-between items-center">
                    <div>
                        <span>Date: {item.year} </span>
                        <span>/ {item.month}</span>
                    </div>
                    <span className="font-semibold">$ {cardAmountSpace.join(',')}</span>
                </div>
            </span>
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