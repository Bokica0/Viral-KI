
import { GoogleGenAI, Type } from "@google/genai";
import { Platform, ViralIdea } from "../types";

export const generateViralIdea = async (niche: string, platform: Platform): Promise<ViralIdea> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Erstelle eine virale Idee für ein Faceless Video in der Nische: "${niche}" für die Plattform "${platform}". 
    Gib Tipps wie man das am besten mit Fliki.ai (Text-to-Video, AI Voices) umsetzt.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          hook: { type: Type.STRING },
          scriptOutline: { type: Type.STRING },
          flikiTips: { type: Type.STRING }
        },
        required: ["title", "hook", "scriptOutline", "flikiTips"]
      }
    }
  });

  return JSON.parse(response.text.trim());
};
