const qCont = document.getElementById("qCont")
const formQ1 = document.getElementById("formQ1")
const q1 = document.getElementById("q1")
const q2 = document.createElement("div")
q2.innerHTML = "<h2>How Old Are You<h2>"
const formQ2 = document.createElement("form")
formQ2.innerHTML = "<input type='number' name='age' min='1' max='150' id = 'q2'>"
const q1Button = document.getElementById("startButton")
const q2Button = document.createElement("input")
q2Button.type = 'submit'
q2Button.value = 'Submit'
function q1Next(){
    let q1A = formQ1.options[formQ1.selectedIndex].text
    console.log(q1A)
    q1.parentNode.removeChild(q1)
    qCont.appendChild(q2)
    q2.appendChild(formQ2)
    formQ2.appendChild(q2Button)
}
function q2Next(){
    let q2A = document.getElementById("q2").value
    console.log(q2A)
    q2.parentNode.removeChild(q2)
    if(q2A < 18){
        console.log("Underage")
        let resultsU = document.createElement('h2')
        resultsU.innerText = "Sorry you have to be 18 and older to become a US citizen"
        qCont.appendChild(resultsU)
    }
}
q1Button.addEventListener("click", q1Next)
q2Button.addEventListener("click", q2Next)