

export const printIntro = () => {
    // ANSI color codes
    const LIGHT_BLUE = "\x1b[94m";
    const RESET = "\x1b[0m";
    const BOLD = "\x1b[1m";

    // Clear screen effect with some spacing
    console.log("\n".repeat(2));

    // Welcome box with light blue border
    const boxWidth = 50;
    const welcomeText = "Welcome to Spidy";
    const padding = Math.floor((boxWidth - welcomeText.length - 2) / 2);
    const paddingEnd = boxWidth - welcomeText.length - padding - 2;

    console.log(`${LIGHT_BLUE}${'═'.repeat(boxWidth)}${RESET}`);
    console.log(`${LIGHT_BLUE}║${' '.repeat(padding)}${BOLD}${welcomeText}${RESET}${LIGHT_BLUE}${' '.repeat(paddingEnd)}║${RESET}`);
    console.log(`${LIGHT_BLUE}${'═'.repeat(boxWidth)}${RESET}`);
    console.log();

    // ASCII art for SPIDY
    const spidyArt = `
 _______  _______  ___   ______   __   __ 
|       ||       ||   | |      | |  | |  |
|  _____||    _  ||   | |  _    ||  |_|  |
| |_____ |   |_| ||   | | | |   ||       |
|_____  ||    ___||   | | |_|   ||_     _|
 _____| ||   |    |   | |       |  |   |  
|_______||___|    |___| |______|   |___|  
`;

    console.log(`${BOLD}${LIGHT_BLUE}${spidyArt}${RESET}`);
    console.log();
    console.log("Your AI assistant for drafting content.");
    console.log("Run 'spidy draft <topic>' to get started.");
    console.log();
};

