import { OpenAI } from "openai";
import { config } from "./config";

const openai = new OpenAI(config);

export const openaiApi = {
  prompt: async (question: string, userPrompt: string) => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: `${question}${userPrompt}` }
        ],
        temperature: 0.2
      });

      return response.choices[0].message.content;
    } catch (error) {
      // Implement error handling
      console.error("Error calling OpenAI API:", error);
      throw error; // Re-throw the error after logging, or handle it as appropriate
    }
  }
};
