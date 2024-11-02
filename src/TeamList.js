import React from 'react';
import { Card, Button } from 'react-bootstrap';

const teamMembers = [
  { id: 1, name: 'Jiayang Hu', role: 'Frontend Developer' },
  { id: 2, name: 'Eugene Monnier', role: 'Fullstack Developer' },
  { id: 3, name: 'Priyadarshini Raj', role: 'UI/UX Designer' },
];

function TeamList() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {teamMembers.map(member => (
        <Card key={member.id} style={{ width: '18rem', margin: '1rem' }}>
          <Card.Body>
            <Card.Title>{member.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {member.role}
            </Card.Subtitle>
            <Button variant="primary">View Profile</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default TeamList;
