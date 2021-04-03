import { Logger } from "./Logger";

export const LogLevelList: LogLevel[] = [
  "trace",
  "debug",
  "info",
  "warn",
  "error",
];
export type LogLevel = "trace" | "debug" | "info" | "warn" | "error";

export type LoggerConfig = {
  [id: string]: LogLevel;
};

export class _LoggerFactory {
  config: LoggerConfig;

  constructor(config: LoggerConfig) {
    this.config = config;
  }

  create(id: string): Logger {
    return new Logger(id, this.config);
  }
}

export const LoggerFactory = new _LoggerFactory({
  // ListElementSpec: "trace",
  // SingleElementSpec: "trace",
});
