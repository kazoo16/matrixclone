$(function() {
    var imgArr = [
        'img/add186.png',
        'img/forbidden15.png'
    ];
    var i = 0;
    $(document).ready(function() {
        $.slidebars();
        $('#aaa').attr('src', 'img/add186.png');
        
    });    
    $("#frame1").resizable();
    $("#frame2").resizable();
    $("#frame3").resizable();
    $("#frame4").resizable();
    
    $('#aaa').click(function() {
        i++;
        $('#aaa').attr('src', imgArr[i % 2]);

    });
    
    $(".jquery-ui-sortable").sortable({
        connectWith: ".jquery-ui-sortable"
    });
    $(".jquery-ui-sortable").disableSelection();
    $(".jquery-ui-sortable").delegate('input,textarea','click',function(ev){
    	ev.target.focus();
    });
});
