import React from 'react'

function Input({
  label, //represents the conversion... "Base Currency Value" and "Converted Currency Value" of the currency 
  amountValue, //amount value entered by the user
  AmountChange, //to change state when the amount is change
  CurrencyChange, //when there will be any change in the currency 
  CurrencyOptions=[], //array that stores the various type of currency for options 
  selectedCurrency = "usd", // tell us about the selected currency
}) {
  return (
    //If we are entering value for conversion then the label will be "Base Currency Value" and where the converted value is shown the label will be "Converted Currency Value"
    //On change with amountValue an event will fire which will show the change in amount

    <div className={'flex rounded-lg '}>
      <div className='w-full p-2'>
        <label className=' text-black font-semibold inline-block'>
          {label}
        </label>

        <input
          className='py-2 mx-2 lg:mx-3 bg-white outline-cyan-300 w-full inline-block'
          type="number"
          placeholder='amount'
          value={amountValue}
          onChange={(e) =>  AmountChange(Number(e.target.value))}
        />
      </div>
      <div className="md:w-1/4 w-1/6 p-2 text-center my-3 md:my-0 ">
        <h4 className='text-black font-semibold mx-2 md:inline-block block px-3 py-1 md:py-0'> Currency</h4>
        <select
          className='outline-none cursor-pointer p-1 bg-blue-300 rounded-lg md:h-12 md:inline-block block px-3 mx-3 h-2/3'
          value={selectedCurrency}
          onChange={(e) => CurrencyChange(e.target.value)}>
          
          {CurrencyOptions.map((currency) => (
            //key must be unique.. used for better performance optimization in react.Whenever you use a loop it is important to provide a unique key attribute. The reason is that React uses these keys to track if items were changed, added, or removed.
            <option key={currency} value={currency}>
            {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Input;
