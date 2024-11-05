import dotenv from "dotenv";

dotenv.config({});

class Config {
  public GATEWAY_JWT_TOKEN: string | undefined;

  constructor() {
    this.GATEWAY_JWT_TOKEN = process.env.GATEWAY_JWT_TOKEN ?? "";
  }
}

export const config: Config = new Config();
