
let chat = document.querySelector('.chat')
document.querySelector('.person').style.marginLeft = '250px'
document.addEventListener('keypress', keys)

 function keys(e){
   console.log(e)
  if(e.code === 'KeyA'){
  	var a = parseInt(document.querySelector('.person').style.marginLeft)
    document.querySelector('.person').style.marginLeft = `${a-250}px`
    
    
  }
  else if(e.code === 'KeyD'){
  	var a = parseInt(document.querySelector('.person').style.marginLeft)
    var b = parseInt(document.querySelector('canvas').style.marginLeft)
    console.log()
    //document.querySelector('.person').style.marginLeft = `${a+250}px`
    document.querySelector('canvas').style.marginLeft = `${b+=10}px`
    
    desenhar()
  }
  else if(e.code === 'Enter' || e.code === 'NumpadEnter'){
    checkCampoTextChat()
  }
 }

 function checkCampoTextChat(){
	if(document.querySelector('.campo').value != '' ){
    document.querySelector('.chat').innerHTML= `${document.querySelector('.chat').innerHTML}<br>${document.querySelector('.campo').value}`
    document.querySelector('.campo').value = ''
  }
}

function getMessages() {
  shouldScroll = chat.scrollTop + chat.clientHeight === chat.scrollHeight;
  if (!shouldScroll) {
    scrollToBottom();
  }
}

function scrollToBottom() {
  chat.scrollTop = chat.scrollHeight;
}
scrollToBottom();
setInterval(getMessages, 300);

//Animation 

const width = 110;
const height = 132;
const playerFrames = 6;


let canvas 
let ctx 
window.onload = () => {
  canvas = document.createElement('canvas')
  document.body.append(canvas)
  document.querySelector('canvas').style.marginLeft = '1px';  
  ctx = canvas.getContext('2d')

  spritesheet = new Image()
  spritesheet.src = './assets/images/gaming_DinoSprites_walk.png'
  frames = 0 
  playerFrame = 0

  spritesheet.onload = desenhar
  
  
}
function desenhar() {    
  ctx.drawImage(
    spritesheet,
    width * playerFrame, 0,
    width, height,
    0, 0,
    width, height
  )
  
    if(frames % 4 === 0){
      playerFrame = (playerFrame + 1) % playerFrames
    }
    
      frames=+ 4 
}
/*const animate = () => {
  ctx.clearRect(0, 0, width, height)
  ctx.drawImage(
    spritesheet,
    width * playerFrame, 0,
    width, height,
    0, 0,
    width, height
  )
 

  if(frames % 4 === 0){
    playerFrame = (playerFrame + 1) % playerFrames
  }

  frames++
  
  window.requestAnimationFrame(animate)
  


}*/