const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => {
	const config = {
		mode: "production",
		devtool: false,
		cache: true,
		target: "node",
		entry: {
			"instagram-parser": "./src/index.ts"
		},
		output: {
			filename: "[name].js",
			path: path.resolve(__dirname, "dist"),
			library: "[name]",
			libraryTarget: "umd",
			globalObject: "this"
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					exclude: /node_modules/,
          use: "ts-loader"
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin()
		],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
				"@Libs": path.resolve(__dirname, "src/Libs"),
				"@Defines": path.resolve(__dirname, "src/Defines")
			},
			extensions: [".js", ".ts"]
		}
	};

	if (process.env.NODE_ENV === "development") {
		config.mode = "development";
		config.devtool = "source-map";

		config.output.path = path.resolve(__dirname, "test");
	}

	return config;
};