<?php
/**
 * Header  of assignment one
 * In here we display all of the <head> section
 */
?>
<!doctype html>
<html<?php language_attributes(); ?>>
	<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<?php wp_head(); ?>
	<!-- add our custom css file-->
	<link rel="stylesheet" href="<?php echo esc_url(home_url('wp-content/themes/project/assets/css/project-style.css'))?>">
	<!-- add our custom font -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Besley:wght@500&family=Chewy&display=swap" rel="stylesheet">
	</head>
	<body <?php body_class(); ?>>
	<header class="nav_header">
		<div>
			<a href="<?php echo esc_url( home_url() )?>">
				<img src="<?php echo esc_url( home_url('wp-content/uploads/2023/04/logo-resze-removebg-preview.png') ) ?>" alt="header logo">
			</a>
		</div>
		<nav>
			<?php
				wp_nav_menu( array(
					'menu' => 'main',
					'theme_location' => '',
					'depth' => 2,
					'fallback_cb' => false
				));
			?>
		</nav>
	</header>
