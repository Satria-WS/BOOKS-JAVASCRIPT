function housekeeper(name,age,game) {
    this.name = name;
    this.age = age;
    this.hobby = game;
    this.greet = function () {
        return ('Hi' + ' ' + this.name);
    }


};

var housekeep = new housekeeper("tole",23,"titi");

console.log(housekeep.greet());


//challenge

function HouseKeeper(year0Experience , name ,cleaningRepertoire) {
	this.year0Experience = year0Experience;
	this.name = name;
	this.cleaningRepertoire = cleaningRepertoire;
	this.clean = function() {
		// alert("Cleaning Progress")
		return "Cleaning Progress";
	}
}

const house = new HouseKeeper(23,"tole" ,"good");
console.log(house.clean());