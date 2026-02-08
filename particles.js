let canvas=document.getElementById("hearts")
let ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let hearts=[]

for(let i=0;i<50;i++){
hearts.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*8+4,
speed:Math.random()*1+0.5
})
}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

hearts.forEach(h=>{
ctx.fillStyle="pink"
ctx.beginPath()
ctx.arc(h.x,h.y,h.size,0,Math.PI*2)
ctx.fill()

h.y-=h.speed
if(h.y<0) h.y=canvas.height
})

requestAnimationFrame(draw)
}

draw()
