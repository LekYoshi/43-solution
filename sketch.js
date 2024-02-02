var database;
var form,
  game,
  firend,
  playerCount = 0;
 
var gameState = 0;


function preload() {
  bgimg = loadImage("background.png");
  endimg = loadImage("thankyou.png");
}

function setup() {
 
  canvas = createCanvas(850,470);
  database = firebase.database();

  page = new Pages();
  page.getPage();
  form = new Form();
  friend= new Friends();
  friend.getCount(); 

  
}

function draw() {
background(bgimg)

var countref = database.ref("friendCount")
countref.on("value",(data)=>{
  totalresponse = data.val()
})

view.mousePressed(()=>{
  var get_allinfo = database.ref('friends')
  get_allinfo.on("value",(data)=>{
    allinfo = data.val()
  })
  console.log(allinfo)
})

  if(gameState === 0){
      background(bgimg);
      form.display();
  }
            
  if(gameState === 1){
  clear();   
  background(endimg);
  form.end();
  }
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
 } 