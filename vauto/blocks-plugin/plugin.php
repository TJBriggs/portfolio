<?php
/**
 * Bootstrap Mx Blocks Plugin Files
 *
 * @package MxBlocksPlugin
 */

/* Useful global constants */
define( 'MX_BLOCKS_PLUGIN_VERSION', '1.0.1' );
define( 'MX_BLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'MX_BLOCKS_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( 'MX_BLOCKS_PLUGIN_INC', MX_BLOCKS_PLUGIN_PATH . 'includes/' );


require_once MX_BLOCKS_PLUGIN_INC . '/core.php';
require_once MX_BLOCKS_PLUGIN_INC . '/block-settings.php';
require_once MX_BLOCKS_PLUGIN_PATH . '/core-blocks/index.php';
require_once MX_BLOCKS_PLUGIN_PATH . '/meta-blocks/index.php';
require_once MX_BLOCKS_PLUGIN_PATH . '/child-blocks/index.php';
require_once MX_BLOCKS_PLUGIN_PATH . '/blocks/index.php';

/* Activation/Deactivation */
register_activation_hook( __FILE__, '\MxBlocksPlugin\Core\activate' );
register_deactivation_hook( __FILE__, '\MxBlocksPlugin\Core\deactivate' );

/* Bootstrap */
MxBlocksPlugin\Core\mx_setup();
MxBlocksPlugin\BlockSettings\mx_block_settings();