# T1 INSULIN:RATIO

<img src="http://i.imgur.com/iwmmCyu.png" alt="">

##Link to T1 INSULIN:RATIO
https://arcane-gorge-95155.herokuapp.com/#/

##Technologies

* Front-End
    - Angular.js - wanted the application to be a SPA, and would be very seemless in the transition of information. Also wanted to learn more about the intricacies of Angular. 
    - JavaScript - required in order to do the ratio calculations and also was needed for many of the Angular controllers. 
    - HTML/CSS - general HTML/CSS

* Back-End
    - Node.js - Needed to have the initial route set up and also so that I could access the database API
    - Express - allowed easier access to API and helped speed up getting the app spun up
    - MongoDB - storage of food information

#Approach
* Must Haves
    - Ratio input that is saved on the site
    - Food Nutritional Information pulled from MongoDB
    - Functionality to easily calculate insulin needed
* Should Haves
    - The choice of many different foods and places
* Could Haves
    - User Authentication -- Really wanted to have authentication, but going about that from the Angular way was so different from Node.js, that I decided I needed to get the MVP up first before moving on to authentication
    - Saving Foods -- tied into the authentication problem. I wanted users to be able to save a food that they may eat frequently. However, this is dependent on authentication.


##User Stories
* User 1 
    - User 1 visits T1 INSULIN:RATIO in hopes that he can easily search the meal he just ate at In-N-Out. He visits the site and enters his insulin to carbohydrate ratio on the home page and clicks save. He then goes to the food page to search if there are any foods from In-N-Out in the database. He finds that the burger, fries, and shake he ate are on the site and it easily tells him the insulin he needs to do for each food. User 1 does his insulin and takes our the mental math and guessing game that comes with eating out. 



##Wireframes

http://i.imgur.com/Q1ecCzK.jpg
http://i.imgur.com/xHAupQp.jpg

##Next Steps
* Create Individual Food Pages that a user can visit
* Create Restaurant and Category pages
* Limit number of foods on homepage 
* Install Angular Auth so users can sign-in and store their ratio
    - Also allow users to favorite foods and store them in their profile
