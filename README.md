# Instructions for localhost

### - bundle install
### - rake db:create
### - rake db:migrate
### - rake db:seed
### - cd client
### - npm install
### - rake start

# Technologies Used

- Rails API
- JWT Authentication with Knock ruby gem
- Stripe ruby gem
- PostgreSQL database
- React + Redux
- React Stripe Elements

# Coding Challenge

You are running a social club, where members subscribe online to gain access to
a variety of events and places to visit in San Francisco Bay Area.

Depending on the subscription level, customers will have access to a certain
kind of events. Three membership levels are available:
  - Basic, $19.99
    Customers subscribed to the Basic plan, would be able to attend private parties
    every other Friday at the most popular bars, with the possibility to bring any number of guests.
    Each additional guest costs $19.99 every month.
  - Classic, $99.99
    Customers subscribed to the Classic plan, would be able to enjoy
    some benefits, like getting ahead of the line at popular restaurants in San Francisco.    
  - Modern, $199.99
    They would have access to private lounges through out San Francisco, VIP access to relevant
    events and concerts all over the Bay Area, including chauffeur when required.

- All plans have a 15 day trial period.
- Credit card information is collected at checkout time, if the customer hasn't entered it already.
- Modern and Classic Members can only bring up to 5 guests at no extra charge.
- A customer can be subscribed to multiple plans at any given time.

## Problem Statement

You will implement a basic checkout experience, where a customer -after signing up- will
purchase a subscription to any of the plans listed above.

### Use Case

These are the steps that we will demo while reviewing your challenge. You will run a demo during the on-site interview at the beginning of the pairing session.

1. As a user, I sign up and I am presented with My Subscription Page. The only required
fields for sign up are email, and password. The password can't be stored as plain text in the database. Then I am redirected to My Subscription Page.
2. When a new customer lands into My Subscription Page, the system presents them a list of
the products they can subscribe to.
3. As a customer, I want to subscribe to the Basic Membership product, and I'll be bringing initially 3 guests.
  - I fill in the amount of guests I'll be adding to my subscription.
  - I click "Subscribe now".
  - The system presents me with an updated monthly total amount, and asks me for the CC details.
  - I click the "Checkout" button.
4. The system will let Stripe collect the credit card (Stripe's test card) information securely, while subscribing the customer to the specified plan.
5. The system shows the user My Subscription Page again, this time the Basic Membership will render a "Subscribed" label, instead of a "Purchase" link, and the monthly cost that I am currently being charged.
6. As a member of the Finance team, when I go to the `Events & logs` section in Stripe's Dashboard,
I can see that a new customer has been created, subscribed to the corresponding plan, and charge them
for the current billing cycle.

### Edge Cases
1. Email is already registered.
2. Valid and Invalid CC error states (Stripe provides both test cards).

## Evaluation

Please use Ruby, Ruby on Rails or Elixir for the backend, and any form of modern JavaScript for the frontend. Feel free to leverage a CSS framework to build a simple and functional user interface.
The MVP will be used as a starting point to continue working on it during your on-site interview:
  - You will demo the main use case,
  - You will spend the day with the engineering team pairing to build out some features.

1. Use Github issues to break down clearly the main use case into deliverable tasks.  
2. Focus on small incremental changes that are easy to test and demo. Be pragmatic.
3. We recommend you using a test Stripe account, and their documentation to manage Subscriptions, Plans, Credit Card, and Customer information.
4. Take into account team collaboration, and how would you set up other engineers, who are new to the project, for success.
5. Own your architecture decisions and your testing strategy, no matter you go for a Single Page Application, or server-side rendered HTML, we are more interested in why did you choose a specific path.
