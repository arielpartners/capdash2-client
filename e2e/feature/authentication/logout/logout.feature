Feature: CapDash2 User Logout
  As a user
  I should be able to log out of the DHS Capacity Dashboard
  So I can keep my account secure after I am finished using it

Scenario: A user that is logged in can log out
  Given the user is logged in
  When the user selects the User menu
  Then the user should see the option to log out
  When the user selects log out
  Then the user should navigate to the login page
