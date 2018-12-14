# U Secure Technical Test

Friday 14th December 09:40

## TL;DRl - Just review the Installation section, jump start the project and go through the code. This text is only here, to discuss reasons behind certain/specific project decisions.

## Prerequisites

Install the _specific_ version of the Node runtime, both NPM & Yarn package managers and @storybook/cli (globally); in order starting from top, then bottom; shown below

- Node: 8.11.2
- NPM: 6.1.0
- Yarn: 1.10.0
- @storybook/cli: 4.0.9

> Apolygises in Advance! I've not really had the time to go through a local installation, as of late. Feel free to having a crack at installing these tool locally, if you wish to do so

**Please Note** 
1) This project will only work with Yarn, due to StorybookJS being exclusively compatible with the Yarn package manager and no other. Plus the project only consists of a Yarn.lock, breakages may occur, if you use `npm install` the project. Thus, **DO NOT "NPM INSTALL"**.

The npm installation is only initially needed, for the installation (ironically) of Facebook's Yarn.

After Yarn is installed, use Yarn from here on out

2) If you are using the NVM tool for Mac OS. **NPM v6.1.0** was not released with **Node v8.11.2**, therefore NPM v6.1.0 must be installed separatately, easiest solution is install NPM v6.1.0 separately 

Unfortunately the current solution I've found is install it globally then deleting it again, via a different version of NPM.

## Getting Started
### 1) Installing

Start with cloning the project from GitHub - the entire project has been merged into the `master` branch


After the project has been cloned, `cd` into the directory `/u-secure`. Follow the instructions below

```
yarn install
```

### 2) Starting up the Project
```
yarn start
```

It should result into the resulting terminal output
```
Compiled successfully!

You can now view u-secure in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.1.53:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

### 3) Change the route of the local server
Change the route from `localhost:3000/` to `localhost:3000/settings/u-secure` - react-router was used for the settings page - a top navigation menu was not part of the spec, for easier navigation

### 4) Start off with the "USecure Settings"
From here on out. This Chapter from 4) - 6), will be more UX than development related. So feel free to skip this part...

Let's get started, underneath `Settings`, you'll find a more improved togglable menu, compared to the button option from the spec photos.

Viewing the entire page, parts of the settings page is now split into titled sections, allowing users to easily scan down on the left, to find the option they need.

Sections can be toggled to hide, show or dim down some parts, this allows for better UX, on one end by not overloading first time users with information. And, not too little to stop them from clicking on Subscription, Reminder, as the dimmed information below hints at what the additional sub-options entail.

Below each section title is a description, help first time users have an idea with the consequences for choosing a specific option. Note that this is targeted at specific users, I don't really read the descriptions. I'm a kinesthetic learners; learning by doing.

`Reminder` section has handy date for when the next reminder will be, stops people whiping out their calendars, calculating the date.


### 5) Onto "Users"
Chunking features into bullet, might help users who are not so comfortable with the  User Interfaces or Admin Panels for that matter.

- **Add User buttons** - shows a model for you to enter details, the spec given has been followed. 
  - **Need more polishing** - please note these requirements weren't part of the spec given
    - More control on what the user can and will enter, so that they can't submit anything, including malicious Scripts
    - A exit button for the model
  - **Removal option** - you'll find as an option within the 3 dotted menu. Unfortuantely this option isn't working as intended, removal does work. However I'm currently stuck, on finding a way for the removal option to disappear upon 'click'/'mousedown'

### 6) Overall Design Overview

Colors/Opacities 
  - Blue (Dodger Blue) - used for actions ONLY - please see 
  - Dimmed Components - depicts components being disabled
  - 

White Spaces
  - Increased for readability, my father is long sited and struggles to see text that is small or has tight letter spacing. Sure one can zoom in using Chrome's zoom features, however this may stop features from happening in future, if they are not tested for

## Manual Testing
### 1) Start up
```yarn run storybook```

### 2) Observing Components
This next step is for you dive in and tweak the code or view what components are available in the project.

The community that are currently looking after this project, recommend from time to time, manually testing the UI to see whether it fits with the design persona of the application

Reasons I've made the pragmatic decision to adopt Storybook into my workflow; see below;

Advantages
 - Every developer/designer/product owner can easier communicate around a specific components - discussing about behaviour
 - Enables an isolated IDE for quick development of components
 - Each "story", enables other developers to rapidly learn how the component work - the better the examples are in the storybook. The less communicational overhead is required to explain how specific parts of the code works
 - Easy Setup with starter
 - Can suit multiple UI environments - such React, Vue, Angular and even HTML. Please see [Storybook Quickstart Guide](https://storybook.js.org/basics/quick-start-guide/) for more details

Disadvantages
- Setup Difficult for Bespoke Projects
- Continual management & maintanence of the UI library/playbook 

## Automated tests
A bit of old age excuse, but I couldn't find the time for testing.

Usually Jest Enzyme and Cypress would have been my straight up, go to choice for Unit, integration and E2E testing tools

## What did I learn from this project?
With tight deadline...
- **Use Technology & Tool I am familar** with, rather than learning from scratch a new API
- **Use UI libraries** - rather than trying build from scratch - ones I've used is often SemanticUI and MaterialUI to shed a lot of the UI heavy lift - more time can be invested
- **Branch off project** - for major parts of the project and merge into a dev or other subsidary branches before merging into master
- **Build a great habit for TDD** - to actually speed up the development of projects in the long run - in the grand scheme of things, testing reduces Tech Debt considerably 
  - IBM stated that up to 80% bugs can be avoid with properly set up Testing Suite in place
  - Learn to recognise more crucial things to test; close to 100% coverage is next impossible; increasing diminishing returns


### Uninstalling of packages
To check for global packages from **NPM**
```
npm list -g --depth=0
```


Then uninstall the packages globally, example of uninstalling StorybookJS below
```
npm uninstall -g @storybook/cli@4.0.9
```

<br/>

To check for global packages from **Yarn**
```
yarn list -g --depth=0
```


Then uninstall the packages globally, example of uninstalling StorybookJS below
```
yarn remove -g @storybook/cli@4.0.9
```

Node will require manual removal.

## Built With (list of Major Tools)

* [create-react-app](https://github.com/facebook/create-react-app) - React communities official start pack - unit testing, test coverage tools and SASS all built in 
* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) very simple routing API
* [StorybookJS](https://github.com/storybooks/storybook) - good as communicational tool in groups small and large; used as an isolated UI IDE
* [Funkify](https://www.funkify.org/) - convenient disability simulator, check this out, it's worth the time

## Author

* **Anthony Tran** - https://github.com/anthonytranDev