import { convertToModelMessages, smoothStream, streamText, UIMessage } from 'ai';
import { google } from '@ai-sdk/google';
import { CHATBOT_SYSTEM_PROMPT } from '@/shared/lib';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

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
      experimental_transform: smoothStream({
        chunking: 'word',
      }),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
