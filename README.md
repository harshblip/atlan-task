<div align="center">
  
<img src = "https://socialify.git.ci/harshblip/atlan-task/image?font=Raleway&language=1&name=1&owner=1&pattern=Plus&stargazers=1&theme=Dark" height="300" />
</div>

<div align="center">
 
  [![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://github.com/kothariji/SyntaxMeets) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/kothariji/SyntaxMeets)

</div>

# 💻 Atlan Frontend Task: Marketplace
<strong> Link to the application: https://atlan-task-nine.vercel.app/ </strong>
<br>


## Introduction 
This application is developed as a task assigned by Atlan. The task is create a place to allow users browse new or existing AI/LLM models present in the market through a clean intuitive ui.

## Expectations
1. The codebase of the application must be organized and well-maintained.
2. Reason behind choosing your approach to achieve the complete application
3. Quality and structure of code and overall readability
4. The load time of your application and the time taken to re-render.
5. The performance of your web application in terms of speed and efficiency.
6. The value added by the additional features that you included in your application.

## Meeting the expectations

### Cleaner code and minimal component re-render
As there are many divisions of components in whole application having 3 pages each with its own number of components. 

I tried to make a decent component tree structure to manage the whole code flow. 

As there were many components and also an api being called, i chose to switch to global state management rather than local state declaration to minimize unnecessary re-rendering of components.

### Using compressed image formats and preloading fonts
Preloaded google fonts(downloaded locally) in the initial rendering of the page so that html and structure of webpage is sent earlier and then the font is applied. 

Used ```font-face``` to use fallback fonts. 

Used woff2 format for maximum compressing by browser Used compressed internet friendly image formats like avif to fast load of media in any condition of network.

### Cached data
Implemented caching mechanism through ```localStorage``` to cache api fetched data into the browser so that the api isn't called again and again to get the ```JSON``` data increasing render/blocking time. 

It checks whether the data is cached or not, if it is it directly takes the data from the cached data otherwise calls the api.

### Optimizing the overall app
1. For all the page optimisation analysis, I have used Google's Lighthouse tool and Page Speed Insights to analysze the page load time, along with how well it performs as per web standards. I have also used GTMetrix to cross-check the same. On a laptop browser, the time to be interactive is 0.5 seconds for the Homepage.

2. I have made the application into a PWA(Progressive Web App) so that it can be optimized as Google is promoting the use of such Installable apps. This also allows the web app to be used offline as it can be installed.

3. The website is made responsive to a great extent even though such an application is not very likely to be used on mobile devices. Absolute sizing is not used as much as possible and in turn, sizing units like **em**, **rem**, **vh**, and **vw** are used. Media queries have been used at most places, except a few where Tailwind had to be used for rapid development.

4. React lazy loading has been used for loading parts of the page not immediately required in the background.

5. br compression of incoming json data through pako

### Extra features.
Added sorting and filtering functionality.

Filtering based on whether the model is made by a person or an organization.

Sorting based on the count of likes and accuracy of that model.

All of this globally managed through context api.

### Intuitive clean UI
Made an intuitive clean ui to both for mobile devices as well as desktop screens to serve users as a delight.

Clean differentiation and accesiblity of parts of website. Professional, on-point and informative user-interface on-par with a real-life production application.

## Screenshots
### Page Load Times (Google Lighthouse used, in Incognito Browser Mode in Google Chrome v121.0.6)
![Screenshot (87)](https://github.com/harshblip/atlan-task/assets/70385803/a801d392-09fa-4bc2-b7e7-73ba5d2acc7e)
Home Page

![Screenshot (88)](https://github.com/harshblip/atlan-task/assets/70385803/4985c85f-69d4-4bba-8961-ff8356cf60ff)
Listing of all AI/LLM Models

![Screenshot (89)](https://github.com/harshblip/atlan-task/assets/70385803/556d1e09-755b-455c-9c74-dab7fa50cf71)
Dive-in Details of the specific model





