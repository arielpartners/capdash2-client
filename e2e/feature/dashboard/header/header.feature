Feature: Capacity Dashboard HeaderPage
  As a user
  I should be able to view and interact with the dashboard header
  So I can adjust application settings and navigate through the app

Scenario: The user can hide and show the mega menu
  Given the user is logged in
  When the user selects the Main Menu dropdown
  Then the user should see the mega menu
  When the user selects the Main Menu dropdown again
  Then the user should not see the mega menu
