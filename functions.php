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
function child_enqueue_styles() {

	wp_enqueue_style( 'mandala-astra-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_MANDALA_ASTRA_VERSION, 'all' );
	wp_enqueue_style ('mandala-astra-child-css', get_stylesheet_directory_uri() .'/css/mandala-astra.css', array());

}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );