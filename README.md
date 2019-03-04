# super rad 
### An image adventure app 

Back-end repo: https://github.com/pmccall33/super-rad-app-sinatra

'super rad' is a project put together by Dakotah Ducharme, Nathan Smith, and Peter Murray. It aims to dupe the website ![superbad](http://superbad.com/), an obscure, random site with gifs, images, and blocks of text that lead the user to different paths based on where the user clicks.

'super rad' is powered by a back-end server (linked above) that is also fullstack app. The back-end is an "image tagger" app through which users can add single-word tags to images stored in a SQL database. Users with admin access privileges may upload new images to the database. 

The back-end functions as an API that returns images from the database. The initial layout of images is random, but subsequent images are selected based on a relational algorithm that finds other images with similar tags. 

## User story
1. The game page initially displays a random layout of 4 clickable images 
2. Clicking on an image will load another display of 4 images, some of which are related to the image they clicked (via tags), others of which are random 
3. Users may register to create an account, or log in to an existing account 
4. If logged in, users can view their "path" — the images they have clicked on during that session 

## Wireframes 
### Home: 
![homepage](https://github.com/dakotahducharme/super-rad-react/blob/master/wireframes/homepage_ex.png)
### Login: 
![login](https://github.com/dakotahducharme/super-rad-react/blob/master/wireframes/login.png)
### Favorite paths: 
![favorites](https://github.com/dakotahducharme/super-rad-react/blob/master/wireframes/favorites.png)
### Image Layouts: 
![img](https://github.com/dakotahducharme/super-rad-react/blob/master/wireframes/img_ex.png)
![double_img](https://github.com/dakotahducharme/super-rad-react/blob/master/wireframes/double_img.png)
![asym_img](https://github.com/dakotahducharme/super-rad-react/blob/master/wireframes/asym_img.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).