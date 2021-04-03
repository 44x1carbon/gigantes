import { LoggerConfig, LogLevel, LogLevelList } from "./LoggerFactory";

export class Logger {
  id: string;
  config: LoggerConfig;

  constructor(id: string, config: LoggerConfig) {
    this.id = id;
    this.config = config;
  }

  private isOutput(logLevel: LogLevel): boolean {
    const configLevel = this.config[this.id] || "info";
    const index = LogLevelList.indexOf(configLevel);
    return LogLevelList.slice(index).includes(logLevel);
  }

  private meta(logLevel: LogLevel): string {
    return `【${logLevel}:${this.id}】${new Date().toUTCString()}\n`;
  }

  trace(...data: any) {
    if (this.isOutput("trace")) {
      console.debug(this.meta("trace"), ...data, "\n");
    }
  }
  debug(...data: any) {
    if (this.isOutput("debug")) {
      console.debug(this.meta("debug"), ...data, "\n");
    }
  }
  info(...data: any) {
    if (this.isOutput("info")) {
      console.info(this.meta("info"), ...data, "\n");
    }
  }
  warn(...data: any) {
    if (this.isOutput("warn")) {
      console.warn(this.meta("warn"), ...data, "\n");
    }
  }
  error(...data: any) {
    if (this.isOutput("error")) {
      console.error(this.meta("error"), ...data, "\n");
    }
  }
}
