const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2 ">
          <h1 className="text-[11.5rem] leading-none tracking-tight font-semibold">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h3 className="capitalize text-zinc-500 mb-7">socials</h3>
            {["instagram", "twitter (X?)", "linkedIn", "facebook"].map(
              (item, index) => (
                <a href="#" className="block mt-3 capitalize text-zinc-300">
                  {item}
                </a>
              ),
            )}
          </div>
          <div className="basis-1/3">
            <h3 className="capitalize text-zinc-500 mb-7">sitemap</h3>
            {["home", "work", "careers", "contact"].map((item, index) => (
              <a href="#" className="block mt-3 capitalize text-zinc-300">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right ">
              {" "}
              Refokus is a pioneering digital agency driven by design and
              empowered by technology
            </p>
            <img
              src="https://www.enterprisecommunity.org/themes/custom/ecp/images/default-social-share.jpg"
              alt=""
              className="w-32 mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
