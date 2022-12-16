
const track = document.getElementById("productslist");

function vidMouseOver(vid){
    vid.play();
}
function vidMouseOut(vid){
    vid.pause();
    vid.load();
}
function GoTo(str){
    window.location.href = str;
}
function exitpop(pop){
    pop.style.display="none";
}
function SigningIn(){
    var isrem=document.getElementById("rememberme");
    if(isrem.checked== true){
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("Name", document.getElementById("uname").value);
            localStorage.setItem("RememberedName", document.getElementById("uname").value);
            localStorage.setItem("RememberedPass", document.getElementById("psw").value);
          } else {
            alert("Sorry, your browser does not support Web Storage...");
          }
    }
      else{
        localStorage.setItem("RememberedName", null);
        localStorage.setItem("RememberedPass", null);
      }
    return true; // if uname and password is right
}
function Remember(){
    if(typeof(Storage) !== "undefined" && document.getElementById("uname").value!=null){
        document.getElementById("uname").value = localStorage.getItem("RememberedName");
        document.getElementById("psw").value = localStorage.getItem("RememberedPass");
        document.getElementById("rememberme").checked = checked;
    }
    
}
function LoadVideos(type){
    const xhttp = new XMLHttpRequest();
    var data;
    var choosen=["Top", "Genre"];
    
    var html;
    xhttp.onreadystatechange = function() {
    if(this.readyState==4){
        data=JSON.parse(this.responseText);
        
        
        for(var i=0;i<data.Genre.length;i++){
            if(1){ //checking if type or set of videos are compatibable with users search
                html+='<section id="horizontalscroll"><label>';
                html+=data.Genre[i].name;
                html+="</label>";
                
                for(var j=0;j<data.Genre[i].products.length;j++){
                   
                    if(1){ //checking if video is compatibable with users search
                        html+=`<div class="minivideo"><button onclick="GoTo('VideoInfo.html')"><video onmouseover="vidMouseOver(this)" onmouseout="vidMouseOut(this)" muted poster="`
                        html+=data.Genre[i].products[j].Poster   ;
                        html+=`"><source src=";`;
                        html+=data.Genre[i].products[j].VideoPath;
                        html+=` type="video/mp4">
                        Your browser does not support the video tag.
                        </video>
                        <label >`;
                        html+=data.Genre[i].products[j].Name;
                        html+='</label></button></div>';    
                    }
                }
                html+="</section>";
                
            }
        }
        for(var i=0;i<data.Genre.length;i++){
            if(1){ //checking if type or set of videos are compatibable with users search
                html+='<section id="horizontalscroll"><label>';
                html+=data.Genre[i].name;
                html+="</label>";
                
                for(var j=0;j<data.Genre[i].products.length;j++){
                   
                    if(1){ //checking if video is compatibable with users search
                        html+=`<div class="minivideo"><button onclick="GoTo('VideoInfo.html')"><video onmouseover="vidMouseOver(this)" onmouseout="vidMouseOut(this)" muted poster="`
                        html+=data.Genre[i].products[j].Poster   ;
                        html+=`"><source src=";`;
                        html+=data.Genre[i].products[j].VideoPath;
                        html+=` type="video/mp4">
                        Your browser does not support the video tag.
                        </video>
                        <label >`;
                        html+=data.Genre[i].products[j].Name;
                        html+='</label></button></div>';    
                    }
                }
                html+="</section>";
                
            }
        }
        for(var i=0;i<data.Genre.length;i++){
            if(1){ //checking if type or set of videos are compatibable with users search
                html+='<section id="horizontalscroll"><label>';
                html+=data.Genre[i].name;
                html+="</label>";
                
                for(var j=0;j<data.Genre[i].products.length;j++){
                   
                    if(1){ //checking if video is compatibable with users search
                        html+=`<div class="minivideo"><button onclick="GoTo('VideoInfo.html')"><video onmouseover="vidMouseOver(this)" onmouseout="vidMouseOut(this)" muted poster="`
                        html+=data.Genre[i].products[j].Poster   ;
                        html+=`"><source src=";`;
                        html+=data.Genre[i].products[j].VideoPath;
                        html+=` type="video/mp4">
                        Your browser does not support the video tag.
                        </video>
                        <label >`;
                        html+=data.Genre[i].products[j].Name;
                        html+='</label></button></div>';    
                    }
                }
                html+="</section>";
                
            }
        }
        document.getElementById("productslist").innerHTML=html;
    }
    }
    xhttp.open("GET", "VideosByType.json",true);
    xhttp.send();
}

// window.onmousemove = e =>{
//     if(track.dataset.mouseDownAt=== "0") return;
//     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
//         maxDelta = window.innerHeight/2;
//     const percentage = (mouseDelta/maxDelta) *-100;

//     track.style.transform = `translate(${percentage}%, -50%)`;
// }

// window.onmousedown = e =>{
//     track.dataset.mouseDownAt = e.clientX;
// }
function GetRequests(){
    const xhttp = new XMLHttpRequest();
    var data;
    var html="";
    xhttp.onreadystatechange = function() {
    if(this.readyState==4){
        data=JSON.parse(this.responseText);
        
        for(var i=0;i<data.length;i++){
            html+=`<div class="guilgee">
            <label>id</label>
            <p>`;
            html+=data[i].id;
            html+=`</p>
            <label>ognoo</label>
            <p>`;
            html+=data[i].date;
            html+=`</p>
            <label>uniin dun</label>
            <p>`;
            html+=data[i].amount;
            html+=`</p>
            </div>
            `;
        }
        document.getElementById("Guilgeehistory").innerHTML=html;
    }
    }
    xhttp.open("GET", "DeadlineRequests.json",true);
    xhttp.send();
}
