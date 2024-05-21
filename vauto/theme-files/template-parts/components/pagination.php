<?php
$previous_post = get_previous_post( true );
$next_post = get_next_post( true );
?>
<div class="pagination">
	<?php if ( is_a( $previous_post , 'WP_Post' ) ) : ?>
		<span class="pagination__item pagination__prev">
			<a href="<?php echo get_permalink( $previous_post->ID ); ?>" rel="prev">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 57" style="enable-background:new 0 0 27 57" xml:space="preserve"><path d="M26.6 56.3c-.4.3-.9.5-1.3.5-.5 0-1.1-.2-1.5-.7L1 31.1c-1.4-1.5-1.4-3.9 0-5.4L23.8.7c.7-.8 2-.9 2.8-.1.8.7.9 2 .1 2.8L4 28.4l22.8 25.1c.7.8.7 2-.2 2.8z"/></svg>
				<span><?php esc_html_e( 'Previous Post', 'mx-theme' ); ?></span>
			</a>
		</span>
	<?php endif; ?>
	<?php if ( is_a( $next_post , 'WP_Post' ) ) : ?>
		<span class="pagination__item pagination__next">
			<a href="<?php echo get_permalink( $next_post->ID ); ?>" rel="next">
				<span><?php esc_html_e( 'Next Post', 'mx-theme' ); ?></span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 57" xml:space="preserve"><path d="M.7.5C1 .2 1.5 0 2 0s1.1.2 1.5.7l22.8 25c1.4 1.5 1.4 3.9 0 5.4L3.5 56.2c-.7.8-2 .9-2.8.1-.8-.7-.9-2-.1-2.8l22.8-25.1L.5 3.3c-.7-.8-.7-2 .2-2.8z"/></svg>
			</a>
		</span>
	<?php endif; ?>
</div>
