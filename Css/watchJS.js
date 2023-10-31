const cards = document.getElementsByClassName('watch-card');
      for(let i = 0; i < cards.length; i++){
        cards[i].addEventListener('mouseover', () => {
          cards[i].style = 'background-color: #99ffcc; color: #fff;'
        })

        cards[i].addEventListener('mouseout', () => {
          cards[i].style = 'backgroundColor: transparent; color: #000;'
        })
      }