<?php
	$page_id = 719;
?>
<article class="cta-newsletter cta-newsletter__blog main-torso__module">
	<div class="cta-newsletter__inner">
		<div class="cta-newsletter__main-wrap">
			<div class="cta-newsletter__text-wrap">
				<div class="cta-newsletter__text">
					<h3><?php the_field('section_title', $page_id); ?></h3>
					<div class="cta-newsletter__blurb"><?php the_field('paragraph_text', $page_id); ?></div>
				</div>
			</div>
			<div class="cta-newsletter__form-wrap">
				<div class="cta-newsletter__form">
					<?php
						$form_id = get_field('form_id', $page_id);
						echo do_shortcode('[gravityform id=' . $form_id . ' title="false" description="false" tabindex="50"]');
					?>
				</div>
			</div>
		</div>
	</div>
</article>
