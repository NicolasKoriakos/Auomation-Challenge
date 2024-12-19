export class allProductsPageUtils {
    /**
     * Get the element for the specified ID.
     *
     * @param id The ID of the element.
     * @returns The corresponding element for the specified ID.
     */
    public static getElement(id: string): string {
      try {
        const elementEnum = ElementEnum.getElementById(id);
        if (!elementEnum) throw new Error(`Element with ID '${id}' not found.`);
        return ElementMap[elementEnum];
      } catch (error) {
        console.error(error);
        // Return a default value or an empty string if the element is not found
        return "default-element-selector"; // Replace with your default string or fallback
      }
    }
  }
  
  export enum ElementEnum {
    SEARCH_PRODUCT = "search-product",
    SEARCH = "search",
    PRODUCT_INFO = "product-info",
    ADD_TO_CART = "add-to-cart",
    CONTINUE_SHOPPING = "continue-shopping",
    FIRST = "first",
    SECOND = "second",
    VIEW_CART = "view-cart"
  }
  
  export const ElementMap: Record<ElementEnum, string> = {
    [ElementEnum.SEARCH_PRODUCT]: "id=search_product",
    [ElementEnum.SEARCH]: "id=submit_search",
    [ElementEnum.PRODUCT_INFO]:".productinfo.text-center",
    [ElementEnum.ADD_TO_CART]:'a[data-product-id="1"].add-to-cart',
    [ElementEnum.CONTINUE_SHOPPING]:"//button[contains(@class, 'btn-success') and contains(@class, 'close-modal')]",
    [ElementEnum.FIRST]:"0",
    [ElementEnum.SECOND]:"1",
    [ElementEnum.VIEW_CART]:"//div[@id='cartModal']//a[@href='/view_cart']"
  
  };
  
  export namespace ElementEnum {
    /**
     * Get the element enum corresponding to a specific ID.
     *
     * @param id The ID of the element to retrieve.
     * @returns The element enum corresponding to the given ID.
     */
    export function getElementById(id: string): ElementEnum {
      // Find the matching element for the given ID
      for (const key of Object.values(ElementEnum)) {
        if (typeof key === "string" && id.toLowerCase() === key.toLowerCase()) {
          return key as ElementEnum;
        }
      }
      // Return a default value if no matching element is found
      return "" as ElementEnum; // Or any default string you prefer
    }
  }