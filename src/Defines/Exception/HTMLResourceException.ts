/**
 * http 통신 이후 데이터를 가져오는데 실패할 경우 발생합니다.
 */
export default class HTMLResourceException extends Error {

	public static UNSUPPORTED_TYPE: string = "Get Fail Instargram Page HTML Resource.";

	constructor(message?: string) {
		super(message);

		this.name = "HTMLResourceException";
		this.message = (<any> new Error()).stack;
	}
}