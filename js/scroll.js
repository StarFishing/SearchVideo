var wrapper=document.getElementsByClassName("wrapper")[0];
var menuScroll;
window.onload=function(){
    var menuScroll = new BScroll(wrapper, {click:true});
};
window.onresize=function(){
    if(menuScroll)
    menuScroll.refresh();
}