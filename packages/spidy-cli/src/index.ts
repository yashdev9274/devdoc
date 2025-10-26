
import readline from 'readline';
import 'dotenv/config';
import { Command } from 'commander';
import { version } from '../package.json';
import { streamText } from 'ai';
import { printIntro } from './utils';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

const program = new Command();

program
  .name('spidy')
  .description('A CLI tool to draft content using AI.')
  .version(version);

program
  .command('draft')
  .description('Draft a new piece of content on a given topic.')
  .argument('<topic...>', 'The topic to draft content about.')
  .option('-m, --model <name>', 'The AI model to use', 'gemini-2.5-flash')
  .action(async (topicWords, options) => {

    const topic = topicWords.join(' ');
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
        console.error('Error: GOOGLE_GENERATIVE_AI_API_KEY not found in environment variables or .env file.');
        // process.exit(1);
        return;
    }

    console.log(`📝 Drafting content for: "${topic}"...`);
    console.log(`🤖 Using model: ${options.model}\n`);

    try {
      const google = createGoogleGenerativeAI();
      const { textStream } = await streamText({
        model: google(`models/${options.model}`),
        prompt: `You are a professional content writer. Write a short, engaging blog post about the following topic: ${topic}`,
      });

      for await (const textPart of textStream) {
        process.stdout.write(textPart);
      }
      process.stdout.write('\\n');

    } catch (error) {
      console.error('\nAn error occurred while communicating with the AI:',error);
      // process.exit(1);
    }
  });

program
  .command('exit')
  .description('Exit the Spidy CLI.')
  .action(()=>{
    console.log('Goodbye!');
    process.exit(0);
  })

program.exitOverride();

const rl=readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptUser = ()=>{
  rl.question('spidy>', async(input)=>{

    if(input.trim().toLowerCase() === 'quit'){
      input = 'exit';
    }

    const args = input.split(' ');
    const argv = ['/usr/bin/node', 'spidy', ...args]

    try {
      await program.parseAsync(argv);
    } catch (error) {
      
    }finally{
      console.log();
      promptUser();
    }
  })
}

printIntro();
// program.parse(process.argv);
promptUser();