import Stripe from "./Stripe";

const Stripes = () => {
  const data = [
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6a4cf0ce836e62f658355a3d_Case-Study-logo-onDark.png",
      num: 48,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62de955b9aa4d2dd0_64868959b481181dd14c03a2_Silvr_logo_white.png",
      num: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b842b14070a2366d8a6bd_jologo-onDark.svg",
      num: 11,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg",
      num: 48,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d4ee1fe5ae69e47b6c1c_Lavendar-logo-white.svg",
      num: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d4ee1fe5ae69e47b6c1c_Lavendar-logo-white.svg",
      num: 11,
    },
  ];
  return (
    <div className="mt-15 flex justify-center items-center">
        {data.map((ele)=>(
            <Stripe obj={ele}/>

        ))}
    </div>
  );
};
export default Stripes;
