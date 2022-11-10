import {FuncLike, leyyo, DeveloperException} from "@leyyo/core";
import {LY_INT_FQN} from "../internal";
import {fqn} from "../../../fqn";
/**
 * Clear inherited decorators
 *
 * For class: clears extended class's decorators
 * For Property: clears extended class's same property decorators
 */
export function ClearProto(...decorators: Array<FuncLike>): any {
    return (clazz: FuncLike, property?: string, descriptor?) => {
        const described = leyyo.reflect.described(_deco, clazz, property, descriptor);
        decorators = leyyo.primitive.check(this, 'decorators', decorators,
            (v) => leyyo.primitive.arrayFilled(v, leyyo.primitive.funcFilled), {target: described.description});
        decorators.forEach(deco => {
            if (!leyyo.deco.is(deco)) {
                throw new DeveloperException('deco:fn.is.not.deco')
                    .with(this)
                    .patch({target: described.description, deco: fqn.get(deco)})

            }
        })
        _deco.assign(leyyo.reflect.described(_deco, clazz), {decorators});
    };
}
leyyo.fqn.func(ClearProto, ...LY_INT_FQN);
const _deco = leyyo.deco.addDecorator(ClearProto, {clazz: true, field: true, method: true});