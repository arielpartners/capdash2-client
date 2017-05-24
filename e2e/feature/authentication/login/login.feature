Feature: CapDash2 User Login
  As a user
  I should be able to securely log in to the DHS Capacity Dashboard
  So I can use the app with my personal settings

Scenario: The user can login
  Given the user navigates to the CapDash2 homepage
  When the user enters a valid email address and password
  And the user clicks the sign in button
  Then the user should see their personalized dashboard
