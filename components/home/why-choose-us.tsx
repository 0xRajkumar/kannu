import { Shield, ThumbsUp, Clock, Users, Truck, Settings } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="mb-4 text-red-600">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Safety First",
      description: "Your safety is our top priority with well-maintained vehicles and trained staff.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Punctuality",
      description: "We value your time and ensure on-time departures and arrivals.",
    },
    {
      icon: <ThumbsUp className="h-10 w-10" />,
      title: "Customer Satisfaction",
      description: "Dedicated to providing excellent service and addressing your needs.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Experienced Staff",
      description: "Our team of professionals is trained to provide the best service.",
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Modern Fleet",
      description: "We maintain a modern fleet of vehicles equipped with the latest technology.",
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Customized Solutions",
      description: "Tailored transportation solutions to meet your specific requirements.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose Kannu Transport and Travels for a reliable, safe, and efficient transportation experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;