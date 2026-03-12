export default function Services() {
  const services = [
    {
      title: "App & Website Development",
      description: "Custom, responsive, and scalable applications and websites."
    },
    {
      title: "Logo & Brand Design",
      description: "Professional logos and visual identities that represent your brand."
    },
    {
      title: "Digital Strategy Consulting",
      description: "Clear strategies to help businesses grow their digital presence."
    },
    {
      title: "Brand Identity & System Support",
      description: "Maintain and refine your brand systems and workflows."
    },
    {
      title: "Systems Editing & Optimization",
      description: "Improve performance, usability, and efficiency of existing systems."
    },
    {
      title: "Paid Online Research",
      description: "Professional research services with detailed insights."
    }
  ];

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">

        <h2 className="text-3xl font-bold text-center text-[#1F3A5F]">
          Our Services
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Solutions designed to help businesses and individuals succeed digitally.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-[#1F3A5F]">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}