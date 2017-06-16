Feature: Capacity Dashboard Header
  As a user
  I should be able to view and interact with the dashboard header
  So I can adjust application settings and navigate through the app

Background:
  Given the user is logged in
  And the Capacity Dashboard header is loaded

Scenario Outline: The user can access the <menu> header menu
  When the user selects the <menu> menu
  Then the <menu> menu should be displayed
  When the user selects the <menu> menu
  Then the <menu> menu should be hidden

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
  When the user selects the Languages menu
  Then the Languages menu should be displayed
  When the user selects the User menu
  Then the User menu should be displayed
  And the Languages menu should be hidden
