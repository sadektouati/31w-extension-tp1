<?php
/**
 * Plugin Name: Caroussel
 * Author: Saddek Touati
 * Description: Carrousel d'image créé à partir d'une galerie
 * Plugin URI: https://github.com/sadektouati/31w-extension-tp1
 */

function carrousel_31w_enqueue()
{
    $version_css = filemtime(plugin_dir_path(__FILE__) ."style.css");
    $version_js =  filemtime(plugin_dir_path(__FILE__) ."script/carrousel.js");
    // var_dump(__FILE__); die();

    wp_enqueue_style('carrousel_31w_css',
                     plugin_dir_url(__FILE__) . "style.css", 
                     array(), 
                     $version_css);

    wp_enqueue_script('carrousel_31w_js',
                    plugin_dir_url(__FILE__) . "script/carrousel.js",
                    array(), 
                    $version_js,
                    true);
}
add_action('wp_enqueue_scripts', "carrousel_31w_enqueue");



function genere_carrousel(){
    ///////////////////////////////HTML
    $contenu = '<div class="carrousel">';
    $contenu .= '<label class=carrousel__gauche><</label><label class=carrousel__droite>></label>';
    $contenu .= '<button class="carrousel__fermeture">X</button>';
    $contenu .= '<figure class="carrousel__figure"></figure>';
    $contenu .= '<form class="carrousel__radio"></form>';
    $contenu .= '</div><!-- fin du caroussel -->';

    return $contenu;

}

add_shortcode('carrousel', 'genere_carrousel');