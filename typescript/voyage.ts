class Sejour {
	
	constructor(private _nom:string, private _prix:number){
		
	}
	
	public getPrix(){
		return this._prix
	}
	
	public getNom(){
		return this._nom;
	}
	
	toString():string {
		return `${this._nom} - ${this._prix}$`
	}
}

class SejourService{
	
	_sejours:Array<Sejour>
	
	constructor(){
		this._sejours = [new Sejour('nantes',12),new Sejour('paris',20),new Sejour('tokyo',40)]
	}
	
	public recherche(nom:string):Array<Sejour>{
			return this._sejours.filter(s => s.getNom()==nom);
	}
}

let s = new SejourService()

s.recherche('paris').forEach(sejour=>
	console.log(sejour.toString())
)