
$('.work-btn').hide();

$('.work-btn').attr('data-bs-toggle', 'tooltip');
$('.work-btn').attr('data-bs-placement', 'bottom');
$('.work-btn').attr('title', 'View');

$('.work-card').hover(function(){
    var button = $(this).find('.work-btn');
    button.show();
    // button.effect('bounce');
}, function(){
    var button = $(this).find('.work-btn');
    // button.finish().effect('bounce', 1000).hide().fadeIn();
    button.hide();
});