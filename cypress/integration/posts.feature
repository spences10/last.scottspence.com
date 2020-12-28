Feature: Posts page

  As a user I can view the "Posts" and see the content that is displayed block of text and "Link boxes" to:

  Scenario: Posts Page works
    Given I am on the Posts page
    Then I will see the content

  Scenario: Clicking on the link(s)
    Given I am on the Posts page
    # When I hover over the "Link boxes"
    # Then I see the title highlited
    When I click on one of the "Link boxes"
    Then I will be taken to the selected post
