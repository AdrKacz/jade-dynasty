import { SSTConfig } from "sst";
import { JadeDynasty } from "./stacks/JadeDynasty";
import { Tags } from "aws-cdk-lib";

export default {
  config(_input) {
    return {
      name: "JadeDynasty",
      region: "eu-west-3",
    };
  },
  stacks(app) {
    Tags.of(app).add("Jade Dynasty", `${app.stage}-${app.region}`);
    app.stack(JadeDynasty);
  }
} satisfies SSTConfig;