function resultado(){
  
var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];

for (var i = 0; i < pronoun.length; i++) {
  for (var j = 0; j < adj.length; j++) {
    for (var z = 0; z < noun.length; z++) {

      
      let result = pronoun[i] + adj[j] + noun[z] +".com";
      document.write(result + "</br>");
      }
    }
  }
}


