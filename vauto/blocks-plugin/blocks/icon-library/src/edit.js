import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import './editor.scss';
import {
	addCard,
	addSubmenu,
	alignCenter,
	alignJustifyAlt,
	alignJustify,
	alignLeft,
	alignNone,
	alignRight,
	archiveTitle,
	archive,
	arrowDown,
	arrowLeft,
	arrowRight,
	arrowUp,
	aspectRatio,
	atSymbol,
	audio,
	backup,
	blockDefault,
	blockTable,
	box,
	brush,
	bug,
	button,
	buttons,
	calendar,
	cancelCircleFilled,
	capturePhoto,
	captureVideo,
	category,
	chartBar,
	check,
	chevronDown,
	chevronLeft,
	chevronRightSmall,
	chevronRight,
	chevronUp,
	classic,
	closeSmall,
	close,
	cloudUpload,
	cloud,
	code,
	cogAlt,
	cog,
	color,
	column,
	columns,
	commentAuthorAvatar,
	commentAuthorName,
	commentContent,
	commentEditLink,
	commentReplyLink,
	comment,
	cover,
	create,
	crop,
	currencyDollar,
	currencyEuro,
	currencyPound,
	customLink,
	customPostType,
	desktop,
	download,
	dragHandle,
	edit,
	external,
	file,
	flipHorizontal,
	flipVertical,
	footer,
	formatBold,
	formatCapitalize,
	formatIndentRTL,
	formatIndent,
	formatItalic,
	formatListBulletsRTL,
	formatListBullets,
	formatListNumberedRTL,
	formatListNumbered,
	formatLowercase,
	formatLtr,
	formatOutdentRTL,
	formatOutdent,
	formatRtl,
	formatStrikethrough,
	formatUnderline,
	formatUppercase,
	fullscreen,
	gallery,
	globe,
	grid,
	group,
	handle,
	header,
	heading,
	helpFilled,
	help,
	home,
	html,
	image,
	inbox,
	info,
	insertAfter,
	insertBefore,
	institution,
	justifyCenter,
	justifyLeft,
	justifyRight,
	justifySpaceBetween,
	key,
	keyboardClose,
	keyboardReturn,
	layout,
	lifesaver,
	lineDashed,
	lineDotted,
	lineSolid,
	linkOff,
	link,
	listView,
	list,
	lock,
	login,
	loop,
	mapMarker,
	mediaAndText,
	media,
	megaphone,
	menu,
	mobile,
	moreHorizontalMobile,
	moreHorizontal,
	moreVertical,
	more,
	moveTo,
	navigation,
	next,
	overlayText,
	pageBreak,
	page,
	pages,
	paragraph,
	payment,
	pencil,
	people,
	percent,
	pin,
	plugins,
	plusCircleFilled,
	plusCircle,
	plus,
	positionCenter,
	positionLeft,
	positionRight,
	postAuthor,
	postCategories,
	postCommentsCount,
	postCommentsForm,
	postComments,
	postContent,
	postDate,
	postExcerpt,
	postFeaturedImage,
	postList,
	postTitle,
	preformatted,
	previous,
	pullLeft,
	pullRight,
	pullquote,
	queryPaginationNext,
	queryPaginationNumbers,
	queryPaginationPrevious,
	queryPagination,
	quote,
	receipt,
	redo,
	removeBug,
	replace,
	reset,
	resizeCornerNE,
	reusableBlock,
	rotateLeft,
	rotateRight,
	rss,
	search,
	separator,
	settings,
	share,
	shield,
	shipping,
	shortcode,
	sidebar,
	siteLogo,
	sparkles,
	stack,
	starEmpty,
	starFilled,
	starHalf,
	store,
	stretchFullWidth,
	stretchWide,
	styles,
	subscript,
	superscript,
	swatch,
	symbolFilled,
	symbol,
	tableColumnAfter,
	tableColumnBefore,
	tableColumnDelete,
	tableRowAfter,
	tableRowBefore,
	tableRowDelete,
	table,
	tablet,
	tag,
	termDescription,
	textColor,
	title,
	tool,
	trashFilled,
	trash,
	trendingDown,
	trendingUp,
	typography,
	undo,
	ungroup,
	update,
	upload,
	verse,
	video,
	warning,
	widget,
	wordpress
} from '@wordpress/icons';

export default function Edit() {
	const blockProps = useBlockProps({
		className: 'icon-library',
	});

	return (
		<section {...useBlockProps(blockProps)}>
			<div className="icon-library__medium-inner">


				<h2>Icon Library</h2>
				<p>This is a visual representation of the icons provided by WordPress.</p>
				<div className="icon-library__grid">
					<figure>
						<Icon icon={addCard} />
						<figcaption>addCard</figcaption>
					</figure>
					<figure>
						<Icon icon={addSubmenu} />
						<figCaption>addSubmenu</figCaption>
					</figure>
					<figure>
						<Icon icon={alignCenter} />
						<figCaption>alignCenter</figCaption>
					</figure>
					<figure>
						<Icon icon={alignJustifyAlt} />
						<figCaption>alignJustifyAlt</figCaption>
					</figure>
					<figure>
						<Icon icon={alignJustify} />
						<figCaption>alignJustify</figCaption>
					</figure>
					<figure>
						<Icon icon={alignLeft} />
						<figCaption>alignLeft</figCaption>
					</figure>
					<figure>
						<Icon icon={alignRight} />
						<figCaption>alignRight</figCaption>
					</figure>
					<figure>
						<Icon icon={archiveTitle} />
						<figCaption>archiveTitle</figCaption>
					</figure>
					<figure>
						<Icon icon={archive} />
						<figCaption>archive</figCaption>
					</figure>
					<figure>
						<Icon icon={arrowDown} />
						<figCaption>arrowDown</figCaption>
					</figure>
					<figure>
						<Icon icon={arrowLeft} />
						<figCaption>arrowLeft</figCaption>
					</figure>
					<figure>
						<Icon icon={arrowRight} />
						<figCaption>arrowRight</figCaption>
					</figure>
					<figure>
						<Icon icon={arrowUp} />
						<figCaption>arrowUp</figCaption>
					</figure>
					<figure>
						<Icon icon={aspectRatio} />
						<figCaption>aspectRatio</figCaption>
					</figure>
					<figure>
						<Icon icon={atSymbol} />
						<figCaption>atSymbol</figCaption>
					</figure>
					<figure>
						<Icon icon={audio} />
						<figCaption>audio</figCaption>
					</figure>
					<figure>
						<Icon icon={backup} />
						<figCaption>backup</figCaption>
					</figure>
					<figure>
						<Icon icon={blockDefault} />
						<figCaption>blockDefault</figCaption>
					</figure>
					<figure>
						<Icon icon={blockTable} />
						<figCaption>blockTable</figCaption>
					</figure>
					<figure>
						<Icon icon={box} />
						<figCaption>box</figCaption>
					</figure>
					<figure>
						<Icon icon={brush} />
						<figCaption>brush</figCaption>
					</figure>
					<figure>
						<Icon icon={bug} />
						<figCaption>bug</figCaption>
					</figure>
					<figure>
						<Icon icon={button} />
						<figCaption>button</figCaption>
					</figure>
					<figure>
						<Icon icon={buttons} />
						<figCaption>buttons</figCaption>
					</figure>
					<figure>
						<Icon icon={calendar} />
						<figCaption>calendar</figCaption>
					</figure>
					<figure>
						<Icon icon={cancelCircleFilled} />
						<figCaption>cancelCircleFilled</figCaption>
					</figure>
					<figure>
						<Icon icon={capturePhoto} />
						<figCaption>capturePhoto</figCaption>
					</figure>
					<figure>
						<Icon icon={captureVideo} />
						<figCaption>captureVideo</figCaption>
					</figure>
					<figure>
						<Icon icon={category} />
						<figCaption>category</figCaption>
					</figure>
					<figure>
						<Icon icon={chartBar} />
						<figCaption>chartBar</figCaption>
					</figure>
					<figure>
						<Icon icon={check} />
						<figCaption>check</figCaption>
					</figure>
					<figure>
						<Icon icon={chevronDown} />
						<figCaption>chevronDown</figCaption>
					</figure>
					<figure>
						<Icon icon={chevronLeft} />
						<figCaption>chevronLeft</figCaption>
					</figure>
					<figure>
						<Icon icon={chevronRightSmall} />
						<figCaption>chevronRightSmall</figCaption>
					</figure>
					<figure>
						<Icon icon={chevronRight} />
						<figCaption>chevronRight</figCaption>
					</figure>
					<figure>
						<Icon icon={chevronUp} />
						<figCaption>chevronUp</figCaption>
					</figure>
					<figure>
						<Icon icon={classic} />
						<figCaption>classic</figCaption>
					</figure>
					<figure>
						<Icon icon={closeSmall} />
						<figCaption>closeSmall</figCaption>
					</figure>
					<figure>
						<Icon icon={close} />
						<figCaption>close</figCaption>
					</figure>
					<figure>
						<Icon icon={cloudUpload} />
						<figCaption>cloudUpload</figCaption>
					</figure>
					<figure>
						<Icon icon={cloud} />
						<figCaption>cloud</figCaption>
					</figure>
					<figure>
						<Icon icon={code} />
						<figCaption>code</figCaption>
					</figure>
					<figure>
						<Icon icon={cogAlt} />
						<figCaption>cogAlt</figCaption>
					</figure>
					<figure>
						<Icon icon={cog} />
						<figCaption>cog</figCaption>
					</figure>
					<figure>
						<Icon icon={column} />
						<figCaption>column</figCaption>
					</figure>
					<figure>
						<Icon icon={columns} />
						<figCaption>columns</figCaption>
					</figure>
					<figure>
						<Icon icon={comment} />
						<figCaption>comment</figCaption>
					</figure>
					<figure>
						<Icon icon={cover} />
						<figCaption>cover</figCaption>
					</figure>
					<figure>
						<Icon icon={create} />
						<figCaption>create</figCaption>
					</figure>
					<figure>
						<Icon icon={crop} />
						<figCaption>crop</figCaption>
					</figure>
					<figure>
						<Icon icon={currencyDollar} />
						<figCaption>currencyDollar</figCaption>
					</figure>
					<figure>
						<Icon icon={currencyEuro} />
						<figCaption>currencyEuro</figCaption>
					</figure>
					<figure>
						<Icon icon={currencyPound} />
						<figCaption>currencyPound</figCaption>
					</figure>
					<figure>
						<Icon icon={customLink} />
						<figCaption>customLink</figCaption>
					</figure>
					<figure>
						<Icon icon={customPostType} />
						<figCaption>customPostType</figCaption>
					</figure>
					<figure>
						<Icon icon={desktop} />
						<figCaption>desktop</figCaption>
					</figure>
					<figure>
						<Icon icon={download} />
						<figCaption>download</figCaption>
					</figure>
					<figure>
						<Icon icon={dragHandle} />
						<figCaption>dragHandle</figCaption>
					</figure>
					<figure>
						<Icon icon={edit} />
						<figCaption>edit</figCaption>
					</figure>
					<figure>
						<Icon icon={external} />
						<figCaption>external</figCaption>
					</figure>
					<figure>
						<Icon icon={file} />
						<figCaption>file</figCaption>
					</figure>
					<figure>
						<Icon icon={flipHorizontal} />
						<figCaption>flipHorizontal</figCaption>
					</figure>
					<figure>
						<Icon icon={flipVertical} />
						<figCaption>flipVertical</figCaption>
					</figure>
					<figure>
						<Icon icon={footer} />
						<figCaption>footer</figCaption>
					</figure>
					<figure>
						<Icon icon={formatBold} />
						<figCaption>formatBold</figCaption>
					</figure>
					<figure>
						<Icon icon={formatCapitalize} />
						<figCaption>formatCapitalize</figCaption>
					</figure>
					<figure>
						<Icon icon={formatIndentRTL} />
						<figCaption>formatIndentRTL</figCaption>
					</figure>
					<figure>
						<Icon icon={formatIndent} />
						<figCaption>formatIndent</figCaption>
					</figure>
					<figure>
						<Icon icon={formatItalic} />
						<figCaption>formatItalic</figCaption>
					</figure>
					<figure>
						<Icon icon={formatListBulletsRTL} />
						<figCaption>formatListBulletsRTL</figCaption>
					</figure>
					<figure>
						<Icon icon={formatListBullets} />
						<figCaption>formatListBullets</figCaption>
					</figure>
					<figure>
						<Icon icon={formatListNumberedRTL} />
						<figCaption>formatListNumberedRTL</figCaption>
					</figure>
					<figure>
						<Icon icon={formatListNumbered} />
						<figCaption>formatListNumbered</figCaption>
					</figure>
					<figure>
						<Icon icon={formatLowercase} />
						<figCaption>formatLowercase</figCaption>
					</figure>
					<figure>
						<Icon icon={formatLtr} />
						<figCaption>formatLtr</figCaption>
					</figure>
					<figure>
						<Icon icon={formatOutdentRTL} />
						<figCaption>formatOutdentRTL</figCaption>
					</figure>
					<figure>
						<Icon icon={formatOutdent} />
						<figCaption>formatOutdent</figCaption>
					</figure>
					<figure>
						<Icon icon={formatRtl} />
						<figCaption>formatRtl</figCaption>
					</figure>
					<figure>
						<Icon icon={formatStrikethrough} />
						<figCaption>formatStrikethrough</figCaption>
					</figure>
					<figure>
						<Icon icon={formatUnderline} />
						<figCaption>formatUnderline</figCaption>
					</figure>
					<figure>
						<Icon icon={formatUppercase} />
						<figCaption>formatUppercase</figCaption>
					</figure>
					<figure>
						<Icon icon={fullscreen} />
						<figCaption>fullscreen</figCaption>
					</figure>
					<figure>
						<Icon icon={gallery} />
						<figCaption>gallery</figCaption>
					</figure>
					<figure>
						<Icon icon={globe} />
						<figCaption>globe</figCaption>
					</figure>
					<figure>
						<Icon icon={grid} />
						<figCaption>grid</figCaption>
					</figure>
					<figure>
						<Icon icon={group} />
						<figCaption>group</figCaption>
					</figure>
					<figure>
						<Icon icon={handle} />
						<figCaption>handle</figCaption>
					</figure>
					<figure>
						<Icon icon={header} />
						<figCaption>header</figCaption>
					</figure>
					<figure>
						<Icon icon={heading} />
						<figCaption>heading</figCaption>
					</figure>
					<figure>
						<Icon icon={helpFilled} />
						<figCaption>helpFilled</figCaption>
					</figure>
					<figure>
						<Icon icon={help} />
						<figCaption>help</figCaption>
					</figure>
					<figure>
						<Icon icon={home} />
						<figCaption>home</figCaption>
					</figure>
					<figure>
						<Icon icon={html} />
						<figCaption>html</figCaption>
					</figure>
					<figure>
						<Icon icon={image} />
						<figCaption>image</figCaption>
					</figure>
					<figure>
						<Icon icon={inbox} />
						<figCaption>inbox</figCaption>
					</figure>
					<figure>
						<Icon icon={info} />
						<figCaption>info</figCaption>
					</figure>
					<figure>
						<Icon icon={insertAfter} />
						<figCaption>insertAfter</figCaption>
					</figure>
					<figure>
						<Icon icon={insertBefore} />
						<figCaption>insertBefore</figCaption>
					</figure>
					<figure>
						<Icon icon={institution} />
						<figCaption>institution</figCaption>
					</figure>
					<figure>
						<Icon icon={justifyCenter} />
						<figCaption>justifyCenter</figCaption>
					</figure>
					<figure>
						<Icon icon={justifyLeft} />
						<figCaption>justifyLeft</figCaption>
					</figure>
					<figure>
						<Icon icon={justifyRight} />
						<figCaption>justifyRight</figCaption>
					</figure>
					<figure>
						<Icon icon={justifySpaceBetween} />
						<figCaption>justifySpaceBetween</figCaption>
					</figure>
					<figure>
						<Icon icon={key} />
						<figCaption>key</figCaption>
					</figure>
					<figure>
						<Icon icon={keyboardClose} />
						<figCaption>keyboardClose</figCaption>
					</figure>
					<figure>
						<Icon icon={keyboardReturn} />
						<figCaption>keyboardReturn</figCaption>
					</figure>
					<figure>
						<Icon icon={layout} />
						<figCaption>layout</figCaption>
					</figure>
					<figure>
						<Icon icon={lifesaver} />
						<figCaption>lifesaver</figCaption>
					</figure>
					<figure>
						<Icon icon={linkOff} />
						<figCaption>linkOff</figCaption>
					</figure>
					<figure>
						<Icon icon={link} />
						<figCaption>link</figCaption>
					</figure>
					<figure>
						<Icon icon={listView} />
						<figCaption>listView</figCaption>
					</figure>
					<figure>
						<Icon icon={list} />
						<figCaption>list</figCaption>
					</figure>
					<figure>
						<Icon icon={lock} />
						<figCaption>lock</figCaption>
					</figure>
					<figure>
						<Icon icon={login} />
						<figCaption>login</figCaption>
					</figure>
					<figure>
						<Icon icon={loop} />
						<figCaption>loop</figCaption>
					</figure>
					<figure>
						<Icon icon={mapMarker} />
						<figCaption>mapMarker</figCaption>
					</figure>
					<figure>
						<Icon icon={mediaAndText} />
						<figCaption>mediaAndText</figCaption>
					</figure>
					<figure>
						<Icon icon={media} />
						<figCaption>media</figCaption>
					</figure>
					<figure>
						<Icon icon={megaphone} />
						<figCaption>megaphone</figCaption>
					</figure>
					<figure>
						<Icon icon={menu} />
						<figCaption>menu</figCaption>
					</figure>
					<figure>
						<Icon icon={mobile} />
						<figCaption>mobile</figCaption>
					</figure>
					<figure>
						<Icon icon={moreHorizontalMobile} />
						<figCaption>moreHorizontalMobile</figCaption>
					</figure>
					<figure>
						<Icon icon={moreHorizontal} />
						<figCaption>moreHorizontal</figCaption>
					</figure>
					<figure>
						<Icon icon={moreVertical} />
						<figCaption>moreVertical</figCaption>
					</figure>
					<figure>
						<Icon icon={more} />
						<figCaption>more</figCaption>
					</figure>
					<figure>
						<Icon icon={moveTo} />
						<figCaption>moveTo</figCaption>
					</figure>
					<figure>
						<Icon icon={navigation} />
						<figCaption>navigation</figCaption>
					</figure>
					<figure>
						<Icon icon={next} />
						<figCaption>next</figCaption>
					</figure>
					<figure>
						<Icon icon={overlayText} />
						<figCaption>overlayText</figCaption>
					</figure>
					<figure>
						<Icon icon={pageBreak} />
						<figCaption>pageBreak</figCaption>
					</figure>
					<figure>
						<Icon icon={page} />
						<figCaption>page</figCaption>
					</figure>
					<figure>
						<Icon icon={pages} />
						<figCaption>pages</figCaption>
					</figure>
					<figure>
						<Icon icon={paragraph} />
						<figCaption>paragraph</figCaption>
					</figure>
					<figure>
						<Icon icon={payment} />
						<figCaption>payment</figCaption>
					</figure>
					<figure>
						<Icon icon={pencil} />
						<figCaption>pencil</figCaption>
					</figure>
					<figure>
						<Icon icon={people} />
						<figCaption>people</figCaption>
					</figure>
					<figure>
						<Icon icon={percent} />
						<figCaption>percent</figCaption>
					</figure>
					<figure>
						<Icon icon={pin} />
						<figCaption>pin</figCaption>
					</figure>
					<figure>
						<Icon icon={plugins} />
						<figCaption>plugins</figCaption>
					</figure>
					<figure>
						<Icon icon={plusCircleFilled} />
						<figCaption>plusCircleFilled</figCaption>
					</figure>
					<figure>
						<Icon icon={plusCircle} />
						<figCaption>plusCircle</figCaption>
					</figure>
					<figure>
						<Icon icon={plus} />
						<figCaption>plus</figCaption>
					</figure>
					<figure>
						<Icon icon={positionCenter} />
						<figCaption>positionCenter</figCaption>
					</figure>
					<figure>
						<Icon icon={positionLeft} />
						<figCaption>positionLeft</figCaption>
					</figure>
					<figure>
						<Icon icon={positionRight} />
						<figCaption>positionRight</figCaption>
					</figure>
					<figure>
						<Icon icon={postAuthor} />
						<figCaption>postAuthor</figCaption>
					</figure>
					<figure>
						<Icon icon={postCategories} />
						<figCaption>postCategories</figCaption>
					</figure>
					<figure>
						<Icon icon={postCommentsCount} />
						<figCaption>postCommentsCount</figCaption>
					</figure>
					<figure>
						<Icon icon={postCommentsForm} />
						<figCaption>postCommentsForm</figCaption>
					</figure>
					<figure>
						<Icon icon={postComments} />
						<figCaption>postComments</figCaption>
					</figure>
					<figure>
						<Icon icon={postContent} />
						<figCaption>postContent</figCaption>
					</figure>
					<figure>
						<Icon icon={postDate} />
						<figCaption>postDate</figCaption>
					</figure>
					<figure>
						<Icon icon={postExcerpt} />
						<figCaption>postExcerpt</figCaption>
					</figure>
					<figure>
						<Icon icon={postFeaturedImage} />
						<figCaption>postFeaturedImage</figCaption>
					</figure>
					<figure>
						<Icon icon={postList} />
						<figCaption>postList</figCaption>
					</figure>
					<figure>
						<Icon icon={postTitle} />
						<figCaption>postTitle</figCaption>
					</figure>
					<figure>
						<Icon icon={preformatted} />
						<figCaption>preformatted</figCaption>
					</figure>
					<figure>
						<Icon icon={previous} />
						<figCaption>previous</figCaption>
					</figure>
					<figure>
						<Icon icon={pullLeft} />
						<figCaption>pullLeft</figCaption>
					</figure>
					<figure>
						<Icon icon={pullRight} />
						<figCaption>pullRight</figCaption>
					</figure>
					<figure>
						<Icon icon={pullquote} />
						<figCaption>pullquote</figCaption>
					</figure>
					<figure>
						<Icon icon={queryPaginationNext} />
						<figCaption>queryPaginationNext</figCaption>
					</figure>
					<figure>
						<Icon icon={queryPaginationNumbers} />
						<figCaption>queryPaginationNumbers</figCaption>
					</figure>
					<figure>
						<Icon icon={queryPaginationPrevious} />
						<figCaption>queryPaginationPrevious</figCaption>
					</figure>
					<figure>
						<Icon icon={queryPagination} />
						<figCaption>queryPagination</figCaption>
					</figure>
					<figure>
						<Icon icon={quote} />
						<figCaption>quote</figCaption>
					</figure>
					<figure>
						<Icon icon={receipt} />
						<figCaption>receipt</figCaption>
					</figure>
					<figure>
						<Icon icon={redo} />
						<figCaption>redo</figCaption>
					</figure>
					<figure>
						<Icon icon={removeBug} />
						<figCaption>removeBug</figCaption>
					</figure>
					<figure>
						<Icon icon={replace} />
						<figCaption>replace</figCaption>
					</figure>
					<figure>
						<Icon icon={resizeCornerNE} />
						<figCaption>resizeCornerNE</figCaption>
					</figure>
					<figure>
						<Icon icon={reusableBlock} />
						<figCaption>reusableBlock</figCaption>
					</figure>
					<figure>
						<Icon icon={rotateLeft} />
						<figCaption>rotateLeft</figCaption>
					</figure>
					<figure>
						<Icon icon={rotateRight} />
						<figCaption>rotateRight</figCaption>
					</figure>
					<figure>
						<Icon icon={rss} />
						<figCaption>rss</figCaption>
					</figure>
					<figure>
						<Icon icon={search} />
						<figCaption>search</figCaption>
					</figure>
					<figure>
						<Icon icon={separator} />
						<figCaption>separator</figCaption>
					</figure>
					<figure>
						<Icon icon={settings} />
						<figCaption>settings</figCaption>
					</figure>
					<figure>
						<Icon icon={share} />
						<figCaption>share</figCaption>
					</figure>
					<figure>
						<Icon icon={shield} />
						<figCaption>shield</figCaption>
					</figure>
					<figure>
						<Icon icon={shipping} />
						<figCaption>shipping</figCaption>
					</figure>
					<figure>
						<Icon icon={shortcode} />
						<figCaption>shortcode</figCaption>
					</figure>
					<figure>
						<Icon icon={sidebar} />
						<figCaption>sidebar</figCaption>
					</figure>
					<figure>
						<Icon icon={siteLogo} />
						<figCaption>siteLogo</figCaption>
					</figure>
					<figure>
						<Icon icon={sparkles} />
						<figCaption>sparkles</figCaption>
					</figure>
					<figure>
						<Icon icon={stack} />
						<figCaption>stack</figCaption>
					</figure>
					<figure>
						<Icon icon={starEmpty} />
						<figCaption>starEmpty</figCaption>
					</figure>
					<figure>
						<Icon icon={starFilled} />
						<figCaption>starFilled</figCaption>
					</figure>
					<figure>
						<Icon icon={starHalf} />
						<figCaption>starHalf</figCaption>
					</figure>
					<figure>
						<Icon icon={store} />
						<figCaption>store</figCaption>
					</figure>
					<figure>
						<Icon icon={stretchFullWidth} />
						<figCaption>stretchFullWidth</figCaption>
					</figure>
					<figure>
						<Icon icon={stretchWide} />
						<figCaption>stretchWide</figCaption>
					</figure>
					<figure>
						<Icon icon={styles} />
						<figCaption>styles</figCaption>
					</figure>
					<figure>
						<Icon icon={subscript} />
						<figCaption>subscript</figCaption>
					</figure>
					<figure>
						<Icon icon={superscript} />
						<figCaption>superscript</figCaption>
					</figure>
					<figure>
						<Icon icon={swatch} />
						<figCaption>swatch</figCaption>
					</figure>
					<figure>
						<Icon icon={symbolFilled} />
						<figCaption>symbolFilled</figCaption>
					</figure>
					<figure>
						<Icon icon={symbol} />
						<figCaption>symbol</figCaption>
					</figure>
					<figure>
						<Icon icon={tableColumnAfter} />
						<figCaption>tableColumnAfter</figCaption>
					</figure>
					<figure>
						<Icon icon={tableColumnBefore} />
						<figCaption>tableColumnBefore</figCaption>
					</figure>
					<figure>
						<Icon icon={tableColumnDelete} />
						<figCaption>tableColumnDelete</figCaption>
					</figure>
					<figure>
						<Icon icon={tableRowAfter} />
						<figCaption>tableRowAfter</figCaption>
					</figure>
					<figure>
						<Icon icon={tableRowBefore} />
						<figCaption>tableRowBefore</figCaption>
					</figure>
					<figure>
						<Icon icon={tableRowDelete} />
						<figCaption>tableRowDelete</figCaption>
					</figure>
					<figure>
						<Icon icon={table} />
						<figCaption>table</figCaption>
					</figure>
					<figure>
						<Icon icon={tablet} />
						<figCaption>tablet</figCaption>
					</figure>
					<figure>
						<Icon icon={tag} />
						<figCaption>tag</figCaption>
					</figure>
					<figure>
						<Icon icon={termDescription} />
						<figCaption>termDescription</figCaption>
					</figure>
					<figure>
						<Icon icon={textColor} />
						<figCaption>textColor</figCaption>
					</figure>
					<figure>
						<Icon icon={title} />
						<figCaption>title</figCaption>
					</figure>
					<figure>
						<Icon icon={tool} />
						<figCaption>tool</figCaption>
					</figure>
					<figure>
						<Icon icon={trashFilled} />
						<figCaption>trashFilled</figCaption>
					</figure>
					<figure>
						<Icon icon={trash} />
						<figCaption>trash</figCaption>
					</figure>
					<figure>
						<Icon icon={trendingDown} />
						<figCaption>trendingDown</figCaption>
					</figure>
					<figure>
						<Icon icon={trendingUp} />
						<figCaption>trendingUp</figCaption>
					</figure>
					<figure>
						<Icon icon={typography} />
						<figCaption>typography</figCaption>
					</figure>
					<figure>
						<Icon icon={undo} />
						<figCaption>undo</figCaption>
					</figure>
					<figure>
						<Icon icon={ungroup} />
						<figCaption>ungroup</figCaption>
					</figure>
					<figure>
						<Icon icon={update} />
						<figCaption>update</figCaption>
					</figure>
					<figure>
						<Icon icon={upload} />
						<figCaption>upload</figCaption>
					</figure>
					<figure>
						<Icon icon={verse} />
						<figCaption>verse</figCaption>
					</figure>
					<figure>
						<Icon icon={video} />
						<figCaption>video</figCaption>
					</figure>
					<figure>
						<Icon icon={warning} />
						<figCaption>warning</figCaption>
					</figure>
					<figure>
						<Icon icon={widget} />
						<figCaption>widget</figCaption>
					</figure>
					<figure>
						<Icon icon={wordpress} />
						<figCaption>wordpress</figCaption>
					</figure>
				</div>
			</div>
		</section>
	);
}
