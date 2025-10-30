import { convertToModelMessages, streamText, UIMessage } from 'ai';
import { google } from '@ai-sdk/google';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(request: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await request.json();

    const result = streamText({
      model: google('gemini-2.5-flash'),
      messages: convertToModelMessages(messages),
      temperature: 0.2,
      maxOutputTokens: 800,
    });

    return result.toUIMessageStreamResponse();
  } catch {
    return new Response('Internal Server Error', { status: 500 });
  }
}
