console.log("Welcome To Tic Tac Toe");
let music = new Audio("musicG.mp3");
let winmusic = new Audio("winMusic.mp3");
let audioTurn = new Audio("bip.wav");
let gameover = new Audio("");
let turn = "X";
let isgameover = false;


//function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}
//function to check win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            music.pause();
            winmusic.play();
            document.querySelector('.imbox').getElementsByTagName('img')[0].style.width = "300px";
            document.querySelector('.imbox').getElementsByTagName('img')[0].style.height = "300px";
        }
    })
}
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkwin()
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText = "Turn for " +turn;
                if (typeof music. loop == 'boolean')
                    {
                        music. loop = true;
                    }
                    music.play();        
            }
        }
    })
})

//Add onclick listener to reset buttun
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for " +turn;
    document.querySelector('.imbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.imbox').getElementsByTagName('img')[0].style.height = "0px";
    winmusic.pause();
    music.play();
})