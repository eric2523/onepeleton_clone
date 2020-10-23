# UnoPeleton

This clone implements some core features that are on One Peleton's member's side website. This clone is focused around CRUD operations to allow users to utilize many membership side features.

## Built with
------
* jQuery - Ajax
* Ruby on Rails
* postgreSQL
* React-Redux
* Spotify Web API 
* Vanilla JS

## Demo 
------
Link to the working live demo : https://unopeleton.herokuapp.com/#/

## Site
------
### Landing Page
Currently it allows users to sign in and sign up for an account and render model level validation errors at the top. More restrictive features will be implemented in the future to enhance validation of character values and user information. 

![uno-peleton-login](https://github.com/eric2523/onepeleton_clone/blob/main/app/assets/images/unopeleton-login-page.png?raw=true)
![login-page-errors](https://github.com/eric2523/onepeleton_clone/blob/main/app/assets/images/login-page-errors.png?raw=true)

### Modals
* Workout class modals renders specific class information and generates song information/images through the Spotify Web API.
![workout-class-modal](https://github.com/eric2523/onepeleton_clone/blob/main/app/assets/images/class-modal.png?raw=true)
* Following/Followers modals renders a user's followers/followings 

### Challenges Page
* Carousel was built using JavaScript and CSS
![challenges-page-carousel](https://github.com/eric2523/onepeleton_clone/blob/main/app/assets/images/carousel-demo.png?raw=true)

#### Throttle
* One challenge was to keep the UI/UX smooth when using the carousel arrows. The carousel was very glitchy if the user spammed the left/right arrows. 
* Implemented a basic throttling function to limit the number of events being called on the left and right arrows to fix the UI/UX issue.
```javascript
  throttle(callback, limit) {
    let wait = false;
    return () => {
      if (!wait) {
        callback.call();
        wait = true;
        setTimeout(() => {
          wait = false;
        }, limit);
      }
    };
  }
```

### Coming soon
* Page dedicated to rendering a User's upcoming/active/completed challenges 
* Navigation bar at `/schedule/:category` that anchors to specific elements on the same page 
* Character validations at login/signup 








