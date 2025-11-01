import { convertToModelMessages, streamText, UIMessage } from 'ai';
import { google } from '@ai-sdk/google';
import { CHATBOT_SYSTEM_PROMPT } from '@/shared/lib';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(request: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await request.json();

    const result = streamText({
      model: google('gemini-2.5-flash'),
      system: CHATBOT_SYSTEM_PROMPT,
      messages: convertToModelMessages(messages),
      temperature: 0.4,
      maxOutputTokens: 800,
      maxRetries: 3,
    });

    return result.toUIMessageStreamResponse();
  } catch {
    return new Response('Internal Server Error', { status: 500 });
  }
}
