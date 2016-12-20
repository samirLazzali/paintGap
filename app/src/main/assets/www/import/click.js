function action_clique(){
    alert(1);
    var d = new Date();
    var md_time = d.getTime(); // Milliseconds since 1 Apr 1970

    $('.container').mouseup(function(){
        var long_click = (d.getTime()-md_time)>5000;
        if (long_click){
            alert("longclick");
            //$('container').children('.nomImage').show();
        }else{
            alert("click");
            $('.container').children('.nomImage').hide();
        }
        md_time = 0;
        return false;
    })
}