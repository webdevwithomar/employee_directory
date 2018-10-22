// this variable will hold the array of employee objects
let ourData;

/* ajax jQuery Starts. It processes each employee data and prints them in the page */
$.ajax({
  url: 'https://randomuser.me/api?results=12&gender=female',
  dataType: 'json',
  success: function(data) {
    ourData = data.results;
    $.each(ourData, function (index, user) {
      let html = `<div class="card">`;
      html += `<div class="card-img-container">`;
      html += `<img class="card-img" src="${user.picture.large}" alt="profile picture">`;
      html += `</div>`;
      html += `<div class="card-info-container">`;
      html += `<h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>`;
      html += `<p class="card-text">${user.email}</p>`;
      html += `<p class="card-text cap">${user.location.city}, ${user.location.state}</p>`;
      html += `</div>`;
      html += `</div>`;
      $('#gallery').append(html);
    }); // printing loop ends
    const $card = $('.card'); // this holds an array of divs(.cards)
    $card.on('click', function () {
      let html;
      const theIndex = $(this).index();
      html = `<div class="modal-container">`;
      html += `<div class="modal">`;
      html += `<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>`;
      html += `<div class="modal-info-container">`;
      html += `<img class="modal-img" src="${ourData[theIndex].picture.large}">`;
      html += `<h3 id="name" class="modal-name cap">${ourData[theIndex].name.first} ${ourData[theIndex].name.last}</h3>`;
      html += `<p class="modal-text">${ourData[theIndex].email}</p>`;
      html += `<p class="modal-text cap">${ourData[theIndex].location.city}, ${ourData[theIndex].location.state}</p>`;
      html += `<hr>`;
      html += `<p class="modal-text">${ourData[theIndex].cell}</p>`;
      html += `<p class="modal-text">${ourData[theIndex].location.street} ${ourData[theIndex].location.city}, ${ourData[theIndex].location.state} ${ourData[theIndex].location.postcode}</p>`;
      html += `<p class="modal-text">Birthday: ${ourData[theIndex].dob.date}</p>`;
      html += `</div>`;
      html += `</div>`;
      $('body').append(html);
    }); // clicking on cards event listener ends
    // the event listener below is for the closing button
    $('body').on('click', function (e) {
      if (e.target.className === 'modal-close-btn' || e.target.textContent === 'X') {
        $('.modal-container').fadeOut();
      }
    }); // closing button event listener ends
  } // success ends
}); // ajax ends