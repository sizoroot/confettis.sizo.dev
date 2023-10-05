import Code from '../components/Code.tsx'
import version from '../utils/version.ts'

const v = await version()

const unpkgUrl = `https://unpkg.com/confettis@${v}/lib/confettis.min.js`
const localUrl = `[path-to-confettis]/lib/confettis.min.js`

export default function Usage() {

    return (
        <div class="relative z-10 lg:mx-auto lg:max-w-[900px] mb-[20px] lg:mb-[50px]">


                <div class="relative p-5 lg:p-0">
                    <div class="p-[15px] md:p-[50px] mb-[80px] z-10 relative">

                        <div class="text-[16px] mt-[15px] text-[#fff] font-[Inter] w-[100%] text-left">

                            <h2 class="text-[28px] md:text-[40px] font-[Inter] font-bold text-center">
                                Usage
                            </h2>

                            <div class="my-10">
                                <h2 class="text-[18px] font-[Inter] font-bold mb-[-15px]">Deno</h2>
                                <Code class="language-javascript">
                                    import * as confetti from 'https://esm.sh/confettis@{ v }'
                                </Code>
                            </div>

                            <div class="my-10">
                                <h2 class="text-[18px] font-[Inter] font-bold mb-[-15px]">Node.js</h2>
                                <Code class="language-shell">
                                    npm install confettis --save
                                </Code>
                                <Code class="language-javascript">
                                    import * as confetti from 'confettis'
                                </Code>
                            </div>

                            <div class="my-10">

                                <h2 class="text-[18px] font-[Inter] font-bold">Browser</h2>

                                <h2 class="text-[14px] font-[Inter] font-normal mb-[-15px] mt-[15px]">CDN</h2>
                                <Code class="html">
                                    { `<script src="` + unpkgUrl + `"></script>` }
                                </Code>

                                <h2 class="text-[14px] font-[Inter] font-normal mb-[-15px] mt-[20px]">Local</h2>
                                <Code class="html">
                                    { `<script src="` + localUrl + `"></script>` }
                                </Code>

                            </div>
                            
                        </div>

                    </div>
                </div>
                

        </div>
    )

}