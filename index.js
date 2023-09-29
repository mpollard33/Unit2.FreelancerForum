class Freelancer {
  constructor (name, occupation, price) {
    this.name = name;
    this.occupation = occupation;
    this.price = price;
  }
}

const Alice = new Freelancer ('Alice', 'Teacher', 30);
const Bob = new Freelancer ('Bob', 'Writer', 50);
const Carol = new Freelancer ('Carol', 'Programmer', 70);

const freelancers = [Alice, Bob, Carol];

const names = ['Derek', 'Eric', 'Fran', 'Greta'];
const occupations = [
  'Editor',
  'Product Manager',
  'QA Tester',
  'Design Specialist',
];

const addFreelancer = freelancer => {
  // randomly picks a name
  const nameIndex = Math.floor (Math.random() * names.length);
  // randomly picks occupation
  const occupationIndex = Math.floor (Math.random() * occupations.length);
  // randomly generates starting price
  const startingPrice = Math.floor (Math.random() * 13 * 10) + 30;
  // create in obj and push to freelancer array
  const newFreelancer = new Freelancer (
    names[nameIndex],
    occupations[occupationIndex],
    startingPrice
  );
  freelancers.push (newFreelancer);
};
// Write a function that calculates average
const getAverage = freelancer => {
  return (freelancer.reduce (acc, this.price), 0) / freelancer.length;
};

const renderFreelancers = () => {
  // loop through each freelancer
  // for each freelancer:
  freelancers.map = () => {
    const freelancerDomElements = document.createElement ('li');
    freelancerDomElements.innerHTML = `${freelancer.name} ${freelancer.occupation} $${freelancer.price}`;
    return freelancerDomElements;
  };
  const freelancerListElement = document.getElementById('#freelancers');
  freelancerListElement.replaceChildren(...freelancerDomElements);
  //  create DOM elements
  //  add those DOM elements to the overall DOM element for the freelancer
  //  add the freelancer DOM elements to the browser
};

renderFreelancers();
setInterval(addFreelancer, 1000);
