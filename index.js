let keyword = document.querySelectorAll("input");
let textarea = document.querySelector("#textarea");

let change = document.querySelectorAll(".change");
let numberrow = document.querySelectorAll(".number")

let shifts = document.querySelectorAll(".shift");

// adding function to changecase while clicking the Capslock button
function changecase() {
    caps.classList.toggle("case")
    for (let j = 0; j < keyword.length; j++) {
        let notthis = keyword[j].value;
        let cases = notthis != "Enter" && notthis != "Backspace" && notthis != "Shift" && notthis != "Space"
        && notthis != "Tab" && notthis != "CapsLock"  && notthis != "Delete"    && notthis != ".com"  && notthis != "Symbols"
        if (caps.classList.contains("case")) {
            if (cases) {
                    keyword[j].value = keyword[j].value.toUpperCase();

            }
        }
        else if (cases) {
                keyword[j].value = keyword[j].value.toLowerCase();
        }

    }
}
function symbols(){
    for (let i = 0; i < change.length; i++) {
        change[i].classList.toggle("show");
       

    } for (let k = 0; k < numberrow.length; k++) {
        numberrow[k].classList.toggle("change");
    }
}
// adding function to changecase and change symbols while clicking the Shift button
function addshift() {
    symbols()
 for(let i=0;i<shifts.length;i++){

 
    shifts[i].classList.toggle("addshift")
    for (let j = 0; j < keyword.length; j++) {
        let notthis = keyword[j].value;
        if (shifts[i].classList.contains("addshift")) {
    // adding not function to
            if (notthis != "Enter" && notthis != "Backspace" && notthis != "Shift" && notthis != "Space"
                && notthis != "Tab" && notthis != "CapsLock"  && notthis != "Delete"    && notthis != ".com"  && notthis != "Symbols") {
                    keyword[j].value=keyword[j].value.toUpperCase();
            }
        }
        else  if (notthis != "Backspace" && notthis != "Enter" && notthis!= "Shift" && notthis!= "Space" && notthis != "Tab" && notthis != "CapsLock"  && notthis != "Delete"   && notthis != ".com"  && notthis != "Symbols") {
           
            keyword[j].value =keyword[j].value.toLowerCase();
        }
    }
 }
 
}

// adding function to laptop keys  is eaual to online keyboard button while click the the keys color will change automatically
window.addEventListener("keyup",(e)=>{
    for(let i=0; i<keyword.length; i++){
        if(keyword[i].value.toLowerCase()== e.key.toLowerCase()){
            keyword[i].classList.add('col')
        }setTimeout(() => {
            keyword[i].classList.remove('col')

        }, 200);
    }

})
// adding function to laptop keys  is eaual to online keyboard button
//  while click the the keys  text will print on the textarea
window.addEventListener("keyup", (e) => {
    let store = e.key
    // console.log(store);

 
    if (store != "Backspace" && store != "Enter" && store != "Shift" && store != "Delete" 
    && store != "CapsLock" && store != "Tab" && store != "Symbols" ) {
   
        textarea.value += store;
    } else if (store == "Backspace") {
        textarea.value = textarea.value.slice(0, textarea.value.length - 1);
    } else if (store == "Enter") {
        textarea.value += "\n";
    } else if (store == "Tab") {
        textarea.value += "    "
    } else if (store == "Delete") {
        textarea.value = " ";
        // alert("hii")
    } else if (store == "CapsLock") {
        changecase();
    } else if (store == "Shift") {
        addshift();


    }
})

let caps = document.querySelector(".caps");
for (let i = 0; i < keyword.length; i++) {

    keyword[i].addEventListener("click", (e) => {
        // console.log(e.target.value);
        let Keys = keyword[i].value
        if (Keys === "Backspace") {
            textarea.value = textarea.value.slice(0, textarea.value.length - 1);
        }
        else if (Keys === "Enter") {
            textarea.value += "\n"
        }
        else if (keyword[i].classList.contains("caps")) {
          changecase();  
        }
        else if (Keys === "Space") {
            textarea.value += " "
        }
        else if (Keys === "Tab") {
            textarea.value += "    "
        } else if(Keys === "Delete"){
            textarea.value = ""

        } 
        else if(Keys === "Symbols"){
            symbols()
        }
        else if (keyword[i].classList.contains("shift")) {
            addshift();

        } 

        else {
            textarea.value += e.target.value
        }
    })
}
























 // else  if(Keys = "space"){

        // }
        // else if(Keys === "Shift"){

        //     // keyword[i].classList.toggle("caps")
        //     for(let j=0;j<keyword.length;j++){



        //         // if(keyword[i].classList.contains("caps")){

        //         if(notthis != "Enter" && notthis != "Backspace" && notthis != "Shift" ){
        //         notthis = notthis.toUpperCase();
        //         // }
        //     }else{
        //         notthis = notthis.toLowerCase();
        //     }
        //     }
        // }

        // else if(Keys === "Shift"){
        //     alert("hii")
        //     for(let k=0;k<keyword.length;k++){
        //         if(keyword[k].value != "")
        //         {
        //         keyword[k].value = keyword[k].value.toLowerCase();
        //         }
        //         else{
        //             keyword[k].value = keyword[k].value.toUpperCase()
        //         }
        //     }

        // }