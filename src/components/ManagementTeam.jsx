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
    <div className="w-[100%] pb-16 pt-10 md:px-16 px-8  bg-purple-900 ">
      <h2 className="md:text-5xl text-4xl  mb-14 font-bold text-center text-white">Management Team</h2>
      <div className="grid md:flex md:justify-center gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="p-8 md:w-[90%] w-[100%] border rounded-xl  shadow-lg bg-white transition-transform duration-300 hover:shadow-xl hover:scale-105"
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
