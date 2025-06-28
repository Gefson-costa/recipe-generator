import Anthropic from "@anthropic-ai/sdk";


const SYSYEM_PROMPT = "You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make using some of those ingredients. You don't need to use every ingredient they mention. The recipe can include additional ingredients not mentioned by the user, but try not to include too many extra items. Format your response in markdown to make it easier to render on a web page."

const anthropic = new Anthropic({

    apiKey: import.meta.API_KEY,
    dangerouslyAllowBrowser: true
})


export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSYEM_PROMPT,
        messages: [
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
        ],
    });
    return msg.content[0].text
}