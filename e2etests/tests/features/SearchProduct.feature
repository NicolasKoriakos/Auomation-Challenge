Feature: Products feature
    Background:
    Given Verify that home page is visible successfully

    @Test09 @products
    Scenario: Search product
    Given I click on "products" element in homepage
    And Verify user is navigated to ALL PRODUCTS page successfully
    When I validate search products is visible in allProductsPage
    Then I send "Jeans" to "search-product" element in allProductsPage
    And I click on "search" element in allProductsPage
    And Verify all the products related to search are visible

    @Test12 @products
    Scenario: Search product
       Given I click on "products" element in homepage
       And Hover over "first" "product-info" element and click "add-to-cart" element
       When I click on "continue-shopping" element in allProductsPage
       And Hover over "second" "product-info" element and click "add-to-cart" element
       Then I click on "view-cart" element in allProductsPage
       And Verify products in cart and data

    @Test13 @products
    Scenario: Verify product quantity
    Given I click on "view-product" element in homepage
    And Verify product detail is opened
    When I change product quantity to "4"
    And I click on "add-to-cart" element in ViewProductPage
    Then I click on "continue-shopping" element in ViewProductPage
    And I click on "cart" element in ViewProductPage 
    And Verify cart quantity