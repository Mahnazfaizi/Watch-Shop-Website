const cards = document.getElementsByClassName('feature-card');
      for(let i = 0; i < cards.length; i++){
        cards[i].addEventListener('mouseover', () => {
          cards[i].style = 'background-color: #354b6b; color: #fff;'
        })

        cards[i].addEventListener('mouseout', () => {
          cards[i].style = 'backgroundColor: transparent; color: #000;'
        })
      }