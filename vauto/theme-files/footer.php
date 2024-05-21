<?php
/**
 * Footer Template
 *
 * @package mx-theme
 */

?>
		</main> <!-- site-torso -->
		<footer class="site-footer">
			<div class="upper-footer">
				<div class="upper-footer__medium-inner">
					<?php
						wp_nav_menu(
							array(
								'menu' => 'Social Links - Footer',
								'container' => 'nav',
								'items_wrap' => '<ul id="footer-menu-social" class="site-footer__social" role="menubar">%3$s</ul>'
							)
						);
					?>
				</div>
			</div>
			<div class="middle-footer">
				<div class="middle-footer__medium-inner">
					<?php
						wp_nav_menu(
							array(
								'menu' => 'Footer Menu - Primary',
								'container' => 'nav',
								'items_wrap' => '<ul id="footer-menu-primary" class="site-footer__menu-primary" role="menubar">%3$s</ul>'
							)
						);
					?>
					<a class="site-footer__logo" href="<?php echo esc_url( get_home_url() ) ?>">
						<img src="<?php echo esc_url( get_template_directory_uri() ) ?>/dist/images/logos/logo-color.svg" alt="vAuto Logo">
					</a>
				</div>
			</div>
			<div class="lower-footer">
				<div class="lower-footer__medium-inner">
					<p>&copy; <?php echo date('Y'); ?> <?php esc_html_e( 'vAuto Inc.', 'mx-theme' ); ?></p>
				</div>
			</div>
		</footer> <!-- site-footer -->
	</div> <!-- site-container -->
	<?php wp_footer(); ?>
	</body>
</html>
