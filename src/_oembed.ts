export default interface OEmbedData {
	version: string;
	title: string;
	author_name: string;
	author_url: string;
	author_id: number;
	media_id: string;
	provider_name: "Instagram";
	provider_url: "https://www.instagram.com";
	type: string;
	width: number | null;
	height: number | null;
    html: string;
    thumbnail_url: string;
    thumbnail_width: number;
	thumbnail_height: number;
}