

const getDivision =() => {
    const main = document.querySelector("main");
    main.className = "calculator";

    const divScreen = document.createElement("div");
    divScreen.className = "calculator__screen";
    main.appendChild(divScreen);


    const divKeys = document.createElement("div");
    divKeys.className = "keys";
    main.appendChild(divKeys);

    const opop = document.createElement("div");
    opop.className = "keys__operation"
    divKeys.appendChild(opop);
    
    const divKeyNum = document.createElement("div");
    divKeyNum.className = "keys__number";
    divKeys.appendChild(divKeyNum);

    for (let i=0; i<5; i++){
        const divRow = document.createElement("div");
        divRow.className = "keys__number__row";
        divKeyNum.appendChild(divRow);
    }


  
}


// function to give attribute button and  value to an element.
const getAttribute = (element, index) =>{
    element.setAttribute('type', 'button');
    element.setAttribute('value', index);
    return element
}

// fucntion to create Number, "." and "="
const addButtonNumber = () =>{
    const num = document.querySelector('.keys__number');

    const row1List = ["(", ")", "%"];
    for (const j of row1List) {
        const but = document.createElement("input");
        const attriElement = getAttribute(but, j);
        let toAdd = num.children[0];
        toAdd.appendChild(attriElement);
    }
    const row5List = ["0",".","="];
    for (const h of row5List) {
        const but = document.createElement("input");
        const attriElement = getAttribute(but, h);
        if (h==="."){
            but.setAttribute("data_number",h);

        }
        else{

        }
        let toAdd = num.children[4];
        toAdd.appendChild(attriElement);
    }


    for (let i =1; i<10;i++){
        const but = document.createElement("input");
        but.setAttribute("data_number",i);
        const attriElement = getAttribute(but, i);

        if (i<4){
            let toAdd = num.children[1];
            toAdd.appendChild(attriElement);

        }
        else if (i>3 && i<7) {
            let toAdd = num.children[2];
            toAdd.appendChild(attriElement);

        }
        else{
            let toAdd= num.children[3];
            toAdd.appendChild(attriElement);

        }
        
        
    }

}

// function to create Operation
const getOperation = () =>{
    const operation = document.querySelector('.keys__operation')
    const operationList = ['CE', '/', '*', '-', '+'];
    for (let i =0;i<operationList.length;i++ ){
        const ope = document.createElement("input");
        const attriOperation = getAttribute(ope, operationList[i]);
        operation.appendChild(attriOperation);
    }
}
getDivision();
addButtonNumber();
getOperation();



const buttonsList = document.querySelectorAll("input");
liste =[];
liste1=[];
for (const button of buttonsList) {
    let a =0;
        button.addEventListener('click',event =>{
            a=event.target.value;

            let b = event.target;
            if(b.hasAttribute('data_number')){
                liste1.push(a);
                console.log(liste1);
            }
            else{
                let mmm = Number( liste1.join("") );
                console.log(mmm);
                liste.push(mmm);
                console.log(liste);
                liste1 =[];
                console.log(liste1);
                let ope = a;
                console.log(ope);
                if (liste.length>1){
                    if( ope==="+"){
                    let result= liste[0] +liste[1];
                    console.log(result);
                    }
                    else if(ope ==="-"){
                        let result = liste[0]-liste[1];
                        console.log(result);

                    }
                    else if(ope ==="/"){
                        let result=liste[0]/liste[1];
                        console.log(result);

                    }
                    else if (ope==="*"){
                        let result=liste[0]*liste[1];
                        console.log(result);

                    }
                    else{
                        let result = (liste[0]*liste[1])/100;
                        console.log(result);

                    }
                }   
            }

            
        
        })

}
console.log(liste);