# Luncher

## Pitch

There are kids today in this country who go without student lunches. This app allows schools to broadcast the needs of their students by declaring an amount of donations that they would need to be fulfilled in order to provide lunches for those that go without.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

You will need [node](https://nodejs.org/en/download/) and `npm` installed on your machine.

## Installation and Setup Instructions

Clone down this repository.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To visit app on localhost:

`https://localhost:3000`

## MVP Features Breakdown

This app contains two user types. A school administrator and a donor. Their attributes are listed below in the data design description.

* [x] Login Page - After a "A school administrator (who has the ability to log in) logs in they'll be directed to a home page where they will see a list of schools in need. Donors do not need the ability to login.

* [x] Navigation - Navigation is present on all pages, Users should know what page is active by clicking on a nav link and activating their tab.

* [x] Home Page  (For a school) - If no profile is created, be sure to allow a school to create a profile and add it to the list of schools that need assistance.

* [x] Single School Page - An admin will be able to see their current funds and be able to add their needs for more funding, update and delete their profile and funding needs.

* [x] Home Page (For a donor) - Contains a list of schools who have requested financial needs for their students. Each school is laid out in a grid format, with the name of the school, physical address/location of the school and a requested amount of funds that the school needs in order to provide lunches for their students

* [x] Stretch Goal: Allow a 2nd user type (patrons) to login and donate to a school.

## Built With

* [React](https://reactjs.org/) - The User Interface (UI) library used
