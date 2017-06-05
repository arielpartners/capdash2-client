Feature: Capacity Dashboard Sidebar
  As a user
  I should be able to select sidebar menu items
  So I can navigate to important app features and adjust settings

Background:
  Given the user is logged in

Scenario Outline: The user can navigate with top level links
  Given the Capacity Dashboard sidebar is loaded
  When the user selects the <item> sidebar item
  Then the user should see the <item> page
  And the <item> sidebar should be highlighted

  Examples:
    | item |
    | Edit Demand & Projections |
    | Intake/Vacancy Control |
