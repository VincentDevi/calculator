

// const getDivision =() => {
//     const main = document.querySelector("main");
//     main.className = "calculator";

//     const divScreen = document.createElement("div");
//     divScreen.className = "calculator__screen";
//     main.appendChild(divScreen);


//     const divKeys = document.createElement("div");
//     divKeys.className = "keys";
//     main.appendChild(divKeys);

//     const opop = document.createElement("div");
//     opop.className = "keys__operation"
//     divKeys.appendChild(opop);
    
//     const divKeyNum = document.createElement("div");
//     divKeyNum.className = "keys__number";
//     divKeys.appendChild(divKeyNum);

//     for (let i=0; i<5; i++){
//         const divRow = document.createElement("div");
//         divRow.className = "keys__number__row";
//         divKeyNum.appendChild(divRow);
//     }


  
// }


// function to give attribute button and  value to an element.
// const getAttribute = (element, index) =>{
//     element.setAttribute('type', 'button');
//     element.setAttribute('value', index);
//     return element
// }

// // fucntion to create Number, "." and "="
// const addButtonNumber = () =>{
//     const num = document.querySelector('.keys__number');

//     const row1List = ["(", ")", "%"];
//     for (const j of row1List) {
//         const but = document.createElement("input");
//         const attriElement = getAttribute(but, j);
//         let toAdd = num.children[0];
//         toAdd.appendChild(attriElement);
//     }
//     const row5List = ["0",".","="];
//     for (const h of row5List) {
//         const but = document.createElement("input");
//         const attriElement = getAttribute(but, h);
//         if (h==="."){
//             but.setAttribute("data_number",h);

//         }
//         else{

//         }
//         let toAdd = num.children[4];
//         toAdd.appendChild(attriElement);
//     }


//     for (let i =1; i<10;i++){
//         const but = document.createElement("input");
//         but.setAttribute("data_number",i);
//         const attriElement = getAttribute(but, i);

//         if (i<4){
//             let toAdd = num.children[1];
//             toAdd.appendChild(attriElement);

//         }
//         else if (i>3 && i<7) {
//             let toAdd = num.children[2];
//             toAdd.appendChild(attriElement);

//         }
//         else{
//             let toAdd= num.children[3];
//             toAdd.appendChild(attriElement);

//         }
        
        
//     }

// }

// // function to create Operation
// const getOperation = () =>{
//     const operation = document.querySelector('.keys__operation')
//     const operationList = ['CE', '/', '*', '-', '+'];
//     for (let i =0;i<operationList.length;i++ ){
//         const ope = document.createElement("input");
//         const attriOperation = getAttribute(ope, operationList[i]);
//         operation.appendChild(attriOperation);
//     }
// }
// getDivision();
// addButtonNumber();
// getOperation();



// const buttonsList = document.querySelectorAll("input");
// liste =[];
// liste1=[];
// for (const button of buttonsList) {
//     let a =0;
//         button.addEventListener('click',event =>{
//             a=event.target.value;

//             let b = event.target;
//             if(b.hasAttribute('data_number')){
//                 liste1.push(a);
//                 console.log(liste1);
//             }
//             else{
//                 let mmm = Number( liste1.join("") );
//                 console.log(mmm);
//                 liste.push(mmm);
//                 console.log(liste);
//                 liste1 =[];
//                 console.log(liste1);
//                 let ope = a;
//                 console.log(ope);
//                 if (liste.length>1){
//                     if( ope==="+"){
//                     let result= liste[0] +liste[1];
//                     console.log(result);
//                     }
//                     else if(ope ==="-"){
//                         let result = liste[0]-liste[1];
//                         console.log(result);

//                     }
//                     else if(ope ==="/"){
//                         let result=liste[0]/liste[1];
//                         console.log(result);

//                     }
//                     else if (ope==="*"){
//                         let result=liste[0]*liste[1];
//                         console.log(result);

//                     }
//                     else{
//                         let result = (liste[0]*liste[1])/100;
//                         console.log(result);

//                     }
//                 }   
//             }

            
        
//         })

// }
// const buttonList = document.querySelectorAll("input");
// let result= "";
// for (const butt of buttonList) {
//     butt.addEventListener('click',event =>{
//         let val = event.target.value;
//         if (val === "="){
//             computeResult(result);
//             console.log(result);
//         }
//         else{
//             result = result + val;
//             console.log(result);
//         }
//     })
// }


// function computeResult(str){

//     return str;
//   }

function computeResult(str){
    return Function('return ' + str)()
  }
  
  

const buttonList = document.querySelectorAll('button');
const screen = document.querySelector('span');
const screenResult = document.querySelector('.calculator__screen__result')
let para ="";
for (const aButton of buttonList) {
    aButton.addEventListener('click', event =>{
        let buttonValue = event.target.getAttribute('data__value');
        if(buttonValue==="="){
            screenResult.textContent = computeResult(para);
        }
        else if(buttonValue==="%"){
            para= '('+para+'/100'+')'+'*';
            screen.textContent = para;
        }
        else if(buttonValue==="del"){
            para =para.slice(0, -1);
            screen.textContent = para;
        }
        else{
            console.log(buttonValue);
            para = para+buttonValue;
            screen.textContent = para;
            console.log(para);
        }

    })


}
let listNum = ['0','1','2','3','4','5','6','7','8','9','/','*','-','+','(',')','/'];
document.body.addEventListener('keyup',e =>{
    let compteur = 0;
    let butVal = e.key;
    if (e.code=="Backspace"){
        para =para.slice(0, -1);
        screen.textContent = para;
    }
    else if(e.key=="=" || e.key=='Enter'){
        screenResult.textContent = computeResult(para);

    }
    else if(e.key=="%"){
        para = '('+para+'/100'+')'+'*';
    }
    else{
        while(compteur <listNum.length){
                if(butVal==listNum[compteur]){
                    para =para+butVal;
                    screen.textContent = para;
                    compteur = listNum.length+1;
                }
                else{
                    compteur++;
                }
        }
    }
  
   
})

const getDiv = () =>{
    const divClassList = ['calculator__screen', 'keys', 'operation', 'keys__but', 'row'];
    for (let i =0; i<divClassList.length; i++){
        const nameClass = divClassList[i];
        if(nameClass==="row"){
            for (let j = 0; j < 4; j++){
                const div = document.createElement('div');
                div.className = nameClass;

            }
        }
        else{
            const div = document.createElement('div');
            div.className = nameClass;
        }
    }
}


  
