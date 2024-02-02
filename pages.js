 class Pages {
  constructor() {
    
  }

  getPage(){

    database.ref("page").on("value",(data)=>{
      gameState = data.val();
      console.log(gameState);
    })

  }

  update(count){

    database.ref("/").update({
      page : count
    })

  }
}
