const qCont = document.getElementById("qCont")
const formQ1 = document.getElementById("formQ1")
const q1 = document.getElementById("q1")
const q2 = document.createElement("div")
const q2Follow = document.createElement('div')
const q3 = document.createElement("div")
const q32 = document.createElement("div")
const q3Follow = document.createElement("div")
const q3Follow2 = document.createElement("div")
const q4 = document.createElement("div")
q2.innerHTML = "<h2>How old are you?<h2>"
q2Follow.innerHTML = "<h2>Are one of your parents a US citizen?</h2>"
q3.innerHTML = "<h2>Do you have a green card?</h2>"
q32.innerHTML = "<h2>Do you have a current or expired visa</h2>"
q3Follow.innerHTML = "<h2>Are you married or engaged to a US citizen, sibllings with a citizen, or have a  job offer in the United States?</h2>"
q3Follow2.innerHTML = "<h2>Do you meet any of the requirements listed <a href = 'https://www.uscis.gov/greencard/eligibility-categories' target = '_blank'>here</a>?</h2>"
q4.innerHTML = "<h2>How many years have you had your green card?</h2>"
const formQ2 = document.createElement("form")
const formQ2Follow = document.createElement('form')
const formQ3 = document.createElement("form")
const formQ32 = document.createElement("form")
const formQ3Follow = document.createElement("form")
const formQ3Follow2 = document.createElement("form")
const formQ4 = document.createElement("form")
formQ3.id = "formQ3"
formQ2.innerHTML = "<input type='number' name='age' min='1' max='150' id = 'q2'><br>"
formQ2Follow.innerHTML = "<input type='radio' id='yes' name='yOn' value='yes'><label for='yes'>Yes</label><br><input type='radio' id='no' name='yOn' value='no'><label for='no'>No</label><br>"
formQ3.innerHTML = "<input type='radio' id='yes' name='yOn' value='yes'><label for='yes'>Yes</label><br><input type='radio' id='no' name='yOn' value='no'><label for='no'>No</label><br>"
formQ32.innerHTML = "<input type='radio' id='yes' name='yOn' value='yes'><label for='yes'>Yes</label><br><input type='radio' id='no' name='yOn' value='no'><label for='no'>No</label><br>"
formQ3Follow.innerHTML = "<input type='radio' id='yes' name='yOn' value='yes'><label for='yes'>Yes</label><br><input type='radio' id='no' name='yOn' value='no'><label for='no'>No</label><br>"
formQ3Follow2.innerHTML = "<input type='radio' id='yes' name='yOn' value='yes'><label for='yes'>Yes</label><br><input type='radio' id='no' name='yOn' value='no'><label for='no'>No</label><br>"
formQ4.innerHTML = "<input type='number' name='greenCard' min='1' max='150' id = 'q4'><br><br>"
const q1Button = document.getElementById("startButton")
const q2Button = document.createElement("input")
const q2FollowButton = document.createElement("input")
const q3Button = document.createElement("input")
const q32Button = document.createElement("input")
const q3ButtonFollow = document.createElement("input")
const q3ButtonFollow2 = document.createElement("input")
const q4Button = document.createElement("input")
q2Button.type = 'submit'
q2Button.className ='submitButton'
q2Button.value = 'Next'
q2FollowButton.type = 'submit'
q2FollowButton.value = 'Next'
q2FollowButton.className ='submitButton'
q3Button.type = 'submit'
q3Button.value = 'Next'
q3Button.className ='submitButton'
q32Button.type = 'submit'
q32Button.value = 'Next'
q32Button.className ='submitButton'
q3ButtonFollow.type = 'submit'
q3ButtonFollow.value = 'Next'
q3ButtonFollow.className ='submitButton'
q3ButtonFollow2.type = 'submit'
q3ButtonFollow2.value = 'Next'
q3ButtonFollow2.className ='submitButton'
q4Button.type = 'submit'
q4Button.value = 'Next'
q4Button.className ='submitButton'
let q1A
let q2A
let q2FollowA
let q3A
let q32A
let q3FollowA
let q3Follow2A
let q4A
function q1Next(){
    q1A = formQ1.options[formQ1.selectedIndex].text
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
        q2Follow.appendChild(formQ2Follow)
        formQ2Follow.appendChild(q2FollowButton)
        qCont.appendChild(q2Follow)
    }
    else{
        qCont.appendChild(q3)
        q3.appendChild(formQ3)
        formQ3.appendChild(q3Button)
    }
    return(q2A)
}
function q2FollowNext(){
    q2FollowA = document.querySelector('input[name="yOn"]:checked').value
    q2Follow.parentNode.removeChild(q2Follow)
    if(q2FollowA == "no"){
        let results = document.createElement("h2")
        results.innerHTML = "You have two options to become a citizen. First you can wait until you are 18 and apply by yourself, or you can get one of your parents to become a citizen then you will automatically derive citizenship from them. To get your official papers fill out <a href = 'https://www.uscis.gov/n-600' target = '_blank'>form N-600</a> online or mail it to: <br><br> USCIS <br> P.O. Box 20100 <br> Phoenix, AZ 85036"
        qCont.appendChild(results)
        qCont.setAttribute("style", "padding-top: 0")
    }
    else if(q2FollowA == "yes"){
        let results = document.createElement("h2")
        results.innerText = "According to Section 320 of the Immigration and Nationality Act you should already be a citizen. If you are confused or unsure about your citizenship status please call USCIS at 1 (800) 375-5283."
        qCont.appendChild(results)
    }
}
function q3Next(){
    q3A = document.querySelector('input[name="yOn"]:checked').value
    q3.parentNode.removeChild(q3)
    if(q3A == "no"){
        q32.appendChild(formQ32)
        formQ32.appendChild(q32Button)
        qCont.appendChild(q32)
    }
    else{
        qCont.appendChild(q4)
        q4.appendChild(formQ4)
        formQ4.appendChild(q4Button)
    }
}
function q32Next(){
    q32A = document.querySelector('input[name="yOn"]:checked').value
    q32.parentNode.removeChild(q32)
    if(q32A == "no"){
        console.log("no")
    }else if(q32A == "yes"){
        q3Follow.appendChild(formQ3Follow)
        formQ3Follow.appendChild(q3ButtonFollow)
        qCont.appendChild(q3Follow)
    }
}
function q3FollowNext(){
    q3FollowA = document.querySelector('input[name="yOn"]:checked').value
    q3Follow.parentNode.removeChild(q3Follow)
    if(q3FollowA == "yes"){
        let results = document.createElement("div")
        results.innerHTML = "<h2>For you to become a citizen you have to take a few steps. First you have to apply for your green card, fill out <a href = 'https://www.uscis.gov/i-485' target = '_blank'>form I-485</a> and provide all the forms and documents listed <a href = 'https://www.uscis.gov/i-485Checklist' target = '_blank'>here</a><br><br>After you get your green card you have to spend 5 years working in the US until you can apply for citizenship. With the <a href = 'https://www.uscis.gov/n-400'>N-400 form</a>.</h2>"
        qCont.appendChild(results)
        qCont.setAttribute("style", "padding-top: 0")
    }
    else if(q3FollowA == "no"){
        q3Follow2.appendChild(formQ3Follow2)
        formQ3Follow2.appendChild(q3ButtonFollow2)
        qCont.appendChild(q3Follow2)
    }
}
function q3Follow2Next(){
    q3Follow2A = document.querySelector('input[name="yOn"]:checked').value
    q3Follow2.parentNode.removeChild(q3Follow2)
    if(q3Follow2A == "yes"){
        let results = document.createElement("div")
        results.innerHTML = "<h2>For you to become a citizen you have to take a few steps. First you have to apply for your green card, fill out <a href = 'https://www.uscis.gov/i-485' target = '_blank'>form I-485</a> and provide all the forms and documents listed <a href = 'https://www.uscis.gov/i-485Checklist' target = '_blank'>here</a><br><br>After you get your green card you have to spend 5 years working in the US until you can apply for citizenship. With the <a href = 'https://www.uscis.gov/n-400'>N-400 form</a>.</h2>"
        qCont.appendChild(results)
        qCont.setAttribute("style", "padding-top: 0")
    }
    else if(q3Follow2A == "no"){
        let results = document.createElement("div")
        results.innerHTML = "<h2>You are currently ineligible for a green card. At this time you need to have a green card for at least 5 years before you can even apply for citizenship.</h2>"
        qCont.appendChild(results)
    }
}
function q4Next(){
    q4A = document.getElementById("q4").value
    q4.parentNode.removeChild(q4)
    if(q4A < 5){
        let results = document.createElement("h2")
        results.innerHTML = `You need to have you green card for ${5-q4A} more years before you can apply for citizenship. Once you meet the time requirement you will need to fill out the you will have to fill out the N-400 form which can be found <a href = 'https://www.uscis.gov/n-400' target = '_blank'>here</a>. You will also need to provide the following: </h2><br><br><ul class = 'noCenterUL'><li>A copy of your Permanent Resident Card (green card or permanent visa)</li><li>A copy of your marriage certificate (if applicable)</li><li>Form N-426, Request for Certification of Military or Naval Service (if applying for naturalization based on military service)</li><li>DD Form 214, NGB Form 22, or discharge orders (if applying for naturalization based on military service and separated from service)</li><li>A copy of your official military orders (if applying for naturalization based on military service and currently serving)</li><li>Two passport-style photographs (if you reside outside the United States)</li>`
        qCont.appendChild(results)
    }else {
        let results = document.createElement('div')
        results.innerHTML = "<h2>For you to become a citizen you will have to fill out the N-400 form which can be found <a href = 'https://www.uscis.gov/n-400' target = '_blank'>here</a>. You will also need to provide the following: </h2><br><ul class = 'noCenterUL'><li>A copy of your Permanent Resident Card (green card or permanent visa)</li><li>A copy of your marriage certificate (if applicable)</li><li>Form N-426, Request for Certification of Military or Naval Service (if applying for naturalization based on military service)</li><li>DD Form 214, NGB Form 22, or discharge orders (if applying for naturalization based on military service and separated from service)</li><li>A copy of your official military orders (if applying for naturalization based on military service and currently serving)</li><li>Two passport-style photographs (if you reside outside the United States)</li></ul>"
        qCont.appendChild(results)
        qCont.setAttribute("style", "padding-top: 0")
    }
}
q1Button.addEventListener("click", q1Next)
q2Button.addEventListener("click", q2Next)
q2FollowButton.addEventListener("click", q2FollowNext)
q3Button.addEventListener("click", q3Next)
q32Button.addEventListener("click", q32Next)
q3ButtonFollow.addEventListener("click", q3FollowNext)
q3ButtonFollow2.addEventListener("click", q3Follow2Next)
q4Button.addEventListener("click", q4Next)