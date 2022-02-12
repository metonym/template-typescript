export enum Mode {
  dev = "dev",
  prod = "prod",
}

export interface ITemplateProps {
  mode: Mode;
}

class Template {
  constructor(props: ITemplateProps) {
    if (props.mode === Mode.dev) {
      console.log("dev mode");
    }
  }
}

export default Template;
