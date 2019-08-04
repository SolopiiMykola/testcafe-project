import {t} from "testcafe";

/**
 * Assert the actual string contains the expected string
 * @param actual Actual value
 * @param expected Expected value
 * @param message Message to display if the assertion fails
 *
 * Example:
 * ```ts
 * await assert.contains('playground', 'ground');
 * ```
 */
export async function contains(
    actual: string | undefined,
    expected: string | undefined,
    message?: string
): Promise<void> {
    await t.expect(actual).contains(expected, message);
}

/**
 * Assert the actual and expected values are deeply equivalent
 * @param actual Actual value
 * @param expected Expected value
 * @param message Message to display if the assertion fails
 *
 * Example:
 * ```ts
 * await assert.equals(1, 1);
 * ```
 */
export async function equals(actual: any, expected: any, message?: string): Promise<void> {
    await t.expect(actual).eql(expected, message);
}

/**
 * Assert the condition resolves to false.
 * A value of true will fail the assertion.
 * @param condition Boolean resolved value
 * @param message Message to display if the assertion fails
 *
 * Example:
 * ```ts
 * const expectingFalse: boolean = getFalse();
 * await assert.falsy(expectingFalse);
 * ```
 */
export async function falsy(condition: boolean, message?: string): Promise<void> {
    await t.expect(condition).notOk(message);
}

/**
 * Assert the condition resolves to true.
 * A value of false will fail the assertion.
 * @param condition Boolean resolved value
 * @param message Message to display if the assertion fails
 *
 * Example:
 * ```ts
 * const expectingTrue: boolean = getTrue();
 * await assert.truthy(expectingTrue);
 * ```
 */
export async function truthy(condition: boolean, message?: string): Promise<void> {
    await t.expect(condition).ok(message);
}