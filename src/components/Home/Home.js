import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Home = () => {

    const allCourse = useLoaderData();
    return (
        <div>
            <h2>Course Home: {allCourse.length}</h2>
            {
                allCourse.map(course => <CourseCard
                    key={course._id}
                    course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default Home;