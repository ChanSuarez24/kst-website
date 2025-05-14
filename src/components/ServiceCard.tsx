
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
      <div className="bg-telecom-primary/10 p-4 rounded-full mb-4">
        <div className="text-telecom-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-telecom-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
