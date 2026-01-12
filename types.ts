
export enum Platform {
  TIKTOK = 'TikTok',
  YOUTUBE = 'YouTube',
  INSTAGRAM = 'Instagram'
}

export interface ViralIdea {
  title: string;
  hook: string;
  scriptOutline: string;
  flikiTips: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}
