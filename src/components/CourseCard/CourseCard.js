import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { _id } = course;
    return (
        <div>
            <Row xs={1} md={1} className="g-4 ">
                <Col lg={10} >
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={course.image_url} />
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>
                                    {
                                        course.details.length > 250 ?
                                            <>{course.details.slice(0, 250) + '...'}</>
                                            :
                                            <>{course.details}</>
                                    }
                                </Card.Text>
                            </Card.Body>
                            <Link to={`/course/${_id}`}><Button variant="info">Show Details</Button></Link>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </div>
    );
};

export default CourseCard;