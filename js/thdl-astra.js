(function($) {

    $(document).ready(() => {
        thdl_menu_fix();
    })

    function thdl_menu_fix() {
        $('.sub-menu .menu-link').on('click', function(e) {
            $(this).parents('.sub-menu').eq(0).parent().addClass('clicked');
            setTimeout(() => {
                $('.menu-item.clicked').removeClass('clicked');
            }, 100);
        })
    }
})(jQuery);