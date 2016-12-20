var PaintGapVue = function(paintgap)
{
  this.afficher = function()
  {
    var htmlEnConstruction = 
      PaintGapVue.html
      .replace("{ID}",paintgap.id)
      .replace("{ID}",paintgap.id)
      .replace("{NOM}",paintgap.nom)
      .replace("{DESCRIPTION}",paintgap.description)
      .replace("{URI}",paintgap.uri);

    
    $("body").html(htmlEnConstruction);
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




}
PaintGapVue.html = $("#pagePaintGap").html();

// TODO : revenir à la liste