export default function Header() {
  return (
    <>
      <div className="w-screen h-screen flex justify-start bg-secondary overflow-hidden">
        <div className="flex flex-col justify-center items-start w-screen p-0">
          <div className="h-screen text-[13rem] font-extrabold text-white [writing-mode:vertical-lr] leading-none absolute left-0 translate-x-[-15%]">
            Muntenia
          </div>
        </div>
        <img
          src="images/logo.svg"
          className="w-[70vw] brightness-0 invert"
          alt="Logo"
        />
      </div>
    </>
  );
}
