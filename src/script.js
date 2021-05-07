var vm = new Vue({
  el: '#app',
  data: {
    list: [ //wszystkie elementy które wyświetlają się na stronie
      {
        id: '1', //id produktu
        name: 'Pies 1', //nazwa produktu
        imgUrl: 'images/image (1).jpg', //zdjęcie produktu
        discribe: 'Opis 1.', //opis produktu
        price: '20' //cena produktu
      },
      {
        id: '2',
        name: 'Pies 2',
        imgUrl: 'images/image (2).jpg',
        discribe: 'Opis 2.',
        price: '40'
      },
      {
        id: '3',
        name: 'Pies 3',
        imgUrl: 'images/image (3).jpg',
        discribe: 'Opis 3.',
        price: '60'
      },
      {
        id: '4',
        name: 'Pies 4',
        imgUrl: 'images/image (4).jpg',
        discribe: 'Opis 4.',
        price: '80'
      },
      {
        id: '5',
        name: 'Pies 5',
        imgUrl: 'images/image (5).jpg',
        discribe: 'Opis 5.',
        price: '100'
      },
      {
        id: '6',
        name: 'Pies 6',
        imgUrl: 'images/image (4).jpg',
        discribe: 'Opis 6.',
        price: '120'
      },
      {
        id: '7',
        name: 'Pies 7',
        imgUrl: 'images/image (3).jpg',
        discribe: 'Opis 7.',
        price: '140'
      },
      {
        id: '8',
        name: 'Pies 8',
        imgUrl: 'images/image (2).jpg',
        discribe: 'Opis 8.',
        price: '160'
      },
      {
        id: '9',
        name: 'Pies 9',
        imgUrl: 'images/image (1).jpg',
        discribe: 'Opis 9.',
        price: '180'
      },
      {
        id: '10',
        name: 'Pies 10',
        imgUrl: 'images/image (2).jpg',
        discribe: 'Opis 10.',
        price: '200'
      },
      {
        id: '11',
        name: 'Pies 11',
        imgUrl: 'images/image (3).jpg',
        discribe: 'Opis 11.',
        price: '220'
      },
      {
        id: '12',
        name: 'Pies 12',
        imgUrl: 'images/image (4).jpg',
        discribe: 'Opis 12',
        price: '240'
      },
      {
        id: '13',
        name: 'Pies 13',
        imgUrl: 'images/image (5).jpg',
        discribe: 'Opis 13',
        price: '260'
      },
      {
        id: '14',
        name: 'Pies 14',
        imgUrl: 'images/image (4).jpg',
        discribe: 'Opis 14',
        price: '280'
      },
      {
        id: '15',
        name: 'Pies 15',
        imgUrl: 'images/image (3).jpg',
        discribe: 'Opis 15',
        price: '300'
      },
    ],
    cart: [],
    total: 0,
  },

  methods: {
    addCart(item) { //Dodanie elementu do koszyka
      let incart = false;
      if (this.cart.length >= 8) return 1;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === item.id) {
          incart = true;
          break;
        }
      }

      if (!incart) { //sprawdzenie czy jest już w koszyku
        this.cart.push({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
        });
      }
      else
      {
        this.cart.push({
          id: item.id, 
          name: item.name,
          price: item.price,
          quantity: item.quantity +1,
        });
      }
    },


    del(item) { //usuwanie produktu z koszyka
      let index = this.cart.findIndex(item => {
        if (item.id == this.id)
          return true;
      })
      this.cart.splice(index, 1)
    },

    delall() { //czyszczenie koszyka
      for (let i = 0; i < this.cart.length; i++) {
        this.cart.splice(i, this.cart.length)
      }
    },

    sumAll() {
      let summary = 0;
      for (let i = 0; i < this.cart.length; i++) {
        summary += parseInt(this.cart[i].price);
      }

      window.alert("Cena koszyka: " + summary + " PLN");
    },

    buy() {
      let summary = 0;
      for (let i = 0; i < this.cart.length; i++) {
        summary += parseInt(this.cart[i].price);
      }
      this.delall();
      window.alert("Dokonano zakupu - Cena koszyka: " + summary + " PLN");



    }
  }
})