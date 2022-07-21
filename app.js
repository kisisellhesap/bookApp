/* menü btn */
const addBtn = document.querySelector(".add");
const savedBtn = document.querySelector(".saved");

/* menü style effect */
const btnBackground = document.querySelector(".background");

/* add form */
const addContainer = document.querySelector(".add-container");

/* output form */
const outputContainer = document.querySelector(".output-container");

/* input add btn */
const addBook= document.querySelector(".add-book");

/*input forms */
const inputName = document.querySelector("#book-name");
const inputWriter = document.querySelector("#book-writer");
const inputPageCount = document.querySelector("#page-count");
const inputPublisher = document.querySelector("#book-publisher");
const inputType = document.querySelector("#book-type");
const inputPrice = document.querySelector("#book-price");
const editBtn = document.querySelector("#editBtn");

/* warning place */
const warning = document.querySelector(".warning");

let intTurnPrice;
let stringValuePrice;
let stringValuePage;

let intTurnPage;


let allcountheader= document.querySelector(".all-count-header");
let allpageheader = document.querySelector(".all-page-header");
let allpriceheader = document.querySelector(".all-price-header");



savedBtn.addEventListener("click",function(){

/* menü btn style action  */
btnBackground.style.transform = "translate(75px,0px)";
addBtn.setAttribute("disabled","disabled");


setTimeout(() => {
outputContainer.classList.add("saved-effect");
}, 400);

setTimeout(() => {
    addBtn.removeAttribute("disabled");
}, 1000);

addContainer.classList.add("add-effect");

});



addBtn.addEventListener("click",function(){

/* menü btn style action  */

btnBackground.style.transform = "translate(-20px,0px)";
savedBtn.setAttribute("disabled","disabled");

setTimeout(() => {
addContainer.classList.remove("add-effect");
}, 400);

setTimeout(() => {
    savedBtn.removeAttribute("disabled");
}, 1000);

outputContainer.classList.remove("saved-effect");

});


/*------------------------------------------------------------------------------ */
/*------------------------------------------------------------------------------ */
/*------------------------------------------------------------------------------ */
/*------------------------------------------------------------------------------ */
/*------------------------------------------------------------------------------ */

/*------------------------------------------------------------------------------ */
/*------------------------------------------------------------------------------ */
/*------------------------------------------------------------------------------ */
/*------------------------------------------------------------------------------ */
/*------------------------------------------------------------------------------ */
/*------------------------------------------------------------------------------ */


let bookArr = [];

if (localStorage.getItem("bookArr") !== null) {
    bookArr = JSON.parse(localStorage.getItem("bookArr"));
}
class Book {
    constructor(id,name,writer,pageCount,publisher,type,price){
        this.id=id;
        this.name = name;
        this.writer=writer;
        this.pageCount=pageCount;
        this.publisher=publisher;
        this.type=type;
        this.price=price;
    }
}

displayBooklist();





addBook.addEventListener("click",function(){

    addBook.style.pointerEvents="none";
    setTimeout(() => {
        addBook.style.pointerEvents="auto";
    }, 2100);

intTurnPrice = parseInt(inputPrice.value);
intTurnPage= parseInt(inputPageCount.value);

if(inputName.value=="" || inputWriter.value=="" || inputPageCount=="" || inputPublisher.value=="" || inputType.value=="" || inputPrice.value==""){
warning.textContent="Please dont the spaces";
warning.style.opacity="1";
setTimeout(() => {
    warning.textContent="";
    warning.style.opacity="0";
}, 2000);
}



else if (isNaN(intTurnPage)) {
    // console.log("karekter");
    // console.log(intTurnPage);
    //  stringValuePage = String(intTurnPage);

    // console.log(typeof stringValuePage);

    warning.textContent="Please enter numeric a value of page count";
warning.style.opacity="1";
setTimeout(() => {
    warning.textContent="";
    warning.style.opacity="0";
}, 2000);
}

else if (isNaN(intTurnPrice)){

    // console.log("karekter");
    // console.log(intTurnPrice);
    //  stringValuePrice = String(intTurnPrice);

    // console.log(typeof stringValuePrice);

    warning.textContent="Please enter numeric a value of price";
warning.style.opacity="1";
setTimeout(() => {
    warning.textContent="";
    warning.style.opacity="0";
}, 2000);
}


else {


        //   console.log("rakam");
        // console.log(intTurnPrice);
        // console.log(typeof intTurnPrice);
        
        // console.log("rakam");
        // console.log(intTurnPage);
        // console.log(typeof intTurnPage);

    


    bookArr.push(new Book(bookArr.length+1,inputName.value,inputWriter.value,inputPageCount.value,inputPublisher.value,inputType.value,inputPrice.value));

    clearInput();
    displayBooklist();
    localStorage.setItem("bookArr", JSON.stringify(bookArr));
    addeffecting();
    allShowData();

    console.log(bookArr);


    warning.textContent="Your book is add";
warning.style.opacity="1";
setTimeout(() => {
    warning.textContent="";
    warning.style.opacity="0";
}, 1500);
}

});



function displayBooklist(){

    outputContainer.innerHTML="";

    for(let book of bookArr){


let bookItem = `

<div class="book-container" id="${book.id}">
<h2 class="book-id">${outputContainer.childElementCount+1}</h2>
<div class="form-output pointer-event">
    <input type="text" id="output-book-name" class="output" value="${book.name}" required autocomplete="off"  readonly>
    <label for="output-book-name" title="Add the book name" data-title="Book Name"></label>
</div>
<div class="form-output pointer-event">
    <input type="text" id="output-book-writer" value="${book.writer}" class="output" required autocomplete="off" readonly >
    <label for="output-book-writer" title="Add the book writer" data-title="Book Writer"></label>
</div>
<div class="form-output pointer-event">
    <input type="text" id="output-page-count" value="${book.pageCount}" class="output" required autocomplete="off" readonly >
    <label for="output-page-count" title="Add the book page count" data-title="Book Page Count"></label>
</div>
<div class="form-output pointer-event">
    <input type="text" id="output-book-publisher" value="${book.publisher}"s class="output" required autocomplete="off" readonly>
    <label for="output-book-publisher" title="Add the book publisher" data-title="Book Publisher"></label>
</div>
<div class="form-output pointer-event">
    <input type="text" id="output-book-type" value="${book.type}" class="output" required autocomplete="off" readonly>
    <label for="output-book-type" title="Add the book type" data-title="Book Type"></label>
</div>
<div class="form-output pointer-event">
    <input type="text" id="output-book-price" value="${book.price}" class="output" required autocomplete="off" readonly>
    <label for="output-book-price" title="Add the book price    (₺)" data-title="Book Price    (₺)"></label>
</div>

<p class="warning"></p>
<div class="book-controller">

    <i class="fa-solid fa-paintbrush editBtn-add" onclick="editBook(this,'${book.id}','${book.name}','${book.writer}','${book.pageCount}','${book.publisher}','${book.type}','${book.price}')" id="editBtn"> </i>
    <i class="fa-solid fa-trash-can" onclick="clearbook(this,'${book.id}')" id="clearBtn"> </i>
</div>
</div>


`;


outputContainer.insertAdjacentHTML("beforeend",bookItem);


}


}


function clearbook(input,id){



let deleteId;
for(let index in bookArr){
    if(bookArr[index].id==id){
        deleteId=index;
    }
}
bookArr.splice(deleteId,1);
displayBooklist();
console.log(bookArr);
localStorage.setItem("bookArr", JSON.stringify(bookArr));
addeffecting();
allShowData();

}

function clearInput() {
    inputName.value="";
    inputWriter.value="";
    inputPageCount.value="";
    inputPublisher.value="";
    inputPrice.value="";
    inputType.value="";
}





    


function editBook(input,id,bookname,bookwriter,bookpage,bookpublisher,booktype,bookprice){
    setTimeout(() => {
if(input.classList=="fa-solid fa-paintbrush editBtn-add"){
input.classList="fa-solid fa-paintbrush editBtn-edit";



for(let output of input.parentElement.parentElement.children){

    if(output.classList=="form-output pointer-event"){
        let out =  output.children[0];
        out.removeAttribute("readonly");

        output.classList.remove("pointer-event");
    }

}


}


else {

    let name = input.parentElement.parentElement.children[1].children[0];
    let writer=input.parentElement.parentElement.children[2].children[0];
    let page=input.parentElement.parentElement.children[3].children[0];
    let publisher=input.parentElement.parentElement.children[4].children[0];
    let type=input.parentElement.parentElement.children[5].children[0];
    let price=input.parentElement.parentElement.children[6].children[0];
    let warningout = input.parentElement.previousElementSibling;

    intTurnPrice = parseInt(price.value);
intTurnPage= parseInt(page.value);

    input.classList="fa-solid fa-paintbrush editBtn-add";


    for(let output of input.parentElement.parentElement.children){

        if(output.classList=="form-output"){
            let out =  output.children[0];
            out.setAttribute("readonly","readonly");
            output.classList.add("pointer-event");
           
        }

    }


    if(name.value=="" || writer.value=="" || page.value=="" || publisher.value=="" || type.value=="" || price.value==""){
        warningout.textContent="If you leave a space, the changes will not be saved";
        warningout.style.opacity="1";
        setTimeout(() => {
            warningout.style.opacity="0";
            warningout.textContent="";
  
        }, 3000);

    }


    
else if (isNaN(intTurnPage)) {
    // console.log("karekter");
    // console.log(intTurnPage);
    //  stringValuePage = String(intTurnPage);

    // console.log(typeof stringValuePage);

    warningout.textContent="Please enter numeric a value of page count";
    warningout.style.opacity="1";
    
setTimeout(() => {
    warningout.textContent="";
    warningout.style.opacity="0";
}, 2000);
}

else if (isNaN(intTurnPrice)){

    // console.log("karekter");
    // console.log(intTurnPrice);
    //  stringValuePrice = String(intTurnPrice);

    // console.log(typeof stringValuePrice);

    warningout.textContent="Please enter numeric a value of price";
    warningout.style.opacity="1";
setTimeout(() => {
    warningout.textContent="";
    warningout.style.opacity="0";
}, 2000);
}

    else {

        for(let bookk of bookArr ){
            if(id==bookk.id){
         
          
                bookk.name=name.value;
                bookk.writer=writer.value;
                bookk.pageCount=page.value;
                bookk.publisher=publisher.value;
                bookk.type=type.value;
                bookk.price=price.value;
                console.log(name);
            }
        }
        console.log(bookArr);
        warningout.textContent="Changes are saved";
        warningout.style.opacity="1";
        setTimeout(() => {
            warningout.style.opacity="0";
            warningout.textContent="";
  
        }, 3000);

        localStorage.setItem("bookArr", JSON.stringify(bookArr));
        addeffecting();
        allShowData();
    }

}

}, 300);
}

allShowData();


function allShowData(){

allcountheader.textContent=bookArr.length;

let pagePlus=0;
let pricePlus=0;
let parseIntpage;
let parseIntprice;
for(let book of bookArr){

    parseIntpage = parseInt(book.pageCount);

  pagePlus+= parseIntpage;

  parseIntprice = parseInt(book.price);

  pricePlus+= parseIntprice;

}

allpageheader.textContent=pagePlus;
allpriceheader.textContent=pricePlus+"  TL";
}



function addeffecting(){

   
allcountheader.classList.add("info-effect-book");
allpageheader.classList.add("info-effect-page");
allpriceheader.classList.add("info-effect-price");
  


    setTimeout(() => {
    allcountheader.classList.remove("info-effect-book"); 
    allpageheader.classList.remove("info-effect-page");
    allpriceheader.classList.remove("info-effect-price");
    },2000);

}

