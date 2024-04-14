import { Ai } from '@cloudflare/ai'

 export interface Env {
   AI: any;
 }

 export default {
   async fetch(_request: Request, env: Env) {
     const ai = new Ai(env.AI);
 
     const response = await ai.run('@cf/meta/llama-2-7b-chat-int8', {
         prompt: "What is the capital of Brazil?"
       }
     );
 
     return new Response(JSON.stringify(response));
   },
 };