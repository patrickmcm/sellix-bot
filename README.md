# How to setup the sellix Bot

## Step 1
Firstly, click on setup.bat and enter all the info it asks for.

## Step 2
Put the code onto a hosting service like heroku or glitch.

## Step 3
Go to the sellix dashboard, open up the developers module and click on webhook, add one. 
Firstly put the domain as https://yourdomain.com/api/getorder then set the event as order:paid

## Step 4
Go onto all your products, and on each of them add a custom field, set custom filed "Name" as "Discord ID" (THIS IS REQUIRED FOR THE AUTO-ROLE SYSTEM TO WORK)

The rest you can configure yourself.


## Step 5 
Start up the server and it's ready to go, it'll automatically give members a role once they bought your product, you can also get an orders info by doing:
!getorder <orderId>