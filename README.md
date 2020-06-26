# quiz Web Application Tutorial

This repository is meant to demonstrate the use of Flask and Angular to build a simple, but state-of-the-art, web application which can be used for POCs.


## Clone/Fork repository

First fork or clone this repo:

e.g. 
 





### Backend development

Navigate inside the backend directory: `cd backend`

Install pip dependencies: `pip install -r requirements.txt`

Run `python app.py` in backend root (will watch files and restart server on port `8081` on change).

### Frontend development

Navigate inside the frontend directory: `cd frontend/app`

Assure you have [Nodejs](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/en/docs/install) and the [angular-cli](https://cli.angular.io/) installed.

Install npm dependencies: `yarn install --pure-lockfile` 

Run `yarn start` in frontend root (will watch files and restart dev-server on port `4200` on change).
All calls made to `/api` will be proxied to backend server (default port for backend `8081`), this can be changed in `proxy.conf.json`.
