window.Q = Quintus({
  imagePath: "images/game/",
  audioPath: "audio/",
  dataPath: "data/"
})
.include("Sprites, Scenes, Input, 2D, Touch, UI, Anim");

Q.setup({
  //maximize: "touch"
  maximize: false
});

Q.touch(Q.SPRITE_ALL);

Q.controls();
Q.debug = false;
Q.debugFill = false;