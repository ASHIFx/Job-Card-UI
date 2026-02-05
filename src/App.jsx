import Card from './components/card.jsx'

const jobPosts = [
  {
    id: 1,
    logo: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    company: "Amazon",
    time: "1 day ago",
    post: "Frontend Developer",
    tag1: "Senior",
    tag2: "Full Time · Hybrid",
    salary: "$60/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    company: "Microsoft",
    time: "3 days ago",
    post: "Software Engineer",
    tag1: "Junior",
    tag2: "Full Time · Onsite",
    salary: "$35/hr",
    location: "Hyderabad, India",
  },
  {
    id: 3,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHPyUgCEL64IDo5eElnEFljn7RYcMay4iMg&s",
    company: "Meta",
    time: "5 days ago",
    post: "React Engineer",
    tag1: "Senior",
    tag2: "Remote",
    salary: "$70/hr",
    location: "Remote (India)",
  },
  {
    id: 4,
    logo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    company: "Apple",
    time: "2 days ago",
    post: "UI Engineer",
    tag1: "Mid-Level",
    tag2: "Full Time · Onsite",
    salary: "$55/hr",
    location: "Bangalore, India",
  },
  {
    id: 5,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCvLeTHwisItiq2ogbeAY_JJe5SBA38iLCA&s",
    company: "Google",
    time: "Today",
    post: "Frontend Engineer",
    tag1: "Senior",
    tag2: "Full Time · Hybrid",
    salary: "$65/hr",
    location: "Gurgaon, India",
  },
  {
    id: 6,
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
    company: "Netflix",
    time: "1 week ago",
    post: "Web UI Developer",
    tag1: "Senior",
    tag2: "Remote",
    salary: "$80/hr",
    location: "Remote (India)",
  },
  {
    id: 7,
    logo: "https://substackcdn.com/image/fetch/$s_!aFzv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa27a43b7-f1ec-4586-9898-5f43c9b7cdbf_1000x1000.jpeg",
    company: "IBM",
    time: "6 days ago",
    post: "Frontend Specialist",
    tag1: "Mid-Level",
    tag2: "Full Time · Onsite",
    salary: "$45/hr",
    location: "Pune, India",
  },
  {
    id: 8,
    logo: "https://www.citypng.com/public/uploads/preview/hd-flipkart-round-logo-icon-transparent-png-701751694966204grvmunpzzf.png",
    company: "Flipkart",
    time: "4 days ago",
    post: "Frontend Engineer",
    tag1: "Junior",
    tag2: "Full Time · Hybrid",
    salary: "$30/hr",
    location: "Bangalore, India",
  },
  {
    id: 9,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmFFtqZdmzAJ-SAlKAA8Evw25XhEIOtBvuDg&s",
    company: "TCS",
    time: "2 days ago",
    post: "React Developer",
    tag1: "Junior",
    tag2: "Full Time · Onsite",
    salary: "$22/hr",
    location: "Chennai, India",
  },
  {
    id: 10,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTg-3puC1FElbQVmGS94p1eirmT7TLi9YmA&s",
    company: "Deloitte",
    time: "5 days ago",
    post: "UI Developer",
    tag1: "Mid-Level",
    tag2: "Part Time · Remote",
    salary: "$28/hr",
    location: "Mumbai, India",
  },
];

const App = () => {
  return (
    <div className="container">
      {
        jobPosts.map(function(elem){

          return <Card company={elem.company} logo={elem.logo} time={elem.time} tag1={elem.tag1} tag2={elem.tag2} location={elem.location} post={elem.post} salary={elem.salary} id={elem.id}/>
        })}
    </div>
  )
}

export default App