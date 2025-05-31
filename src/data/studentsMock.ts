import  { Student } from '../types';

// Generate random date within the last 30 days
const randomRecentDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 30));
  return date.toISOString();
};

// Generate random date within the last year
const randomJoinDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 365));
  return date.toISOString();
};

export const studentsMock: Student[] = [
  {
    id: 1,
    name: 'João Silva',
    age: 28,
    joinDate: randomJoinDate(),
    lastVisit: randomRecentDate(),
    attendance: 22,
    riskLevel: 'high'
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    age: 35,
    joinDate: randomJoinDate(),
    lastVisit: randomRecentDate(),
    attendance: 78,
    riskLevel: 'low'
  },
  {
    id: 3,
    name: 'Pedro Santos',
    age: 42,
    joinDate: randomJoinDate(),
    lastVisit: randomRecentDate(),
    attendance: 45,
    riskLevel: 'medium'
  },
  {
    id: 4,
    name: 'Ana Souza',
    age: 24,
    joinDate: randomJoinDate(),
    lastVisit: randomRecentDate(),
    attendance: 85,
    riskLevel: 'low'
  },
  {
    id: 5,
    name: 'Carlos Ferreira',
    age: 31,
    joinDate: randomJoinDate(),
    lastVisit: randomRecentDate(),
    attendance: 15,
    riskLevel: 'high'
  },
  {
    id: 6,
    name: 'Juliana Lima',
    age: 29,
    joinDate: randomJoinDate(),
    lastVisit: randomRecentDate(),
    attendance: 62,
    riskLevel: 'medium'
  },
  {
    id: 7,
    name: 'Roberto Costa',
    age: 45,
    joinDate: randomJoinDate(),
    lastVisit: randomRecentDate(),
    attendance: 32,
    riskLevel: 'high'
  },
  {
    id: 8,
    name: 'Fernanda Alves',
    age: 27,
    joinDate: randomJoinDate(),
    lastVisit: randomRecentDate(),
    attendance: 70,
    riskLevel: 'low'
  }
];
 