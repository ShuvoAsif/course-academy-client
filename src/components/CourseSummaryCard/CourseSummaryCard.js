import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegFilePdf, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const CourseSummaryCard = () => {
    const course = useLoaderData();

    const { title, instructor, details, image_url, rating, total_view } = course;
    console.log(course);
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <div>
                        <p className='mb-0'>Instructor: {instructor}</p>
                    </div>
                </div>
                <div>
                    <FaRegFilePdf></FaRegFilePdf>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default CourseSummaryCard;