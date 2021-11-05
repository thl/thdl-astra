<?php
/**
 * Mandala Astra Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Mandala Astra
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_MANDALA_ASTRA_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function thdl_custom_styles() {
	wp_enqueue_style( 'mandala-astra-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_MANDALA_ASTRA_VERSION, 'all' );
	wp_enqueue_style ('mandala-astra-child-css', get_stylesheet_directory_uri() .'/css/thdl-astra.css', array());
}

add_action( 'wp_enqueue_scripts', 'thdl_custom_styles', 15 );


/**
 * Enqueue styles
 */
function thdl_custom_js() {
	wp_enqueue_script( 'thdl_custom_js', get_stylesheet_directory_uri() . '/js/thdl-astra.js', array('jquery'), '1.0', true );
}

add_action( 'wp_enqueue_scripts', 'thdl_custom_js', 15 );

/**
 * Custom Widget Areas for Content Top
 * Taken from: https://qodeinteractive.com/magazine/add-widget-area-to-wordpress/
 */

function register_thdl_areas() {
	// Content Top Widget Area
	register_sidebar(
		array(
			'id' => 'content-top-widget-area',
			'name' => esc_html__( 'Content Top Widget Area', 'theme-domain' ),
			'description' => esc_html__( 'A new widget area to appear in the center column above all content including mandala pages', 'theme-domain' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget' => '</div>',
			'before_title' => '<div class="top-widget-title-holder"><h3 class="top-widget-title">',
			'after_title' => '</h3></div>'
		)
	);
}
add_action( 'widgets_init', 'register_thdl_areas' );

/**
 * Trim the paragraph tags from the custom shortcodes in blocks
 * @param $content
 *
 * @return array|string|string[]
 *
 */
function thdl_clean_block_shortcodes($content){
	$content = str_replace('<p>[madvsearch]</p>', '[madvsearch]', $content);
	$content = str_replace('<p>[mandalaroot]</p>', '[mandalaroot]', $content);
	return $content;
}
add_filter('widget_block_content', 'thdl_clean_block_shortcodes');
