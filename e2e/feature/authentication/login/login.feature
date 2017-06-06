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
  When the user enters text in the <field> field
  And the user removes all text in the <field> field
  Then an alert message reading <text> is displayed

  Examples:
    | field    | text                       |
    | email    | "You must add an email."   |
    | password | "You must add a password." |
