var ListePaintGapVue = function(listePaintGap)
{
  this.afficher = function()
  {
    $("body").html(ListePaintGapVue.html);
    var html_listePaintGap = $("#liste-paintgap");
    var htmlEnConstruction = "";
    
    for(var no_paintgap in listePaintGap)
    {
        htmlEnConstruction += 
          ListePaintGapVue.html_item
          .replace("{NOM}",listePaintGap[no_paintgap].nom)
          .replace("{URI}",listePaintGap[no_paintgap].uri)
          .replace("{ID}",listePaintGap[no_paintgap].id);
    }

    html_listePaintGap.html(htmlEnConstruction);
    $('.container').click(this.afficherDetails);
                $('.topbarjs').click(this.topBar);

  }
  this.topBar = function (){
               var x = document.getElementById("myTopnav");
               if (x.className === "topnav") {
                   x.className += " responsive";
               } else {
                   x.className = "topnav";
               }

        }

  this.afficherDetails = function (){
     $(this).find(".nomImage").toggle('slow');
     $(this).find(".modifierPaintGap").toggle('slow');


  }
}
ListePaintGapVue.html = $("#pageListPaintGap").html();
ListePaintGapVue.html_item = $("#itemListePaintGap").html();