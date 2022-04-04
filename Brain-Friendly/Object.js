//Obejct oriented #1
function getSecret(file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword == file.password) {
        return file.contents;
    } else {
        return "Invalid password! No secret for you.";
    }
};

function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
};
var superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit.",
};

var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret);


//Obejct oriented #2
var fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  fuel: 0,
  started: false,
  start: function () {
    if (this.fuel == 0) {
      alert("The car is on empty, fill up before starting!");
    } else {
      this.started = true;
    }
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    if (this.started) {
      if (this.fuel > 0) {
        alert(this.make + " " + this.model + " goes zoom zoom!");
        this.fuel = this.fuel - 1;
      } else {
        alert("Uh oh, out of fuel.");
        this.stop();
      }
    } else {
      alert("You need to start the engine first.");
    }
  },
  addFuel: function (amount) {
    this.fuel = this.fuel + amount;
  },
};