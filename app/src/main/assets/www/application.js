var applicationPaintGap = {
    lancer: function() {
        this.PaintGapDAO = new PaintGapDAO();


        $(window).on('hashchange', $.proxy(this.naviguer, this));

        this.naviguer();
    },
    naviguer: function() {
        //alert("Naviguer selon : "+window.location.hash);
        var ancre = window.location.hash;
        if (!ancre) {
            this.PaintGapDAO.listerLesPaintGap($.proxy(this.afficherTousLesPaintGap, this));
        } else if (ancre.match(/^#ajouter-paintgap/)) {
            this.ajouterPaintGapVue = new ajouterPaintGapVue();
            this.ajouterPaintGapVue.afficher($.proxy(this.sauvegarderNouveauPaintGap, this));
        } else if (ancre.match(/^#modifier-paintgap\/([0-9]+)/)) {
            var trouvailles = ancre.match(/^#modifier-paintgap\/([0-9]+)/);
            var id_paintgap = trouvailles[1];
            var paintgap = this.PaintGapDAO.trouverPaintGapParId(id_paintgap);
            this.ModifierPaintGapVue = new ModifierPaintGapVue(paintgap);
            this.ModifierPaintGapVue.afficher($.proxy(this.modifierPaintGap, this));
        } else if (ancre.match(/^#supprimer-paintgap\/([0-9]+)/)) {

            var trouvailles = ancre.match(/^#supprimer-paintgap\/([0-9]+)/);
            var id_paintgap = trouvailles[1];
            var paintgap = this.PaintGapDAO.trouverPaintGapParId(id_paintgap);
            this.SupprimerPaintGapVue = new SupprimerPaintGapVue(paintgap);
            this.SupprimerPaintGapVue.afficher($.proxy(this.supprimerPaintGap, this));
        }else {
            var trouvailles = ancre.match(/^#paintgap\/([0-9]+)/);
            var id_paintgap = trouvailles[1];
            var paintgap = this.PaintGapDAO.trouverPaintGapParId(id_paintgap);
            this.PaintGapVue = new PaintGapVue(paintgap);
            this.PaintGapVue.afficher();
        }
    },

    sauvegarderNouveauPaintGap: function(paintgap) {
        this.PaintGapDAO.ajouterPaintGap(paintgap);
    },

    supprimerPaintGap: function(paintgap) {
        this.PaintGapDAO.supprimerPaintGap(paintgap);
    },

    modifierPaintGap: function(paintgap) {
        this.PaintGapDAO.modifierPaintGap(paintgap);
    },


    afficherTousLesPaintGap: function(listePaintGap) {
        this.ListePaintGapVue = new ListePaintGapVue(listePaintGap);
        this.ListePaintGapVue.afficher();
    }

};

applicationPaintGap.lancer();