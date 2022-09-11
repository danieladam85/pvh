Feature: Delete address

  Scenario Outline: As a user with valid credentials, I can delete an address

    Given I open the main page
    When I click on the accept cookies button
    When I click on the login link
    And I login with <username> and <password>    
    And I click on account header
    And I click on the adress book
    And I can delete an address

    Examples:
      | username                 | password               |
      | danieladam85@gmail.com   | 5mSTwZp#avcCjNA        |