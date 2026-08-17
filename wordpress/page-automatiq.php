<?php
/**
 * Template Name: AutomatiQ Landing Page
 * Description: Full-page React landing page for AutomatiQ (AI Automation Agency).
 *              Upload the built assets to wp-content/themes/<your-theme>/automatiq/
 *              then create a WordPress page and assign it this template.
 *
 * Setup steps:
 *   1. Run `npm run build` in the project (produces the dist/ folder).
 *   2. Copy these files into your active theme under an `automatiq/` folder:
 *        dist/assets/index-*.css  -> automatiq/assets/
 *        dist/assets/index-*.js   -> automatiq/assets/
 *        public/favicon.svg        -> automatiq/
 *        public/og-image.svg       -> automatiq/
 *        public/site.webmanifest   -> automatiq/
 *        public/robots.txt         -> automatiq/
 *        public/sitemap.xml        -> automatiq/
 *   3. Place this file (page-automatiq.php) in your active theme folder.
 *   4. In WordPress admin: Pages → Add New → assign the "AutomatiQ Landing Page"
 *      template → Publish. Visit the page.
 *
 * IMPORTANT: replace https://automatiq.ai below with your real domain once live,
 * and update the SAME_AS social links to your real profiles.
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// Base URL where the automatiq assets live inside the active theme.
$aq_base = get_stylesheet_directory_uri() . '/automatiq';
// Server path used to auto-detect hashed filenames with glob().
$aq_dir  = get_stylesheet_directory() . '/automatiq';

/**
 * Resolve the hashed build filename for a given extension.
 * Falls back to the first matching file in the assets folder.
 */
function aq_resolve_asset( $dir, $ext ) {
	$files = glob( trailingslashit( $dir ) . 'assets/index-*.' . $ext );
	return ( $files && isset( $files[0] ) ) ? basename( $files[0] ) : null;
}

$aq_css = aq_resolve_asset( $aq_dir, 'css' );
$aq_js  = aq_resolve_asset( $aq_dir, 'js'  );

// Enqueue scripts and styles on the front end only.
add_action( 'wp_enqueue_scripts', function() use ( $aq_base, $aq_css, $aq_js ) {
	if ( $aq_css ) {
		wp_enqueue_style( 'automatiq-app', $aq_base . '/assets/' . $aq_css, array(), null );
	}
	if ( $aq_js ) {
		wp_enqueue_script( 'automatiq-app', $aq_base . '/assets/' . $aq_js, array(), null, true );
	}
	// The built JS is an ES module; mark it so browsers load it correctly.
	add_filter( 'script_loader_tag', function( $tag, $handle ) {
		if ( 'automatiq-app' === $handle ) {
			$tag = str_replace( ' src=', ' type="module" src=', $tag );
		}
		return $tag;
	}, 10, 2 );
} );

/**
 * Inject all SEO meta tags, Open Graph, Twitter cards, favicons,
 * web manifest, fonts, and JSON-LD structured data into <head>.
 */
add_action( 'wp_head', function() use ( $aq_base ) {
	$site_url = 'https://automatiq.ai'; // <-- Replace with your real domain.

	$meta = array(
		'<meta charset="UTF-8" />',
		'<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
		'<meta name="title" content="AutomatiQ — AI Automation Agency | Chatbots, Calling & WhatsApp Agents, Workflow Automation" />',
		'<meta name="description" content="AutomatiQ is an AI automation agency building AI chatbots, AI calling agents, WhatsApp agents, and workflow automation (n8n, Zapier, Make) that save your team thousands of hours. Book a free call." />',
		'<meta name="keywords" content="AI automation agency, AI chatbots, AI calling agents, WhatsApp agents, AI agents, workflow automation, n8n, Zapier, Make, business process automation, lead generation automation, custom AI integrations" />',
		'<meta name="author" content="AutomatiQ" />',
		'<meta name="robots" content="index, follow, max-image-preview:large" />',
		'<meta name="theme-color" content="#0a0b1e" />',
		'<link rel="canonical" href="' . esc_url( $site_url ) . '/" />',

		// Icons & manifest
		'<link rel="icon" type="image/svg+xml" href="' . esc_url( $aq_base ) . '/favicon.svg" />',
		'<link rel="apple-touch-icon" href="' . esc_url( $aq_base ) . '/favicon.svg" />',
		'<link rel="manifest" href="' . esc_url( $aq_base ) . '/site.webmanifest" />',

		// Open Graph
		'<meta property="og:type" content="website" />',
		'<meta property="og:url" content="' . esc_url( $site_url ) . '/" />',
		'<meta property="og:title" content="AutomatiQ — AI Automation Agency | Chatbots, Calling & WhatsApp Agents, Workflow Automation" />',
		'<meta property="og:description" content="AI chatbots, calling agents, WhatsApp agents, and workflow automation that save your team thousands of hours. Book a free call." />',
		'<meta property="og:image" content="' . esc_url( $aq_base ) . '/og-image.svg" />',
		'<meta property="og:image:width" content="1200" />',
		'<meta property="og:image:height" content="630" />',
		'<meta property="og:site_name" content="AutomatiQ" />',
		'<meta property="og:locale" content="en_US" />',

		// Twitter / X
		'<meta name="twitter:card" content="summary_large_image" />',
		'<meta name="twitter:url" content="' . esc_url( $site_url ) . '/" />',
		'<meta name="twitter:title" content="AutomatiQ — AI Automation Agency | Chatbots, Calling & WhatsApp Agents, Workflow Automation" />',
		'<meta name="twitter:description" content="AI chatbots, calling agents, WhatsApp agents, and workflow automation that save your team thousands of hours. Book a free call." />',
		'<meta name="twitter:image" content="' . esc_url( $aq_base ) . '/og-image.svg" />',

		// Fonts
		'<link rel="preconnect" href="https://fonts.googleapis.com" />',
		'<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />',
		'<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />',
	);

	foreach ( $meta as $tag ) {
		echo $tag . "\n";
	}

	// JSON-LD structured data: Organization + ProfessionalService + FAQPage.
	$jsonld = array(
		'@context' => 'https://schema.org',
		'@graph'   => array(
			array(
				'@type'       => 'Organization',
				'@id'         => $site_url . '/#organization',
				'name'        => 'AutomatiQ',
				'url'         => $site_url . '/',
				'logo'        => $aq_base . '/favicon.svg',
				'description' => 'AI automation agency building AI chatbots, AI calling agents, WhatsApp agents, and workflow automation that save teams thousands of hours.',
				'sameAs'      => array(
					'https://linkedin.com',
					'https://twitter.com',
					'https://github.com',
				),
			),
			array(
				'@type'        => 'ProfessionalService',
				'@id'          => $site_url . '/#service',
				'name'         => 'AutomatiQ — AI Automation Agency',
				'url'          => $site_url . '/',
				'image'        => $aq_base . '/og-image.svg',
				'description'  => 'AutomatiQ designs and deploys AI chatbots, AI calling agents, WhatsApp agents, autonomous AI agents, workflow automation (n8n, Zapier, Make), business process automation, lead generation automation, and custom AI integrations.',
				'provider'     => array( '@id' => $site_url . '/#organization' ),
				'areaServed'   => 'Worldwide',
				'serviceType'  => 'AI Automation',
				'hasOfferCatalog' => array(
					'@type'        => 'OfferCatalog',
					'name'         => 'AI Automation Services',
					'itemListElement' => array(
						array( '@type' => 'Offer', 'itemOffered' => array( '@type' => 'Service', 'name' => 'AI Chatbots' ) ),
						array( '@type' => 'Offer', 'itemOffered' => array( '@type' => 'Service', 'name' => 'AI Calling Agents' ) ),
						array( '@type' => 'Offer', 'itemOffered' => array( '@type' => 'Service', 'name' => 'WhatsApp Agents' ) ),
						array( '@type' => 'Offer', 'itemOffered' => array( '@type' => 'Service', 'name' => 'Workflow Automation (n8n, Zapier, Make)' ) ),
						array( '@type' => 'Offer', 'itemOffered' => array( '@type' => 'Service', 'name' => 'Business Process Automation' ) ),
						array( '@type' => 'Offer', 'itemOffered' => array( '@type' => 'Service', 'name' => 'AI Agents' ) ),
						array( '@type' => 'Offer', 'itemOffered' => array( '@type' => 'Service', 'name' => 'Lead Generation Automation' ) ),
						array( '@type' => 'Offer', 'itemOffered' => array( '@type' => 'Service', 'name' => 'Custom AI Integrations' ) ),
					),
				),
			),
			array(
				'@type'     => 'FAQPage',
				'@id'       => $site_url . '/#faq',
				'mainEntity' => array(
					array(
						'@type'          => 'Question',
						'name'           => 'What does an AI automation agency do?',
						'acceptedAnswer' => array(
							'@type' => 'Answer',
							'text'  => 'An AI automation agency like AutomatiQ designs, builds, and maintains AI chatbots, AI calling agents, WhatsApp agents, autonomous AI agents, and workflow automations that handle repetitive tasks so your team can focus on growth. We connect your tools with n8n, Zapier, and Make and embed custom AI into your existing systems.',
						),
					),
					array(
						'@type'          => 'Question',
						'name'           => 'How much time can automation save my business?',
						'acceptedAnswer' => array(
							'@type' => 'Answer',
							'text'  => 'Most clients save thousands of hours per month. Our AI chatbots deflect up to 68% of support tickets, our lead-generation automation books 3x more qualified meetings without an SDR team, and our workflow automations handle 90%+ of order and reporting processes automatically. Every automation is tied to a measurable outcome like hours saved, cost reduced, or conversion lifted.',
						),
					),
					array(
						'@type'          => 'Question',
						'name'           => 'What tools do you use for workflow automation?',
						'acceptedAnswer' => array(
							'@type' => 'Answer',
							'text'  => 'We build workflow automation with n8n, Zapier, and Make, connecting 500+ apps including CRMs, spreadsheets, inboxes, Stripe, Shopify, and Slack. For deeper needs we build custom AI integrations and private RAG systems on top of your existing tools and databases.',
						),
					),
					array(
						'@type'          => 'Question',
						'name'           => 'How long does it take to launch an automation?',
						'acceptedAnswer' => array(
							'@type' => 'Answer',
							'text'  => 'Most automations go live in 1 to 3 weeks. We work in sprints with live previews so you see progress from day one, and we deploy with monitoring, retries, and alerts so your automations keep running reliably.',
						),
					),
					array(
						'@type'          => 'Question',
						'name'           => 'Do you build AI calling agents and WhatsApp agents?',
						'acceptedAnswer' => array(
							'@type' => 'Answer',
							'text'  => 'Yes. AutomatiQ builds AI calling agents that handle outbound and inbound phone calls, and WhatsApp agents that chat with customers 24/7 to qualify leads, answer questions, and book appointments directly inside WhatsApp.',
						),
					),
				),
			),
		),
	);

	echo '<script type="application/ld+json">' . wp_json_encode( $jsonld ) . '</script>' . "\n";
}, 1 );

/**
 * Strip WordPress admin bar and default theme margins so the React app
 * owns the full viewport.
 */
add_filter( 'show_admin_bar', '__return_false' );
add_action( 'wp_head', function() {
	echo '<style>html,body{margin:0;padding:0;background:#05060f;}#wpadminbar{display:none !important;}</style>' . "\n";
}, 99 );

// Render the page. We deliberately do NOT call get_header()/get_footer()
// so the React app controls the entire document body.
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<?php wp_head(); ?>
</head>
<body>
	<div id="root"></div>
	<?php wp_footer(); ?>
</body>
</html>
<?php exit; ?>
