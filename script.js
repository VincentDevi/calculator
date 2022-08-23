
// global variables
const fontList =["Alegreya Sans SC', sans-serif","'Bad Script', cursive", "'Bebas Neue', cursive", "'Chakra Petch', sans-serif","'Mouse Memoirs', sans-serif", "'Roboto', sans-serif", "'Square Peg', cursive","'Uchen', serif"];
// list of all the font that will be displayed later
const listNum = ['0','1','2','3','4','5','6','7','8','9','/','*','-','+','(',')','/','Shift','Backspace','=','Enter','%']; // list of all the button that can be pressed

// const that take element from the DOM
const buttonList = document.querySelectorAll('button');
const screen = document.querySelector('span');
const screenResult = document.querySelector('.calculator__screen__result')


 // Variables declaration
    // string
let para =""; // calcul that will be displayed on  the screen
let result=''; // calcul that will be done behind the scene


// create a random number 
const randomNum=(num) =>{
    return Math.floor(Math.random()*num);
}

const backColor=() =>{
    const green = randomNum(256);
    const bleu = randomNum(256);
    const red = randomNum(256);
    const color = "rgb("+ green+ ", "+bleu+","+red+" )";
    return color;
}

function computeResult(str){
    return Function('return ' + str)()
  }
  

// functions


  // functions to style a button
const setSTyle = (element,font) =>{
    element.style.fontFamily =font;
    element.style.color = backColor();
    element.style.backgroundColor = backColor();
    element.style.order = randomNum(21);
}
const setContent = (element,content) =>{
    element.textContent = content;
}

const setPercentage = (num) =>{
    const result = '('+num+'/100'+')'+'*';
    return result;
}
const setConcat = (str,toBeAdded) =>{
    return str+toBeAdded;
}




// event on all buttons

for (const aButton of buttonList) {
    aButton.addEventListener('click', event =>{
        let buttonValue = event.target.getAttribute('data__value');

        for (const i of buttonList) {
            let index =randomNum(fontList.length);
            setSTyle(i,fontList[index]);   
        }
        if(buttonValue==="="){
            result=computeResult(result)
            para=result;
            
        }
        else if(buttonValue==="%"){
            result= setPercentage(result)
            para = para + '%';
        }
        else if(buttonValue==="del"){
            result= '';
            para ='';
        }
        else{
            result= setConcat(result,buttonValue);
            para= setConcat(para,buttonValue);
        }
        setContent(screen,para);
    })
}


document.body.addEventListener('keyup',e =>{
    let valuePressed = e.key;


    let check = listNum.includes(valuePressed);
    if(check){
        if(valuePressed==="=" || valuePressed==='Enter'){
            result=computeResult(result)
            para=result;
            
        }
        else if(valuePressed==="%"){
            result= setPercentage(result)
            para = para + '%';
        }
        else if(valuePressed==="Backspace"){
            result= '';
            para ='';
        }
        else if (valuePressed==='Shift'){

        }
        else{
            result= setConcat(result,valuePressed);
            para= setConcat(para,valuePressed);
        }
        setContent(screen,para);
    }
    else{
        alert('please press a number or an operation');
    }   
})

  


  