function Contact() {
  return (
    <div className="mb-40 flex w-full items-center justify-center md:h-screen lg:mb-4">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="pb-6 pt-12 text-center text-3xl tracking-wider text-gray-900 lg:text-5xl">
          Get In Touch with me
        </h2>
        <p className="font-poppins mx-auto px-2 pb-6 text-center text-sm tracking-wider text-gray-900 lg:w-[50%]">
          I&apos;d love to connect and explore exciting opportunities with you!
          Whether you have interesting projects, creative ideas, or just want to
          chat, please don&apos;t hesitate to reach out. My inbox is open 24/7!
        </p>

        <button
          onClick={() => {
            window.open('mailto:youremail@example.com')
          }}
          className="button-UI h-[50px] w-[200px]  hover:bg-gray-900 hover:bg-opacity-40"
        >
          Send me a message
        </button>
      </div>
    </div>
  );
}

export default Contact;