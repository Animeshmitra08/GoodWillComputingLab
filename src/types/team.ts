export interface TeamMember {
  name: string;
  researchArea?: string;
  expertise?: string;
  image?: string;
  batch: string;
  description?: string; 
  currentRole?: string;
}

export interface TeamData {
  alumni: TeamMember[];
  newMembers: TeamMember[];
  currentMembers: TeamMember[];
}
