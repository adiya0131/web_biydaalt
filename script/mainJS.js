
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
function validate(){
    var name=document.getElementById("nameup").value;
    var pass=document.getElementById("passup").value;
    var age=document.getElementById("ageup").value;
    var gender=document.getElementById("genderup").value;

    var ok=true;
    var pattern= /[^A-Za-z]/;
    if(name.match(pattern)!=null ||  name=="" ){
        document.getElementById("errorname").innerHTML="error";
        ok=false;
    }
        else{
        document.getElementById("errorname").innerHTML="";
    }
    pattern= /[^0-9]/;
    
    if(pass.match(pattern)!=null || pass==""  || pass.length!=6){
        document.getElementById("errorpass").innerHTML="error";
        ok=false;
    }
        else{
        document.getElementById("errorpass").innerHTML="";
    }
    if(gender!="man" && gender!='woman'){
        document.getElementById("errorgender").innerHTML="error";
        ok=false;
    }
        else{
        document.getElementById("errorgender").innerHTML="";
    }
    pattern= /[^0-9]/;
    if(age.match(pattern)!=null || age==""  || parseInt(age)<16 || parseInt(age)>80){
        document.getElementById("errorage").innerHTML="error";
        ok=false;
    }
        else{
        document.getElementById("errorage").innerHTML="";
    }
    if(!ok) return false;
}
function SigningIn(){
    var isrem=document.getElementById("rememberme");
    if(isrem.checked== true){
        if (typeof(Storage) !== "undefined") {
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
    localStorage.setItem("Name", document.getElementById("uname").value);
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
    xhttp.open("GET", "data/VideosByType.json",true);
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
    xhttp.open("GET", "data/DeadlineRequests.json",true);
    xhttp.send();
}
function GetUserHistory(){
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
    xhttp.open("GET", "data/DeadlineRequests.json",true);
    xhttp.send();
    // const xhttp = new XMLHttpRequest();
    // var data, users;
    // var html="";
    // xhttp.onreadystatechange = function() {
    // if(this.readyState==4){
    //     users=JSON.parse(this.responseText);
    //     for(var i=0;i<users.length;i++){
            
    //         if(users[i].name==localStorage.getItem("Name")){
    //             data=users[i].trasactions;
    //             i=users.length;
    //         }
    //     }
    //     alert(data);
    //     for(var i=0;i<data.length;i++){
    //         html+=`<div class="guilgee">
    //         <label>id</label>
    //         <p>`;
    //         html+=data[i].id;
    //         html+=`</p>
    //         <label>ognoo</label>
    //         <p>`;
    //         html+=data[i].date;
    //         html+=`</p>
    //         <label>uniin dun</label>
    //         <p>`;
    //         html+=data[i].amount;
    //         html+=`</p>
    //         </div>
    //         `;
    //     }
    //     document.getElementById("Guilgeehistory").innerHTML=html;
    // }
    // }
    // xhttp.open("GET", "data/Userlist.json",true);
    // xhttp.send();
}
 
function Initial(){
    document.getElementById("ProfileName").innerText=localStorage.getItem("Name");
}
function here(){
            var name=document.getElementById("name").value;
            var id=document.getElementById("id").value;
            var poster=document.getElementById("poster").value;
            var director=document.getElementById("director").value;
            var rating=document.getElementById("rating").value;

            var pattern= /[^A-Za-z]/;
            if(name.match(pattern)!=null ||  name==null ){
                document.getElementById("errorname").innerHTML="error";
            }
                else{
                document.getElementById("errorname").innerHTML="";
            }
            var pattern= /[^0-9]/;
            
            if(id.match(pattern)!=null || id==null  || id.length!=8){
                document.getElementById("errorid").innerHTML="error";
            }
                else{
                document.getElementById("errorid").innerHTML="";
            }
            var pattern= /[^A-Za-z]/;
            if(poster.match(pattern)!=null || poster==null ){
                document.getElementById("errorposter").innerHTML="error";
            }
                else{
                document.getElementById("errorposter").innerHTML="";
            }
            var pattern= /[^0-5]/;
            if(rating.match(pattern)!=null || rating==null  || rating.length!=1){
                document.getElementById("errorrating").innerHTML="error";
            }
                else{
                document.getElementById("errorrating").innerHTML="";
            }
            var pattern= /[^A-Za-z]/;
            if(director.match(pattern)!=null || director==null ){
                document.getElementById("errordirector").innerHTML="error";
            }
                else{
                document.getElementById("errordirector").innerHTML="";
            }
            return false;
        }
function GoAdmin(name){
    const xhttp = new XMLHttpRequest();
    var path=name+'.html'
    xhttp.onreadystatechange = function() {
    if(this.readyState==4){
        document.getElementById("maincontenthaha").innerHTML=xhttp.responseText;
        document.getElementById("Requests").style.backgroundColor=  "RoyalBlue";
        document.getElementById("Media").style.backgroundColor=  "RoyalBlue";
        document.getElementById("Order").style.backgroundColor=  "RoyalBlue";
        document.getElementById("Users").style.backgroundColor=  "RoyalBlue";
        document.getElementById(name).style.backgroundColor= "green";
    }
    }
    xhttp.open("GET", path ,true);
    xhttp.send();
}