(function($) {

    $(document).ready(() => {
        thdl_menu_fix();
        thdl_move_page_header();
        thdl_position_mandala_root();
    })

    function thdl_menu_fix() {
        return;
        // Resolve two selected menu items

        // Close drop down menus on click and select parent
        /*
        $('.sub-menu .menu-link').on('click', function(e) {
            let parent_menu = $(this).parents('.sub-menu').eq(0).parent();
            $('.current-menu-item').removeClass('current-menu-item');
            parent_menu.addClass('clicked current-menu-item');
            setTimeout(() => {
                $('.menu-item.clicked').removeClass('clicked');
            }, 100);
        });
        */
        function findLink(lbl) {
            let lnk = false;
            $('.ast-below-header-bar .main-navigation .menu-item .menu-link').each(function(n) {
                const mltxt = $(this).text().toLowerCase();
                if (mltxt === lbl) {
                    lnk = $(this);
                }
            });
            return lnk;
        }

        const hashChange =  function(e) {
            if (!window.thlhcto) {
                window.thlhcto = setTimeout(() => {
                    const hsh = window.location.hash;
                    let typemtch = hsh.match(/(audio-video|collections|images|sources|texts|visuals)/);
                    if (typemtch) {
                        const atype = typemtch[0].toLowerCase();
                        const actlink = findLink(atype);
                        $('.current-menu-item').removeClass('current-menu-item');
                        actlink.addClass('current-menu-item');
                    }
                    window.thlhcto = null;
                }, 100);
            }
        }

        window.onhashchange = hashChange;
        window.onload = hashChange;

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