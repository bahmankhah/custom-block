<?php 
/**
 * Plugin Name: Custom Icon Block
 */

 function custom_block_script_register()
 {
    wp_enqueue_script('custom-block',plugin_dir_url(__FILE__).'block.js',array('wp-blocks','wp-i18n','wp-editor','wp-components'),true,false);
 }
 add_action('enqueue_block_editor_assets','custom_block_script_register');



?>