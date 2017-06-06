Feature: CapDash2 User Login
  As a user
  I should be able to securely log in to the DHS Capacity Dashboard
  So I can use the app with my personal settings

Scenario: The user with valid credentials can log in
  Given the user navigates to the CapDash2 homepage
  When the user logs in with valid credentials
  Then the user should see their personalized dashboard

Scenario Outline: The user is alerted if fields are left blank
  Given the user navigates to the CapDash2 homepage
  And the user is logged out
  When the user clicks the <field> input field and enters no text
  And the user clicks outside of the input field
  Then an alert message reading <text> is displayed
  And the sign in button should be disabled

  Examples:
    | field    | text                     |
    | email    | You must add an email.   |
    | password | You must add a password. |
