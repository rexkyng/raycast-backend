import { Config } from "./types"

export const config: Config = {
  defaultRaycastModel: "openai-gpt-4o-mini",
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE_URL,
  temperature: 0.5,
  translate: {
    model: "gpt-4o-mini"
  }
}
