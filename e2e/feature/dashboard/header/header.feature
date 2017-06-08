Feature: Capacity Dashboard Header
  As a user
  I should be able to view and interact with the dashboard header
  So I can adjust application settings and navigate through the app

Background:
  Given the user is logged in
  And the Capacity Dashboard header is loaded

Scenario Outline: The user can access the <menu> header menu
  When the user selects the <menu> menu
  Then the user should see the <menu> menu
  When the user selects the <menu> menu
  Then the user should not see the <menu> menu

  Examples:
    | menu          |
    | Mega-menu     |
    | Notifications |
    | Languages     |
    | User          |

Scenario Outline: The user can navigate to the <page> page through the <menu> header menu
  When the user selects the <menu> menu
  And the user selects the <link> link
  Then the user should navigate to the <link> page from the header

  Examples:
    | menu | link                 |
    | User | Edit Profile         |
    | User | Work Orders Schedule |
    | User | CapApp Setting       |

Scenario: The user can switch between header menus
  When the user selects the Mega-menu menu
  Then the user should see the Mega-menu menu
  When the user selects the User menu
  Then the user should see the User menu
  And the user should not see the Mega-menu menu
