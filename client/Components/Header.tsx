const Header = () => {
    return (
        <header className="flex items-center justify-between rounded-full border border-[#d9c6a5] bg-[#fcf7f1]/80 px-5 py-3 shadow-[0_10px_30px_-20px_rgba(69,48,28,0.45)] backdrop-blur sm:px-7">
            <div className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6d5a3f]">
                Atelier Rooms
            </div>

            <a
                href="#join"
                className="rounded-full border border-[#b8a37f] bg-[#2f2a24] px-4 py-2 text-sm font-medium text-[#f9f1e8] transition hover:bg-[#40352b]"
            >
                Start watching
            </a>
        </header>

    )
}

export default Header
