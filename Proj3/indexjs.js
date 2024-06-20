const cl=document.querySelector('#clock')
setInterval(()=>{
    let dv=new Date()
    cl.innerHTML=dv.toLocaleTimeString()
    return
},1000)