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
          .replace("{ID}",listePaintGap[no_paintgap].id)
          .replace("{NOM}",listePaintGap[no_paintgap].nom);
    }
    html_listePaintGap.html(htmlEnConstruction);
  }
}
ListePaintGapVue.html = $("#page-liste-paintgap").html();
ListePaintGapVue.html_item = $("#item-liste-paintgap").html();