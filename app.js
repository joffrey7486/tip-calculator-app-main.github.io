// define my variables of entries
let tips = document.querySelectorAll('button.num')
let custom = document.querySelector('#custom')
let bill = document.querySelector('input.bill')
let people = document.querySelector('.people')

// define my variabes of outputs
let errorMsg = document.querySelector('.error')
let resultTip = document.querySelector('.result_tip')
let resultTotal = document.querySelector('.result_total')

const reset = document.querySelector('.reset')

tips.forEach(function(btn){
    btn.addEventListener("click", function(e){
        tips.forEach(function(single){
            single.classList.remove('selected')
        })
        btn.classList.add('selected')
        let tipValue = parseInt((e.target.dataset.tip))

        if(bill.value > 0 && people.value > 0){
            resultTip.textContent = "$" + (((tipValue * bill.value) / 100) / people.value).toFixed(2)
            resultTotal.textContent = "$" + ((parseInt(bill.value) + ((tipValue * bill.value) / 100)) / people.value).toFixed(2)
        } else {
        alert('fill in all fields')
        }
    }) 

})

reset.addEventListener('click', function(){
    resultTip.textContent = "$0.00"
    resultTotal.textContent = "$0.00"

    bill.value = ""
    people.value = ""
    custom.value = "Custom"
})

custom.addEventListener('keyup', function(){
    if(this.value >= 1 && this.value <= 100){
        if(bill.value > 0 && people.value > 0){
            resultTip.textContent = '$' + (((this.value * bill.value)/ 100)/ people.value).toFixed(2)
            resultTotal.textContent = '$' + ((parseInt(bill.value) + ((this.value * bill.value)/ 100))/ people.value).toFixed(2)
        }
    }
})