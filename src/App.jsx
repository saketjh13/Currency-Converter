import { useState } from 'react'
import CurrencyInfo from './components/CurrencyInfo';
import Input from './components/Input';
import logo from './Images/image.jpg';

// import './App.css'

function App() {
  const [amount, setAmount] = useState(0); //state for amount entered by user
  const [baseCurrency, setBaseCurrency] = useState("usd"); //state for base currency
  const [convertingCurrency, setConvertingCurrency] = useState("inr"); //state for converted currency
  const [convertedAmount, setConvertedAmount] = useState(0); //state for converted currency

  const currencyInfo = CurrencyInfo(baseCurrency)
  // console.log(currencyInfo);
  //variable to call currencyInfo object which will fetch API and provide currency exchange rates of base Currency in each available currency
  const option = Object.keys(currencyInfo[0])
  // from the JSON data it fetch all the keys available and store it in the variable so that it can be used as options for currency selection
  // console.log(option);
  const convert = () => {
    const ans = currencyInfo[0];
    setConvertedAmount(amount * ans[convertingCurrency]);
    // console.log(ans);
  }

  return (
    <>
      <div className='flex flex-wrap'>
        <img src={logo} alt="" className='w-screen h-screen' />
      </div>
      <div className='flex absolute bg-blue-100 lg:w-2/3 lg:h-1/2 lg:top-32 lg:left-48 md:w-2/3 md:h-2/3 md:left-28 md:top-20 rounded-lg left-8 top-10 h-5/6 w-5/6 justify-center'>
        <form onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}>
          <div className='md:w-full w-3/5 h-1/3 p-5 inline-block'>
            <Input label="Base Currency" amountValue={amount}
              AmountChange={(amount) => setAmount(amount)}
              CurrencyChange={(currency) => setBaseCurrency(currency)}
              CurrencyOptions={option}
              selectedCurrency={baseCurrency}
            />

          </div>
          <div className="md:w-full w-3/5 h-1/3 p-5">
            <Input label="Converting Currency"
              amountValue={convertedAmount}
              CurrencyOptions={option}
              CurrencyChange={(currency) => setConvertingCurrency(currency)}
              selectedCurrency={convertingCurrency}
            />
          </div>
          <div className='flex justify-center'>
            <button type="submit" className="w-5/6 bg-blue-400 text-white px-4 py-3 rounded-lg">
              Convert {baseCurrency.toUpperCase()} to {convertingCurrency.toUpperCase()}
            </button>
          </div>


        </form >
      </div>
    </>
  )
}

export default App
