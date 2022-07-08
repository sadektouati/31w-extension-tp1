/**
 * Fonction IIFE qui permet de contrôler l'affichage du carrousel
 * Auteur : Eddy Martin
 * Date de dernière modification : 6 juillet 2022
 * 
 */


 (function(){
    console.log('Début du carrousel')
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerieImg = elmGalerie.querySelectorAll("figure figure img")
    let elmCarrousel = document.querySelector('.carrousel')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure')
    let elmCarrousel__fermeture = document.querySelector('.carrousel__fermeture')
    let elmCarrousel__radio = document.querySelector('.carrousel__radio')
    let elmCarrousel__droite = document.querySelector('.carrousel__droite')
    let elmCarrousel__gauche = document.querySelector('.carrousel__gauche')

    console.log(elmGalerieImg[0].getAttribute('src'))
    let index = 0 // L'index qui permettra d'indexer les images du carrousel et les radios bouton
    let ancien_index = -1
    let compteur =0
    for (const img of elmGalerieImg){
        img.dataset.index = compteur++
        ajouter_elmImg(img)
        ajouter_elmRadio()
        // écouteur sur la galerie pour ouvrir le carrousel
        img.addEventListener('click', function(){
            elmCarrousel.classList.add('carrousel__ouvrir') 
            index = this.dataset.index
            affiche_carrousel_img()
    }) 
    }



    elmCarrousel__droite.addEventListener('click', function(){    
        prochainIndex = +index+1;
        if(elmCarrousel__radio.children.length <= prochainIndex){
         prochainIndex = 0
        }
        elmCarrousel__radio.children[prochainIndex].dispatchEvent(new Event('click'));
     })

 

    /**
 * Écouteur pour fermer le carrousel
 * 
 */
    elmCarrousel__fermeture.addEventListener('click', function(){
        elmCarrousel.classList.remove('carrousel__ouvrir') 
    })

/**
 * Ajouter un img créé dynamiquement dans le conteneur elmCarrousel__figure
 * 
 * @param {ChildNode} img   Une image de la galerie
 */
    function ajouter_elmImg(img){
        let elmImg = document.createElement('img') // création d'un élément img
        elmImg.classList.add('carrousel__figure__img') // ajout d'une classe css
        elmImg.setAttribute('src', img.getAttribute('src')) // on récupère l'adresse URL de l'image de la galerie
        elmCarrousel__figure.appendChild(elmImg) // ajouter l'élément img dans le carrousel
        elmImg.dataset.index = index // on index l'élément img pour pouvoir l'associé au bon radio bouton
    }
/**
 * Ajouter un bouton radio créé dynamiquement dans le conteneur elmCarrousel__radio. Ce radio bouton permettra de
 * naviguer dans le carrousel d'une image à l'autre
 * 
 * @param aucun
 * 
 * */

    function ajouter_elmRadio(){
        let elmRadio = document.createElement('input')
        elmRadio.setAttribute('type','radio')
        elmRadio.setAttribute('name','radImg')
        elmRadio.dataset.index = index
        index = index+1
        elmCarrousel__radio.appendChild(elmRadio)
        /* Écouteur pour sélectionner une nouvelle image */ 
        elmRadio.addEventListener('click', function(){    
            index = this.dataset.index
            affiche_carrousel_img()
        })
    }

function affiche_carrousel_img()
{
    if (ancien_index != -1){
        elmCarrousel__figure.children[ancien_index].classList.remove('carrousel__figure__img--activer') 
    }
    elmCarrousel__figure.children[index].classList.add('carrousel__figure__img--activer')
    ancien_index = index
}

})()