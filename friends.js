class Friends {
  constructor() {
   this.name="",
   this.message=" ",
   this.index = 0;

  }
  getCount(){

    database.ref("friendCount").on("value",(data)=>{
      playerCount = data.val();
      console.log(playerCount);
    })

  }

  updateCount(count){

    database.ref("/").update({
      friendCount : count
    })

  }



  addFriends() {
    var friendIndex = "friends/friend"+ this.index;
    console.log(friendIndex);
    database.ref(friendIndex).set({
      name: this.name,
      message: this.message
    });
  }

}
