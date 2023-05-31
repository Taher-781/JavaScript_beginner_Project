const messageInput = document.getElementById("message-input")

messageInput.addEventListener("keydown",function(Event){
    if(Event.key=="Enter"){
        getmessage();
    }
})

function getmessage(){
    document.getElementById("message-output").innerHTML = messageInput.value;
    messageInput.value="";
}