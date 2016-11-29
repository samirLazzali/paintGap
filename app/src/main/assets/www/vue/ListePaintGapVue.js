var PaintGapVue = function(paintgap)
{
  this.afficher = function()
  {
    var htmlEnConstruction = 
      PaintGapVue.html
      .replace("{ID}",paintgap.id)
      .replace("{NOM}",paintgap.nom)
      .replace("{DESCRIPTION}",paintgap.description);
    
    $("body").html(htmlEnConstruction);
  }



}
PaintGapVue.html = $("#page-paintgap").html();

// TODO : revenir à la liste