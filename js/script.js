$(function(){
  var $filterSelect = $('#FilterSelect'),
      $container = $('#container');
  
  $container.mixItUp();
  
  $filterSelect.on('change', function(){
    $container.mixItUp('filter', this.value);
  });
  
});

$('#container').mixItUp();