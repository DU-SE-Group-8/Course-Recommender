import CourseCard from "./CourseCard";

const Courses = ({ courses }) => {
  return ( 
    <div className='w-full space-x-3 p-6 py-8 bg-blue-600 text-primary-content'>
      <div className="mb-4">
        I think these courses might be interesting for you!
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2 md:gap-4">
        {courses.map(course => <CourseCard course={course} key={course.name}/>)}
      </div>
    </div>
  );
}

export default Courses;