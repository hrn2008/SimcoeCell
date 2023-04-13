<?php
    /**
     * Template Name: Homepage (Major Project)
     * Template Post Type: Page, Post
     */
    get_header();
?>

<!-- adding content advanced custom fields-->
    <main>
        <section class="masthead" style="background-image:url('<?php the_field("masthead_image"); ?>')">
            <div>
                <h1><?php the_field("tagline"); ?></h1>
                <h2><?php the_field("subtagline"); ?></h2>
            </div>
        </section>
        
        <section class="acf-row-one">
            <h2><?php the_field("news_title"); ?></h2>
            <?php the_field("latest_news"); ?>  
        </section>

        <!-- showing the featured products  -->
        <div class="row">
            <div id="homepage-widget-area">
                <?php
                $featured_products = get_field('featured');
                // var_dump($featured_products); 
                // echo $featured_products;
                if ($featured_products == 'On') {
                    // echo "it's on";
                    dynamic_sidebar('homepage-widget-area');
                } else if ($featured_products == 'Off') {
                    echo '';
                }
                ?>
            </div>
        </div>
        
        <section class="acf-row-one">
            <h2><?php the_field("row_one_title"); ?></h2>      
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <?php the_field("row_one_content"); ?>
                </div>
                <div class="col-sm-12 col-md-6">
                    <img class="rowimage" src=<?php echo the_field("row_one_image"); ?> alt='<?php echo the_field("image_alt_text")?>' /> 
                </div>
            </div>
        </section>
        
        
      
        </main>
    <?php
                        
    get_footer();
?>

