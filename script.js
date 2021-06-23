
document.querySelector('.person').style.marginLeft = '250px'
document.addEventListener('keypress', teste)

 function teste(e){
 	console.log(e.which)
  if(e.which === 97){
  	var a = parseInt(document.querySelector('.person').style.marginLeft)
    document.querySelector('.person').style.marginLeft = `${a-250}px`
  }
  if(e.which === 100){
  	var a = parseInt(document.querySelector('.person').style.marginLeft)
    document.querySelector('.person').style.marginLeft = `${a+250}px`
  }
 }