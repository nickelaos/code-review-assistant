import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const openaiApi = {
  prompt: async (input: string, language: string, additionalInfo: string) => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
            role: "user",
            content: `Analyze the code snippet carefully (language - ${language}). Do not describe it, just give me some tips on how the following code can be improved. After the tips, give me the corrected code snippet. ${
              additionalInfo ? additionalInfo + "." : ""
            } This is the code for analysis: "${input}". Important: give me the text with HTML tags (I need to paste it on the page with the proper formatting). I mean not only the snippet. Everything in your response must be wrapped in proper HTML tags. For example, wrap lists in ul or ol tags, wrap paragraphs in p tag, wrap the corrected snippet in pre & code tag etc.`
          }
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
