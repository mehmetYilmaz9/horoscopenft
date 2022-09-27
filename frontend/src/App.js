import { useEffect, useState } from "react";
import { Contract, providers } from "ethers";


function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [date, setDate] = useState("1996-01-01");

  // state for zodiacSign derived from date.
  const [zodiacSign, setZodiacSign] = useState(null);

  // state for keeping track of current connected account.
  const [account, setAccount] = useState(null);

  // state for whether app is minting or not.
  const [isMinting, setIsMinting] = useState(false);

  const [NFTContract, setNFTContract] = useState(null);


  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);

  async function connectWallet() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        setAccount(accounts[0]);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  }

  function handleDateInput({ target }) {
    setDate(target.value);
  }

  function calculateZodiacSign(date) {
    let dateObject = new Date(date);
    let day = dateObject.getDate();
    let month = dateObject.getMonth();
    if (month === 0) {
      if (day >= 20) {
        setZodiacSign("Aquarius");
      } else {
        setZodiacSign("Capricorn");
      }
    } else if (month === 1) {
      if (day >= 19) {
        setZodiacSign("Pisces");
      } else {
        setZodiacSign("Aquarius");
      }
    } else if (month === 2) {
      if (day >= 21) {
        setZodiacSign("Aries");
      } else {
        setZodiacSign("Pisces");
      }
    } else if (month === 3) {
      if (day >= 20) {
        setZodiacSign("Taurus");
      } else {
        setZodiacSign("Aries");
      }
    } else if (month === 4) {
      if (day >= 21) {
        setZodiacSign("Gemini");
      } else {
        setZodiacSign("Taurus");
      }
    } else if (month === 5) {
      if (day >= 21) {
        setZodiacSign("Cancer");
      } else {
        setZodiacSign("Gemini");
      }
    } else if (month === 6) {
      if (day >= 23) {
        setZodiacSign("Leo");
      } else {
        setZodiacSign("Cancer");
      }
    } else if (month === 7) {
      if (day >= 23) {
        setZodiacSign("Virgo");
      } else {
        setZodiacSign("Leo");
      }
    } else if (month === 8) {
      if (day >= 23) {
        setZodiacSign("Libra");
      } else {
        setZodiacSign("Virgo");
      }
    } else if (month === 9) {
      if (day >= 23) {
        setZodiacSign("Scorpio");
      } else {
        setZodiacSign("Libra");
      }
    } else if (month === 10) {
      if (day >= 22) {
        setZodiacSign("Sagittarius");
      } else {
        setZodiacSign("Scorpio");
      }
    } else if (month === 11) {
      if (day >= 22) {
        setZodiacSign("Capricorn");
      } else {
        setZodiacSign("Sagittarius");
      }
    }
  }

  useEffect(() => {
    calculateZodiacSign(date);
   },[date]);

 function handleDateInput({ target }) {
   setDate(target.value);
  }

  if (account === null) {
      return (
        <div className="App">
          {
            isWalletInstalled ? (
              <div className="flex items-center justify-center my-5 text-sky-400">
              <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full" onClick={connectWallet}>
                Connect Wallet
              </button>
              </div>
             
            ) : (
              <p>Install Metamask wallet</p>
            )
          }
 
        </div>
      );
    }



  return (
    <div className="flex items-center justify-center my-5 text-sky-400">
      <div className="flex flex-col">
        <h1 className="flex justify-center	">Horoscope NFT Minting Dapp</h1> 
        <p className="italic text-gray-700">Connected as: {account}</p>
          <input className="" onChange={handleDateInput} value={date} type="date" id="dob"/>
          <br />
          <br />
              {zodiacSign ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                  viewBox="0 0 300 300"
                  width="400px"
                  height="400px"
                >
                  <style>{`.base { fill: white; font-family: serif; font-size: 24px;`}</style>
                  <rect width="100%" height="100%" fill="black" />
                  <text
                    x="50%"
                    y="50%"
                    class="base"
                    dominant-baseline="middle"
                    text-anchor="middle"
                  >
                    {zodiacSign}
                  </text>
                </svg>
              ) : null}
              
              <br/>
              <br/>
              <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full">Mint</button>
          </div>
      </div>
  
  );
}

export default App;
