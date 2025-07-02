


  // document.querySelectorAll('.team-card').forEach(card => {
  //   card.addEventListener('mouseenter', () => {
  //     card.classList.add('show-info');
  //   });

  //   card.addEventListener('mouseleave', () => {
  //     card.classList.remove('show-info');
  //   });
  // });



  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.team-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('show-info');
      });

      card.addEventListener('mouseleave', () => {
        card.classList.remove('show-info');
      });
    });
  });




 







  



