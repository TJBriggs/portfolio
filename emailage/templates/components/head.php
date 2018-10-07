<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php if(get_field('head_scripts', 'option')) : ?>
        <?php the_field('head_scripts', 'option'); ?>
    <?php endif; ?>
    <?php wp_head(); ?>
</head>
