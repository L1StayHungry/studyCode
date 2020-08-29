
for(let i=0;i<10;i++){
    let a

    a=document.createElement('a')

    a.innerHTML=i+'<br>'

    document.body.appendChild(a)

    a.addEventListener('click',function (e){
      e.preventDefault()
      alert(i)  
    })

    
}