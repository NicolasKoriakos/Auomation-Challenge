export class ViewProductPageUtils {
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
    ADD_TO_CART = "add-to-cart",
    CONTINUE_SHOPPING = "continue-shopping",
    CART = "cart"
  }
  
  export const ElementMap: Record<ElementEnum, string> = {
    [ElementEnum.ADD_TO_CART]: "xpath=//button[@type='button']",
    [ElementEnum.CONTINUE_SHOPPING]:"//button[contains(@class, 'btn-success') and contains(@class, 'close-modal')]",
    [ElementEnum.CART]:"xpath=/html[1]/body[1]/header[1]/div[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[3]/a[1]"
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