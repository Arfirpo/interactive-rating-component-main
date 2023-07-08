let numberContainer = document.querySelector('.rating-state__number-container');
let rateNumber = document.querySelector('.thankyou-state__result--number');
let submitButton = document.querySelector('.rating-state__submit-button');
let ratingState = document.querySelector('.rating-state');
let thankyouState = document.querySelector('.thankyou-state');

numberContainer.addEventListener('click', event=>{
    let numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected;
    if(numberSelected > 0 || numberSelected <= 5){
        submitButton.addEventListener('click', ()=>{
            ratingState.style.display = 'none';
            thankyouState.style.display = "flex"
        })
    }
});



