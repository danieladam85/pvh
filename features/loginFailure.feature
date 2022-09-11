Feature: Failed login Tommy Hilfiger website

  Scenario Outline: As a non-user, I can't log into the secure area

    Given I open the main page
    When I click on the accept cookies button
    When I click on the login link
    When I login with <username> and <password>
    Then I should see an error message saying <message>

    Examples:
      | username               | password               | message                                     |
      | 1234                   | invalid                | Sorry, dit is geen geldig e-mailadres      |
      |                        | invalid                | Vul het veld in                            |
      | danieltest@gmail.com   |                        | Vul het veld in                            |

  Scenario Outline: As a user with invalid credentials, I can't log into the secure area

    Given I open the main page
    When I click on the accept cookies button
    When I click on the login link
    When I login with <username> and <password>
    Then I should see an error message saying <message>

    Examples:
      | username                 | password | message                                                               |
      | danieladam85@gmail.com   | invalid  | Je gebruikersnaam en wachtwoord matchen niet. Probeer het nog eens.   |
   

