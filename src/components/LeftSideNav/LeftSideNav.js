import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <div>
                <h4>All Category: {categories.length}</h4>
                <div>
                    {
                        categories.map(category => <p key={category.id}>
                            <Link to={`/category/${category.id}`}><Button className='mb-2' variant="outline-primary">{category.name}</Button></Link>
                        </p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;