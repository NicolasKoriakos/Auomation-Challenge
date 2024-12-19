export class HomePageUtils {
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
    PRODUCTS = "products",
    VIEW_PRODUCT = "view-product"
   
  }
  
  export const ElementMap: Record<ElementEnum, string> = {
    [ElementEnum.PRODUCTS]: "xpath=//a[@href='/products']",
    [ElementEnum.VIEW_PRODUCT]:"xpath=//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]"
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
  