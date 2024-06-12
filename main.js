#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
class person {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    AskQuestion(Answers) {
        if (Answers === "1) Energized by people,quick pace,good at multitasking,can easily socialise") {
            this.personality = "Extrovert";
        }
        else if (Answers === "5) Likes working alone or in small groups,likes to focus on one task at a time") {
            this.personality = "Introvert";
        }
        else if (Answers === "3) Sensitive & cooperative,makes decision based on how others will be affected by their actions") {
            this.personality = "Feeler";
        }
        else if (Answers === "6) Easily see paterns,value innovation,&aeek creative solutions to problems") {
            this.personality = "Intuitive";
        }
        else if (Answers === "2) Likes to focus on facts and details,applies common sense & past experiences to find practical solutions") {
            this.personality = "Sensor";
        }
        else if (Answers === "4) Organized & prepared,likes to makes and stick to plans,comfortable following most rules") {
            this.personality = "Judger";
        }
        else {
            this.personality = "Mystery";
        }
    }
    // this method returns the value of their personality
    Getpersonality() {
        console.log(chalk.greenBright(`your personality type is "${chalk.magentaBright(this.personality)}"`));
    }
}
async function main() {
    console.log(chalk.blueBright("\n\t( *-*-*-*-*-*-*-*-*-*-*-*-*-* )"));
    console.log(chalk.magentaBright("\t( Know your personality type! )"));
    console.log(chalk.blueBright("\t( *-*-*-*-*-*-*-*-*-*-*-*-*-* )\n"));
    let User_personality = new person();
    while (true) {
        let choose_personality = await inquirer.prompt([
            {
                name: "chosen_personality",
                type: "list",
                message: chalk.bold.yellowBright("Choose your personality traits from below :"),
                choices: [
                    "1) Energized by people,quick pace,good at multitasking,can easily socialise",
                    "2) Likes to focus on facts and details,applies common sense & past experiences to find practical solutions",
                    "3) Sensitive & cooperative,makes decision based on how others will be affected by their actions",
                    "4) Organized & prepared,likes to makes and stick to plans,comfortable following most rules",
                    "5) Likes working alone or in small groups,likes to focus on one task at a time",
                    "6) Easily see paterns,value innovation,&aeek creative solutions to problems",
                    "7) Not sure of any of these"
                ]
            }
        ]);
        User_personality.AskQuestion(choose_personality.chosen_personality);
        let get_personality = await inquirer.prompt([
            {
                name: "get_personality",
                type: "list",
                message: chalk.cyanBright("Wanna know your personality type?"),
                choices: ["yes", "No"]
            }
        ]);
        if (get_personality.get_personality === "yes") {
            User_personality.Getpersonality();
            process.exit();
        }
        else {
            console.log("Exiting...");
            process.exit();
        }
    }
}
main();
