<?php
/* 
* Template Name: Phone Page Template
* Template Post Type: page
*/

get_header();
?>
<main>
    <section class="team-masthead" style="background-image:url(<?php the_field('masthead_image'); ?>)">
        <h1><?php the_field('masthead_title'); ?></h1>
    </section>
    <section class="row">
        <h2><?php the_field('intro_title'); ?></h2>
        <p><?php the_field('intro_text') ?></p>
    </section>
    <section class="row">
        <?php 
            $query = new WP_Query(array('post_type' => 'phone', 'post_per_page' => 10, 'order' => 'asc' ));
            while($query -> have_posts()) : $query-> the_post();
        ?>
        <div>
            <div class="img-holder">
                <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
            </div>
            <h4><?php the_field('name'); ?></h4>
            <h4><?php the_field('title'); ?></h4>
            <a href="<?php the_permalink(); ?>"></a>
        </div>
        <div>
            <figure>
                <div class="img-holder">
                    <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
                </div>
                <figcaption>Name: <?php the_field('name'); ?></figcaption>
                <figcaption>Position: <?php  the_field('title'); ?></figcaption>
            </figure>
        </div>
      <?php 
        wp_reset_postdata();
        endwhile;
        wp_reset_postdata();
      ?>
    </section>
</main>
<?php
get_footer();
?>