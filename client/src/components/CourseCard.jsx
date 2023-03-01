const CourseCard = ({ course }) => {
  return ( 
    <div>
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure><img src={course.image_url} alt={course.name} /></figure>
        <div className="card-body">
          <h2 className="card-title">{course.name}</h2>
          <div className="card-actions justify-center">
            <button
              className="btn text-white bg-IBM-blue hover:bg-blue-500 border-0" 
              onClick={() => window.open(course.url, "_blank")}
            >
              Start Course!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default CourseCard;