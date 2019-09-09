/**
 * @interface IWebDriver Defines actions that can be implemented by a
 * UI automation framework. These definitions are framework agnostic and should
 * be implementable by any fully functional UI automation framework.
 */
export interface IWebDriver {
    click(element: string, options?: object): Promise<void>;
    typeText(
        element: string,
        text?: string,
        pressTabButton?: boolean,
    ): Promise<void>;
    getText(element: string): Promise<string>;
    selectDropDownOptionByAttributeValue(
        element: string,
        value: string
    ): Promise<void>;
    setTestFileUpload(element: string, filePath: string[]): Promise<void>
}
