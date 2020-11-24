const myBoolzApp = new Vue ({
  el:'#root',
  data:{
    userContact: {
      name: 'Simone Pagotto',
      avatar: 'img/avatar_io.jpg',
      lastAccess:''
    },
    contacts: [
      {
        name: 'Marino Lamantino',
        avatar: 'img/avatar_1.jpg',
        lastAccess:'11:27 Lun 23 Nov 2020',
        messageHistory:[
          {
            text:"Ciao come va?",
            date: "01/01/2020 12:34:33",
            state: 'received'
          },
          {
            text:"Bene tu?",
            date:"01/01/2020 12:34:33",
            state: 'sent'
          },
          {
            text:"Bene",
            date:"01/01/2020 12:34:33",
            state: 'received'
          }
        ],
        hover: false
      },
      {
        name: 'Angelo Taggiasca',
        avatar: 'img/avatar_2.jpg',
        lastAccess:'15:45 Lun 23 Nov 2020',
        messageHistory:[],
        hover: false
      },
      {
        name: 'Paolo Lo Squalo',
        avatar: 'img/avatar_3.jpg',
        lastAccess:'1:27 Lun 23 Nov 2020',
        messageHistory:[],
        hover: false
      }
    ],
    openContactIndex: 0,
    currentUserMessage: '',
    now: new Date(),
    search: ""



  },
  methods: {
    openChat: function(index){
      this.openContactIndex = index;
    },
    addMessage: function(){
      this.now = new Date();
      let newObj = {
        text : this.currentUserMessage,
        date: this.now.getDate().toString().padStart(2,"0")+'/'
              +this.now.getMonth().toString().padStart(2,"0")+'/'
              +this.now.getFullYear()+' '
              +this.now.getHours().toString().padStart(2,"0")+':'
              +this.now.getMinutes().toString().padStart(2,"0")+':'
              +this.now.getSeconds().toString().padStart(2,"0"),
        state: 'sent'
      }
      setTimeout(this.contacts[this.openContactIndex].messageHistory.push(newObj), 2000) ;
      //messaggio random
      setTimeout(() => {
        this.now = new Date();
        let newRandomObj = {
          text : 'Non so cosa mi stai dicendo, quindi rispondo con un messaggio sempre uguale!!! :-)',
          date: this.now.getDate().toString().padStart(2,"0")+'/'
                +this.now.getMonth().toString().padStart(2,"0")+'/'
                +this.now.getFullYear()+' '
                +this.now.getHours().toString().padStart(2,"0")+':'
                +this.now.getMinutes().toString().padStart(2,"0")+':'
                +this.now.getSeconds().toString().padStart(2,"0"),
          state: 'received'
        }
        this.contacts[this.openContactIndex].messageHistory.push(newRandomObj);
      }, 3000);
      this.currentUserMessage='';
    }
  },
  computed: {
    filteredContacts: function(){
      return this.contacts.filter((contact) => {
          return contact.name.toLowerCase().match(this.search);
        });
    }

  }

})
