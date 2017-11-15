let favoriteCityId="rome";
console.log(favoriteCityId);
favoriteCityId="paris";
console.log(favoriteCityId);

const citiesId = [ "paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
// citiesId=[]; Assignement to constant variable
citiesId.push("tokyo");
console.log(citiesId);

let getWeather= function (cityId){
    return {city:cityId.toUpperCase(),temperature:20};
}

const weather =getWeather(favoriteCityId);

console.log(weather);

const {city}=weather;
const {temperature}=weather;

console.log(city);
console.log(temperature);

const [parisId,nycId,...othersCitiesId]= citiesId;

console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

class Trip{

    constructor(id, name, imageUrl){
        this.id=id;
        this.name=name;
        this.imageUrl=imageUrl;
    }

    toString(){
        let tmp = 'Trip ['+this.id+','+this.name+','+this.imageUrl+','+this._price+']';
        return tmp;
    }

    get prive(){
        return this._price;
    }

    set price(price){
        this._price=price;
    }

    static getDefaultTrip(){
        return new Trip("rio-de-janeiro","Rio de Janeiro","img/rio-de-janeiro.jpg");
    }
}

parisTrip = new Trip("paris","Paris","img/paris.jpg");
console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());
parisTrip.price=100;
console.log(parisTrip.toString());
const defaultTrip=Trip.getDefaultTrip();
console.log(defaultTrip.toString());

class FreeTrip extends Trip{
    constructor(id, name, imageUrl,price){
        super(id, name, imageUrl);
        this.price=price;
    }

    toString(){
        return super.toString()+this.price;
    }
}

const freeTrip=new FreeTrip("nantes", "Nantes", "img/nanges.jpg", 0);
console.log(freeTrip.toString());

class TripService {
      constructor() {
      // TODO Set of 3 trips
        this.set=new Set(parisTrip,freeTrip,defaultTrip);  

      // new Trip('paris', 'Paris', 'img/paris.jpg')
      // new Trip('nantes', 'Nantes', 'img/nanges.jpg')
      // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
      }
      findByName(tripName) {
        return new Promise(function(resolve,reject){
            setTimeout("delai",2000);
            for (let item of this.set.values())
                if(item.name==tripName)
                    return resolve(item);
            
            return reject("error");
        });
      }
}
    class PriceService {
      constructor() {
        this.map = new Map();
        this.map.set("paris",100);
        this.map.set("rio-de-janeiro",800);
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
      }

      findPriceByTripId(tripId) {
        return new Promise(function(resolve,reject){
            setTimeout("delai",2000);
            for (var clé of this.map.keys()) {
                if(clé==tripId)
                    return resolve(this.map.get(clé));
            }
            return reject("error");

        });
      }
    }
    