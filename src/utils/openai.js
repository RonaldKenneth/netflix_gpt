import OpenAI from "openai";
// import { openai_key } from "./constants";


const openai = new OpenAI({
  apiKey: 'My API Key',
  dangerouslyAllowBrowser: true,
});

export default openai;
