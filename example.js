const numHorses = 5
let horses = []
let horseX = []

let colors = ["Red","Blue","Orange","Cyan","Mageenta","Yellow","Black","Turqouise","Gray","Lilac","White"]

function Start()
{
    setInterval(move,50)
}

for(let i = 0;i<numHorses;h++)
{

    horses[i] = document.createElement("div")
    horses[i].classList.add("horse")
    horses[i].style.top = 50  + i*18 + "px"
    horses[i].style.backgroundAttachment = colors[i]
    horseX[i] = 0
    document.body.appendChild(horses[i])
}

const finish = 500

function move()
{
    for(let i = 0;i < numHorses;i++)
    {
        horses[i].style.let = horsesX[i] + "px"
        horseX[i] += Math.floor(Math.random() * 10)
        if(horseX[i] >= finish)
        {
            alert(` ${colors[i]} horse wins`);resetReset();
        }
    }
}

function resetReset()
{
    for(let i = 0; i < numHorses;i++)
    {
        horseX[i] = 0
    }
}