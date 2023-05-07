n=0
function btn_click(){
    n+=1
    document.querySelector('body').classList.toggle('dark-mode')
    if (n%2!=0){
    document.getElementById('display_mode').innerHTML='Lights On?'
    document.querySelector('img').src = 'dani_dark.jpg';

    document.getElementById('sth2').innerHTML = 'The Best Rider'
    
    }
    else{
        document.getElementById('display_mode').innerHTML='Lights Off?' 
        document.querySelector('img').src = 'dani.jpg';  
        document.getElementById('sth2').innerHTML = 'Queen of Adult Film Industry'
    }
}
