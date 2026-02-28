import LogoSVG from "../assets/miti.logo";

export default function Navbar() {
  return (

    <nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-16 py-6 border-b-2 border-primary"
      style={{
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      
      <div className="flex gap-3 items-center">
      <LogoSVG size={32} color="#082408"/>
      <p className="text-xl font-extrabold mono-font text-primary">  miti. </p>
      </div>

      <div className="flex gap-8  ">
         <p>Contact Us</p>
        <p>Pricing</p>
        <p>Docs</p>
        
      </div>

      <button className="text-primary cursor-pointer ">Get started</button>

     
     
    </nav>
  );
}