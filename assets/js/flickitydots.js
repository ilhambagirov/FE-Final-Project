$( function() {
  
    var $mainslider = $('.gallery').flickity({
      pageDots: true
    });
  
    var flickity = $mainslider.data('flickity');
    
    var $galleryNav = $('.flickity-page-dots');
    var $galleryNavItems = $galleryNav.find('.flickity-page-dots .dot');
    
    $mainslider.on( 'select.flickity', function() {
      $galleryNav.find('.is-selected').removeClass('is-selected');
      $galleryNavItems.eq( flickity.selectedIndex ).addClass('is-selected');
    });
});