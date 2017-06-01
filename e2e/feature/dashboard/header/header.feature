Feature: Capacity Dashboard Header
  As a user
  I should be able to view and interact with the dashboard header
  So I can adjust application settings and navigate through the app

Background:
  Given the user is logged in

Scenario: The user can show and hide the mega menu
  Given the Capacity Dashboard header is loaded
  When the user selects the Main Menu dropdown
  Then the user should see the mega menu
  When the user selects the Main Menu dropdown again
  Then the user should not see the mega menu

Scenario: The user can show and hide the notifications menu
  Given the Capacity Dashboard header is loaded
  When the user selects the notification menu
  Then the user should see the notification menu
  When the user selects the notification menu again
  Then the user should not see the notification menu

Scenario: The user can switch between header menus
  Given the Capacity Dashboard header is loaded
  When the user selects the Main Menu dropdown
  Then the user should see the mega menu
  When the user selects the user dropdown menu
  Then the user should see the user dropdown menu
  And the user should not see the mega menu
