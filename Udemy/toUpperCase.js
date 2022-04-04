// var name = "tole";
// name.toUpperCase()
// name = name.toUpperCase();


// var name = prompt("what is your name");
// var uppercase = alert(name.toUpperCase())


//challenge syntax hard code

   function titleCase(string) {
      var sentence = string.toLowerCase().split(" ");
      for(var i = 0; i< sentence.length; i++){
         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
   document.write(sentence.join(" "));
   return sentence;

   }
   titleCase(prompt("what is your name")).join(' ');


//challenge syntax simple code

// var name = prompt("what is your name");
// var title_name = name[0].toUpperCase() + name.slice(1);
// alert(title_name);
