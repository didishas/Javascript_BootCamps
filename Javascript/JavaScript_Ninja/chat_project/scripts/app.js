// dom queries
const chatList = document.querySelector('.chat-list');


// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'shaun');

// get chats 
chatroom.getChats((data) => {
    // console.log(data);
    chatUI.render(data);
})
