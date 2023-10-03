import { AppProps } from "$fresh/server.ts"

export default function App({ Component }: AppProps) {
	return (
		<html>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Confettis!</title>
				<meta name="description" content="Confettis! 🎉 This is a library to create confettis on your website."></meta>
				<link href="./favicon.ico?v=1" rel="shortcut icon" type="image/x-icon" />
				<link href="./style.css" as="style" rel="stylesheet" type="text/css" />
				<link href="https://cdn.jsdelivr.net/npm/daisyui@3.8.2/dist/full.css" rel="stylesheet" type="text/css" />
				<link href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.36.0/tabler-icons.min.css" rel="stylesheet" type="text/css" />
				<link href="https://unpkg.com/@highlightjs/cdn-assets@11.8.0/styles/tokyo-night-dark.min.css" rel="stylesheet" type="text/css" />
			</head>
			<body>
				<Component />
			</body>
		</html>
	)
}
