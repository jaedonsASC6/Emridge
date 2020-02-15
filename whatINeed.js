const qCont = document.getElementById("qCont")
const formQ1 = document.getElementById("formQ1")
const q1 = document.getElementById("q1")
const q2 = document.createElement("div")
const q3 = document.createElement("div")
const q4 = document.createElement("div")
q2.innerHTML = "<h2>How Old Are You<h2>"
q3.innerHTML = "<h2>Do You Have A Green Card</h2>"
q4.innerHTML = "<h2>How Long Have You Had Your Green Card</h2>"
const formQ2 = document.createElement("form")
const formQ3 = document.createElement("form")
const formQ4 = document.createElement("form")
formQ3.id = "formQ3"
formQ2.innerHTML = "<input type='number' name='age' min='1' max='150' id = 'q2'>"
formQ3.innerHTML = "<input type='radio' id='yes' name='yOn' value='yes'><label for='yes'>Yes</label><br><input type='radio' id='no' name='yOn' value='no'><label for='no'>No</label><br>"
formQ4.innerHTML = "<input type='number' name='greenCard' min='1' max='150' id = 'q4'>"
const q1Button = document.getElementById("startButton")
const q2Button = document.createElement("input")
const q3Button = document.createElement("input")
const q4Button = document.createElement("input")
q2Button.type = 'submit'
q2Button.value = 'Submit'
q3Button.type = 'submit'
q3Button.value = 'Submit'
q4Button.type = 'submit'
q4Button.value = 'Submit'
let q1A
let q2A
let q3A
let q4A
function q1Next(){
    q1A = formQ1.options[formQ1.selectedIndex].text
    console.log(q1A)
    q1.parentNode.removeChild(q1)
    qCont.appendChild(q2)
    q2.appendChild(formQ2)
    formQ2.appendChild(q2Button)
    return(q1A)
}
function q2Next(){
    q2A = document.getElementById("q2").value
    console.log(q2A)
    q2.parentNode.removeChild(q2)
    if(q2A < 18){
        console.log("Underage")
        let resultsU = document.createElement('h2')
        resultsU.innerText = "Sorry you have to be 18 and older to become a US citizen"
        qCont.appendChild(resultsU)
    }
    else{
        qCont.appendChild(q3)
        q3.appendChild(formQ3)
        formQ3.appendChild(q3Button)
    }
    return(q2A)
}
function q3Next(){
    q3A = document.querySelector('input[name="yOn"]:checked').value
    q3.parentNode.removeChild(q3)
    if(q3A == "no"){
        console.log("no")
        let resultsU2 = document.createElement('h2')
        resultsU2.innerText = "Sorry you need to have a green card to become a US citizen"
        qCont.appendChild(resultsU2)
    }
    else{
        qCont.appendChild(q4)
        q4.appendChild(formQ4)
        formQ4.appendChild(q4Button)
    }
}
function q4Next(){

}
q1Button.addEventListener("click", q1Next)
q2Button.addEventListener("click", q2Next)
q3Button.addEventListener("click", q3Next)
q4Button.addEventListener("click", q4Next)