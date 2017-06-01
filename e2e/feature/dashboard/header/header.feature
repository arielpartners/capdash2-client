Feature: Capacity Dashboard Header
  As a user
  I should be able to view and interact with the dashboard header
  So I can adjust application settings and navigate through the app

Background:
  Given the user is logged in

Scenario Outline: The user can access header menus
  Given the Capacity Dashboard header is loaded
  When the user selects the <menu> menu
  Then the user should see the <menu> menu
  When the user selects the <menu> menu again
  Then the user should not see the <menu> menu

  Examples:
    | menu |
    | mega-menu |
    | notifications |

Scenario: The user can switch between header menus
  Given the Capacity Dashboard header is loaded
  When the user selects the mega-menu menu
  Then the user should see the mega-menu menu
  When the user selects the user menu
  Then the user should see the user menu
  And the user should not see the mega-menu menu
