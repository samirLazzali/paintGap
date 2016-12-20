var PaintGap = function(id, nom, description,uri)
{
  this.construire = function()
  {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.uri = uri;
  }
  this.construire();
}