@manual
Feature: Login Account

    Scenario: Successful login with valid credentials
        Given the application is installed and accessible
        And I am on the login page
        When I enter a valid username "user123" and a valid password "Password123"
        Then I should be logged into my account

    Scenario: Unsuccessful login with invalid username or password
        Given the application is installed and accessible
        And I am on the login page
        When I enter an invalid username <username> and a valid password <password>
        Then I should see an error message "Invalid credentials"

        Examples:
            | username         | password        |
            | user123          | InvalidPassword |
            | nonexistent_user | Password123     |