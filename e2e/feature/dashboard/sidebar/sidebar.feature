Feature: Capacity Dashboard Sidebar
  As a user
  I should be able to select sidebar menu items
  So I can navigate to important app features and adjust settings

Background:
  Given the user is logged in
  And the Capacity Dashboard sidebar is loaded

Scenario Outline: The user can navigate with top level links
  When the user selects the <item> sidebar item
  Then the user should see the <item> page
  And the <item> sidebar item should be highlighted

  Examples:
    | item |
    | Edit Demand & Projections |
    | Intake/Vacancy Control |

Scenario Outline: The user can navigate using links in sub menus
  When the user selects the <item> sidebar item
  Then the user should see the <sub-item> item in the <item> sub-menu
  When the user selects the <sub-item> sub-menu item from the <item> sub-menu
  Then the user should see the <sub-item> page
  And the <item> sidebar item should be highlighted
  And the <sub-item> sidebar item should be highlighted

  Examples:
    | item | sub-item |
    | Dashboard | Dashboard |
    | Units | Offline Units |
    | Units | HERO |
    | Units | L.T.R. |
    | Units | Demand & Projections |
    | Reports | General Reports |
    | App Settings | General Settings |
    | App Help | General Help |
