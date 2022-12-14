import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://course-server-two.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <div>
                <h4>All Courses: {categories.length}</h4>
                <div>
                    {
                        categories.map(category => <p key={category.id}>
                            <Link to={`/course/${category.id}`}><Button className='mb-1' variant="outline-info">{category.name}</Button></Link>
                        </p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;