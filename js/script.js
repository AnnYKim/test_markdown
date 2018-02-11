$(function(){
    
    
    var $btnToTop = $("a.btn-toTop");
    var $numList = $("div.numList");
    var $numList02 = $(".numList-in-slider");
    var visualNumInterval = null;
    


    function isSmallScreen(){ //윈도우 너비 체크

       if ($(window).width() < 1280 ) {
         $("body").addClass('screen-small');
       }else{
         $("body").removeClass('screen-small');
       }
    }



    function goToTop(){ //하단버튼을 누르면 맨 위로 스크롤업

        $("html,body").stop().animate({
            scrollTop: 0
         },800);

    }
    
    
    
    
    function generateVisualDiv(num01,num02){ //비주얼 이펙트에 숫자 넣을 태그 생성
        
        var html_visual01 = '';
        var html_visual02 = '';
        
        for(var i=0; i<num01; i++){
            html_visual01 += '<div></div>'
        }
        
        for(var i=0; i<num02; i++){
            html_visual02 += '<div></div>'
        }
        
        $numList.html(html_visual01);
        $numList02.html(html_visual02);
    }
    
    
    function generateRandomVisualNum(num){ //비주얼 이펙트에 들어갈 난수 생성
        var visualNum = Math.floor(Math.random()*num);
        if(visualNum>=10){visualNum = ''}; //10 이상은 공란처리
        return visualNum;
    }
    
    
    function insertVisualNum(){

        $numList.children().each(function(){
            $(this).text(generateRandomVisualNum(12));
        });

    }
    
    function startVisualAnimation(){
        visualNumInterval = setInterval(insertVisualNum,300);
        $numList.addClass('on');
    }
    
    
    function stopVisualAnimation(){
        $numList.removeClass("on");
        clearInterval(visualNumInterval);
    }

    
    function VisualAnimation(){ //작은 화면에서는 interval중지
       if($("body").hasClass("screen-small")){
           stopVisualAnimation();
        }else{
           if(!$numList.hasClass("on")){
               startVisualAnimation();
           }
        }
    }
    
    
    
    function init(){
        
        isSmallScreen();
        
        generateVisualDiv(28,14);
        
        VisualAnimation();
        
        $btnToTop.on("click",function(){
            goToTop();
        });
        
    }
    
    
    $(window).on('load',function(){
        
        init();
        
    });
    
    $(window).on('resize',function(){
        isSmallScreen();
        VisualAnimation();
 
    });
    
    

    
    
    
});