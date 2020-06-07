import SharedData from "@/_shareddata";
import OEmbedData from "@/_oembed";

declare global {
	namespace InstargramParser {
		/**
		 * 인스타그램 정보를 가져옵니다.
		 * @param uri 인스타그램 URI 정보입니다.
		 */
		export function oembed(uri: string): Promise<SharedData>;

		/**
		 * 인스타그램 `oembed`정보를 가져옵니다.
		 * @param uri 인스타그램 URI 정보입니다.
		 */
		export function oembed(uri: string): Promise<OEmbedData>;
	}
}