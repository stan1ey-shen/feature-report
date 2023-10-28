Feature: Create Account

    Scenario: Successful account creation
        Given the application is installed and accessible
        And I am on the registration page
        When I provide a valid username "new_user123"
        And I provide a valid email address "new_user@example.com"
        And I set a valid password "Password123"
        And I confirm the password "Password123"
        And I click the "Create Account" button
        Then a new account with the provided details should be created
        And I should be directed to the user's profile page