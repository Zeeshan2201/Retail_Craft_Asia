const Button = ({ children, variant = "primary", className = "" }) => {
  const baseStyle = "px-6 py-2 font-semibold rounded-md transition-colors duration-300";
  const variants = {
    primary: "bg-white text-blue-600 hover:bg-blue-50",
    secondary: "bg-transparent border border-white text-white hover:bg-white/10",
  };

  return <button className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>;
};

const ServiceSection = ({ title, description, image, buttonText, listItems, imageLeft = true }) => (
  <section className="container mx-auto grid gap-8 px-4 py-16 text-white md:grid-cols-2 md:items-center">
    {imageLeft ? (
      <>
        <div className="relative h-[400px] overflow-hidden rounded-lg">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="text-lg text-blue-50">{description}</p>
          <Button variant="secondary">{buttonText}</Button>
          <ul className="space-y-2 pt-4">
            {listItems.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </>
    ) : (
      <>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="text-lg text-blue-50">{description}</p>
          <Button variant="secondary">{buttonText}</Button>
          <ul className="space-y-2 pt-4">
            {listItems.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="relative h-[400px] overflow-hidden rounded-lg">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
      </>
    )}
  </section>
);

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center text-white">
        <p className="mb-4 text-sm font-semibold tracking-wider">FROM CONCEPT TO REALITY</p>
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Fusing Creativity With Marketing & Technology To Drive Business Growth
        </h1>
        <Button className="mt-8">SPEAK WITH OUR EXPERTS →</Button>
      </section>

      {/* Digital Strategies Section */}
      <ServiceSection
        title="Digital Strategies & Branding"
        description="Integrating brand strategy with digital initiatives to improve customer experience online & offline"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        buttonText="EXPLORE BRANDING SERVICES →"
        listItems={["DIGITAL STRATEGY", "BRAND STRATEGY", "BRAND IDENTITY", "LOGO DESIGN"]}
      />

      {/* Web Design Section */}
      <ServiceSection
        title="Web Design & Development"
        description="Custom web & app development with strategic insights to generate greater brand engagement, higher conversions & measurable results"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20140427-dkbFh7tQ496AEJoHKD13Slz6nBp5Q5.png"
        buttonText="EXPLORE WEB DESIGN SERVICES →"
        listItems={[
          "CUSTOM WEB DESIGN & DEVELOPMENT",
          "INFORMATION ARCHITECTURE & UX",
          "ECOMMERCE DESIGN & DEVELOPMENT",
          "APP DESIGN & DEVELOPMENT",
        ]}
        imageLeft={false}
      />
    </main>
  );
}
