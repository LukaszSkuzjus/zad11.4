function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
		if(this.isPhone){
			console.log("And Yes... I AM THE PHONE STUPID");
		}
};
var literal1 = "Samsung";//primitywy przypisujemy do literalow 
var literal2 = new String("black");
var literal3 = new Number(3000);
var literal4 = new Boolean(true);
Phone.prototype.isPhone=literal4;

var SamsungGalaxyS6 = new Phone(literal1,literal3,literal2);

var iPhone6s = new Phone("Apple",2000,"silver");

var OnePlusOne = new Phone("OnePlus",1000,"white");

SamsungGalaxyS6.printInfo();
iPhone6s.printInfo();
OnePlusOne.printInfo();