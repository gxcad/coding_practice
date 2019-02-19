function meeting(listOfNames) {
  let names = listOfNames.toUpperCase().split(';');
  let reversedNames = [];
  let finalString = '';

  for (name of names) {
    let lastIndex = name.indexOf(':');
    let lastName = name.slice(lastIndex + 1);
    let firstName = name.slice(0, lastIndex);
    reversedNames.push(lastName + ', ' + firstName);
  }
  reversedNames.sort();
  
  for (name of reversedNames) {
    finalString += '(' + name + ')';
  }
  
  return finalString;
}

console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn")); 
// "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)");))