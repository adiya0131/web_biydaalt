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