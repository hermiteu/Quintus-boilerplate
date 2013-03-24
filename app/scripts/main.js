//iets anders dan requirejs gebruiken!
//gewoon in HTML:
// boot.js, components, sprites.js, scenes.js, main.js


// stage = stadium
// scene = tafereel

// stages zijn onafhankelijk

Q.load("sprites.png, sprites.json, level.json, tiles.png", (function() {
  Q.sheet("tiles", "tiles.png", {
    tilew: 32,
    tileh: 32
  });
  Q.compileSheets("sprites.png", "sprites.json");
  document.getElementById("loading").style.display = "none";
  return Q.stageScene("level1");
}), {
  progressCallback: function(loaded, total) {
    var element;
    element = document.getElementById("loading_progress");
    return element.style.width = Math.floor(loaded / total * 100) + "%";
  }
});

document.getElementById('quintus').focus();
