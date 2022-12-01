(function ($) {
    "use strict";
    // Mobile menu
    $('#mob_menubar').on('click', function () {
        $('#mob_menu').toggleClass('active')
    })
    // search for mobile
    $('#src_icon').on('click', function () {
        $('.mobile_search_bar').addClass('active')
    })
    $('#close_mbsearch').on('click', function () {
        $('.mobile_search_bar').removeClass('active')
    })
    // nice selector
    $('.nice_select').niceSelect();
    // search suggest
    $('#show_suggest').on('focus',function(){
        $('.search_suggest').addClass('active')
    })
    $('#show_suggest').on('focusout',function(){
        $('.search_suggest').removeClass('active')
    })
    // Menu
    $('.open_menu').click(function () {
        $('#mobile_menwrap').addClass('active')
    })
    $('#menuclose').click(function () {
        $('#mobile_menwrap').removeClass('active')
    })
    // outside click handle
    $(document).on('click', function(e){
        if(e.target.id==='mobile_menwrap'){
            $('#mobile_menwrap').removeClass('active')
        }
        if(e.target.id==='mobile_catwrap'){
            $('#mobile_catwrap').removeClass('active')
            $('.singlecats').removeClass('active')
            $('.mega_menu_wrap').removeClass('active')
        }
        if(e.target.classList.contains('product_quickview')){
            $('.product_quickview').removeClass('active');
            $('body').css('overflow-y', 'auto')
        }
        if(e.target.classList.contains('popup_wrap')){
            $('.popup_wrap').removeClass('active');
            $('body').css('overflow-y', 'auto')
        }
        if(e.target.id==='mobileCart'){
            $('#mobileCart').removeClass('active');
        }

        $('.acprof_wrap').removeClass('active')
    })
    // mobile submenu
    $('.mobile_menu_2 .withsub').on('click', function(){
        if($(this).hasClass('active')){
            $('.mobile_menu_2 .withsub').removeClass('active')
        }else{
            $('.mobile_menu_2 .withsub').removeClass('active')
            $(this).addClass('active')
        }
    })


    // Header Scroll
    window.onscroll = function() {myFunction()};
    var header = document.getElementById("header-wrap");
    var sticky = header.offsetTop;
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }










})(jQuery);