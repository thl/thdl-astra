(function($) {

    $(document).ready(() => {
        // Old fixes for previous version.
        thdl_menu_fix();
        // thdl_move_page_header();
        // thdl_position_mandala_root();
    })

    function thdl_menu_fix() {
        // Resolve two selected menu items
        $('#menu-primary-menu .menu-item').removeClass(['current-menu-item', 'current_page_item', 'menu-item-home']);

        const hashChange =  function(e) {
            if (!window.thlhcto) {
                window.thlhcto = setTimeout(() => {
                    const windowhash = window.location.hash.replace('#', '');
                    $('.current-menu-item').removeClass('current-menu-item');
                    $('.selected-menu-item').removeClass('selected-menu-item');
                    let found = false;
                    $('#menu-primary-menu > .menu-item').each(function() {
                        const linkhref = $(this).find('a').attr('href');
                        let linkhash = linkhref.split('#');
                        linkhash = (linkhash.length > 1) ? linkhash[1] : linkhash[0];
                        if (linkhash == windowhash || windowhash.includes(linkhash)) {
                            found = true;
                            console.log(linkhash, windowhash);
                            $(this).addClass('selected-menu-item');
                        }
                    });

                    const isAsset = windowhash.match(/^\/(audio-video|images|sources|texts|visuals).*/);

                    if (!found && isAsset) {
                        $('#menu-primary-menu > .menu-item').each(function() {
                            const linkhref = $(this).find('a').attr('href');
                            let linkhash = linkhref.split('#');
                            linkhash = (linkhash.length > 1) ? linkhash[1] : linkhash[0];

                            if (linkhash.includes('resources')) {
                                $(this).addClass('selected-menu-item');
                            }
                        });
                    }
                    window.thlhcto = null;
                }, 50);
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