import Image from "next/image";

const countries = [
  { name: "Saudi Arabia", image: "/flag/saudi-arabia.png" },
  { name: "UAE", image: "/flag/uae.png" },
  { name: "Qatar", image: "/flag/qatar.png" },
  { name: "Kuwait", image: "/flag/kuwait.png" },
  { name: "Oman", image: "/flag/oman.png" },
  { name: "Bahrain", image: "/flag/bahrain.png" },
  { name: "Malaysia", image: "/flag/malaysia.png" },
];

export default function Countries() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Looking for Jobs in these Countries</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {countries.map((country) => (
            <div
              key={country.name}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={country.image}
                  alt={`Jobs in ${country.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">Jobs in {country.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}