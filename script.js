// POEM: Forests are green, oceans are blue. Keep the earth clean, for me and for you

const obj = {
    color1: "green",
    color2: "blue",
    planet: "Earth",
    adjective: "clean",
    emojis: ["🚂", "🌍", "🛼", "🍩", "🏖", "🎠", "🔮"],
    sentence: function() {
      //maybe some code here 
      this.color2 = "purple";
      const poem = `Forest are <span style="color:darkgreen">${this.color1}</span>,<br> oceans are <span style="color:purple">${this.color2}</span>.<br> Keep the ${this.emojis[1]} <span style="color:blue">${this.adjective}</span>,<br> for me and for you!`
      document.querySelector('#poem').innerHTML = poem;
    }
  };
  
   obj.sentence();
  
  // Task: Changing only the code ABOVE (lines 1-15), complete the poem and render it on the page.
  
  // stretch goal 1️⃣: Render the most suitable emoji from the emojis array in the object somewhere in our poem.
  
  // stretch goal 2️⃣: Without changing the object declaration above, change sea color to purple!
  
  // stretch goal 3️⃣: Without changing the CSS file, style the values added from the object. 