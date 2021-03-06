const apiKey = 'ee316b84f88a186c92a6e31cd2dad1d8';
let cityArray = [];
let city;
let cityLat;
let cityLong;
let removedCity;

storedCities = JSON.parse(localStorage.getItem('cities'));

if (storedCities !== null) {
  city = storedCities[0].name;
  window.onload = currentCall(city);
}


function renderList() {
  Object.values(storedCities).forEach((value) => {
    const $cityLi = $('<li>', { class: 'list-group-item' });
    $cityLi.text(value.name);
    $('.list-group').prepend($cityLi);
  });
}

if (storedCities !== null) {
  renderList();
}


$('#searchButton').on('click', function () {
  city = $(this).parent('div').children('div').children('input')
    .val();
  $(this).parent('div').children('div').children('input')
    .val('');
  currentCall();
});

function currentCall() {
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  $.ajax({
    url: queryURL,
    method: 'GET',
  })
    .then((response) => {
      const $cityLi = $('<li>', { class: 'list-group-item' });
      // used stack exchange to figure out icon image: https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon
      const iconCode = response.weather[0].icon;
      const iconURL = `http://openweathermap.org/img/w/${iconCode}.png`;

      cityObject = {
        name: response.name,
      };
      cityArray = JSON.parse(localStorage.getItem('cities'));
      if (cityArray === null) {
        localStorage.setItem('cities', JSON.stringify([cityObject]));
      } else {
        // not sure how exactly i got this working...
        function listCleaner() {
          for (i = 0; i < cityArray.length; i++) {
            if (cityArray[i].name === cityObject.name) {
              removedCity = cityArray.splice([i], 1);
            }
          }
          cityArray.unshift(cityObject);

          localStorage.setItem('cities', JSON.stringify(cityArray));
        }
      } if (cityArray !== null) {
        listCleaner();
      }

      $('.city').text(response.name);
      $('.temp').text(`Temp: ${response.main.temp}`);
      $('.humidity').text(`Humidity: ${response.main.humidity}`);
      $('.windSpeed').text(`Wind: ${response.wind.speed}`);
      $('#icon').attr('src', iconURL);
      cityLat = response.coord.lat;
      cityLong = response.coord.lon;
      cityId = response.id;

      const uviURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${cityLat}&lon=${cityLong}&units=imperial`;
      $.ajax({
        url: uviURL,
        method: 'GET',
      })
        .then((response) => {
          $('.uvIndex').text(`UVI: ${response.value}`);
          const $dateHeader = $('<h2>');
          const shortDate = response.date_iso.substr(0, response.date_iso.indexOf('T'));
          $dateHeader.text(shortDate);
          $('h1').append($dateHeader);
        });

      const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&id=${cityId}&units=imperial`;
      let index = 3;
      $.ajax({
        url: fiveDayURL,
        method: 'GET',
      })
        .then((response) => {
          for (let i = 4; i < response.list.length; i += 8) {
            const iconCode = response.list[i].weather[0].icon;
            const iconURL = `http://openweathermap.org/img/w/${iconCode}.png`;
            const shortDate = response.list[i].dt_txt.substr(0, response.list[i].dt_txt.indexOf(' '));
            $(`#day-${index}`).text(shortDate);
            $(`#temp-${index}`).text(`Temp: ${response.list[i].main.temp}`);
            $(`#humid-${index}`).text(`Humidity: ${response.list[i].main.humidity}`);
            $(`#icon-${index}`).attr('src', iconURL);
            index += 8;
          }
        });
    });
}

$(document).on('click', 'li', function () {
  city = $(this).text();
  currentCall();
});
