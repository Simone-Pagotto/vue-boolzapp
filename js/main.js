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
        ]
      },
      {
        name: 'Angelo Taggiasca',
        avatar: 'img/avatar_2.jpg',
        lastAccess:'15:45 Lun 23 Nov 2020',
        messageHistory:[]
      },
      {
        name: 'Paolo Lo Squalo',
        avatar: 'img/avatar_3.jpg',
        lastAccess:'1:27 Lun 23 Nov 2020',
        messageHistory:[]
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
        date: this.now.getDate()+'/'+this.now.getMonth()+'/'+this.now.getFullYear()+' '+this.now.getHours()+':'+this.now.getMinutes()+':'+this.now.getSeconds(),
        state: 'sent'
      }
      this.contacts[this.openContactIndex].messageHistory.push(newObj);
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
