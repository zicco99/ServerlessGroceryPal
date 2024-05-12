
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.13.0
 * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
 */
Prisma.prismaVersion = {
  client: "5.13.0",
  engine: "b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  profilePic: 'profilePic'
};

exports.Prisma.FeedbackScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  recipeId: 'recipeId',
  isChosen: 'isChosen',
  rating: 'rating',
  notes: 'notes'
};

exports.Prisma.RecipeScalarFieldEnum = {
  id: 'id',
  title: 'title',
  category: 'category',
  imageUrl: 'imageUrl'
};

exports.Prisma.StepScalarFieldEnum = {
  id: 'id',
  recipeId: 'recipeId',
  nStep: 'nStep',
  imageUrl: 'imageUrl',
  explaining: 'explaining'
};

exports.Prisma.RecipeIngredientScalarFieldEnum = {
  id: 'id',
  recipeId: 'recipeId',
  ingredientId: 'ingredientId',
  amountText: 'amountText',
  amount: 'amount',
  productBarcode: 'productBarcode'
};

exports.Prisma.IngredientScalarFieldEnum = {
  id: 'id',
  name: 'name',
  unit: 'unit'
};

exports.Prisma.ProductScalarFieldEnum = {
  barcode: 'barcode',
  fridgeId: 'fridgeId',
  ingredientId: 'ingredientId',
  name: 'name',
  brand: 'brand',
  labels: 'labels',
  ecoScore: 'ecoScore',
  novaScore: 'novaScore',
  bigImageUrl: 'bigImageUrl',
  miniImageUrl: 'miniImageUrl',
  meal: 'meal',
  allergens: 'allergens',
  quantity: 'quantity'
};

exports.Prisma.FridgeScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.UserFridgeScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  fridgeId: 'fridgeId',
  isAdmin: 'isAdmin',
  isOwner: 'isOwner'
};

exports.Prisma.FridgeProductScalarFieldEnum = {
  id: 'id',
  fridgeId: 'fridgeId',
  productBarcode: 'productBarcode',
  quantity: 'quantity'
};

exports.Prisma.IngredientProductScalarFieldEnum = {
  ingredientId: 'ingredientId',
  productBarcode: 'productBarcode',
  quantity: 'quantity'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  name: 'name',
  email: 'email',
  profilePic: 'profilePic'
};

exports.Prisma.FeedbackOrderByRelevanceFieldEnum = {
  notes: 'notes'
};

exports.Prisma.RecipeOrderByRelevanceFieldEnum = {
  title: 'title',
  category: 'category',
  imageUrl: 'imageUrl'
};

exports.Prisma.StepOrderByRelevanceFieldEnum = {
  imageUrl: 'imageUrl',
  explaining: 'explaining'
};

exports.Prisma.RecipeIngredientOrderByRelevanceFieldEnum = {
  amountText: 'amountText'
};

exports.Prisma.IngredientOrderByRelevanceFieldEnum = {
  name: 'name',
  unit: 'unit'
};

exports.Prisma.ProductOrderByRelevanceFieldEnum = {
  name: 'name',
  brand: 'brand',
  bigImageUrl: 'bigImageUrl',
  miniImageUrl: 'miniImageUrl',
  allergens: 'allergens'
};

exports.Prisma.FridgeOrderByRelevanceFieldEnum = {
  name: 'name'
};


exports.Prisma.ModelName = {
  User: 'User',
  Feedback: 'Feedback',
  Recipe: 'Recipe',
  Step: 'Step',
  RecipeIngredient: 'RecipeIngredient',
  Ingredient: 'Ingredient',
  Product: 'Product',
  Fridge: 'Fridge',
  UserFridge: 'UserFridge',
  FridgeProduct: 'FridgeProduct',
  IngredientProduct: 'IngredientProduct'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
