import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import x from "./assets/x.png";

function App() {

  const template = [{
    logo: github,
    link: "https://github.com/Anjansuman"
  }, {
    logo: linkedin,
    link: "https://www.linkedin.com/in/anjansuman/"
  }, {
    logo: x,
    link: "https://x.com/AnjanSuman8"
  }]

return <div className="h-screen w-screen bg-gradient-to-br from-[#000420] to-[#000] flex flex-col justify-center items-center gap-y-40 text-[#e4e4e4]">
  <div className="flex flex-col items-center gap-y-3">
    <div className="text-8xl tracking-wide font-medium">
      TRUFFLE 
    </div>
    <div className="text-2xl text-emerald-700 ">
      configured with
    </div>
    <div className="text-3xl flex justify-center items-center gap-3">
      {["React", "TypeScript", "TailwindCSS"].map((name) => (
        <div className="border-2 rounded-2xl px-4 py-2">
          {name}
        </div>
      ))}
    </div>
  </div>
  <div className="flex gap-3">
    {template.map((item, index) => (
      <a
        key={index}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border border-black p-1 rounded-xl backdrop-blur-2xl"
      >
        <img src={item.logo} alt="" className="h-13" />
      </a>
    ))}
  </div>
</div>

}
export default App
