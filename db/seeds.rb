user1 = User.create!("email": "alicechen118@gmail.com", "password": "password")

basic_membership = MembershipPlan.create!("level": "Basic", "description": "Customers subscribed to the Basic plan, would be able to attend private parties
    every other Friday at the most popular bars, with the possibility to bring any number of guests.
    Each additional guest costs $19.99 every month.", "cost": 19.99, "guest_cost": 19.99)

classic_membership = MembershipPlan.create!("level": "Classic", "description": "Customers subscribed to the Classic plan, would be able to enjoy
    some benefits, like getting ahead of the line at popular restaurants in San Francisco.", "cost": 99.99, "max_guests": 5, "guest_cost": 0)

modern_membership = MembershipPlan.create!("level": "Modern", "description": "They would have access to private lounges through out San Francisco, VIP access to relevant
    events and concerts all over the Bay Area, including chauffeur when required.", "cost": 199.99, "max_guests": 5, "guest_cost": 0)