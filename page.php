<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Astra
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header(); ?>

<?php if ( astra_page_layout() == 'left-sidebar' ) : ?>

	<?php get_sidebar(); ?>

<?php endif ?>

	<div id="primary" <?php astra_primary_class(); ?>>

        <div id="thdl-col-1" class="thdl-col">Im col 1</div>

        <div id="thdl-col-2" class="thdl-col 2ndcol">

	        <?php if ( is_active_sidebar( 'content-top-widget-area' ) ) : ?>
                <div id="thdl-content-top" class="widget-area">
			        <?php dynamic_sidebar( 'content-top-widget-area' ); ?>
                </div>
	        <?php endif; ?>

            <div id="mandala-root"></div>
            <?php astra_primary_content_top(); ?>

            <?php astra_content_page_loop(); ?>

            <?php astra_primary_content_bottom(); ?>

        </div>

        <div id="thdl-col-3" class="thdl-col">
            <div id="advancedSearchPortal"></div>
        </div>

	</div><!-- #primary -->

<?php if ( astra_page_layout() == 'right-sidebar' ) : ?>

	<?php get_sidebar(); ?>

<?php endif ?>

<?php get_footer(); ?>
