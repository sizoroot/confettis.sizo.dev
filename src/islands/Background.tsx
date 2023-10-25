export default function Background() {
    return (
        <>
            <div class="absolute top-0 w-full z-0">
                <img class="w-full opacity-[0.8] lg:mt-[-200px] " src="/images/hero.webp" />
            </div>
            <div class="absolute bottom-0 w-full z-0">
                <img class="w-full opacity-[0.5] lg:mt-[-150px] " src="/images/footer.webp" />
            </div>
        </>
    )
}