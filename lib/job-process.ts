import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export const cleanJobDescription = (rawText: string): string => {
    return rawText
      .replace(/<[^>]*>/g, " ") 
      .replace(/\s+/g, " ") 
      .replace(/[^\w\s.,;:!?\-/]/g, "") 
      .trim()
      .substring(0, 10000); 
  };


export const processAndCleanJobDescription = async (jobDescription: string) => {
    const cleaned = cleanJobDescription(jobDescription);
  
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 2000,
      chunkOverlap: 200,
    });
  
    const chunks = await splitter.splitText(cleaned);
    return chunks.length > 1 ? chunks.join("\n\n----\n\n") : cleaned;
  };