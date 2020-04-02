# AS A FOOD SERVICE OWNER 
I want an application where my employees can leave feedback
# AS A FOOD SERVICE EMPLOYEE 
I would like the option to submit ideas or feedback with the option to remain anonymous.
# I CAN ALSO 
view any of my previous posts. 
# WHEN AN EMPLOYEE 
creates an account, they are presented with a simple, polished UI that allows them to SUBMIT feedback under several categories.
# WHEN MANAGEMENT 
logs into their account, they are presented with several methods of viewing and searching feedback data (i.e. by category, employee).
# MANAGEMENT 
can also post a question to all employees, so that
# AS AN EMPLOYEE 
I can login and submit my response to the specific question with the option to remain anonymous.


## Frontend -- (Walter, Tania)

# Handlebar layouts

    * main.handlebars (layout)

        - We need all script and style tags
        - Navbar
                href= "/" anchor tag 
                href= "/about" anchor tag
                href= "/newAccount" anchor tag
            if logged out
                href= "/login" anchor tag
            if logged in
                href= "/user" anchor tag
                href= "/logout" anchor tag
        - Body tag -- {{{body}}}
        - Do we want a footer?

    * index.handlebars (home page)

        - whatever we want our home screen to look on site load
        - I think that we will need to have a form on this page that allows users to create a new company account
            - User inputs company and owner name and hits a "create" button ( "/newCompany" this creates a row in Company table)
            - This user is automatically designated as the "owner" in the "user" table.
            - New User is then invited to link their google account with their Drift account by signing in with Auth0.
            - Once the account owner does this, they are redirected to the admin view
        - If the company already exists, the employee/owner is invited to log in by clicking the log in button at the top of the screen.
            - Once they submit their google credentials, the db is searched to see if there name is asscociated with a company. If not, the request to login fails. If it's a success the user gets redirected to the user view.

    * user.handlebars (employee profile)

        - In the user view, we will need the following features
            - Side nav or something
                href= "/api/posts/user (allows user to view all thier messages)
                href= "/api/newMessage (allows user to create a new message)
                href= "/api/adminMessage (allows user to see all admin messages)

    * admin.handlebars (admin profile)

        - In the admin view, we will need the following features:
            - Side nav or something
                href= "/api/posts (allows admin to view all posts)
                href= "/api/posts/category (allows admin to view all posts in a category)
                href= "/api/posts/employee (allows admin to view all posts from a certain user)
                href= "/api/newMessage (allows admin to create a new message that gets displayed to all users)
                href= "/api/newUser (allows admin to create a new employee and assign admin or normal access)

# JQuery Pages

    We will need js files for all of our jquery -- these will go in the public/assets/js directory



## Backend -- (Sam, Brian)

# Auth0
    - Customize login screen
    - Ensure that we can access info from users google profile

# Routes

    "/" (render home page) 
    "/login" (launches Auth0) Done
    "/loggout" (logs user out and redirects to "/") Done
    "/user" (render user view) Done
    "/admin" (render admin view) 
    "/error" (render error view)
    "/failure" (render failure view)

    "/newCompany" (creates new row for company and renders /login)
        -logic to check if the company exists already
        -if company can be created
            -new company created in company table.
            -owners name to the user table (owner = true)
        -redirect(/login)

    "/api/posts" (gets all posts from db and renders /admin)
    "/api/adminPosts/:user" (gets one employees posts from db and renders /admin)
    "/api/posts/:category" (gets all category post from db and renders /admin)
    "/api/newUser" (creates a new user and renders /admin)
    "/api/newQuestion" (creates a new question and renders /admin)
    "/api/getAnswers" (gets all answers from db and renders /admin)

    "/api/answers/:user (creates answers from employee)
    "/api/posts/:user" (gets all personal posts from db and renders /user) 
    "/api/newMessage" (creates a new message for that user)
    "/api/getQuestions" (gets all admin messages and renders /user)
    
    


# Database 

    - Models
        - Companies
            id: VARCHAR,
            name: VARCHAR

        - Users
            id: VARCHAR,
            company_id: FORIEGN KEY, 
            name: VARCHAR,
            owner: BOOLEAN,
            admin: BOOLEAN

        - Posts
            id: VARCHAR
            user_id: FORIEGN KEY,
            category: VARCHAR,
            subject: VARCHAR,
            content: VARCHAR,
            private: BOOLEAN

        - Questions
            id: 
            question:
            is_active: BOOLEAN

        - Answers
            id: VARCHAR,
            user_id: FORIEGN KEY,
            question_id: 
            value: VARCHAR 



    





        
