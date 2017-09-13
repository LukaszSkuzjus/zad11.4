function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.xxx = 0;
	this.somethingNew= true - false; // = 1 prawda zawsze zwycięża :)
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " weight:  " +this.weight);
		if(this.isPhone){
			console.log("And Yes... I AM THE PHONE STUPID");
		}
};

Phone.prototype.addTheWeightField = function(weight) {
		this.weight = weight;
};


Phone.prototype.stupidCalculation=function(){
	console.log("difference between price and weight: ", this.price - this.weight);
};

Phone.prototype.sandwich = function(to,tez,jest,głupie) {
		var self = this;
		var selff = this; // self nie musi sie nazywac self bo to nie jest slowa kluczowe - bo var 
		function fun1(){self.xxx+=1;} // zeby przecwiczyc self z nastepnego zadania 
		function fun2(){selff.xxx+=2;}
		function fun3(){self.xxx+=3;}// musi byc self bo nowe funkcje wprowadzaja nowy scope 

		function metaFun(){
			fun1();
			fun2(); // zabawa z funkcjami 
			fun3(); 
		}
		metaFun();
		console.log(this.xxx); // ta funkcja i inne wbudowane zachowuja kontekst 
};

var literal1 = "Samsung";//primitywy przypisujemy do literalow 
var literal2 = "black";
//var literal2 = new String("black"); nie lubimy wpudowanych konstruktorow 
var literal3 = 3000;
//var literal3 = new Number(3000); // To po co je ktos tworzyl 
var literal4 = true;
//var literal4 = new Boolean(true); moze kiedys sie dowiem 
Phone.prototype.isPhone=literal4;

var SamsungGalaxyS6 = new Phone(literal1,literal3,literal2);
SamsungGalaxyS6.addTheWeightField(200);
var iPhone6s = new Phone("Apple",2000,"silver");
iPhone6s.addTheWeightField(300);
var OnePlusOne = new Phone("OnePlus",1000,"white");

SamsungGalaxyS6.sandwich();
SamsungGalaxyS6.printInfo();
SamsungGalaxyS6.stupidCalculation();
iPhone6s.printInfo();
OnePlusOne.printInfo();