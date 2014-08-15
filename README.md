ReactJS MidwestJS Demos
====

### Demo application(s) for Reconciling ReactJS as a View Layer Replacement Talk at MidwestJS 2014

This app is for demonstration purposes in that it attempts to show examples of how [ReactJS](http://facebook.github.io/react/) could start to be leveraged both as a view-layer standalone, as part of a react-based web stack with technologies such as [React-Router](), and/or integrated with popular Javascript MV* technologies such as [BackboneJS](http://backbonejs.org/) or [AngularJS](https://angularjs.org/).


#### TOC
* [Setup](#setup)
* [Running The App](#running-the-app)

#### Setup

1. Clone the repo.
2. Navigate to the directory you cloned the repo
3. At the command line run `npm install`
4. Afer all packages have downloaded run `./script/dev`

#### Running The Demos

There are 3 sets of demos:

1. http://localhost:3000 - which is thereact-router configured set of examples/demos 
2. http://localhost:3000/spped.html - which is a combined performance and Backbone integration example
3. http://localhost:3000/ngReact.html and http://localhost:3000/ngReactLocal.html - which are ngReactGrid-based examples (to demo Angular integration) - one for "local" json and one retrieved from the server.  The grid is currently  working "more correctly" for the local example, as the "remote" example is more for demo purposes of just getting the JSON from the server.  Additional javascript on both the client and server ends to handle pagination and other table features would be required to make the grid fully functional for the remote example.
	
