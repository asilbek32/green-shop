import gardenCare from "../../../assets/gardenCare.png";
import plant from "../../../assets/plant.png";
import watering from "../../../assets/watering.png";

const services = [
  {
    img: gardenCare,
    title: "Garden Care",
    desc: "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
  {
    img: plant,
    title: "Plant Renovation",
    desc: "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
  {
    img: watering,
    title: "Watering Garden",
    desc: "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
];

function FooterCard() {
  return (
    <div className="py-6">
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6
      "
      >
        {services.map((item, idx) => (
          <div
            key={idx}
            className="
              flex flex-col items-start gap-4 
              border border-gray-200 rounded-xl p-5 
              sm:border-0 sm:p-0 sm:rounded-none
            "
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-[60px] h-[60px] object-contain"
            />

            <h3 className="font-semibold text-lg text-[#130d0d]">
              {item.title}
            </h3>

            <p className="text-sm text-[#727272] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterCard;
