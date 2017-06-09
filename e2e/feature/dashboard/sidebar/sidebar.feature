Feature: Capacity Dashboard Sidebar
  As a user
  I should be able to select sidebar menu items
  So I can navigate to important app features and adjust settings

Background:
  Given the user is logged in
  And the Capacity Dashboard sidebar is loaded

Scenario Outline: The user can navigate using the <item> top level link
  When the user selects the <item> sidebar item
  Then the user should navigate to the <item> page from the sidebar
  And the <item> sidebar item should be highlighted

  Examples:
    | item                      |
    | Edit Demand & Projections |
    | Intake/Vacancy Control    |

Scenario Outline: The user can navigate using links in the <item> sub menu
  When the user selects the <item> sidebar item
  Then the user should see the <sub-item> item in the <item> sub-menu
  When the user selects the <sub-item> sub-menu item from the <item> sub-menu
  Then the user should navigate to the <sub-item> page from the sidebar
  And the <item> sidebar item should be highlighted
  And the <sub-item> sidebar item should be highlighted

  Examples:
    | item         | sub-item             |
    | Dashboard    | Main Dashboard       |
    | Units        | Offline Units        |
    | Units        | HERO                 |
    | Units        | L.T.R.               |
    | Units        | Demand & Projections |
    | Reports      | General Reports      |
    | App Settings | General Settings     |
    | App Help     | General Help         |

Scenario: The user can navigate to individual reports using Other Reports
  When the user selects the Reports sidebar item
  Then the user should see the Other Reports item in the Reports sub-menu
  When the user selects the Other Reports sub-menu item from the Reports sub-menu
  Then the user should see the Report All item in the Other Reports sub-menu
  When the user selects the Report All sub-menu item from the Other Reports sub-menu
  Then the user should navigate to the Report All page from the sidebar
  And the Reports sidebar item should be highlighted
  And the Report All sidebar item should be highlighted

Scenario: Sub menu collapses when another is expanded
  When the user selects the Units sidebar item
  Then the user should see the Offline Units item in the Units sub-menu
  When the user selects the Reports sidebar item
  Then the user should see the General Reports item in the Reports sub-menu
  And the Offline Units item in the Units sub-menu should not be visible

Scenario: the user can minify and maximize the sidebar
  When the user selects the sidebar minify button
  Then the sidebar should be minified
  When the user selects the sidebar minify button again
  Then the sidebar should be maximized
