var ajouterPaintGapVue = function()
{
  
  this.afficher = function(actionAjouterPaintGap)
  {
    $("body").html(ajouterPaintGapVue.html);
    
    $("#formulaire-ajouter").on("submit", $.proxy(this.ajouterPaintGap, this));
    
    this.actionAjouterPaintGap = actionAjouterPaintGap;
    
  }
  
  this.ajouterPaintGap = function()
  {
			var nom = $("#paintgap-nom").val();
			var description = $("#paintgap-description").val();
      var paintgap = new PaintGap(id=null,nom,description);
      this.actionAjouterPaintGap(paintgap);
      
			window.location.hash = "";
			event.preventDefault();		
    
  }
}
ajouterPaintGapVue.html = $("#page-ajouter-paintgap").html();

