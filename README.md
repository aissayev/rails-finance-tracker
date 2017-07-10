# README
This is the finance tracker app 

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


Bootstrap for layout
Devise for authentication

Stock_quote gem for stock quotes


# Models
  users
  stocks
  user_stock - many to many relation
  
## Authentication system, users can sign-up, edit their profile, log in/logout
## Users can track stocks, up to 10 per user. The profile page will display all the current stock prices
## Users can search for stock symbol using a search bar
## Users can choose to add a stock from results of search to their portfolio
## Users can look for friends, or other users of the app, by name(first or last or email)
## Users can view portfolio of stocks their friends are tracking for investing ideas
## Must be mobile friendly, so the styling has to be responsive