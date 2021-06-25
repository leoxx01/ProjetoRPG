
let chat = document.querySelector('.chat')
document.querySelector('.person').style.marginLeft = '250px'
document.addEventListener('keypress', keys)

 function keys(e){
   console.log(e)
 	console.log(e.which)
  if(e.code === 'KeyA'){
  	var a = parseInt(document.querySelector('.person').style.marginLeft)
    document.querySelector('.person').style.marginLeft = `${a-250}px`
  }
  else if(e.code === 'KeyD'){
  	var a = parseInt(document.querySelector('.person').style.marginLeft)
    document.querySelector('.person').style.marginLeft = `${a+250}px`
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

