/**
 * URI 매칭에 실패할 시 발생하는 예외
 */
export default class InstargramURIException extends Error {

	public static UNSUPPORTED_TYPE: string = "Only Instagram URI is allowed.";

	constructor(message?: string) {
		super(message);

		this.name = "RegExpURIException";
		this.message = (<any> new Error()).stack;
	}
}