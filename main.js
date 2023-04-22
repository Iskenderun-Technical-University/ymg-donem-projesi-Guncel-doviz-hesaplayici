

const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result"); 

const currency = new Currency(); //nesne üretildi

runEventListeners();

function runEventListeners(){
    amountInput.addEventListener("input",exchange);//miktar girildiğinde exchange fonksiyonunu calıstır
}


function exchange(){
  const amount = Number(amountInput.value.trim());
  const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;//birincide hangisi seçiliyse onun içindeki değeri ver

  const secondOptionValue = secondOption.options[secondOption.selectedIndex]
  .textContent;//ikincide hangisi seçiliyse onun içindeki değeri ver


  currency.exchange(amount,firstOptionValue,secondOptionValue)
  .then((result) => {
    resultInput.value = result.toFixed(3)//noktadan sonra sadece 3 karakter görünecek
  })

}