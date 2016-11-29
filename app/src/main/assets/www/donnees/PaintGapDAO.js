//http://www.sqlite.org/lang_expr.html#varparam
var PaintGapDAO = function()
{
  this.listePaintGap = [];
  
	this.initialiser = function()
	{
		var SQL_CREATION = "CREATE TABLE IF NOT EXISTS paintgap(id INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(50),  description TEXT)";
		this.baseDeDonnees = window.openDatabase("ListeDepaintgaps", "1.0", "Liste De paintgaps", 200000);
		
		this.baseDeDonnees.transaction(
			function(operation)
			{
				var SQL_CREATION = "CREATE TABLE IF NOT EXISTS paintgap(id INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(50),  description TEXT)";
        
				operation.executeSql(SQL_CREATION);
			},
			this.reagirErreur,
			this.reagirSucces
		);
	}
  
	this.ajouterPaintGap = function(paintgap)
	{
		this.baseDeDonnees.transaction(
			function(operation)
			{
				//alert("ajouterPaintGap");
				var SQL_AJOUT = "INSERT INTO paintgap (nom, description) VALUES(?,?)";
				var parametres = [paintgap.nom, paintgap.description];
				operation.executeSql(SQL_AJOUT, parametres);
			},
			this.reagirErreur,
			this.reagirSucces
		);
	}	

  this.modifierPaintGap = function(paintgap)
  {
    this.baseDeDonnees.transaction(
      function(operation)
      {
        //alert("ajouterPaintGap");
        var SQL_UPDATE = "UPDATE paintgap SET nom = ?, description = ? where id=?";
        var parametres = [paintgap.nom, paintgap.description,paintgap.id];
        operation.executeSql(SQL_UPDATE, parametres);
      },
      this.reagirErreur,
      this.reagirSucces
    );
  }


  
	this.listerLesPaintGap = function(finalisation)
	{
		this.baseDeDonnees.transaction(
      // operation
      $.proxy(
        function(operation)
        {
          var SQL_SELECTION = "SELECT * FROM paintgap";
          operation.executeSql(SQL_SELECTION, [], 
          $.proxy(
            function(operation, resultat)
            {					
              this.listePaintGap = [];
              for(var position=0; position<resultat.rows.length; position++)
              {
                var listerLesPaintGapnregistrementPaintGap = resultat.rows.item(position);
                var paintgap = 
                  new PaintGap(
                    listerLesPaintGapnregistrementPaintGap.id,
                    listerLesPaintGapnregistrementPaintGap.nom, 
                    listerLesPaintGapnregistrementPaintGap.description);
                this.listePaintGap[this.listePaintGap.length] = paintgap;
                        
              }
            },this));
        },
        this),
				
      // erreur
      this.reagirErreur,
      
      // succes
      $.proxy(
        function(){
          finalisation(this.listePaintGap);
        },
      this)
    );			
	}
  
    
 	this.reagirErreur = function(erreur)
	{
		console.log("ERREUR:SQL:" + erreur.code + ":" + erreur.message);
		alert("ERREUR:SQL:" + erreur.code + ":" + erreur.message);
	}
	
	this.reagirSucces = function()
	{
		console.log("SUCCES:SQL:");
		alert("SUCCES:SQL:");
	}

  this.initialiser();

  
  this.trouverPaintGapParId = function(id_paintgap)
  {
    for(var nopaintgap in this.listePaintGap)
    {
      if(this.listePaintGap[nopaintgap].id == id_paintgap)
      {
        return this.listePaintGap[nopaintgap];
      }
    }
  }; 
}
