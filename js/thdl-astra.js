(function($) {

    $(document).ready(() => {
        thdl_menu_fix();
        thdl_move_page_header();
        thdl_position_mandala_root();
    })

    function thdl_menu_fix() {
        $('.sub-menu .menu-link').on('click', function(e) {
            $(this).parents('.sub-menu').eq(0).parent().addClass('clicked');
            setTimeout(() => {
                $('.menu-item.clicked').removeClass('clicked');
            }, 100);
        })
    }

    function thdl_move_page_header() {
        /** Moves header for page into top of left-main column if it exists **/
        const maincol = $(".wp-block-columns .left-main");
        const head = $('#content #primary > #main > article header.entry-header');
        if (maincol.length == 1 && head.length == 1) {
            console.log('moving head');
            $('#mandala-root').after(head);
        }
    }

    function thdl_position_mandala_root() {
        const mroot = $('#mandala-root');
        const leftside = $('.wp-block-column.left-main');
        if (mroot.length === 1 && leftside.length === 1) {
            mroot.prependTo(leftside);
        }
    }
})(jQuery);