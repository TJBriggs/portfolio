<?php
/**
 * Footer Template
 *
 * @package ThemeName
 */

?>
	</main> <!-- site-container -->
	<?php
		$layout_option = get_theme_mod( 'footer_layout', 'default' );
		$footer_logo_id = get_option( 'footer_logo' );
	?>
	<footer class="site-footer">
		<div class="site-footer__inner">
			<div class="site-footer__upper">
				<div class="site-footer__logo-wrap">
					<a class="site-footer__logo-link" href="<?php echo get_site_url(); ?>">
						<img class="site-footer__logo" src="<?php echo wp_get_attachment_url( $footer_logo_id ); ?>" alt="Site Logo">
					</a>
					<?php
						$allowed_html = array (
							'br' => array(),
						);

						$footer_address = get_theme_mod( 'footer_address' );
						$footer_phone = get_theme_mod( 'footer_phone' );
						$footer_tel_url = get_theme_mod( 'footer_tel_url' );
					?>
					<p class="site-footer__contact-info">
						<?php echo wp_kses( $footer_address, $allowed_html ); ?><br>
						<a href="tel:<?php echo esc_attr( $footer_tel_url ); ?>"><?php echo esc_html( $footer_phone ); ?></a>
					</p>
				</div>
				<div class="site-footer__nav-wrap">
					<?php
						// Menu automatically wrapped in 'nav' element with a class of site-header__nav
						wp_nav_menu(
							array(
								'menu' => 'Footer Menu',
								'container' => 'nav',
								'container_class' => 'site-footer__nav',
								'items_wrap' => '<ul id="footer-menu" class="site-footer__menu" role="menubar">%3$s</ul>'
							)
						);
					?>
				</div>
				<div class="site-footer__social-wrap">
					<h5>Stay Connected</h5>
					<ul>
						<li><a class="fab fa-facebook-f" href="https://www.facebook.com/ZModular" target="_blank" rel="noopener noreferrer"></a></li>
						<li><a class="fab fa-twitter" href="https://twitter.com/Z_Modular" target="_blank" rel="noopener noreferrer"></a></li>
						<li><a class="fab fa-linkedin-in" href="https://www.linkedin.com/company/z-modular/" target="_blank" rel="noopener noreferrer"></a></li>
						<li><a class="fab fa-youtube" href="https://www.youtube.com/c/zekelmanindustries" target="_blank" rel="noopener noreferrer"></a></li>
						<li><a href="<?php echo home_url(); ?>/our-thinking/articles/"><i class="fas fa-rss"></i></a></li>
					</ul>
				</div>
			</div>
			<hr>
			<div class="site-footer__lower">
				<ul class="site-footer__lower-links">
					<li class="copyright">&copy; <?php echo date("Y") ?> <a href="https://themxgroup.com" target="_blank">The Mx Group</a></li>
					<li><a href="#">Privacy Policy</a></li>
					<li><a href="#">Terms and Conditions</a></li>
				</ul>
			</div>
		</div> <!-- site-footer__inner -->
	</footer> <!-- site-footer -->
	<?php wp_footer(); ?>
	</body>
</html>
