// liste des commandes
var commands = {
  about: 'Information sur Clément',
  clear: 'Nettoyer le terminal',
  contact: 'Afficher la liste des informations',
  help: 'Afficher la liste de commande',
  //easter:'',
};

// get the input from the user
function getInput() {
  var input = document.getElementById('console_input').value;
  document.getElementById('console_input').value = '';
  return input.toLowerCase();
}

// append the input to the terminal
function appendToTerminal(input) {
  document.getElementById('terminal').innerHTML +=
    `<span class="terminal_user">> guest@portfolio: </span>` + input + '<br>';
  document.getElementById('consolebody').scrollTop =
    document.getElementById('consolebody').scrollHeight;
}

// welcome message
window.onload = function () {
  appendToTerminal('Bienvenue sur mon portfolio!');
  appendToTerminal("Tape 'help' pour avoir la liste de commande");
};

// get input when user hits enter
document
  .getElementById('console_input')
  .addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      var input = getInput();
      // if input is a command
      if (isCommand(input)) {
        if (input === 'help') input += help();
        if (input === 'clear') {
          clear();
          return;
        }
        if (input === 'about') input += about();
        if (input === 'contact') input += contact();
        if (input === 'easter') input += easter();
      } else if (input === '') input += '';
      else
        input +=
          `<br> '` +
          input +
          "' est pas reconnu comme commande interne ou externe, programme utilisable ou fichier de commandes.";
      appendToTerminal(input);
    }
  });

// check if the input is a command
function isCommand(input) {
  for (var command in commands) if (input === command) return true;
  return false;
}

// if command is help then print the list of commands
function help() {
  var output = '<table>';

  for (var command in commands) {
    output += '<tr>';
    output += '<td>' + command + '</td>';
    output += '<td style="padding-left: 10px">' + commands[command] + '</td>';
    output += '</tr>';
  }

  output += '</table>';

  return output;
}

function contact() {
  var output = '<br>';
  output += 'Contact:<br>';
  output += 'Email: clement.marty6@gmail.com<br>';
  output += 'Numéro: 0672341357';
  return output;
}

function clear() {
  document.getElementById('terminal').innerHTML = '';
}

function about() {
  var output = '<br>';
  output += 'Nom: Marty<br>';
  output += 'Prénom: Clément<br>';
  output += 'Sexe: Homme<br>';
  output += 'En alternance chez Ynov Campus Toulouse et en entreprise chez Agence Tabem';
  return output;
}


function easter() {
  var output = '<br>';
  output += 'Bravo, tu as trouvé un petit ester eggs, tu es un crack !<br>';
  return output;
}
