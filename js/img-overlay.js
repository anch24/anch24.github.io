
$('.work-btn').hide();

$('.work-btn').attr('data-bs-toggle', 'tooltip');
$('.work-btn').attr('data-bs-placement', 'bottom');
$('.work-btn').attr('title', 'View');

$('.work-card').hover(function(){
    $(this).find('.work-btn').show();
    $(this).find('.work-btn').effect('bounce', 'slow');
}, function(){
    $(this).find('.work-btn').hide();
    $(this).find('.work-btn').stop(true, true).effect("bounce", { times: 1 }, 1);
});