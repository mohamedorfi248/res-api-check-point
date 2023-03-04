import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteContact } from "../JS/Actions/contact";

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Text>{contact.email}</Card.Text>
          <Card.Text>{contact.phone}</Card.Text>
          <Button variant="danger" onClick={()=> dispatch(deleteContact(contact._id))}>Delete</Button>&nbsp;&nbsp;
          <Button variant="danger" onClick={()=> navigate(`/edit/${contact._id}`)} >Edit</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard;
