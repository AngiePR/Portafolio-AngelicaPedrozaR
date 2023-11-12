let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Comenzando en el desarrollo web y estudiando ingeniería geofísica.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
