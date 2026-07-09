import { FaGithub } from "react-icons/fa";
import Header from '../Components/Header'
import './index.css'

function App() {
  return (
    <div className="bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_42%),linear-gradient(135deg,#f8efe6_0%,#efe0ca_100%)] text-[#2f2a24]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-5 sm:px-7 lg:px-8">
        <Header />

        <main className="mt-6 grid flex-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-4xl border border-[#e4d1b3] bg-[#fdf8f2]/95 p-7 shadow-[0_30px_80px_-40px_rgba(70,49,28,0.45)] sm:p-10 lg:p-12">
            <div className="inline-flex items-center rounded-full border border-[#dcc5a0] bg-[#f5e8d6] px-3 py-1 text-sm text-[#7a6248]">
              A calm way to watch together
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#231d16] sm:text-5xl lg:text-6xl">
              Gather your people for a softer kind of movie night.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#665745] sm:text-xl">
              Connect in real time, share a quiet room, and make every evening feel a little more personal.
            </p>

            <div id="join" className="mt-8 flex flex-col gap-3 sm:flex-row">
              <label className="flex flex-1 items-center gap-3 rounded-full border border-[#d9c6a5] bg-[#fcf7f1] px-4 py-3 shadow-inner">
                <span className="text-sm text-[#7a6248]">✦</span>
                <input
                  type="text"
                  placeholder="Enter room code"
                  className="w-full bg-transparent text-sm text-[#2f2a24] outline-none placeholder:text-[#8f7e67]"
                />
              </label>
              <button className="rounded-full bg-[#2f2a24] px-5 py-3 text-sm font-medium text-[#f9f1e8] transition hover:bg-[#40352b]">
                Join room
              </button>
              <button className="rounded-full border border-[#c9b08c] bg-[#f3e2ce] px-5 py-3 text-sm font-medium text-[#4b3b2b] transition hover:bg-[#e8d3b8]">
                Create room
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-sm text-[#6d5a3f]">
              <span className="rounded-full border border-[#e2cfb1] bg-[#fbf2e6] px-3 py-1">
                Private rooms
              </span>
              <span className="rounded-full border border-[#e2cfb1] bg-[#fbf2e6] px-3 py-1">
                Low-light chat
              </span>
              <span className="rounded-full border border-[#e2cfb1] bg-[#fbf2e6] px-3 py-1">
                Cozy sync
              </span>
            </div>
          </section>

          <section className="rounded-4xl border border-[#e0caa8] bg-[#efe0ca] p-6 shadow-[0_24px_70px_-35px_rgba(71,52,31,0.45)] sm:p-7 lg:p-8">
            <div className="rounded-3xl border border-[#d8c1a2] bg-[#f9f0e5] p-5">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#7a6248]">
                Live room preview
              </p>
              <div className="mt-4 rounded-[1.2rem] bg-[#2f2a24] p-4 text-[#f7efe8]">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Room · Moonlight</span>
                  <span className="rounded-full bg-[#4b3b2b] px-2.5 py-1 text-xs">Live</span>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="rounded-2xl bg-[#3d342b] p-3">Mina: “The lighting in this scene is perfect.”</div>
                  <div className="rounded-2xl bg-[#3d342b] p-3">Toby: “I made tea. It feels cinematic.”</div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-full border border-[#e2cfb1] bg-[#f7eadb] px-4 py-3 text-sm text-[#6a533d]">
                <span>12 friends here</span>
                <span>Next scene in 04:12</span>
              </div>
            </div>
          </section>
        </main>

        <footer id="contact" className="mt-6 flex flex-col gap-2 border-t border-[#d8c1a2] pt-5 text-sm text-[#6d5a3f] sm:flex-row sm:items-center sm:justify-between">
          <p>Made for friends who are miles apart. Stay connected. Stream together. Share every moment.</p>
          <a className=" text-2xl" href="https://github.com/kashish00208/scalable-chat-application">
            <FaGithub />
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App
