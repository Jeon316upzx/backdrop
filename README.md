# BACKDROP BANKEND TEST

## Welcome

## Description:

## LIVE LINK :https://backdrop-testn.herokuapp.com/

## MUTATIONS TO TEST WITH

## ENTER ANY URL

mutation shortenURL {
shortenURL(input: { full_url: "https://twitter.com/old_mustang" }) {
id
full_url
hashed_url
}
}

mutation findUrl {
findUrl(input: { hashed_url: "https://example.com/4RHudQ" }) {
full_url
}
}

This project is a demostration of my backend skillset in accordance with the
instructions/guide given for the project. It is a mini url shortener with the following queries:

MUTATIONS

## shortenURL : this takes a url i.e full_url and hashes it to a six character string

mutation shortenURL {
shortenURL(input: { full_url: "https://twitter.com/old_mustang" }) {
id
full_url
hashed_url
}
}

findUrl : This extracts the hashed six character string and gets the matching full_url for client side redirects

mutation findUrl {
findUrl(input: { hashed_url: "https://example.com/4RHudQ" }) {
full_url
}
}

e.g

https://example.com/4RHudQ

returns

{
"data": {
"findUrl": {
"full_url": "https://twitter.com/old_mustang"
}
}
}

### INSTALLATION AND LOCAL SETUP

To get started :

1. Clone the repository by running git clone <url>

2. Run `yarn` or `npm install` to install all required dependencies.

3. Run `yarn test` or `npm run test` to run tests

4. Run `yarn start` or `npm start` to run the project.
