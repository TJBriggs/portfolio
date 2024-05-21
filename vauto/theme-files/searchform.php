<form role="search" method="get" class="search-form" action="<?php echo home_url( '/search-results/' ); ?>">
	<input type="hidden" name="cx" value="014906514237337134733:uevjgkjtcyc" autocomplete="off">
	<label class="search-form__input">
		<span class="screen-reader-text"><?php echo _x( 'Search for:', 'label' ) ?></span>
		<input type="search" class="search-field"
			placeholder="<?php echo esc_attr_x( 'Search', 'placeholder' ) ?>"
			value="<?php echo get_search_query() ?>" name="q"
			title="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>" />
			<div class="search-trigger">
				<i class="fa fa-search" aria-hidden="true"></i>
			</div>
			<input type="submit" class="search-submit" value=""/>
	</label>
</form>
