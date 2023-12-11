# Front End App

## About

This project was designed using React and includes three APIs. For my project, I wanted to build something that would also act as a cheat sheet for me when working on the front end of websites so I decided to include APIs i a way related to front end design and user research. 

Color Scheme Picker Component:
I used theColorAPI as my colorscheme generator. It takes two parameters from the user-- 1. a hex color input and 2. a color scheme mode you would like to generate. The background color of the bubbles change on call to reflect your output, as is the hexcolor number assigned to each color in your returned scheme. Because I wanted this site to be a cheat sheet for myself and I wanted to know how colors would look with black or white items, I decided to use the paintcan icon as a toggle. 

Random User Profile Component:
Included is a zipcode api that I am using to call a city and state that works in conjunction with a random birthday API. Both fields are generated by inputs retrieved by faker. After my APIs were successfully integrated, I created an array of male and female images (made using Perchance text to image AI) and randomly assign each user profile a picture using user gender as an input (though not a very inclusive system)


## Problems and Solutions

I initially had some difficulty integrating the APIs within their own components. One reason was because the zipcode API I am calling can only handle one call at a time. However, I ended up being able to make a carousel of sorts for three different profile componenents. Once a random profile has been generated, it is saved to it's array and can be returned to using the back button. The forward button generates a new unique call. There are still some issues on render, but if one profile call doesn't work the others aren't relying on it to render. 

Another learning curve I ran into was trying to create a dropdown menu that could bee used to call my color apis. This was a much more straightfoward component to code, and I'm happy with it's functioning, though not impressed with the style.

Also, styling. Lots and lots of styling work... and still so much to do. Once I separated out the .CSS for each component, it made working with it a little more manageable.

## Resources Used

Links to resources used in the making of this site are included under the resource tab on the header component.

## Future Developments

This project remains under development. I'm still not satisfied with the layout, and will return to it once we take a break from each other for a little bit.

Among other things, I want to specify layout options for three different screen sizes. 

## Thanks for visiting!

----Kit Danovsky (kitastroph3)
