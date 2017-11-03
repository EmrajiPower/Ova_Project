// Contains the story and paths
var story = {
  intro: {
    prompt: 'It is 12am and you are starving. It\'s too late to order delivery. You know what that means.',
    options: [{
      name: 'Fight',
      path: 'choose_weapon'
    }, {
      name: 'Starve',
      path: 'die_starve'
    }]
  },
  choose_weapon: {
    prompt: 'Choose your weapon!',
    options: [{
      name: 'Knife',
      path: 'die_cut'
    }, {
      name: 'Toaster',
      path: 'toast'
    }]
  },
  toast: {
    prompt: 'You toast some bread. What do you do next?',
    options: [{
      name: 'Eat it!',
      path: 'eat'
    }, {
      name: 'Slather on some peanut butter!',
      path: 'peanut_butter'
    }]
  },
  peanut_butter: {
    prompt: 'There is now peanut butter on your bread. Excellent choice. What do you do next?',
    options: [{
      name: 'Eat it!',
      path: 'eat'
    }, {
      name: 'Throw it away',
      path: 'die_starve'
    }]
  },
  eat: {
    prompt: 'It was delicious! You are no longer hungry.',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  },
  die_cut: {
    prompt: 'You accidentally cut yourself and bleed to death.',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  },
  die_starve: {
    prompt: 'You have died of hunger!',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  }
}

/**
 * Chosen option is an object with properties {name, path}
 */
function display_scenario(chosen_option) {
  var option_name = chosen_option.name;
  var option_path = chosen_option.path;
  var scenario = story[option_path];
  
  // Clear the #prompt div and the #options div
  $('#prompt').empty();
  $('#options').empty();
  
  // Create a <p> to display what the user has chosen if option_name is not null and append it to the #prompt <div>
  if (option_name) {
    $('<p>').html('You have chosen <b>' + option_name + '</b>').appendTo('#prompt');
  }
  
  // Append the scenario's prompt
  $('<p>').html(scenario.prompt).appendTo('#prompt');
  
  // Append the options into the #options <div>
  // We want to loop through all the options and create buttons for each one. A regular for-loop would not suffice because adding a button is not asynchronous. We will create an asynchronous loop by using recursion
  function add_option_button(index) {
    if (index === scenario.options.length) {
      // Base case
      return;
    }
    
    var option = scenario.options[index];
    
    // Create a <button> for this option and append it to the #options <div>
    $('<button>')
      .html(option.name)
      .click(function(e) {
        // This is an onclick handler function. It decides what to do after the user has clicked on the button.
      
        // First, prevent any default thing that the button is going to do, since we're specifying our own action for the button
        e.preventDefault();
      
        // We'll want to call display_scenario() with this option
        display_scenario(option);
      })
      .appendTo('#options');
    
    // Add the next option button
    add_option_button(index + 1);
  }
  add_option_button(0);
}

// This function waits until the document is ready
$(document).ready(function() {
  // Start the story
  display_scenario({
    name: null,
    path: 'intro'
  });
});
