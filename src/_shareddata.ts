type LanguageCode = 
"en" | "fr" | "it" | "de" | "es" | "zh-cn" | "zh-tw" | "ja" | "ko" | "pt" | "pt-br" | "af" | "cs" | "da" | "el" | "fi" | "hr" | "hu" | "id" | "ms" | "nb" | "nl" | "pl" | "ru" | "sk" | "sv" | "th" | "tl" | "tr" | "hi" | "bn" | "gu" | "kn" | "ml" | "mr" | "pa" | "ta" | "te" | "ne" | "si" | "ur" | "vi" | "bg" | "fr-ca" | "ro" | "sr" | "uk" | "zh-hk" | "es-cl" | "es-bo" | "es-cr" | "es-ec" | "es-hn" | "es-py" | "es-uy" | "es-co" | "es-do" | "es-mx" | "es-ve" | "es-ar" | "es-pa" | "es-sv" | "es-gt" | "es-ni" | "es-cu" | "es-pe" | "es-pr";

interface EdgeComment {
    node: {
        id: string;
        text: string;
        created_at: number;
        did_report_as_spam: boolean;
        owner: {
            id: number;
            is_verified: boolean;
            profile_pic_url: string;
            username: string;
        };
        viewer_has_liked: boolean;
        edge_liked_by: {
            count: number;
        };
        is_restricted_pending: boolean;
        edge_threaded_comments: {
            count: number;
            page_info: {
                has_next_page: boolean;
                end_cursor: string | null;
            };
            edges: string[];
        };
    };
}

interface EdgeUser {
    node: {
        user: {
            full_name: string;
            id: string;
            is_verified: boolean;
            profile_pic_url: string;
            username: string;
        };
        x: number;
        y: number;
    };
};

interface EdgeCaption {
    node: {
        text: string;
    };
}

interface DisplayResource {
    src: string;
    config_width: number;
    config_height: number;
};

interface ShortcodeMedia {
    __typename: "GraphImage",
    id: string;
    shortcode: string;
    dimensions: {
        height: number;
        width: number;
    },
    gating_info: null,
    fact_check_overall_rating: null,
    fact_check_information: null,
    sensitivity_friction_info: null,
    media_overlay_info: null,
    media_preview: string;
    display_url: string;
    display_resources: DisplayResource[];
    accessibility_caption: string;
    is_video: boolean;
    tracking_token: string;
    edge_media_to_tagged_user: {
        edges: EdgeUser[];
    };
    edge_media_to_caption: {
        edges: EdgeCaption[];
    };
    caption_is_edited: boolean;
    has_ranked_comments: boolean;
    edge_media_to_parent_comment: {
        count: number;
        page_info: {
            has_next_page: boolean;
            end_cursor: string;
        };
        edges: EdgeComment[];
    };
    edge_media_to_hoisted_comment: {
        edges: EdgeComment[];
    };
    edge_media_preview_comment: {
        count: number;
        edges: EdgeComment[];
    };
    comments_disabled: boolean;
    commenting_disabled_for_viewer: boolean;
    taken_at_timestamp: number;
    edge_media_preview_like: {
        count: number;
        edges: []
    },
    edge_media_to_sponsor_user: {
        edges: []
    },
    location: null,
    viewer_has_liked: boolean,
    viewer_has_saved: boolean,
    viewer_has_saved_to_collection: boolean,
    viewer_in_photo_of_you: boolean,
    viewer_can_reshare: boolean,
    owner: {
        id: string;
        is_verified: boolean;
        profile_pic_url: string;
        username: string;
        blocked_by_viewer: boolean;
        restricted_by_viewer: null;
        followed_by_viewer: boolean;
        full_name: string;
        has_blocked_viewer: boolean;
        is_private: boolean;
        is_unpublished: boolean;
        requested_by_viewer: boolean;
        edge_owner_to_timeline_media: {
            count: number;
        },
        edge_followed_by: {
            count: number;
        };
    };
    is_ad: boolean;
    edge_web_media_to_related_media: {
        edges: [];
    };
    edge_related_profiles: {
        edges: [];
    };
};

export default interface SharedData {
    config: {
        csrf_token: string;
        viewer: number | null;
        viwerId: string | null;
    };
    country_code: string;
    language_code: LanguageCode;
    locale: string;
    entry_data: {
        PostPage: [{
            graphql: {
                shortcode_media: ShortcodeMedia;
            };
        }];
    };
    hostname: string;
    is_whitelisted_crawl_bot: boolean;
    deployment_stage: string;
    platform: string;
    nonce: string;
    mid_pct: number;
    zero_data?: object;
    cache_schema_version: number;
    server_checks?: object;
    knobx: {
        [key: number]: boolean;
    };
    to_cache: {
        gatekeepers: {
            [key: number]: boolean;
        };
        qe: {
            [key: string]: {
                q: string | "";
                p: object;
            };
        };
        probably_has_app: boolean;
        cb: boolean;
    };
    device_id: string;
    encryption: {
		key_id: number;
		public_key: string;
		version: number;
	};
    is_dev: boolean;
	rollout_hash: string;
	bundle_variant: string;
	frontend_env: string;
};