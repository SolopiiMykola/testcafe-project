import {Selector, t} from "testcafe";
import {IWebDriver} from "../pages/base-web-driver";

/**
 * WebDriverTC (TestCafe) class is an implementation of the framework agnostic
 * IWebDriver specification. Implements all UI actions defined in
 * IWebDriver using TestCafe's TestController, Selector and ClientFunction.
 */
export class WebDriverTC implements IWebDriver {

    /**
     * Clicks the page element.
     * Capable types: All visible elements.
     * @param element - Page element to be clicked
     * @param options  - Available click options
     */
    async click(element: string, options?: object) {
        await t.click(this.createSelector(element), options);
    }

    /**
     * Type text into an element with writable text capabilities.
     * Capable types: input, textarea.
     * Note: If no text is provided, the function will return without trying to type text.
     * This is intentional, to allow for negative testing or optional fields,
     * because the field entry will be skipped.
     * @param element - Page element to type text into
     * @param text - Text to type into page element
     * @param pressTabButton - use 'tab' key to get cursor out of input field so that driver doesn't wait to find the button the click
     */
    async typeText(
        element: string,
        text?: string,
        pressTabButton: boolean = true,
    ) {
        try {
            // Return if there's no text to add (TestCafe throws error otherwise)
            if (!text) {
                return;
            }

            // Type new text
            await t.typeText(this.createSelector(element), text);

            // use 'tab' key to get cursor out of input field
            if (pressTabButton) {
                await t.pressKey('tab');
            }
        } catch (err) {
            throw new Error(`Error attempting to type text into element: 
        ${JSON.stringify(element)}
        Original error: ${(err as Error).name}`);
        }
    }

    /**
     * Select a dropdown option by the attribute value.
     * (The value attribute of the option, this value isn't always visible on the page.)
     * Capable type: Select.
     * Example value: <option value="1">One</option>.
     * @param element - Page element to select option from
     * @param value - Option attribute value to select
     */
    async selectDropDownOptionByAttributeValue(
        element: string,
        value: string
    ) {
        await t
            .click(this.createSelector(element))
            .click(Selector('option').withAttribute('value', value));
    }

    /**
     * Gets the text value of an element.
     * Capable types: All element types
     * Note: The return value of this function can be different from getValue.
     * Depending on the context the function you need to use will differ.
     * Note: On Select elements, this will return a comma separated list of all elements,
     * not the selected text. To get selected text on a Select element, use the function
     * getSelectedText
     * @param element - Page element to get text from
     * @returns Promise (string)
     */
    async getText(element: string, regexValue?: any, isTrim: boolean = true): Promise<string> {
        if (isTrim) {
            return (await this.createSelector(element).innerText).replace(regexValue, ' ').trim();
        }
        else {
            return (await this.createSelector(element).innerText).replace(regexValue, ' ');
        }

    }

    /**
     * Provide a file for upload.
     * @param element - Page element to perform the upload.
     * @param filePath - Path to the file to upload.
     */
    async setTestFileUpload(element: string, filePath: string[]) {
        await t.setFilesToUpload(this.createSelector(element), filePath);
    }

    /**
     * Private method
     * Internal TestCafe function that creates a Selector object.
     * Selectors are instances of elements on a page that can be interacted with.
     * @param element - Page element to perform search with to create a Selector
     * @param timeout - (Optional) amount of time in milliseconds to wait for element
     * @returns Selector
     */
    private createSelector(
        element: string,
        timeout: number = 5000
    ): Selector {
        // Create selector
        return Selector(element, { timeout });
    }
}
