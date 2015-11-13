# Project 3 - Santa Funke's List

Hello. I am Santa Funke  
![Image of SantaFunke]
(http://i63.tinypic.com/2hcqaog.jpg)

## Group Name:
Pin Lu  
Andy Oh  
Finn Borge  
Kevin Walter  

## User Stories
To reinvigorate the Christmas spirit in 21st century where children nowadays are on iPhone and computers, ordering toys from Amazon/Best Buy/Toy R Us, the elves have proposed that we should create a website for children to type in wish list and submit it to Santa Funke.

Wireframe Link - https://goo.gl/XfGKCT

![flowchart](http://i63.tinypic.com/27xe69z.png)

## API Docs

### Classical

ROOT (/): Renders the Sign In / Sign Up forms.
POST /users will create a new user, redirect to /application/angular
POST /session will create a new session, redirect to /application/angular

---
### JSON

GET /session will return JSON object containing currently logged in user

    ```json
    current_user: {
      id: 21,
      email: "kevin@ga.co",
      name: "kevin",
      age: 6,
      type: "Elf",
      address: "75 dingus lane camden TN undefined",
      joined_santas_army: "20 minutes ago"
    }
    ```

GET /users will return array of users

    ```json
    {
      id: 1,
      signed_up: "22 minutes ago",
      name: "Durward Hayes",
      email: "efren_rice@streichwalter.com",
      type: "Child",
      age: 5,
      address: "9847 Shaina Overpass"
    }
    ```

GET /toys will return array of toys

    ```json
    {
      id: 5,
      name: "human-resource",
      value: 412,
      description: "Intuitive neutral data-warehouse",
      created_at: "24 minutes ago"
    }
    ```

GET /presents will return array of all presents complete with toys subarray

    ```json
    {
      id: 1,
      child_id: 8,
      elf_id: 4,
      toy_id: 9,
      created_at: "25 minutes ago",
      toy: {
        id: 9,
        name: "Ameliorated",
        value: 464,
        description: "Programmable fresh-thinking architecture",
        created_at: "2015-11-13T03:53:46.306Z",
        updated_at: "2015-11-13T03:53:46.306Z"
      }
    }
    ```

GET /presents/mine will return array of all presents that belong to the currently logged in user, complete with toys subarray. The JSON object is in the same format.

GET /judgments will return array of judgments

    ```json
    {
      id: 1,
      child_id: 1,
      elf_id: 3,
      description: "Intuitive bi-directional firmware",
      qualifying_adverb: "upward-trending",
      naughty: true,
      created_at: "27 minutes ago",
      updated_at: "27 minutes ago"
    }
    ```

POST /toys will take a JSON object as such:

    ```json
    toy: {
      name: "paper dolls",
      value: 9151,
      description: "incomprehensibly durable"
    }
    ```

POST /presents will take a JSON object as such:

    ```json
    present: {
      child_id: 1,
      toy_id: 5
    }
    ```

POST /judgments will take a JSON object as such:

    ```json
    judgment: {
      child_id: 3,
      elf_name: "dingus",
      elf_id: 7,
      description: "this kid really did a bad thing.",
      qualifying_adverb: "shockingly",
      naughty: true
    }
    ```

## Technology Used

For this app, we used:
* HTML / CSS
* Ruby on Rails
* JavaScript / jQuery
* PostgreSQL
* ActiveRecord
* Angular
* Angular Material
* Google Maps API

## Approach Taken

We started off by debating what sort of app we wanted to build, and decided that we wanted to make something that would track a holiday wishlist, but that would also allow you to tell Santa whether or not your friends have been naughty or nice!

We then determined what our general model structure would be, and created wireframes / user stories for our app. We decided that we would use one model table, and that we would have two user types within this table, and thus use single table inheritance. Truly a learning experience!

Then, we set up Rails, and then our models and migrations. From there, we were off and running. We split up the work so that two of us were working on the front end, and the other two worked on the back end. We spent a lot of time working in small conference rooms, with one computer hooked up to the smart TV, so that we could collaborate in real-time. Doing so made our process much easier in that we could throw around ideas and incorporate them immediately, and could also avoid serious merge errors. When we worked outside of the conference room setting, we were in contact with one another through Slack.

All in all, we're happy with our final product, and we hope that you enjoy creating your holiday wishlist (and also tattling on your friends / enemies).

## Installation Instructions

You can use our SantaFunke app [here](https://santafunke.herokuapp.com/).

## Unsolved Problems
* Can't get user names to render on Google Maps markers. Also, sometimes the markers do not load at all.
* Wanted to award points to users for each judgment that they make, so that they earn more 'Santa Points' and thus can obtain more valuable presents.
* Also, wanted to give users negative points if they have been on the receiving end of too many naughty judgments!
* Mechanism for having the elf choose a toy from a child's wishlist has not been built.
* Use CanCan to restrict access to particular resources based on user type.

## Citations
* [Angular After Render Directive] (http://gsferreira.com/archive/2015/03/angularjs-after-render-directive/)
* [Helpful Maps Tutorial] (http://www.allprogrammingtutorials.com/tutorials/google-maps-using-angularjs.php)
