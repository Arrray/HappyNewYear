/**
 * Created by Array on 16/2/23.
 */
window.onload = function(){
    //获取元素
    var page1 = doctment.getElementById("page1");
    var page2 = doctment.getElementById("page2");
    var page3 = doctment.getElementById("page3");

    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];

    //当音乐播放完停止时,自动停止光盘旋转效果
    audio.addEventListener("ended",function(event){
        music.setAttribute("class","");
        //music.style.animationPlayState = "paused";
        //music.style.webkitAnimationPlayState = "paused";
    }, false);

    //点击音乐图标,控制音乐播放效果
    //music.onclick = function(){
    //    if (audio.paused){
    //        audio.play();
    //        this.setAttribute("class","play");
    //        //this.style.animationPlayState = "running";
    //        //this.style.webkitAnimationPlayState = "running";
    //    }else{
    //        audio.pause();
    //        this.setAttribute("class","");
    //        //this.style.animationPlayState = "paused";
    //        //this.style.webkitAnimationPlayState = "paused";
    //    }
    //};

    music.addEventListener("touchstart",function(event){
        if (audio.paused){
                    audio.play();
                    this.setAttribute("class","play");
                    //this.style.animationPlayState = "running";
                    //this.style.webkitAnimationPlayState = "running";
                }else{
                    audio.pause();
                    this.setAttribute("class","");
                    //this.style.animationPlayState = "paused";
                    //this.style.webkitAnimationPlayState = "paused";
                }
    }, false);

    //点击屏幕,开启好运2016
    page1.addEventListener("touchstart", function(event){
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3style.top      = "100%";

        setTimeout(function(){
            page2.setAttribute("class","page fadeOut");
            page3.setAttribute("class","page fadeIn");
        },5500);
    },false);
};