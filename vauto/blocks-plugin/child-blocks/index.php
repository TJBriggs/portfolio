<?php
/**
 * 
 * Child Blocks
 * 
 * These blocks shoule be registerd before all repeater and parent blocks.
 *
 */
require_once __DIR__ . '/accordion/accordion.php';
require_once __DIR__ . '/accordion-group/accordion-group.php';
require_once __DIR__ . '/media-block/media-block.php';
require_once __DIR__ . '/color-swatch/color-swatch.php';
require_once __DIR__ . '/hero-card/hero-card.php';
require_once __DIR__ . '/hero-card-image/hero-card-image.php';
require_once __DIR__ . '/ss-card/ss-card.php';
require_once __DIR__ . '/ss-box/ss-box.php';
require_once __DIR__ . '/mt-card/mt-card.php';
require_once __DIR__ . '/product-tab/product-tab.php';
require_once __DIR__ . '/uberflip-embed/uberflip-embed.php';

/**
 * 
 * Repeater Blocks
 * 
 * These blocks shoule be registerd before the parent blocks and usually include child blocks.
 * Example: grid of CTAs, group of cards, etc.
 *
 */
require_once __DIR__ . '/repeater/repeater.php';
require_once __DIR__ . '/slider/slider.php';