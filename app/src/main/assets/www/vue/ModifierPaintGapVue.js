
var ModifierPaintGapVue = function(paintgap)
{  
  this.afficher = function(actionModifierPaintGap)
  {
    $("body").html(ModifierPaintGapVue.html);
	document.getElementById("paintgap-nom").value = paintgap.nom;
	document.getElementById("paintgap-description").value = paintgap.description;

    $("#formulaire-modifier").on("submit", $.proxy(this.modifierPaintGap, this));
    this.actionModifierPaintGap = actionModifierPaintGap;
    
  }
  
  this.modifierPaintGap = function()
  {

	var nom = $("#paintgap-nom").val();
	var description = $("#paintgap-description").val();
	var nouveauPaintGap = new PaintGap(paintgap.id,nom,description);
	

    this.actionModifierPaintGap(nouveauPaintGap);

	window.location.hash = "";
	event.preventDefault();	
    
  }
}
ModifierPaintGapVue.html = $("#page-modifier-paintgap").html();

