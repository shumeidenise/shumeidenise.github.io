$(function(){
  var $filterSelect = $('#FilterSelect'),
      $container = $('#container');
  
  $container.mixItUp();
  
  $filterSelect.on('change', function(){
    $container.mixItUp('filter', $(this).val());

    console.log($filterSelect.val());
  });
  
});

// $('#container').mixItUp();