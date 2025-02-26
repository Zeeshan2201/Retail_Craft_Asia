import { Link } from 'react-router-dom';


const teamMembers = [
  {
    name: "Jean-Boris ROUX",
    role: "Founder",
    shortDescription: "Jean-Boris ROUX, aka 'JB', is a seasoned leader with over 25 years of experience...",
    image: "/Team/Member_1.png",
  },
  {
    name: "Parag Wasnik",
    role: "CEO",
    shortDescription: "An engineer and an MBA, Parag has over two decades of experience in FMCG, Retail...",
    image: "/Team/Member_2.png",
  },
];

function ManagementTeam() {

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Management Team</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="p-8 border rounded-lg shadow-lg bg-white transition-transform duration-300 hover:shadow-xl hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-25 rounded-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">{member.shortDescription}</p>
            <Link to="/about" className="mt-4 text-base font-medium text-neutral-900 hover:bg-neutral-300">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagementTeam;
