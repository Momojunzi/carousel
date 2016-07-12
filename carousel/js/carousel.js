/**
 * Created by rentalnet on 7/12/2016.
 */
var carouselFunctions = {
    addImages: function(){
        for(img in carouselImages.image){
            var carImg = carouselImages.image[img];
            var figure = "<figure class = '" + carImg.figure.class + "' id = '" + carImg.figure.id + "'></figure>";
            var title ="<h3 class='" + carImg.h3.class + "' id='" + carImg.h3.id +"'>"+carImg.h3.title+"</h3>";
            var image = "<img src='" + carImg.img.src + "' class='"+carImg.img.class+"' id='"+carImg.img.id+"'/>";
            var caption = "<figcaption class='"+carImg.figcaption.class+"' id='"+carImg.figcaption.id+"'>"+carImg.figcaption.caption+"</figcaption>";
            console.log(carImg.img.src);
            $("#image-div").append(figure);
            $("#"+carImg.figure.id).append(title+image+caption);
        }
    }
};
carouselFunctions.addImages();