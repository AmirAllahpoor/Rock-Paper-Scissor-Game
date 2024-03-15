let $ = document
let score = $.getElementById('score-text')
let imgstart = $.querySelectorAll('.game-row2 img')
let imgleft = $.getElementById('img-left')
let imgright = $.getElementById('img-right')
let boxgame = $.querySelector('.box-game')
let loader = $.querySelector('.terminal-loader')
let scorenumber = 0

const RandomIMG = [
    "/img/rockright.png" ,
    "/img/scirossright.png" ,
    "/img/paperright.png" ,
    "/img/scirossright.png" ,
    "/img/rockright.png" ,
    "/img/paperright.png" ,
    "/img/rockright.png" ,
    "/img/scirossright.png" ,
    "/img/paperright.png" ,
    "/img/scirossright.png" ,
    "/img/rockright.png" ,
    "/img/rockright.png" ,
    "/img/paperright.png" ,
    "/img/rockright.png" ,
    "/img/scirossright.png" ,
    "/img/scirossright.png" ,
    "/img/paperright.png" ,
    "/img/rockright.png" ,
    "/img/paperright.png" ,
    "/img/scirossright.png" ,
    "/img/paperright.png" ,
]

function LoaderOn() {
   boxgame.classList.add('active')
   loader.classList.add('active')
}
function LoaderOff(){
    boxgame.classList.remove('active')
    loader.classList.remove('active')
}

imgstart.forEach(startbtn => {
    startbtn.addEventListener('click' , (event) => {
 
        LoaderOn()
        
        setTimeout(LoaderOff , 2000)

        imgleft.src = event.target.src 
        imgleft.style.opacity = 1;

        let cnt 
        cnt = Math.floor(Math.random() * 21);
        imgright.src = RandomIMG[cnt]
        imgright.style.opacity = 1;
        

        if(imgleft.src.includes('rock') & imgright.src.includes('sciross')){
            scorenumber += 5
        } else {
            scorenumber += 0
        } 
        if(imgleft.src.includes('paper') & imgright.src.includes('rock')){
            scorenumber += 5
        } else {
            scorenumber += 0
        } 
        if(imgleft.src.includes('sciross') & imgright.src.includes('paper')){
            scorenumber += 5
        } else {
            scorenumber += 0
        } 
       
        score.textContent = `My Score : ${scorenumber}`

    })
})