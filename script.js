window.addEventListener("mousemove", function(chahcha){
    document.querySelector("#slidephoto").style.top=`${chahcha.clientY}px`
    document.querySelector("#slidephoto").style.left=`${chahcha.clientX}px`
    document.querySelector("#slidephoto").style.transform =`translate(${-chahcha.clientX*0.20}px, ${-chahcha.clientY*0.45}px)`
});

document.querySelector("#chainn")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "0%"
    document.querySelector("#chainn").style.color = "rgb(177, 177, 177)"
})

document.querySelector("#chainn")
.addEventListener("mouseleave", function(){
    document.querySelector("#chainn").style.color = "initial"
})

document.querySelector("#aty")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "-120%"
    document.querySelector("#aty").style.color = "rgb(177, 177, 177)"
})

document.querySelector("#aty")
.addEventListener("mouseleave", function(){
    document.querySelector("#aty").style.color = "initial"
})

document.querySelector("#mic")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "-240%"
    document.querySelector("#mic").style.color = "rgb(177, 177, 177)"
})

document.querySelector("#mic")
.addEventListener("mouseleave", function(){
    document.querySelector("#mic").style.color = "initial"
})

document.querySelector("#tapso")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephotos").style.marginTop = "-360%"
    document.querySelector("#tapso").style.color = "rgb(177, 177, 177)"
})

document.querySelector("#tapso")
.addEventListener("mouseleave", function(){
    document.querySelector("#tapso").style.color = "initial"
})

document.querySelector("#eff")
.addEventListener("mousemove", function(){
    document.querySelector("#slidephoto").style.display = "initial"
    document.querySelector("#slidephoto").style.opacity = 1
})

document.querySelector("#eff")
.addEventListener("mouseleave", function(){
    document.querySelector("#slidephoto").style.display = "none"
    document.querySelector("#slidephoto").style.opacity = 0
})


document.querySelector("#btnsm")
.addEventListener("mousemove", function(){
    document.querySelector("#btnsm").style.backgroundColor = "blue"
    document.querySelector("#btnsm").style.cursor = "pointer"
    document.querySelector("#btnsm h1").style.color = "white"
})

document.querySelector("#btnsm")
.addEventListener("mouseleave", function(){
    document.querySelector("#btnsm").style.backgroundColor = "initial"
    document.querySelector("#btnsm h1").style.color = "rgb(95, 95, 95)"

})
