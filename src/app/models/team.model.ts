export interface TeamResponse {
  team_id: number;
  rating: number;
  wins: number;
  losses: number;
  last_match_time: number;
  name: string;
  tag: string;
  logo_url: string;
}

export interface TeamPlayer {
  account_id: string;
  name: string;
  games_played: number;
  wins: number;
  is_current_team_member: boolean;
}


