
var ModifierPaintGapVue = function(paintgap)
{  
  this.afficher = function(actionModifierPaintGap)
  {
    $("body").html(ModifierPaintGapVue.html);
	document.getElementById("paintgapNom").value = paintgap.nom;
	document.getElementById("paintgapDescription").value = paintgap.description;
  document.getElementById("paintGapUri").src = paintgap.uri;

    $("#formulaireModifier").on("submit", $.proxy(this.modifierPaintGap, this));
    this.actionModifierPaintGap = actionModifierPaintGap;
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
  
  this.modifierPaintGap = function()
  {

	var nom = $("#paintgapNom").val();
	var description = $("#paintgapDescription").val();
	var nouveauPaintGap = new PaintGap(paintgap.id,nom,description);
	

    this.actionModifierPaintGap(nouveauPaintGap);

	window.location.hash = "";
	event.preventDefault();	
    
  }
}
ModifierPaintGapVue.html = $("#pageModifierPaintgap").html();

