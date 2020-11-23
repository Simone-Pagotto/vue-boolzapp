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
            date:"1",
            isYour: false
          },
          {
            text:"Bene tu?",
            date:"2",
            isYour: true
          },
          {
            text:"Bene",
            date:"3",
            isYour: false
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
    openContactIndex: 0
  },
  methods: {
    openChat: function(index){
      this.openContactIndex = index;
    }
  }


})
