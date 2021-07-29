import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

		&:focus-visible {
			outline: 3px solid transparent;
		 	box-shadow: 0 0 0 3px var(white1000);
		}
  }

	:root {
		--background: "#202124";
		--white1000: "#ffffff";
		--black1000: "#000000";

		--gray50: "#d9e3e4";
		--gray100: "#9ba9b4";
		--gray200: "#6a6f82";
		--gray300: "#a7a7a7";
		--gray500: "#33363a";
		--gray800: "#2b2c2f";

		--discord: "#7289DA";
		--github: "#181717";
		--google: "#4285F4";

		--linkedin: "#0A66C2";
		--stackOverflow: "#F58025";
		--dribbble: "#EA4C89";
		--behance: "#1769FF";
	}

	html, body {
		min-height: 100%;
	}

  html {
    font-size: 62.5%;
		scroll-behavior: smooth;
  }

  body {
    background: var(white1000);
    color: var(black1000);
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
  }

	a {
		color: var(black1000);
		text-decoration: none;
	}

	button, input {
		font-size: 1.6rem;
		border: transparent;
	}

	ul {
		list-style: none;
	}

	::-webkit-scrollbar {
		width: 1rem;
		height: 1rem;
	}

	::-webkit-scrollbar-track {
		background: var(black1000)50;
		border-radius: 4px;
	}

	::-webkit-scrollbar-thumb {
		background: var(gray300);
		border-radius: 4px;
	}

	::-webkit-scrollbar-corner {
		background: transparent;
	}

	@media (max-width: 768px) {
    html {
      font-size: 57.5%;
    }
  }

	@media (max-width: 320px) {
    html {
      font-size: 55.5%;
    }
  }

	@media (max-width: 280px) {
    html {
      font-size: 52.5%;
    }
  }
`;
