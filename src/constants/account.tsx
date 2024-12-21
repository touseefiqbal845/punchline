export interface User {
  avatar_url?: string;
  username?: string;
  email?: string;
  is_team_admin?: boolean;
}

export interface TeamMember {
  id?: string;
  name?: User;
  status?: string;
  last_active?: Date;
  usage?: {
    total?: number;
    used?: number;
  }
}


export const Users: User[] = [
  {
    avatar_url: '/assets/LOGO.png',
    username: 'William Kulp',
    email: 'william@example.com'
  },
  {
    avatar_url: '/assets/LOGO.png',
    username: 'Michael Park',
    email: 'michael@example.com'
  },
  {
    avatar_url: '/assets/LOGO.png',
    username: 'Sarah Chen',
    email: 'sarah@example.com'
  },
];

export const TeamMembers: TeamMember[] = [
  {
    id: '0',
    name: Users[0],
    status: 'Accepted',
    last_active: new Date(2024, 10, 30),
    usage: {
      total: 500,
      used: 375
    }
  },
  {
    id: '1',
    name: Users[1],
    status: 'Pending',
    last_active: new Date(2024, 10, 29),
    usage: {
      total: 500,
      used: 25
    }
  },
  {
    id: '2',
    name: Users[2],
    status: 'Rejected',
    last_active: new Date(2024, 10, 28),
    usage: {
      total: 500,
      used: 125
    }
  }
];