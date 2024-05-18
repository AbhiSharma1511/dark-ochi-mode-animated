/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				// xs: '480px', // Add this if you need a specific breakpoint for extra small screens
				// sm: '640px',
				// md: '768px',
				// lg: '1024px',
				// xl: '1280px',
				// '2xl': '1536px',
			  },
		},
		extend: {
			fontFamily: {
				"pp-neue-montreal": "'PP Neue Montreal', sans-serif",
        "FoundersGrotesk":"FoundersGrotesk-600",
				redaction: "Redaction, serif",
				"libre-caslon-condensed": "'Libre Caslon Condensed', monospace",
			},
    }
  },
  plugins: [
  //   require("tailwindcss-animate"),
	// 	require("@tailwindcss/typography"),
	// 	require("@tailwindcss/container-queries"),
  ],
}