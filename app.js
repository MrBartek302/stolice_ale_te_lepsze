var json = []
var kraj1
var przycisk01
var przycisk02
var przycisk03
wybrane = 0
async function getData(){
    const data = await fetch("https://restcountries.com/v2/all")
    json = await data.json()
    console.log(json)
}
//tworzy losowe numery dla wszystkich krajów
function losuj_nr() {
    var max = json.length -1
    return Math.floor(Math.random() * max);
  }
// losuje i wyświetla w konsoli wylosowane kraje
 function losuj_kraje(){

    var miejsce = losuj_miejsce()

    document.getElementById("prawogra").innerHTML = ""
  
     wybrane = 0

    kraj1 = json[losuj_nr()]
    przycisk01 = json[losuj_nr()]
    przycisk02 = json[losuj_nr()]
    przycisk03 = json[losuj_nr()]

    console.log(kraj1)

    //dodajemy kraj czyli div
    const div_kraj1 = document.createElement("div")
    div_kraj1.classList.add("rotate-center")
    div_kraj1.setAttribute("id", "kraj1")
    
   //nazwa kraju
    const nazwa_kraj1 = document.createElement("h1")
    nazwa_kraj1.innerHTML = kraj1.name

    //flaga
     const flaga_kraj1 = document.createElement("img")
     flaga_kraj1.setAttribute("src", kraj1.flag)
    
     //przyciski
    const przycisk0 = document.createElement("button")
    przycisk0.setAttribute("id", "przycisk0" )
    przycisk0.setAttribute("onclick", "dodajpunkty()")
    przycisk0.innerHTML = kraj1.capital
    
    const przycisk1 = document.createElement("button")
    przycisk1.setAttribute("id", "przycisk1" )
    przycisk1.setAttribute("onclick", "odejmijpunkty(1)")
    przycisk1.innerHTML = przycisk01.capital
    
    const przycisk2 = document.createElement("button")
    przycisk2.setAttribute("id", "przycisk2" )
    przycisk2.setAttribute("onclick", "odejmijpunkty(2)")
    przycisk2.innerHTML = przycisk02.capital
    
    const przycisk3 = document.createElement("button")
    przycisk3.setAttribute("id", "przycisk3" )
    przycisk3.setAttribute("onclick", "odejmijpunkty(3)")
    przycisk3.innerHTML = przycisk03.capital

     //kraj1 append
     div_kraj1.appendChild(nazwa_kraj1)
     div_kraj1.appendChild(flaga_kraj1)
     
     //losowe miejsce dla przycisków
     if(miejsce==0){
     div_kraj1.appendChild(przycisk0)
     div_kraj1.appendChild(przycisk1)
     div_kraj1.appendChild(przycisk2)
     div_kraj1.appendChild(przycisk3)
     }
     else if(miejsce==1){
         div_kraj1.appendChild(przycisk3)
         div_kraj1.appendChild(przycisk0)
         div_kraj1.appendChild(przycisk2)
         div_kraj1.appendChild(przycisk1)
     }
     else if(miejsce==2){
         div_kraj1.appendChild(przycisk1)
         div_kraj1.appendChild(przycisk3)
         div_kraj1.appendChild(przycisk0)
         div_kraj1.appendChild(przycisk2)
     }
     else if(miejsce==3){
        div_kraj1.appendChild(przycisk2)
        div_kraj1.appendChild(przycisk1)
        div_kraj1.appendChild(przycisk3)
        div_kraj1.appendChild(przycisk0)
     }
     document.getElementById("prawogra").appendChild(div_kraj1)
     
}

function losuj_miejsce() {
    var max = 3
    return Math.floor(Math.random() * max);
  }
  
var wybrane = 0
var zycia = 2
var podp = 0 
var fodp = 0
var wszystkie = 0
    //tworzę h1 do poprawnych odp
    const podp1 = document.createElement("h1")
    podp1.innerHTML = "Twoje dobre odpowiedzi to: " + "0"
    document.getElementById("dol").appendChild(podp1)

    //tworzę h1 do złych odp
    const fodp1 = document.createElement("h1")
    fodp1.innerHTML = "Twoje złe odpowiedzi to: " + "0"
    document.getElementById("dol").appendChild(fodp1)

    //tworzę h1 do wszystkich odp
    const wszystkie1 = document.createElement("h1")
    wszystkie1.innerHTML = "Twoje wszystkie odpowiedzi to: " + "0"
    document.getElementById("dol").appendChild(wszystkie1)

function dodajpunkty(){
    if(wybrane == 0 ){
                document.getElementById("przycisk0").style.backgroundColor = "green"


                podp++
                podp1.innerHTML = "Twoje dobre odpowiedzi to: " +podp

                wszystkie++
                wszystkie1.innerHTML = "Twoje wszystkie odpowiedzi to: " +wszystkie

                wybrane = 1
    
            }


            }


function odejmijpunkty(id){
    if(zycia>0){
    if(wybrane == 0 ){
    document.getElementById("przycisk"+id).style.backgroundColor = "red"
               zycia--
                
               serca() 
                
                fodp++
                fodp1.innerHTML = "Twoje złe odpowiedzi to: " +fodp

                wszystkie++
                wszystkie1.innerHTML = "Twoje wszystkie odpowiedzi to: " +wszystkie

                wybrane = 1
            }
            }


            else{
                document.getElementById("gra").innerHTML = ""
                const div_p = document.createElement("div_p")
                const ponownie = document.createElement("button")
                ponownie.setAttribute("onclick", "window.location.reload()")
                ponownie.innerHTML= "Zagraj ponownie"
                div_p.innerHTML =  "Koniec gry, wyczerpałeś swoje życia"
                div_p.classList.add("div_p")
                div_p.appendChild(ponownie)
                document.getElementById("gra").appendChild(div_p)
                
            }


            }



function serca(){
   
    if(zycia==2){
        document.getElementById("sercah").innerHTML = "❤️❤️❤️"
    }
    
    else if(zycia==1){
     document.getElementById("sercah").innerHTML = "❤️❤️💔"
    }
    
    else if(zycia==0){
        document.getElementById("sercah").innerHTML = "❤️💔💔"
       }
    
    
}


getData()