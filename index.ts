import express, { Request, Response } from 'express';
import { Email, Person, EmailCategory } from './models';
import {v4 as uuidv4} from 'uuid';
const app = express();
app.use(express.json());


const names = ["John Doe", "Jane Doe", "Bob Smith", "Alice Johnson", "Eve Adams", "Tom Davis", "Emma Wilson", "Michael Brown", "Sarah Davis", "David Anderson"];
const subjects = ["Important meeting", "Project update", "Reminder: deadline approaching", "Invitation to event", "Weekly report", "New opportunity", "Action required", "Urgent: response needed", "Follow-up", "Good news"];
const messages = ["Please find attached the agenda for the meeting", "As per our discussion, attached is the latest project update", "Don't forget about the deadline, it's coming up fast!", "You're cordially invited to our annual event", "Here's a summary of this week's activity", "We'd like to offer you a new position", "We need your input on this matter", "Can you please respond as soon as possible?", "Just wanted to follow up on our previous conversation", "We're pleased to announce a new partnership"];
const profilePictures = ["person1.jpeg", "person2.jpeg", "person3.jpeg", "person4.jpeg", "person5.jpeg", "person6.jpeg", "person7.jpeg", "person8.jpeg", "person9.jpeg", "person10.jpeg"];

let people: Person[] = [];
let emails: Email[] = [];

for (let i = 0; i < 10; i++) {
  let person = new Person(names[i], `${names[i].split(' ')[0].toLowerCase()}.${names[i].split(' ')[1].toLowerCase()}@example.com`, profilePictures[i]);
  people.push(person);
  let email = new Email(uuidv4(), person, subjects[i], messages[i], new Date(), EmailCategory.Sent, false);
  emails.push(email);
}

console.log(emails);

app.get('/emails', (req: Request, res: Response) => {
  res.send(emails);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Email API server listening on port ${port}`);
});
