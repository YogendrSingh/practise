// app/assets/javascripts/employees.js

$(document).on('turbolinks:load', function () {
    $('#employee_city').change(function () {
      var selectedCity = $(this).val();
      var url = '/employees/areas_for_city';
  
      $.ajax({
        type: 'GET',
        url: url,
        data: { city: selectedCity },
        success: function (data) {
          var areasDropdown = $('#employee_area');
          areasDropdown.empty();
  
          $.each(data.areas, function (index, value) {
            areasDropdown.append($('<option>').text(value).attr('value', value));
          });
        },
        error: function () {
          console.log('Error fetching areas');
        }
      });
    });
  });
  