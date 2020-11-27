const myBoolzApp = new Vue ({
  el:'#root',
  data:{
    userContact: {
      name: 'Simone Pagotto',
      avatar: 'img/avatar_7.jpg',
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
            state: 'received',
            isViewed: false,
            isDown: false
          },
          {
            text:"Bene tu?",
            date:"01/01/2020 12:34:33",
            state: 'sent',
            isViewed: false,
            isDown: false
          },
          {
            text:"Bene",
            date:"01/01/2020 12:34:33",
            state: 'received',
            isViewed: false,
            isDown:false
          },
          {
            text:"Ciao come va?",
            date: "01/01/2020 12:34:33",
            state: 'received',
            isViewed: false,
            isDown: false
          },
          {
            text:"Bene tu?",
            date:"01/01/2020 12:34:33",
            state: 'sent',
            isViewed: false,
            isDown: false
          },
          {
            text:"Bene",
            date:"01/01/2020 12:34:33",
            state: 'received',
            isViewed: false,
            isDown:false
          },
          {
            text:"Ciao come va?",
            date: "01/01/2020 12:34:33",
            state: 'received',
            isViewed: false,
            isDown: false
          },
          {
            text:"Bene tu?",
            date:"01/01/2020 12:34:33",
            state: 'sent',
            isViewed: false,
            isDown: false
          },
          {
            text:"Bene",
            date:"01/01/2020 12:34:33",
            state: 'received',
            isViewed: false,
            isDown:false
          },
          {
            text:"Ciao come va?",
            date: "01/01/2020 12:34:33",
            state: 'received',
            isViewed: false,
            isDown: false
          },
          {
            text:"Bene tu?",
            date:"01/01/2020 12:34:33",
            state: 'sent',
            isViewed: false,
            isDown: false
          },
          {
            text:"Bene",
            date:"01/01/2020 12:34:33",
            state: 'received',
            isViewed: false,
            isDown:false
          }
        ],
        hover: false
      },
      {
        name: 'Angelo Taggiasca',
        avatar: 'img/avatar_2.jpg',
        lastAccess:'15:45 Lun 23 Nov 2020',
        messageHistory:[
          {
            text:"Ciao come va?",
            date: "01/01/2020 12:34:33",
            state: 'received',
            isViewed: false,
            isDown:false
          },
          {
            text:"Bene tu?",
            date:"01/01/2020 12:34:33",
            state: 'sent',
            isViewed: false,
            isDown:false
          },
          {
            text:"Bene",
            date:"01/01/2020 12:34:33",
            state: 'received',
            isViewed: false,
            isDown:false
          }
        ],
        hover: false
      },
      {
        name: 'Paolo Lo Squalo',
        avatar: 'img/avatar_3.jpg',
        lastAccess:'1:27 Lun 23 Nov 2020',
        messageHistory:[{
          text:"Ciao come va?",
          date: "01/01/2020 12:34:33",
          state: 'received',
          isViewed: false,
          isDown:false
        },
        {
          text:"Bene tu?",
          date:"01/01/2020 12:34:33",
          state: 'sent',
          isViewed: false,
          isDown:false
        },
        {
          text:"Bene",
          date:"01/01/2020 12:34:33",
          state: 'received',
          isViewed: false,
          isDown:false
        }
      ],
        hover: false
      },
      {
        name: 'Federicco Furet',
        avatar: 'img/avatar_4.jpg',
        lastAccess:'1:27 Lun 23 Nov 2020',
        messageHistory:[{
          text:"Ciao come va?",
          date: "01/01/2020 12:34:33",
          state: 'received',
          isViewed: false,
          isDown:false
        },
        {
          text:"Bene tu?",
          date:"01/01/2020 12:34:33",
          state: 'sent',
          isViewed: false,
          isDown:false
        },
        {
          text:"Bene",
          date:"01/01/2020 12:34:33",
          state: 'received',
          isViewed: false,
          isDown:false
        }
      ],
        hover: false
      },
      {
        name: 'Ali G',
        avatar: 'img/avatar_5.jpg',
        lastAccess:'1:27 Lun 23 Nov 2020',
        messageHistory:[{
          text:"Ciao come va?",
          date: "01/01/2020 12:34:33",
          state: 'received',
          isViewed: false,
          isDown:false
        },
        {
          text:"Bene tu?",
          date:"01/01/2020 12:34:33",
          state: 'sent',
          isViewed: false,
          isDown:false
        },
        {
          text:"Bene",
          date:"01/01/2020 12:34:33",
          state: 'received',
          isViewed: false,
          isDown:false
        }
      ],
        hover: false
      },
      {
        name: 'Ginger',
        avatar: 'img/avatar_6.jpg',
        lastAccess:'1:27 Lun 23 Nov 2020',
        messageHistory:[{
          text:"Ciao come va?",
          date: "01/01/2020 12:34:33",
          state: 'received',
          isViewed: false,
            isDown:false
        },
        {
          text:"Bene tu?",
          date:"01/01/2020 12:34:33",
          state: 'sent',
          isViewed: false,
            isDown:false
        },
        {
          text:"Bene",
          date:"01/01/2020 12:34:33",
          state: 'received',
          isViewed: false,
            isDown:false
        }
      ],
        hover: false
      },
      {
        name: 'Prugna',
        avatar: 'img/avatar_io.jpg',
        lastAccess:'1:27 Lun 23 Nov 2020',
        messageHistory:[{
          text:"Ciao come va?",
          date: "01/01/2020 12:34:33",
          state: 'received',
          isViewed: false,
          isDown:false
        },
        {
          text:"Bene tu?",
          date:"01/01/2020 12:34:33",
          state: 'sent',
          isViewed: false,
          isDown:false
        },
        {
          text:"Bene",
          date:"01/01/2020 12:34:33",
          state: 'received',
          isViewed: false,
          isDown:false
        }
      ],
        hover: false
      },
      {
        name: 'Ciccio Salciccia',
        avatar: 'img/avatar_8.jpg',
        lastAccess:'1:27 Lun 23 Nov 2020',
        messageHistory:[{
          text:"Ciao come va?",
          date: "01/01/2020 12:34:33",
          state: 'received',
          isViewed: false,
          isDown:false
        },
        {
          text:"Bene tu?",
          date:"01/01/2020 12:34:33",
          state: 'sent',
          isViewed: false,
          isDown:false
        },
        {
          text:"Bene",
          date:"01/01/2020 12:34:33",
          state: 'received',
          isViewed: false,
          isDown:false
        }
      ],
        hover: false
      }

    ],
    // openContactIndex: 0,
    openContact: null,
    filteredContacts:[],
    currentUserMessage: '',
    now: new Date(),
    search: "",
    isEmojiOpen: false
  },
  beforeCreate(){},
  // componente del lifecyle di vue
  // imposta il primo contatto dell'array contacts come quello aperto in chat-box
  created(){
    if(this.contacts.length === 0){
      console.log('no contact');
    } else {
      this.openContact = this.contacts[0];
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.scrollView();
    })
  },
  updated: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been re-rendered
      this.scrollView();
    })
  },
  methods: {
    openChat: function(contact,index){
      const transObj = {...this.contacts[index]};//metto l'oggetto selezionato in un contenitore
      this.contacts.splice(index,1);//taglio oggetto
      this.contacts.unshift(transObj);//metto l'oggetto nel contenitore al primo posto
      this.openContact = this.contacts[0];//devo rispettare a 0 per le proprietà intrinseche degli oggetti/la loro comparazione
    },
    openFilteredChat: function(contact,index){
      const transObj = {...this.filteredContacts[index]};//metto l'oggetto selezionato in un contenitore
      this.filteredContacts.splice(index,1);//taglio oggetto
      this.filteredContacts.unshift(transObj);//metto l'oggetto nel contenitore al primo posto
      this.openContact = this.filteredContacts[0];//devo rispettare a 0 per le proprietà intrinseche degli oggetti/la loro comparazione
      // this.contacts[0] = this.openContact;//mantiene il cambio di posizione anche annullando il testo di filtraggio

      for(let i=0; i < this.contacts.length; i++){
        //ciclo che modifica la posizione della chat selezionata anche nell'array contacts
        //prima trovo la posizione del contatto selezionato poi procedo
        if(this.contacts[i].name === transObj.name){
          this.contacts.splice(i,1);//taglio oggetto
          this.contacts.unshift(transObj);//metto l'oggetto nel contenitore al primo posto
          this.contacts[0] = this.openContact;
        }
      }
    },

    filterContacts(){
      this.filteredContacts = this.contacts.filter( (contact) =>
          contact.name.toLowerCase().includes(this.search))
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
      const pointerarray = this.openContact.messageHistory;
      setTimeout(pointerarray.push(newObj), 2000) ;
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
        pointerarray.push(newRandomObj);
      }, 3000);
      this.currentUserMessage='';
      this.scrollView();
    },
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    lastMessage: function(index){
      const lastMessageIndex = this.contacts[index].messageHistory.length - 1;
      return this.contacts[index].messageHistory[lastMessageIndex].text;
    },
    resetDown: function(e,index) {
      const length = this.openContact.messageHistory.length;
      for(let i=0; i<length; i++){
        let currentIsDown = this.openContact.messageHistory[i].isDown;
        if( currentIsDown === true && i!==index){
          currentIsDown = !currentIsDown;
          this.$set(this.openContact.messageHistory[i],'isDown',currentIsDown);
        }
      }
      for(let i=0; i<length; i++){
        if(i===index){
          e.isDown = !e.isDown;
        }
      }
    },
    removeMessage: function(index){
      this.openContact.messageHistory.splice(index,1);
    },
    scrollView: function(){
      let here = document.getElementById("scroll");
      console.log(here);
      here.scrollTop = here.scrollHeight;
    }
  }

})
