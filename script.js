const advice_id = document.querySelector(".advice_no > span")
const advice_text = document.querySelector("#container > q")
const dice = document.querySelector(".dice_img")

const random_id = () => {
 return(Math.floor(Math.random() * 100) + 1)
}

const fetch_advice = () => {
 const rand = random_id()
 fetch(`https://api.adviceslip.com/advice/${rand}`)
 .then((res) => res.json())
 .then((data) => {
  advice_id.textContent = String(rand)
  advice_text.textContent = data.slip.advice
  console.log(data)
 })
}

dice.addEventListener("click", fetch_advice)