/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "Hassan Zekkouri",
    friends: 12,
    messages: ["I am a self-thaught full-stack developper!", "I am a Junior of course!", 
                "By the end of 2020, I would become a full-stack developper!"],
                
    postMessage: function(message){
        facebookProfile.messages.push(message);
    },
    
    deleteMessage: function(index){
        if(facebookProfile.messages.length > 0){
            facebookProfile.messages.splice(index, 1);
        }else{
            console.log("Exception! there is no item to be deleted");
        }
    },
    
    addFriend: function(){
        facebookProfile.friends += 1;
    },
    
    removeFriend: function(){
        if(facebookProfile.friends > 0){
            facebookProfile.friends -= 1;
        }else{
            console.log("Exception! there is no friend to be removed");
        }
    }
};
