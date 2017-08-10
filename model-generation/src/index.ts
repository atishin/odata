import { DbContext } from './demo/context';

const context = new DbContext();

console.log(context, context.Products.single());