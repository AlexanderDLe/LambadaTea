# Lambada Site

![lambada site](https://user-images.githubusercontent.com/37781362/46241409-56825100-c36e-11e8-95e9-15390e1251bb.png)

[Visit the live site at lambadatea.com](https://lambadatea.com)

### Build Tools:

-   HTML/CSS/JavaScript
-   Bootstrap 4
-   React
-   Reactstrap for bootstrap integration within React
-   React-anchor-link-smooth-scroll for smooth navigation scrolls.

# Features:

## Sliding Carousel

![lambada carousel slider](https://user-images.githubusercontent.com/37781362/46241581-cb568a80-c370-11e8-92a4-6cd03183ea0c.PNG)

This site features a landing page that contains a carousel slider.

Carousel React Code:

![lambada carousel code snippet](https://user-images.githubusercontent.com/37781362/46241592-022ca080-c371-11e8-9ea3-9e90c1f0550b.PNG)

In the code snippet above, I utilize Bootstrap 4 to implement the carousel.

## Menu Gallery

![lambada gallery menu](https://user-images.githubusercontent.com/37781362/46241452-11aaea00-c36f-11e8-8dc3-6b9c976e24ab.PNG)

This site features a gallery showcasing the restaurant's menu.

Gallery React Code:

![lambada gallery react code](https://user-images.githubusercontent.com/37781362/46241510-d6f58180-c36f-11e8-8805-5b89172817e1.png)

In this approach to rendering a multitude of similar items, I experimented by using a method (renderGalleryItem) to render gallery items instead of the usual React method of using reusable components.

In the render() method, I call the renderGalleryItem multiple times, each with different arguments corresponding to the menu items belonging to the restaurant.
