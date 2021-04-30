/**
 *
 * Customizer Control Scripts
 *
 */

(function () {
	wp.customize.bind('ready', function () {
		wp.customize('header_layout', function (setting) {
			wp.customize.control('utility_bg_color', function (control) {
				/**
				 *
				 * Check Visibility
				 *
				 */
				const visibility = function () {
					if (setting.get() === 'layout-1' || setting.get() === 'layout-3') {
						control.container.css('display', 'inline-block');
					} else {
						control.container.css('display', 'none');
					}
				};
				visibility();
				setting.bind(visibility);
			});

			wp.customize.control('utility_nav_color', function (control) {
				/**
				 *
				 * Check Visibility
				 *
				 */
				const visibility = function () {
					if (setting.get() === 'layout-1' || setting.get() === 'layout-3') {
						control.container.css('display', 'inline-block');
					} else {
						control.container.css('display', 'none');
					}
				};
				visibility();
				setting.bind(visibility);
			});

			wp.customize.control('button_toggle', function (control) {
				/**
				 *
				 * Check Visibility
				 *
				 */
				const visibility = function () {
					if (setting.get() === 'default' || setting.get() === 'layout-1') {
						control.container.css('display', 'inline-block');
					} else {
						control.container.css('display', 'none');
					}
				};
				visibility();
				setting.bind(visibility);
			});
		});

		wp.customize('button_toggle', function (setting) {
			wp.customize.control('button_bg_color', function (control) {
				/**
				 *
				 * Check Visibility
				 *
				 */
				const visibility = function () {
					if (setting.get() === 1 || setting.get() === true) {
						control.container.css('display', 'inline-block');
					} else {
						control.container.css('display', 'none');
					}
				};
				visibility();
				setting.bind(visibility);
			});

			wp.customize.control('button_text_color', function (control) {
				/**
				 *
				 * Check Visibility
				 *
				 */
				const visibility = function () {
					if (setting.get() === 1 || setting.get() === true) {
						control.container.css('display', 'inline-block');
					} else {
						control.container.css('display', 'none');
					}
				};
				visibility();
				setting.bind(visibility);
			});
		});
	});
})();
