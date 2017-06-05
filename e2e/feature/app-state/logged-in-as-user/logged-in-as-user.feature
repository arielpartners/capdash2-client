Feature: CapDash2 Logged In As User
  As a tester
  I should be able set an initial login state without repeatedly logging in

  Scenario Outline: The scenario should start with <user> already logged in
    Given logged in as <user> using <email>:


    Examples:
      | user     | email                   |
      | Jane Doe | sample_user@dhs.nyc.gov |
