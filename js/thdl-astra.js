(function($) {

    $(document).ready(() => {
        thdl_menu_fix();
        thdl_move_page_header();
        thdl_position_mandala_root();
    })

    function thdl_menu_fix() {
        // Resolve two selected menu items

        // Close drop down menus on click and select parent
        $('.sub-menu .menu-link').on('click', function(e) {
            let parent_menu = $(this).parents('.sub-menu').eq(0).parent();
            $('.current-menu-item').removeClass('current-menu-item');
            parent_menu.addClass('clicked current-menu-item');
            setTimeout(() => {
                $('.menu-item.clicked').removeClass('clicked');
            }, 100);
        });

        const updateMenu =  function(e) {
            setTimeout(() => {
                const bctext = $('.c-content__header__breadcrumb .breadcrumb-item').eq(0).text().toLowerCase();
                console.log("First bc text: ", bctext);
                $('.menu-link').each((ml) => {
                    const mltxt = ml.text();
                    console.log("Menu link", mltxt);
                    if (mltxt === bctext) {
                        $('.current-menu-item').removeClass('current-menu-item')
                        ml.addClass('current-menu-item');
                        console.log("set as current");
                    }
                });
            }, 300);
        }

        window.onhashchange = updateMenu;
        window.onload = updateMenu;

        //c-content__header__breadcrumb breadcrumb
    }

    function thdl_move_page_header() {
        /** Moves header for page into top of left-main column if it exists **/
        const maincol = $(".wp-block-columns .left-main");
        const head = $('#content #primary > #main > article header.entry-header');
        if (maincol.length == 1 && head.length == 1) {
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