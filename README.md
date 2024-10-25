<a id="readme-top"></a>
<h1 align='center'> Rancid Tomatillos </h1>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-this-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-the-tests">Running the tests</a></li>
        <li><a href="#end-to-end-testing">End-to-End Testing</a></li>
      </ul>
    </li>
    <li><a href="#accessibility">Accessibility</a></li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>

## About this project
* Rancid Tomatillos is a movie review aggregator. Its primary functionality is to display a collection of popular movies with their title, genres, and synopis. This app includes voting functionality allowing users to upvore or downvote any given movie on the list, providing other users with an overall score that represents the general consensus about a film. 
* This is a front end application build to utilize and update a preexisting backend which makes use of [TMDB api](https://developer.themoviedb.org/docs/getting-started).
* This application is deployed using vercel, you can visit the currently deployed page [using this link](https://rancid-tomatillos-g4g9dz58d-kyle-delaneys-projects-5dfcda80.vercel.app/).

**Insert photo here**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With:
 ![React][React.js]<br/>
 ![Cypress][Cypress]<br/>
 ![React_router][React_router]

<p align="right"><a href="#readme-top">back to top</a></p>

## Getting Started
### Installation

1. Clone this repo
  ```
  git clone git@github.com:kylomite/rancid-tomatillos.git
  ```
2.  Install necessary dependencies and run
  ```
  npm install
  npm start
  ```
3. Change git remote url to avoid accidental pushes to base project
  ```
  git remote set-url origin github_username/repo_name
  git remote -v # confirm the changes
  ```
<p align="right"><a href="#readme-top">back to top</a></p>


### Running the tests

1. Install necessary dependencies
  ```
  npm install
  ```
2. run Cypress
  ```
  npm run cypress
  ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### end-to-end testing

* These test were designed to mimic common user flows throughout the application
</br>

#### Examples:

* Loading the content of the main page and movie detail page in an expected manner
* User interaction to change a movie's score using the upvote and downvote buttons
* User interaction to change routes and views by selecting a poster
* User interaction to change routes and views by selecting the home button on movie details view

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Accessibility

* This application utilizes accessible design with semantic HTML tags. This features allows for tabbable, screen-reader friendly content.
* The application uses high contrast visuals along with animations to increase pointer focus for visually impaired users.
* The application uses the Chrome Dev Tools Lighthouse feature to test accessibility achieving a 100% score
![Rancid Tomatillos Page Accessibility Score](/read_me_Content/image.png)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributors
<section style="display: flex; gap: 10px;">
  <div style="text-align: center;">
    <h4>Kyle Delaney</h4>
    <img style="width: 50px; border-radius: 25px;" src="https://media.licdn.com/dms/image/v2/D4E03AQGp6EiUDBP-0Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724335224935?e=1735171200&v=beta&t=UodzNOsspYW_O9ZdmoqgkwnGf0UEvIlrBUnjMVHSM0A" alt="Profile 1" />
    <br/>
    <a href="https://www.linkedin.com/in/kylehamptondelaney/" target="_blank">LinkedIn<a> 
    <br/> 
    <a href="https://github.com/kylomite" target="_blank">Github</a>
  </div>

  <div style="text-align: center;">
    <h4>Renee Messersmith</h4>
    <img style="width: 50px; border-radius: 25px;" src="https://media.licdn.com/dms/image/v2/D4E03AQGCOambjwvkLw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1716153457902?e=1735171200&v=beta&t=XzwlW_gN-qLsJi6UqSDENoq9yu0Wdpn4228D1MyN5aU" alt="Profile 2" />
    <br/>
    <a href="https://www.linkedin.com/in/reneemessersmith/" target="_blank">LinkedIn</a>
    <br/>  
    <a href="https://github.com/reneemes" target="_blank">Github</a>
  </div>
</section>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Cypress]: https://img.shields.io/badge/Cypress-20232A?style=for-the-badge&logo=cypress&logoColor=50c694
[React_Router]: https://img.shields.io/badge/React_Router-20232A?style=for-the-badge&logo=react-router&logoColor=#ffffff
