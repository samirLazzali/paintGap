var ajouterPaintGapVue = function() {

    this.afficher = function(actionAjouterPaintGap) {
        $("body").html(ajouterPaintGapVue.html);

        $("#formulaireAjouter").on("submit", $.proxy(this.ajouterPaintGap, this));

        this.actionAjouterPaintGap = actionAjouterPaintGap;

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


    this.ajouterPaintGap = function() {
        var nom = $("#paintgapNom").val();
        var description = $("#paintgapDescription").val();
        var paintgap = new PaintGap(id = null, nom, description , leUri());
        this.actionAjouterPaintGap(paintgap);

        window.location.hash = "";
        event.preventDefault();
    }

}
ajouterPaintGapVue.html = $("#pageAjouterPaintgap").html();