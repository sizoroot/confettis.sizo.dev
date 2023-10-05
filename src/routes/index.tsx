import Background from "../islands/Background.tsx"
import Home from "../islands/Home.tsx"
import Usage from "../islands/Usage.tsx"
import Confettis from "../islands/Confettis.tsx"
import Footer from "../islands/Footer.tsx"

export default function HomePage() {
    return (
		<>
			<Background	/>
			<Home />
			<Usage />
			<Confettis />
			<Footer />
		</>
  	)
}
