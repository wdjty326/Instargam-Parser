declare module global {
	namespace InstargramParser {
		/**
		 * 인스타그램 정보를 가져옵니다.
		 * @param uri 인스타그램 URI 정보입니다.
		 */
		export function parse(uri: string): Promise<object>;
	}
}