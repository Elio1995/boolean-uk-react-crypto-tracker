import { useEffect, useState } from "react";

import { CRIPTO_LIST, STATUS_UPDATES } from "./constants";

import MainDetail from "./components/MainDetail";
import NewsCard from "./components/NewsCard";
import cryptoItemList from "./components/cryptoItemList";

function App() {
  // This piece of state keeps the id from the selected coin to be displayed in the MainDetail component
  const [selectedCripto, setSelectedCripto] = useState(null);
  const [crypto, setCrypto] = useState([]);
  const [status, setStatus] = useState([]);

  function getCryptoList() {
    return fetch(CRIPTO_LIST)
      .then((response) => response.json())
      .then((data) => {
        setCrypto(data);
      });
  }

  function getNewsList() {
    return fetch(STATUS_UPDATES)
      .then((response) => response.json())
      .then((data) => {
        setStatus(data["status_updates"]);
      });
  }

  useEffect(() => {
    getCryptoList();
    getNewsList();
  }, []);

  // This function gives you whether a coin has been selected or not
  // You will need this for the SideListItem component
  function isSelectedCripto(id) {
    return selectedCripto === id;
  }

  return (
    /* These (<> </>) are called React Fragments, and allow us to return more than one top element */
    <>
      <aside className="side-list">
        <ul>
          {crypto.map((coin, index) => {
            return (
              <cryptoItemList
                coin={coin}
                index={index}
                isSelectedCripto={isSelectedCripto}
                setSelectedCripto={setSelectedCripto}
              />
            );
          })}
        </ul>
        {/* This is where the side list goes */}
      </aside>
      <main className="main-detail">
        {selectedCripto ? (
          <MainDetail selectedCripto={selectedCripto} />
        ) : (
          "Select a coin bro!"
        )}
        <ul>
          {status.map((update) => {
            return <NewsCard newsItem={update} />;
          })}
        </ul>
        {/* News feed component needs to go here */}
      </main>
    </>
  );
}

export default App;
