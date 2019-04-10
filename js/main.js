var item = $('.menu-item'); 
var itemSub = $('.sub-menu li a'); 
item.attr('tabindex','0');
itemSub.attr('tabindex','0');
item.on('mouseover focusin',function(){
    item.removeClass('menu-act');
    $(this).addClass('menu-act');
}); 
$('.sub-menu li:last-child a').on('focusout',function(){
    item.removeClass('menu-act');
});
$('.sub-menu li:last-child a').on('mouseout',function(){
    item.removeClass('menu-act');
});
