
/**
 * Client
**/

import * as runtime from './runtime/binary.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model Step
 * 
 */
export type Step = $Result.DefaultSelection<Prisma.$StepPayload>
/**
 * Model RecipeIngredient
 * 
 */
export type RecipeIngredient = $Result.DefaultSelection<Prisma.$RecipeIngredientPayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Fridge
 * 
 */
export type Fridge = $Result.DefaultSelection<Prisma.$FridgePayload>
/**
 * Model UserFridge
 * 
 */
export type UserFridge = $Result.DefaultSelection<Prisma.$UserFridgePayload>
/**
 * Model FridgeProduct
 * 
 */
export type FridgeProduct = $Result.DefaultSelection<Prisma.$FridgeProductPayload>
/**
 * Model IngredientProduct
 * 
 */
export type IngredientProduct = $Result.DefaultSelection<Prisma.$IngredientProductPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => $Utils.JsPromise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs>;

  /**
   * `prisma.step`: Exposes CRUD operations for the **Step** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Steps
    * const steps = await prisma.step.findMany()
    * ```
    */
  get step(): Prisma.StepDelegate<ExtArgs>;

  /**
   * `prisma.recipeIngredient`: Exposes CRUD operations for the **RecipeIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeIngredients
    * const recipeIngredients = await prisma.recipeIngredient.findMany()
    * ```
    */
  get recipeIngredient(): Prisma.RecipeIngredientDelegate<ExtArgs>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.fridge`: Exposes CRUD operations for the **Fridge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fridges
    * const fridges = await prisma.fridge.findMany()
    * ```
    */
  get fridge(): Prisma.FridgeDelegate<ExtArgs>;

  /**
   * `prisma.userFridge`: Exposes CRUD operations for the **UserFridge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFridges
    * const userFridges = await prisma.userFridge.findMany()
    * ```
    */
  get userFridge(): Prisma.UserFridgeDelegate<ExtArgs>;

  /**
   * `prisma.fridgeProduct`: Exposes CRUD operations for the **FridgeProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FridgeProducts
    * const fridgeProducts = await prisma.fridgeProduct.findMany()
    * ```
    */
  get fridgeProduct(): Prisma.FridgeProductDelegate<ExtArgs>;

  /**
   * `prisma.ingredientProduct`: Exposes CRUD operations for the **IngredientProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IngredientProducts
    * const ingredientProducts = await prisma.ingredientProduct.findMany()
    * ```
    */
  get ingredientProduct(): Prisma.IngredientProductDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'feedback' | 'recipe' | 'step' | 'recipeIngredient' | 'ingredient' | 'product' | 'fridge' | 'userFridge' | 'fridgeProduct' | 'ingredientProduct'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>,
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>,
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      Step: {
        payload: Prisma.$StepPayload<ExtArgs>
        fields: Prisma.StepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findFirst: {
            args: Prisma.StepFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findMany: {
            args: Prisma.StepFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          create: {
            args: Prisma.StepCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          createMany: {
            args: Prisma.StepCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StepDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          update: {
            args: Prisma.StepUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          deleteMany: {
            args: Prisma.StepDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StepUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StepUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          aggregate: {
            args: Prisma.StepAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStep>
          }
          groupBy: {
            args: Prisma.StepGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StepGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepCountArgs<ExtArgs>,
            result: $Utils.Optional<StepCountAggregateOutputType> | number
          }
        }
      }
      RecipeIngredient: {
        payload: Prisma.$RecipeIngredientPayload<ExtArgs>
        fields: Prisma.RecipeIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeIngredientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeIngredientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          findFirst: {
            args: Prisma.RecipeIngredientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeIngredientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          findMany: {
            args: Prisma.RecipeIngredientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>[]
          }
          create: {
            args: Prisma.RecipeIngredientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          createMany: {
            args: Prisma.RecipeIngredientCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RecipeIngredientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          update: {
            args: Prisma.RecipeIngredientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          deleteMany: {
            args: Prisma.RecipeIngredientDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeIngredientUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RecipeIngredientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          aggregate: {
            args: Prisma.RecipeIngredientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRecipeIngredient>
          }
          groupBy: {
            args: Prisma.RecipeIngredientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RecipeIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeIngredientCountArgs<ExtArgs>,
            result: $Utils.Optional<RecipeIngredientCountAggregateOutputType> | number
          }
        }
      }
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>,
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Fridge: {
        payload: Prisma.$FridgePayload<ExtArgs>
        fields: Prisma.FridgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FridgeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FridgeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgePayload>
          }
          findFirst: {
            args: Prisma.FridgeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FridgeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgePayload>
          }
          findMany: {
            args: Prisma.FridgeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgePayload>[]
          }
          create: {
            args: Prisma.FridgeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgePayload>
          }
          createMany: {
            args: Prisma.FridgeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FridgeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgePayload>
          }
          update: {
            args: Prisma.FridgeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgePayload>
          }
          deleteMany: {
            args: Prisma.FridgeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FridgeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FridgeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgePayload>
          }
          aggregate: {
            args: Prisma.FridgeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFridge>
          }
          groupBy: {
            args: Prisma.FridgeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FridgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FridgeCountArgs<ExtArgs>,
            result: $Utils.Optional<FridgeCountAggregateOutputType> | number
          }
        }
      }
      UserFridge: {
        payload: Prisma.$UserFridgePayload<ExtArgs>
        fields: Prisma.UserFridgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFridgeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFridgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFridgeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFridgePayload>
          }
          findFirst: {
            args: Prisma.UserFridgeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFridgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFridgeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFridgePayload>
          }
          findMany: {
            args: Prisma.UserFridgeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFridgePayload>[]
          }
          create: {
            args: Prisma.UserFridgeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFridgePayload>
          }
          createMany: {
            args: Prisma.UserFridgeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserFridgeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFridgePayload>
          }
          update: {
            args: Prisma.UserFridgeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFridgePayload>
          }
          deleteMany: {
            args: Prisma.UserFridgeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserFridgeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserFridgeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFridgePayload>
          }
          aggregate: {
            args: Prisma.UserFridgeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserFridge>
          }
          groupBy: {
            args: Prisma.UserFridgeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserFridgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFridgeCountArgs<ExtArgs>,
            result: $Utils.Optional<UserFridgeCountAggregateOutputType> | number
          }
        }
      }
      FridgeProduct: {
        payload: Prisma.$FridgeProductPayload<ExtArgs>
        fields: Prisma.FridgeProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FridgeProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgeProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FridgeProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgeProductPayload>
          }
          findFirst: {
            args: Prisma.FridgeProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgeProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FridgeProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgeProductPayload>
          }
          findMany: {
            args: Prisma.FridgeProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgeProductPayload>[]
          }
          create: {
            args: Prisma.FridgeProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgeProductPayload>
          }
          createMany: {
            args: Prisma.FridgeProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FridgeProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgeProductPayload>
          }
          update: {
            args: Prisma.FridgeProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgeProductPayload>
          }
          deleteMany: {
            args: Prisma.FridgeProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FridgeProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FridgeProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FridgeProductPayload>
          }
          aggregate: {
            args: Prisma.FridgeProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFridgeProduct>
          }
          groupBy: {
            args: Prisma.FridgeProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FridgeProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.FridgeProductCountArgs<ExtArgs>,
            result: $Utils.Optional<FridgeProductCountAggregateOutputType> | number
          }
        }
      }
      IngredientProduct: {
        payload: Prisma.$IngredientProductPayload<ExtArgs>
        fields: Prisma.IngredientProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientProductPayload>
          }
          findFirst: {
            args: Prisma.IngredientProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientProductPayload>
          }
          findMany: {
            args: Prisma.IngredientProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientProductPayload>[]
          }
          create: {
            args: Prisma.IngredientProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientProductPayload>
          }
          createMany: {
            args: Prisma.IngredientProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IngredientProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientProductPayload>
          }
          update: {
            args: Prisma.IngredientProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientProductPayload>
          }
          deleteMany: {
            args: Prisma.IngredientProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IngredientProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IngredientProductPayload>
          }
          aggregate: {
            args: Prisma.IngredientProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIngredientProduct>
          }
          groupBy: {
            args: Prisma.IngredientProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IngredientProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientProductCountArgs<ExtArgs>,
            result: $Utils.Optional<IngredientProductCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    fridges: number
    feedbacks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fridges?: boolean | UserCountOutputTypeCountFridgesArgs
    feedbacks?: boolean | UserCountOutputTypeCountFeedbacksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFridgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFridgeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    recipeIngredients: number
    steps: number
    feedbacks: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipeIngredients?: boolean | RecipeCountOutputTypeCountRecipeIngredientsArgs
    steps?: boolean | RecipeCountOutputTypeCountStepsArgs
    feedbacks?: boolean | RecipeCountOutputTypeCountFeedbacksArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountRecipeIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Count Type IngredientCountOutputType
   */

  export type IngredientCountOutputType = {
    products: number
    recipeIngredients: number
    IngredientProduct: number
  }

  export type IngredientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | IngredientCountOutputTypeCountProductsArgs
    recipeIngredients?: boolean | IngredientCountOutputTypeCountRecipeIngredientsArgs
    IngredientProduct?: boolean | IngredientCountOutputTypeCountIngredientProductArgs
  }

  // Custom InputTypes
  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientCountOutputType
     */
    select?: IngredientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountRecipeIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountIngredientProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    fridges: number
    recipeIngredients: number
    IngredientProduct: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fridges?: boolean | ProductCountOutputTypeCountFridgesArgs
    recipeIngredients?: boolean | ProductCountOutputTypeCountRecipeIngredientsArgs
    IngredientProduct?: boolean | ProductCountOutputTypeCountIngredientProductArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountFridgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FridgeProductWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountRecipeIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountIngredientProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientProductWhereInput
  }


  /**
   * Count Type FridgeCountOutputType
   */

  export type FridgeCountOutputType = {
    products: number
    users: number
    Product: number
  }

  export type FridgeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | FridgeCountOutputTypeCountProductsArgs
    users?: boolean | FridgeCountOutputTypeCountUsersArgs
    Product?: boolean | FridgeCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * FridgeCountOutputType without action
   */
  export type FridgeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeCountOutputType
     */
    select?: FridgeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FridgeCountOutputType without action
   */
  export type FridgeCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FridgeProductWhereInput
  }

  /**
   * FridgeCountOutputType without action
   */
  export type FridgeCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFridgeWhereInput
  }

  /**
   * FridgeCountOutputType without action
   */
  export type FridgeCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    profilePic: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    profilePic: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    profilePic: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePic?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePic?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePic?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    profilePic: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    profilePic?: boolean
    fridges?: boolean | User$fridgesArgs<ExtArgs>
    feedbacks?: boolean | User$feedbacksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    profilePic?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fridges?: boolean | User$fridgesArgs<ExtArgs>
    feedbacks?: boolean | User$feedbacksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      fridges: Prisma.$UserFridgePayload<ExtArgs>[]
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      profilePic: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fridges<T extends User$fridgesArgs<ExtArgs> = {}>(args?: Subset<T, User$fridgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFridgePayload<ExtArgs>, T, 'findMany'> | Null>;

    feedbacks<T extends User$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, User$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly profilePic: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.fridges
   */
  export type User$fridgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFridge
     */
    select?: UserFridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFridgeInclude<ExtArgs> | null
    where?: UserFridgeWhereInput
    orderBy?: UserFridgeOrderByWithRelationAndSearchRelevanceInput | UserFridgeOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: UserFridgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFridgeScalarFieldEnum | UserFridgeScalarFieldEnum[]
  }

  /**
   * User.feedbacks
   */
  export type User$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationAndSearchRelevanceInput | FeedbackOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    recipeId: number | null
    rating: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
    userId: number | null
    recipeId: number | null
    rating: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    userId: number | null
    recipeId: number | null
    isChosen: boolean | null
    rating: number | null
    notes: string | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    recipeId: number | null
    isChosen: boolean | null
    rating: number | null
    notes: string | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    userId: number
    recipeId: number
    isChosen: number
    rating: number
    notes: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    rating?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    rating?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    isChosen?: true
    rating?: true
    notes?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    isChosen?: true
    rating?: true
    notes?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    isChosen?: true
    rating?: true
    notes?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationAndSearchRelevanceInput | FeedbackOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: number
    userId: number
    recipeId: number
    isChosen: boolean
    rating: number
    notes: string | null
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    isChosen?: boolean
    rating?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    isChosen?: boolean
    rating?: boolean
    notes?: boolean
  }


  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }


  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      recipeId: number
      isChosen: boolean
      rating: number
      notes: string | null
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }


  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FeedbackFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>
    ): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Feedback that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FeedbackFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>
    ): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FeedbackFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
    **/
    create<T extends FeedbackCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>
    ): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Feedbacks.
     *     @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     *     @example
     *     // Create many Feedbacks
     *     const feedback = await prisma.feedback.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FeedbackCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
    **/
    delete<T extends FeedbackDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>
    ): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FeedbackUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>
    ): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FeedbackDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FeedbackUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
    **/
    upsert<T extends FeedbackUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>
    ): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Feedback model
   */ 
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'Int'>
    readonly userId: FieldRef<"Feedback", 'Int'>
    readonly recipeId: FieldRef<"Feedback", 'Int'>
    readonly isChosen: FieldRef<"Feedback", 'Boolean'>
    readonly rating: FieldRef<"Feedback", 'Int'>
    readonly notes: FieldRef<"Feedback", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationAndSearchRelevanceInput | FeedbackOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationAndSearchRelevanceInput | FeedbackOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationAndSearchRelevanceInput | FeedbackOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
  }


  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    id: number | null
  }

  export type RecipeSumAggregateOutputType = {
    id: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: number | null
    title: string | null
    category: string | null
    imageUrl: string | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    category: string | null
    imageUrl: string | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    title: number
    category: number
    imageUrl: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    id?: true
  }

  export type RecipeSumAggregateInputType = {
    id?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    imageUrl?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    imageUrl?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    imageUrl?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationAndSearchRelevanceInput | RecipeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: number
    title: string
    category: string
    imageUrl: string | null
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    imageUrl?: boolean
    recipeIngredients?: boolean | Recipe$recipeIngredientsArgs<ExtArgs>
    steps?: boolean | Recipe$stepsArgs<ExtArgs>
    feedbacks?: boolean | Recipe$feedbacksArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    imageUrl?: boolean
  }


  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipeIngredients?: boolean | Recipe$recipeIngredientsArgs<ExtArgs>
    steps?: boolean | Recipe$stepsArgs<ExtArgs>
    feedbacks?: boolean | Recipe$feedbacksArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      recipeIngredients: Prisma.$RecipeIngredientPayload<ExtArgs>[]
      steps: Prisma.$StepPayload<ExtArgs>[]
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      category: string
      imageUrl: string | null
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }


  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecipeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Recipe that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecipeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecipeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
    **/
    create<T extends RecipeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Recipes.
     *     @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     *     @example
     *     // Create many Recipes
     *     const recipe = await prisma.recipe.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecipeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
    **/
    delete<T extends RecipeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecipeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecipeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecipeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
    **/
    upsert<T extends RecipeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    recipeIngredients<T extends Recipe$recipeIngredientsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$recipeIngredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, 'findMany'> | Null>;

    steps<T extends Recipe$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'findMany'> | Null>;

    feedbacks<T extends Recipe$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Recipe model
   */ 
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'Int'>
    readonly title: FieldRef<"Recipe", 'String'>
    readonly category: FieldRef<"Recipe", 'String'>
    readonly imageUrl: FieldRef<"Recipe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationAndSearchRelevanceInput | RecipeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationAndSearchRelevanceInput | RecipeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationAndSearchRelevanceInput | RecipeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
  }

  /**
   * Recipe.recipeIngredients
   */
  export type Recipe$recipeIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithRelationAndSearchRelevanceInput | RecipeIngredientOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: RecipeIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * Recipe.steps
   */
  export type Recipe$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
    orderBy?: StepOrderByWithRelationAndSearchRelevanceInput | StepOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: StepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Recipe.feedbacks
   */
  export type Recipe$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationAndSearchRelevanceInput | FeedbackOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
  }


  /**
   * Model Step
   */

  export type AggregateStep = {
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  export type StepAvgAggregateOutputType = {
    id: number | null
    recipeId: number | null
    nStep: number | null
  }

  export type StepSumAggregateOutputType = {
    id: number | null
    recipeId: number | null
    nStep: number | null
  }

  export type StepMinAggregateOutputType = {
    id: number | null
    recipeId: number | null
    nStep: number | null
    imageUrl: string | null
    explaining: string | null
  }

  export type StepMaxAggregateOutputType = {
    id: number | null
    recipeId: number | null
    nStep: number | null
    imageUrl: string | null
    explaining: string | null
  }

  export type StepCountAggregateOutputType = {
    id: number
    recipeId: number
    nStep: number
    imageUrl: number
    explaining: number
    _all: number
  }


  export type StepAvgAggregateInputType = {
    id?: true
    recipeId?: true
    nStep?: true
  }

  export type StepSumAggregateInputType = {
    id?: true
    recipeId?: true
    nStep?: true
  }

  export type StepMinAggregateInputType = {
    id?: true
    recipeId?: true
    nStep?: true
    imageUrl?: true
    explaining?: true
  }

  export type StepMaxAggregateInputType = {
    id?: true
    recipeId?: true
    nStep?: true
    imageUrl?: true
    explaining?: true
  }

  export type StepCountAggregateInputType = {
    id?: true
    recipeId?: true
    nStep?: true
    imageUrl?: true
    explaining?: true
    _all?: true
  }

  export type StepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Step to aggregate.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationAndSearchRelevanceInput | StepOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Steps
    **/
    _count?: true | StepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepMaxAggregateInputType
  }

  export type GetStepAggregateType<T extends StepAggregateArgs> = {
        [P in keyof T & keyof AggregateStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStep[P]>
      : GetScalarType<T[P], AggregateStep[P]>
  }




  export type StepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
    orderBy?: StepOrderByWithAggregationInput | StepOrderByWithAggregationInput[]
    by: StepScalarFieldEnum[] | StepScalarFieldEnum
    having?: StepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepCountAggregateInputType | true
    _avg?: StepAvgAggregateInputType
    _sum?: StepSumAggregateInputType
    _min?: StepMinAggregateInputType
    _max?: StepMaxAggregateInputType
  }

  export type StepGroupByOutputType = {
    id: number
    recipeId: number
    nStep: number
    imageUrl: string | null
    explaining: string
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  type GetStepGroupByPayload<T extends StepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepGroupByOutputType[P]>
            : GetScalarType<T[P], StepGroupByOutputType[P]>
        }
      >
    >


  export type StepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    nStep?: boolean
    imageUrl?: boolean
    explaining?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectScalar = {
    id?: boolean
    recipeId?: boolean
    nStep?: boolean
    imageUrl?: boolean
    explaining?: boolean
  }


  export type StepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }


  export type $StepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Step"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      recipeId: number
      nStep: number
      imageUrl: string | null
      explaining: string
    }, ExtArgs["result"]["step"]>
    composites: {}
  }


  type StepGetPayload<S extends boolean | null | undefined | StepDefaultArgs> = $Result.GetResult<Prisma.$StepPayload, S>

  type StepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StepFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StepCountAggregateInputType | true
    }

  export interface StepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Step'], meta: { name: 'Step' } }
    /**
     * Find zero or one Step that matches the filter.
     * @param {StepFindUniqueArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StepFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StepFindUniqueArgs<ExtArgs>>
    ): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Step that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StepFindUniqueOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StepFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StepFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Step that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StepFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StepFindFirstArgs<ExtArgs>>
    ): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Step that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StepFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StepFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Steps
     * const steps = await prisma.step.findMany()
     * 
     * // Get first 10 Steps
     * const steps = await prisma.step.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepWithIdOnly = await prisma.step.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StepFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StepFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Step.
     * @param {StepCreateArgs} args - Arguments to create a Step.
     * @example
     * // Create one Step
     * const Step = await prisma.step.create({
     *   data: {
     *     // ... data to create a Step
     *   }
     * })
     * 
    **/
    create<T extends StepCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StepCreateArgs<ExtArgs>>
    ): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Steps.
     *     @param {StepCreateManyArgs} args - Arguments to create many Steps.
     *     @example
     *     // Create many Steps
     *     const step = await prisma.step.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StepCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StepCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Step.
     * @param {StepDeleteArgs} args - Arguments to delete one Step.
     * @example
     * // Delete one Step
     * const Step = await prisma.step.delete({
     *   where: {
     *     // ... filter to delete one Step
     *   }
     * })
     * 
    **/
    delete<T extends StepDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StepDeleteArgs<ExtArgs>>
    ): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Step.
     * @param {StepUpdateArgs} args - Arguments to update one Step.
     * @example
     * // Update one Step
     * const step = await prisma.step.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StepUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StepUpdateArgs<ExtArgs>>
    ): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Steps.
     * @param {StepDeleteManyArgs} args - Arguments to filter Steps to delete.
     * @example
     * // Delete a few Steps
     * const { count } = await prisma.step.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StepDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StepDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StepUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StepUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Step.
     * @param {StepUpsertArgs} args - Arguments to update or create a Step.
     * @example
     * // Update or create a Step
     * const step = await prisma.step.upsert({
     *   create: {
     *     // ... data to create a Step
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Step we want to update
     *   }
     * })
    **/
    upsert<T extends StepUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StepUpsertArgs<ExtArgs>>
    ): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepCountArgs} args - Arguments to filter Steps to count.
     * @example
     * // Count the number of Steps
     * const count = await prisma.step.count({
     *   where: {
     *     // ... the filter for the Steps we want to count
     *   }
     * })
    **/
    count<T extends StepCountArgs>(
      args?: Subset<T, StepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StepAggregateArgs>(args: Subset<T, StepAggregateArgs>): Prisma.PrismaPromise<GetStepAggregateType<T>>

    /**
     * Group by Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepGroupByArgs['orderBy'] }
        : { orderBy?: StepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Step model
   */
  readonly fields: StepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Step.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Step model
   */ 
  interface StepFieldRefs {
    readonly id: FieldRef<"Step", 'Int'>
    readonly recipeId: FieldRef<"Step", 'Int'>
    readonly nStep: FieldRef<"Step", 'Int'>
    readonly imageUrl: FieldRef<"Step", 'String'>
    readonly explaining: FieldRef<"Step", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Step findUnique
   */
  export type StepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findUniqueOrThrow
   */
  export type StepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findFirst
   */
  export type StepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationAndSearchRelevanceInput | StepOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findFirstOrThrow
   */
  export type StepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationAndSearchRelevanceInput | StepOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findMany
   */
  export type StepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationAndSearchRelevanceInput | StepOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step create
   */
  export type StepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to create a Step.
     */
    data: XOR<StepCreateInput, StepUncheckedCreateInput>
  }

  /**
   * Step createMany
   */
  export type StepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Step update
   */
  export type StepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to update a Step.
     */
    data: XOR<StepUpdateInput, StepUncheckedUpdateInput>
    /**
     * Choose, which Step to update.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step updateMany
   */
  export type StepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
  }

  /**
   * Step upsert
   */
  export type StepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The filter to search for the Step to update in case it exists.
     */
    where: StepWhereUniqueInput
    /**
     * In case the Step found by the `where` argument doesn't exist, create a new Step with this data.
     */
    create: XOR<StepCreateInput, StepUncheckedCreateInput>
    /**
     * In case the Step was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepUpdateInput, StepUncheckedUpdateInput>
  }

  /**
   * Step delete
   */
  export type StepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter which Step to delete.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step deleteMany
   */
  export type StepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Steps to delete
     */
    where?: StepWhereInput
  }

  /**
   * Step without action
   */
  export type StepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
  }


  /**
   * Model RecipeIngredient
   */

  export type AggregateRecipeIngredient = {
    _count: RecipeIngredientCountAggregateOutputType | null
    _avg: RecipeIngredientAvgAggregateOutputType | null
    _sum: RecipeIngredientSumAggregateOutputType | null
    _min: RecipeIngredientMinAggregateOutputType | null
    _max: RecipeIngredientMaxAggregateOutputType | null
  }

  export type RecipeIngredientAvgAggregateOutputType = {
    id: number | null
    recipeId: number | null
    ingredientId: number | null
    amount: number | null
    productBarcode: number | null
  }

  export type RecipeIngredientSumAggregateOutputType = {
    id: number | null
    recipeId: number | null
    ingredientId: number | null
    amount: number | null
    productBarcode: number | null
  }

  export type RecipeIngredientMinAggregateOutputType = {
    id: number | null
    recipeId: number | null
    ingredientId: number | null
    amountText: string | null
    amount: number | null
    productBarcode: number | null
  }

  export type RecipeIngredientMaxAggregateOutputType = {
    id: number | null
    recipeId: number | null
    ingredientId: number | null
    amountText: string | null
    amount: number | null
    productBarcode: number | null
  }

  export type RecipeIngredientCountAggregateOutputType = {
    id: number
    recipeId: number
    ingredientId: number
    amountText: number
    amount: number
    productBarcode: number
    _all: number
  }


  export type RecipeIngredientAvgAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    amount?: true
    productBarcode?: true
  }

  export type RecipeIngredientSumAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    amount?: true
    productBarcode?: true
  }

  export type RecipeIngredientMinAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    amountText?: true
    amount?: true
    productBarcode?: true
  }

  export type RecipeIngredientMaxAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    amountText?: true
    amount?: true
    productBarcode?: true
  }

  export type RecipeIngredientCountAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    amountText?: true
    amount?: true
    productBarcode?: true
    _all?: true
  }

  export type RecipeIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeIngredient to aggregate.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationAndSearchRelevanceInput | RecipeIngredientOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeIngredients
    **/
    _count?: true | RecipeIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeIngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeIngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeIngredientMaxAggregateInputType
  }

  export type GetRecipeIngredientAggregateType<T extends RecipeIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeIngredient[P]>
      : GetScalarType<T[P], AggregateRecipeIngredient[P]>
  }




  export type RecipeIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithAggregationInput | RecipeIngredientOrderByWithAggregationInput[]
    by: RecipeIngredientScalarFieldEnum[] | RecipeIngredientScalarFieldEnum
    having?: RecipeIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeIngredientCountAggregateInputType | true
    _avg?: RecipeIngredientAvgAggregateInputType
    _sum?: RecipeIngredientSumAggregateInputType
    _min?: RecipeIngredientMinAggregateInputType
    _max?: RecipeIngredientMaxAggregateInputType
  }

  export type RecipeIngredientGroupByOutputType = {
    id: number
    recipeId: number
    ingredientId: number
    amountText: string
    amount: number
    productBarcode: number | null
    _count: RecipeIngredientCountAggregateOutputType | null
    _avg: RecipeIngredientAvgAggregateOutputType | null
    _sum: RecipeIngredientSumAggregateOutputType | null
    _min: RecipeIngredientMinAggregateOutputType | null
    _max: RecipeIngredientMaxAggregateOutputType | null
  }

  type GetRecipeIngredientGroupByPayload<T extends RecipeIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeIngredientGroupByOutputType[P]>
        }
      >
    >


  export type RecipeIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    amountText?: boolean
    amount?: boolean
    productBarcode?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    Product?: boolean | RecipeIngredient$ProductArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredient"]>

  export type RecipeIngredientSelectScalar = {
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    amountText?: boolean
    amount?: boolean
    productBarcode?: boolean
  }


  export type RecipeIngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    Product?: boolean | RecipeIngredient$ProductArgs<ExtArgs>
  }


  export type $RecipeIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeIngredient"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
      ingredient: Prisma.$IngredientPayload<ExtArgs>
      Product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      recipeId: number
      ingredientId: number
      amountText: string
      amount: number
      productBarcode: number | null
    }, ExtArgs["result"]["recipeIngredient"]>
    composites: {}
  }


  type RecipeIngredientGetPayload<S extends boolean | null | undefined | RecipeIngredientDefaultArgs> = $Result.GetResult<Prisma.$RecipeIngredientPayload, S>

  type RecipeIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecipeIngredientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecipeIngredientCountAggregateInputType | true
    }

  export interface RecipeIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeIngredient'], meta: { name: 'RecipeIngredient' } }
    /**
     * Find zero or one RecipeIngredient that matches the filter.
     * @param {RecipeIngredientFindUniqueArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecipeIngredientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeIngredientFindUniqueArgs<ExtArgs>>
    ): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RecipeIngredient that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RecipeIngredientFindUniqueOrThrowArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RecipeIngredientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeIngredientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RecipeIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindFirstArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecipeIngredientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeIngredientFindFirstArgs<ExtArgs>>
    ): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RecipeIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindFirstOrThrowArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RecipeIngredientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeIngredientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RecipeIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredient.findMany()
     * 
     * // Get first 10 RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeIngredientWithIdOnly = await prisma.recipeIngredient.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecipeIngredientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeIngredientFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RecipeIngredient.
     * @param {RecipeIngredientCreateArgs} args - Arguments to create a RecipeIngredient.
     * @example
     * // Create one RecipeIngredient
     * const RecipeIngredient = await prisma.recipeIngredient.create({
     *   data: {
     *     // ... data to create a RecipeIngredient
     *   }
     * })
     * 
    **/
    create<T extends RecipeIngredientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeIngredientCreateArgs<ExtArgs>>
    ): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RecipeIngredients.
     *     @param {RecipeIngredientCreateManyArgs} args - Arguments to create many RecipeIngredients.
     *     @example
     *     // Create many RecipeIngredients
     *     const recipeIngredient = await prisma.recipeIngredient.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecipeIngredientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeIngredientCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RecipeIngredient.
     * @param {RecipeIngredientDeleteArgs} args - Arguments to delete one RecipeIngredient.
     * @example
     * // Delete one RecipeIngredient
     * const RecipeIngredient = await prisma.recipeIngredient.delete({
     *   where: {
     *     // ... filter to delete one RecipeIngredient
     *   }
     * })
     * 
    **/
    delete<T extends RecipeIngredientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeIngredientDeleteArgs<ExtArgs>>
    ): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RecipeIngredient.
     * @param {RecipeIngredientUpdateArgs} args - Arguments to update one RecipeIngredient.
     * @example
     * // Update one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecipeIngredientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeIngredientUpdateArgs<ExtArgs>>
    ): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RecipeIngredients.
     * @param {RecipeIngredientDeleteManyArgs} args - Arguments to filter RecipeIngredients to delete.
     * @example
     * // Delete a few RecipeIngredients
     * const { count } = await prisma.recipeIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecipeIngredientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeIngredientDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecipeIngredientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeIngredientUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RecipeIngredient.
     * @param {RecipeIngredientUpsertArgs} args - Arguments to update or create a RecipeIngredient.
     * @example
     * // Update or create a RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.upsert({
     *   create: {
     *     // ... data to create a RecipeIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeIngredient we want to update
     *   }
     * })
    **/
    upsert<T extends RecipeIngredientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeIngredientUpsertArgs<ExtArgs>>
    ): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RecipeIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientCountArgs} args - Arguments to filter RecipeIngredients to count.
     * @example
     * // Count the number of RecipeIngredients
     * const count = await prisma.recipeIngredient.count({
     *   where: {
     *     // ... the filter for the RecipeIngredients we want to count
     *   }
     * })
    **/
    count<T extends RecipeIngredientCountArgs>(
      args?: Subset<T, RecipeIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeIngredientAggregateArgs>(args: Subset<T, RecipeIngredientAggregateArgs>): Prisma.PrismaPromise<GetRecipeIngredientAggregateType<T>>

    /**
     * Group by RecipeIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeIngredientGroupByArgs['orderBy'] }
        : { orderBy?: RecipeIngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeIngredient model
   */
  readonly fields: RecipeIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Product<T extends RecipeIngredient$ProductArgs<ExtArgs> = {}>(args?: Subset<T, RecipeIngredient$ProductArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RecipeIngredient model
   */ 
  interface RecipeIngredientFieldRefs {
    readonly id: FieldRef<"RecipeIngredient", 'Int'>
    readonly recipeId: FieldRef<"RecipeIngredient", 'Int'>
    readonly ingredientId: FieldRef<"RecipeIngredient", 'Int'>
    readonly amountText: FieldRef<"RecipeIngredient", 'String'>
    readonly amount: FieldRef<"RecipeIngredient", 'Float'>
    readonly productBarcode: FieldRef<"RecipeIngredient", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RecipeIngredient findUnique
   */
  export type RecipeIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient findUniqueOrThrow
   */
  export type RecipeIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient findFirst
   */
  export type RecipeIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationAndSearchRelevanceInput | RecipeIngredientOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeIngredients.
     */
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient findFirstOrThrow
   */
  export type RecipeIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationAndSearchRelevanceInput | RecipeIngredientOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeIngredients.
     */
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient findMany
   */
  export type RecipeIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredients to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationAndSearchRelevanceInput | RecipeIngredientOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient create
   */
  export type RecipeIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeIngredient.
     */
    data: XOR<RecipeIngredientCreateInput, RecipeIngredientUncheckedCreateInput>
  }

  /**
   * RecipeIngredient createMany
   */
  export type RecipeIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeIngredients.
     */
    data: RecipeIngredientCreateManyInput | RecipeIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeIngredient update
   */
  export type RecipeIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeIngredient.
     */
    data: XOR<RecipeIngredientUpdateInput, RecipeIngredientUncheckedUpdateInput>
    /**
     * Choose, which RecipeIngredient to update.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient updateMany
   */
  export type RecipeIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeIngredients.
     */
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyInput>
    /**
     * Filter which RecipeIngredients to update
     */
    where?: RecipeIngredientWhereInput
  }

  /**
   * RecipeIngredient upsert
   */
  export type RecipeIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeIngredient to update in case it exists.
     */
    where: RecipeIngredientWhereUniqueInput
    /**
     * In case the RecipeIngredient found by the `where` argument doesn't exist, create a new RecipeIngredient with this data.
     */
    create: XOR<RecipeIngredientCreateInput, RecipeIngredientUncheckedCreateInput>
    /**
     * In case the RecipeIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeIngredientUpdateInput, RecipeIngredientUncheckedUpdateInput>
  }

  /**
   * RecipeIngredient delete
   */
  export type RecipeIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter which RecipeIngredient to delete.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient deleteMany
   */
  export type RecipeIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeIngredients to delete
     */
    where?: RecipeIngredientWhereInput
  }

  /**
   * RecipeIngredient.Product
   */
  export type RecipeIngredient$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * RecipeIngredient without action
   */
  export type RecipeIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
  }


  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    id: number | null
  }

  export type IngredientSumAggregateOutputType = {
    id: number | null
  }

  export type IngredientMinAggregateOutputType = {
    id: number | null
    name: string | null
    unit: string | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    unit: string | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    name: number
    unit: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    id?: true
  }

  export type IngredientSumAggregateInputType = {
    id?: true
  }

  export type IngredientMinAggregateInputType = {
    id?: true
    name?: true
    unit?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    name?: true
    unit?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    name?: true
    unit?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationAndSearchRelevanceInput | IngredientOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: number
    name: string
    unit: string | null
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    unit?: boolean
    products?: boolean | Ingredient$productsArgs<ExtArgs>
    recipeIngredients?: boolean | Ingredient$recipeIngredientsArgs<ExtArgs>
    IngredientProduct?: boolean | Ingredient$IngredientProductArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    name?: boolean
    unit?: boolean
  }


  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Ingredient$productsArgs<ExtArgs>
    recipeIngredients?: boolean | Ingredient$recipeIngredientsArgs<ExtArgs>
    IngredientProduct?: boolean | Ingredient$IngredientProductArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      recipeIngredients: Prisma.$RecipeIngredientPayload<ExtArgs>[]
      IngredientProduct: Prisma.$IngredientProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      unit: string | null
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }


  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IngredientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ingredient that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IngredientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IngredientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
    **/
    create<T extends IngredientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ingredients.
     *     @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     *     @example
     *     // Create many Ingredients
     *     const ingredient = await prisma.ingredient.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IngredientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
    **/
    delete<T extends IngredientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IngredientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IngredientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IngredientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
    **/
    upsert<T extends IngredientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>
    ): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends Ingredient$productsArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    recipeIngredients<T extends Ingredient$recipeIngredientsArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$recipeIngredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, 'findMany'> | Null>;

    IngredientProduct<T extends Ingredient$IngredientProductArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$IngredientProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ingredient model
   */ 
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'Int'>
    readonly name: FieldRef<"Ingredient", 'String'>
    readonly unit: FieldRef<"Ingredient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationAndSearchRelevanceInput | IngredientOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationAndSearchRelevanceInput | IngredientOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationAndSearchRelevanceInput | IngredientOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
  }

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
  }

  /**
   * Ingredient.products
   */
  export type Ingredient$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationAndSearchRelevanceInput | ProductOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Ingredient.recipeIngredients
   */
  export type Ingredient$recipeIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithRelationAndSearchRelevanceInput | RecipeIngredientOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: RecipeIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * Ingredient.IngredientProduct
   */
  export type Ingredient$IngredientProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientProduct
     */
    select?: IngredientProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientProductInclude<ExtArgs> | null
    where?: IngredientProductWhereInput
    orderBy?: IngredientProductOrderByWithRelationAndSearchRelevanceInput | IngredientProductOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: IngredientProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientProductScalarFieldEnum | IngredientProductScalarFieldEnum[]
  }

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    barcode: number | null
    fridgeId: number | null
    ingredientId: number | null
    ecoScore: number | null
    novaScore: number | null
    quantity: number | null
  }

  export type ProductSumAggregateOutputType = {
    barcode: number | null
    fridgeId: number | null
    ingredientId: number | null
    ecoScore: number | null
    novaScore: number | null
    quantity: number | null
  }

  export type ProductMinAggregateOutputType = {
    barcode: number | null
    fridgeId: number | null
    ingredientId: number | null
    name: string | null
    brand: string | null
    labels: boolean | null
    ecoScore: number | null
    novaScore: number | null
    bigImageUrl: string | null
    miniImageUrl: string | null
    meal: boolean | null
    allergens: string | null
    quantity: number | null
  }

  export type ProductMaxAggregateOutputType = {
    barcode: number | null
    fridgeId: number | null
    ingredientId: number | null
    name: string | null
    brand: string | null
    labels: boolean | null
    ecoScore: number | null
    novaScore: number | null
    bigImageUrl: string | null
    miniImageUrl: string | null
    meal: boolean | null
    allergens: string | null
    quantity: number | null
  }

  export type ProductCountAggregateOutputType = {
    barcode: number
    fridgeId: number
    ingredientId: number
    name: number
    brand: number
    labels: number
    ecoScore: number
    novaScore: number
    bigImageUrl: number
    miniImageUrl: number
    meal: number
    allergens: number
    quantity: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    barcode?: true
    fridgeId?: true
    ingredientId?: true
    ecoScore?: true
    novaScore?: true
    quantity?: true
  }

  export type ProductSumAggregateInputType = {
    barcode?: true
    fridgeId?: true
    ingredientId?: true
    ecoScore?: true
    novaScore?: true
    quantity?: true
  }

  export type ProductMinAggregateInputType = {
    barcode?: true
    fridgeId?: true
    ingredientId?: true
    name?: true
    brand?: true
    labels?: true
    ecoScore?: true
    novaScore?: true
    bigImageUrl?: true
    miniImageUrl?: true
    meal?: true
    allergens?: true
    quantity?: true
  }

  export type ProductMaxAggregateInputType = {
    barcode?: true
    fridgeId?: true
    ingredientId?: true
    name?: true
    brand?: true
    labels?: true
    ecoScore?: true
    novaScore?: true
    bigImageUrl?: true
    miniImageUrl?: true
    meal?: true
    allergens?: true
    quantity?: true
  }

  export type ProductCountAggregateInputType = {
    barcode?: true
    fridgeId?: true
    ingredientId?: true
    name?: true
    brand?: true
    labels?: true
    ecoScore?: true
    novaScore?: true
    bigImageUrl?: true
    miniImageUrl?: true
    meal?: true
    allergens?: true
    quantity?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationAndSearchRelevanceInput | ProductOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    barcode: number
    fridgeId: number | null
    ingredientId: number
    name: string
    brand: string
    labels: boolean
    ecoScore: number
    novaScore: number
    bigImageUrl: string
    miniImageUrl: string
    meal: boolean
    allergens: string
    quantity: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    barcode?: boolean
    fridgeId?: boolean
    ingredientId?: boolean
    name?: boolean
    brand?: boolean
    labels?: boolean
    ecoScore?: boolean
    novaScore?: boolean
    bigImageUrl?: boolean
    miniImageUrl?: boolean
    meal?: boolean
    allergens?: boolean
    quantity?: boolean
    fridge?: boolean | Product$fridgeArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    fridges?: boolean | Product$fridgesArgs<ExtArgs>
    recipeIngredients?: boolean | Product$recipeIngredientsArgs<ExtArgs>
    IngredientProduct?: boolean | Product$IngredientProductArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    barcode?: boolean
    fridgeId?: boolean
    ingredientId?: boolean
    name?: boolean
    brand?: boolean
    labels?: boolean
    ecoScore?: boolean
    novaScore?: boolean
    bigImageUrl?: boolean
    miniImageUrl?: boolean
    meal?: boolean
    allergens?: boolean
    quantity?: boolean
  }


  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fridge?: boolean | Product$fridgeArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    fridges?: boolean | Product$fridgesArgs<ExtArgs>
    recipeIngredients?: boolean | Product$recipeIngredientsArgs<ExtArgs>
    IngredientProduct?: boolean | Product$IngredientProductArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      fridge: Prisma.$FridgePayload<ExtArgs> | null
      ingredient: Prisma.$IngredientPayload<ExtArgs>
      fridges: Prisma.$FridgeProductPayload<ExtArgs>[]
      recipeIngredients: Prisma.$RecipeIngredientPayload<ExtArgs>[]
      IngredientProduct: Prisma.$IngredientProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      barcode: number
      fridgeId: number | null
      ingredientId: number
      name: string
      brand: string
      labels: boolean
      ecoScore: number
      novaScore: number
      bigImageUrl: string
      miniImageUrl: string
      meal: boolean
      allergens: string
      quantity: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `barcode`
     * const productWithBarcodeOnly = await prisma.product.findMany({ select: { barcode: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fridge<T extends Product$fridgeArgs<ExtArgs> = {}>(args?: Subset<T, Product$fridgeArgs<ExtArgs>>): Prisma__FridgeClient<$Result.GetResult<Prisma.$FridgePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    fridges<T extends Product$fridgesArgs<ExtArgs> = {}>(args?: Subset<T, Product$fridgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FridgeProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    recipeIngredients<T extends Product$recipeIngredientsArgs<ExtArgs> = {}>(args?: Subset<T, Product$recipeIngredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, 'findMany'> | Null>;

    IngredientProduct<T extends Product$IngredientProductArgs<ExtArgs> = {}>(args?: Subset<T, Product$IngredientProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly barcode: FieldRef<"Product", 'Int'>
    readonly fridgeId: FieldRef<"Product", 'Int'>
    readonly ingredientId: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly labels: FieldRef<"Product", 'Boolean'>
    readonly ecoScore: FieldRef<"Product", 'Int'>
    readonly novaScore: FieldRef<"Product", 'Int'>
    readonly bigImageUrl: FieldRef<"Product", 'String'>
    readonly miniImageUrl: FieldRef<"Product", 'String'>
    readonly meal: FieldRef<"Product", 'Boolean'>
    readonly allergens: FieldRef<"Product", 'String'>
    readonly quantity: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationAndSearchRelevanceInput | ProductOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationAndSearchRelevanceInput | ProductOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationAndSearchRelevanceInput | ProductOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.fridge
   */
  export type Product$fridgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fridge
     */
    select?: FridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeInclude<ExtArgs> | null
    where?: FridgeWhereInput
  }

  /**
   * Product.fridges
   */
  export type Product$fridgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeProduct
     */
    select?: FridgeProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeProductInclude<ExtArgs> | null
    where?: FridgeProductWhereInput
    orderBy?: FridgeProductOrderByWithRelationAndSearchRelevanceInput | FridgeProductOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: FridgeProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FridgeProductScalarFieldEnum | FridgeProductScalarFieldEnum[]
  }

  /**
   * Product.recipeIngredients
   */
  export type Product$recipeIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithRelationAndSearchRelevanceInput | RecipeIngredientOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: RecipeIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * Product.IngredientProduct
   */
  export type Product$IngredientProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientProduct
     */
    select?: IngredientProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientProductInclude<ExtArgs> | null
    where?: IngredientProductWhereInput
    orderBy?: IngredientProductOrderByWithRelationAndSearchRelevanceInput | IngredientProductOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: IngredientProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientProductScalarFieldEnum | IngredientProductScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Fridge
   */

  export type AggregateFridge = {
    _count: FridgeCountAggregateOutputType | null
    _avg: FridgeAvgAggregateOutputType | null
    _sum: FridgeSumAggregateOutputType | null
    _min: FridgeMinAggregateOutputType | null
    _max: FridgeMaxAggregateOutputType | null
  }

  export type FridgeAvgAggregateOutputType = {
    id: number | null
  }

  export type FridgeSumAggregateOutputType = {
    id: number | null
  }

  export type FridgeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FridgeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FridgeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type FridgeAvgAggregateInputType = {
    id?: true
  }

  export type FridgeSumAggregateInputType = {
    id?: true
  }

  export type FridgeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FridgeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FridgeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type FridgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fridge to aggregate.
     */
    where?: FridgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fridges to fetch.
     */
    orderBy?: FridgeOrderByWithRelationAndSearchRelevanceInput | FridgeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FridgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fridges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fridges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fridges
    **/
    _count?: true | FridgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FridgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FridgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FridgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FridgeMaxAggregateInputType
  }

  export type GetFridgeAggregateType<T extends FridgeAggregateArgs> = {
        [P in keyof T & keyof AggregateFridge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFridge[P]>
      : GetScalarType<T[P], AggregateFridge[P]>
  }




  export type FridgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FridgeWhereInput
    orderBy?: FridgeOrderByWithAggregationInput | FridgeOrderByWithAggregationInput[]
    by: FridgeScalarFieldEnum[] | FridgeScalarFieldEnum
    having?: FridgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FridgeCountAggregateInputType | true
    _avg?: FridgeAvgAggregateInputType
    _sum?: FridgeSumAggregateInputType
    _min?: FridgeMinAggregateInputType
    _max?: FridgeMaxAggregateInputType
  }

  export type FridgeGroupByOutputType = {
    id: number
    name: string
    _count: FridgeCountAggregateOutputType | null
    _avg: FridgeAvgAggregateOutputType | null
    _sum: FridgeSumAggregateOutputType | null
    _min: FridgeMinAggregateOutputType | null
    _max: FridgeMaxAggregateOutputType | null
  }

  type GetFridgeGroupByPayload<T extends FridgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FridgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FridgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FridgeGroupByOutputType[P]>
            : GetScalarType<T[P], FridgeGroupByOutputType[P]>
        }
      >
    >


  export type FridgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    products?: boolean | Fridge$productsArgs<ExtArgs>
    users?: boolean | Fridge$usersArgs<ExtArgs>
    Product?: boolean | Fridge$ProductArgs<ExtArgs>
    _count?: boolean | FridgeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fridge"]>

  export type FridgeSelectScalar = {
    id?: boolean
    name?: boolean
  }


  export type FridgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Fridge$productsArgs<ExtArgs>
    users?: boolean | Fridge$usersArgs<ExtArgs>
    Product?: boolean | Fridge$ProductArgs<ExtArgs>
    _count?: boolean | FridgeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FridgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fridge"
    objects: {
      products: Prisma.$FridgeProductPayload<ExtArgs>[]
      users: Prisma.$UserFridgePayload<ExtArgs>[]
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["fridge"]>
    composites: {}
  }


  type FridgeGetPayload<S extends boolean | null | undefined | FridgeDefaultArgs> = $Result.GetResult<Prisma.$FridgePayload, S>

  type FridgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FridgeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FridgeCountAggregateInputType | true
    }

  export interface FridgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fridge'], meta: { name: 'Fridge' } }
    /**
     * Find zero or one Fridge that matches the filter.
     * @param {FridgeFindUniqueArgs} args - Arguments to find a Fridge
     * @example
     * // Get one Fridge
     * const fridge = await prisma.fridge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FridgeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FridgeFindUniqueArgs<ExtArgs>>
    ): Prisma__FridgeClient<$Result.GetResult<Prisma.$FridgePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Fridge that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FridgeFindUniqueOrThrowArgs} args - Arguments to find a Fridge
     * @example
     * // Get one Fridge
     * const fridge = await prisma.fridge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FridgeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FridgeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FridgeClient<$Result.GetResult<Prisma.$FridgePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Fridge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeFindFirstArgs} args - Arguments to find a Fridge
     * @example
     * // Get one Fridge
     * const fridge = await prisma.fridge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FridgeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FridgeFindFirstArgs<ExtArgs>>
    ): Prisma__FridgeClient<$Result.GetResult<Prisma.$FridgePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Fridge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeFindFirstOrThrowArgs} args - Arguments to find a Fridge
     * @example
     * // Get one Fridge
     * const fridge = await prisma.fridge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FridgeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FridgeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FridgeClient<$Result.GetResult<Prisma.$FridgePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fridges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fridges
     * const fridges = await prisma.fridge.findMany()
     * 
     * // Get first 10 Fridges
     * const fridges = await prisma.fridge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fridgeWithIdOnly = await prisma.fridge.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FridgeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FridgeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FridgePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Fridge.
     * @param {FridgeCreateArgs} args - Arguments to create a Fridge.
     * @example
     * // Create one Fridge
     * const Fridge = await prisma.fridge.create({
     *   data: {
     *     // ... data to create a Fridge
     *   }
     * })
     * 
    **/
    create<T extends FridgeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FridgeCreateArgs<ExtArgs>>
    ): Prisma__FridgeClient<$Result.GetResult<Prisma.$FridgePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fridges.
     *     @param {FridgeCreateManyArgs} args - Arguments to create many Fridges.
     *     @example
     *     // Create many Fridges
     *     const fridge = await prisma.fridge.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FridgeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FridgeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fridge.
     * @param {FridgeDeleteArgs} args - Arguments to delete one Fridge.
     * @example
     * // Delete one Fridge
     * const Fridge = await prisma.fridge.delete({
     *   where: {
     *     // ... filter to delete one Fridge
     *   }
     * })
     * 
    **/
    delete<T extends FridgeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FridgeDeleteArgs<ExtArgs>>
    ): Prisma__FridgeClient<$Result.GetResult<Prisma.$FridgePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Fridge.
     * @param {FridgeUpdateArgs} args - Arguments to update one Fridge.
     * @example
     * // Update one Fridge
     * const fridge = await prisma.fridge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FridgeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FridgeUpdateArgs<ExtArgs>>
    ): Prisma__FridgeClient<$Result.GetResult<Prisma.$FridgePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fridges.
     * @param {FridgeDeleteManyArgs} args - Arguments to filter Fridges to delete.
     * @example
     * // Delete a few Fridges
     * const { count } = await prisma.fridge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FridgeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FridgeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fridges
     * const fridge = await prisma.fridge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FridgeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FridgeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fridge.
     * @param {FridgeUpsertArgs} args - Arguments to update or create a Fridge.
     * @example
     * // Update or create a Fridge
     * const fridge = await prisma.fridge.upsert({
     *   create: {
     *     // ... data to create a Fridge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fridge we want to update
     *   }
     * })
    **/
    upsert<T extends FridgeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FridgeUpsertArgs<ExtArgs>>
    ): Prisma__FridgeClient<$Result.GetResult<Prisma.$FridgePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Fridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeCountArgs} args - Arguments to filter Fridges to count.
     * @example
     * // Count the number of Fridges
     * const count = await prisma.fridge.count({
     *   where: {
     *     // ... the filter for the Fridges we want to count
     *   }
     * })
    **/
    count<T extends FridgeCountArgs>(
      args?: Subset<T, FridgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FridgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FridgeAggregateArgs>(args: Subset<T, FridgeAggregateArgs>): Prisma.PrismaPromise<GetFridgeAggregateType<T>>

    /**
     * Group by Fridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FridgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FridgeGroupByArgs['orderBy'] }
        : { orderBy?: FridgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FridgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFridgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fridge model
   */
  readonly fields: FridgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fridge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FridgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends Fridge$productsArgs<ExtArgs> = {}>(args?: Subset<T, Fridge$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FridgeProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    users<T extends Fridge$usersArgs<ExtArgs> = {}>(args?: Subset<T, Fridge$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFridgePayload<ExtArgs>, T, 'findMany'> | Null>;

    Product<T extends Fridge$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Fridge$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Fridge model
   */ 
  interface FridgeFieldRefs {
    readonly id: FieldRef<"Fridge", 'Int'>
    readonly name: FieldRef<"Fridge", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fridge findUnique
   */
  export type FridgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fridge
     */
    select?: FridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeInclude<ExtArgs> | null
    /**
     * Filter, which Fridge to fetch.
     */
    where: FridgeWhereUniqueInput
  }

  /**
   * Fridge findUniqueOrThrow
   */
  export type FridgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fridge
     */
    select?: FridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeInclude<ExtArgs> | null
    /**
     * Filter, which Fridge to fetch.
     */
    where: FridgeWhereUniqueInput
  }

  /**
   * Fridge findFirst
   */
  export type FridgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fridge
     */
    select?: FridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeInclude<ExtArgs> | null
    /**
     * Filter, which Fridge to fetch.
     */
    where?: FridgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fridges to fetch.
     */
    orderBy?: FridgeOrderByWithRelationAndSearchRelevanceInput | FridgeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fridges.
     */
    cursor?: FridgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fridges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fridges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fridges.
     */
    distinct?: FridgeScalarFieldEnum | FridgeScalarFieldEnum[]
  }

  /**
   * Fridge findFirstOrThrow
   */
  export type FridgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fridge
     */
    select?: FridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeInclude<ExtArgs> | null
    /**
     * Filter, which Fridge to fetch.
     */
    where?: FridgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fridges to fetch.
     */
    orderBy?: FridgeOrderByWithRelationAndSearchRelevanceInput | FridgeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fridges.
     */
    cursor?: FridgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fridges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fridges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fridges.
     */
    distinct?: FridgeScalarFieldEnum | FridgeScalarFieldEnum[]
  }

  /**
   * Fridge findMany
   */
  export type FridgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fridge
     */
    select?: FridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeInclude<ExtArgs> | null
    /**
     * Filter, which Fridges to fetch.
     */
    where?: FridgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fridges to fetch.
     */
    orderBy?: FridgeOrderByWithRelationAndSearchRelevanceInput | FridgeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fridges.
     */
    cursor?: FridgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fridges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fridges.
     */
    skip?: number
    distinct?: FridgeScalarFieldEnum | FridgeScalarFieldEnum[]
  }

  /**
   * Fridge create
   */
  export type FridgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fridge
     */
    select?: FridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Fridge.
     */
    data: XOR<FridgeCreateInput, FridgeUncheckedCreateInput>
  }

  /**
   * Fridge createMany
   */
  export type FridgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fridges.
     */
    data: FridgeCreateManyInput | FridgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fridge update
   */
  export type FridgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fridge
     */
    select?: FridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Fridge.
     */
    data: XOR<FridgeUpdateInput, FridgeUncheckedUpdateInput>
    /**
     * Choose, which Fridge to update.
     */
    where: FridgeWhereUniqueInput
  }

  /**
   * Fridge updateMany
   */
  export type FridgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fridges.
     */
    data: XOR<FridgeUpdateManyMutationInput, FridgeUncheckedUpdateManyInput>
    /**
     * Filter which Fridges to update
     */
    where?: FridgeWhereInput
  }

  /**
   * Fridge upsert
   */
  export type FridgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fridge
     */
    select?: FridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Fridge to update in case it exists.
     */
    where: FridgeWhereUniqueInput
    /**
     * In case the Fridge found by the `where` argument doesn't exist, create a new Fridge with this data.
     */
    create: XOR<FridgeCreateInput, FridgeUncheckedCreateInput>
    /**
     * In case the Fridge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FridgeUpdateInput, FridgeUncheckedUpdateInput>
  }

  /**
   * Fridge delete
   */
  export type FridgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fridge
     */
    select?: FridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeInclude<ExtArgs> | null
    /**
     * Filter which Fridge to delete.
     */
    where: FridgeWhereUniqueInput
  }

  /**
   * Fridge deleteMany
   */
  export type FridgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fridges to delete
     */
    where?: FridgeWhereInput
  }

  /**
   * Fridge.products
   */
  export type Fridge$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeProduct
     */
    select?: FridgeProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeProductInclude<ExtArgs> | null
    where?: FridgeProductWhereInput
    orderBy?: FridgeProductOrderByWithRelationAndSearchRelevanceInput | FridgeProductOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: FridgeProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FridgeProductScalarFieldEnum | FridgeProductScalarFieldEnum[]
  }

  /**
   * Fridge.users
   */
  export type Fridge$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFridge
     */
    select?: UserFridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFridgeInclude<ExtArgs> | null
    where?: UserFridgeWhereInput
    orderBy?: UserFridgeOrderByWithRelationAndSearchRelevanceInput | UserFridgeOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: UserFridgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFridgeScalarFieldEnum | UserFridgeScalarFieldEnum[]
  }

  /**
   * Fridge.Product
   */
  export type Fridge$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationAndSearchRelevanceInput | ProductOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Fridge without action
   */
  export type FridgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fridge
     */
    select?: FridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeInclude<ExtArgs> | null
  }


  /**
   * Model UserFridge
   */

  export type AggregateUserFridge = {
    _count: UserFridgeCountAggregateOutputType | null
    _avg: UserFridgeAvgAggregateOutputType | null
    _sum: UserFridgeSumAggregateOutputType | null
    _min: UserFridgeMinAggregateOutputType | null
    _max: UserFridgeMaxAggregateOutputType | null
  }

  export type UserFridgeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    fridgeId: number | null
  }

  export type UserFridgeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    fridgeId: number | null
  }

  export type UserFridgeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    fridgeId: number | null
    isAdmin: boolean | null
    isOwner: boolean | null
  }

  export type UserFridgeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    fridgeId: number | null
    isAdmin: boolean | null
    isOwner: boolean | null
  }

  export type UserFridgeCountAggregateOutputType = {
    id: number
    userId: number
    fridgeId: number
    isAdmin: number
    isOwner: number
    _all: number
  }


  export type UserFridgeAvgAggregateInputType = {
    id?: true
    userId?: true
    fridgeId?: true
  }

  export type UserFridgeSumAggregateInputType = {
    id?: true
    userId?: true
    fridgeId?: true
  }

  export type UserFridgeMinAggregateInputType = {
    id?: true
    userId?: true
    fridgeId?: true
    isAdmin?: true
    isOwner?: true
  }

  export type UserFridgeMaxAggregateInputType = {
    id?: true
    userId?: true
    fridgeId?: true
    isAdmin?: true
    isOwner?: true
  }

  export type UserFridgeCountAggregateInputType = {
    id?: true
    userId?: true
    fridgeId?: true
    isAdmin?: true
    isOwner?: true
    _all?: true
  }

  export type UserFridgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFridge to aggregate.
     */
    where?: UserFridgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFridges to fetch.
     */
    orderBy?: UserFridgeOrderByWithRelationAndSearchRelevanceInput | UserFridgeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFridgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFridges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFridges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFridges
    **/
    _count?: true | UserFridgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserFridgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserFridgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFridgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFridgeMaxAggregateInputType
  }

  export type GetUserFridgeAggregateType<T extends UserFridgeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFridge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFridge[P]>
      : GetScalarType<T[P], AggregateUserFridge[P]>
  }




  export type UserFridgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFridgeWhereInput
    orderBy?: UserFridgeOrderByWithAggregationInput | UserFridgeOrderByWithAggregationInput[]
    by: UserFridgeScalarFieldEnum[] | UserFridgeScalarFieldEnum
    having?: UserFridgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFridgeCountAggregateInputType | true
    _avg?: UserFridgeAvgAggregateInputType
    _sum?: UserFridgeSumAggregateInputType
    _min?: UserFridgeMinAggregateInputType
    _max?: UserFridgeMaxAggregateInputType
  }

  export type UserFridgeGroupByOutputType = {
    id: number
    userId: number
    fridgeId: number
    isAdmin: boolean
    isOwner: boolean
    _count: UserFridgeCountAggregateOutputType | null
    _avg: UserFridgeAvgAggregateOutputType | null
    _sum: UserFridgeSumAggregateOutputType | null
    _min: UserFridgeMinAggregateOutputType | null
    _max: UserFridgeMaxAggregateOutputType | null
  }

  type GetUserFridgeGroupByPayload<T extends UserFridgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFridgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFridgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFridgeGroupByOutputType[P]>
            : GetScalarType<T[P], UserFridgeGroupByOutputType[P]>
        }
      >
    >


  export type UserFridgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fridgeId?: boolean
    isAdmin?: boolean
    isOwner?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    fridge?: boolean | FridgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFridge"]>

  export type UserFridgeSelectScalar = {
    id?: boolean
    userId?: boolean
    fridgeId?: boolean
    isAdmin?: boolean
    isOwner?: boolean
  }


  export type UserFridgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    fridge?: boolean | FridgeDefaultArgs<ExtArgs>
  }


  export type $UserFridgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFridge"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      fridge: Prisma.$FridgePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      fridgeId: number
      isAdmin: boolean
      isOwner: boolean
    }, ExtArgs["result"]["userFridge"]>
    composites: {}
  }


  type UserFridgeGetPayload<S extends boolean | null | undefined | UserFridgeDefaultArgs> = $Result.GetResult<Prisma.$UserFridgePayload, S>

  type UserFridgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFridgeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserFridgeCountAggregateInputType | true
    }

  export interface UserFridgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFridge'], meta: { name: 'UserFridge' } }
    /**
     * Find zero or one UserFridge that matches the filter.
     * @param {UserFridgeFindUniqueArgs} args - Arguments to find a UserFridge
     * @example
     * // Get one UserFridge
     * const userFridge = await prisma.userFridge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFridgeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFridgeFindUniqueArgs<ExtArgs>>
    ): Prisma__UserFridgeClient<$Result.GetResult<Prisma.$UserFridgePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserFridge that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFridgeFindUniqueOrThrowArgs} args - Arguments to find a UserFridge
     * @example
     * // Get one UserFridge
     * const userFridge = await prisma.userFridge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFridgeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFridgeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserFridgeClient<$Result.GetResult<Prisma.$UserFridgePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserFridge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFridgeFindFirstArgs} args - Arguments to find a UserFridge
     * @example
     * // Get one UserFridge
     * const userFridge = await prisma.userFridge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFridgeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFridgeFindFirstArgs<ExtArgs>>
    ): Prisma__UserFridgeClient<$Result.GetResult<Prisma.$UserFridgePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserFridge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFridgeFindFirstOrThrowArgs} args - Arguments to find a UserFridge
     * @example
     * // Get one UserFridge
     * const userFridge = await prisma.userFridge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFridgeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFridgeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserFridgeClient<$Result.GetResult<Prisma.$UserFridgePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserFridges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFridgeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFridges
     * const userFridges = await prisma.userFridge.findMany()
     * 
     * // Get first 10 UserFridges
     * const userFridges = await prisma.userFridge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFridgeWithIdOnly = await prisma.userFridge.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFridgeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFridgeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFridgePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserFridge.
     * @param {UserFridgeCreateArgs} args - Arguments to create a UserFridge.
     * @example
     * // Create one UserFridge
     * const UserFridge = await prisma.userFridge.create({
     *   data: {
     *     // ... data to create a UserFridge
     *   }
     * })
     * 
    **/
    create<T extends UserFridgeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserFridgeCreateArgs<ExtArgs>>
    ): Prisma__UserFridgeClient<$Result.GetResult<Prisma.$UserFridgePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserFridges.
     *     @param {UserFridgeCreateManyArgs} args - Arguments to create many UserFridges.
     *     @example
     *     // Create many UserFridges
     *     const userFridge = await prisma.userFridge.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserFridgeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFridgeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserFridge.
     * @param {UserFridgeDeleteArgs} args - Arguments to delete one UserFridge.
     * @example
     * // Delete one UserFridge
     * const UserFridge = await prisma.userFridge.delete({
     *   where: {
     *     // ... filter to delete one UserFridge
     *   }
     * })
     * 
    **/
    delete<T extends UserFridgeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserFridgeDeleteArgs<ExtArgs>>
    ): Prisma__UserFridgeClient<$Result.GetResult<Prisma.$UserFridgePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserFridge.
     * @param {UserFridgeUpdateArgs} args - Arguments to update one UserFridge.
     * @example
     * // Update one UserFridge
     * const userFridge = await prisma.userFridge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserFridgeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserFridgeUpdateArgs<ExtArgs>>
    ): Prisma__UserFridgeClient<$Result.GetResult<Prisma.$UserFridgePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserFridges.
     * @param {UserFridgeDeleteManyArgs} args - Arguments to filter UserFridges to delete.
     * @example
     * // Delete a few UserFridges
     * const { count } = await prisma.userFridge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserFridgeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFridgeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFridgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFridges
     * const userFridge = await prisma.userFridge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserFridgeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserFridgeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserFridge.
     * @param {UserFridgeUpsertArgs} args - Arguments to update or create a UserFridge.
     * @example
     * // Update or create a UserFridge
     * const userFridge = await prisma.userFridge.upsert({
     *   create: {
     *     // ... data to create a UserFridge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFridge we want to update
     *   }
     * })
    **/
    upsert<T extends UserFridgeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserFridgeUpsertArgs<ExtArgs>>
    ): Prisma__UserFridgeClient<$Result.GetResult<Prisma.$UserFridgePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserFridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFridgeCountArgs} args - Arguments to filter UserFridges to count.
     * @example
     * // Count the number of UserFridges
     * const count = await prisma.userFridge.count({
     *   where: {
     *     // ... the filter for the UserFridges we want to count
     *   }
     * })
    **/
    count<T extends UserFridgeCountArgs>(
      args?: Subset<T, UserFridgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFridgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFridgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFridgeAggregateArgs>(args: Subset<T, UserFridgeAggregateArgs>): Prisma.PrismaPromise<GetUserFridgeAggregateType<T>>

    /**
     * Group by UserFridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFridgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFridgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFridgeGroupByArgs['orderBy'] }
        : { orderBy?: UserFridgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFridgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFridgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFridge model
   */
  readonly fields: UserFridgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFridge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFridgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    fridge<T extends FridgeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FridgeDefaultArgs<ExtArgs>>): Prisma__FridgeClient<$Result.GetResult<Prisma.$FridgePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserFridge model
   */ 
  interface UserFridgeFieldRefs {
    readonly id: FieldRef<"UserFridge", 'Int'>
    readonly userId: FieldRef<"UserFridge", 'Int'>
    readonly fridgeId: FieldRef<"UserFridge", 'Int'>
    readonly isAdmin: FieldRef<"UserFridge", 'Boolean'>
    readonly isOwner: FieldRef<"UserFridge", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserFridge findUnique
   */
  export type UserFridgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFridge
     */
    select?: UserFridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFridgeInclude<ExtArgs> | null
    /**
     * Filter, which UserFridge to fetch.
     */
    where: UserFridgeWhereUniqueInput
  }

  /**
   * UserFridge findUniqueOrThrow
   */
  export type UserFridgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFridge
     */
    select?: UserFridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFridgeInclude<ExtArgs> | null
    /**
     * Filter, which UserFridge to fetch.
     */
    where: UserFridgeWhereUniqueInput
  }

  /**
   * UserFridge findFirst
   */
  export type UserFridgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFridge
     */
    select?: UserFridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFridgeInclude<ExtArgs> | null
    /**
     * Filter, which UserFridge to fetch.
     */
    where?: UserFridgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFridges to fetch.
     */
    orderBy?: UserFridgeOrderByWithRelationAndSearchRelevanceInput | UserFridgeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFridges.
     */
    cursor?: UserFridgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFridges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFridges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFridges.
     */
    distinct?: UserFridgeScalarFieldEnum | UserFridgeScalarFieldEnum[]
  }

  /**
   * UserFridge findFirstOrThrow
   */
  export type UserFridgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFridge
     */
    select?: UserFridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFridgeInclude<ExtArgs> | null
    /**
     * Filter, which UserFridge to fetch.
     */
    where?: UserFridgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFridges to fetch.
     */
    orderBy?: UserFridgeOrderByWithRelationAndSearchRelevanceInput | UserFridgeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFridges.
     */
    cursor?: UserFridgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFridges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFridges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFridges.
     */
    distinct?: UserFridgeScalarFieldEnum | UserFridgeScalarFieldEnum[]
  }

  /**
   * UserFridge findMany
   */
  export type UserFridgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFridge
     */
    select?: UserFridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFridgeInclude<ExtArgs> | null
    /**
     * Filter, which UserFridges to fetch.
     */
    where?: UserFridgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFridges to fetch.
     */
    orderBy?: UserFridgeOrderByWithRelationAndSearchRelevanceInput | UserFridgeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFridges.
     */
    cursor?: UserFridgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFridges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFridges.
     */
    skip?: number
    distinct?: UserFridgeScalarFieldEnum | UserFridgeScalarFieldEnum[]
  }

  /**
   * UserFridge create
   */
  export type UserFridgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFridge
     */
    select?: UserFridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFridgeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFridge.
     */
    data: XOR<UserFridgeCreateInput, UserFridgeUncheckedCreateInput>
  }

  /**
   * UserFridge createMany
   */
  export type UserFridgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFridges.
     */
    data: UserFridgeCreateManyInput | UserFridgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFridge update
   */
  export type UserFridgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFridge
     */
    select?: UserFridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFridgeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFridge.
     */
    data: XOR<UserFridgeUpdateInput, UserFridgeUncheckedUpdateInput>
    /**
     * Choose, which UserFridge to update.
     */
    where: UserFridgeWhereUniqueInput
  }

  /**
   * UserFridge updateMany
   */
  export type UserFridgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFridges.
     */
    data: XOR<UserFridgeUpdateManyMutationInput, UserFridgeUncheckedUpdateManyInput>
    /**
     * Filter which UserFridges to update
     */
    where?: UserFridgeWhereInput
  }

  /**
   * UserFridge upsert
   */
  export type UserFridgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFridge
     */
    select?: UserFridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFridgeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFridge to update in case it exists.
     */
    where: UserFridgeWhereUniqueInput
    /**
     * In case the UserFridge found by the `where` argument doesn't exist, create a new UserFridge with this data.
     */
    create: XOR<UserFridgeCreateInput, UserFridgeUncheckedCreateInput>
    /**
     * In case the UserFridge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFridgeUpdateInput, UserFridgeUncheckedUpdateInput>
  }

  /**
   * UserFridge delete
   */
  export type UserFridgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFridge
     */
    select?: UserFridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFridgeInclude<ExtArgs> | null
    /**
     * Filter which UserFridge to delete.
     */
    where: UserFridgeWhereUniqueInput
  }

  /**
   * UserFridge deleteMany
   */
  export type UserFridgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFridges to delete
     */
    where?: UserFridgeWhereInput
  }

  /**
   * UserFridge without action
   */
  export type UserFridgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFridge
     */
    select?: UserFridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFridgeInclude<ExtArgs> | null
  }


  /**
   * Model FridgeProduct
   */

  export type AggregateFridgeProduct = {
    _count: FridgeProductCountAggregateOutputType | null
    _avg: FridgeProductAvgAggregateOutputType | null
    _sum: FridgeProductSumAggregateOutputType | null
    _min: FridgeProductMinAggregateOutputType | null
    _max: FridgeProductMaxAggregateOutputType | null
  }

  export type FridgeProductAvgAggregateOutputType = {
    id: number | null
    fridgeId: number | null
    productBarcode: number | null
    quantity: number | null
  }

  export type FridgeProductSumAggregateOutputType = {
    id: number | null
    fridgeId: number | null
    productBarcode: number | null
    quantity: number | null
  }

  export type FridgeProductMinAggregateOutputType = {
    id: number | null
    fridgeId: number | null
    productBarcode: number | null
    quantity: number | null
  }

  export type FridgeProductMaxAggregateOutputType = {
    id: number | null
    fridgeId: number | null
    productBarcode: number | null
    quantity: number | null
  }

  export type FridgeProductCountAggregateOutputType = {
    id: number
    fridgeId: number
    productBarcode: number
    quantity: number
    _all: number
  }


  export type FridgeProductAvgAggregateInputType = {
    id?: true
    fridgeId?: true
    productBarcode?: true
    quantity?: true
  }

  export type FridgeProductSumAggregateInputType = {
    id?: true
    fridgeId?: true
    productBarcode?: true
    quantity?: true
  }

  export type FridgeProductMinAggregateInputType = {
    id?: true
    fridgeId?: true
    productBarcode?: true
    quantity?: true
  }

  export type FridgeProductMaxAggregateInputType = {
    id?: true
    fridgeId?: true
    productBarcode?: true
    quantity?: true
  }

  export type FridgeProductCountAggregateInputType = {
    id?: true
    fridgeId?: true
    productBarcode?: true
    quantity?: true
    _all?: true
  }

  export type FridgeProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FridgeProduct to aggregate.
     */
    where?: FridgeProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FridgeProducts to fetch.
     */
    orderBy?: FridgeProductOrderByWithRelationAndSearchRelevanceInput | FridgeProductOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FridgeProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FridgeProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FridgeProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FridgeProducts
    **/
    _count?: true | FridgeProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FridgeProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FridgeProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FridgeProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FridgeProductMaxAggregateInputType
  }

  export type GetFridgeProductAggregateType<T extends FridgeProductAggregateArgs> = {
        [P in keyof T & keyof AggregateFridgeProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFridgeProduct[P]>
      : GetScalarType<T[P], AggregateFridgeProduct[P]>
  }




  export type FridgeProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FridgeProductWhereInput
    orderBy?: FridgeProductOrderByWithAggregationInput | FridgeProductOrderByWithAggregationInput[]
    by: FridgeProductScalarFieldEnum[] | FridgeProductScalarFieldEnum
    having?: FridgeProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FridgeProductCountAggregateInputType | true
    _avg?: FridgeProductAvgAggregateInputType
    _sum?: FridgeProductSumAggregateInputType
    _min?: FridgeProductMinAggregateInputType
    _max?: FridgeProductMaxAggregateInputType
  }

  export type FridgeProductGroupByOutputType = {
    id: number
    fridgeId: number
    productBarcode: number
    quantity: number
    _count: FridgeProductCountAggregateOutputType | null
    _avg: FridgeProductAvgAggregateOutputType | null
    _sum: FridgeProductSumAggregateOutputType | null
    _min: FridgeProductMinAggregateOutputType | null
    _max: FridgeProductMaxAggregateOutputType | null
  }

  type GetFridgeProductGroupByPayload<T extends FridgeProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FridgeProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FridgeProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FridgeProductGroupByOutputType[P]>
            : GetScalarType<T[P], FridgeProductGroupByOutputType[P]>
        }
      >
    >


  export type FridgeProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fridgeId?: boolean
    productBarcode?: boolean
    quantity?: boolean
    fridge?: boolean | FridgeDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fridgeProduct"]>

  export type FridgeProductSelectScalar = {
    id?: boolean
    fridgeId?: boolean
    productBarcode?: boolean
    quantity?: boolean
  }


  export type FridgeProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fridge?: boolean | FridgeDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $FridgeProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FridgeProduct"
    objects: {
      fridge: Prisma.$FridgePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fridgeId: number
      productBarcode: number
      quantity: number
    }, ExtArgs["result"]["fridgeProduct"]>
    composites: {}
  }


  type FridgeProductGetPayload<S extends boolean | null | undefined | FridgeProductDefaultArgs> = $Result.GetResult<Prisma.$FridgeProductPayload, S>

  type FridgeProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FridgeProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FridgeProductCountAggregateInputType | true
    }

  export interface FridgeProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FridgeProduct'], meta: { name: 'FridgeProduct' } }
    /**
     * Find zero or one FridgeProduct that matches the filter.
     * @param {FridgeProductFindUniqueArgs} args - Arguments to find a FridgeProduct
     * @example
     * // Get one FridgeProduct
     * const fridgeProduct = await prisma.fridgeProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FridgeProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FridgeProductFindUniqueArgs<ExtArgs>>
    ): Prisma__FridgeProductClient<$Result.GetResult<Prisma.$FridgeProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FridgeProduct that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FridgeProductFindUniqueOrThrowArgs} args - Arguments to find a FridgeProduct
     * @example
     * // Get one FridgeProduct
     * const fridgeProduct = await prisma.fridgeProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FridgeProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FridgeProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FridgeProductClient<$Result.GetResult<Prisma.$FridgeProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FridgeProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeProductFindFirstArgs} args - Arguments to find a FridgeProduct
     * @example
     * // Get one FridgeProduct
     * const fridgeProduct = await prisma.fridgeProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FridgeProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FridgeProductFindFirstArgs<ExtArgs>>
    ): Prisma__FridgeProductClient<$Result.GetResult<Prisma.$FridgeProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FridgeProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeProductFindFirstOrThrowArgs} args - Arguments to find a FridgeProduct
     * @example
     * // Get one FridgeProduct
     * const fridgeProduct = await prisma.fridgeProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FridgeProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FridgeProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FridgeProductClient<$Result.GetResult<Prisma.$FridgeProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FridgeProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FridgeProducts
     * const fridgeProducts = await prisma.fridgeProduct.findMany()
     * 
     * // Get first 10 FridgeProducts
     * const fridgeProducts = await prisma.fridgeProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fridgeProductWithIdOnly = await prisma.fridgeProduct.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FridgeProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FridgeProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FridgeProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FridgeProduct.
     * @param {FridgeProductCreateArgs} args - Arguments to create a FridgeProduct.
     * @example
     * // Create one FridgeProduct
     * const FridgeProduct = await prisma.fridgeProduct.create({
     *   data: {
     *     // ... data to create a FridgeProduct
     *   }
     * })
     * 
    **/
    create<T extends FridgeProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FridgeProductCreateArgs<ExtArgs>>
    ): Prisma__FridgeProductClient<$Result.GetResult<Prisma.$FridgeProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FridgeProducts.
     *     @param {FridgeProductCreateManyArgs} args - Arguments to create many FridgeProducts.
     *     @example
     *     // Create many FridgeProducts
     *     const fridgeProduct = await prisma.fridgeProduct.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FridgeProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FridgeProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FridgeProduct.
     * @param {FridgeProductDeleteArgs} args - Arguments to delete one FridgeProduct.
     * @example
     * // Delete one FridgeProduct
     * const FridgeProduct = await prisma.fridgeProduct.delete({
     *   where: {
     *     // ... filter to delete one FridgeProduct
     *   }
     * })
     * 
    **/
    delete<T extends FridgeProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FridgeProductDeleteArgs<ExtArgs>>
    ): Prisma__FridgeProductClient<$Result.GetResult<Prisma.$FridgeProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FridgeProduct.
     * @param {FridgeProductUpdateArgs} args - Arguments to update one FridgeProduct.
     * @example
     * // Update one FridgeProduct
     * const fridgeProduct = await prisma.fridgeProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FridgeProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FridgeProductUpdateArgs<ExtArgs>>
    ): Prisma__FridgeProductClient<$Result.GetResult<Prisma.$FridgeProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FridgeProducts.
     * @param {FridgeProductDeleteManyArgs} args - Arguments to filter FridgeProducts to delete.
     * @example
     * // Delete a few FridgeProducts
     * const { count } = await prisma.fridgeProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FridgeProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FridgeProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FridgeProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FridgeProducts
     * const fridgeProduct = await prisma.fridgeProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FridgeProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FridgeProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FridgeProduct.
     * @param {FridgeProductUpsertArgs} args - Arguments to update or create a FridgeProduct.
     * @example
     * // Update or create a FridgeProduct
     * const fridgeProduct = await prisma.fridgeProduct.upsert({
     *   create: {
     *     // ... data to create a FridgeProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FridgeProduct we want to update
     *   }
     * })
    **/
    upsert<T extends FridgeProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FridgeProductUpsertArgs<ExtArgs>>
    ): Prisma__FridgeProductClient<$Result.GetResult<Prisma.$FridgeProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FridgeProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeProductCountArgs} args - Arguments to filter FridgeProducts to count.
     * @example
     * // Count the number of FridgeProducts
     * const count = await prisma.fridgeProduct.count({
     *   where: {
     *     // ... the filter for the FridgeProducts we want to count
     *   }
     * })
    **/
    count<T extends FridgeProductCountArgs>(
      args?: Subset<T, FridgeProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FridgeProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FridgeProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FridgeProductAggregateArgs>(args: Subset<T, FridgeProductAggregateArgs>): Prisma.PrismaPromise<GetFridgeProductAggregateType<T>>

    /**
     * Group by FridgeProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FridgeProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FridgeProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FridgeProductGroupByArgs['orderBy'] }
        : { orderBy?: FridgeProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FridgeProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFridgeProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FridgeProduct model
   */
  readonly fields: FridgeProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FridgeProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FridgeProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fridge<T extends FridgeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FridgeDefaultArgs<ExtArgs>>): Prisma__FridgeClient<$Result.GetResult<Prisma.$FridgePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FridgeProduct model
   */ 
  interface FridgeProductFieldRefs {
    readonly id: FieldRef<"FridgeProduct", 'Int'>
    readonly fridgeId: FieldRef<"FridgeProduct", 'Int'>
    readonly productBarcode: FieldRef<"FridgeProduct", 'Int'>
    readonly quantity: FieldRef<"FridgeProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FridgeProduct findUnique
   */
  export type FridgeProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeProduct
     */
    select?: FridgeProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeProductInclude<ExtArgs> | null
    /**
     * Filter, which FridgeProduct to fetch.
     */
    where: FridgeProductWhereUniqueInput
  }

  /**
   * FridgeProduct findUniqueOrThrow
   */
  export type FridgeProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeProduct
     */
    select?: FridgeProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeProductInclude<ExtArgs> | null
    /**
     * Filter, which FridgeProduct to fetch.
     */
    where: FridgeProductWhereUniqueInput
  }

  /**
   * FridgeProduct findFirst
   */
  export type FridgeProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeProduct
     */
    select?: FridgeProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeProductInclude<ExtArgs> | null
    /**
     * Filter, which FridgeProduct to fetch.
     */
    where?: FridgeProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FridgeProducts to fetch.
     */
    orderBy?: FridgeProductOrderByWithRelationAndSearchRelevanceInput | FridgeProductOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FridgeProducts.
     */
    cursor?: FridgeProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FridgeProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FridgeProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FridgeProducts.
     */
    distinct?: FridgeProductScalarFieldEnum | FridgeProductScalarFieldEnum[]
  }

  /**
   * FridgeProduct findFirstOrThrow
   */
  export type FridgeProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeProduct
     */
    select?: FridgeProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeProductInclude<ExtArgs> | null
    /**
     * Filter, which FridgeProduct to fetch.
     */
    where?: FridgeProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FridgeProducts to fetch.
     */
    orderBy?: FridgeProductOrderByWithRelationAndSearchRelevanceInput | FridgeProductOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FridgeProducts.
     */
    cursor?: FridgeProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FridgeProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FridgeProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FridgeProducts.
     */
    distinct?: FridgeProductScalarFieldEnum | FridgeProductScalarFieldEnum[]
  }

  /**
   * FridgeProduct findMany
   */
  export type FridgeProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeProduct
     */
    select?: FridgeProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeProductInclude<ExtArgs> | null
    /**
     * Filter, which FridgeProducts to fetch.
     */
    where?: FridgeProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FridgeProducts to fetch.
     */
    orderBy?: FridgeProductOrderByWithRelationAndSearchRelevanceInput | FridgeProductOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FridgeProducts.
     */
    cursor?: FridgeProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FridgeProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FridgeProducts.
     */
    skip?: number
    distinct?: FridgeProductScalarFieldEnum | FridgeProductScalarFieldEnum[]
  }

  /**
   * FridgeProduct create
   */
  export type FridgeProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeProduct
     */
    select?: FridgeProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeProductInclude<ExtArgs> | null
    /**
     * The data needed to create a FridgeProduct.
     */
    data: XOR<FridgeProductCreateInput, FridgeProductUncheckedCreateInput>
  }

  /**
   * FridgeProduct createMany
   */
  export type FridgeProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FridgeProducts.
     */
    data: FridgeProductCreateManyInput | FridgeProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FridgeProduct update
   */
  export type FridgeProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeProduct
     */
    select?: FridgeProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeProductInclude<ExtArgs> | null
    /**
     * The data needed to update a FridgeProduct.
     */
    data: XOR<FridgeProductUpdateInput, FridgeProductUncheckedUpdateInput>
    /**
     * Choose, which FridgeProduct to update.
     */
    where: FridgeProductWhereUniqueInput
  }

  /**
   * FridgeProduct updateMany
   */
  export type FridgeProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FridgeProducts.
     */
    data: XOR<FridgeProductUpdateManyMutationInput, FridgeProductUncheckedUpdateManyInput>
    /**
     * Filter which FridgeProducts to update
     */
    where?: FridgeProductWhereInput
  }

  /**
   * FridgeProduct upsert
   */
  export type FridgeProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeProduct
     */
    select?: FridgeProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeProductInclude<ExtArgs> | null
    /**
     * The filter to search for the FridgeProduct to update in case it exists.
     */
    where: FridgeProductWhereUniqueInput
    /**
     * In case the FridgeProduct found by the `where` argument doesn't exist, create a new FridgeProduct with this data.
     */
    create: XOR<FridgeProductCreateInput, FridgeProductUncheckedCreateInput>
    /**
     * In case the FridgeProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FridgeProductUpdateInput, FridgeProductUncheckedUpdateInput>
  }

  /**
   * FridgeProduct delete
   */
  export type FridgeProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeProduct
     */
    select?: FridgeProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeProductInclude<ExtArgs> | null
    /**
     * Filter which FridgeProduct to delete.
     */
    where: FridgeProductWhereUniqueInput
  }

  /**
   * FridgeProduct deleteMany
   */
  export type FridgeProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FridgeProducts to delete
     */
    where?: FridgeProductWhereInput
  }

  /**
   * FridgeProduct without action
   */
  export type FridgeProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FridgeProduct
     */
    select?: FridgeProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FridgeProductInclude<ExtArgs> | null
  }


  /**
   * Model IngredientProduct
   */

  export type AggregateIngredientProduct = {
    _count: IngredientProductCountAggregateOutputType | null
    _avg: IngredientProductAvgAggregateOutputType | null
    _sum: IngredientProductSumAggregateOutputType | null
    _min: IngredientProductMinAggregateOutputType | null
    _max: IngredientProductMaxAggregateOutputType | null
  }

  export type IngredientProductAvgAggregateOutputType = {
    ingredientId: number | null
    productBarcode: number | null
    quantity: number | null
  }

  export type IngredientProductSumAggregateOutputType = {
    ingredientId: number | null
    productBarcode: number | null
    quantity: number | null
  }

  export type IngredientProductMinAggregateOutputType = {
    ingredientId: number | null
    productBarcode: number | null
    quantity: number | null
  }

  export type IngredientProductMaxAggregateOutputType = {
    ingredientId: number | null
    productBarcode: number | null
    quantity: number | null
  }

  export type IngredientProductCountAggregateOutputType = {
    ingredientId: number
    productBarcode: number
    quantity: number
    _all: number
  }


  export type IngredientProductAvgAggregateInputType = {
    ingredientId?: true
    productBarcode?: true
    quantity?: true
  }

  export type IngredientProductSumAggregateInputType = {
    ingredientId?: true
    productBarcode?: true
    quantity?: true
  }

  export type IngredientProductMinAggregateInputType = {
    ingredientId?: true
    productBarcode?: true
    quantity?: true
  }

  export type IngredientProductMaxAggregateInputType = {
    ingredientId?: true
    productBarcode?: true
    quantity?: true
  }

  export type IngredientProductCountAggregateInputType = {
    ingredientId?: true
    productBarcode?: true
    quantity?: true
    _all?: true
  }

  export type IngredientProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngredientProduct to aggregate.
     */
    where?: IngredientProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientProducts to fetch.
     */
    orderBy?: IngredientProductOrderByWithRelationAndSearchRelevanceInput | IngredientProductOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IngredientProducts
    **/
    _count?: true | IngredientProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientProductMaxAggregateInputType
  }

  export type GetIngredientProductAggregateType<T extends IngredientProductAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredientProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredientProduct[P]>
      : GetScalarType<T[P], AggregateIngredientProduct[P]>
  }




  export type IngredientProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientProductWhereInput
    orderBy?: IngredientProductOrderByWithAggregationInput | IngredientProductOrderByWithAggregationInput[]
    by: IngredientProductScalarFieldEnum[] | IngredientProductScalarFieldEnum
    having?: IngredientProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientProductCountAggregateInputType | true
    _avg?: IngredientProductAvgAggregateInputType
    _sum?: IngredientProductSumAggregateInputType
    _min?: IngredientProductMinAggregateInputType
    _max?: IngredientProductMaxAggregateInputType
  }

  export type IngredientProductGroupByOutputType = {
    ingredientId: number
    productBarcode: number
    quantity: number
    _count: IngredientProductCountAggregateOutputType | null
    _avg: IngredientProductAvgAggregateOutputType | null
    _sum: IngredientProductSumAggregateOutputType | null
    _min: IngredientProductMinAggregateOutputType | null
    _max: IngredientProductMaxAggregateOutputType | null
  }

  type GetIngredientProductGroupByPayload<T extends IngredientProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientProductGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientProductGroupByOutputType[P]>
        }
      >
    >


  export type IngredientProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ingredientId?: boolean
    productBarcode?: boolean
    quantity?: boolean
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientProduct"]>

  export type IngredientProductSelectScalar = {
    ingredientId?: boolean
    productBarcode?: boolean
    quantity?: boolean
  }


  export type IngredientProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $IngredientProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IngredientProduct"
    objects: {
      ingredient: Prisma.$IngredientPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ingredientId: number
      productBarcode: number
      quantity: number
    }, ExtArgs["result"]["ingredientProduct"]>
    composites: {}
  }


  type IngredientProductGetPayload<S extends boolean | null | undefined | IngredientProductDefaultArgs> = $Result.GetResult<Prisma.$IngredientProductPayload, S>

  type IngredientProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IngredientProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IngredientProductCountAggregateInputType | true
    }

  export interface IngredientProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IngredientProduct'], meta: { name: 'IngredientProduct' } }
    /**
     * Find zero or one IngredientProduct that matches the filter.
     * @param {IngredientProductFindUniqueArgs} args - Arguments to find a IngredientProduct
     * @example
     * // Get one IngredientProduct
     * const ingredientProduct = await prisma.ingredientProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IngredientProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientProductFindUniqueArgs<ExtArgs>>
    ): Prisma__IngredientProductClient<$Result.GetResult<Prisma.$IngredientProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one IngredientProduct that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IngredientProductFindUniqueOrThrowArgs} args - Arguments to find a IngredientProduct
     * @example
     * // Get one IngredientProduct
     * const ingredientProduct = await prisma.ingredientProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IngredientProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IngredientProductClient<$Result.GetResult<Prisma.$IngredientProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first IngredientProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientProductFindFirstArgs} args - Arguments to find a IngredientProduct
     * @example
     * // Get one IngredientProduct
     * const ingredientProduct = await prisma.ingredientProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IngredientProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientProductFindFirstArgs<ExtArgs>>
    ): Prisma__IngredientProductClient<$Result.GetResult<Prisma.$IngredientProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first IngredientProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientProductFindFirstOrThrowArgs} args - Arguments to find a IngredientProduct
     * @example
     * // Get one IngredientProduct
     * const ingredientProduct = await prisma.ingredientProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IngredientProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IngredientProductClient<$Result.GetResult<Prisma.$IngredientProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more IngredientProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IngredientProducts
     * const ingredientProducts = await prisma.ingredientProduct.findMany()
     * 
     * // Get first 10 IngredientProducts
     * const ingredientProducts = await prisma.ingredientProduct.findMany({ take: 10 })
     * 
     * // Only select the `ingredientId`
     * const ingredientProductWithIngredientIdOnly = await prisma.ingredientProduct.findMany({ select: { ingredientId: true } })
     * 
    **/
    findMany<T extends IngredientProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a IngredientProduct.
     * @param {IngredientProductCreateArgs} args - Arguments to create a IngredientProduct.
     * @example
     * // Create one IngredientProduct
     * const IngredientProduct = await prisma.ingredientProduct.create({
     *   data: {
     *     // ... data to create a IngredientProduct
     *   }
     * })
     * 
    **/
    create<T extends IngredientProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientProductCreateArgs<ExtArgs>>
    ): Prisma__IngredientProductClient<$Result.GetResult<Prisma.$IngredientProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many IngredientProducts.
     *     @param {IngredientProductCreateManyArgs} args - Arguments to create many IngredientProducts.
     *     @example
     *     // Create many IngredientProducts
     *     const ingredientProduct = await prisma.ingredientProduct.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IngredientProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IngredientProduct.
     * @param {IngredientProductDeleteArgs} args - Arguments to delete one IngredientProduct.
     * @example
     * // Delete one IngredientProduct
     * const IngredientProduct = await prisma.ingredientProduct.delete({
     *   where: {
     *     // ... filter to delete one IngredientProduct
     *   }
     * })
     * 
    **/
    delete<T extends IngredientProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientProductDeleteArgs<ExtArgs>>
    ): Prisma__IngredientProductClient<$Result.GetResult<Prisma.$IngredientProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one IngredientProduct.
     * @param {IngredientProductUpdateArgs} args - Arguments to update one IngredientProduct.
     * @example
     * // Update one IngredientProduct
     * const ingredientProduct = await prisma.ingredientProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IngredientProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientProductUpdateArgs<ExtArgs>>
    ): Prisma__IngredientProductClient<$Result.GetResult<Prisma.$IngredientProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more IngredientProducts.
     * @param {IngredientProductDeleteManyArgs} args - Arguments to filter IngredientProducts to delete.
     * @example
     * // Delete a few IngredientProducts
     * const { count } = await prisma.ingredientProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IngredientProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IngredientProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngredientProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IngredientProducts
     * const ingredientProduct = await prisma.ingredientProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IngredientProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IngredientProduct.
     * @param {IngredientProductUpsertArgs} args - Arguments to update or create a IngredientProduct.
     * @example
     * // Update or create a IngredientProduct
     * const ingredientProduct = await prisma.ingredientProduct.upsert({
     *   create: {
     *     // ... data to create a IngredientProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IngredientProduct we want to update
     *   }
     * })
    **/
    upsert<T extends IngredientProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IngredientProductUpsertArgs<ExtArgs>>
    ): Prisma__IngredientProductClient<$Result.GetResult<Prisma.$IngredientProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of IngredientProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientProductCountArgs} args - Arguments to filter IngredientProducts to count.
     * @example
     * // Count the number of IngredientProducts
     * const count = await prisma.ingredientProduct.count({
     *   where: {
     *     // ... the filter for the IngredientProducts we want to count
     *   }
     * })
    **/
    count<T extends IngredientProductCountArgs>(
      args?: Subset<T, IngredientProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IngredientProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredientProductAggregateArgs>(args: Subset<T, IngredientProductAggregateArgs>): Prisma.PrismaPromise<GetIngredientProductAggregateType<T>>

    /**
     * Group by IngredientProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngredientProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientProductGroupByArgs['orderBy'] }
        : { orderBy?: IngredientProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredientProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IngredientProduct model
   */
  readonly fields: IngredientProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IngredientProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the IngredientProduct model
   */ 
  interface IngredientProductFieldRefs {
    readonly ingredientId: FieldRef<"IngredientProduct", 'Int'>
    readonly productBarcode: FieldRef<"IngredientProduct", 'Int'>
    readonly quantity: FieldRef<"IngredientProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * IngredientProduct findUnique
   */
  export type IngredientProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientProduct
     */
    select?: IngredientProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientProductInclude<ExtArgs> | null
    /**
     * Filter, which IngredientProduct to fetch.
     */
    where: IngredientProductWhereUniqueInput
  }

  /**
   * IngredientProduct findUniqueOrThrow
   */
  export type IngredientProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientProduct
     */
    select?: IngredientProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientProductInclude<ExtArgs> | null
    /**
     * Filter, which IngredientProduct to fetch.
     */
    where: IngredientProductWhereUniqueInput
  }

  /**
   * IngredientProduct findFirst
   */
  export type IngredientProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientProduct
     */
    select?: IngredientProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientProductInclude<ExtArgs> | null
    /**
     * Filter, which IngredientProduct to fetch.
     */
    where?: IngredientProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientProducts to fetch.
     */
    orderBy?: IngredientProductOrderByWithRelationAndSearchRelevanceInput | IngredientProductOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngredientProducts.
     */
    cursor?: IngredientProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngredientProducts.
     */
    distinct?: IngredientProductScalarFieldEnum | IngredientProductScalarFieldEnum[]
  }

  /**
   * IngredientProduct findFirstOrThrow
   */
  export type IngredientProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientProduct
     */
    select?: IngredientProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientProductInclude<ExtArgs> | null
    /**
     * Filter, which IngredientProduct to fetch.
     */
    where?: IngredientProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientProducts to fetch.
     */
    orderBy?: IngredientProductOrderByWithRelationAndSearchRelevanceInput | IngredientProductOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngredientProducts.
     */
    cursor?: IngredientProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngredientProducts.
     */
    distinct?: IngredientProductScalarFieldEnum | IngredientProductScalarFieldEnum[]
  }

  /**
   * IngredientProduct findMany
   */
  export type IngredientProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientProduct
     */
    select?: IngredientProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientProductInclude<ExtArgs> | null
    /**
     * Filter, which IngredientProducts to fetch.
     */
    where?: IngredientProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientProducts to fetch.
     */
    orderBy?: IngredientProductOrderByWithRelationAndSearchRelevanceInput | IngredientProductOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IngredientProducts.
     */
    cursor?: IngredientProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientProducts.
     */
    skip?: number
    distinct?: IngredientProductScalarFieldEnum | IngredientProductScalarFieldEnum[]
  }

  /**
   * IngredientProduct create
   */
  export type IngredientProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientProduct
     */
    select?: IngredientProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientProductInclude<ExtArgs> | null
    /**
     * The data needed to create a IngredientProduct.
     */
    data: XOR<IngredientProductCreateInput, IngredientProductUncheckedCreateInput>
  }

  /**
   * IngredientProduct createMany
   */
  export type IngredientProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IngredientProducts.
     */
    data: IngredientProductCreateManyInput | IngredientProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IngredientProduct update
   */
  export type IngredientProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientProduct
     */
    select?: IngredientProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientProductInclude<ExtArgs> | null
    /**
     * The data needed to update a IngredientProduct.
     */
    data: XOR<IngredientProductUpdateInput, IngredientProductUncheckedUpdateInput>
    /**
     * Choose, which IngredientProduct to update.
     */
    where: IngredientProductWhereUniqueInput
  }

  /**
   * IngredientProduct updateMany
   */
  export type IngredientProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IngredientProducts.
     */
    data: XOR<IngredientProductUpdateManyMutationInput, IngredientProductUncheckedUpdateManyInput>
    /**
     * Filter which IngredientProducts to update
     */
    where?: IngredientProductWhereInput
  }

  /**
   * IngredientProduct upsert
   */
  export type IngredientProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientProduct
     */
    select?: IngredientProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientProductInclude<ExtArgs> | null
    /**
     * The filter to search for the IngredientProduct to update in case it exists.
     */
    where: IngredientProductWhereUniqueInput
    /**
     * In case the IngredientProduct found by the `where` argument doesn't exist, create a new IngredientProduct with this data.
     */
    create: XOR<IngredientProductCreateInput, IngredientProductUncheckedCreateInput>
    /**
     * In case the IngredientProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientProductUpdateInput, IngredientProductUncheckedUpdateInput>
  }

  /**
   * IngredientProduct delete
   */
  export type IngredientProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientProduct
     */
    select?: IngredientProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientProductInclude<ExtArgs> | null
    /**
     * Filter which IngredientProduct to delete.
     */
    where: IngredientProductWhereUniqueInput
  }

  /**
   * IngredientProduct deleteMany
   */
  export type IngredientProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngredientProducts to delete
     */
    where?: IngredientProductWhereInput
  }

  /**
   * IngredientProduct without action
   */
  export type IngredientProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientProduct
     */
    select?: IngredientProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientProductInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    profilePic: 'profilePic'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    recipeId: 'recipeId',
    isChosen: 'isChosen',
    rating: 'rating',
    notes: 'notes'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    imageUrl: 'imageUrl'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const StepScalarFieldEnum: {
    id: 'id',
    recipeId: 'recipeId',
    nStep: 'nStep',
    imageUrl: 'imageUrl',
    explaining: 'explaining'
  };

  export type StepScalarFieldEnum = (typeof StepScalarFieldEnum)[keyof typeof StepScalarFieldEnum]


  export const RecipeIngredientScalarFieldEnum: {
    id: 'id',
    recipeId: 'recipeId',
    ingredientId: 'ingredientId',
    amountText: 'amountText',
    amount: 'amount',
    productBarcode: 'productBarcode'
  };

  export type RecipeIngredientScalarFieldEnum = (typeof RecipeIngredientScalarFieldEnum)[keyof typeof RecipeIngredientScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    unit: 'unit'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const ProductScalarFieldEnum: {
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

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const FridgeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type FridgeScalarFieldEnum = (typeof FridgeScalarFieldEnum)[keyof typeof FridgeScalarFieldEnum]


  export const UserFridgeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fridgeId: 'fridgeId',
    isAdmin: 'isAdmin',
    isOwner: 'isOwner'
  };

  export type UserFridgeScalarFieldEnum = (typeof UserFridgeScalarFieldEnum)[keyof typeof UserFridgeScalarFieldEnum]


  export const FridgeProductScalarFieldEnum: {
    id: 'id',
    fridgeId: 'fridgeId',
    productBarcode: 'productBarcode',
    quantity: 'quantity'
  };

  export type FridgeProductScalarFieldEnum = (typeof FridgeProductScalarFieldEnum)[keyof typeof FridgeProductScalarFieldEnum]


  export const IngredientProductScalarFieldEnum: {
    ingredientId: 'ingredientId',
    productBarcode: 'productBarcode',
    quantity: 'quantity'
  };

  export type IngredientProductScalarFieldEnum = (typeof IngredientProductScalarFieldEnum)[keyof typeof IngredientProductScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    profilePic: 'profilePic'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const FeedbackOrderByRelevanceFieldEnum: {
    notes: 'notes'
  };

  export type FeedbackOrderByRelevanceFieldEnum = (typeof FeedbackOrderByRelevanceFieldEnum)[keyof typeof FeedbackOrderByRelevanceFieldEnum]


  export const RecipeOrderByRelevanceFieldEnum: {
    title: 'title',
    category: 'category',
    imageUrl: 'imageUrl'
  };

  export type RecipeOrderByRelevanceFieldEnum = (typeof RecipeOrderByRelevanceFieldEnum)[keyof typeof RecipeOrderByRelevanceFieldEnum]


  export const StepOrderByRelevanceFieldEnum: {
    imageUrl: 'imageUrl',
    explaining: 'explaining'
  };

  export type StepOrderByRelevanceFieldEnum = (typeof StepOrderByRelevanceFieldEnum)[keyof typeof StepOrderByRelevanceFieldEnum]


  export const RecipeIngredientOrderByRelevanceFieldEnum: {
    amountText: 'amountText'
  };

  export type RecipeIngredientOrderByRelevanceFieldEnum = (typeof RecipeIngredientOrderByRelevanceFieldEnum)[keyof typeof RecipeIngredientOrderByRelevanceFieldEnum]


  export const IngredientOrderByRelevanceFieldEnum: {
    name: 'name',
    unit: 'unit'
  };

  export type IngredientOrderByRelevanceFieldEnum = (typeof IngredientOrderByRelevanceFieldEnum)[keyof typeof IngredientOrderByRelevanceFieldEnum]


  export const ProductOrderByRelevanceFieldEnum: {
    name: 'name',
    brand: 'brand',
    bigImageUrl: 'bigImageUrl',
    miniImageUrl: 'miniImageUrl',
    allergens: 'allergens'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const FridgeOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type FridgeOrderByRelevanceFieldEnum = (typeof FridgeOrderByRelevanceFieldEnum)[keyof typeof FridgeOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    profilePic?: StringNullableFilter<"User"> | string | null
    fridges?: UserFridgeListRelationFilter
    feedbacks?: FeedbackListRelationFilter
  }

  export type UserOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    fridges?: UserFridgeOrderByRelationAggregateInput
    feedbacks?: FeedbackOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    profilePic?: StringNullableFilter<"User"> | string | null
    fridges?: UserFridgeListRelationFilter
    feedbacks?: FeedbackListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    profilePic?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: IntFilter<"Feedback"> | number
    userId?: IntFilter<"Feedback"> | number
    recipeId?: IntFilter<"Feedback"> | number
    isChosen?: BoolFilter<"Feedback"> | boolean
    rating?: IntFilter<"Feedback"> | number
    notes?: StringNullableFilter<"Feedback"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput>
  }

  export type FeedbackOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    isChosen?: SortOrder
    rating?: SortOrder
    notes?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    recipe?: RecipeOrderByWithRelationAndSearchRelevanceInput
    _relevance?: FeedbackOrderByRelevanceInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    userId?: IntFilter<"Feedback"> | number
    recipeId?: IntFilter<"Feedback"> | number
    isChosen?: BoolFilter<"Feedback"> | boolean
    rating?: IntFilter<"Feedback"> | number
    notes?: StringNullableFilter<"Feedback"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput>
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    isChosen?: SortOrder
    rating?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feedback"> | number
    userId?: IntWithAggregatesFilter<"Feedback"> | number
    recipeId?: IntWithAggregatesFilter<"Feedback"> | number
    isChosen?: BoolWithAggregatesFilter<"Feedback"> | boolean
    rating?: IntWithAggregatesFilter<"Feedback"> | number
    notes?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
  }

  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: IntFilter<"Recipe"> | number
    title?: StringFilter<"Recipe"> | string
    category?: StringFilter<"Recipe"> | string
    imageUrl?: StringNullableFilter<"Recipe"> | string | null
    recipeIngredients?: RecipeIngredientListRelationFilter
    steps?: StepListRelationFilter
    feedbacks?: FeedbackListRelationFilter
  }

  export type RecipeOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    recipeIngredients?: RecipeIngredientOrderByRelationAggregateInput
    steps?: StepOrderByRelationAggregateInput
    feedbacks?: FeedbackOrderByRelationAggregateInput
    _relevance?: RecipeOrderByRelevanceInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    title?: StringFilter<"Recipe"> | string
    category?: StringFilter<"Recipe"> | string
    imageUrl?: StringNullableFilter<"Recipe"> | string | null
    recipeIngredients?: RecipeIngredientListRelationFilter
    steps?: StepListRelationFilter
    feedbacks?: FeedbackListRelationFilter
  }, "id">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recipe"> | number
    title?: StringWithAggregatesFilter<"Recipe"> | string
    category?: StringWithAggregatesFilter<"Recipe"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
  }

  export type StepWhereInput = {
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    id?: IntFilter<"Step"> | number
    recipeId?: IntFilter<"Step"> | number
    nStep?: IntFilter<"Step"> | number
    imageUrl?: StringNullableFilter<"Step"> | string | null
    explaining?: StringFilter<"Step"> | string
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput>
  }

  export type StepOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    recipeId?: SortOrder
    nStep?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    explaining?: SortOrder
    recipe?: RecipeOrderByWithRelationAndSearchRelevanceInput
    _relevance?: StepOrderByRelevanceInput
  }

  export type StepWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    recipeId?: IntFilter<"Step"> | number
    nStep?: IntFilter<"Step"> | number
    imageUrl?: StringNullableFilter<"Step"> | string | null
    explaining?: StringFilter<"Step"> | string
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput>
  }, "id">

  export type StepOrderByWithAggregationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    nStep?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    explaining?: SortOrder
    _count?: StepCountOrderByAggregateInput
    _avg?: StepAvgOrderByAggregateInput
    _max?: StepMaxOrderByAggregateInput
    _min?: StepMinOrderByAggregateInput
    _sum?: StepSumOrderByAggregateInput
  }

  export type StepScalarWhereWithAggregatesInput = {
    AND?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    OR?: StepScalarWhereWithAggregatesInput[]
    NOT?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Step"> | number
    recipeId?: IntWithAggregatesFilter<"Step"> | number
    nStep?: IntWithAggregatesFilter<"Step"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Step"> | string | null
    explaining?: StringWithAggregatesFilter<"Step"> | string
  }

  export type RecipeIngredientWhereInput = {
    AND?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    OR?: RecipeIngredientWhereInput[]
    NOT?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    id?: IntFilter<"RecipeIngredient"> | number
    recipeId?: IntFilter<"RecipeIngredient"> | number
    ingredientId?: IntFilter<"RecipeIngredient"> | number
    amountText?: StringFilter<"RecipeIngredient"> | string
    amount?: FloatFilter<"RecipeIngredient"> | number
    productBarcode?: IntNullableFilter<"RecipeIngredient"> | number | null
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput>
    ingredient?: XOR<IngredientRelationFilter, IngredientWhereInput>
    Product?: XOR<ProductNullableRelationFilter, ProductWhereInput> | null
  }

  export type RecipeIngredientOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    amountText?: SortOrder
    amount?: SortOrder
    productBarcode?: SortOrderInput | SortOrder
    recipe?: RecipeOrderByWithRelationAndSearchRelevanceInput
    ingredient?: IngredientOrderByWithRelationAndSearchRelevanceInput
    Product?: ProductOrderByWithRelationAndSearchRelevanceInput
    _relevance?: RecipeIngredientOrderByRelevanceInput
  }

  export type RecipeIngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    OR?: RecipeIngredientWhereInput[]
    NOT?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    recipeId?: IntFilter<"RecipeIngredient"> | number
    ingredientId?: IntFilter<"RecipeIngredient"> | number
    amountText?: StringFilter<"RecipeIngredient"> | string
    amount?: FloatFilter<"RecipeIngredient"> | number
    productBarcode?: IntNullableFilter<"RecipeIngredient"> | number | null
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput>
    ingredient?: XOR<IngredientRelationFilter, IngredientWhereInput>
    Product?: XOR<ProductNullableRelationFilter, ProductWhereInput> | null
  }, "id">

  export type RecipeIngredientOrderByWithAggregationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    amountText?: SortOrder
    amount?: SortOrder
    productBarcode?: SortOrderInput | SortOrder
    _count?: RecipeIngredientCountOrderByAggregateInput
    _avg?: RecipeIngredientAvgOrderByAggregateInput
    _max?: RecipeIngredientMaxOrderByAggregateInput
    _min?: RecipeIngredientMinOrderByAggregateInput
    _sum?: RecipeIngredientSumOrderByAggregateInput
  }

  export type RecipeIngredientScalarWhereWithAggregatesInput = {
    AND?: RecipeIngredientScalarWhereWithAggregatesInput | RecipeIngredientScalarWhereWithAggregatesInput[]
    OR?: RecipeIngredientScalarWhereWithAggregatesInput[]
    NOT?: RecipeIngredientScalarWhereWithAggregatesInput | RecipeIngredientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RecipeIngredient"> | number
    recipeId?: IntWithAggregatesFilter<"RecipeIngredient"> | number
    ingredientId?: IntWithAggregatesFilter<"RecipeIngredient"> | number
    amountText?: StringWithAggregatesFilter<"RecipeIngredient"> | string
    amount?: FloatWithAggregatesFilter<"RecipeIngredient"> | number
    productBarcode?: IntNullableWithAggregatesFilter<"RecipeIngredient"> | number | null
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: IntFilter<"Ingredient"> | number
    name?: StringFilter<"Ingredient"> | string
    unit?: StringNullableFilter<"Ingredient"> | string | null
    products?: ProductListRelationFilter
    recipeIngredients?: RecipeIngredientListRelationFilter
    IngredientProduct?: IngredientProductListRelationFilter
  }

  export type IngredientOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrderInput | SortOrder
    products?: ProductOrderByRelationAggregateInput
    recipeIngredients?: RecipeIngredientOrderByRelationAggregateInput
    IngredientProduct?: IngredientProductOrderByRelationAggregateInput
    _relevance?: IngredientOrderByRelevanceInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    name?: StringFilter<"Ingredient"> | string
    unit?: StringNullableFilter<"Ingredient"> | string | null
    products?: ProductListRelationFilter
    recipeIngredients?: RecipeIngredientListRelationFilter
    IngredientProduct?: IngredientProductListRelationFilter
  }, "id">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrderInput | SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _avg?: IngredientAvgOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
    _sum?: IngredientSumOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ingredient"> | number
    name?: StringWithAggregatesFilter<"Ingredient"> | string
    unit?: StringNullableWithAggregatesFilter<"Ingredient"> | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    barcode?: IntFilter<"Product"> | number
    fridgeId?: IntNullableFilter<"Product"> | number | null
    ingredientId?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    labels?: BoolFilter<"Product"> | boolean
    ecoScore?: IntFilter<"Product"> | number
    novaScore?: IntFilter<"Product"> | number
    bigImageUrl?: StringFilter<"Product"> | string
    miniImageUrl?: StringFilter<"Product"> | string
    meal?: BoolFilter<"Product"> | boolean
    allergens?: StringFilter<"Product"> | string
    quantity?: IntFilter<"Product"> | number
    fridge?: XOR<FridgeNullableRelationFilter, FridgeWhereInput> | null
    ingredient?: XOR<IngredientRelationFilter, IngredientWhereInput>
    fridges?: FridgeProductListRelationFilter
    recipeIngredients?: RecipeIngredientListRelationFilter
    IngredientProduct?: IngredientProductListRelationFilter
  }

  export type ProductOrderByWithRelationAndSearchRelevanceInput = {
    barcode?: SortOrder
    fridgeId?: SortOrderInput | SortOrder
    ingredientId?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    labels?: SortOrder
    ecoScore?: SortOrder
    novaScore?: SortOrder
    bigImageUrl?: SortOrder
    miniImageUrl?: SortOrder
    meal?: SortOrder
    allergens?: SortOrder
    quantity?: SortOrder
    fridge?: FridgeOrderByWithRelationAndSearchRelevanceInput
    ingredient?: IngredientOrderByWithRelationAndSearchRelevanceInput
    fridges?: FridgeProductOrderByRelationAggregateInput
    recipeIngredients?: RecipeIngredientOrderByRelationAggregateInput
    IngredientProduct?: IngredientProductOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    barcode?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    fridgeId?: IntNullableFilter<"Product"> | number | null
    ingredientId?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    labels?: BoolFilter<"Product"> | boolean
    ecoScore?: IntFilter<"Product"> | number
    novaScore?: IntFilter<"Product"> | number
    bigImageUrl?: StringFilter<"Product"> | string
    miniImageUrl?: StringFilter<"Product"> | string
    meal?: BoolFilter<"Product"> | boolean
    allergens?: StringFilter<"Product"> | string
    quantity?: IntFilter<"Product"> | number
    fridge?: XOR<FridgeNullableRelationFilter, FridgeWhereInput> | null
    ingredient?: XOR<IngredientRelationFilter, IngredientWhereInput>
    fridges?: FridgeProductListRelationFilter
    recipeIngredients?: RecipeIngredientListRelationFilter
    IngredientProduct?: IngredientProductListRelationFilter
  }, "barcode">

  export type ProductOrderByWithAggregationInput = {
    barcode?: SortOrder
    fridgeId?: SortOrderInput | SortOrder
    ingredientId?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    labels?: SortOrder
    ecoScore?: SortOrder
    novaScore?: SortOrder
    bigImageUrl?: SortOrder
    miniImageUrl?: SortOrder
    meal?: SortOrder
    allergens?: SortOrder
    quantity?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    barcode?: IntWithAggregatesFilter<"Product"> | number
    fridgeId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    ingredientId?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    brand?: StringWithAggregatesFilter<"Product"> | string
    labels?: BoolWithAggregatesFilter<"Product"> | boolean
    ecoScore?: IntWithAggregatesFilter<"Product"> | number
    novaScore?: IntWithAggregatesFilter<"Product"> | number
    bigImageUrl?: StringWithAggregatesFilter<"Product"> | string
    miniImageUrl?: StringWithAggregatesFilter<"Product"> | string
    meal?: BoolWithAggregatesFilter<"Product"> | boolean
    allergens?: StringWithAggregatesFilter<"Product"> | string
    quantity?: IntWithAggregatesFilter<"Product"> | number
  }

  export type FridgeWhereInput = {
    AND?: FridgeWhereInput | FridgeWhereInput[]
    OR?: FridgeWhereInput[]
    NOT?: FridgeWhereInput | FridgeWhereInput[]
    id?: IntFilter<"Fridge"> | number
    name?: StringFilter<"Fridge"> | string
    products?: FridgeProductListRelationFilter
    users?: UserFridgeListRelationFilter
    Product?: ProductListRelationFilter
  }

  export type FridgeOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    products?: FridgeProductOrderByRelationAggregateInput
    users?: UserFridgeOrderByRelationAggregateInput
    Product?: ProductOrderByRelationAggregateInput
    _relevance?: FridgeOrderByRelevanceInput
  }

  export type FridgeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FridgeWhereInput | FridgeWhereInput[]
    OR?: FridgeWhereInput[]
    NOT?: FridgeWhereInput | FridgeWhereInput[]
    name?: StringFilter<"Fridge"> | string
    products?: FridgeProductListRelationFilter
    users?: UserFridgeListRelationFilter
    Product?: ProductListRelationFilter
  }, "id">

  export type FridgeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: FridgeCountOrderByAggregateInput
    _avg?: FridgeAvgOrderByAggregateInput
    _max?: FridgeMaxOrderByAggregateInput
    _min?: FridgeMinOrderByAggregateInput
    _sum?: FridgeSumOrderByAggregateInput
  }

  export type FridgeScalarWhereWithAggregatesInput = {
    AND?: FridgeScalarWhereWithAggregatesInput | FridgeScalarWhereWithAggregatesInput[]
    OR?: FridgeScalarWhereWithAggregatesInput[]
    NOT?: FridgeScalarWhereWithAggregatesInput | FridgeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fridge"> | number
    name?: StringWithAggregatesFilter<"Fridge"> | string
  }

  export type UserFridgeWhereInput = {
    AND?: UserFridgeWhereInput | UserFridgeWhereInput[]
    OR?: UserFridgeWhereInput[]
    NOT?: UserFridgeWhereInput | UserFridgeWhereInput[]
    id?: IntFilter<"UserFridge"> | number
    userId?: IntFilter<"UserFridge"> | number
    fridgeId?: IntFilter<"UserFridge"> | number
    isAdmin?: BoolFilter<"UserFridge"> | boolean
    isOwner?: BoolFilter<"UserFridge"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
    fridge?: XOR<FridgeRelationFilter, FridgeWhereInput>
  }

  export type UserFridgeOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    userId?: SortOrder
    fridgeId?: SortOrder
    isAdmin?: SortOrder
    isOwner?: SortOrder
    user?: UserOrderByWithRelationAndSearchRelevanceInput
    fridge?: FridgeOrderByWithRelationAndSearchRelevanceInput
  }

  export type UserFridgeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserFridgeWhereInput | UserFridgeWhereInput[]
    OR?: UserFridgeWhereInput[]
    NOT?: UserFridgeWhereInput | UserFridgeWhereInput[]
    userId?: IntFilter<"UserFridge"> | number
    fridgeId?: IntFilter<"UserFridge"> | number
    isAdmin?: BoolFilter<"UserFridge"> | boolean
    isOwner?: BoolFilter<"UserFridge"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
    fridge?: XOR<FridgeRelationFilter, FridgeWhereInput>
  }, "id">

  export type UserFridgeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fridgeId?: SortOrder
    isAdmin?: SortOrder
    isOwner?: SortOrder
    _count?: UserFridgeCountOrderByAggregateInput
    _avg?: UserFridgeAvgOrderByAggregateInput
    _max?: UserFridgeMaxOrderByAggregateInput
    _min?: UserFridgeMinOrderByAggregateInput
    _sum?: UserFridgeSumOrderByAggregateInput
  }

  export type UserFridgeScalarWhereWithAggregatesInput = {
    AND?: UserFridgeScalarWhereWithAggregatesInput | UserFridgeScalarWhereWithAggregatesInput[]
    OR?: UserFridgeScalarWhereWithAggregatesInput[]
    NOT?: UserFridgeScalarWhereWithAggregatesInput | UserFridgeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserFridge"> | number
    userId?: IntWithAggregatesFilter<"UserFridge"> | number
    fridgeId?: IntWithAggregatesFilter<"UserFridge"> | number
    isAdmin?: BoolWithAggregatesFilter<"UserFridge"> | boolean
    isOwner?: BoolWithAggregatesFilter<"UserFridge"> | boolean
  }

  export type FridgeProductWhereInput = {
    AND?: FridgeProductWhereInput | FridgeProductWhereInput[]
    OR?: FridgeProductWhereInput[]
    NOT?: FridgeProductWhereInput | FridgeProductWhereInput[]
    id?: IntFilter<"FridgeProduct"> | number
    fridgeId?: IntFilter<"FridgeProduct"> | number
    productBarcode?: IntFilter<"FridgeProduct"> | number
    quantity?: IntFilter<"FridgeProduct"> | number
    fridge?: XOR<FridgeRelationFilter, FridgeWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type FridgeProductOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    fridgeId?: SortOrder
    productBarcode?: SortOrder
    quantity?: SortOrder
    fridge?: FridgeOrderByWithRelationAndSearchRelevanceInput
    product?: ProductOrderByWithRelationAndSearchRelevanceInput
  }

  export type FridgeProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FridgeProductWhereInput | FridgeProductWhereInput[]
    OR?: FridgeProductWhereInput[]
    NOT?: FridgeProductWhereInput | FridgeProductWhereInput[]
    fridgeId?: IntFilter<"FridgeProduct"> | number
    productBarcode?: IntFilter<"FridgeProduct"> | number
    quantity?: IntFilter<"FridgeProduct"> | number
    fridge?: XOR<FridgeRelationFilter, FridgeWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type FridgeProductOrderByWithAggregationInput = {
    id?: SortOrder
    fridgeId?: SortOrder
    productBarcode?: SortOrder
    quantity?: SortOrder
    _count?: FridgeProductCountOrderByAggregateInput
    _avg?: FridgeProductAvgOrderByAggregateInput
    _max?: FridgeProductMaxOrderByAggregateInput
    _min?: FridgeProductMinOrderByAggregateInput
    _sum?: FridgeProductSumOrderByAggregateInput
  }

  export type FridgeProductScalarWhereWithAggregatesInput = {
    AND?: FridgeProductScalarWhereWithAggregatesInput | FridgeProductScalarWhereWithAggregatesInput[]
    OR?: FridgeProductScalarWhereWithAggregatesInput[]
    NOT?: FridgeProductScalarWhereWithAggregatesInput | FridgeProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FridgeProduct"> | number
    fridgeId?: IntWithAggregatesFilter<"FridgeProduct"> | number
    productBarcode?: IntWithAggregatesFilter<"FridgeProduct"> | number
    quantity?: IntWithAggregatesFilter<"FridgeProduct"> | number
  }

  export type IngredientProductWhereInput = {
    AND?: IngredientProductWhereInput | IngredientProductWhereInput[]
    OR?: IngredientProductWhereInput[]
    NOT?: IngredientProductWhereInput | IngredientProductWhereInput[]
    ingredientId?: IntFilter<"IngredientProduct"> | number
    productBarcode?: IntFilter<"IngredientProduct"> | number
    quantity?: IntFilter<"IngredientProduct"> | number
    ingredient?: XOR<IngredientRelationFilter, IngredientWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type IngredientProductOrderByWithRelationAndSearchRelevanceInput = {
    ingredientId?: SortOrder
    productBarcode?: SortOrder
    quantity?: SortOrder
    ingredient?: IngredientOrderByWithRelationAndSearchRelevanceInput
    product?: ProductOrderByWithRelationAndSearchRelevanceInput
  }

  export type IngredientProductWhereUniqueInput = Prisma.AtLeast<{
    ingredientId_productBarcode?: IngredientProductIngredientIdProductBarcodeCompoundUniqueInput
    AND?: IngredientProductWhereInput | IngredientProductWhereInput[]
    OR?: IngredientProductWhereInput[]
    NOT?: IngredientProductWhereInput | IngredientProductWhereInput[]
    ingredientId?: IntFilter<"IngredientProduct"> | number
    productBarcode?: IntFilter<"IngredientProduct"> | number
    quantity?: IntFilter<"IngredientProduct"> | number
    ingredient?: XOR<IngredientRelationFilter, IngredientWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "ingredientId_productBarcode">

  export type IngredientProductOrderByWithAggregationInput = {
    ingredientId?: SortOrder
    productBarcode?: SortOrder
    quantity?: SortOrder
    _count?: IngredientProductCountOrderByAggregateInput
    _avg?: IngredientProductAvgOrderByAggregateInput
    _max?: IngredientProductMaxOrderByAggregateInput
    _min?: IngredientProductMinOrderByAggregateInput
    _sum?: IngredientProductSumOrderByAggregateInput
  }

  export type IngredientProductScalarWhereWithAggregatesInput = {
    AND?: IngredientProductScalarWhereWithAggregatesInput | IngredientProductScalarWhereWithAggregatesInput[]
    OR?: IngredientProductScalarWhereWithAggregatesInput[]
    NOT?: IngredientProductScalarWhereWithAggregatesInput | IngredientProductScalarWhereWithAggregatesInput[]
    ingredientId?: IntWithAggregatesFilter<"IngredientProduct"> | number
    productBarcode?: IntWithAggregatesFilter<"IngredientProduct"> | number
    quantity?: IntWithAggregatesFilter<"IngredientProduct"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    profilePic?: string | null
    fridges?: UserFridgeCreateNestedManyWithoutUserInput
    feedbacks?: FeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    profilePic?: string | null
    fridges?: UserFridgeUncheckedCreateNestedManyWithoutUserInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    fridges?: UserFridgeUpdateManyWithoutUserNestedInput
    feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    fridges?: UserFridgeUncheckedUpdateManyWithoutUserNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    profilePic?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackCreateInput = {
    isChosen: boolean
    rating: number
    notes?: string | null
    user: UserCreateNestedOneWithoutFeedbacksInput
    recipe: RecipeCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: number
    userId: number
    recipeId: number
    isChosen: boolean
    rating: number
    notes?: string | null
  }

  export type FeedbackUpdateInput = {
    isChosen?: BoolFieldUpdateOperationsInput | boolean
    rating?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutFeedbacksNestedInput
    recipe?: RecipeUpdateOneRequiredWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    isChosen?: BoolFieldUpdateOperationsInput | boolean
    rating?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackCreateManyInput = {
    id?: number
    userId: number
    recipeId: number
    isChosen: boolean
    rating: number
    notes?: string | null
  }

  export type FeedbackUpdateManyMutationInput = {
    isChosen?: BoolFieldUpdateOperationsInput | boolean
    rating?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    isChosen?: BoolFieldUpdateOperationsInput | boolean
    rating?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeCreateInput = {
    title: string
    category: string
    imageUrl?: string | null
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
    steps?: StepCreateNestedManyWithoutRecipeInput
    feedbacks?: FeedbackCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: number
    title: string
    category: string
    imageUrl?: string | null
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput
    steps?: StepUncheckedCreateNestedManyWithoutRecipeInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recipeIngredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput
    steps?: StepUpdateManyWithoutRecipeNestedInput
    feedbacks?: FeedbackUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: StepUncheckedUpdateManyWithoutRecipeNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: number
    title: string
    category: string
    imageUrl?: string | null
  }

  export type RecipeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StepCreateInput = {
    nStep: number
    imageUrl?: string | null
    explaining: string
    recipe: RecipeCreateNestedOneWithoutStepsInput
  }

  export type StepUncheckedCreateInput = {
    id?: number
    recipeId: number
    nStep: number
    imageUrl?: string | null
    explaining: string
  }

  export type StepUpdateInput = {
    nStep?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    explaining?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutStepsNestedInput
  }

  export type StepUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    nStep?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    explaining?: StringFieldUpdateOperationsInput | string
  }

  export type StepCreateManyInput = {
    id?: number
    recipeId: number
    nStep: number
    imageUrl?: string | null
    explaining: string
  }

  export type StepUpdateManyMutationInput = {
    nStep?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    explaining?: StringFieldUpdateOperationsInput | string
  }

  export type StepUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    nStep?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    explaining?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeIngredientCreateInput = {
    amountText: string
    amount: number
    recipe: RecipeCreateNestedOneWithoutRecipeIngredientsInput
    ingredient: IngredientCreateNestedOneWithoutRecipeIngredientsInput
    Product?: ProductCreateNestedOneWithoutRecipeIngredientsInput
  }

  export type RecipeIngredientUncheckedCreateInput = {
    id?: number
    recipeId: number
    ingredientId: number
    amountText: string
    amount: number
    productBarcode?: number | null
  }

  export type RecipeIngredientUpdateInput = {
    amountText?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    recipe?: RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutRecipeIngredientsNestedInput
    Product?: ProductUpdateOneWithoutRecipeIngredientsNestedInput
  }

  export type RecipeIngredientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    amountText?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    productBarcode?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RecipeIngredientCreateManyInput = {
    id?: number
    recipeId: number
    ingredientId: number
    amountText: string
    amount: number
    productBarcode?: number | null
  }

  export type RecipeIngredientUpdateManyMutationInput = {
    amountText?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type RecipeIngredientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    amountText?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    productBarcode?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IngredientCreateInput = {
    name: string
    unit?: string | null
    products?: ProductCreateNestedManyWithoutIngredientInput
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutIngredientInput
    IngredientProduct?: IngredientProductCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: number
    name: string
    unit?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutIngredientInput
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput
    IngredientProduct?: IngredientProductUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateManyWithoutIngredientNestedInput
    recipeIngredients?: RecipeIngredientUpdateManyWithoutIngredientNestedInput
    IngredientProduct?: IngredientProductUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutIngredientNestedInput
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput
    IngredientProduct?: IngredientProductUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientCreateManyInput = {
    id?: number
    name: string
    unit?: string | null
  }

  export type IngredientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductCreateInput = {
    barcode: number
    name: string
    brand: string
    labels: boolean
    ecoScore: number
    novaScore: number
    bigImageUrl: string
    miniImageUrl: string
    meal: boolean
    allergens: string
    quantity: number
    fridge?: FridgeCreateNestedOneWithoutProductInput
    ingredient: IngredientCreateNestedOneWithoutProductsInput
    fridges?: FridgeProductCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutProductInput
    IngredientProduct?: IngredientProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    barcode: number
    fridgeId?: number | null
    ingredientId: number
    name: string
    brand: string
    labels: boolean
    ecoScore: number
    novaScore: number
    bigImageUrl: string
    miniImageUrl: string
    meal: boolean
    allergens: string
    quantity: number
    fridges?: FridgeProductUncheckedCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutProductInput
    IngredientProduct?: IngredientProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    barcode?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    labels?: BoolFieldUpdateOperationsInput | boolean
    ecoScore?: IntFieldUpdateOperationsInput | number
    novaScore?: IntFieldUpdateOperationsInput | number
    bigImageUrl?: StringFieldUpdateOperationsInput | string
    miniImageUrl?: StringFieldUpdateOperationsInput | string
    meal?: BoolFieldUpdateOperationsInput | boolean
    allergens?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fridge?: FridgeUpdateOneWithoutProductNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutProductsNestedInput
    fridges?: FridgeProductUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientUpdateManyWithoutProductNestedInput
    IngredientProduct?: IngredientProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    barcode?: IntFieldUpdateOperationsInput | number
    fridgeId?: NullableIntFieldUpdateOperationsInput | number | null
    ingredientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    labels?: BoolFieldUpdateOperationsInput | boolean
    ecoScore?: IntFieldUpdateOperationsInput | number
    novaScore?: IntFieldUpdateOperationsInput | number
    bigImageUrl?: StringFieldUpdateOperationsInput | string
    miniImageUrl?: StringFieldUpdateOperationsInput | string
    meal?: BoolFieldUpdateOperationsInput | boolean
    allergens?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fridges?: FridgeProductUncheckedUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutProductNestedInput
    IngredientProduct?: IngredientProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    barcode: number
    fridgeId?: number | null
    ingredientId: number
    name: string
    brand: string
    labels: boolean
    ecoScore: number
    novaScore: number
    bigImageUrl: string
    miniImageUrl: string
    meal: boolean
    allergens: string
    quantity: number
  }

  export type ProductUpdateManyMutationInput = {
    barcode?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    labels?: BoolFieldUpdateOperationsInput | boolean
    ecoScore?: IntFieldUpdateOperationsInput | number
    novaScore?: IntFieldUpdateOperationsInput | number
    bigImageUrl?: StringFieldUpdateOperationsInput | string
    miniImageUrl?: StringFieldUpdateOperationsInput | string
    meal?: BoolFieldUpdateOperationsInput | boolean
    allergens?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyInput = {
    barcode?: IntFieldUpdateOperationsInput | number
    fridgeId?: NullableIntFieldUpdateOperationsInput | number | null
    ingredientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    labels?: BoolFieldUpdateOperationsInput | boolean
    ecoScore?: IntFieldUpdateOperationsInput | number
    novaScore?: IntFieldUpdateOperationsInput | number
    bigImageUrl?: StringFieldUpdateOperationsInput | string
    miniImageUrl?: StringFieldUpdateOperationsInput | string
    meal?: BoolFieldUpdateOperationsInput | boolean
    allergens?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type FridgeCreateInput = {
    name: string
    products?: FridgeProductCreateNestedManyWithoutFridgeInput
    users?: UserFridgeCreateNestedManyWithoutFridgeInput
    Product?: ProductCreateNestedManyWithoutFridgeInput
  }

  export type FridgeUncheckedCreateInput = {
    id?: number
    name: string
    products?: FridgeProductUncheckedCreateNestedManyWithoutFridgeInput
    users?: UserFridgeUncheckedCreateNestedManyWithoutFridgeInput
    Product?: ProductUncheckedCreateNestedManyWithoutFridgeInput
  }

  export type FridgeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: FridgeProductUpdateManyWithoutFridgeNestedInput
    users?: UserFridgeUpdateManyWithoutFridgeNestedInput
    Product?: ProductUpdateManyWithoutFridgeNestedInput
  }

  export type FridgeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    products?: FridgeProductUncheckedUpdateManyWithoutFridgeNestedInput
    users?: UserFridgeUncheckedUpdateManyWithoutFridgeNestedInput
    Product?: ProductUncheckedUpdateManyWithoutFridgeNestedInput
  }

  export type FridgeCreateManyInput = {
    id?: number
    name: string
  }

  export type FridgeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FridgeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserFridgeCreateInput = {
    isAdmin: boolean
    isOwner: boolean
    user: UserCreateNestedOneWithoutFridgesInput
    fridge: FridgeCreateNestedOneWithoutUsersInput
  }

  export type UserFridgeUncheckedCreateInput = {
    id?: number
    userId: number
    fridgeId: number
    isAdmin: boolean
    isOwner: boolean
  }

  export type UserFridgeUpdateInput = {
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutFridgesNestedInput
    fridge?: FridgeUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserFridgeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fridgeId?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserFridgeCreateManyInput = {
    id?: number
    userId: number
    fridgeId: number
    isAdmin: boolean
    isOwner: boolean
  }

  export type UserFridgeUpdateManyMutationInput = {
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserFridgeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fridgeId?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FridgeProductCreateInput = {
    quantity: number
    fridge: FridgeCreateNestedOneWithoutProductsInput
    product: ProductCreateNestedOneWithoutFridgesInput
  }

  export type FridgeProductUncheckedCreateInput = {
    id?: number
    fridgeId: number
    productBarcode: number
    quantity: number
  }

  export type FridgeProductUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    fridge?: FridgeUpdateOneRequiredWithoutProductsNestedInput
    product?: ProductUpdateOneRequiredWithoutFridgesNestedInput
  }

  export type FridgeProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fridgeId?: IntFieldUpdateOperationsInput | number
    productBarcode?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type FridgeProductCreateManyInput = {
    id?: number
    fridgeId: number
    productBarcode: number
    quantity: number
  }

  export type FridgeProductUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type FridgeProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fridgeId?: IntFieldUpdateOperationsInput | number
    productBarcode?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type IngredientProductCreateInput = {
    quantity: number
    ingredient: IngredientCreateNestedOneWithoutIngredientProductInput
    product: ProductCreateNestedOneWithoutIngredientProductInput
  }

  export type IngredientProductUncheckedCreateInput = {
    ingredientId: number
    productBarcode: number
    quantity: number
  }

  export type IngredientProductUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    ingredient?: IngredientUpdateOneRequiredWithoutIngredientProductNestedInput
    product?: ProductUpdateOneRequiredWithoutIngredientProductNestedInput
  }

  export type IngredientProductUncheckedUpdateInput = {
    ingredientId?: IntFieldUpdateOperationsInput | number
    productBarcode?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type IngredientProductCreateManyInput = {
    ingredientId: number
    productBarcode: number
    quantity: number
  }

  export type IngredientProductUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type IngredientProductUncheckedUpdateManyInput = {
    ingredientId?: IntFieldUpdateOperationsInput | number
    productBarcode?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserFridgeListRelationFilter = {
    every?: UserFridgeWhereInput
    some?: UserFridgeWhereInput
    none?: UserFridgeWhereInput
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserFridgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePic?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePic?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePic?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RecipeRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type FeedbackOrderByRelevanceInput = {
    fields: FeedbackOrderByRelevanceFieldEnum | FeedbackOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    isChosen?: SortOrder
    rating?: SortOrder
    notes?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    rating?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    isChosen?: SortOrder
    rating?: SortOrder
    notes?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    isChosen?: SortOrder
    rating?: SortOrder
    notes?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    rating?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RecipeIngredientListRelationFilter = {
    every?: RecipeIngredientWhereInput
    some?: RecipeIngredientWhereInput
    none?: RecipeIngredientWhereInput
  }

  export type StepListRelationFilter = {
    every?: StepWhereInput
    some?: StepWhereInput
    none?: StepWhereInput
  }

  export type RecipeIngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeOrderByRelevanceInput = {
    fields: RecipeOrderByRelevanceFieldEnum | RecipeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StepOrderByRelevanceInput = {
    fields: StepOrderByRelevanceFieldEnum | StepOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StepCountOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    nStep?: SortOrder
    imageUrl?: SortOrder
    explaining?: SortOrder
  }

  export type StepAvgOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    nStep?: SortOrder
  }

  export type StepMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    nStep?: SortOrder
    imageUrl?: SortOrder
    explaining?: SortOrder
  }

  export type StepMinOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    nStep?: SortOrder
    imageUrl?: SortOrder
    explaining?: SortOrder
  }

  export type StepSumOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    nStep?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IngredientRelationFilter = {
    is?: IngredientWhereInput
    isNot?: IngredientWhereInput
  }

  export type ProductNullableRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type RecipeIngredientOrderByRelevanceInput = {
    fields: RecipeIngredientOrderByRelevanceFieldEnum | RecipeIngredientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RecipeIngredientCountOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    amountText?: SortOrder
    amount?: SortOrder
    productBarcode?: SortOrder
  }

  export type RecipeIngredientAvgOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    amount?: SortOrder
    productBarcode?: SortOrder
  }

  export type RecipeIngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    amountText?: SortOrder
    amount?: SortOrder
    productBarcode?: SortOrder
  }

  export type RecipeIngredientMinOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    amountText?: SortOrder
    amount?: SortOrder
    productBarcode?: SortOrder
  }

  export type RecipeIngredientSumOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    amount?: SortOrder
    productBarcode?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type IngredientProductListRelationFilter = {
    every?: IngredientProductWhereInput
    some?: IngredientProductWhereInput
    none?: IngredientProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredientProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredientOrderByRelevanceInput = {
    fields: IngredientOrderByRelevanceFieldEnum | IngredientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
  }

  export type IngredientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    unit?: SortOrder
  }

  export type IngredientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FridgeNullableRelationFilter = {
    is?: FridgeWhereInput | null
    isNot?: FridgeWhereInput | null
  }

  export type FridgeProductListRelationFilter = {
    every?: FridgeProductWhereInput
    some?: FridgeProductWhereInput
    none?: FridgeProductWhereInput
  }

  export type FridgeProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    barcode?: SortOrder
    fridgeId?: SortOrder
    ingredientId?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    labels?: SortOrder
    ecoScore?: SortOrder
    novaScore?: SortOrder
    bigImageUrl?: SortOrder
    miniImageUrl?: SortOrder
    meal?: SortOrder
    allergens?: SortOrder
    quantity?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    barcode?: SortOrder
    fridgeId?: SortOrder
    ingredientId?: SortOrder
    ecoScore?: SortOrder
    novaScore?: SortOrder
    quantity?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    barcode?: SortOrder
    fridgeId?: SortOrder
    ingredientId?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    labels?: SortOrder
    ecoScore?: SortOrder
    novaScore?: SortOrder
    bigImageUrl?: SortOrder
    miniImageUrl?: SortOrder
    meal?: SortOrder
    allergens?: SortOrder
    quantity?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    barcode?: SortOrder
    fridgeId?: SortOrder
    ingredientId?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    labels?: SortOrder
    ecoScore?: SortOrder
    novaScore?: SortOrder
    bigImageUrl?: SortOrder
    miniImageUrl?: SortOrder
    meal?: SortOrder
    allergens?: SortOrder
    quantity?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    barcode?: SortOrder
    fridgeId?: SortOrder
    ingredientId?: SortOrder
    ecoScore?: SortOrder
    novaScore?: SortOrder
    quantity?: SortOrder
  }

  export type FridgeOrderByRelevanceInput = {
    fields: FridgeOrderByRelevanceFieldEnum | FridgeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FridgeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FridgeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FridgeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FridgeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FridgeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FridgeRelationFilter = {
    is?: FridgeWhereInput
    isNot?: FridgeWhereInput
  }

  export type UserFridgeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fridgeId?: SortOrder
    isAdmin?: SortOrder
    isOwner?: SortOrder
  }

  export type UserFridgeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fridgeId?: SortOrder
  }

  export type UserFridgeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fridgeId?: SortOrder
    isAdmin?: SortOrder
    isOwner?: SortOrder
  }

  export type UserFridgeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fridgeId?: SortOrder
    isAdmin?: SortOrder
    isOwner?: SortOrder
  }

  export type UserFridgeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fridgeId?: SortOrder
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type FridgeProductCountOrderByAggregateInput = {
    id?: SortOrder
    fridgeId?: SortOrder
    productBarcode?: SortOrder
    quantity?: SortOrder
  }

  export type FridgeProductAvgOrderByAggregateInput = {
    id?: SortOrder
    fridgeId?: SortOrder
    productBarcode?: SortOrder
    quantity?: SortOrder
  }

  export type FridgeProductMaxOrderByAggregateInput = {
    id?: SortOrder
    fridgeId?: SortOrder
    productBarcode?: SortOrder
    quantity?: SortOrder
  }

  export type FridgeProductMinOrderByAggregateInput = {
    id?: SortOrder
    fridgeId?: SortOrder
    productBarcode?: SortOrder
    quantity?: SortOrder
  }

  export type FridgeProductSumOrderByAggregateInput = {
    id?: SortOrder
    fridgeId?: SortOrder
    productBarcode?: SortOrder
    quantity?: SortOrder
  }

  export type IngredientProductIngredientIdProductBarcodeCompoundUniqueInput = {
    ingredientId: number
    productBarcode: number
  }

  export type IngredientProductCountOrderByAggregateInput = {
    ingredientId?: SortOrder
    productBarcode?: SortOrder
    quantity?: SortOrder
  }

  export type IngredientProductAvgOrderByAggregateInput = {
    ingredientId?: SortOrder
    productBarcode?: SortOrder
    quantity?: SortOrder
  }

  export type IngredientProductMaxOrderByAggregateInput = {
    ingredientId?: SortOrder
    productBarcode?: SortOrder
    quantity?: SortOrder
  }

  export type IngredientProductMinOrderByAggregateInput = {
    ingredientId?: SortOrder
    productBarcode?: SortOrder
    quantity?: SortOrder
  }

  export type IngredientProductSumOrderByAggregateInput = {
    ingredientId?: SortOrder
    productBarcode?: SortOrder
    quantity?: SortOrder
  }

  export type UserFridgeCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFridgeCreateWithoutUserInput, UserFridgeUncheckedCreateWithoutUserInput> | UserFridgeCreateWithoutUserInput[] | UserFridgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFridgeCreateOrConnectWithoutUserInput | UserFridgeCreateOrConnectWithoutUserInput[]
    createMany?: UserFridgeCreateManyUserInputEnvelope
    connect?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type UserFridgeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFridgeCreateWithoutUserInput, UserFridgeUncheckedCreateWithoutUserInput> | UserFridgeCreateWithoutUserInput[] | UserFridgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFridgeCreateOrConnectWithoutUserInput | UserFridgeCreateOrConnectWithoutUserInput[]
    createMany?: UserFridgeCreateManyUserInputEnvelope
    connect?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserFridgeUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFridgeCreateWithoutUserInput, UserFridgeUncheckedCreateWithoutUserInput> | UserFridgeCreateWithoutUserInput[] | UserFridgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFridgeCreateOrConnectWithoutUserInput | UserFridgeCreateOrConnectWithoutUserInput[]
    upsert?: UserFridgeUpsertWithWhereUniqueWithoutUserInput | UserFridgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFridgeCreateManyUserInputEnvelope
    set?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
    disconnect?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
    delete?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
    connect?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
    update?: UserFridgeUpdateWithWhereUniqueWithoutUserInput | UserFridgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFridgeUpdateManyWithWhereWithoutUserInput | UserFridgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFridgeScalarWhereInput | UserFridgeScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserFridgeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFridgeCreateWithoutUserInput, UserFridgeUncheckedCreateWithoutUserInput> | UserFridgeCreateWithoutUserInput[] | UserFridgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFridgeCreateOrConnectWithoutUserInput | UserFridgeCreateOrConnectWithoutUserInput[]
    upsert?: UserFridgeUpsertWithWhereUniqueWithoutUserInput | UserFridgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFridgeCreateManyUserInputEnvelope
    set?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
    disconnect?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
    delete?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
    connect?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
    update?: UserFridgeUpdateWithWhereUniqueWithoutUserInput | UserFridgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFridgeUpdateManyWithWhereWithoutUserInput | UserFridgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFridgeScalarWhereInput | UserFridgeScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksInput
    connect?: UserWhereUniqueInput
  }

  export type RecipeCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<RecipeCreateWithoutFeedbacksInput, RecipeUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutFeedbacksInput
    connect?: RecipeWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksInput
    upsert?: UserUpsertWithoutFeedbacksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbacksInput, UserUpdateWithoutFeedbacksInput>, UserUncheckedUpdateWithoutFeedbacksInput>
  }

  export type RecipeUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<RecipeCreateWithoutFeedbacksInput, RecipeUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutFeedbacksInput
    upsert?: RecipeUpsertWithoutFeedbacksInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutFeedbacksInput, RecipeUpdateWithoutFeedbacksInput>, RecipeUncheckedUpdateWithoutFeedbacksInput>
  }

  export type RecipeIngredientCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput> | RecipeIngredientCreateWithoutRecipeInput[] | RecipeIngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipeInput | RecipeIngredientCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type StepCreateNestedManyWithoutRecipeInput = {
    create?: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput> | StepCreateWithoutRecipeInput[] | StepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: StepCreateOrConnectWithoutRecipeInput | StepCreateOrConnectWithoutRecipeInput[]
    createMany?: StepCreateManyRecipeInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutRecipeInput = {
    create?: XOR<FeedbackCreateWithoutRecipeInput, FeedbackUncheckedCreateWithoutRecipeInput> | FeedbackCreateWithoutRecipeInput[] | FeedbackUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutRecipeInput | FeedbackCreateOrConnectWithoutRecipeInput[]
    createMany?: FeedbackCreateManyRecipeInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput> | RecipeIngredientCreateWithoutRecipeInput[] | RecipeIngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipeInput | RecipeIngredientCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type StepUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput> | StepCreateWithoutRecipeInput[] | StepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: StepCreateOrConnectWithoutRecipeInput | StepCreateOrConnectWithoutRecipeInput[]
    createMany?: StepCreateManyRecipeInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<FeedbackCreateWithoutRecipeInput, FeedbackUncheckedCreateWithoutRecipeInput> | FeedbackCreateWithoutRecipeInput[] | FeedbackUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutRecipeInput | FeedbackCreateOrConnectWithoutRecipeInput[]
    createMany?: FeedbackCreateManyRecipeInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type RecipeIngredientUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput> | RecipeIngredientCreateWithoutRecipeInput[] | RecipeIngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipeInput | RecipeIngredientCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput | RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput | RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutRecipeInput | RecipeIngredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type StepUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput> | StepCreateWithoutRecipeInput[] | StepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: StepCreateOrConnectWithoutRecipeInput | StepCreateOrConnectWithoutRecipeInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutRecipeInput | StepUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: StepCreateManyRecipeInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutRecipeInput | StepUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: StepUpdateManyWithWhereWithoutRecipeInput | StepUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<FeedbackCreateWithoutRecipeInput, FeedbackUncheckedCreateWithoutRecipeInput> | FeedbackCreateWithoutRecipeInput[] | FeedbackUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutRecipeInput | FeedbackCreateOrConnectWithoutRecipeInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutRecipeInput | FeedbackUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: FeedbackCreateManyRecipeInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutRecipeInput | FeedbackUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutRecipeInput | FeedbackUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput> | RecipeIngredientCreateWithoutRecipeInput[] | RecipeIngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipeInput | RecipeIngredientCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput | RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeIngredientCreateManyRecipeInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput | RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutRecipeInput | RecipeIngredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type StepUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput> | StepCreateWithoutRecipeInput[] | StepUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: StepCreateOrConnectWithoutRecipeInput | StepCreateOrConnectWithoutRecipeInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutRecipeInput | StepUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: StepCreateManyRecipeInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutRecipeInput | StepUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: StepUpdateManyWithWhereWithoutRecipeInput | StepUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<FeedbackCreateWithoutRecipeInput, FeedbackUncheckedCreateWithoutRecipeInput> | FeedbackCreateWithoutRecipeInput[] | FeedbackUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutRecipeInput | FeedbackCreateOrConnectWithoutRecipeInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutRecipeInput | FeedbackUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: FeedbackCreateManyRecipeInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutRecipeInput | FeedbackUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutRecipeInput | FeedbackUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutStepsInput = {
    create?: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutStepsInput
    connect?: RecipeWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutStepsInput
    upsert?: RecipeUpsertWithoutStepsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutStepsInput, RecipeUpdateWithoutStepsInput>, RecipeUncheckedUpdateWithoutStepsInput>
  }

  export type RecipeCreateNestedOneWithoutRecipeIngredientsInput = {
    create?: XOR<RecipeCreateWithoutRecipeIngredientsInput, RecipeUncheckedCreateWithoutRecipeIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutRecipeIngredientsInput
    connect?: RecipeWhereUniqueInput
  }

  export type IngredientCreateNestedOneWithoutRecipeIngredientsInput = {
    create?: XOR<IngredientCreateWithoutRecipeIngredientsInput, IngredientUncheckedCreateWithoutRecipeIngredientsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeIngredientsInput
    connect?: IngredientWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutRecipeIngredientsInput = {
    create?: XOR<ProductCreateWithoutRecipeIngredientsInput, ProductUncheckedCreateWithoutRecipeIngredientsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRecipeIngredientsInput
    connect?: ProductWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput = {
    create?: XOR<RecipeCreateWithoutRecipeIngredientsInput, RecipeUncheckedCreateWithoutRecipeIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutRecipeIngredientsInput
    upsert?: RecipeUpsertWithoutRecipeIngredientsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutRecipeIngredientsInput, RecipeUpdateWithoutRecipeIngredientsInput>, RecipeUncheckedUpdateWithoutRecipeIngredientsInput>
  }

  export type IngredientUpdateOneRequiredWithoutRecipeIngredientsNestedInput = {
    create?: XOR<IngredientCreateWithoutRecipeIngredientsInput, IngredientUncheckedCreateWithoutRecipeIngredientsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeIngredientsInput
    upsert?: IngredientUpsertWithoutRecipeIngredientsInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutRecipeIngredientsInput, IngredientUpdateWithoutRecipeIngredientsInput>, IngredientUncheckedUpdateWithoutRecipeIngredientsInput>
  }

  export type ProductUpdateOneWithoutRecipeIngredientsNestedInput = {
    create?: XOR<ProductCreateWithoutRecipeIngredientsInput, ProductUncheckedCreateWithoutRecipeIngredientsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRecipeIngredientsInput
    upsert?: ProductUpsertWithoutRecipeIngredientsInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutRecipeIngredientsInput, ProductUpdateWithoutRecipeIngredientsInput>, ProductUncheckedUpdateWithoutRecipeIngredientsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductCreateNestedManyWithoutIngredientInput = {
    create?: XOR<ProductCreateWithoutIngredientInput, ProductUncheckedCreateWithoutIngredientInput> | ProductCreateWithoutIngredientInput[] | ProductUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutIngredientInput | ProductCreateOrConnectWithoutIngredientInput[]
    createMany?: ProductCreateManyIngredientInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type RecipeIngredientCreateNestedManyWithoutIngredientInput = {
    create?: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput> | RecipeIngredientCreateWithoutIngredientInput[] | RecipeIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutIngredientInput | RecipeIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type IngredientProductCreateNestedManyWithoutIngredientInput = {
    create?: XOR<IngredientProductCreateWithoutIngredientInput, IngredientProductUncheckedCreateWithoutIngredientInput> | IngredientProductCreateWithoutIngredientInput[] | IngredientProductUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientProductCreateOrConnectWithoutIngredientInput | IngredientProductCreateOrConnectWithoutIngredientInput[]
    createMany?: IngredientProductCreateManyIngredientInputEnvelope
    connect?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<ProductCreateWithoutIngredientInput, ProductUncheckedCreateWithoutIngredientInput> | ProductCreateWithoutIngredientInput[] | ProductUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutIngredientInput | ProductCreateOrConnectWithoutIngredientInput[]
    createMany?: ProductCreateManyIngredientInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput> | RecipeIngredientCreateWithoutIngredientInput[] | RecipeIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutIngredientInput | RecipeIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type IngredientProductUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<IngredientProductCreateWithoutIngredientInput, IngredientProductUncheckedCreateWithoutIngredientInput> | IngredientProductCreateWithoutIngredientInput[] | IngredientProductUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientProductCreateOrConnectWithoutIngredientInput | IngredientProductCreateOrConnectWithoutIngredientInput[]
    createMany?: IngredientProductCreateManyIngredientInputEnvelope
    connect?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<ProductCreateWithoutIngredientInput, ProductUncheckedCreateWithoutIngredientInput> | ProductCreateWithoutIngredientInput[] | ProductUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutIngredientInput | ProductCreateOrConnectWithoutIngredientInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutIngredientInput | ProductUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: ProductCreateManyIngredientInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutIngredientInput | ProductUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutIngredientInput | ProductUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type RecipeIngredientUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput> | RecipeIngredientCreateWithoutIngredientInput[] | RecipeIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutIngredientInput | RecipeIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput | RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput | RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutIngredientInput | RecipeIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type IngredientProductUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<IngredientProductCreateWithoutIngredientInput, IngredientProductUncheckedCreateWithoutIngredientInput> | IngredientProductCreateWithoutIngredientInput[] | IngredientProductUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientProductCreateOrConnectWithoutIngredientInput | IngredientProductCreateOrConnectWithoutIngredientInput[]
    upsert?: IngredientProductUpsertWithWhereUniqueWithoutIngredientInput | IngredientProductUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: IngredientProductCreateManyIngredientInputEnvelope
    set?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
    disconnect?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
    delete?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
    connect?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
    update?: IngredientProductUpdateWithWhereUniqueWithoutIngredientInput | IngredientProductUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: IngredientProductUpdateManyWithWhereWithoutIngredientInput | IngredientProductUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: IngredientProductScalarWhereInput | IngredientProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<ProductCreateWithoutIngredientInput, ProductUncheckedCreateWithoutIngredientInput> | ProductCreateWithoutIngredientInput[] | ProductUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutIngredientInput | ProductCreateOrConnectWithoutIngredientInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutIngredientInput | ProductUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: ProductCreateManyIngredientInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutIngredientInput | ProductUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutIngredientInput | ProductUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput> | RecipeIngredientCreateWithoutIngredientInput[] | RecipeIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutIngredientInput | RecipeIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput | RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: RecipeIngredientCreateManyIngredientInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput | RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutIngredientInput | RecipeIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type IngredientProductUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<IngredientProductCreateWithoutIngredientInput, IngredientProductUncheckedCreateWithoutIngredientInput> | IngredientProductCreateWithoutIngredientInput[] | IngredientProductUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientProductCreateOrConnectWithoutIngredientInput | IngredientProductCreateOrConnectWithoutIngredientInput[]
    upsert?: IngredientProductUpsertWithWhereUniqueWithoutIngredientInput | IngredientProductUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: IngredientProductCreateManyIngredientInputEnvelope
    set?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
    disconnect?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
    delete?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
    connect?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
    update?: IngredientProductUpdateWithWhereUniqueWithoutIngredientInput | IngredientProductUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: IngredientProductUpdateManyWithWhereWithoutIngredientInput | IngredientProductUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: IngredientProductScalarWhereInput | IngredientProductScalarWhereInput[]
  }

  export type FridgeCreateNestedOneWithoutProductInput = {
    create?: XOR<FridgeCreateWithoutProductInput, FridgeUncheckedCreateWithoutProductInput>
    connectOrCreate?: FridgeCreateOrConnectWithoutProductInput
    connect?: FridgeWhereUniqueInput
  }

  export type IngredientCreateNestedOneWithoutProductsInput = {
    create?: XOR<IngredientCreateWithoutProductsInput, IngredientUncheckedCreateWithoutProductsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutProductsInput
    connect?: IngredientWhereUniqueInput
  }

  export type FridgeProductCreateNestedManyWithoutProductInput = {
    create?: XOR<FridgeProductCreateWithoutProductInput, FridgeProductUncheckedCreateWithoutProductInput> | FridgeProductCreateWithoutProductInput[] | FridgeProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FridgeProductCreateOrConnectWithoutProductInput | FridgeProductCreateOrConnectWithoutProductInput[]
    createMany?: FridgeProductCreateManyProductInputEnvelope
    connect?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
  }

  export type RecipeIngredientCreateNestedManyWithoutProductInput = {
    create?: XOR<RecipeIngredientCreateWithoutProductInput, RecipeIngredientUncheckedCreateWithoutProductInput> | RecipeIngredientCreateWithoutProductInput[] | RecipeIngredientUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutProductInput | RecipeIngredientCreateOrConnectWithoutProductInput[]
    createMany?: RecipeIngredientCreateManyProductInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type IngredientProductCreateNestedManyWithoutProductInput = {
    create?: XOR<IngredientProductCreateWithoutProductInput, IngredientProductUncheckedCreateWithoutProductInput> | IngredientProductCreateWithoutProductInput[] | IngredientProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: IngredientProductCreateOrConnectWithoutProductInput | IngredientProductCreateOrConnectWithoutProductInput[]
    createMany?: IngredientProductCreateManyProductInputEnvelope
    connect?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
  }

  export type FridgeProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<FridgeProductCreateWithoutProductInput, FridgeProductUncheckedCreateWithoutProductInput> | FridgeProductCreateWithoutProductInput[] | FridgeProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FridgeProductCreateOrConnectWithoutProductInput | FridgeProductCreateOrConnectWithoutProductInput[]
    createMany?: FridgeProductCreateManyProductInputEnvelope
    connect?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
  }

  export type RecipeIngredientUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<RecipeIngredientCreateWithoutProductInput, RecipeIngredientUncheckedCreateWithoutProductInput> | RecipeIngredientCreateWithoutProductInput[] | RecipeIngredientUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutProductInput | RecipeIngredientCreateOrConnectWithoutProductInput[]
    createMany?: RecipeIngredientCreateManyProductInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type IngredientProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<IngredientProductCreateWithoutProductInput, IngredientProductUncheckedCreateWithoutProductInput> | IngredientProductCreateWithoutProductInput[] | IngredientProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: IngredientProductCreateOrConnectWithoutProductInput | IngredientProductCreateOrConnectWithoutProductInput[]
    createMany?: IngredientProductCreateManyProductInputEnvelope
    connect?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
  }

  export type FridgeUpdateOneWithoutProductNestedInput = {
    create?: XOR<FridgeCreateWithoutProductInput, FridgeUncheckedCreateWithoutProductInput>
    connectOrCreate?: FridgeCreateOrConnectWithoutProductInput
    upsert?: FridgeUpsertWithoutProductInput
    disconnect?: FridgeWhereInput | boolean
    delete?: FridgeWhereInput | boolean
    connect?: FridgeWhereUniqueInput
    update?: XOR<XOR<FridgeUpdateToOneWithWhereWithoutProductInput, FridgeUpdateWithoutProductInput>, FridgeUncheckedUpdateWithoutProductInput>
  }

  export type IngredientUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<IngredientCreateWithoutProductsInput, IngredientUncheckedCreateWithoutProductsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutProductsInput
    upsert?: IngredientUpsertWithoutProductsInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutProductsInput, IngredientUpdateWithoutProductsInput>, IngredientUncheckedUpdateWithoutProductsInput>
  }

  export type FridgeProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<FridgeProductCreateWithoutProductInput, FridgeProductUncheckedCreateWithoutProductInput> | FridgeProductCreateWithoutProductInput[] | FridgeProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FridgeProductCreateOrConnectWithoutProductInput | FridgeProductCreateOrConnectWithoutProductInput[]
    upsert?: FridgeProductUpsertWithWhereUniqueWithoutProductInput | FridgeProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FridgeProductCreateManyProductInputEnvelope
    set?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
    disconnect?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
    delete?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
    connect?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
    update?: FridgeProductUpdateWithWhereUniqueWithoutProductInput | FridgeProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FridgeProductUpdateManyWithWhereWithoutProductInput | FridgeProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FridgeProductScalarWhereInput | FridgeProductScalarWhereInput[]
  }

  export type RecipeIngredientUpdateManyWithoutProductNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutProductInput, RecipeIngredientUncheckedCreateWithoutProductInput> | RecipeIngredientCreateWithoutProductInput[] | RecipeIngredientUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutProductInput | RecipeIngredientCreateOrConnectWithoutProductInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutProductInput | RecipeIngredientUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RecipeIngredientCreateManyProductInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutProductInput | RecipeIngredientUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutProductInput | RecipeIngredientUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type IngredientProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<IngredientProductCreateWithoutProductInput, IngredientProductUncheckedCreateWithoutProductInput> | IngredientProductCreateWithoutProductInput[] | IngredientProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: IngredientProductCreateOrConnectWithoutProductInput | IngredientProductCreateOrConnectWithoutProductInput[]
    upsert?: IngredientProductUpsertWithWhereUniqueWithoutProductInput | IngredientProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: IngredientProductCreateManyProductInputEnvelope
    set?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
    disconnect?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
    delete?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
    connect?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
    update?: IngredientProductUpdateWithWhereUniqueWithoutProductInput | IngredientProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: IngredientProductUpdateManyWithWhereWithoutProductInput | IngredientProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: IngredientProductScalarWhereInput | IngredientProductScalarWhereInput[]
  }

  export type FridgeProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<FridgeProductCreateWithoutProductInput, FridgeProductUncheckedCreateWithoutProductInput> | FridgeProductCreateWithoutProductInput[] | FridgeProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FridgeProductCreateOrConnectWithoutProductInput | FridgeProductCreateOrConnectWithoutProductInput[]
    upsert?: FridgeProductUpsertWithWhereUniqueWithoutProductInput | FridgeProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FridgeProductCreateManyProductInputEnvelope
    set?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
    disconnect?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
    delete?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
    connect?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
    update?: FridgeProductUpdateWithWhereUniqueWithoutProductInput | FridgeProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FridgeProductUpdateManyWithWhereWithoutProductInput | FridgeProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FridgeProductScalarWhereInput | FridgeProductScalarWhereInput[]
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutProductInput, RecipeIngredientUncheckedCreateWithoutProductInput> | RecipeIngredientCreateWithoutProductInput[] | RecipeIngredientUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutProductInput | RecipeIngredientCreateOrConnectWithoutProductInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutProductInput | RecipeIngredientUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RecipeIngredientCreateManyProductInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutProductInput | RecipeIngredientUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutProductInput | RecipeIngredientUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type IngredientProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<IngredientProductCreateWithoutProductInput, IngredientProductUncheckedCreateWithoutProductInput> | IngredientProductCreateWithoutProductInput[] | IngredientProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: IngredientProductCreateOrConnectWithoutProductInput | IngredientProductCreateOrConnectWithoutProductInput[]
    upsert?: IngredientProductUpsertWithWhereUniqueWithoutProductInput | IngredientProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: IngredientProductCreateManyProductInputEnvelope
    set?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
    disconnect?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
    delete?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
    connect?: IngredientProductWhereUniqueInput | IngredientProductWhereUniqueInput[]
    update?: IngredientProductUpdateWithWhereUniqueWithoutProductInput | IngredientProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: IngredientProductUpdateManyWithWhereWithoutProductInput | IngredientProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: IngredientProductScalarWhereInput | IngredientProductScalarWhereInput[]
  }

  export type FridgeProductCreateNestedManyWithoutFridgeInput = {
    create?: XOR<FridgeProductCreateWithoutFridgeInput, FridgeProductUncheckedCreateWithoutFridgeInput> | FridgeProductCreateWithoutFridgeInput[] | FridgeProductUncheckedCreateWithoutFridgeInput[]
    connectOrCreate?: FridgeProductCreateOrConnectWithoutFridgeInput | FridgeProductCreateOrConnectWithoutFridgeInput[]
    createMany?: FridgeProductCreateManyFridgeInputEnvelope
    connect?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
  }

  export type UserFridgeCreateNestedManyWithoutFridgeInput = {
    create?: XOR<UserFridgeCreateWithoutFridgeInput, UserFridgeUncheckedCreateWithoutFridgeInput> | UserFridgeCreateWithoutFridgeInput[] | UserFridgeUncheckedCreateWithoutFridgeInput[]
    connectOrCreate?: UserFridgeCreateOrConnectWithoutFridgeInput | UserFridgeCreateOrConnectWithoutFridgeInput[]
    createMany?: UserFridgeCreateManyFridgeInputEnvelope
    connect?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutFridgeInput = {
    create?: XOR<ProductCreateWithoutFridgeInput, ProductUncheckedCreateWithoutFridgeInput> | ProductCreateWithoutFridgeInput[] | ProductUncheckedCreateWithoutFridgeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFridgeInput | ProductCreateOrConnectWithoutFridgeInput[]
    createMany?: ProductCreateManyFridgeInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type FridgeProductUncheckedCreateNestedManyWithoutFridgeInput = {
    create?: XOR<FridgeProductCreateWithoutFridgeInput, FridgeProductUncheckedCreateWithoutFridgeInput> | FridgeProductCreateWithoutFridgeInput[] | FridgeProductUncheckedCreateWithoutFridgeInput[]
    connectOrCreate?: FridgeProductCreateOrConnectWithoutFridgeInput | FridgeProductCreateOrConnectWithoutFridgeInput[]
    createMany?: FridgeProductCreateManyFridgeInputEnvelope
    connect?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
  }

  export type UserFridgeUncheckedCreateNestedManyWithoutFridgeInput = {
    create?: XOR<UserFridgeCreateWithoutFridgeInput, UserFridgeUncheckedCreateWithoutFridgeInput> | UserFridgeCreateWithoutFridgeInput[] | UserFridgeUncheckedCreateWithoutFridgeInput[]
    connectOrCreate?: UserFridgeCreateOrConnectWithoutFridgeInput | UserFridgeCreateOrConnectWithoutFridgeInput[]
    createMany?: UserFridgeCreateManyFridgeInputEnvelope
    connect?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutFridgeInput = {
    create?: XOR<ProductCreateWithoutFridgeInput, ProductUncheckedCreateWithoutFridgeInput> | ProductCreateWithoutFridgeInput[] | ProductUncheckedCreateWithoutFridgeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFridgeInput | ProductCreateOrConnectWithoutFridgeInput[]
    createMany?: ProductCreateManyFridgeInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type FridgeProductUpdateManyWithoutFridgeNestedInput = {
    create?: XOR<FridgeProductCreateWithoutFridgeInput, FridgeProductUncheckedCreateWithoutFridgeInput> | FridgeProductCreateWithoutFridgeInput[] | FridgeProductUncheckedCreateWithoutFridgeInput[]
    connectOrCreate?: FridgeProductCreateOrConnectWithoutFridgeInput | FridgeProductCreateOrConnectWithoutFridgeInput[]
    upsert?: FridgeProductUpsertWithWhereUniqueWithoutFridgeInput | FridgeProductUpsertWithWhereUniqueWithoutFridgeInput[]
    createMany?: FridgeProductCreateManyFridgeInputEnvelope
    set?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
    disconnect?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
    delete?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
    connect?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
    update?: FridgeProductUpdateWithWhereUniqueWithoutFridgeInput | FridgeProductUpdateWithWhereUniqueWithoutFridgeInput[]
    updateMany?: FridgeProductUpdateManyWithWhereWithoutFridgeInput | FridgeProductUpdateManyWithWhereWithoutFridgeInput[]
    deleteMany?: FridgeProductScalarWhereInput | FridgeProductScalarWhereInput[]
  }

  export type UserFridgeUpdateManyWithoutFridgeNestedInput = {
    create?: XOR<UserFridgeCreateWithoutFridgeInput, UserFridgeUncheckedCreateWithoutFridgeInput> | UserFridgeCreateWithoutFridgeInput[] | UserFridgeUncheckedCreateWithoutFridgeInput[]
    connectOrCreate?: UserFridgeCreateOrConnectWithoutFridgeInput | UserFridgeCreateOrConnectWithoutFridgeInput[]
    upsert?: UserFridgeUpsertWithWhereUniqueWithoutFridgeInput | UserFridgeUpsertWithWhereUniqueWithoutFridgeInput[]
    createMany?: UserFridgeCreateManyFridgeInputEnvelope
    set?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
    disconnect?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
    delete?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
    connect?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
    update?: UserFridgeUpdateWithWhereUniqueWithoutFridgeInput | UserFridgeUpdateWithWhereUniqueWithoutFridgeInput[]
    updateMany?: UserFridgeUpdateManyWithWhereWithoutFridgeInput | UserFridgeUpdateManyWithWhereWithoutFridgeInput[]
    deleteMany?: UserFridgeScalarWhereInput | UserFridgeScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutFridgeNestedInput = {
    create?: XOR<ProductCreateWithoutFridgeInput, ProductUncheckedCreateWithoutFridgeInput> | ProductCreateWithoutFridgeInput[] | ProductUncheckedCreateWithoutFridgeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFridgeInput | ProductCreateOrConnectWithoutFridgeInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutFridgeInput | ProductUpsertWithWhereUniqueWithoutFridgeInput[]
    createMany?: ProductCreateManyFridgeInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutFridgeInput | ProductUpdateWithWhereUniqueWithoutFridgeInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutFridgeInput | ProductUpdateManyWithWhereWithoutFridgeInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type FridgeProductUncheckedUpdateManyWithoutFridgeNestedInput = {
    create?: XOR<FridgeProductCreateWithoutFridgeInput, FridgeProductUncheckedCreateWithoutFridgeInput> | FridgeProductCreateWithoutFridgeInput[] | FridgeProductUncheckedCreateWithoutFridgeInput[]
    connectOrCreate?: FridgeProductCreateOrConnectWithoutFridgeInput | FridgeProductCreateOrConnectWithoutFridgeInput[]
    upsert?: FridgeProductUpsertWithWhereUniqueWithoutFridgeInput | FridgeProductUpsertWithWhereUniqueWithoutFridgeInput[]
    createMany?: FridgeProductCreateManyFridgeInputEnvelope
    set?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
    disconnect?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
    delete?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
    connect?: FridgeProductWhereUniqueInput | FridgeProductWhereUniqueInput[]
    update?: FridgeProductUpdateWithWhereUniqueWithoutFridgeInput | FridgeProductUpdateWithWhereUniqueWithoutFridgeInput[]
    updateMany?: FridgeProductUpdateManyWithWhereWithoutFridgeInput | FridgeProductUpdateManyWithWhereWithoutFridgeInput[]
    deleteMany?: FridgeProductScalarWhereInput | FridgeProductScalarWhereInput[]
  }

  export type UserFridgeUncheckedUpdateManyWithoutFridgeNestedInput = {
    create?: XOR<UserFridgeCreateWithoutFridgeInput, UserFridgeUncheckedCreateWithoutFridgeInput> | UserFridgeCreateWithoutFridgeInput[] | UserFridgeUncheckedCreateWithoutFridgeInput[]
    connectOrCreate?: UserFridgeCreateOrConnectWithoutFridgeInput | UserFridgeCreateOrConnectWithoutFridgeInput[]
    upsert?: UserFridgeUpsertWithWhereUniqueWithoutFridgeInput | UserFridgeUpsertWithWhereUniqueWithoutFridgeInput[]
    createMany?: UserFridgeCreateManyFridgeInputEnvelope
    set?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
    disconnect?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
    delete?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
    connect?: UserFridgeWhereUniqueInput | UserFridgeWhereUniqueInput[]
    update?: UserFridgeUpdateWithWhereUniqueWithoutFridgeInput | UserFridgeUpdateWithWhereUniqueWithoutFridgeInput[]
    updateMany?: UserFridgeUpdateManyWithWhereWithoutFridgeInput | UserFridgeUpdateManyWithWhereWithoutFridgeInput[]
    deleteMany?: UserFridgeScalarWhereInput | UserFridgeScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutFridgeNestedInput = {
    create?: XOR<ProductCreateWithoutFridgeInput, ProductUncheckedCreateWithoutFridgeInput> | ProductCreateWithoutFridgeInput[] | ProductUncheckedCreateWithoutFridgeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFridgeInput | ProductCreateOrConnectWithoutFridgeInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutFridgeInput | ProductUpsertWithWhereUniqueWithoutFridgeInput[]
    createMany?: ProductCreateManyFridgeInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutFridgeInput | ProductUpdateWithWhereUniqueWithoutFridgeInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutFridgeInput | ProductUpdateManyWithWhereWithoutFridgeInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFridgesInput = {
    create?: XOR<UserCreateWithoutFridgesInput, UserUncheckedCreateWithoutFridgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFridgesInput
    connect?: UserWhereUniqueInput
  }

  export type FridgeCreateNestedOneWithoutUsersInput = {
    create?: XOR<FridgeCreateWithoutUsersInput, FridgeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: FridgeCreateOrConnectWithoutUsersInput
    connect?: FridgeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFridgesNestedInput = {
    create?: XOR<UserCreateWithoutFridgesInput, UserUncheckedCreateWithoutFridgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFridgesInput
    upsert?: UserUpsertWithoutFridgesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFridgesInput, UserUpdateWithoutFridgesInput>, UserUncheckedUpdateWithoutFridgesInput>
  }

  export type FridgeUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<FridgeCreateWithoutUsersInput, FridgeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: FridgeCreateOrConnectWithoutUsersInput
    upsert?: FridgeUpsertWithoutUsersInput
    connect?: FridgeWhereUniqueInput
    update?: XOR<XOR<FridgeUpdateToOneWithWhereWithoutUsersInput, FridgeUpdateWithoutUsersInput>, FridgeUncheckedUpdateWithoutUsersInput>
  }

  export type FridgeCreateNestedOneWithoutProductsInput = {
    create?: XOR<FridgeCreateWithoutProductsInput, FridgeUncheckedCreateWithoutProductsInput>
    connectOrCreate?: FridgeCreateOrConnectWithoutProductsInput
    connect?: FridgeWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutFridgesInput = {
    create?: XOR<ProductCreateWithoutFridgesInput, ProductUncheckedCreateWithoutFridgesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFridgesInput
    connect?: ProductWhereUniqueInput
  }

  export type FridgeUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<FridgeCreateWithoutProductsInput, FridgeUncheckedCreateWithoutProductsInput>
    connectOrCreate?: FridgeCreateOrConnectWithoutProductsInput
    upsert?: FridgeUpsertWithoutProductsInput
    connect?: FridgeWhereUniqueInput
    update?: XOR<XOR<FridgeUpdateToOneWithWhereWithoutProductsInput, FridgeUpdateWithoutProductsInput>, FridgeUncheckedUpdateWithoutProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutFridgesNestedInput = {
    create?: XOR<ProductCreateWithoutFridgesInput, ProductUncheckedCreateWithoutFridgesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFridgesInput
    upsert?: ProductUpsertWithoutFridgesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutFridgesInput, ProductUpdateWithoutFridgesInput>, ProductUncheckedUpdateWithoutFridgesInput>
  }

  export type IngredientCreateNestedOneWithoutIngredientProductInput = {
    create?: XOR<IngredientCreateWithoutIngredientProductInput, IngredientUncheckedCreateWithoutIngredientProductInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutIngredientProductInput
    connect?: IngredientWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutIngredientProductInput = {
    create?: XOR<ProductCreateWithoutIngredientProductInput, ProductUncheckedCreateWithoutIngredientProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutIngredientProductInput
    connect?: ProductWhereUniqueInput
  }

  export type IngredientUpdateOneRequiredWithoutIngredientProductNestedInput = {
    create?: XOR<IngredientCreateWithoutIngredientProductInput, IngredientUncheckedCreateWithoutIngredientProductInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutIngredientProductInput
    upsert?: IngredientUpsertWithoutIngredientProductInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutIngredientProductInput, IngredientUpdateWithoutIngredientProductInput>, IngredientUncheckedUpdateWithoutIngredientProductInput>
  }

  export type ProductUpdateOneRequiredWithoutIngredientProductNestedInput = {
    create?: XOR<ProductCreateWithoutIngredientProductInput, ProductUncheckedCreateWithoutIngredientProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutIngredientProductInput
    upsert?: ProductUpsertWithoutIngredientProductInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutIngredientProductInput, ProductUpdateWithoutIngredientProductInput>, ProductUncheckedUpdateWithoutIngredientProductInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserFridgeCreateWithoutUserInput = {
    isAdmin: boolean
    isOwner: boolean
    fridge: FridgeCreateNestedOneWithoutUsersInput
  }

  export type UserFridgeUncheckedCreateWithoutUserInput = {
    id?: number
    fridgeId: number
    isAdmin: boolean
    isOwner: boolean
  }

  export type UserFridgeCreateOrConnectWithoutUserInput = {
    where: UserFridgeWhereUniqueInput
    create: XOR<UserFridgeCreateWithoutUserInput, UserFridgeUncheckedCreateWithoutUserInput>
  }

  export type UserFridgeCreateManyUserInputEnvelope = {
    data: UserFridgeCreateManyUserInput | UserFridgeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutUserInput = {
    isChosen: boolean
    rating: number
    notes?: string | null
    recipe: RecipeCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateWithoutUserInput = {
    id?: number
    recipeId: number
    isChosen: boolean
    rating: number
    notes?: string | null
  }

  export type FeedbackCreateOrConnectWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackCreateManyUserInputEnvelope = {
    data: FeedbackCreateManyUserInput | FeedbackCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFridgeUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFridgeWhereUniqueInput
    update: XOR<UserFridgeUpdateWithoutUserInput, UserFridgeUncheckedUpdateWithoutUserInput>
    create: XOR<UserFridgeCreateWithoutUserInput, UserFridgeUncheckedCreateWithoutUserInput>
  }

  export type UserFridgeUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFridgeWhereUniqueInput
    data: XOR<UserFridgeUpdateWithoutUserInput, UserFridgeUncheckedUpdateWithoutUserInput>
  }

  export type UserFridgeUpdateManyWithWhereWithoutUserInput = {
    where: UserFridgeScalarWhereInput
    data: XOR<UserFridgeUpdateManyMutationInput, UserFridgeUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFridgeScalarWhereInput = {
    AND?: UserFridgeScalarWhereInput | UserFridgeScalarWhereInput[]
    OR?: UserFridgeScalarWhereInput[]
    NOT?: UserFridgeScalarWhereInput | UserFridgeScalarWhereInput[]
    id?: IntFilter<"UserFridge"> | number
    userId?: IntFilter<"UserFridge"> | number
    fridgeId?: IntFilter<"UserFridge"> | number
    isAdmin?: BoolFilter<"UserFridge"> | boolean
    isOwner?: BoolFilter<"UserFridge"> | boolean
  }

  export type FeedbackUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutUserInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutUserInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: IntFilter<"Feedback"> | number
    userId?: IntFilter<"Feedback"> | number
    recipeId?: IntFilter<"Feedback"> | number
    isChosen?: BoolFilter<"Feedback"> | boolean
    rating?: IntFilter<"Feedback"> | number
    notes?: StringNullableFilter<"Feedback"> | string | null
  }

  export type UserCreateWithoutFeedbacksInput = {
    name: string
    email: string
    profilePic?: string | null
    fridges?: UserFridgeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedbacksInput = {
    id?: number
    name: string
    email: string
    profilePic?: string | null
    fridges?: UserFridgeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedbacksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
  }

  export type RecipeCreateWithoutFeedbacksInput = {
    title: string
    category: string
    imageUrl?: string | null
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
    steps?: StepCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutFeedbacksInput = {
    id?: number
    title: string
    category: string
    imageUrl?: string | null
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput
    steps?: StepUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutFeedbacksInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutFeedbacksInput, RecipeUncheckedCreateWithoutFeedbacksInput>
  }

  export type UserUpsertWithoutFeedbacksInput = {
    update: XOR<UserUpdateWithoutFeedbacksInput, UserUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbacksInput, UserUncheckedUpdateWithoutFeedbacksInput>
  }

  export type UserUpdateWithoutFeedbacksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    fridges?: UserFridgeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    fridges?: UserFridgeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RecipeUpsertWithoutFeedbacksInput = {
    update: XOR<RecipeUpdateWithoutFeedbacksInput, RecipeUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<RecipeCreateWithoutFeedbacksInput, RecipeUncheckedCreateWithoutFeedbacksInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutFeedbacksInput, RecipeUncheckedUpdateWithoutFeedbacksInput>
  }

  export type RecipeUpdateWithoutFeedbacksInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recipeIngredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput
    steps?: StepUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput
    steps?: StepUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeIngredientCreateWithoutRecipeInput = {
    amountText: string
    amount: number
    ingredient: IngredientCreateNestedOneWithoutRecipeIngredientsInput
    Product?: ProductCreateNestedOneWithoutRecipeIngredientsInput
  }

  export type RecipeIngredientUncheckedCreateWithoutRecipeInput = {
    id?: number
    ingredientId: number
    amountText: string
    amount: number
    productBarcode?: number | null
  }

  export type RecipeIngredientCreateOrConnectWithoutRecipeInput = {
    where: RecipeIngredientWhereUniqueInput
    create: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeIngredientCreateManyRecipeInputEnvelope = {
    data: RecipeIngredientCreateManyRecipeInput | RecipeIngredientCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type StepCreateWithoutRecipeInput = {
    nStep: number
    imageUrl?: string | null
    explaining: string
  }

  export type StepUncheckedCreateWithoutRecipeInput = {
    id?: number
    nStep: number
    imageUrl?: string | null
    explaining: string
  }

  export type StepCreateOrConnectWithoutRecipeInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput>
  }

  export type StepCreateManyRecipeInputEnvelope = {
    data: StepCreateManyRecipeInput | StepCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutRecipeInput = {
    isChosen: boolean
    rating: number
    notes?: string | null
    user: UserCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateWithoutRecipeInput = {
    id?: number
    userId: number
    isChosen: boolean
    rating: number
    notes?: string | null
  }

  export type FeedbackCreateOrConnectWithoutRecipeInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutRecipeInput, FeedbackUncheckedCreateWithoutRecipeInput>
  }

  export type FeedbackCreateManyRecipeInputEnvelope = {
    data: FeedbackCreateManyRecipeInput | FeedbackCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeIngredientWhereUniqueInput
    update: XOR<RecipeIngredientUpdateWithoutRecipeInput, RecipeIngredientUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeIngredientCreateWithoutRecipeInput, RecipeIngredientUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeIngredientWhereUniqueInput
    data: XOR<RecipeIngredientUpdateWithoutRecipeInput, RecipeIngredientUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeIngredientUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeIngredientScalarWhereInput
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyWithoutRecipeInput>
  }

  export type RecipeIngredientScalarWhereInput = {
    AND?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
    OR?: RecipeIngredientScalarWhereInput[]
    NOT?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
    id?: IntFilter<"RecipeIngredient"> | number
    recipeId?: IntFilter<"RecipeIngredient"> | number
    ingredientId?: IntFilter<"RecipeIngredient"> | number
    amountText?: StringFilter<"RecipeIngredient"> | string
    amount?: FloatFilter<"RecipeIngredient"> | number
    productBarcode?: IntNullableFilter<"RecipeIngredient"> | number | null
  }

  export type StepUpsertWithWhereUniqueWithoutRecipeInput = {
    where: StepWhereUniqueInput
    update: XOR<StepUpdateWithoutRecipeInput, StepUncheckedUpdateWithoutRecipeInput>
    create: XOR<StepCreateWithoutRecipeInput, StepUncheckedCreateWithoutRecipeInput>
  }

  export type StepUpdateWithWhereUniqueWithoutRecipeInput = {
    where: StepWhereUniqueInput
    data: XOR<StepUpdateWithoutRecipeInput, StepUncheckedUpdateWithoutRecipeInput>
  }

  export type StepUpdateManyWithWhereWithoutRecipeInput = {
    where: StepScalarWhereInput
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyWithoutRecipeInput>
  }

  export type StepScalarWhereInput = {
    AND?: StepScalarWhereInput | StepScalarWhereInput[]
    OR?: StepScalarWhereInput[]
    NOT?: StepScalarWhereInput | StepScalarWhereInput[]
    id?: IntFilter<"Step"> | number
    recipeId?: IntFilter<"Step"> | number
    nStep?: IntFilter<"Step"> | number
    imageUrl?: StringNullableFilter<"Step"> | string | null
    explaining?: StringFilter<"Step"> | string
  }

  export type FeedbackUpsertWithWhereUniqueWithoutRecipeInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutRecipeInput, FeedbackUncheckedUpdateWithoutRecipeInput>
    create: XOR<FeedbackCreateWithoutRecipeInput, FeedbackUncheckedCreateWithoutRecipeInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutRecipeInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutRecipeInput, FeedbackUncheckedUpdateWithoutRecipeInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutRecipeInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutRecipeInput>
  }

  export type RecipeCreateWithoutStepsInput = {
    title: string
    category: string
    imageUrl?: string | null
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
    feedbacks?: FeedbackCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutStepsInput = {
    id?: number
    title: string
    category: string
    imageUrl?: string | null
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutStepsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
  }

  export type RecipeUpsertWithoutStepsInput = {
    update: XOR<RecipeUpdateWithoutStepsInput, RecipeUncheckedUpdateWithoutStepsInput>
    create: XOR<RecipeCreateWithoutStepsInput, RecipeUncheckedCreateWithoutStepsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutStepsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutStepsInput, RecipeUncheckedUpdateWithoutStepsInput>
  }

  export type RecipeUpdateWithoutStepsInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recipeIngredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput
    feedbacks?: FeedbackUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutStepsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateWithoutRecipeIngredientsInput = {
    title: string
    category: string
    imageUrl?: string | null
    steps?: StepCreateNestedManyWithoutRecipeInput
    feedbacks?: FeedbackCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutRecipeIngredientsInput = {
    id?: number
    title: string
    category: string
    imageUrl?: string | null
    steps?: StepUncheckedCreateNestedManyWithoutRecipeInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutRecipeIngredientsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutRecipeIngredientsInput, RecipeUncheckedCreateWithoutRecipeIngredientsInput>
  }

  export type IngredientCreateWithoutRecipeIngredientsInput = {
    name: string
    unit?: string | null
    products?: ProductCreateNestedManyWithoutIngredientInput
    IngredientProduct?: IngredientProductCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutRecipeIngredientsInput = {
    id?: number
    name: string
    unit?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutIngredientInput
    IngredientProduct?: IngredientProductUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutRecipeIngredientsInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutRecipeIngredientsInput, IngredientUncheckedCreateWithoutRecipeIngredientsInput>
  }

  export type ProductCreateWithoutRecipeIngredientsInput = {
    barcode: number
    name: string
    brand: string
    labels: boolean
    ecoScore: number
    novaScore: number
    bigImageUrl: string
    miniImageUrl: string
    meal: boolean
    allergens: string
    quantity: number
    fridge?: FridgeCreateNestedOneWithoutProductInput
    ingredient: IngredientCreateNestedOneWithoutProductsInput
    fridges?: FridgeProductCreateNestedManyWithoutProductInput
    IngredientProduct?: IngredientProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutRecipeIngredientsInput = {
    barcode: number
    fridgeId?: number | null
    ingredientId: number
    name: string
    brand: string
    labels: boolean
    ecoScore: number
    novaScore: number
    bigImageUrl: string
    miniImageUrl: string
    meal: boolean
    allergens: string
    quantity: number
    fridges?: FridgeProductUncheckedCreateNestedManyWithoutProductInput
    IngredientProduct?: IngredientProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutRecipeIngredientsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRecipeIngredientsInput, ProductUncheckedCreateWithoutRecipeIngredientsInput>
  }

  export type RecipeUpsertWithoutRecipeIngredientsInput = {
    update: XOR<RecipeUpdateWithoutRecipeIngredientsInput, RecipeUncheckedUpdateWithoutRecipeIngredientsInput>
    create: XOR<RecipeCreateWithoutRecipeIngredientsInput, RecipeUncheckedCreateWithoutRecipeIngredientsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutRecipeIngredientsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutRecipeIngredientsInput, RecipeUncheckedUpdateWithoutRecipeIngredientsInput>
  }

  export type RecipeUpdateWithoutRecipeIngredientsInput = {
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: StepUpdateManyWithoutRecipeNestedInput
    feedbacks?: FeedbackUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutRecipeIngredientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: StepUncheckedUpdateManyWithoutRecipeNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type IngredientUpsertWithoutRecipeIngredientsInput = {
    update: XOR<IngredientUpdateWithoutRecipeIngredientsInput, IngredientUncheckedUpdateWithoutRecipeIngredientsInput>
    create: XOR<IngredientCreateWithoutRecipeIngredientsInput, IngredientUncheckedCreateWithoutRecipeIngredientsInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutRecipeIngredientsInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutRecipeIngredientsInput, IngredientUncheckedUpdateWithoutRecipeIngredientsInput>
  }

  export type IngredientUpdateWithoutRecipeIngredientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateManyWithoutIngredientNestedInput
    IngredientProduct?: IngredientProductUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutRecipeIngredientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutIngredientNestedInput
    IngredientProduct?: IngredientProductUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type ProductUpsertWithoutRecipeIngredientsInput = {
    update: XOR<ProductUpdateWithoutRecipeIngredientsInput, ProductUncheckedUpdateWithoutRecipeIngredientsInput>
    create: XOR<ProductCreateWithoutRecipeIngredientsInput, ProductUncheckedCreateWithoutRecipeIngredientsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutRecipeIngredientsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutRecipeIngredientsInput, ProductUncheckedUpdateWithoutRecipeIngredientsInput>
  }

  export type ProductUpdateWithoutRecipeIngredientsInput = {
    barcode?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    labels?: BoolFieldUpdateOperationsInput | boolean
    ecoScore?: IntFieldUpdateOperationsInput | number
    novaScore?: IntFieldUpdateOperationsInput | number
    bigImageUrl?: StringFieldUpdateOperationsInput | string
    miniImageUrl?: StringFieldUpdateOperationsInput | string
    meal?: BoolFieldUpdateOperationsInput | boolean
    allergens?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fridge?: FridgeUpdateOneWithoutProductNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutProductsNestedInput
    fridges?: FridgeProductUpdateManyWithoutProductNestedInput
    IngredientProduct?: IngredientProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutRecipeIngredientsInput = {
    barcode?: IntFieldUpdateOperationsInput | number
    fridgeId?: NullableIntFieldUpdateOperationsInput | number | null
    ingredientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    labels?: BoolFieldUpdateOperationsInput | boolean
    ecoScore?: IntFieldUpdateOperationsInput | number
    novaScore?: IntFieldUpdateOperationsInput | number
    bigImageUrl?: StringFieldUpdateOperationsInput | string
    miniImageUrl?: StringFieldUpdateOperationsInput | string
    meal?: BoolFieldUpdateOperationsInput | boolean
    allergens?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fridges?: FridgeProductUncheckedUpdateManyWithoutProductNestedInput
    IngredientProduct?: IngredientProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutIngredientInput = {
    barcode: number
    name: string
    brand: string
    labels: boolean
    ecoScore: number
    novaScore: number
    bigImageUrl: string
    miniImageUrl: string
    meal: boolean
    allergens: string
    quantity: number
    fridge?: FridgeCreateNestedOneWithoutProductInput
    fridges?: FridgeProductCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutProductInput
    IngredientProduct?: IngredientProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutIngredientInput = {
    barcode: number
    fridgeId?: number | null
    name: string
    brand: string
    labels: boolean
    ecoScore: number
    novaScore: number
    bigImageUrl: string
    miniImageUrl: string
    meal: boolean
    allergens: string
    quantity: number
    fridges?: FridgeProductUncheckedCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutProductInput
    IngredientProduct?: IngredientProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutIngredientInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutIngredientInput, ProductUncheckedCreateWithoutIngredientInput>
  }

  export type ProductCreateManyIngredientInputEnvelope = {
    data: ProductCreateManyIngredientInput | ProductCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type RecipeIngredientCreateWithoutIngredientInput = {
    amountText: string
    amount: number
    recipe: RecipeCreateNestedOneWithoutRecipeIngredientsInput
    Product?: ProductCreateNestedOneWithoutRecipeIngredientsInput
  }

  export type RecipeIngredientUncheckedCreateWithoutIngredientInput = {
    id?: number
    recipeId: number
    amountText: string
    amount: number
    productBarcode?: number | null
  }

  export type RecipeIngredientCreateOrConnectWithoutIngredientInput = {
    where: RecipeIngredientWhereUniqueInput
    create: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type RecipeIngredientCreateManyIngredientInputEnvelope = {
    data: RecipeIngredientCreateManyIngredientInput | RecipeIngredientCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type IngredientProductCreateWithoutIngredientInput = {
    quantity: number
    product: ProductCreateNestedOneWithoutIngredientProductInput
  }

  export type IngredientProductUncheckedCreateWithoutIngredientInput = {
    productBarcode: number
    quantity: number
  }

  export type IngredientProductCreateOrConnectWithoutIngredientInput = {
    where: IngredientProductWhereUniqueInput
    create: XOR<IngredientProductCreateWithoutIngredientInput, IngredientProductUncheckedCreateWithoutIngredientInput>
  }

  export type IngredientProductCreateManyIngredientInputEnvelope = {
    data: IngredientProductCreateManyIngredientInput | IngredientProductCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutIngredientInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutIngredientInput, ProductUncheckedUpdateWithoutIngredientInput>
    create: XOR<ProductCreateWithoutIngredientInput, ProductUncheckedCreateWithoutIngredientInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutIngredientInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutIngredientInput, ProductUncheckedUpdateWithoutIngredientInput>
  }

  export type ProductUpdateManyWithWhereWithoutIngredientInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutIngredientInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    barcode?: IntFilter<"Product"> | number
    fridgeId?: IntNullableFilter<"Product"> | number | null
    ingredientId?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    labels?: BoolFilter<"Product"> | boolean
    ecoScore?: IntFilter<"Product"> | number
    novaScore?: IntFilter<"Product"> | number
    bigImageUrl?: StringFilter<"Product"> | string
    miniImageUrl?: StringFilter<"Product"> | string
    meal?: BoolFilter<"Product"> | boolean
    allergens?: StringFilter<"Product"> | string
    quantity?: IntFilter<"Product"> | number
  }

  export type RecipeIngredientUpsertWithWhereUniqueWithoutIngredientInput = {
    where: RecipeIngredientWhereUniqueInput
    update: XOR<RecipeIngredientUpdateWithoutIngredientInput, RecipeIngredientUncheckedUpdateWithoutIngredientInput>
    create: XOR<RecipeIngredientCreateWithoutIngredientInput, RecipeIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type RecipeIngredientUpdateWithWhereUniqueWithoutIngredientInput = {
    where: RecipeIngredientWhereUniqueInput
    data: XOR<RecipeIngredientUpdateWithoutIngredientInput, RecipeIngredientUncheckedUpdateWithoutIngredientInput>
  }

  export type RecipeIngredientUpdateManyWithWhereWithoutIngredientInput = {
    where: RecipeIngredientScalarWhereInput
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyWithoutIngredientInput>
  }

  export type IngredientProductUpsertWithWhereUniqueWithoutIngredientInput = {
    where: IngredientProductWhereUniqueInput
    update: XOR<IngredientProductUpdateWithoutIngredientInput, IngredientProductUncheckedUpdateWithoutIngredientInput>
    create: XOR<IngredientProductCreateWithoutIngredientInput, IngredientProductUncheckedCreateWithoutIngredientInput>
  }

  export type IngredientProductUpdateWithWhereUniqueWithoutIngredientInput = {
    where: IngredientProductWhereUniqueInput
    data: XOR<IngredientProductUpdateWithoutIngredientInput, IngredientProductUncheckedUpdateWithoutIngredientInput>
  }

  export type IngredientProductUpdateManyWithWhereWithoutIngredientInput = {
    where: IngredientProductScalarWhereInput
    data: XOR<IngredientProductUpdateManyMutationInput, IngredientProductUncheckedUpdateManyWithoutIngredientInput>
  }

  export type IngredientProductScalarWhereInput = {
    AND?: IngredientProductScalarWhereInput | IngredientProductScalarWhereInput[]
    OR?: IngredientProductScalarWhereInput[]
    NOT?: IngredientProductScalarWhereInput | IngredientProductScalarWhereInput[]
    ingredientId?: IntFilter<"IngredientProduct"> | number
    productBarcode?: IntFilter<"IngredientProduct"> | number
    quantity?: IntFilter<"IngredientProduct"> | number
  }

  export type FridgeCreateWithoutProductInput = {
    name: string
    products?: FridgeProductCreateNestedManyWithoutFridgeInput
    users?: UserFridgeCreateNestedManyWithoutFridgeInput
  }

  export type FridgeUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    products?: FridgeProductUncheckedCreateNestedManyWithoutFridgeInput
    users?: UserFridgeUncheckedCreateNestedManyWithoutFridgeInput
  }

  export type FridgeCreateOrConnectWithoutProductInput = {
    where: FridgeWhereUniqueInput
    create: XOR<FridgeCreateWithoutProductInput, FridgeUncheckedCreateWithoutProductInput>
  }

  export type IngredientCreateWithoutProductsInput = {
    name: string
    unit?: string | null
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutIngredientInput
    IngredientProduct?: IngredientProductCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    unit?: string | null
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput
    IngredientProduct?: IngredientProductUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutProductsInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutProductsInput, IngredientUncheckedCreateWithoutProductsInput>
  }

  export type FridgeProductCreateWithoutProductInput = {
    quantity: number
    fridge: FridgeCreateNestedOneWithoutProductsInput
  }

  export type FridgeProductUncheckedCreateWithoutProductInput = {
    id?: number
    fridgeId: number
    quantity: number
  }

  export type FridgeProductCreateOrConnectWithoutProductInput = {
    where: FridgeProductWhereUniqueInput
    create: XOR<FridgeProductCreateWithoutProductInput, FridgeProductUncheckedCreateWithoutProductInput>
  }

  export type FridgeProductCreateManyProductInputEnvelope = {
    data: FridgeProductCreateManyProductInput | FridgeProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type RecipeIngredientCreateWithoutProductInput = {
    amountText: string
    amount: number
    recipe: RecipeCreateNestedOneWithoutRecipeIngredientsInput
    ingredient: IngredientCreateNestedOneWithoutRecipeIngredientsInput
  }

  export type RecipeIngredientUncheckedCreateWithoutProductInput = {
    id?: number
    recipeId: number
    ingredientId: number
    amountText: string
    amount: number
  }

  export type RecipeIngredientCreateOrConnectWithoutProductInput = {
    where: RecipeIngredientWhereUniqueInput
    create: XOR<RecipeIngredientCreateWithoutProductInput, RecipeIngredientUncheckedCreateWithoutProductInput>
  }

  export type RecipeIngredientCreateManyProductInputEnvelope = {
    data: RecipeIngredientCreateManyProductInput | RecipeIngredientCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type IngredientProductCreateWithoutProductInput = {
    quantity: number
    ingredient: IngredientCreateNestedOneWithoutIngredientProductInput
  }

  export type IngredientProductUncheckedCreateWithoutProductInput = {
    ingredientId: number
    quantity: number
  }

  export type IngredientProductCreateOrConnectWithoutProductInput = {
    where: IngredientProductWhereUniqueInput
    create: XOR<IngredientProductCreateWithoutProductInput, IngredientProductUncheckedCreateWithoutProductInput>
  }

  export type IngredientProductCreateManyProductInputEnvelope = {
    data: IngredientProductCreateManyProductInput | IngredientProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type FridgeUpsertWithoutProductInput = {
    update: XOR<FridgeUpdateWithoutProductInput, FridgeUncheckedUpdateWithoutProductInput>
    create: XOR<FridgeCreateWithoutProductInput, FridgeUncheckedCreateWithoutProductInput>
    where?: FridgeWhereInput
  }

  export type FridgeUpdateToOneWithWhereWithoutProductInput = {
    where?: FridgeWhereInput
    data: XOR<FridgeUpdateWithoutProductInput, FridgeUncheckedUpdateWithoutProductInput>
  }

  export type FridgeUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: FridgeProductUpdateManyWithoutFridgeNestedInput
    users?: UserFridgeUpdateManyWithoutFridgeNestedInput
  }

  export type FridgeUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    products?: FridgeProductUncheckedUpdateManyWithoutFridgeNestedInput
    users?: UserFridgeUncheckedUpdateManyWithoutFridgeNestedInput
  }

  export type IngredientUpsertWithoutProductsInput = {
    update: XOR<IngredientUpdateWithoutProductsInput, IngredientUncheckedUpdateWithoutProductsInput>
    create: XOR<IngredientCreateWithoutProductsInput, IngredientUncheckedCreateWithoutProductsInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutProductsInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutProductsInput, IngredientUncheckedUpdateWithoutProductsInput>
  }

  export type IngredientUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recipeIngredients?: RecipeIngredientUpdateManyWithoutIngredientNestedInput
    IngredientProduct?: IngredientProductUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput
    IngredientProduct?: IngredientProductUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type FridgeProductUpsertWithWhereUniqueWithoutProductInput = {
    where: FridgeProductWhereUniqueInput
    update: XOR<FridgeProductUpdateWithoutProductInput, FridgeProductUncheckedUpdateWithoutProductInput>
    create: XOR<FridgeProductCreateWithoutProductInput, FridgeProductUncheckedCreateWithoutProductInput>
  }

  export type FridgeProductUpdateWithWhereUniqueWithoutProductInput = {
    where: FridgeProductWhereUniqueInput
    data: XOR<FridgeProductUpdateWithoutProductInput, FridgeProductUncheckedUpdateWithoutProductInput>
  }

  export type FridgeProductUpdateManyWithWhereWithoutProductInput = {
    where: FridgeProductScalarWhereInput
    data: XOR<FridgeProductUpdateManyMutationInput, FridgeProductUncheckedUpdateManyWithoutProductInput>
  }

  export type FridgeProductScalarWhereInput = {
    AND?: FridgeProductScalarWhereInput | FridgeProductScalarWhereInput[]
    OR?: FridgeProductScalarWhereInput[]
    NOT?: FridgeProductScalarWhereInput | FridgeProductScalarWhereInput[]
    id?: IntFilter<"FridgeProduct"> | number
    fridgeId?: IntFilter<"FridgeProduct"> | number
    productBarcode?: IntFilter<"FridgeProduct"> | number
    quantity?: IntFilter<"FridgeProduct"> | number
  }

  export type RecipeIngredientUpsertWithWhereUniqueWithoutProductInput = {
    where: RecipeIngredientWhereUniqueInput
    update: XOR<RecipeIngredientUpdateWithoutProductInput, RecipeIngredientUncheckedUpdateWithoutProductInput>
    create: XOR<RecipeIngredientCreateWithoutProductInput, RecipeIngredientUncheckedCreateWithoutProductInput>
  }

  export type RecipeIngredientUpdateWithWhereUniqueWithoutProductInput = {
    where: RecipeIngredientWhereUniqueInput
    data: XOR<RecipeIngredientUpdateWithoutProductInput, RecipeIngredientUncheckedUpdateWithoutProductInput>
  }

  export type RecipeIngredientUpdateManyWithWhereWithoutProductInput = {
    where: RecipeIngredientScalarWhereInput
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyWithoutProductInput>
  }

  export type IngredientProductUpsertWithWhereUniqueWithoutProductInput = {
    where: IngredientProductWhereUniqueInput
    update: XOR<IngredientProductUpdateWithoutProductInput, IngredientProductUncheckedUpdateWithoutProductInput>
    create: XOR<IngredientProductCreateWithoutProductInput, IngredientProductUncheckedCreateWithoutProductInput>
  }

  export type IngredientProductUpdateWithWhereUniqueWithoutProductInput = {
    where: IngredientProductWhereUniqueInput
    data: XOR<IngredientProductUpdateWithoutProductInput, IngredientProductUncheckedUpdateWithoutProductInput>
  }

  export type IngredientProductUpdateManyWithWhereWithoutProductInput = {
    where: IngredientProductScalarWhereInput
    data: XOR<IngredientProductUpdateManyMutationInput, IngredientProductUncheckedUpdateManyWithoutProductInput>
  }

  export type FridgeProductCreateWithoutFridgeInput = {
    quantity: number
    product: ProductCreateNestedOneWithoutFridgesInput
  }

  export type FridgeProductUncheckedCreateWithoutFridgeInput = {
    id?: number
    productBarcode: number
    quantity: number
  }

  export type FridgeProductCreateOrConnectWithoutFridgeInput = {
    where: FridgeProductWhereUniqueInput
    create: XOR<FridgeProductCreateWithoutFridgeInput, FridgeProductUncheckedCreateWithoutFridgeInput>
  }

  export type FridgeProductCreateManyFridgeInputEnvelope = {
    data: FridgeProductCreateManyFridgeInput | FridgeProductCreateManyFridgeInput[]
    skipDuplicates?: boolean
  }

  export type UserFridgeCreateWithoutFridgeInput = {
    isAdmin: boolean
    isOwner: boolean
    user: UserCreateNestedOneWithoutFridgesInput
  }

  export type UserFridgeUncheckedCreateWithoutFridgeInput = {
    id?: number
    userId: number
    isAdmin: boolean
    isOwner: boolean
  }

  export type UserFridgeCreateOrConnectWithoutFridgeInput = {
    where: UserFridgeWhereUniqueInput
    create: XOR<UserFridgeCreateWithoutFridgeInput, UserFridgeUncheckedCreateWithoutFridgeInput>
  }

  export type UserFridgeCreateManyFridgeInputEnvelope = {
    data: UserFridgeCreateManyFridgeInput | UserFridgeCreateManyFridgeInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutFridgeInput = {
    barcode: number
    name: string
    brand: string
    labels: boolean
    ecoScore: number
    novaScore: number
    bigImageUrl: string
    miniImageUrl: string
    meal: boolean
    allergens: string
    quantity: number
    ingredient: IngredientCreateNestedOneWithoutProductsInput
    fridges?: FridgeProductCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutProductInput
    IngredientProduct?: IngredientProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutFridgeInput = {
    barcode: number
    ingredientId: number
    name: string
    brand: string
    labels: boolean
    ecoScore: number
    novaScore: number
    bigImageUrl: string
    miniImageUrl: string
    meal: boolean
    allergens: string
    quantity: number
    fridges?: FridgeProductUncheckedCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutProductInput
    IngredientProduct?: IngredientProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutFridgeInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutFridgeInput, ProductUncheckedCreateWithoutFridgeInput>
  }

  export type ProductCreateManyFridgeInputEnvelope = {
    data: ProductCreateManyFridgeInput | ProductCreateManyFridgeInput[]
    skipDuplicates?: boolean
  }

  export type FridgeProductUpsertWithWhereUniqueWithoutFridgeInput = {
    where: FridgeProductWhereUniqueInput
    update: XOR<FridgeProductUpdateWithoutFridgeInput, FridgeProductUncheckedUpdateWithoutFridgeInput>
    create: XOR<FridgeProductCreateWithoutFridgeInput, FridgeProductUncheckedCreateWithoutFridgeInput>
  }

  export type FridgeProductUpdateWithWhereUniqueWithoutFridgeInput = {
    where: FridgeProductWhereUniqueInput
    data: XOR<FridgeProductUpdateWithoutFridgeInput, FridgeProductUncheckedUpdateWithoutFridgeInput>
  }

  export type FridgeProductUpdateManyWithWhereWithoutFridgeInput = {
    where: FridgeProductScalarWhereInput
    data: XOR<FridgeProductUpdateManyMutationInput, FridgeProductUncheckedUpdateManyWithoutFridgeInput>
  }

  export type UserFridgeUpsertWithWhereUniqueWithoutFridgeInput = {
    where: UserFridgeWhereUniqueInput
    update: XOR<UserFridgeUpdateWithoutFridgeInput, UserFridgeUncheckedUpdateWithoutFridgeInput>
    create: XOR<UserFridgeCreateWithoutFridgeInput, UserFridgeUncheckedCreateWithoutFridgeInput>
  }

  export type UserFridgeUpdateWithWhereUniqueWithoutFridgeInput = {
    where: UserFridgeWhereUniqueInput
    data: XOR<UserFridgeUpdateWithoutFridgeInput, UserFridgeUncheckedUpdateWithoutFridgeInput>
  }

  export type UserFridgeUpdateManyWithWhereWithoutFridgeInput = {
    where: UserFridgeScalarWhereInput
    data: XOR<UserFridgeUpdateManyMutationInput, UserFridgeUncheckedUpdateManyWithoutFridgeInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutFridgeInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutFridgeInput, ProductUncheckedUpdateWithoutFridgeInput>
    create: XOR<ProductCreateWithoutFridgeInput, ProductUncheckedCreateWithoutFridgeInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutFridgeInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutFridgeInput, ProductUncheckedUpdateWithoutFridgeInput>
  }

  export type ProductUpdateManyWithWhereWithoutFridgeInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutFridgeInput>
  }

  export type UserCreateWithoutFridgesInput = {
    name: string
    email: string
    profilePic?: string | null
    feedbacks?: FeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFridgesInput = {
    id?: number
    name: string
    email: string
    profilePic?: string | null
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFridgesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFridgesInput, UserUncheckedCreateWithoutFridgesInput>
  }

  export type FridgeCreateWithoutUsersInput = {
    name: string
    products?: FridgeProductCreateNestedManyWithoutFridgeInput
    Product?: ProductCreateNestedManyWithoutFridgeInput
  }

  export type FridgeUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    products?: FridgeProductUncheckedCreateNestedManyWithoutFridgeInput
    Product?: ProductUncheckedCreateNestedManyWithoutFridgeInput
  }

  export type FridgeCreateOrConnectWithoutUsersInput = {
    where: FridgeWhereUniqueInput
    create: XOR<FridgeCreateWithoutUsersInput, FridgeUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutFridgesInput = {
    update: XOR<UserUpdateWithoutFridgesInput, UserUncheckedUpdateWithoutFridgesInput>
    create: XOR<UserCreateWithoutFridgesInput, UserUncheckedCreateWithoutFridgesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFridgesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFridgesInput, UserUncheckedUpdateWithoutFridgesInput>
  }

  export type UserUpdateWithoutFridgesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFridgesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FridgeUpsertWithoutUsersInput = {
    update: XOR<FridgeUpdateWithoutUsersInput, FridgeUncheckedUpdateWithoutUsersInput>
    create: XOR<FridgeCreateWithoutUsersInput, FridgeUncheckedCreateWithoutUsersInput>
    where?: FridgeWhereInput
  }

  export type FridgeUpdateToOneWithWhereWithoutUsersInput = {
    where?: FridgeWhereInput
    data: XOR<FridgeUpdateWithoutUsersInput, FridgeUncheckedUpdateWithoutUsersInput>
  }

  export type FridgeUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: FridgeProductUpdateManyWithoutFridgeNestedInput
    Product?: ProductUpdateManyWithoutFridgeNestedInput
  }

  export type FridgeUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    products?: FridgeProductUncheckedUpdateManyWithoutFridgeNestedInput
    Product?: ProductUncheckedUpdateManyWithoutFridgeNestedInput
  }

  export type FridgeCreateWithoutProductsInput = {
    name: string
    users?: UserFridgeCreateNestedManyWithoutFridgeInput
    Product?: ProductCreateNestedManyWithoutFridgeInput
  }

  export type FridgeUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    users?: UserFridgeUncheckedCreateNestedManyWithoutFridgeInput
    Product?: ProductUncheckedCreateNestedManyWithoutFridgeInput
  }

  export type FridgeCreateOrConnectWithoutProductsInput = {
    where: FridgeWhereUniqueInput
    create: XOR<FridgeCreateWithoutProductsInput, FridgeUncheckedCreateWithoutProductsInput>
  }

  export type ProductCreateWithoutFridgesInput = {
    barcode: number
    name: string
    brand: string
    labels: boolean
    ecoScore: number
    novaScore: number
    bigImageUrl: string
    miniImageUrl: string
    meal: boolean
    allergens: string
    quantity: number
    fridge?: FridgeCreateNestedOneWithoutProductInput
    ingredient: IngredientCreateNestedOneWithoutProductsInput
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutProductInput
    IngredientProduct?: IngredientProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutFridgesInput = {
    barcode: number
    fridgeId?: number | null
    ingredientId: number
    name: string
    brand: string
    labels: boolean
    ecoScore: number
    novaScore: number
    bigImageUrl: string
    miniImageUrl: string
    meal: boolean
    allergens: string
    quantity: number
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutProductInput
    IngredientProduct?: IngredientProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutFridgesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutFridgesInput, ProductUncheckedCreateWithoutFridgesInput>
  }

  export type FridgeUpsertWithoutProductsInput = {
    update: XOR<FridgeUpdateWithoutProductsInput, FridgeUncheckedUpdateWithoutProductsInput>
    create: XOR<FridgeCreateWithoutProductsInput, FridgeUncheckedCreateWithoutProductsInput>
    where?: FridgeWhereInput
  }

  export type FridgeUpdateToOneWithWhereWithoutProductsInput = {
    where?: FridgeWhereInput
    data: XOR<FridgeUpdateWithoutProductsInput, FridgeUncheckedUpdateWithoutProductsInput>
  }

  export type FridgeUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserFridgeUpdateManyWithoutFridgeNestedInput
    Product?: ProductUpdateManyWithoutFridgeNestedInput
  }

  export type FridgeUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserFridgeUncheckedUpdateManyWithoutFridgeNestedInput
    Product?: ProductUncheckedUpdateManyWithoutFridgeNestedInput
  }

  export type ProductUpsertWithoutFridgesInput = {
    update: XOR<ProductUpdateWithoutFridgesInput, ProductUncheckedUpdateWithoutFridgesInput>
    create: XOR<ProductCreateWithoutFridgesInput, ProductUncheckedCreateWithoutFridgesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutFridgesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutFridgesInput, ProductUncheckedUpdateWithoutFridgesInput>
  }

  export type ProductUpdateWithoutFridgesInput = {
    barcode?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    labels?: BoolFieldUpdateOperationsInput | boolean
    ecoScore?: IntFieldUpdateOperationsInput | number
    novaScore?: IntFieldUpdateOperationsInput | number
    bigImageUrl?: StringFieldUpdateOperationsInput | string
    miniImageUrl?: StringFieldUpdateOperationsInput | string
    meal?: BoolFieldUpdateOperationsInput | boolean
    allergens?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fridge?: FridgeUpdateOneWithoutProductNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutProductsNestedInput
    recipeIngredients?: RecipeIngredientUpdateManyWithoutProductNestedInput
    IngredientProduct?: IngredientProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutFridgesInput = {
    barcode?: IntFieldUpdateOperationsInput | number
    fridgeId?: NullableIntFieldUpdateOperationsInput | number | null
    ingredientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    labels?: BoolFieldUpdateOperationsInput | boolean
    ecoScore?: IntFieldUpdateOperationsInput | number
    novaScore?: IntFieldUpdateOperationsInput | number
    bigImageUrl?: StringFieldUpdateOperationsInput | string
    miniImageUrl?: StringFieldUpdateOperationsInput | string
    meal?: BoolFieldUpdateOperationsInput | boolean
    allergens?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutProductNestedInput
    IngredientProduct?: IngredientProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type IngredientCreateWithoutIngredientProductInput = {
    name: string
    unit?: string | null
    products?: ProductCreateNestedManyWithoutIngredientInput
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutIngredientProductInput = {
    id?: number
    name: string
    unit?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutIngredientInput
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutIngredientProductInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutIngredientProductInput, IngredientUncheckedCreateWithoutIngredientProductInput>
  }

  export type ProductCreateWithoutIngredientProductInput = {
    barcode: number
    name: string
    brand: string
    labels: boolean
    ecoScore: number
    novaScore: number
    bigImageUrl: string
    miniImageUrl: string
    meal: boolean
    allergens: string
    quantity: number
    fridge?: FridgeCreateNestedOneWithoutProductInput
    ingredient: IngredientCreateNestedOneWithoutProductsInput
    fridges?: FridgeProductCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutIngredientProductInput = {
    barcode: number
    fridgeId?: number | null
    ingredientId: number
    name: string
    brand: string
    labels: boolean
    ecoScore: number
    novaScore: number
    bigImageUrl: string
    miniImageUrl: string
    meal: boolean
    allergens: string
    quantity: number
    fridges?: FridgeProductUncheckedCreateNestedManyWithoutProductInput
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutIngredientProductInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutIngredientProductInput, ProductUncheckedCreateWithoutIngredientProductInput>
  }

  export type IngredientUpsertWithoutIngredientProductInput = {
    update: XOR<IngredientUpdateWithoutIngredientProductInput, IngredientUncheckedUpdateWithoutIngredientProductInput>
    create: XOR<IngredientCreateWithoutIngredientProductInput, IngredientUncheckedCreateWithoutIngredientProductInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutIngredientProductInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutIngredientProductInput, IngredientUncheckedUpdateWithoutIngredientProductInput>
  }

  export type IngredientUpdateWithoutIngredientProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateManyWithoutIngredientNestedInput
    recipeIngredients?: RecipeIngredientUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutIngredientProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutIngredientNestedInput
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type ProductUpsertWithoutIngredientProductInput = {
    update: XOR<ProductUpdateWithoutIngredientProductInput, ProductUncheckedUpdateWithoutIngredientProductInput>
    create: XOR<ProductCreateWithoutIngredientProductInput, ProductUncheckedCreateWithoutIngredientProductInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutIngredientProductInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutIngredientProductInput, ProductUncheckedUpdateWithoutIngredientProductInput>
  }

  export type ProductUpdateWithoutIngredientProductInput = {
    barcode?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    labels?: BoolFieldUpdateOperationsInput | boolean
    ecoScore?: IntFieldUpdateOperationsInput | number
    novaScore?: IntFieldUpdateOperationsInput | number
    bigImageUrl?: StringFieldUpdateOperationsInput | string
    miniImageUrl?: StringFieldUpdateOperationsInput | string
    meal?: BoolFieldUpdateOperationsInput | boolean
    allergens?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fridge?: FridgeUpdateOneWithoutProductNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutProductsNestedInput
    fridges?: FridgeProductUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutIngredientProductInput = {
    barcode?: IntFieldUpdateOperationsInput | number
    fridgeId?: NullableIntFieldUpdateOperationsInput | number | null
    ingredientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    labels?: BoolFieldUpdateOperationsInput | boolean
    ecoScore?: IntFieldUpdateOperationsInput | number
    novaScore?: IntFieldUpdateOperationsInput | number
    bigImageUrl?: StringFieldUpdateOperationsInput | string
    miniImageUrl?: StringFieldUpdateOperationsInput | string
    meal?: BoolFieldUpdateOperationsInput | boolean
    allergens?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fridges?: FridgeProductUncheckedUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserFridgeCreateManyUserInput = {
    id?: number
    fridgeId: number
    isAdmin: boolean
    isOwner: boolean
  }

  export type FeedbackCreateManyUserInput = {
    id?: number
    recipeId: number
    isChosen: boolean
    rating: number
    notes?: string | null
  }

  export type UserFridgeUpdateWithoutUserInput = {
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    fridge?: FridgeUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserFridgeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fridgeId?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserFridgeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fridgeId?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeedbackUpdateWithoutUserInput = {
    isChosen?: BoolFieldUpdateOperationsInput | boolean
    rating?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recipe?: RecipeUpdateOneRequiredWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    isChosen?: BoolFieldUpdateOperationsInput | boolean
    rating?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    isChosen?: BoolFieldUpdateOperationsInput | boolean
    rating?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeIngredientCreateManyRecipeInput = {
    id?: number
    ingredientId: number
    amountText: string
    amount: number
    productBarcode?: number | null
  }

  export type StepCreateManyRecipeInput = {
    id?: number
    nStep: number
    imageUrl?: string | null
    explaining: string
  }

  export type FeedbackCreateManyRecipeInput = {
    id?: number
    userId: number
    isChosen: boolean
    rating: number
    notes?: string | null
  }

  export type RecipeIngredientUpdateWithoutRecipeInput = {
    amountText?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    ingredient?: IngredientUpdateOneRequiredWithoutRecipeIngredientsNestedInput
    Product?: ProductUpdateOneWithoutRecipeIngredientsNestedInput
  }

  export type RecipeIngredientUncheckedUpdateWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    amountText?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    productBarcode?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    amountText?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    productBarcode?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StepUpdateWithoutRecipeInput = {
    nStep?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    explaining?: StringFieldUpdateOperationsInput | string
  }

  export type StepUncheckedUpdateWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nStep?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    explaining?: StringFieldUpdateOperationsInput | string
  }

  export type StepUncheckedUpdateManyWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nStep?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    explaining?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackUpdateWithoutRecipeInput = {
    isChosen?: BoolFieldUpdateOperationsInput | boolean
    rating?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isChosen?: BoolFieldUpdateOperationsInput | boolean
    rating?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackUncheckedUpdateManyWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isChosen?: BoolFieldUpdateOperationsInput | boolean
    rating?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductCreateManyIngredientInput = {
    barcode: number
    fridgeId?: number | null
    name: string
    brand: string
    labels: boolean
    ecoScore: number
    novaScore: number
    bigImageUrl: string
    miniImageUrl: string
    meal: boolean
    allergens: string
    quantity: number
  }

  export type RecipeIngredientCreateManyIngredientInput = {
    id?: number
    recipeId: number
    amountText: string
    amount: number
    productBarcode?: number | null
  }

  export type IngredientProductCreateManyIngredientInput = {
    productBarcode: number
    quantity: number
  }

  export type ProductUpdateWithoutIngredientInput = {
    barcode?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    labels?: BoolFieldUpdateOperationsInput | boolean
    ecoScore?: IntFieldUpdateOperationsInput | number
    novaScore?: IntFieldUpdateOperationsInput | number
    bigImageUrl?: StringFieldUpdateOperationsInput | string
    miniImageUrl?: StringFieldUpdateOperationsInput | string
    meal?: BoolFieldUpdateOperationsInput | boolean
    allergens?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fridge?: FridgeUpdateOneWithoutProductNestedInput
    fridges?: FridgeProductUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientUpdateManyWithoutProductNestedInput
    IngredientProduct?: IngredientProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutIngredientInput = {
    barcode?: IntFieldUpdateOperationsInput | number
    fridgeId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    labels?: BoolFieldUpdateOperationsInput | boolean
    ecoScore?: IntFieldUpdateOperationsInput | number
    novaScore?: IntFieldUpdateOperationsInput | number
    bigImageUrl?: StringFieldUpdateOperationsInput | string
    miniImageUrl?: StringFieldUpdateOperationsInput | string
    meal?: BoolFieldUpdateOperationsInput | boolean
    allergens?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fridges?: FridgeProductUncheckedUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutProductNestedInput
    IngredientProduct?: IngredientProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutIngredientInput = {
    barcode?: IntFieldUpdateOperationsInput | number
    fridgeId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    labels?: BoolFieldUpdateOperationsInput | boolean
    ecoScore?: IntFieldUpdateOperationsInput | number
    novaScore?: IntFieldUpdateOperationsInput | number
    bigImageUrl?: StringFieldUpdateOperationsInput | string
    miniImageUrl?: StringFieldUpdateOperationsInput | string
    meal?: BoolFieldUpdateOperationsInput | boolean
    allergens?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeIngredientUpdateWithoutIngredientInput = {
    amountText?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    recipe?: RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput
    Product?: ProductUpdateOneWithoutRecipeIngredientsNestedInput
  }

  export type RecipeIngredientUncheckedUpdateWithoutIngredientInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    amountText?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    productBarcode?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutIngredientInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    amountText?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    productBarcode?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IngredientProductUpdateWithoutIngredientInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutIngredientProductNestedInput
  }

  export type IngredientProductUncheckedUpdateWithoutIngredientInput = {
    productBarcode?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type IngredientProductUncheckedUpdateManyWithoutIngredientInput = {
    productBarcode?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type FridgeProductCreateManyProductInput = {
    id?: number
    fridgeId: number
    quantity: number
  }

  export type RecipeIngredientCreateManyProductInput = {
    id?: number
    recipeId: number
    ingredientId: number
    amountText: string
    amount: number
  }

  export type IngredientProductCreateManyProductInput = {
    ingredientId: number
    quantity: number
  }

  export type FridgeProductUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    fridge?: FridgeUpdateOneRequiredWithoutProductsNestedInput
  }

  export type FridgeProductUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    fridgeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type FridgeProductUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    fridgeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeIngredientUpdateWithoutProductInput = {
    amountText?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    recipe?: RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutRecipeIngredientsNestedInput
  }

  export type RecipeIngredientUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    amountText?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    amountText?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type IngredientProductUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    ingredient?: IngredientUpdateOneRequiredWithoutIngredientProductNestedInput
  }

  export type IngredientProductUncheckedUpdateWithoutProductInput = {
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type IngredientProductUncheckedUpdateManyWithoutProductInput = {
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type FridgeProductCreateManyFridgeInput = {
    id?: number
    productBarcode: number
    quantity: number
  }

  export type UserFridgeCreateManyFridgeInput = {
    id?: number
    userId: number
    isAdmin: boolean
    isOwner: boolean
  }

  export type ProductCreateManyFridgeInput = {
    barcode: number
    ingredientId: number
    name: string
    brand: string
    labels: boolean
    ecoScore: number
    novaScore: number
    bigImageUrl: string
    miniImageUrl: string
    meal: boolean
    allergens: string
    quantity: number
  }

  export type FridgeProductUpdateWithoutFridgeInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutFridgesNestedInput
  }

  export type FridgeProductUncheckedUpdateWithoutFridgeInput = {
    id?: IntFieldUpdateOperationsInput | number
    productBarcode?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type FridgeProductUncheckedUpdateManyWithoutFridgeInput = {
    id?: IntFieldUpdateOperationsInput | number
    productBarcode?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type UserFridgeUpdateWithoutFridgeInput = {
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutFridgesNestedInput
  }

  export type UserFridgeUncheckedUpdateWithoutFridgeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserFridgeUncheckedUpdateManyWithoutFridgeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isOwner?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUpdateWithoutFridgeInput = {
    barcode?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    labels?: BoolFieldUpdateOperationsInput | boolean
    ecoScore?: IntFieldUpdateOperationsInput | number
    novaScore?: IntFieldUpdateOperationsInput | number
    bigImageUrl?: StringFieldUpdateOperationsInput | string
    miniImageUrl?: StringFieldUpdateOperationsInput | string
    meal?: BoolFieldUpdateOperationsInput | boolean
    allergens?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    ingredient?: IngredientUpdateOneRequiredWithoutProductsNestedInput
    fridges?: FridgeProductUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientUpdateManyWithoutProductNestedInput
    IngredientProduct?: IngredientProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutFridgeInput = {
    barcode?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    labels?: BoolFieldUpdateOperationsInput | boolean
    ecoScore?: IntFieldUpdateOperationsInput | number
    novaScore?: IntFieldUpdateOperationsInput | number
    bigImageUrl?: StringFieldUpdateOperationsInput | string
    miniImageUrl?: StringFieldUpdateOperationsInput | string
    meal?: BoolFieldUpdateOperationsInput | boolean
    allergens?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    fridges?: FridgeProductUncheckedUpdateManyWithoutProductNestedInput
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutProductNestedInput
    IngredientProduct?: IngredientProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutFridgeInput = {
    barcode?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    labels?: BoolFieldUpdateOperationsInput | boolean
    ecoScore?: IntFieldUpdateOperationsInput | number
    novaScore?: IntFieldUpdateOperationsInput | number
    bigImageUrl?: StringFieldUpdateOperationsInput | string
    miniImageUrl?: StringFieldUpdateOperationsInput | string
    meal?: BoolFieldUpdateOperationsInput | boolean
    allergens?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecipeCountOutputTypeDefaultArgs instead
     */
    export type RecipeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecipeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IngredientCountOutputTypeDefaultArgs instead
     */
    export type IngredientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IngredientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FridgeCountOutputTypeDefaultArgs instead
     */
    export type FridgeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FridgeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeedbackDefaultArgs instead
     */
    export type FeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeedbackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecipeDefaultArgs instead
     */
    export type RecipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecipeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StepDefaultArgs instead
     */
    export type StepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StepDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecipeIngredientDefaultArgs instead
     */
    export type RecipeIngredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecipeIngredientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IngredientDefaultArgs instead
     */
    export type IngredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IngredientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FridgeDefaultArgs instead
     */
    export type FridgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FridgeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserFridgeDefaultArgs instead
     */
    export type UserFridgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserFridgeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FridgeProductDefaultArgs instead
     */
    export type FridgeProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FridgeProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IngredientProductDefaultArgs instead
     */
    export type IngredientProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IngredientProductDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}