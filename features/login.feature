Feature: Login Tommy Hilfiger website

  Scenario Outline: As a user with valid credentials, I can log into the secure area

    Given I open the main page
    When I click on the accept cookies button
    When I click on the login link
    When I login with <username> and <password>
    Then I should see an account header saying <message>

    Examples:
      | username               | password        | message |
      | danieladam85@gmail.com | 5mSTwZp#avcCjNA | HOI!    |


