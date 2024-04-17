let budget = document.querySelector("#inp1")


let budgetButton = document.querySelector("#btn")

let totalHeading = document.querySelector("#totalHeading span")

let spentHeading = document.querySelector("#spentHeading span")

let remainingHeading =  document.querySelector("#remainingHeading span")

let expenseDetail = document.querySelector("#expenseDetail")

let expenseAmount = document.querySelector("#expenseAmount")

let addexpensebtn = document.querySelector("#addexpensebtn")

let srNo = document.querySelector("#sno")

let tableBody =  document.querySelector("#tableBody")

let budget1 ;

let spent = 0

// let x = parseInt()


budgetButton.addEventListener("click",hello)



function hello(){

    totalHeading.innerHTML = +budget.value

     budget1 = +budget.value


}
console.log(typeof budget1)


addexpensebtn.addEventListener("click", hello1)


let count = 0

function hello1(event){

    event.preventDefault();

    if(budget1 === spent){

        alert("please update your budget")
    }
    
    else{
    count = ++count
    spent = spent + parseInt(expenseAmount.value);

    spentHeading.innerText = spent




    let tr = document.createElement("tr")

    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")

    td1.innerText = count
    td2.innerText = expenseDetail.value
    td3.innerText = expenseAmount.value



    tr.appendChild(td1)

    tr.appendChild(td2)
    tr.appendChild(td3)

    tableBody.appendChild(tr)



    remainingHeading.innerText = parseInt(totalHeading.innerHTML) -  parseInt(spentHeading.innerText);
    }



    








}

console.log(totalHeading.innerHTML)