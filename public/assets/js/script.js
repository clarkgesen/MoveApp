
$('#create-form').on('submit', (event) => {
  event.preventDefault();


  const activity = {
    name: $('#name').val(),
    bodypart: $('#bodypart').val(),
    unit: $('#unit').val(),
    reps: $('#reps').val(),
  };

  if ($.isNumeric(activity.unit)) {
    $('#unit-warning').hide();
  } else {
    $('#unit-warning').show();
    throw new Error('Units must be number');
  }

  if ($.isNumeric(activity.reps)) {
    $('#reps-warning').hide();
  } else {
    $('#reps-warning').show();
    throw new Error('Reps must be number');
  }

  axios.post('/api/activities', activity)
    .then((response) => {
      window.location = '/activities';
    });
});



// weight info

$('#create-weight').on('submit', (event) => {
  event.preventDefault();
  console.log(event);


  const weight = {
    weight: $('#weight').val(),

  };
  console.log(weight);
  axios.post('/api/weight', weight)
    .then((response) => {

      window.location = '/weight';
    });
});
