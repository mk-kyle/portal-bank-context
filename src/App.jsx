import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { createContext, useState } from "react";

import AddCard from "./Components/AddCard";
import PayMony from "./Components/PayMony";
import History from "./Components/History";
import AddCardUtils from "./Utils/AddCardUtils";

import Eghtesad from './Components/images/Eghtesad Novin.png.jpeg'
import Ayande from './Components/images/ayande.png.jpeg'
import BlueBank from './Components/images/blue.png.jpeg'
import Gardeshgari from './Components/images/gardeshgari.png.jpeg'
import Keshavarzi from './Components/images/keshavarzi.png.jpeg'
import Markazi from './Components/images/markazi.png.jpeg'
import Maskan from './Components/images/maskan1.png.jpeg'
import Melat from './Components/images/melat.png.jpeg'
import Pasargad from './Components/images/pasargad.png.jpeg'
import Persian from './Components/images/persian.png.jpeg'
import Refah from './Components/images/refah.png.jpeg'
import Saderat from './Components/images/saderat.png.jpeg'
import Saman from './Components/images/saman.png.jpeg'
import Sepah from './Components/images/sepah.png.jpeg'
import Tejarat from './Components/images/tejarat.png.jpeg'



export const cardContext = createContext()

function App() {

  const [newCard, setNewCard] = useState([])
  const [sendCard, setSendCard] = useState()
  const [historyDes, setHistoryDes] = useState()
  const [addNewHistory, setAddNewHistory] = useState([])

  const bankCode = [
    { bankName: 'Maskan', code: 6280, url: Maskan, bg: { backgroundColor: '#FF9800' } },
    { bankName: 'Eghtesad', code: 6274, url: Eghtesad, bg: { backgroundColor: '#7B1FA2' } },
    { bankName: 'Ayande', code: 6362, url: Ayande, bg: { backgroundColor: '#795548' } },
    { bankName: 'BlueBank', code: 6219, url: BlueBank, bg: { backgroundColor: '#1E88E5' } },
    { bankName: 'Gardeshgari', code: 5055, url: Gardeshgari, bg: { backgroundColor: '#D32F2F' } },
    { bankName: 'Keshavarzi', code: 6392, url: Keshavarzi, bg: { backgroundColor: '#2E7D32' } },
    { bankName: 'Markazi', code: 6367, url: Markazi, bg: { backgroundColor: '#283593' } },
    { bankName: 'Melat', code: 9919, url: Melat, bg: { backgroundColor: '#B71C1C' } },
    { bankName: 'Pasargad', code: 6393, url: Pasargad, bg: { backgroundColor: '#F9A825' } },
    { bankName: 'Persian', code: 6221, url: Persian, bg: { backgroundColor: '#A1887F' } },
    { bankName: 'Refah', code: 5894, url: Refah, bg: { backgroundColor: '#5C6BC0' } },
    { bankName: 'Saderat', code: 6037, url: Saderat, bg: { backgroundColor: '#1A237E' } },
    { bankName: 'Saman', code: 8619, url: Saman, bg: { backgroundColor: '#1E88E5' } },
    { bankName: 'Sepah', code: 5892, url: Sepah, bg: { backgroundColor: '#E57373' } },
    { bankName: 'Tejarat', code: 6273, url: Tejarat, bg: { backgroundColor: '#5C6BC0' } }
  ]


  return (
    <div className="h-screen w-screen bg-slate-300 flex justify-center items-center box-border">
      <Router >
        <cardContext.Provider value={{ newCard, setNewCard, bankCode, sendCard, setSendCard, historyDes, setHistoryDes, addNewHistory, setAddNewHistory }}>
          <div className="h-[95%] w-96 bg-slate-800 rounded-xl">
            <div className="h-[8%] bg-yellow-400 rounded-t-xl px-5 flex justify-between items-center text-2xl">
              <NavLink to="/">&#128179;</NavLink>
              <NavLink to="/pay">&#128178;</NavLink>
              <NavLink to="/history">&#128177;</NavLink>
            </div>
            <div className="h-2/5 w-full bg-slate-700 rounded-b-2xl px-5 flex justify-center items-center overflow-y-auto">
              <AddCardUtils />
            </div>
            <div className="h-1/2 px-5 mx-auto overflow-y-auto">
              <Routes >
                <Route path="/" element={<AddCard />} />
                <Route path="/pay" element={<PayMony />} />
                <Route path="/history" element={<History />} />
              </Routes>
            </div>
          </div>
        </cardContext.Provider>
      </Router>
    </div>
  );
}

export default App;
