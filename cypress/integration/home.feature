Feature: Home page

  As a user I can view the "Homepage" and see the content that is displayed (block of text and logo in the top section and "Link boxes" to Studies in the bottom part of the page):

  Scenario: Home Page works
    Given I am on the Home page
    Then I will see the content

  Scenario: Clicking on the link(s)
    Given I am on the Home page
    # When I hover over the "Link boxes"
    # Then I see the title highlited
    When I click on one of the "Link boxes"
    Then I will be taken to the selected study page in the same tab