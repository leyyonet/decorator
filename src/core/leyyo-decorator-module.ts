import {leyyo, Module} from "@leyyo/core";
import {Fqn} from "@leyyo/fqn";
import {LY_INT_FQN} from "../internal";
import {ClearProto} from "./clear-proto";

@Module(ClearProto)
@Fqn(...LY_INT_FQN)
export class LeyyoDecoratorModule {

}
export const decorator = leyyo.deco;