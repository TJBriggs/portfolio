/**
 *
 * Uberflip Embed
 *
 */
(function ($) {
	/*eslint-disable */
	'use strict';

	const $uberflipEmbed = $('.uberflip-embed');

	if ($uberflipEmbed.length) {
		$uberflipEmbed.each(function () {
			const $this = $(this);
			const $uberFlipID = $this.data('uberflip-id');
			const $collectionID = $this.data('collection-id');

			window._ufHubConfig = window._ufHubConfig || [];
			window._ufHubConfig.push({
				'containers': { 'app': '#' + $uberFlipID },
				'collection': $collectionID,
				'openLink': function (url) {
					window.top.location.href = url;
				},
				'lazyloader': {
					'itemDisplayLimit': 20,
					'maxTilesPerRow': 3,
					'maxItemsTotal': 3
				},
				'tileSize': 'small',
				'enablePageTracking': false,
				'baseUrl': 'https://www.vauto.com/learning-center/',
				'filesUrl': 'https://www.vauto.com/learning-center/',
				'generatedAtUTC': '2021-02-24 03:51:15',
			});

			(function (d, t, u) {
				function load() {
					var s = d.createElement(t); s.src = u; d.body.appendChild(s);
				}
				if (window.addEventListener) {
					window.addEventListener('load', load, false);
				} else if (window.attachEvent) {
					window.attachEvent('onload', load);
				} else {
					window.onload = load;
				}
			}(document, 'script', 'https://www.vauto.com/learning-center/hubsFront/embed_collection'));

			function createElem(elemType, elemOptions, elemText) {
				const newElement = document.createElement(elemType);
				if (elemOptions !== undefined) {
					Object.keys(elemOptions).forEach((attr) => {
						newElement.setAttribute(attr, elemOptions[attr]);
					});
				}
				if (elemText !== undefined) {
					newElement.innerText = elemText;
				}
				return newElement;
			}

			const handleDate = () => {
				const timestampContainer = document.querySelectorAll('.uf-tile-friendly-timestamp');
				if (timestampContainer) {
					timestampContainer.forEach((timestamp) => {
						const timestampdate = timestamp.querySelector('.js-readable-timestamp');

						if (timestamp.childNodes[2]) {
							//find "ago" and remove it
							timestamp.childNodes[2].remove();
						}

						//get date
						const date = timestampdate.getAttribute('datetime').split('T')[0];

						//split date into segments
						const year = date.split('-')[0];
						const month = date.split('-')[1];
						const day = date.split('-')[2];

						//reformat date
						const reformattedDate = `${month}/${day}/${year}`;

						// set date as new reformatted date
						timestampdate.innerHTML = reformattedDate;
					});
				}
			};

			window.obData = {};

			window.obData.frontEndTaggingContent = {
				'assessment': 'Assessment',
				'blog post': 'Blog Post',
				'case study': 'Case Study',
				'cheat sheet': 'Cheat Sheet',
				'ebook': 'Ebook',
				'infographic': 'Infographic',
				'interactive tool': 'Interactive Tool',
				'podcast': 'Podcast',
				'video': 'Video',
				'webinar': 'Webinar',
			};

			window.obData.frontEndTaggingDepartment = {
				'auction buying': 'Auction Buying',
				'new car': 'New Car',
				'reconditioning': 'Reconditioning',
				'used car': 'Used Car',
			};

			const frontEndTagging = () => {

				// - Function to create the front-end label
				const createFrontEndLabel = (label, tag, listType) => {
					// -- Create a constant and set it to the passed tag value, replacing spaces with dashes
					const className = tag.replace(/\s/g, '-').toLowerCase();

					// -- Create a container for the label, assign the appropriate class names, and include the passed label text value
					const labelContainer = createElem('span', {
						class: `${className} ob-custom-label`,
					}, label);

					// -- Check to see if there's a listType value to denote where the tag goes; if so, add the appropriate class
					if (listType === 'department') {
						labelContainer.classList.add('ob-custom-label-department');
					} else if (listType === 'content') {
						labelContainer.classList.add('ob-custom-label-content');
					}

					// -- Return the label container
					return labelContainer;
				};

				// - Function append the front-end label to the container
				const appendFrontEndLabel = (tile, label) => {
					// -- Set a constant to reference the front-end label container
					const container = tile.querySelector('.ob-custom-label-container');

					// -- Append the label to the container
					container.appendChild(label);
				};

				// - Function to append the front-end tag container to the tile
				const appendFrontEndContainer = (tile) => {
					// -- Set a constant to reference the tile title element
					const title = tile.querySelector('.uf-tile-title');

					// -- Create a div element to serve as the tag container
					const tagContainer = document.createElement('div');

					// -- Add the class to the div
					tagContainer.classList.add('ob-custom-label-container');

					// -- Insert the div before the title element
					title.parentNode.insertBefore(tagContainer, title);
				};

				// - Function to apply the front-end tags
				const applyFrontEndTags = (taggedTiles, frontEndTagsContent, frontEndTagsDepartment) => {
					// -- Define a variable to track the tag list type
					let listType;

					// -- Loop through the tagged tiles
					taggedTiles.forEach((tile) => {

						// --- Check for the presence of the "ob-custom-tag" class, which indicates that the tile has already been processed
						if (!tile.classList.contains('ob-custom-tag')) {

							// ---- Append the front-end tile container to the tile
							appendFrontEndContainer(tile);

							// ---- Define an array to hold the tags applied to the tile
							const normalizedTileTags = tile.dataset.tags.toLowerCase().split(',');
							// ---- Loop through the "department" front-end tags and check if any apply
							for (const tag in frontEndTagsDepartment) {
								listType = 'department';

								// » Normalize the tag by changing it to lowercase
								const normalizedFrontEndTag = tag.toLowerCase();

								// » If the tag is in the list of tags
								if (normalizedTileTags.includes(normalizedFrontEndTag)) {
									// »» Create the front-end label
									const frontEndLabel = createFrontEndLabel(frontEndTagsDepartment[tag], tag, listType);

									// »» Append the front-end label
									appendFrontEndLabel(tile, frontEndLabel);
									break;
								}
							}

							// ---- Loop through the "content" front-end tags and check if any apply
							for (const tag in frontEndTagsContent) {
								listType = 'content';

								// » Normalize the tag by changing it to lowercase
								const normalizedFrontEndTag = tag.toLowerCase();

								// » If the tag is in the list of tags
								if (normalizedTileTags.includes(normalizedFrontEndTag)) {
									// »» Create the front-end label
									const frontEndLabel = createFrontEndLabel(frontEndTagsContent[tag], tag, listType);

									// »» Append the front-end label
									appendFrontEndLabel(tile, frontEndLabel);

									// »» Apply a class for targeting the custom content type icon
									switch (tag) {
										case 'assessment':
											tile.classList.add('ob-assessment');
											break;
										case 'blog post':
											tile.classList.add('ob-article');
											break;
										case 'calculator':
											tile.classList.add('ob-calculator');
											break;
										case 'case study':
											tile.classList.add('ob-case-study');
											break;
										case 'cheat sheet':
											tile.classList.add('ob-cheat-sheet');
											break;
										case 'ebook':
											tile.classList.add('ob-ebook');
											break;
										case 'infographic':
											tile.classList.add('ob-infographic');
											break;
										case 'interactive tool':
											tile.classList.add('ob-interactive-tool');
											break;
										case 'podcast':
											tile.classList.add('ob-podcast');
											break;
										case 'video':
										case 'webinar':
											tile.classList.add('ob-video');
											break;
										default:
											break;
									}

									break;
								}

							}

							// ---- Check to see if there's a "length of time" tag applied to the tile
							const lengthOfTimeTagIndex = normalizedTileTags.findIndex((ele) => ele.includes('minute'));

							// » If so...
							if (lengthOfTimeTagIndex !== -1) {

								// »» Get the tag from the tile tags array using the located index value
								const lengthOfTimeTag = normalizedTileTags[lengthOfTimeTagIndex];

								// »» Set the text of the CTA label to the found "length of time" text
								tile.querySelector('.uf-tile-content-label-text span').innerText = lengthOfTimeTag;
							}

							// ---- Check to see if the tile is "featured"
							if (tile.classList.contains('uf-tile-featured')) {
								// » Create the featured banner div
								const featuredBanner = createElem('div', {
									class: 'ob-featured-tile-banner'
								},
									'Featured');

								// » Append the banner div to the tile
								tile.insertAdjacentElement('afterbegin', featuredBanner);

								// » Add class to prevent re-processing
								tile.classList.add('ob-featured-tile');
							}

							// ---- Check to see if there's a "from Cox Auto" tag applied to the tile
							const coxAutoIndex = normalizedTileTags.findIndex((ele) => ele.includes('cox automotive'));

							if (coxAutoIndex !== -1) {
								// » Create the banner div
								const fromCoxBanner = createElem('div', {
									class: 'ob-from-cox-banner',
								}, 'From Cox Automotive');

								if (tile.classList.contains('ob-featured-tile')) {
									fromCoxBanner.setAttribute('style', 'top: 36px;');
								}

								// » Append the banner div to the tile
								tile.insertAdjacentElement('afterbegin', fromCoxBanner);

								// » Add class to prevent re-processing
								tile.classList.add('ob-from-cox-auto');
							}

							// ---- Add class to prevent re-processing
							tile.classList.add('ob-custom-tag');
						}
					});
				};

				// - Function to get the tags from the tile
				const getTags = () => {
					// -- Get the lists of available tags from the obData object
					const frontEndTagsContent = window.obData.frontEndTaggingContent;
					const frontEndTagsDepartment = window.obData.frontEndTaggingDepartment;

					// -- Create a reference array for all of the tags on the page
					const tiles = [...document.querySelectorAll('.uf-tile-wrapper:not(.uf-loading-spinner-tile-wrapper)')];

					// -- Create a filtered reference array for tiles that have tags applied
					const taggedTiles = tiles.filter((tile) => tile.dataset.tags);

					// -- If there are tagged tiles...
					if (taggedTiles) {
						// --- Apply front-end tags to those tiles
						applyFrontEndTags(taggedTiles, frontEndTagsContent, frontEndTagsDepartment);
					}
				};

				// - Perform the getTags function
				getTags();
			};

			function handleEpisodeTags() {
				const createFrontEndLabel = (label, tag) => {
					const className = tag.replace(/\s/g, '-').toLowerCase();

					const labelContainer = document.createElement('span');
					const labelText = document.createTextNode(label);
					labelContainer.appendChild(labelText);
					labelContainer.classList.add(className);
					labelContainer.classList.add('ob-episode-label');
					return labelContainer;
				};

				const appendFrontEndLabel = (tile, label) => {
					const container = tile.querySelector('.ob-episode-label-container');
					container.appendChild(label);
				};

				const appendFrontEndContainer = (tile) => {
					// const title = tile.querySelector('.uf-tile-title');
					// console.log(tile);
					const tileCopy = tile.querySelector('.uf-tile-copy');
					const tagContainer = document.createElement('div');
					tagContainer.classList.add('ob-episode-label-container');
					// ufTile.parentNode.insertBefore(tagContainer, ufTile);
					tileCopy.insertAdjacentElement('afterbegin', tagContainer);
				};

				const applyFrontEndTags = (taggedTiles, frontEndTags) => {
					taggedTiles.forEach((tile) => {
						if (!tile.classList.contains('ob-episode-tag')) {
							appendFrontEndContainer(tile);
							const normalizedTileTags = tile.dataset.tags.toLowerCase().split(',');

							for (const tag in frontEndTags) {
								const normalizedFrontEndTag = tag.toLowerCase();

								if (normalizedTileTags.includes(normalizedFrontEndTag)) {
									const frontEndLabel = createFrontEndLabel(frontEndTags[tag], tag);
									appendFrontEndLabel(tile, frontEndLabel);
									// Add class to prevent re-processing
									tile.classList.add('ob-episode-tag');
									break;
								}
							}
						}
					});
				};

				const getTags = () => {
					// List of available tags comes from an object on the window that is set in the back of the hub
					const frontEndTags = window.obData.episodeTags;

					const tiles = [
						...document.querySelectorAll('.uf-tile-wrapper:not(.uf-loading-spinner-tile-wrapper)'),
					];
					const taggedTiles = tiles.filter((tile) => tile.dataset.tags);
					if (taggedTiles) {

						applyFrontEndTags(taggedTiles, frontEndTags);
					}
				};

				getTags();
			}


			window._ufHubConfig.forEach(function (item) {
				var streamId = item.collection;
				document.addEventListener(
					`uberflip.initalEmbedTilesLoaded-${streamId}`,
					function (e) {
						var elm = document.getElementsByTagName('li');
						var length = elm.length;
						for (var i = 0; i < length; i++) {
							elm[i].className = elm[i].className + " ob-ebook";
						}
						// handleTopTags();
						handleDate();
						frontEndTagging();
					}
				);
			});
		});
	}
	/*eslint-enable */
})(jQuery);
