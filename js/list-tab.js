$(function(){
    $('footer li').click(function(){
        var idx=$(this).index();
       $('section').hide();
        $('section').eq(idx).show();
        
        $('footer li').removeClass('on');
        $(this).addClass('on');
    });
    
    
});