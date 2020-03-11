# Lambada Site

![lambada site](https://user-images.githubusercontent.com/37781362/46241409-56825100-c36e-11e8-95e9-15390e1251bb.png)

Current Build: lambadatea.com

### Build Tools:

- HTML/CSS/JavaScript
- Bootstrap 4
- React
- Reactstrap for bootstrap integration within React
- React-anchor-link-smooth-scroll for smooth navigation scrolls.

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

In the above portion, I create a method that receives two arguments that will define each individual item. There is also a jQuery addition that allows the user to toggle a modal upon clicking on an item.

In the render() method, I call the renderGalleryItem multiple times, each with different arguments corresponding to the menu items belonging to the restaurant.

## Development Notes:

- Originally a contact page was created containing a contact form. This required a back-end that required a backend that utilized tools
  such as Node, Express, MongoDB, Nodemailer, etc. However, uploading an application that utilizes a back end system such as this on a
  platform such as Heroku requires a monthly fee (there is a free slower alternative, however, the artist decided against it). The Artist chose instead to forego the contact form and instead host the now backend-less
  website on Github Pages for free.

- I am a huge fan of using SASS/SCSS - however, I encountered an issue when trying to combine it with my use of React. There is an official work-around utlizing SASS-Chokidar, however, it did not work for me thus I chose to use plain CSS in my React projects. Although I really miss the efficient import feature of SCSS (Vanilla CSS has an import feature but it is not as efficient since it makes several requests), CSS still offers the ability to assign variables so it's not too bad. That said, I plan on trying SCSS with React again in the future.
