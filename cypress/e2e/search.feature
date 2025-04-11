# Feature: Pencarian Konten di Website ZeroAppScurity

  
#   Sebagai pengguna, saya ingin menggunakan fitur pencarian untuk menemukan informasi yang relevan di website.
#   Untuk memastikan bahwa fitur pencarian berfungsi dengan baik dan memberikan hasil yang sesuai.

#   Scenario: Melakukan pencarian dengan kata kunci yang valid
#     Given Pengguna berada di halaman utama "http://zeroappscurity.com"
#     When Pengguna memasukkan kata kunci "security" pada kolom pencarian
#     And Pengguna menekan tombol "Search"
#     Then Sistem menampilkan hasil pencarian yang relevan dengan kata kunci "security"


# Feature: Search functionality on Zero WebAppSecurity

#   As a user
#   I want to use the search functionality
#   So that I can find relevant information on the website

#   Scenario: Search for a valid term
#     Given I open the homepage
#     When I log into my account
#     And I search for "online banking"
#     Then I should see search results related to "Zero - Free Access to Online Banking"

Feature: Search functionality on Zero WebAppSecurity

  As a user
  I want to use the search functionality
  So that I can find relevant information on the website

  Scenario: Search for a valid term
    Given I open the homepage
    When I log into my account
    And I search for "online banking"
    Then I should see search results related to "Zero - Free Access to Online Banking"
