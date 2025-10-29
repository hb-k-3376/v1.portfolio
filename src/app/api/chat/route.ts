import { convertToModelMessages, streamText, UIMessage } from 'ai';
import { google } from '@ai-sdk/google';

export async function POST(request: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await request.json();

    const result = streamText({
      model: google('gemini-2.5-flash'),
      messages: convertToModelMessages(messages),
      temperature: 0.7,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}
