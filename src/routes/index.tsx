import Background from "../islands/Background.tsx"
import Home from "../islands/Home.tsx"
import Usage from "../islands/Usage.tsx"
import Confettis from "../islands/Confettis.tsx"
import Author from "../islands/Author.tsx"
import Footer from "../islands/Footer.tsx"

export default function HomePage() {
    return (
		<>
			<Background	/>
			<Home />
			<Usage />
			<Confettis />
			<Author />
			<Footer />
		</>
  	)
}
