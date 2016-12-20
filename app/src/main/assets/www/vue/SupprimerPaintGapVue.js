
var SupprimerPaintGapVue = function(paintgap)
{  
  this.afficher = function(actionSupprimerPaintGap)
  {
    $("body").html(SupprimerPaintGapVue.html);
	

    $("#formulaireSupprimer").on("submit", $.proxy(this.supprimerPaintGap, this));
    this.actionSupprimerPaintGap = actionSupprimerPaintGap;
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
  
  this.supprimerPaintGap = function()
  {

	

    this.actionSupprimerPaintGap(paintgap);

	window.location.hash = "";
	event.preventDefault();	
    
  }
}
SupprimerPaintGapVue.html = $("#pageSupprimerPaintgap").html();

