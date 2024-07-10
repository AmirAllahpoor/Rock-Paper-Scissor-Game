

let $ = document
let myscore = $.getElementById('MyScore')
let OpponentsScore = $.getElementById('HarifScore')
let imgstart = $.querySelectorAll('.game-row2 img')
let imgleft = $.getElementById('img-left')
let imgright = $.getElementById('img-right')
let loader = $.querySelector('.container')
let overlay = $.querySelector('.overlay')
let myscorenumber = 0
let OpponentsScoreNumber = 0

const RandomIMG = [
    "/img/rockright.png" ,
    "/img/scirossright.png" ,
    "/img/paperright.png" ,
]

function LoaderOn() {
   overlay.classList.add('active')
   loader.classList.add('active')
}
function LoaderOff(){
    overlay.classList.remove('active')
    loader.classList.remove('active')
}

function NotifGhaboli() {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Good job! You Can Win!",
        showConfirmButton: false,
        timer: 1500
      });
      overlay.classList.add('active')

      setTimeout(() => {
        overlay.classList.remove('active')
      }, 1500);
}

function NotifRadShodan(){
    Swal.fire({
        position: "center",
        icon: "error",
        title: "No Problem. Try Again!",
        showConfirmButton: false,
        timer: 1500
      });
      overlay.classList.add('active')

      setTimeout(() => {
        overlay.classList.remove('active')
      }, 1500);
}

function Tabrik(){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Bravo!",
        text: "You Could Win And Defeat Your Opponent",
        showConfirmButton: false,
        timer: 1500
      });
      overlay.classList.add('active')

      setTimeout(() => {
          document.location.reload()
        overlay.classList.remove('active')
      }, 1500);
}
function Tasliat(){
      Swal.fire({
        position: "center",
        icon: "error",
        title: "No Problem.",
        text: "You Did Your Best, Play Again To Win",
        showConfirmButton: false,
        timer: 1500
      });
      overlay.classList.add('active')

      setTimeout(() => {
          document.location.reload()
        overlay.classList.remove('active')
      }, 1500);
}


imgstart.forEach(startbtn => {
    startbtn.addEventListener('click' , (event) => {
 
        LoaderOn()
        
        setTimeout(LoaderOff , 1500)

       setTimeout(() => {
        
        imgleft.src = event.target.src 
        imgleft.style.opacity = 1;

        let cnt 
        cnt = Math.floor(Math.random() * 3);
        imgright.src = RandomIMG[cnt]
        imgright.style.opacity = 1;

        if(
            imgleft.src.includes('rock') & imgright.src.includes('sciross') ||
             imgleft.src.includes('paper') & imgright.src.includes('rock') ||
              imgleft.src.includes('sciross') & imgright.src.includes('paper') 
              ){

                NotifGhaboli()
            
            myscorenumber += 5
            OpponentsScoreNumber +=0

        } else if(
            imgright.src.includes('rock') & imgleft.src.includes('sciross') ||
             imgright.src.includes('paper') & imgleft.src.includes('rock') ||
              imgright.src.includes('sciross') & imgleft.src.includes('paper') 
        ) {

           NotifRadShodan()

            myscorenumber += 0
            OpponentsScoreNumber +=5

        } else {

            NotifRadShodan()

            myscorenumber += 0
            OpponentsScoreNumber +=0

        }

        if(myscorenumber === 50 || OpponentsScoreNumber === 50 ){
            if(myscorenumber > OpponentsScoreNumber){
                Tabrik()
            }
            else{  
                Tasliat()
            }
        }
       
        myscore.textContent = `My Score : ${myscorenumber}`
        OpponentsScore.textContent = `Opponent's Score : ${OpponentsScoreNumber}`

       }, 1500) 

      

    })
})


