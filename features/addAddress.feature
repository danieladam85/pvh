Feature: Add address

  Scenario Outline: As a user with valid credentials, I can create a new address

    Given I open the main page
    When I click on the accept cookies button
    When I click on the login link
    And I login with <username> and <password>    
    And I click on account header
    And I click on the adress book
    And I add an address with details: <adressType>, <firstName>, <lastName>, <street>, <houseNumber>, <city>, <postalCode>, <phoneNumber>, <country>
    Then I should see a select containing the name of the street displaying <street>

    Examples:
      | username                | password             | adressType         | firstName | lastName | street      | houseNumber | city    | postalCode | phoneNumber | country   | 
      | danieladam85@gmail.com  | 5mSTwZp#avcCjNA      | billingAndDelivery | Daniel    | Adam     | Testdreef   | 200         | Utrecht | 3562 AA    | 0612345678  | Nederland |
      
