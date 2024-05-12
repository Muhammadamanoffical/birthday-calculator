let days=document.getElementById("days")
let hours=document.getElementById("hours")
let minutes=document.getElementById("minutes")
let second=document.getElementById("second")
let dd= document.getElementById("dd")
let hh= document.getElementById("hh")
let mm= document.getElementById("mm")
let ss= document.getElementById("ss")
let day_dots= document.querySelector(".day_dot")
let hrs_dots= document.querySelector(".hr_dot")
let min_dots=document.querySelector(".min_dot")
let sec_dots=document.querySelector(".sec_dot")
let enddate= prompt("enter your birthday in the form  month/day/year")
let x =setInterval(function(){
    let  now =new Date(enddate).getTime()
    let countdown =new Date().getTime()
    let distance =now - countdown
    let d=Math.floor(distance/(1000*60*60*24))
    let h=Math.floor((distance % (1000*60*60*24))
/(1000*60*60))
let m=Math.floor((distance % (1000*60*60))
/(1000*60))
let s=Math.floor((distance % (1000*60))
/(1000))

days.innerHTML = d +"<br> <span> Days</span>"
hours.innerHTML = h +"<br> <span> hrs</span>"
minutes.innerHTML = m +"<br> <span>mins</span>"
second.innerHTML = s +"<br> <span>sec</span>"
dd.style.strokeDashoffset =440- (440 * d)/365
hh.style.strokeDashoffset =440- (440 * h)/24
mm.style.strokeDashoffset =440- (440 * m)/60
ss.style.strokeDashoffset =440- (440 * s)/60
day_dots.style.transform ="rotateZ($ {d * 0.986}deg)"
hrs_dots.style.transform ="rotateZ($ {h * 15}deg)"
min_dots.style.transform ="rotateZ($ {m * 6}deg)"
sec_dots.style.transform ="rotateZ($ {s * 0.986}deg)"
if(distance < 0){
    clearInterval(x)
    document.getElementById("time").style.display="none"
    document.querySelector(".newyear").style.display="block"
}

},)