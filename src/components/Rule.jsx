import React from 'react';

const ruleList = [
  {
    id: 1,
    title: "Erat at semper",
    desc: "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum."
  },
  {
    id: 2,
    title: "Vehicula lacus",
    desc: "Phasellus vel purus sed sapien fringilla posuere. Integer a nibh eget lorem malesuada convallis."
  },
  {
    id: 3,
    title: "Pulvinar varius",
    desc: "Curabitur eget eros nec ligula fermentum congue. In at ipsum sed sapien efficitur malesuada."
  },
  {
    id: 4,
    title: "Tincidunt felis",
    desc: "Suspendisse potenti. Nulla facilisi. Maecenas id nulla sit amet nisl suscipit feugiat."
  }
];

const Rule = () => {
  return (
    <div className="flex h-[600px] justify-between items-center max-w-7xl mx-auto gap-10">
      
      {/* Left Side - Image */}
      <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl">
        <img
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          src="https://maazcars.com/webadmin/assets/images/uploads/seoAboutImages/20240909T082410Rent%20a%20Car%20in%20Trivanbdrum.jpg"
          alt="Car Rental"
        />
      </div>

      {/* Right Side - Rules */}
      <div className="flex-1 space-y-4">
        {ruleList.map((rule) => (
          <div key={rule.id} className="card border-none hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="card-body">
              <h2 className="card-title text-lg font-bold"> <span className='w-[30px] h-[30px] bg-gray-900 text-white rounded-full flex justify-center items-center'>{rule.id}</span> {rule.title}</h2>
              <p className="text-gray-600">{rule.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rule;
