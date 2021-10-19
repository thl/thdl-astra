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
 * Enable Wordpress Email
 *      Taken from: https://www.a2hosting.com/kb/installable-applications/optimization-and-configuration/wordpress2/sending-e-mail-in-wordpress
 */
add_action( 'phpmailer_init', 'send_smtp_email' );
function send_smtp_email( $phpmailer ) {
	$phpmailer->isSMTP();
	$phpmailer->Host       = SMTP_HOST;
	$phpmailer->SMTPAuth   = SMTP_AUTH;
	$phpmailer->Port       = SMTP_PORT;
	$phpmailer->SMTPSecure = SMTP_SECURE;
	$phpmailer->Username   = SMTP_USERNAME;
	$phpmailer->Password   = SMTP_PASSWORD;
	$phpmailer->From       = SMTP_FROM;
	$phpmailer->FromName   = SMTP_FROMNAME;
}

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

/*
function thdl_test() {
	$tp = get_page_template();
}

add_action( 'astra_primary_content_top', 'thdl_test');
*/