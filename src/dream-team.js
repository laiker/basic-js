const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if(!Array.isArray(members)) {
    return false;
  }

  members = members.map(function callback( value) {
    if(typeof value == 'string') {
      return value.trim();
    }
  });

  teamName = [];
  members = members.sort();
  for(i = 0; i < members.length ; i++) {
      if(typeof members[i] == 'string' ) {
        teamName.push(members[i][0].trim().toUpperCase());
      }
  }
  return teamName.sort().join('');
};
