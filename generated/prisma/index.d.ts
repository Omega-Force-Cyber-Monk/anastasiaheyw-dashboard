
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model ArthurToken
 * 
 */
export type ArthurToken = $Result.DefaultSelection<Prisma.$ArthurTokenPayload>
/**
 * Model ArthurProperty
 * 
 */
export type ArthurProperty = $Result.DefaultSelection<Prisma.$ArthurPropertyPayload>
/**
 * Model ArthurUnit
 * 
 */
export type ArthurUnit = $Result.DefaultSelection<Prisma.$ArthurUnitPayload>
/**
 * Model ArthurTenancy
 * 
 */
export type ArthurTenancy = $Result.DefaultSelection<Prisma.$ArthurTenancyPayload>
/**
 * Model AdminProfile
 * 
 */
export type AdminProfile = $Result.DefaultSelection<Prisma.$AdminProfilePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arthurToken`: Exposes CRUD operations for the **ArthurToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArthurTokens
    * const arthurTokens = await prisma.arthurToken.findMany()
    * ```
    */
  get arthurToken(): Prisma.ArthurTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arthurProperty`: Exposes CRUD operations for the **ArthurProperty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArthurProperties
    * const arthurProperties = await prisma.arthurProperty.findMany()
    * ```
    */
  get arthurProperty(): Prisma.ArthurPropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arthurUnit`: Exposes CRUD operations for the **ArthurUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArthurUnits
    * const arthurUnits = await prisma.arthurUnit.findMany()
    * ```
    */
  get arthurUnit(): Prisma.ArthurUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arthurTenancy`: Exposes CRUD operations for the **ArthurTenancy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArthurTenancies
    * const arthurTenancies = await prisma.arthurTenancy.findMany()
    * ```
    */
  get arthurTenancy(): Prisma.ArthurTenancyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminProfile`: Exposes CRUD operations for the **AdminProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminProfiles
    * const adminProfiles = await prisma.adminProfile.findMany()
    * ```
    */
  get adminProfile(): Prisma.AdminProfileDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Post: 'Post',
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    ArthurToken: 'ArthurToken',
    ArthurProperty: 'ArthurProperty',
    ArthurUnit: 'ArthurUnit',
    ArthurTenancy: 'ArthurTenancy',
    AdminProfile: 'AdminProfile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "account" | "session" | "user" | "verificationToken" | "arthurToken" | "arthurProperty" | "arthurUnit" | "arthurTenancy" | "adminProfile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      ArthurToken: {
        payload: Prisma.$ArthurTokenPayload<ExtArgs>
        fields: Prisma.ArthurTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArthurTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArthurTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTokenPayload>
          }
          findFirst: {
            args: Prisma.ArthurTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArthurTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTokenPayload>
          }
          findMany: {
            args: Prisma.ArthurTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTokenPayload>[]
          }
          create: {
            args: Prisma.ArthurTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTokenPayload>
          }
          createMany: {
            args: Prisma.ArthurTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArthurTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTokenPayload>[]
          }
          delete: {
            args: Prisma.ArthurTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTokenPayload>
          }
          update: {
            args: Prisma.ArthurTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTokenPayload>
          }
          deleteMany: {
            args: Prisma.ArthurTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArthurTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArthurTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTokenPayload>[]
          }
          upsert: {
            args: Prisma.ArthurTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTokenPayload>
          }
          aggregate: {
            args: Prisma.ArthurTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArthurToken>
          }
          groupBy: {
            args: Prisma.ArthurTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArthurTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArthurTokenCountArgs<ExtArgs>
            result: $Utils.Optional<ArthurTokenCountAggregateOutputType> | number
          }
        }
      }
      ArthurProperty: {
        payload: Prisma.$ArthurPropertyPayload<ExtArgs>
        fields: Prisma.ArthurPropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArthurPropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurPropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArthurPropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurPropertyPayload>
          }
          findFirst: {
            args: Prisma.ArthurPropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurPropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArthurPropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurPropertyPayload>
          }
          findMany: {
            args: Prisma.ArthurPropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurPropertyPayload>[]
          }
          create: {
            args: Prisma.ArthurPropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurPropertyPayload>
          }
          createMany: {
            args: Prisma.ArthurPropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArthurPropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurPropertyPayload>[]
          }
          delete: {
            args: Prisma.ArthurPropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurPropertyPayload>
          }
          update: {
            args: Prisma.ArthurPropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurPropertyPayload>
          }
          deleteMany: {
            args: Prisma.ArthurPropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArthurPropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArthurPropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurPropertyPayload>[]
          }
          upsert: {
            args: Prisma.ArthurPropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurPropertyPayload>
          }
          aggregate: {
            args: Prisma.ArthurPropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArthurProperty>
          }
          groupBy: {
            args: Prisma.ArthurPropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArthurPropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArthurPropertyCountArgs<ExtArgs>
            result: $Utils.Optional<ArthurPropertyCountAggregateOutputType> | number
          }
        }
      }
      ArthurUnit: {
        payload: Prisma.$ArthurUnitPayload<ExtArgs>
        fields: Prisma.ArthurUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArthurUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArthurUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurUnitPayload>
          }
          findFirst: {
            args: Prisma.ArthurUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArthurUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurUnitPayload>
          }
          findMany: {
            args: Prisma.ArthurUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurUnitPayload>[]
          }
          create: {
            args: Prisma.ArthurUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurUnitPayload>
          }
          createMany: {
            args: Prisma.ArthurUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArthurUnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurUnitPayload>[]
          }
          delete: {
            args: Prisma.ArthurUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurUnitPayload>
          }
          update: {
            args: Prisma.ArthurUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurUnitPayload>
          }
          deleteMany: {
            args: Prisma.ArthurUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArthurUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArthurUnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurUnitPayload>[]
          }
          upsert: {
            args: Prisma.ArthurUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurUnitPayload>
          }
          aggregate: {
            args: Prisma.ArthurUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArthurUnit>
          }
          groupBy: {
            args: Prisma.ArthurUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArthurUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArthurUnitCountArgs<ExtArgs>
            result: $Utils.Optional<ArthurUnitCountAggregateOutputType> | number
          }
        }
      }
      ArthurTenancy: {
        payload: Prisma.$ArthurTenancyPayload<ExtArgs>
        fields: Prisma.ArthurTenancyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArthurTenancyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTenancyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArthurTenancyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTenancyPayload>
          }
          findFirst: {
            args: Prisma.ArthurTenancyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTenancyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArthurTenancyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTenancyPayload>
          }
          findMany: {
            args: Prisma.ArthurTenancyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTenancyPayload>[]
          }
          create: {
            args: Prisma.ArthurTenancyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTenancyPayload>
          }
          createMany: {
            args: Prisma.ArthurTenancyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArthurTenancyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTenancyPayload>[]
          }
          delete: {
            args: Prisma.ArthurTenancyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTenancyPayload>
          }
          update: {
            args: Prisma.ArthurTenancyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTenancyPayload>
          }
          deleteMany: {
            args: Prisma.ArthurTenancyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArthurTenancyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArthurTenancyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTenancyPayload>[]
          }
          upsert: {
            args: Prisma.ArthurTenancyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArthurTenancyPayload>
          }
          aggregate: {
            args: Prisma.ArthurTenancyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArthurTenancy>
          }
          groupBy: {
            args: Prisma.ArthurTenancyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArthurTenancyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArthurTenancyCountArgs<ExtArgs>
            result: $Utils.Optional<ArthurTenancyCountAggregateOutputType> | number
          }
        }
      }
      AdminProfile: {
        payload: Prisma.$AdminProfilePayload<ExtArgs>
        fields: Prisma.AdminProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          findFirst: {
            args: Prisma.AdminProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          findMany: {
            args: Prisma.AdminProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>[]
          }
          create: {
            args: Prisma.AdminProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          createMany: {
            args: Prisma.AdminProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>[]
          }
          delete: {
            args: Prisma.AdminProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          update: {
            args: Prisma.AdminProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          deleteMany: {
            args: Prisma.AdminProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>[]
          }
          upsert: {
            args: Prisma.AdminProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminProfilePayload>
          }
          aggregate: {
            args: Prisma.AdminProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminProfile>
          }
          groupBy: {
            args: Prisma.AdminProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminProfileCountArgs<ExtArgs>
            result: $Utils.Optional<AdminProfileCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    arthurToken?: ArthurTokenOmit
    arthurProperty?: ArthurPropertyOmit
    arthurUnit?: ArthurUnitOmit
    arthurTenancy?: ArthurTenancyOmit
    adminProfile?: AdminProfileOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
    accounts: number
    posts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type ArthurPropertyCountOutputType
   */

  export type ArthurPropertyCountOutputType = {
    units: number
  }

  export type ArthurPropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | ArthurPropertyCountOutputTypeCountUnitsArgs
  }

  // Custom InputTypes
  /**
   * ArthurPropertyCountOutputType without action
   */
  export type ArthurPropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurPropertyCountOutputType
     */
    select?: ArthurPropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArthurPropertyCountOutputType without action
   */
  export type ArthurPropertyCountOutputTypeCountUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArthurUnitWhereInput
  }


  /**
   * Count Type ArthurUnitCountOutputType
   */

  export type ArthurUnitCountOutputType = {
    tenancies: number
  }

  export type ArthurUnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenancies?: boolean | ArthurUnitCountOutputTypeCountTenanciesArgs
  }

  // Custom InputTypes
  /**
   * ArthurUnitCountOutputType without action
   */
  export type ArthurUnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurUnitCountOutputType
     */
    select?: ArthurUnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArthurUnitCountOutputType without action
   */
  export type ArthurUnitCountOutputTypeCountTenanciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArthurTenancyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly name: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly createdById: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "refresh_token_expires_in", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      refresh_token_expires_in: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string | null
    _count: UserCountAggregateOutputType | null
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
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      password: string | null
      role: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model ArthurToken
   */

  export type AggregateArthurToken = {
    _count: ArthurTokenCountAggregateOutputType | null
    _min: ArthurTokenMinAggregateOutputType | null
    _max: ArthurTokenMaxAggregateOutputType | null
  }

  export type ArthurTokenMinAggregateOutputType = {
    id: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    updatedAt: Date | null
  }

  export type ArthurTokenMaxAggregateOutputType = {
    id: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    updatedAt: Date | null
  }

  export type ArthurTokenCountAggregateOutputType = {
    id: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    updatedAt: number
    _all: number
  }


  export type ArthurTokenMinAggregateInputType = {
    id?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    updatedAt?: true
  }

  export type ArthurTokenMaxAggregateInputType = {
    id?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    updatedAt?: true
  }

  export type ArthurTokenCountAggregateInputType = {
    id?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArthurTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArthurToken to aggregate.
     */
    where?: ArthurTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArthurTokens to fetch.
     */
    orderBy?: ArthurTokenOrderByWithRelationInput | ArthurTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArthurTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArthurTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArthurTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArthurTokens
    **/
    _count?: true | ArthurTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArthurTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArthurTokenMaxAggregateInputType
  }

  export type GetArthurTokenAggregateType<T extends ArthurTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateArthurToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArthurToken[P]>
      : GetScalarType<T[P], AggregateArthurToken[P]>
  }




  export type ArthurTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArthurTokenWhereInput
    orderBy?: ArthurTokenOrderByWithAggregationInput | ArthurTokenOrderByWithAggregationInput[]
    by: ArthurTokenScalarFieldEnum[] | ArthurTokenScalarFieldEnum
    having?: ArthurTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArthurTokenCountAggregateInputType | true
    _min?: ArthurTokenMinAggregateInputType
    _max?: ArthurTokenMaxAggregateInputType
  }

  export type ArthurTokenGroupByOutputType = {
    id: string
    accessToken: string
    refreshToken: string
    expiresAt: Date
    updatedAt: Date
    _count: ArthurTokenCountAggregateOutputType | null
    _min: ArthurTokenMinAggregateOutputType | null
    _max: ArthurTokenMaxAggregateOutputType | null
  }

  type GetArthurTokenGroupByPayload<T extends ArthurTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArthurTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArthurTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArthurTokenGroupByOutputType[P]>
            : GetScalarType<T[P], ArthurTokenGroupByOutputType[P]>
        }
      >
    >


  export type ArthurTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["arthurToken"]>

  export type ArthurTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["arthurToken"]>

  export type ArthurTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["arthurToken"]>

  export type ArthurTokenSelectScalar = {
    id?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    updatedAt?: boolean
  }

  export type ArthurTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accessToken" | "refreshToken" | "expiresAt" | "updatedAt", ExtArgs["result"]["arthurToken"]>

  export type $ArthurTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArthurToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accessToken: string
      refreshToken: string
      expiresAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["arthurToken"]>
    composites: {}
  }

  type ArthurTokenGetPayload<S extends boolean | null | undefined | ArthurTokenDefaultArgs> = $Result.GetResult<Prisma.$ArthurTokenPayload, S>

  type ArthurTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArthurTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArthurTokenCountAggregateInputType | true
    }

  export interface ArthurTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArthurToken'], meta: { name: 'ArthurToken' } }
    /**
     * Find zero or one ArthurToken that matches the filter.
     * @param {ArthurTokenFindUniqueArgs} args - Arguments to find a ArthurToken
     * @example
     * // Get one ArthurToken
     * const arthurToken = await prisma.arthurToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArthurTokenFindUniqueArgs>(args: SelectSubset<T, ArthurTokenFindUniqueArgs<ExtArgs>>): Prisma__ArthurTokenClient<$Result.GetResult<Prisma.$ArthurTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArthurToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArthurTokenFindUniqueOrThrowArgs} args - Arguments to find a ArthurToken
     * @example
     * // Get one ArthurToken
     * const arthurToken = await prisma.arthurToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArthurTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, ArthurTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArthurTokenClient<$Result.GetResult<Prisma.$ArthurTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArthurToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurTokenFindFirstArgs} args - Arguments to find a ArthurToken
     * @example
     * // Get one ArthurToken
     * const arthurToken = await prisma.arthurToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArthurTokenFindFirstArgs>(args?: SelectSubset<T, ArthurTokenFindFirstArgs<ExtArgs>>): Prisma__ArthurTokenClient<$Result.GetResult<Prisma.$ArthurTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArthurToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurTokenFindFirstOrThrowArgs} args - Arguments to find a ArthurToken
     * @example
     * // Get one ArthurToken
     * const arthurToken = await prisma.arthurToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArthurTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, ArthurTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArthurTokenClient<$Result.GetResult<Prisma.$ArthurTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArthurTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArthurTokens
     * const arthurTokens = await prisma.arthurToken.findMany()
     * 
     * // Get first 10 ArthurTokens
     * const arthurTokens = await prisma.arthurToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arthurTokenWithIdOnly = await prisma.arthurToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArthurTokenFindManyArgs>(args?: SelectSubset<T, ArthurTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArthurTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArthurToken.
     * @param {ArthurTokenCreateArgs} args - Arguments to create a ArthurToken.
     * @example
     * // Create one ArthurToken
     * const ArthurToken = await prisma.arthurToken.create({
     *   data: {
     *     // ... data to create a ArthurToken
     *   }
     * })
     * 
     */
    create<T extends ArthurTokenCreateArgs>(args: SelectSubset<T, ArthurTokenCreateArgs<ExtArgs>>): Prisma__ArthurTokenClient<$Result.GetResult<Prisma.$ArthurTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArthurTokens.
     * @param {ArthurTokenCreateManyArgs} args - Arguments to create many ArthurTokens.
     * @example
     * // Create many ArthurTokens
     * const arthurToken = await prisma.arthurToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArthurTokenCreateManyArgs>(args?: SelectSubset<T, ArthurTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArthurTokens and returns the data saved in the database.
     * @param {ArthurTokenCreateManyAndReturnArgs} args - Arguments to create many ArthurTokens.
     * @example
     * // Create many ArthurTokens
     * const arthurToken = await prisma.arthurToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArthurTokens and only return the `id`
     * const arthurTokenWithIdOnly = await prisma.arthurToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArthurTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, ArthurTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArthurTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArthurToken.
     * @param {ArthurTokenDeleteArgs} args - Arguments to delete one ArthurToken.
     * @example
     * // Delete one ArthurToken
     * const ArthurToken = await prisma.arthurToken.delete({
     *   where: {
     *     // ... filter to delete one ArthurToken
     *   }
     * })
     * 
     */
    delete<T extends ArthurTokenDeleteArgs>(args: SelectSubset<T, ArthurTokenDeleteArgs<ExtArgs>>): Prisma__ArthurTokenClient<$Result.GetResult<Prisma.$ArthurTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArthurToken.
     * @param {ArthurTokenUpdateArgs} args - Arguments to update one ArthurToken.
     * @example
     * // Update one ArthurToken
     * const arthurToken = await prisma.arthurToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArthurTokenUpdateArgs>(args: SelectSubset<T, ArthurTokenUpdateArgs<ExtArgs>>): Prisma__ArthurTokenClient<$Result.GetResult<Prisma.$ArthurTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArthurTokens.
     * @param {ArthurTokenDeleteManyArgs} args - Arguments to filter ArthurTokens to delete.
     * @example
     * // Delete a few ArthurTokens
     * const { count } = await prisma.arthurToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArthurTokenDeleteManyArgs>(args?: SelectSubset<T, ArthurTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArthurTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArthurTokens
     * const arthurToken = await prisma.arthurToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArthurTokenUpdateManyArgs>(args: SelectSubset<T, ArthurTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArthurTokens and returns the data updated in the database.
     * @param {ArthurTokenUpdateManyAndReturnArgs} args - Arguments to update many ArthurTokens.
     * @example
     * // Update many ArthurTokens
     * const arthurToken = await prisma.arthurToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArthurTokens and only return the `id`
     * const arthurTokenWithIdOnly = await prisma.arthurToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArthurTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, ArthurTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArthurTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArthurToken.
     * @param {ArthurTokenUpsertArgs} args - Arguments to update or create a ArthurToken.
     * @example
     * // Update or create a ArthurToken
     * const arthurToken = await prisma.arthurToken.upsert({
     *   create: {
     *     // ... data to create a ArthurToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArthurToken we want to update
     *   }
     * })
     */
    upsert<T extends ArthurTokenUpsertArgs>(args: SelectSubset<T, ArthurTokenUpsertArgs<ExtArgs>>): Prisma__ArthurTokenClient<$Result.GetResult<Prisma.$ArthurTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArthurTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurTokenCountArgs} args - Arguments to filter ArthurTokens to count.
     * @example
     * // Count the number of ArthurTokens
     * const count = await prisma.arthurToken.count({
     *   where: {
     *     // ... the filter for the ArthurTokens we want to count
     *   }
     * })
    **/
    count<T extends ArthurTokenCountArgs>(
      args?: Subset<T, ArthurTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArthurTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArthurToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArthurTokenAggregateArgs>(args: Subset<T, ArthurTokenAggregateArgs>): Prisma.PrismaPromise<GetArthurTokenAggregateType<T>>

    /**
     * Group by ArthurToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurTokenGroupByArgs} args - Group by arguments.
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
      T extends ArthurTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArthurTokenGroupByArgs['orderBy'] }
        : { orderBy?: ArthurTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArthurTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArthurTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArthurToken model
   */
  readonly fields: ArthurTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArthurToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArthurTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArthurToken model
   */
  interface ArthurTokenFieldRefs {
    readonly id: FieldRef<"ArthurToken", 'String'>
    readonly accessToken: FieldRef<"ArthurToken", 'String'>
    readonly refreshToken: FieldRef<"ArthurToken", 'String'>
    readonly expiresAt: FieldRef<"ArthurToken", 'DateTime'>
    readonly updatedAt: FieldRef<"ArthurToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArthurToken findUnique
   */
  export type ArthurTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurToken
     */
    select?: ArthurTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurToken
     */
    omit?: ArthurTokenOmit<ExtArgs> | null
    /**
     * Filter, which ArthurToken to fetch.
     */
    where: ArthurTokenWhereUniqueInput
  }

  /**
   * ArthurToken findUniqueOrThrow
   */
  export type ArthurTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurToken
     */
    select?: ArthurTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurToken
     */
    omit?: ArthurTokenOmit<ExtArgs> | null
    /**
     * Filter, which ArthurToken to fetch.
     */
    where: ArthurTokenWhereUniqueInput
  }

  /**
   * ArthurToken findFirst
   */
  export type ArthurTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurToken
     */
    select?: ArthurTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurToken
     */
    omit?: ArthurTokenOmit<ExtArgs> | null
    /**
     * Filter, which ArthurToken to fetch.
     */
    where?: ArthurTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArthurTokens to fetch.
     */
    orderBy?: ArthurTokenOrderByWithRelationInput | ArthurTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArthurTokens.
     */
    cursor?: ArthurTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArthurTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArthurTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArthurTokens.
     */
    distinct?: ArthurTokenScalarFieldEnum | ArthurTokenScalarFieldEnum[]
  }

  /**
   * ArthurToken findFirstOrThrow
   */
  export type ArthurTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurToken
     */
    select?: ArthurTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurToken
     */
    omit?: ArthurTokenOmit<ExtArgs> | null
    /**
     * Filter, which ArthurToken to fetch.
     */
    where?: ArthurTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArthurTokens to fetch.
     */
    orderBy?: ArthurTokenOrderByWithRelationInput | ArthurTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArthurTokens.
     */
    cursor?: ArthurTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArthurTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArthurTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArthurTokens.
     */
    distinct?: ArthurTokenScalarFieldEnum | ArthurTokenScalarFieldEnum[]
  }

  /**
   * ArthurToken findMany
   */
  export type ArthurTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurToken
     */
    select?: ArthurTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurToken
     */
    omit?: ArthurTokenOmit<ExtArgs> | null
    /**
     * Filter, which ArthurTokens to fetch.
     */
    where?: ArthurTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArthurTokens to fetch.
     */
    orderBy?: ArthurTokenOrderByWithRelationInput | ArthurTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArthurTokens.
     */
    cursor?: ArthurTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArthurTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArthurTokens.
     */
    skip?: number
    distinct?: ArthurTokenScalarFieldEnum | ArthurTokenScalarFieldEnum[]
  }

  /**
   * ArthurToken create
   */
  export type ArthurTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurToken
     */
    select?: ArthurTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurToken
     */
    omit?: ArthurTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a ArthurToken.
     */
    data: XOR<ArthurTokenCreateInput, ArthurTokenUncheckedCreateInput>
  }

  /**
   * ArthurToken createMany
   */
  export type ArthurTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArthurTokens.
     */
    data: ArthurTokenCreateManyInput | ArthurTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArthurToken createManyAndReturn
   */
  export type ArthurTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurToken
     */
    select?: ArthurTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurToken
     */
    omit?: ArthurTokenOmit<ExtArgs> | null
    /**
     * The data used to create many ArthurTokens.
     */
    data: ArthurTokenCreateManyInput | ArthurTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArthurToken update
   */
  export type ArthurTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurToken
     */
    select?: ArthurTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurToken
     */
    omit?: ArthurTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a ArthurToken.
     */
    data: XOR<ArthurTokenUpdateInput, ArthurTokenUncheckedUpdateInput>
    /**
     * Choose, which ArthurToken to update.
     */
    where: ArthurTokenWhereUniqueInput
  }

  /**
   * ArthurToken updateMany
   */
  export type ArthurTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArthurTokens.
     */
    data: XOR<ArthurTokenUpdateManyMutationInput, ArthurTokenUncheckedUpdateManyInput>
    /**
     * Filter which ArthurTokens to update
     */
    where?: ArthurTokenWhereInput
    /**
     * Limit how many ArthurTokens to update.
     */
    limit?: number
  }

  /**
   * ArthurToken updateManyAndReturn
   */
  export type ArthurTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurToken
     */
    select?: ArthurTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurToken
     */
    omit?: ArthurTokenOmit<ExtArgs> | null
    /**
     * The data used to update ArthurTokens.
     */
    data: XOR<ArthurTokenUpdateManyMutationInput, ArthurTokenUncheckedUpdateManyInput>
    /**
     * Filter which ArthurTokens to update
     */
    where?: ArthurTokenWhereInput
    /**
     * Limit how many ArthurTokens to update.
     */
    limit?: number
  }

  /**
   * ArthurToken upsert
   */
  export type ArthurTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurToken
     */
    select?: ArthurTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurToken
     */
    omit?: ArthurTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the ArthurToken to update in case it exists.
     */
    where: ArthurTokenWhereUniqueInput
    /**
     * In case the ArthurToken found by the `where` argument doesn't exist, create a new ArthurToken with this data.
     */
    create: XOR<ArthurTokenCreateInput, ArthurTokenUncheckedCreateInput>
    /**
     * In case the ArthurToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArthurTokenUpdateInput, ArthurTokenUncheckedUpdateInput>
  }

  /**
   * ArthurToken delete
   */
  export type ArthurTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurToken
     */
    select?: ArthurTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurToken
     */
    omit?: ArthurTokenOmit<ExtArgs> | null
    /**
     * Filter which ArthurToken to delete.
     */
    where: ArthurTokenWhereUniqueInput
  }

  /**
   * ArthurToken deleteMany
   */
  export type ArthurTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArthurTokens to delete
     */
    where?: ArthurTokenWhereInput
    /**
     * Limit how many ArthurTokens to delete.
     */
    limit?: number
  }

  /**
   * ArthurToken without action
   */
  export type ArthurTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurToken
     */
    select?: ArthurTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurToken
     */
    omit?: ArthurTokenOmit<ExtArgs> | null
  }


  /**
   * Model ArthurProperty
   */

  export type AggregateArthurProperty = {
    _count: ArthurPropertyCountAggregateOutputType | null
    _min: ArthurPropertyMinAggregateOutputType | null
    _max: ArthurPropertyMaxAggregateOutputType | null
  }

  export type ArthurPropertyMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArthurPropertyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArthurPropertyCountAggregateOutputType = {
    id: number
    name: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArthurPropertyMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArthurPropertyMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArthurPropertyCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArthurPropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArthurProperty to aggregate.
     */
    where?: ArthurPropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArthurProperties to fetch.
     */
    orderBy?: ArthurPropertyOrderByWithRelationInput | ArthurPropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArthurPropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArthurProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArthurProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArthurProperties
    **/
    _count?: true | ArthurPropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArthurPropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArthurPropertyMaxAggregateInputType
  }

  export type GetArthurPropertyAggregateType<T extends ArthurPropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateArthurProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArthurProperty[P]>
      : GetScalarType<T[P], AggregateArthurProperty[P]>
  }




  export type ArthurPropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArthurPropertyWhereInput
    orderBy?: ArthurPropertyOrderByWithAggregationInput | ArthurPropertyOrderByWithAggregationInput[]
    by: ArthurPropertyScalarFieldEnum[] | ArthurPropertyScalarFieldEnum
    having?: ArthurPropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArthurPropertyCountAggregateInputType | true
    _min?: ArthurPropertyMinAggregateInputType
    _max?: ArthurPropertyMaxAggregateInputType
  }

  export type ArthurPropertyGroupByOutputType = {
    id: string
    name: string
    address: string
    createdAt: Date
    updatedAt: Date
    _count: ArthurPropertyCountAggregateOutputType | null
    _min: ArthurPropertyMinAggregateOutputType | null
    _max: ArthurPropertyMaxAggregateOutputType | null
  }

  type GetArthurPropertyGroupByPayload<T extends ArthurPropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArthurPropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArthurPropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArthurPropertyGroupByOutputType[P]>
            : GetScalarType<T[P], ArthurPropertyGroupByOutputType[P]>
        }
      >
    >


  export type ArthurPropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    units?: boolean | ArthurProperty$unitsArgs<ExtArgs>
    _count?: boolean | ArthurPropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arthurProperty"]>

  export type ArthurPropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["arthurProperty"]>

  export type ArthurPropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["arthurProperty"]>

  export type ArthurPropertySelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArthurPropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["arthurProperty"]>
  export type ArthurPropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | ArthurProperty$unitsArgs<ExtArgs>
    _count?: boolean | ArthurPropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArthurPropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArthurPropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArthurPropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArthurProperty"
    objects: {
      units: Prisma.$ArthurUnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["arthurProperty"]>
    composites: {}
  }

  type ArthurPropertyGetPayload<S extends boolean | null | undefined | ArthurPropertyDefaultArgs> = $Result.GetResult<Prisma.$ArthurPropertyPayload, S>

  type ArthurPropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArthurPropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArthurPropertyCountAggregateInputType | true
    }

  export interface ArthurPropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArthurProperty'], meta: { name: 'ArthurProperty' } }
    /**
     * Find zero or one ArthurProperty that matches the filter.
     * @param {ArthurPropertyFindUniqueArgs} args - Arguments to find a ArthurProperty
     * @example
     * // Get one ArthurProperty
     * const arthurProperty = await prisma.arthurProperty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArthurPropertyFindUniqueArgs>(args: SelectSubset<T, ArthurPropertyFindUniqueArgs<ExtArgs>>): Prisma__ArthurPropertyClient<$Result.GetResult<Prisma.$ArthurPropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArthurProperty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArthurPropertyFindUniqueOrThrowArgs} args - Arguments to find a ArthurProperty
     * @example
     * // Get one ArthurProperty
     * const arthurProperty = await prisma.arthurProperty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArthurPropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, ArthurPropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArthurPropertyClient<$Result.GetResult<Prisma.$ArthurPropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArthurProperty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurPropertyFindFirstArgs} args - Arguments to find a ArthurProperty
     * @example
     * // Get one ArthurProperty
     * const arthurProperty = await prisma.arthurProperty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArthurPropertyFindFirstArgs>(args?: SelectSubset<T, ArthurPropertyFindFirstArgs<ExtArgs>>): Prisma__ArthurPropertyClient<$Result.GetResult<Prisma.$ArthurPropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArthurProperty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurPropertyFindFirstOrThrowArgs} args - Arguments to find a ArthurProperty
     * @example
     * // Get one ArthurProperty
     * const arthurProperty = await prisma.arthurProperty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArthurPropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, ArthurPropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArthurPropertyClient<$Result.GetResult<Prisma.$ArthurPropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArthurProperties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurPropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArthurProperties
     * const arthurProperties = await prisma.arthurProperty.findMany()
     * 
     * // Get first 10 ArthurProperties
     * const arthurProperties = await prisma.arthurProperty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arthurPropertyWithIdOnly = await prisma.arthurProperty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArthurPropertyFindManyArgs>(args?: SelectSubset<T, ArthurPropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArthurPropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArthurProperty.
     * @param {ArthurPropertyCreateArgs} args - Arguments to create a ArthurProperty.
     * @example
     * // Create one ArthurProperty
     * const ArthurProperty = await prisma.arthurProperty.create({
     *   data: {
     *     // ... data to create a ArthurProperty
     *   }
     * })
     * 
     */
    create<T extends ArthurPropertyCreateArgs>(args: SelectSubset<T, ArthurPropertyCreateArgs<ExtArgs>>): Prisma__ArthurPropertyClient<$Result.GetResult<Prisma.$ArthurPropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArthurProperties.
     * @param {ArthurPropertyCreateManyArgs} args - Arguments to create many ArthurProperties.
     * @example
     * // Create many ArthurProperties
     * const arthurProperty = await prisma.arthurProperty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArthurPropertyCreateManyArgs>(args?: SelectSubset<T, ArthurPropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArthurProperties and returns the data saved in the database.
     * @param {ArthurPropertyCreateManyAndReturnArgs} args - Arguments to create many ArthurProperties.
     * @example
     * // Create many ArthurProperties
     * const arthurProperty = await prisma.arthurProperty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArthurProperties and only return the `id`
     * const arthurPropertyWithIdOnly = await prisma.arthurProperty.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArthurPropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, ArthurPropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArthurPropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArthurProperty.
     * @param {ArthurPropertyDeleteArgs} args - Arguments to delete one ArthurProperty.
     * @example
     * // Delete one ArthurProperty
     * const ArthurProperty = await prisma.arthurProperty.delete({
     *   where: {
     *     // ... filter to delete one ArthurProperty
     *   }
     * })
     * 
     */
    delete<T extends ArthurPropertyDeleteArgs>(args: SelectSubset<T, ArthurPropertyDeleteArgs<ExtArgs>>): Prisma__ArthurPropertyClient<$Result.GetResult<Prisma.$ArthurPropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArthurProperty.
     * @param {ArthurPropertyUpdateArgs} args - Arguments to update one ArthurProperty.
     * @example
     * // Update one ArthurProperty
     * const arthurProperty = await prisma.arthurProperty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArthurPropertyUpdateArgs>(args: SelectSubset<T, ArthurPropertyUpdateArgs<ExtArgs>>): Prisma__ArthurPropertyClient<$Result.GetResult<Prisma.$ArthurPropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArthurProperties.
     * @param {ArthurPropertyDeleteManyArgs} args - Arguments to filter ArthurProperties to delete.
     * @example
     * // Delete a few ArthurProperties
     * const { count } = await prisma.arthurProperty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArthurPropertyDeleteManyArgs>(args?: SelectSubset<T, ArthurPropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArthurProperties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurPropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArthurProperties
     * const arthurProperty = await prisma.arthurProperty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArthurPropertyUpdateManyArgs>(args: SelectSubset<T, ArthurPropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArthurProperties and returns the data updated in the database.
     * @param {ArthurPropertyUpdateManyAndReturnArgs} args - Arguments to update many ArthurProperties.
     * @example
     * // Update many ArthurProperties
     * const arthurProperty = await prisma.arthurProperty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArthurProperties and only return the `id`
     * const arthurPropertyWithIdOnly = await prisma.arthurProperty.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArthurPropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, ArthurPropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArthurPropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArthurProperty.
     * @param {ArthurPropertyUpsertArgs} args - Arguments to update or create a ArthurProperty.
     * @example
     * // Update or create a ArthurProperty
     * const arthurProperty = await prisma.arthurProperty.upsert({
     *   create: {
     *     // ... data to create a ArthurProperty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArthurProperty we want to update
     *   }
     * })
     */
    upsert<T extends ArthurPropertyUpsertArgs>(args: SelectSubset<T, ArthurPropertyUpsertArgs<ExtArgs>>): Prisma__ArthurPropertyClient<$Result.GetResult<Prisma.$ArthurPropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArthurProperties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurPropertyCountArgs} args - Arguments to filter ArthurProperties to count.
     * @example
     * // Count the number of ArthurProperties
     * const count = await prisma.arthurProperty.count({
     *   where: {
     *     // ... the filter for the ArthurProperties we want to count
     *   }
     * })
    **/
    count<T extends ArthurPropertyCountArgs>(
      args?: Subset<T, ArthurPropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArthurPropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArthurProperty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurPropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArthurPropertyAggregateArgs>(args: Subset<T, ArthurPropertyAggregateArgs>): Prisma.PrismaPromise<GetArthurPropertyAggregateType<T>>

    /**
     * Group by ArthurProperty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurPropertyGroupByArgs} args - Group by arguments.
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
      T extends ArthurPropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArthurPropertyGroupByArgs['orderBy'] }
        : { orderBy?: ArthurPropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArthurPropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArthurPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArthurProperty model
   */
  readonly fields: ArthurPropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArthurProperty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArthurPropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    units<T extends ArthurProperty$unitsArgs<ExtArgs> = {}>(args?: Subset<T, ArthurProperty$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArthurUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArthurProperty model
   */
  interface ArthurPropertyFieldRefs {
    readonly id: FieldRef<"ArthurProperty", 'String'>
    readonly name: FieldRef<"ArthurProperty", 'String'>
    readonly address: FieldRef<"ArthurProperty", 'String'>
    readonly createdAt: FieldRef<"ArthurProperty", 'DateTime'>
    readonly updatedAt: FieldRef<"ArthurProperty", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArthurProperty findUnique
   */
  export type ArthurPropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurProperty
     */
    select?: ArthurPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurProperty
     */
    omit?: ArthurPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurPropertyInclude<ExtArgs> | null
    /**
     * Filter, which ArthurProperty to fetch.
     */
    where: ArthurPropertyWhereUniqueInput
  }

  /**
   * ArthurProperty findUniqueOrThrow
   */
  export type ArthurPropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurProperty
     */
    select?: ArthurPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurProperty
     */
    omit?: ArthurPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurPropertyInclude<ExtArgs> | null
    /**
     * Filter, which ArthurProperty to fetch.
     */
    where: ArthurPropertyWhereUniqueInput
  }

  /**
   * ArthurProperty findFirst
   */
  export type ArthurPropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurProperty
     */
    select?: ArthurPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurProperty
     */
    omit?: ArthurPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurPropertyInclude<ExtArgs> | null
    /**
     * Filter, which ArthurProperty to fetch.
     */
    where?: ArthurPropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArthurProperties to fetch.
     */
    orderBy?: ArthurPropertyOrderByWithRelationInput | ArthurPropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArthurProperties.
     */
    cursor?: ArthurPropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArthurProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArthurProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArthurProperties.
     */
    distinct?: ArthurPropertyScalarFieldEnum | ArthurPropertyScalarFieldEnum[]
  }

  /**
   * ArthurProperty findFirstOrThrow
   */
  export type ArthurPropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurProperty
     */
    select?: ArthurPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurProperty
     */
    omit?: ArthurPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurPropertyInclude<ExtArgs> | null
    /**
     * Filter, which ArthurProperty to fetch.
     */
    where?: ArthurPropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArthurProperties to fetch.
     */
    orderBy?: ArthurPropertyOrderByWithRelationInput | ArthurPropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArthurProperties.
     */
    cursor?: ArthurPropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArthurProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArthurProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArthurProperties.
     */
    distinct?: ArthurPropertyScalarFieldEnum | ArthurPropertyScalarFieldEnum[]
  }

  /**
   * ArthurProperty findMany
   */
  export type ArthurPropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurProperty
     */
    select?: ArthurPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurProperty
     */
    omit?: ArthurPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurPropertyInclude<ExtArgs> | null
    /**
     * Filter, which ArthurProperties to fetch.
     */
    where?: ArthurPropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArthurProperties to fetch.
     */
    orderBy?: ArthurPropertyOrderByWithRelationInput | ArthurPropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArthurProperties.
     */
    cursor?: ArthurPropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArthurProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArthurProperties.
     */
    skip?: number
    distinct?: ArthurPropertyScalarFieldEnum | ArthurPropertyScalarFieldEnum[]
  }

  /**
   * ArthurProperty create
   */
  export type ArthurPropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurProperty
     */
    select?: ArthurPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurProperty
     */
    omit?: ArthurPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurPropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a ArthurProperty.
     */
    data: XOR<ArthurPropertyCreateInput, ArthurPropertyUncheckedCreateInput>
  }

  /**
   * ArthurProperty createMany
   */
  export type ArthurPropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArthurProperties.
     */
    data: ArthurPropertyCreateManyInput | ArthurPropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArthurProperty createManyAndReturn
   */
  export type ArthurPropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurProperty
     */
    select?: ArthurPropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurProperty
     */
    omit?: ArthurPropertyOmit<ExtArgs> | null
    /**
     * The data used to create many ArthurProperties.
     */
    data: ArthurPropertyCreateManyInput | ArthurPropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArthurProperty update
   */
  export type ArthurPropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurProperty
     */
    select?: ArthurPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurProperty
     */
    omit?: ArthurPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurPropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a ArthurProperty.
     */
    data: XOR<ArthurPropertyUpdateInput, ArthurPropertyUncheckedUpdateInput>
    /**
     * Choose, which ArthurProperty to update.
     */
    where: ArthurPropertyWhereUniqueInput
  }

  /**
   * ArthurProperty updateMany
   */
  export type ArthurPropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArthurProperties.
     */
    data: XOR<ArthurPropertyUpdateManyMutationInput, ArthurPropertyUncheckedUpdateManyInput>
    /**
     * Filter which ArthurProperties to update
     */
    where?: ArthurPropertyWhereInput
    /**
     * Limit how many ArthurProperties to update.
     */
    limit?: number
  }

  /**
   * ArthurProperty updateManyAndReturn
   */
  export type ArthurPropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurProperty
     */
    select?: ArthurPropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurProperty
     */
    omit?: ArthurPropertyOmit<ExtArgs> | null
    /**
     * The data used to update ArthurProperties.
     */
    data: XOR<ArthurPropertyUpdateManyMutationInput, ArthurPropertyUncheckedUpdateManyInput>
    /**
     * Filter which ArthurProperties to update
     */
    where?: ArthurPropertyWhereInput
    /**
     * Limit how many ArthurProperties to update.
     */
    limit?: number
  }

  /**
   * ArthurProperty upsert
   */
  export type ArthurPropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurProperty
     */
    select?: ArthurPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurProperty
     */
    omit?: ArthurPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurPropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the ArthurProperty to update in case it exists.
     */
    where: ArthurPropertyWhereUniqueInput
    /**
     * In case the ArthurProperty found by the `where` argument doesn't exist, create a new ArthurProperty with this data.
     */
    create: XOR<ArthurPropertyCreateInput, ArthurPropertyUncheckedCreateInput>
    /**
     * In case the ArthurProperty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArthurPropertyUpdateInput, ArthurPropertyUncheckedUpdateInput>
  }

  /**
   * ArthurProperty delete
   */
  export type ArthurPropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurProperty
     */
    select?: ArthurPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurProperty
     */
    omit?: ArthurPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurPropertyInclude<ExtArgs> | null
    /**
     * Filter which ArthurProperty to delete.
     */
    where: ArthurPropertyWhereUniqueInput
  }

  /**
   * ArthurProperty deleteMany
   */
  export type ArthurPropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArthurProperties to delete
     */
    where?: ArthurPropertyWhereInput
    /**
     * Limit how many ArthurProperties to delete.
     */
    limit?: number
  }

  /**
   * ArthurProperty.units
   */
  export type ArthurProperty$unitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurUnit
     */
    select?: ArthurUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurUnit
     */
    omit?: ArthurUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurUnitInclude<ExtArgs> | null
    where?: ArthurUnitWhereInput
    orderBy?: ArthurUnitOrderByWithRelationInput | ArthurUnitOrderByWithRelationInput[]
    cursor?: ArthurUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArthurUnitScalarFieldEnum | ArthurUnitScalarFieldEnum[]
  }

  /**
   * ArthurProperty without action
   */
  export type ArthurPropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurProperty
     */
    select?: ArthurPropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurProperty
     */
    omit?: ArthurPropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurPropertyInclude<ExtArgs> | null
  }


  /**
   * Model ArthurUnit
   */

  export type AggregateArthurUnit = {
    _count: ArthurUnitCountAggregateOutputType | null
    _avg: ArthurUnitAvgAggregateOutputType | null
    _sum: ArthurUnitSumAggregateOutputType | null
    _min: ArthurUnitMinAggregateOutputType | null
    _max: ArthurUnitMaxAggregateOutputType | null
  }

  export type ArthurUnitAvgAggregateOutputType = {
    epcScore: number | null
  }

  export type ArthurUnitSumAggregateOutputType = {
    epcScore: number | null
  }

  export type ArthurUnitMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    name: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    landlordEntity: string | null
    referenceCode: string | null
    bankName: string | null
    sortCode: string | null
    accountNumber: string | null
    accountName: string | null
    epcRating: string | null
    epcScore: number | null
    epcCertificate: string | null
    epcAssessedDate: string | null
    epcExpiryDate: string | null
    epcAssessor: string | null
    eicSerial: string | null
    eicInspectedDate: string | null
    eicExpiryDate: string | null
    insurancePolicy: string | null
    insuranceStartDate: string | null
    insuranceStatus: string | null
    elecMeterSerial: string | null
    elecMeterCheckInValue: string | null
    elecMeterCheckInDate: string | null
    waterMeterSerial: string | null
    waterMeterCheckInValue: string | null
    waterMeterCheckInDate: string | null
    complianceNotes: string | null
  }

  export type ArthurUnitMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    name: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    landlordEntity: string | null
    referenceCode: string | null
    bankName: string | null
    sortCode: string | null
    accountNumber: string | null
    accountName: string | null
    epcRating: string | null
    epcScore: number | null
    epcCertificate: string | null
    epcAssessedDate: string | null
    epcExpiryDate: string | null
    epcAssessor: string | null
    eicSerial: string | null
    eicInspectedDate: string | null
    eicExpiryDate: string | null
    insurancePolicy: string | null
    insuranceStartDate: string | null
    insuranceStatus: string | null
    elecMeterSerial: string | null
    elecMeterCheckInValue: string | null
    elecMeterCheckInDate: string | null
    waterMeterSerial: string | null
    waterMeterCheckInValue: string | null
    waterMeterCheckInDate: string | null
    complianceNotes: string | null
  }

  export type ArthurUnitCountAggregateOutputType = {
    id: number
    propertyId: number
    name: number
    status: number
    createdAt: number
    updatedAt: number
    landlordEntity: number
    referenceCode: number
    bankName: number
    sortCode: number
    accountNumber: number
    accountName: number
    epcRating: number
    epcScore: number
    epcCertificate: number
    epcAssessedDate: number
    epcExpiryDate: number
    epcAssessor: number
    eicSerial: number
    eicInspectedDate: number
    eicExpiryDate: number
    insurancePolicy: number
    insuranceStartDate: number
    insuranceStatus: number
    elecMeterSerial: number
    elecMeterCheckInValue: number
    elecMeterCheckInDate: number
    waterMeterSerial: number
    waterMeterCheckInValue: number
    waterMeterCheckInDate: number
    outstandingDocs: number
    complianceNotes: number
    _all: number
  }


  export type ArthurUnitAvgAggregateInputType = {
    epcScore?: true
  }

  export type ArthurUnitSumAggregateInputType = {
    epcScore?: true
  }

  export type ArthurUnitMinAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    landlordEntity?: true
    referenceCode?: true
    bankName?: true
    sortCode?: true
    accountNumber?: true
    accountName?: true
    epcRating?: true
    epcScore?: true
    epcCertificate?: true
    epcAssessedDate?: true
    epcExpiryDate?: true
    epcAssessor?: true
    eicSerial?: true
    eicInspectedDate?: true
    eicExpiryDate?: true
    insurancePolicy?: true
    insuranceStartDate?: true
    insuranceStatus?: true
    elecMeterSerial?: true
    elecMeterCheckInValue?: true
    elecMeterCheckInDate?: true
    waterMeterSerial?: true
    waterMeterCheckInValue?: true
    waterMeterCheckInDate?: true
    complianceNotes?: true
  }

  export type ArthurUnitMaxAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    landlordEntity?: true
    referenceCode?: true
    bankName?: true
    sortCode?: true
    accountNumber?: true
    accountName?: true
    epcRating?: true
    epcScore?: true
    epcCertificate?: true
    epcAssessedDate?: true
    epcExpiryDate?: true
    epcAssessor?: true
    eicSerial?: true
    eicInspectedDate?: true
    eicExpiryDate?: true
    insurancePolicy?: true
    insuranceStartDate?: true
    insuranceStatus?: true
    elecMeterSerial?: true
    elecMeterCheckInValue?: true
    elecMeterCheckInDate?: true
    waterMeterSerial?: true
    waterMeterCheckInValue?: true
    waterMeterCheckInDate?: true
    complianceNotes?: true
  }

  export type ArthurUnitCountAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    landlordEntity?: true
    referenceCode?: true
    bankName?: true
    sortCode?: true
    accountNumber?: true
    accountName?: true
    epcRating?: true
    epcScore?: true
    epcCertificate?: true
    epcAssessedDate?: true
    epcExpiryDate?: true
    epcAssessor?: true
    eicSerial?: true
    eicInspectedDate?: true
    eicExpiryDate?: true
    insurancePolicy?: true
    insuranceStartDate?: true
    insuranceStatus?: true
    elecMeterSerial?: true
    elecMeterCheckInValue?: true
    elecMeterCheckInDate?: true
    waterMeterSerial?: true
    waterMeterCheckInValue?: true
    waterMeterCheckInDate?: true
    outstandingDocs?: true
    complianceNotes?: true
    _all?: true
  }

  export type ArthurUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArthurUnit to aggregate.
     */
    where?: ArthurUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArthurUnits to fetch.
     */
    orderBy?: ArthurUnitOrderByWithRelationInput | ArthurUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArthurUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArthurUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArthurUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArthurUnits
    **/
    _count?: true | ArthurUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArthurUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArthurUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArthurUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArthurUnitMaxAggregateInputType
  }

  export type GetArthurUnitAggregateType<T extends ArthurUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateArthurUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArthurUnit[P]>
      : GetScalarType<T[P], AggregateArthurUnit[P]>
  }




  export type ArthurUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArthurUnitWhereInput
    orderBy?: ArthurUnitOrderByWithAggregationInput | ArthurUnitOrderByWithAggregationInput[]
    by: ArthurUnitScalarFieldEnum[] | ArthurUnitScalarFieldEnum
    having?: ArthurUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArthurUnitCountAggregateInputType | true
    _avg?: ArthurUnitAvgAggregateInputType
    _sum?: ArthurUnitSumAggregateInputType
    _min?: ArthurUnitMinAggregateInputType
    _max?: ArthurUnitMaxAggregateInputType
  }

  export type ArthurUnitGroupByOutputType = {
    id: string
    propertyId: string
    name: string
    status: string
    createdAt: Date
    updatedAt: Date
    landlordEntity: string | null
    referenceCode: string | null
    bankName: string | null
    sortCode: string | null
    accountNumber: string | null
    accountName: string | null
    epcRating: string | null
    epcScore: number | null
    epcCertificate: string | null
    epcAssessedDate: string | null
    epcExpiryDate: string | null
    epcAssessor: string | null
    eicSerial: string | null
    eicInspectedDate: string | null
    eicExpiryDate: string | null
    insurancePolicy: string | null
    insuranceStartDate: string | null
    insuranceStatus: string | null
    elecMeterSerial: string | null
    elecMeterCheckInValue: string | null
    elecMeterCheckInDate: string | null
    waterMeterSerial: string | null
    waterMeterCheckInValue: string | null
    waterMeterCheckInDate: string | null
    outstandingDocs: string[]
    complianceNotes: string | null
    _count: ArthurUnitCountAggregateOutputType | null
    _avg: ArthurUnitAvgAggregateOutputType | null
    _sum: ArthurUnitSumAggregateOutputType | null
    _min: ArthurUnitMinAggregateOutputType | null
    _max: ArthurUnitMaxAggregateOutputType | null
  }

  type GetArthurUnitGroupByPayload<T extends ArthurUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArthurUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArthurUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArthurUnitGroupByOutputType[P]>
            : GetScalarType<T[P], ArthurUnitGroupByOutputType[P]>
        }
      >
    >


  export type ArthurUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    landlordEntity?: boolean
    referenceCode?: boolean
    bankName?: boolean
    sortCode?: boolean
    accountNumber?: boolean
    accountName?: boolean
    epcRating?: boolean
    epcScore?: boolean
    epcCertificate?: boolean
    epcAssessedDate?: boolean
    epcExpiryDate?: boolean
    epcAssessor?: boolean
    eicSerial?: boolean
    eicInspectedDate?: boolean
    eicExpiryDate?: boolean
    insurancePolicy?: boolean
    insuranceStartDate?: boolean
    insuranceStatus?: boolean
    elecMeterSerial?: boolean
    elecMeterCheckInValue?: boolean
    elecMeterCheckInDate?: boolean
    waterMeterSerial?: boolean
    waterMeterCheckInValue?: boolean
    waterMeterCheckInDate?: boolean
    outstandingDocs?: boolean
    complianceNotes?: boolean
    tenancies?: boolean | ArthurUnit$tenanciesArgs<ExtArgs>
    property?: boolean | ArthurPropertyDefaultArgs<ExtArgs>
    _count?: boolean | ArthurUnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arthurUnit"]>

  export type ArthurUnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    landlordEntity?: boolean
    referenceCode?: boolean
    bankName?: boolean
    sortCode?: boolean
    accountNumber?: boolean
    accountName?: boolean
    epcRating?: boolean
    epcScore?: boolean
    epcCertificate?: boolean
    epcAssessedDate?: boolean
    epcExpiryDate?: boolean
    epcAssessor?: boolean
    eicSerial?: boolean
    eicInspectedDate?: boolean
    eicExpiryDate?: boolean
    insurancePolicy?: boolean
    insuranceStartDate?: boolean
    insuranceStatus?: boolean
    elecMeterSerial?: boolean
    elecMeterCheckInValue?: boolean
    elecMeterCheckInDate?: boolean
    waterMeterSerial?: boolean
    waterMeterCheckInValue?: boolean
    waterMeterCheckInDate?: boolean
    outstandingDocs?: boolean
    complianceNotes?: boolean
    property?: boolean | ArthurPropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arthurUnit"]>

  export type ArthurUnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    landlordEntity?: boolean
    referenceCode?: boolean
    bankName?: boolean
    sortCode?: boolean
    accountNumber?: boolean
    accountName?: boolean
    epcRating?: boolean
    epcScore?: boolean
    epcCertificate?: boolean
    epcAssessedDate?: boolean
    epcExpiryDate?: boolean
    epcAssessor?: boolean
    eicSerial?: boolean
    eicInspectedDate?: boolean
    eicExpiryDate?: boolean
    insurancePolicy?: boolean
    insuranceStartDate?: boolean
    insuranceStatus?: boolean
    elecMeterSerial?: boolean
    elecMeterCheckInValue?: boolean
    elecMeterCheckInDate?: boolean
    waterMeterSerial?: boolean
    waterMeterCheckInValue?: boolean
    waterMeterCheckInDate?: boolean
    outstandingDocs?: boolean
    complianceNotes?: boolean
    property?: boolean | ArthurPropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arthurUnit"]>

  export type ArthurUnitSelectScalar = {
    id?: boolean
    propertyId?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    landlordEntity?: boolean
    referenceCode?: boolean
    bankName?: boolean
    sortCode?: boolean
    accountNumber?: boolean
    accountName?: boolean
    epcRating?: boolean
    epcScore?: boolean
    epcCertificate?: boolean
    epcAssessedDate?: boolean
    epcExpiryDate?: boolean
    epcAssessor?: boolean
    eicSerial?: boolean
    eicInspectedDate?: boolean
    eicExpiryDate?: boolean
    insurancePolicy?: boolean
    insuranceStartDate?: boolean
    insuranceStatus?: boolean
    elecMeterSerial?: boolean
    elecMeterCheckInValue?: boolean
    elecMeterCheckInDate?: boolean
    waterMeterSerial?: boolean
    waterMeterCheckInValue?: boolean
    waterMeterCheckInDate?: boolean
    outstandingDocs?: boolean
    complianceNotes?: boolean
  }

  export type ArthurUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "name" | "status" | "createdAt" | "updatedAt" | "landlordEntity" | "referenceCode" | "bankName" | "sortCode" | "accountNumber" | "accountName" | "epcRating" | "epcScore" | "epcCertificate" | "epcAssessedDate" | "epcExpiryDate" | "epcAssessor" | "eicSerial" | "eicInspectedDate" | "eicExpiryDate" | "insurancePolicy" | "insuranceStartDate" | "insuranceStatus" | "elecMeterSerial" | "elecMeterCheckInValue" | "elecMeterCheckInDate" | "waterMeterSerial" | "waterMeterCheckInValue" | "waterMeterCheckInDate" | "outstandingDocs" | "complianceNotes", ExtArgs["result"]["arthurUnit"]>
  export type ArthurUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenancies?: boolean | ArthurUnit$tenanciesArgs<ExtArgs>
    property?: boolean | ArthurPropertyDefaultArgs<ExtArgs>
    _count?: boolean | ArthurUnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArthurUnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | ArthurPropertyDefaultArgs<ExtArgs>
  }
  export type ArthurUnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | ArthurPropertyDefaultArgs<ExtArgs>
  }

  export type $ArthurUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArthurUnit"
    objects: {
      tenancies: Prisma.$ArthurTenancyPayload<ExtArgs>[]
      property: Prisma.$ArthurPropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      name: string
      status: string
      createdAt: Date
      updatedAt: Date
      landlordEntity: string | null
      referenceCode: string | null
      bankName: string | null
      sortCode: string | null
      accountNumber: string | null
      accountName: string | null
      epcRating: string | null
      epcScore: number | null
      epcCertificate: string | null
      epcAssessedDate: string | null
      epcExpiryDate: string | null
      epcAssessor: string | null
      eicSerial: string | null
      eicInspectedDate: string | null
      eicExpiryDate: string | null
      insurancePolicy: string | null
      insuranceStartDate: string | null
      insuranceStatus: string | null
      elecMeterSerial: string | null
      elecMeterCheckInValue: string | null
      elecMeterCheckInDate: string | null
      waterMeterSerial: string | null
      waterMeterCheckInValue: string | null
      waterMeterCheckInDate: string | null
      outstandingDocs: string[]
      complianceNotes: string | null
    }, ExtArgs["result"]["arthurUnit"]>
    composites: {}
  }

  type ArthurUnitGetPayload<S extends boolean | null | undefined | ArthurUnitDefaultArgs> = $Result.GetResult<Prisma.$ArthurUnitPayload, S>

  type ArthurUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArthurUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArthurUnitCountAggregateInputType | true
    }

  export interface ArthurUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArthurUnit'], meta: { name: 'ArthurUnit' } }
    /**
     * Find zero or one ArthurUnit that matches the filter.
     * @param {ArthurUnitFindUniqueArgs} args - Arguments to find a ArthurUnit
     * @example
     * // Get one ArthurUnit
     * const arthurUnit = await prisma.arthurUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArthurUnitFindUniqueArgs>(args: SelectSubset<T, ArthurUnitFindUniqueArgs<ExtArgs>>): Prisma__ArthurUnitClient<$Result.GetResult<Prisma.$ArthurUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArthurUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArthurUnitFindUniqueOrThrowArgs} args - Arguments to find a ArthurUnit
     * @example
     * // Get one ArthurUnit
     * const arthurUnit = await prisma.arthurUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArthurUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, ArthurUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArthurUnitClient<$Result.GetResult<Prisma.$ArthurUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArthurUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurUnitFindFirstArgs} args - Arguments to find a ArthurUnit
     * @example
     * // Get one ArthurUnit
     * const arthurUnit = await prisma.arthurUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArthurUnitFindFirstArgs>(args?: SelectSubset<T, ArthurUnitFindFirstArgs<ExtArgs>>): Prisma__ArthurUnitClient<$Result.GetResult<Prisma.$ArthurUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArthurUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurUnitFindFirstOrThrowArgs} args - Arguments to find a ArthurUnit
     * @example
     * // Get one ArthurUnit
     * const arthurUnit = await prisma.arthurUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArthurUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, ArthurUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArthurUnitClient<$Result.GetResult<Prisma.$ArthurUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArthurUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArthurUnits
     * const arthurUnits = await prisma.arthurUnit.findMany()
     * 
     * // Get first 10 ArthurUnits
     * const arthurUnits = await prisma.arthurUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arthurUnitWithIdOnly = await prisma.arthurUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArthurUnitFindManyArgs>(args?: SelectSubset<T, ArthurUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArthurUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArthurUnit.
     * @param {ArthurUnitCreateArgs} args - Arguments to create a ArthurUnit.
     * @example
     * // Create one ArthurUnit
     * const ArthurUnit = await prisma.arthurUnit.create({
     *   data: {
     *     // ... data to create a ArthurUnit
     *   }
     * })
     * 
     */
    create<T extends ArthurUnitCreateArgs>(args: SelectSubset<T, ArthurUnitCreateArgs<ExtArgs>>): Prisma__ArthurUnitClient<$Result.GetResult<Prisma.$ArthurUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArthurUnits.
     * @param {ArthurUnitCreateManyArgs} args - Arguments to create many ArthurUnits.
     * @example
     * // Create many ArthurUnits
     * const arthurUnit = await prisma.arthurUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArthurUnitCreateManyArgs>(args?: SelectSubset<T, ArthurUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArthurUnits and returns the data saved in the database.
     * @param {ArthurUnitCreateManyAndReturnArgs} args - Arguments to create many ArthurUnits.
     * @example
     * // Create many ArthurUnits
     * const arthurUnit = await prisma.arthurUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArthurUnits and only return the `id`
     * const arthurUnitWithIdOnly = await prisma.arthurUnit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArthurUnitCreateManyAndReturnArgs>(args?: SelectSubset<T, ArthurUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArthurUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArthurUnit.
     * @param {ArthurUnitDeleteArgs} args - Arguments to delete one ArthurUnit.
     * @example
     * // Delete one ArthurUnit
     * const ArthurUnit = await prisma.arthurUnit.delete({
     *   where: {
     *     // ... filter to delete one ArthurUnit
     *   }
     * })
     * 
     */
    delete<T extends ArthurUnitDeleteArgs>(args: SelectSubset<T, ArthurUnitDeleteArgs<ExtArgs>>): Prisma__ArthurUnitClient<$Result.GetResult<Prisma.$ArthurUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArthurUnit.
     * @param {ArthurUnitUpdateArgs} args - Arguments to update one ArthurUnit.
     * @example
     * // Update one ArthurUnit
     * const arthurUnit = await prisma.arthurUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArthurUnitUpdateArgs>(args: SelectSubset<T, ArthurUnitUpdateArgs<ExtArgs>>): Prisma__ArthurUnitClient<$Result.GetResult<Prisma.$ArthurUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArthurUnits.
     * @param {ArthurUnitDeleteManyArgs} args - Arguments to filter ArthurUnits to delete.
     * @example
     * // Delete a few ArthurUnits
     * const { count } = await prisma.arthurUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArthurUnitDeleteManyArgs>(args?: SelectSubset<T, ArthurUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArthurUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArthurUnits
     * const arthurUnit = await prisma.arthurUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArthurUnitUpdateManyArgs>(args: SelectSubset<T, ArthurUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArthurUnits and returns the data updated in the database.
     * @param {ArthurUnitUpdateManyAndReturnArgs} args - Arguments to update many ArthurUnits.
     * @example
     * // Update many ArthurUnits
     * const arthurUnit = await prisma.arthurUnit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArthurUnits and only return the `id`
     * const arthurUnitWithIdOnly = await prisma.arthurUnit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArthurUnitUpdateManyAndReturnArgs>(args: SelectSubset<T, ArthurUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArthurUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArthurUnit.
     * @param {ArthurUnitUpsertArgs} args - Arguments to update or create a ArthurUnit.
     * @example
     * // Update or create a ArthurUnit
     * const arthurUnit = await prisma.arthurUnit.upsert({
     *   create: {
     *     // ... data to create a ArthurUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArthurUnit we want to update
     *   }
     * })
     */
    upsert<T extends ArthurUnitUpsertArgs>(args: SelectSubset<T, ArthurUnitUpsertArgs<ExtArgs>>): Prisma__ArthurUnitClient<$Result.GetResult<Prisma.$ArthurUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArthurUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurUnitCountArgs} args - Arguments to filter ArthurUnits to count.
     * @example
     * // Count the number of ArthurUnits
     * const count = await prisma.arthurUnit.count({
     *   where: {
     *     // ... the filter for the ArthurUnits we want to count
     *   }
     * })
    **/
    count<T extends ArthurUnitCountArgs>(
      args?: Subset<T, ArthurUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArthurUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArthurUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArthurUnitAggregateArgs>(args: Subset<T, ArthurUnitAggregateArgs>): Prisma.PrismaPromise<GetArthurUnitAggregateType<T>>

    /**
     * Group by ArthurUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurUnitGroupByArgs} args - Group by arguments.
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
      T extends ArthurUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArthurUnitGroupByArgs['orderBy'] }
        : { orderBy?: ArthurUnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArthurUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArthurUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArthurUnit model
   */
  readonly fields: ArthurUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArthurUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArthurUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenancies<T extends ArthurUnit$tenanciesArgs<ExtArgs> = {}>(args?: Subset<T, ArthurUnit$tenanciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArthurTenancyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    property<T extends ArthurPropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArthurPropertyDefaultArgs<ExtArgs>>): Prisma__ArthurPropertyClient<$Result.GetResult<Prisma.$ArthurPropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArthurUnit model
   */
  interface ArthurUnitFieldRefs {
    readonly id: FieldRef<"ArthurUnit", 'String'>
    readonly propertyId: FieldRef<"ArthurUnit", 'String'>
    readonly name: FieldRef<"ArthurUnit", 'String'>
    readonly status: FieldRef<"ArthurUnit", 'String'>
    readonly createdAt: FieldRef<"ArthurUnit", 'DateTime'>
    readonly updatedAt: FieldRef<"ArthurUnit", 'DateTime'>
    readonly landlordEntity: FieldRef<"ArthurUnit", 'String'>
    readonly referenceCode: FieldRef<"ArthurUnit", 'String'>
    readonly bankName: FieldRef<"ArthurUnit", 'String'>
    readonly sortCode: FieldRef<"ArthurUnit", 'String'>
    readonly accountNumber: FieldRef<"ArthurUnit", 'String'>
    readonly accountName: FieldRef<"ArthurUnit", 'String'>
    readonly epcRating: FieldRef<"ArthurUnit", 'String'>
    readonly epcScore: FieldRef<"ArthurUnit", 'Int'>
    readonly epcCertificate: FieldRef<"ArthurUnit", 'String'>
    readonly epcAssessedDate: FieldRef<"ArthurUnit", 'String'>
    readonly epcExpiryDate: FieldRef<"ArthurUnit", 'String'>
    readonly epcAssessor: FieldRef<"ArthurUnit", 'String'>
    readonly eicSerial: FieldRef<"ArthurUnit", 'String'>
    readonly eicInspectedDate: FieldRef<"ArthurUnit", 'String'>
    readonly eicExpiryDate: FieldRef<"ArthurUnit", 'String'>
    readonly insurancePolicy: FieldRef<"ArthurUnit", 'String'>
    readonly insuranceStartDate: FieldRef<"ArthurUnit", 'String'>
    readonly insuranceStatus: FieldRef<"ArthurUnit", 'String'>
    readonly elecMeterSerial: FieldRef<"ArthurUnit", 'String'>
    readonly elecMeterCheckInValue: FieldRef<"ArthurUnit", 'String'>
    readonly elecMeterCheckInDate: FieldRef<"ArthurUnit", 'String'>
    readonly waterMeterSerial: FieldRef<"ArthurUnit", 'String'>
    readonly waterMeterCheckInValue: FieldRef<"ArthurUnit", 'String'>
    readonly waterMeterCheckInDate: FieldRef<"ArthurUnit", 'String'>
    readonly outstandingDocs: FieldRef<"ArthurUnit", 'String[]'>
    readonly complianceNotes: FieldRef<"ArthurUnit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ArthurUnit findUnique
   */
  export type ArthurUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurUnit
     */
    select?: ArthurUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurUnit
     */
    omit?: ArthurUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurUnitInclude<ExtArgs> | null
    /**
     * Filter, which ArthurUnit to fetch.
     */
    where: ArthurUnitWhereUniqueInput
  }

  /**
   * ArthurUnit findUniqueOrThrow
   */
  export type ArthurUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurUnit
     */
    select?: ArthurUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurUnit
     */
    omit?: ArthurUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurUnitInclude<ExtArgs> | null
    /**
     * Filter, which ArthurUnit to fetch.
     */
    where: ArthurUnitWhereUniqueInput
  }

  /**
   * ArthurUnit findFirst
   */
  export type ArthurUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurUnit
     */
    select?: ArthurUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurUnit
     */
    omit?: ArthurUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurUnitInclude<ExtArgs> | null
    /**
     * Filter, which ArthurUnit to fetch.
     */
    where?: ArthurUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArthurUnits to fetch.
     */
    orderBy?: ArthurUnitOrderByWithRelationInput | ArthurUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArthurUnits.
     */
    cursor?: ArthurUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArthurUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArthurUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArthurUnits.
     */
    distinct?: ArthurUnitScalarFieldEnum | ArthurUnitScalarFieldEnum[]
  }

  /**
   * ArthurUnit findFirstOrThrow
   */
  export type ArthurUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurUnit
     */
    select?: ArthurUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurUnit
     */
    omit?: ArthurUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurUnitInclude<ExtArgs> | null
    /**
     * Filter, which ArthurUnit to fetch.
     */
    where?: ArthurUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArthurUnits to fetch.
     */
    orderBy?: ArthurUnitOrderByWithRelationInput | ArthurUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArthurUnits.
     */
    cursor?: ArthurUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArthurUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArthurUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArthurUnits.
     */
    distinct?: ArthurUnitScalarFieldEnum | ArthurUnitScalarFieldEnum[]
  }

  /**
   * ArthurUnit findMany
   */
  export type ArthurUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurUnit
     */
    select?: ArthurUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurUnit
     */
    omit?: ArthurUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurUnitInclude<ExtArgs> | null
    /**
     * Filter, which ArthurUnits to fetch.
     */
    where?: ArthurUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArthurUnits to fetch.
     */
    orderBy?: ArthurUnitOrderByWithRelationInput | ArthurUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArthurUnits.
     */
    cursor?: ArthurUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArthurUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArthurUnits.
     */
    skip?: number
    distinct?: ArthurUnitScalarFieldEnum | ArthurUnitScalarFieldEnum[]
  }

  /**
   * ArthurUnit create
   */
  export type ArthurUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurUnit
     */
    select?: ArthurUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurUnit
     */
    omit?: ArthurUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a ArthurUnit.
     */
    data: XOR<ArthurUnitCreateInput, ArthurUnitUncheckedCreateInput>
  }

  /**
   * ArthurUnit createMany
   */
  export type ArthurUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArthurUnits.
     */
    data: ArthurUnitCreateManyInput | ArthurUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArthurUnit createManyAndReturn
   */
  export type ArthurUnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurUnit
     */
    select?: ArthurUnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurUnit
     */
    omit?: ArthurUnitOmit<ExtArgs> | null
    /**
     * The data used to create many ArthurUnits.
     */
    data: ArthurUnitCreateManyInput | ArthurUnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurUnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArthurUnit update
   */
  export type ArthurUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurUnit
     */
    select?: ArthurUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurUnit
     */
    omit?: ArthurUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a ArthurUnit.
     */
    data: XOR<ArthurUnitUpdateInput, ArthurUnitUncheckedUpdateInput>
    /**
     * Choose, which ArthurUnit to update.
     */
    where: ArthurUnitWhereUniqueInput
  }

  /**
   * ArthurUnit updateMany
   */
  export type ArthurUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArthurUnits.
     */
    data: XOR<ArthurUnitUpdateManyMutationInput, ArthurUnitUncheckedUpdateManyInput>
    /**
     * Filter which ArthurUnits to update
     */
    where?: ArthurUnitWhereInput
    /**
     * Limit how many ArthurUnits to update.
     */
    limit?: number
  }

  /**
   * ArthurUnit updateManyAndReturn
   */
  export type ArthurUnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurUnit
     */
    select?: ArthurUnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurUnit
     */
    omit?: ArthurUnitOmit<ExtArgs> | null
    /**
     * The data used to update ArthurUnits.
     */
    data: XOR<ArthurUnitUpdateManyMutationInput, ArthurUnitUncheckedUpdateManyInput>
    /**
     * Filter which ArthurUnits to update
     */
    where?: ArthurUnitWhereInput
    /**
     * Limit how many ArthurUnits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurUnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArthurUnit upsert
   */
  export type ArthurUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurUnit
     */
    select?: ArthurUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurUnit
     */
    omit?: ArthurUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the ArthurUnit to update in case it exists.
     */
    where: ArthurUnitWhereUniqueInput
    /**
     * In case the ArthurUnit found by the `where` argument doesn't exist, create a new ArthurUnit with this data.
     */
    create: XOR<ArthurUnitCreateInput, ArthurUnitUncheckedCreateInput>
    /**
     * In case the ArthurUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArthurUnitUpdateInput, ArthurUnitUncheckedUpdateInput>
  }

  /**
   * ArthurUnit delete
   */
  export type ArthurUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurUnit
     */
    select?: ArthurUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurUnit
     */
    omit?: ArthurUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurUnitInclude<ExtArgs> | null
    /**
     * Filter which ArthurUnit to delete.
     */
    where: ArthurUnitWhereUniqueInput
  }

  /**
   * ArthurUnit deleteMany
   */
  export type ArthurUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArthurUnits to delete
     */
    where?: ArthurUnitWhereInput
    /**
     * Limit how many ArthurUnits to delete.
     */
    limit?: number
  }

  /**
   * ArthurUnit.tenancies
   */
  export type ArthurUnit$tenanciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurTenancy
     */
    select?: ArthurTenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurTenancy
     */
    omit?: ArthurTenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurTenancyInclude<ExtArgs> | null
    where?: ArthurTenancyWhereInput
    orderBy?: ArthurTenancyOrderByWithRelationInput | ArthurTenancyOrderByWithRelationInput[]
    cursor?: ArthurTenancyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArthurTenancyScalarFieldEnum | ArthurTenancyScalarFieldEnum[]
  }

  /**
   * ArthurUnit without action
   */
  export type ArthurUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurUnit
     */
    select?: ArthurUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurUnit
     */
    omit?: ArthurUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurUnitInclude<ExtArgs> | null
  }


  /**
   * Model ArthurTenancy
   */

  export type AggregateArthurTenancy = {
    _count: ArthurTenancyCountAggregateOutputType | null
    _avg: ArthurTenancyAvgAggregateOutputType | null
    _sum: ArthurTenancySumAggregateOutputType | null
    _min: ArthurTenancyMinAggregateOutputType | null
    _max: ArthurTenancyMaxAggregateOutputType | null
  }

  export type ArthurTenancyAvgAggregateOutputType = {
    rentVal: number | null
    depositVal: number | null
  }

  export type ArthurTenancySumAggregateOutputType = {
    rentVal: number | null
    depositVal: number | null
  }

  export type ArthurTenancyMinAggregateOutputType = {
    id: string | null
    unitId: string | null
    status: string | null
    startDate: string | null
    endDate: string | null
    rent: string | null
    rentVal: number | null
    deposit: string | null
    depositVal: number | null
    lodged: string | null
    received: string | null
    lettingType: string | null
    rentStatus: string | null
    commentary: string | null
    createdAt: Date | null
    updatedAt: Date | null
    address: string | null
    code: string | null
  }

  export type ArthurTenancyMaxAggregateOutputType = {
    id: string | null
    unitId: string | null
    status: string | null
    startDate: string | null
    endDate: string | null
    rent: string | null
    rentVal: number | null
    deposit: string | null
    depositVal: number | null
    lodged: string | null
    received: string | null
    lettingType: string | null
    rentStatus: string | null
    commentary: string | null
    createdAt: Date | null
    updatedAt: Date | null
    address: string | null
    code: string | null
  }

  export type ArthurTenancyCountAggregateOutputType = {
    id: number
    unitId: number
    status: number
    startDate: number
    endDate: number
    rent: number
    rentVal: number
    deposit: number
    depositVal: number
    lodged: number
    received: number
    tenants: number
    phone: number
    email: number
    lettingType: number
    rentStatus: number
    commentary: number
    createdAt: number
    updatedAt: number
    address: number
    code: number
    _all: number
  }


  export type ArthurTenancyAvgAggregateInputType = {
    rentVal?: true
    depositVal?: true
  }

  export type ArthurTenancySumAggregateInputType = {
    rentVal?: true
    depositVal?: true
  }

  export type ArthurTenancyMinAggregateInputType = {
    id?: true
    unitId?: true
    status?: true
    startDate?: true
    endDate?: true
    rent?: true
    rentVal?: true
    deposit?: true
    depositVal?: true
    lodged?: true
    received?: true
    lettingType?: true
    rentStatus?: true
    commentary?: true
    createdAt?: true
    updatedAt?: true
    address?: true
    code?: true
  }

  export type ArthurTenancyMaxAggregateInputType = {
    id?: true
    unitId?: true
    status?: true
    startDate?: true
    endDate?: true
    rent?: true
    rentVal?: true
    deposit?: true
    depositVal?: true
    lodged?: true
    received?: true
    lettingType?: true
    rentStatus?: true
    commentary?: true
    createdAt?: true
    updatedAt?: true
    address?: true
    code?: true
  }

  export type ArthurTenancyCountAggregateInputType = {
    id?: true
    unitId?: true
    status?: true
    startDate?: true
    endDate?: true
    rent?: true
    rentVal?: true
    deposit?: true
    depositVal?: true
    lodged?: true
    received?: true
    tenants?: true
    phone?: true
    email?: true
    lettingType?: true
    rentStatus?: true
    commentary?: true
    createdAt?: true
    updatedAt?: true
    address?: true
    code?: true
    _all?: true
  }

  export type ArthurTenancyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArthurTenancy to aggregate.
     */
    where?: ArthurTenancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArthurTenancies to fetch.
     */
    orderBy?: ArthurTenancyOrderByWithRelationInput | ArthurTenancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArthurTenancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArthurTenancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArthurTenancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArthurTenancies
    **/
    _count?: true | ArthurTenancyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArthurTenancyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArthurTenancySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArthurTenancyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArthurTenancyMaxAggregateInputType
  }

  export type GetArthurTenancyAggregateType<T extends ArthurTenancyAggregateArgs> = {
        [P in keyof T & keyof AggregateArthurTenancy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArthurTenancy[P]>
      : GetScalarType<T[P], AggregateArthurTenancy[P]>
  }




  export type ArthurTenancyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArthurTenancyWhereInput
    orderBy?: ArthurTenancyOrderByWithAggregationInput | ArthurTenancyOrderByWithAggregationInput[]
    by: ArthurTenancyScalarFieldEnum[] | ArthurTenancyScalarFieldEnum
    having?: ArthurTenancyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArthurTenancyCountAggregateInputType | true
    _avg?: ArthurTenancyAvgAggregateInputType
    _sum?: ArthurTenancySumAggregateInputType
    _min?: ArthurTenancyMinAggregateInputType
    _max?: ArthurTenancyMaxAggregateInputType
  }

  export type ArthurTenancyGroupByOutputType = {
    id: string
    unitId: string
    status: string
    startDate: string | null
    endDate: string | null
    rent: string
    rentVal: number
    deposit: string
    depositVal: number
    lodged: string | null
    received: string | null
    tenants: string[]
    phone: string[]
    email: string[]
    lettingType: string
    rentStatus: string
    commentary: string
    createdAt: Date
    updatedAt: Date
    address: string | null
    code: string | null
    _count: ArthurTenancyCountAggregateOutputType | null
    _avg: ArthurTenancyAvgAggregateOutputType | null
    _sum: ArthurTenancySumAggregateOutputType | null
    _min: ArthurTenancyMinAggregateOutputType | null
    _max: ArthurTenancyMaxAggregateOutputType | null
  }

  type GetArthurTenancyGroupByPayload<T extends ArthurTenancyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArthurTenancyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArthurTenancyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArthurTenancyGroupByOutputType[P]>
            : GetScalarType<T[P], ArthurTenancyGroupByOutputType[P]>
        }
      >
    >


  export type ArthurTenancySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    rent?: boolean
    rentVal?: boolean
    deposit?: boolean
    depositVal?: boolean
    lodged?: boolean
    received?: boolean
    tenants?: boolean
    phone?: boolean
    email?: boolean
    lettingType?: boolean
    rentStatus?: boolean
    commentary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    address?: boolean
    code?: boolean
    unit?: boolean | ArthurUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arthurTenancy"]>

  export type ArthurTenancySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    rent?: boolean
    rentVal?: boolean
    deposit?: boolean
    depositVal?: boolean
    lodged?: boolean
    received?: boolean
    tenants?: boolean
    phone?: boolean
    email?: boolean
    lettingType?: boolean
    rentStatus?: boolean
    commentary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    address?: boolean
    code?: boolean
    unit?: boolean | ArthurUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arthurTenancy"]>

  export type ArthurTenancySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    rent?: boolean
    rentVal?: boolean
    deposit?: boolean
    depositVal?: boolean
    lodged?: boolean
    received?: boolean
    tenants?: boolean
    phone?: boolean
    email?: boolean
    lettingType?: boolean
    rentStatus?: boolean
    commentary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    address?: boolean
    code?: boolean
    unit?: boolean | ArthurUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arthurTenancy"]>

  export type ArthurTenancySelectScalar = {
    id?: boolean
    unitId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    rent?: boolean
    rentVal?: boolean
    deposit?: boolean
    depositVal?: boolean
    lodged?: boolean
    received?: boolean
    tenants?: boolean
    phone?: boolean
    email?: boolean
    lettingType?: boolean
    rentStatus?: boolean
    commentary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    address?: boolean
    code?: boolean
  }

  export type ArthurTenancyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unitId" | "status" | "startDate" | "endDate" | "rent" | "rentVal" | "deposit" | "depositVal" | "lodged" | "received" | "tenants" | "phone" | "email" | "lettingType" | "rentStatus" | "commentary" | "createdAt" | "updatedAt" | "address" | "code", ExtArgs["result"]["arthurTenancy"]>
  export type ArthurTenancyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | ArthurUnitDefaultArgs<ExtArgs>
  }
  export type ArthurTenancyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | ArthurUnitDefaultArgs<ExtArgs>
  }
  export type ArthurTenancyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | ArthurUnitDefaultArgs<ExtArgs>
  }

  export type $ArthurTenancyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArthurTenancy"
    objects: {
      unit: Prisma.$ArthurUnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      unitId: string
      status: string
      startDate: string | null
      endDate: string | null
      rent: string
      rentVal: number
      deposit: string
      depositVal: number
      lodged: string | null
      received: string | null
      tenants: string[]
      phone: string[]
      email: string[]
      lettingType: string
      rentStatus: string
      commentary: string
      createdAt: Date
      updatedAt: Date
      address: string | null
      code: string | null
    }, ExtArgs["result"]["arthurTenancy"]>
    composites: {}
  }

  type ArthurTenancyGetPayload<S extends boolean | null | undefined | ArthurTenancyDefaultArgs> = $Result.GetResult<Prisma.$ArthurTenancyPayload, S>

  type ArthurTenancyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArthurTenancyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArthurTenancyCountAggregateInputType | true
    }

  export interface ArthurTenancyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArthurTenancy'], meta: { name: 'ArthurTenancy' } }
    /**
     * Find zero or one ArthurTenancy that matches the filter.
     * @param {ArthurTenancyFindUniqueArgs} args - Arguments to find a ArthurTenancy
     * @example
     * // Get one ArthurTenancy
     * const arthurTenancy = await prisma.arthurTenancy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArthurTenancyFindUniqueArgs>(args: SelectSubset<T, ArthurTenancyFindUniqueArgs<ExtArgs>>): Prisma__ArthurTenancyClient<$Result.GetResult<Prisma.$ArthurTenancyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArthurTenancy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArthurTenancyFindUniqueOrThrowArgs} args - Arguments to find a ArthurTenancy
     * @example
     * // Get one ArthurTenancy
     * const arthurTenancy = await prisma.arthurTenancy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArthurTenancyFindUniqueOrThrowArgs>(args: SelectSubset<T, ArthurTenancyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArthurTenancyClient<$Result.GetResult<Prisma.$ArthurTenancyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArthurTenancy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurTenancyFindFirstArgs} args - Arguments to find a ArthurTenancy
     * @example
     * // Get one ArthurTenancy
     * const arthurTenancy = await prisma.arthurTenancy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArthurTenancyFindFirstArgs>(args?: SelectSubset<T, ArthurTenancyFindFirstArgs<ExtArgs>>): Prisma__ArthurTenancyClient<$Result.GetResult<Prisma.$ArthurTenancyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArthurTenancy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurTenancyFindFirstOrThrowArgs} args - Arguments to find a ArthurTenancy
     * @example
     * // Get one ArthurTenancy
     * const arthurTenancy = await prisma.arthurTenancy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArthurTenancyFindFirstOrThrowArgs>(args?: SelectSubset<T, ArthurTenancyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArthurTenancyClient<$Result.GetResult<Prisma.$ArthurTenancyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArthurTenancies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurTenancyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArthurTenancies
     * const arthurTenancies = await prisma.arthurTenancy.findMany()
     * 
     * // Get first 10 ArthurTenancies
     * const arthurTenancies = await prisma.arthurTenancy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arthurTenancyWithIdOnly = await prisma.arthurTenancy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArthurTenancyFindManyArgs>(args?: SelectSubset<T, ArthurTenancyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArthurTenancyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArthurTenancy.
     * @param {ArthurTenancyCreateArgs} args - Arguments to create a ArthurTenancy.
     * @example
     * // Create one ArthurTenancy
     * const ArthurTenancy = await prisma.arthurTenancy.create({
     *   data: {
     *     // ... data to create a ArthurTenancy
     *   }
     * })
     * 
     */
    create<T extends ArthurTenancyCreateArgs>(args: SelectSubset<T, ArthurTenancyCreateArgs<ExtArgs>>): Prisma__ArthurTenancyClient<$Result.GetResult<Prisma.$ArthurTenancyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArthurTenancies.
     * @param {ArthurTenancyCreateManyArgs} args - Arguments to create many ArthurTenancies.
     * @example
     * // Create many ArthurTenancies
     * const arthurTenancy = await prisma.arthurTenancy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArthurTenancyCreateManyArgs>(args?: SelectSubset<T, ArthurTenancyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArthurTenancies and returns the data saved in the database.
     * @param {ArthurTenancyCreateManyAndReturnArgs} args - Arguments to create many ArthurTenancies.
     * @example
     * // Create many ArthurTenancies
     * const arthurTenancy = await prisma.arthurTenancy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArthurTenancies and only return the `id`
     * const arthurTenancyWithIdOnly = await prisma.arthurTenancy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArthurTenancyCreateManyAndReturnArgs>(args?: SelectSubset<T, ArthurTenancyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArthurTenancyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArthurTenancy.
     * @param {ArthurTenancyDeleteArgs} args - Arguments to delete one ArthurTenancy.
     * @example
     * // Delete one ArthurTenancy
     * const ArthurTenancy = await prisma.arthurTenancy.delete({
     *   where: {
     *     // ... filter to delete one ArthurTenancy
     *   }
     * })
     * 
     */
    delete<T extends ArthurTenancyDeleteArgs>(args: SelectSubset<T, ArthurTenancyDeleteArgs<ExtArgs>>): Prisma__ArthurTenancyClient<$Result.GetResult<Prisma.$ArthurTenancyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArthurTenancy.
     * @param {ArthurTenancyUpdateArgs} args - Arguments to update one ArthurTenancy.
     * @example
     * // Update one ArthurTenancy
     * const arthurTenancy = await prisma.arthurTenancy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArthurTenancyUpdateArgs>(args: SelectSubset<T, ArthurTenancyUpdateArgs<ExtArgs>>): Prisma__ArthurTenancyClient<$Result.GetResult<Prisma.$ArthurTenancyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArthurTenancies.
     * @param {ArthurTenancyDeleteManyArgs} args - Arguments to filter ArthurTenancies to delete.
     * @example
     * // Delete a few ArthurTenancies
     * const { count } = await prisma.arthurTenancy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArthurTenancyDeleteManyArgs>(args?: SelectSubset<T, ArthurTenancyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArthurTenancies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurTenancyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArthurTenancies
     * const arthurTenancy = await prisma.arthurTenancy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArthurTenancyUpdateManyArgs>(args: SelectSubset<T, ArthurTenancyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArthurTenancies and returns the data updated in the database.
     * @param {ArthurTenancyUpdateManyAndReturnArgs} args - Arguments to update many ArthurTenancies.
     * @example
     * // Update many ArthurTenancies
     * const arthurTenancy = await prisma.arthurTenancy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArthurTenancies and only return the `id`
     * const arthurTenancyWithIdOnly = await prisma.arthurTenancy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArthurTenancyUpdateManyAndReturnArgs>(args: SelectSubset<T, ArthurTenancyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArthurTenancyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArthurTenancy.
     * @param {ArthurTenancyUpsertArgs} args - Arguments to update or create a ArthurTenancy.
     * @example
     * // Update or create a ArthurTenancy
     * const arthurTenancy = await prisma.arthurTenancy.upsert({
     *   create: {
     *     // ... data to create a ArthurTenancy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArthurTenancy we want to update
     *   }
     * })
     */
    upsert<T extends ArthurTenancyUpsertArgs>(args: SelectSubset<T, ArthurTenancyUpsertArgs<ExtArgs>>): Prisma__ArthurTenancyClient<$Result.GetResult<Prisma.$ArthurTenancyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArthurTenancies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurTenancyCountArgs} args - Arguments to filter ArthurTenancies to count.
     * @example
     * // Count the number of ArthurTenancies
     * const count = await prisma.arthurTenancy.count({
     *   where: {
     *     // ... the filter for the ArthurTenancies we want to count
     *   }
     * })
    **/
    count<T extends ArthurTenancyCountArgs>(
      args?: Subset<T, ArthurTenancyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArthurTenancyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArthurTenancy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurTenancyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArthurTenancyAggregateArgs>(args: Subset<T, ArthurTenancyAggregateArgs>): Prisma.PrismaPromise<GetArthurTenancyAggregateType<T>>

    /**
     * Group by ArthurTenancy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArthurTenancyGroupByArgs} args - Group by arguments.
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
      T extends ArthurTenancyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArthurTenancyGroupByArgs['orderBy'] }
        : { orderBy?: ArthurTenancyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArthurTenancyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArthurTenancyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArthurTenancy model
   */
  readonly fields: ArthurTenancyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArthurTenancy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArthurTenancyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unit<T extends ArthurUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArthurUnitDefaultArgs<ExtArgs>>): Prisma__ArthurUnitClient<$Result.GetResult<Prisma.$ArthurUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArthurTenancy model
   */
  interface ArthurTenancyFieldRefs {
    readonly id: FieldRef<"ArthurTenancy", 'String'>
    readonly unitId: FieldRef<"ArthurTenancy", 'String'>
    readonly status: FieldRef<"ArthurTenancy", 'String'>
    readonly startDate: FieldRef<"ArthurTenancy", 'String'>
    readonly endDate: FieldRef<"ArthurTenancy", 'String'>
    readonly rent: FieldRef<"ArthurTenancy", 'String'>
    readonly rentVal: FieldRef<"ArthurTenancy", 'Float'>
    readonly deposit: FieldRef<"ArthurTenancy", 'String'>
    readonly depositVal: FieldRef<"ArthurTenancy", 'Float'>
    readonly lodged: FieldRef<"ArthurTenancy", 'String'>
    readonly received: FieldRef<"ArthurTenancy", 'String'>
    readonly tenants: FieldRef<"ArthurTenancy", 'String[]'>
    readonly phone: FieldRef<"ArthurTenancy", 'String[]'>
    readonly email: FieldRef<"ArthurTenancy", 'String[]'>
    readonly lettingType: FieldRef<"ArthurTenancy", 'String'>
    readonly rentStatus: FieldRef<"ArthurTenancy", 'String'>
    readonly commentary: FieldRef<"ArthurTenancy", 'String'>
    readonly createdAt: FieldRef<"ArthurTenancy", 'DateTime'>
    readonly updatedAt: FieldRef<"ArthurTenancy", 'DateTime'>
    readonly address: FieldRef<"ArthurTenancy", 'String'>
    readonly code: FieldRef<"ArthurTenancy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ArthurTenancy findUnique
   */
  export type ArthurTenancyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurTenancy
     */
    select?: ArthurTenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurTenancy
     */
    omit?: ArthurTenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurTenancyInclude<ExtArgs> | null
    /**
     * Filter, which ArthurTenancy to fetch.
     */
    where: ArthurTenancyWhereUniqueInput
  }

  /**
   * ArthurTenancy findUniqueOrThrow
   */
  export type ArthurTenancyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurTenancy
     */
    select?: ArthurTenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurTenancy
     */
    omit?: ArthurTenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurTenancyInclude<ExtArgs> | null
    /**
     * Filter, which ArthurTenancy to fetch.
     */
    where: ArthurTenancyWhereUniqueInput
  }

  /**
   * ArthurTenancy findFirst
   */
  export type ArthurTenancyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurTenancy
     */
    select?: ArthurTenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurTenancy
     */
    omit?: ArthurTenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurTenancyInclude<ExtArgs> | null
    /**
     * Filter, which ArthurTenancy to fetch.
     */
    where?: ArthurTenancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArthurTenancies to fetch.
     */
    orderBy?: ArthurTenancyOrderByWithRelationInput | ArthurTenancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArthurTenancies.
     */
    cursor?: ArthurTenancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArthurTenancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArthurTenancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArthurTenancies.
     */
    distinct?: ArthurTenancyScalarFieldEnum | ArthurTenancyScalarFieldEnum[]
  }

  /**
   * ArthurTenancy findFirstOrThrow
   */
  export type ArthurTenancyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurTenancy
     */
    select?: ArthurTenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurTenancy
     */
    omit?: ArthurTenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurTenancyInclude<ExtArgs> | null
    /**
     * Filter, which ArthurTenancy to fetch.
     */
    where?: ArthurTenancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArthurTenancies to fetch.
     */
    orderBy?: ArthurTenancyOrderByWithRelationInput | ArthurTenancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArthurTenancies.
     */
    cursor?: ArthurTenancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArthurTenancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArthurTenancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArthurTenancies.
     */
    distinct?: ArthurTenancyScalarFieldEnum | ArthurTenancyScalarFieldEnum[]
  }

  /**
   * ArthurTenancy findMany
   */
  export type ArthurTenancyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurTenancy
     */
    select?: ArthurTenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurTenancy
     */
    omit?: ArthurTenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurTenancyInclude<ExtArgs> | null
    /**
     * Filter, which ArthurTenancies to fetch.
     */
    where?: ArthurTenancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArthurTenancies to fetch.
     */
    orderBy?: ArthurTenancyOrderByWithRelationInput | ArthurTenancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArthurTenancies.
     */
    cursor?: ArthurTenancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArthurTenancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArthurTenancies.
     */
    skip?: number
    distinct?: ArthurTenancyScalarFieldEnum | ArthurTenancyScalarFieldEnum[]
  }

  /**
   * ArthurTenancy create
   */
  export type ArthurTenancyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurTenancy
     */
    select?: ArthurTenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurTenancy
     */
    omit?: ArthurTenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurTenancyInclude<ExtArgs> | null
    /**
     * The data needed to create a ArthurTenancy.
     */
    data: XOR<ArthurTenancyCreateInput, ArthurTenancyUncheckedCreateInput>
  }

  /**
   * ArthurTenancy createMany
   */
  export type ArthurTenancyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArthurTenancies.
     */
    data: ArthurTenancyCreateManyInput | ArthurTenancyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArthurTenancy createManyAndReturn
   */
  export type ArthurTenancyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurTenancy
     */
    select?: ArthurTenancySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurTenancy
     */
    omit?: ArthurTenancyOmit<ExtArgs> | null
    /**
     * The data used to create many ArthurTenancies.
     */
    data: ArthurTenancyCreateManyInput | ArthurTenancyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurTenancyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArthurTenancy update
   */
  export type ArthurTenancyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurTenancy
     */
    select?: ArthurTenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurTenancy
     */
    omit?: ArthurTenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurTenancyInclude<ExtArgs> | null
    /**
     * The data needed to update a ArthurTenancy.
     */
    data: XOR<ArthurTenancyUpdateInput, ArthurTenancyUncheckedUpdateInput>
    /**
     * Choose, which ArthurTenancy to update.
     */
    where: ArthurTenancyWhereUniqueInput
  }

  /**
   * ArthurTenancy updateMany
   */
  export type ArthurTenancyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArthurTenancies.
     */
    data: XOR<ArthurTenancyUpdateManyMutationInput, ArthurTenancyUncheckedUpdateManyInput>
    /**
     * Filter which ArthurTenancies to update
     */
    where?: ArthurTenancyWhereInput
    /**
     * Limit how many ArthurTenancies to update.
     */
    limit?: number
  }

  /**
   * ArthurTenancy updateManyAndReturn
   */
  export type ArthurTenancyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurTenancy
     */
    select?: ArthurTenancySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurTenancy
     */
    omit?: ArthurTenancyOmit<ExtArgs> | null
    /**
     * The data used to update ArthurTenancies.
     */
    data: XOR<ArthurTenancyUpdateManyMutationInput, ArthurTenancyUncheckedUpdateManyInput>
    /**
     * Filter which ArthurTenancies to update
     */
    where?: ArthurTenancyWhereInput
    /**
     * Limit how many ArthurTenancies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurTenancyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArthurTenancy upsert
   */
  export type ArthurTenancyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurTenancy
     */
    select?: ArthurTenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurTenancy
     */
    omit?: ArthurTenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurTenancyInclude<ExtArgs> | null
    /**
     * The filter to search for the ArthurTenancy to update in case it exists.
     */
    where: ArthurTenancyWhereUniqueInput
    /**
     * In case the ArthurTenancy found by the `where` argument doesn't exist, create a new ArthurTenancy with this data.
     */
    create: XOR<ArthurTenancyCreateInput, ArthurTenancyUncheckedCreateInput>
    /**
     * In case the ArthurTenancy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArthurTenancyUpdateInput, ArthurTenancyUncheckedUpdateInput>
  }

  /**
   * ArthurTenancy delete
   */
  export type ArthurTenancyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurTenancy
     */
    select?: ArthurTenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurTenancy
     */
    omit?: ArthurTenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurTenancyInclude<ExtArgs> | null
    /**
     * Filter which ArthurTenancy to delete.
     */
    where: ArthurTenancyWhereUniqueInput
  }

  /**
   * ArthurTenancy deleteMany
   */
  export type ArthurTenancyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArthurTenancies to delete
     */
    where?: ArthurTenancyWhereInput
    /**
     * Limit how many ArthurTenancies to delete.
     */
    limit?: number
  }

  /**
   * ArthurTenancy without action
   */
  export type ArthurTenancyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArthurTenancy
     */
    select?: ArthurTenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArthurTenancy
     */
    omit?: ArthurTenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArthurTenancyInclude<ExtArgs> | null
  }


  /**
   * Model AdminProfile
   */

  export type AggregateAdminProfile = {
    _count: AdminProfileCountAggregateOutputType | null
    _min: AdminProfileMinAggregateOutputType | null
    _max: AdminProfileMaxAggregateOutputType | null
  }

  export type AdminProfileMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    role: string | null
    updatedAt: Date | null
  }

  export type AdminProfileMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    role: string | null
    updatedAt: Date | null
  }

  export type AdminProfileCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    role: number
    updatedAt: number
    _all: number
  }


  export type AdminProfileMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    updatedAt?: true
  }

  export type AdminProfileMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    updatedAt?: true
  }

  export type AdminProfileCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminProfile to aggregate.
     */
    where?: AdminProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminProfiles to fetch.
     */
    orderBy?: AdminProfileOrderByWithRelationInput | AdminProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminProfiles
    **/
    _count?: true | AdminProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminProfileMaxAggregateInputType
  }

  export type GetAdminProfileAggregateType<T extends AdminProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminProfile[P]>
      : GetScalarType<T[P], AggregateAdminProfile[P]>
  }




  export type AdminProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminProfileWhereInput
    orderBy?: AdminProfileOrderByWithAggregationInput | AdminProfileOrderByWithAggregationInput[]
    by: AdminProfileScalarFieldEnum[] | AdminProfileScalarFieldEnum
    having?: AdminProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminProfileCountAggregateInputType | true
    _min?: AdminProfileMinAggregateInputType
    _max?: AdminProfileMaxAggregateInputType
  }

  export type AdminProfileGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    role: string
    updatedAt: Date
    _count: AdminProfileCountAggregateOutputType | null
    _min: AdminProfileMinAggregateOutputType | null
    _max: AdminProfileMaxAggregateOutputType | null
  }

  type GetAdminProfileGroupByPayload<T extends AdminProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminProfileGroupByOutputType[P]>
            : GetScalarType<T[P], AdminProfileGroupByOutputType[P]>
        }
      >
    >


  export type AdminProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminProfile"]>

  export type AdminProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminProfile"]>

  export type AdminProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminProfile"]>

  export type AdminProfileSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    updatedAt?: boolean
  }

  export type AdminProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "role" | "updatedAt", ExtArgs["result"]["adminProfile"]>

  export type $AdminProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      role: string
      updatedAt: Date
    }, ExtArgs["result"]["adminProfile"]>
    composites: {}
  }

  type AdminProfileGetPayload<S extends boolean | null | undefined | AdminProfileDefaultArgs> = $Result.GetResult<Prisma.$AdminProfilePayload, S>

  type AdminProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminProfileCountAggregateInputType | true
    }

  export interface AdminProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminProfile'], meta: { name: 'AdminProfile' } }
    /**
     * Find zero or one AdminProfile that matches the filter.
     * @param {AdminProfileFindUniqueArgs} args - Arguments to find a AdminProfile
     * @example
     * // Get one AdminProfile
     * const adminProfile = await prisma.adminProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminProfileFindUniqueArgs>(args: SelectSubset<T, AdminProfileFindUniqueArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminProfileFindUniqueOrThrowArgs} args - Arguments to find a AdminProfile
     * @example
     * // Get one AdminProfile
     * const adminProfile = await prisma.adminProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileFindFirstArgs} args - Arguments to find a AdminProfile
     * @example
     * // Get one AdminProfile
     * const adminProfile = await prisma.adminProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminProfileFindFirstArgs>(args?: SelectSubset<T, AdminProfileFindFirstArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileFindFirstOrThrowArgs} args - Arguments to find a AdminProfile
     * @example
     * // Get one AdminProfile
     * const adminProfile = await prisma.adminProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminProfiles
     * const adminProfiles = await prisma.adminProfile.findMany()
     * 
     * // Get first 10 AdminProfiles
     * const adminProfiles = await prisma.adminProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminProfileWithIdOnly = await prisma.adminProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminProfileFindManyArgs>(args?: SelectSubset<T, AdminProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminProfile.
     * @param {AdminProfileCreateArgs} args - Arguments to create a AdminProfile.
     * @example
     * // Create one AdminProfile
     * const AdminProfile = await prisma.adminProfile.create({
     *   data: {
     *     // ... data to create a AdminProfile
     *   }
     * })
     * 
     */
    create<T extends AdminProfileCreateArgs>(args: SelectSubset<T, AdminProfileCreateArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminProfiles.
     * @param {AdminProfileCreateManyArgs} args - Arguments to create many AdminProfiles.
     * @example
     * // Create many AdminProfiles
     * const adminProfile = await prisma.adminProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminProfileCreateManyArgs>(args?: SelectSubset<T, AdminProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminProfiles and returns the data saved in the database.
     * @param {AdminProfileCreateManyAndReturnArgs} args - Arguments to create many AdminProfiles.
     * @example
     * // Create many AdminProfiles
     * const adminProfile = await prisma.adminProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminProfiles and only return the `id`
     * const adminProfileWithIdOnly = await prisma.adminProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminProfile.
     * @param {AdminProfileDeleteArgs} args - Arguments to delete one AdminProfile.
     * @example
     * // Delete one AdminProfile
     * const AdminProfile = await prisma.adminProfile.delete({
     *   where: {
     *     // ... filter to delete one AdminProfile
     *   }
     * })
     * 
     */
    delete<T extends AdminProfileDeleteArgs>(args: SelectSubset<T, AdminProfileDeleteArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminProfile.
     * @param {AdminProfileUpdateArgs} args - Arguments to update one AdminProfile.
     * @example
     * // Update one AdminProfile
     * const adminProfile = await prisma.adminProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminProfileUpdateArgs>(args: SelectSubset<T, AdminProfileUpdateArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminProfiles.
     * @param {AdminProfileDeleteManyArgs} args - Arguments to filter AdminProfiles to delete.
     * @example
     * // Delete a few AdminProfiles
     * const { count } = await prisma.adminProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminProfileDeleteManyArgs>(args?: SelectSubset<T, AdminProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminProfiles
     * const adminProfile = await prisma.adminProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminProfileUpdateManyArgs>(args: SelectSubset<T, AdminProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminProfiles and returns the data updated in the database.
     * @param {AdminProfileUpdateManyAndReturnArgs} args - Arguments to update many AdminProfiles.
     * @example
     * // Update many AdminProfiles
     * const adminProfile = await prisma.adminProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminProfiles and only return the `id`
     * const adminProfileWithIdOnly = await prisma.adminProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminProfile.
     * @param {AdminProfileUpsertArgs} args - Arguments to update or create a AdminProfile.
     * @example
     * // Update or create a AdminProfile
     * const adminProfile = await prisma.adminProfile.upsert({
     *   create: {
     *     // ... data to create a AdminProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminProfile we want to update
     *   }
     * })
     */
    upsert<T extends AdminProfileUpsertArgs>(args: SelectSubset<T, AdminProfileUpsertArgs<ExtArgs>>): Prisma__AdminProfileClient<$Result.GetResult<Prisma.$AdminProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileCountArgs} args - Arguments to filter AdminProfiles to count.
     * @example
     * // Count the number of AdminProfiles
     * const count = await prisma.adminProfile.count({
     *   where: {
     *     // ... the filter for the AdminProfiles we want to count
     *   }
     * })
    **/
    count<T extends AdminProfileCountArgs>(
      args?: Subset<T, AdminProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminProfileAggregateArgs>(args: Subset<T, AdminProfileAggregateArgs>): Prisma.PrismaPromise<GetAdminProfileAggregateType<T>>

    /**
     * Group by AdminProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProfileGroupByArgs} args - Group by arguments.
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
      T extends AdminProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminProfileGroupByArgs['orderBy'] }
        : { orderBy?: AdminProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminProfile model
   */
  readonly fields: AdminProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminProfile model
   */
  interface AdminProfileFieldRefs {
    readonly id: FieldRef<"AdminProfile", 'String'>
    readonly name: FieldRef<"AdminProfile", 'String'>
    readonly email: FieldRef<"AdminProfile", 'String'>
    readonly phone: FieldRef<"AdminProfile", 'String'>
    readonly role: FieldRef<"AdminProfile", 'String'>
    readonly updatedAt: FieldRef<"AdminProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminProfile findUnique
   */
  export type AdminProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Filter, which AdminProfile to fetch.
     */
    where: AdminProfileWhereUniqueInput
  }

  /**
   * AdminProfile findUniqueOrThrow
   */
  export type AdminProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Filter, which AdminProfile to fetch.
     */
    where: AdminProfileWhereUniqueInput
  }

  /**
   * AdminProfile findFirst
   */
  export type AdminProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Filter, which AdminProfile to fetch.
     */
    where?: AdminProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminProfiles to fetch.
     */
    orderBy?: AdminProfileOrderByWithRelationInput | AdminProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminProfiles.
     */
    cursor?: AdminProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminProfiles.
     */
    distinct?: AdminProfileScalarFieldEnum | AdminProfileScalarFieldEnum[]
  }

  /**
   * AdminProfile findFirstOrThrow
   */
  export type AdminProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Filter, which AdminProfile to fetch.
     */
    where?: AdminProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminProfiles to fetch.
     */
    orderBy?: AdminProfileOrderByWithRelationInput | AdminProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminProfiles.
     */
    cursor?: AdminProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminProfiles.
     */
    distinct?: AdminProfileScalarFieldEnum | AdminProfileScalarFieldEnum[]
  }

  /**
   * AdminProfile findMany
   */
  export type AdminProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Filter, which AdminProfiles to fetch.
     */
    where?: AdminProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminProfiles to fetch.
     */
    orderBy?: AdminProfileOrderByWithRelationInput | AdminProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminProfiles.
     */
    cursor?: AdminProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminProfiles.
     */
    skip?: number
    distinct?: AdminProfileScalarFieldEnum | AdminProfileScalarFieldEnum[]
  }

  /**
   * AdminProfile create
   */
  export type AdminProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminProfile.
     */
    data: XOR<AdminProfileCreateInput, AdminProfileUncheckedCreateInput>
  }

  /**
   * AdminProfile createMany
   */
  export type AdminProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminProfiles.
     */
    data: AdminProfileCreateManyInput | AdminProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminProfile createManyAndReturn
   */
  export type AdminProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * The data used to create many AdminProfiles.
     */
    data: AdminProfileCreateManyInput | AdminProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminProfile update
   */
  export type AdminProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminProfile.
     */
    data: XOR<AdminProfileUpdateInput, AdminProfileUncheckedUpdateInput>
    /**
     * Choose, which AdminProfile to update.
     */
    where: AdminProfileWhereUniqueInput
  }

  /**
   * AdminProfile updateMany
   */
  export type AdminProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminProfiles.
     */
    data: XOR<AdminProfileUpdateManyMutationInput, AdminProfileUncheckedUpdateManyInput>
    /**
     * Filter which AdminProfiles to update
     */
    where?: AdminProfileWhereInput
    /**
     * Limit how many AdminProfiles to update.
     */
    limit?: number
  }

  /**
   * AdminProfile updateManyAndReturn
   */
  export type AdminProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * The data used to update AdminProfiles.
     */
    data: XOR<AdminProfileUpdateManyMutationInput, AdminProfileUncheckedUpdateManyInput>
    /**
     * Filter which AdminProfiles to update
     */
    where?: AdminProfileWhereInput
    /**
     * Limit how many AdminProfiles to update.
     */
    limit?: number
  }

  /**
   * AdminProfile upsert
   */
  export type AdminProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminProfile to update in case it exists.
     */
    where: AdminProfileWhereUniqueInput
    /**
     * In case the AdminProfile found by the `where` argument doesn't exist, create a new AdminProfile with this data.
     */
    create: XOR<AdminProfileCreateInput, AdminProfileUncheckedCreateInput>
    /**
     * In case the AdminProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminProfileUpdateInput, AdminProfileUncheckedUpdateInput>
  }

  /**
   * AdminProfile delete
   */
  export type AdminProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
    /**
     * Filter which AdminProfile to delete.
     */
    where: AdminProfileWhereUniqueInput
  }

  /**
   * AdminProfile deleteMany
   */
  export type AdminProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminProfiles to delete
     */
    where?: AdminProfileWhereInput
    /**
     * Limit how many AdminProfiles to delete.
     */
    limit?: number
  }

  /**
   * AdminProfile without action
   */
  export type AdminProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProfile
     */
    select?: AdminProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminProfile
     */
    omit?: AdminProfileOmit<ExtArgs> | null
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


  export const PostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    refresh_token_expires_in: 'refresh_token_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const ArthurTokenScalarFieldEnum: {
    id: 'id',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    updatedAt: 'updatedAt'
  };

  export type ArthurTokenScalarFieldEnum = (typeof ArthurTokenScalarFieldEnum)[keyof typeof ArthurTokenScalarFieldEnum]


  export const ArthurPropertyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArthurPropertyScalarFieldEnum = (typeof ArthurPropertyScalarFieldEnum)[keyof typeof ArthurPropertyScalarFieldEnum]


  export const ArthurUnitScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    name: 'name',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    landlordEntity: 'landlordEntity',
    referenceCode: 'referenceCode',
    bankName: 'bankName',
    sortCode: 'sortCode',
    accountNumber: 'accountNumber',
    accountName: 'accountName',
    epcRating: 'epcRating',
    epcScore: 'epcScore',
    epcCertificate: 'epcCertificate',
    epcAssessedDate: 'epcAssessedDate',
    epcExpiryDate: 'epcExpiryDate',
    epcAssessor: 'epcAssessor',
    eicSerial: 'eicSerial',
    eicInspectedDate: 'eicInspectedDate',
    eicExpiryDate: 'eicExpiryDate',
    insurancePolicy: 'insurancePolicy',
    insuranceStartDate: 'insuranceStartDate',
    insuranceStatus: 'insuranceStatus',
    elecMeterSerial: 'elecMeterSerial',
    elecMeterCheckInValue: 'elecMeterCheckInValue',
    elecMeterCheckInDate: 'elecMeterCheckInDate',
    waterMeterSerial: 'waterMeterSerial',
    waterMeterCheckInValue: 'waterMeterCheckInValue',
    waterMeterCheckInDate: 'waterMeterCheckInDate',
    outstandingDocs: 'outstandingDocs',
    complianceNotes: 'complianceNotes'
  };

  export type ArthurUnitScalarFieldEnum = (typeof ArthurUnitScalarFieldEnum)[keyof typeof ArthurUnitScalarFieldEnum]


  export const ArthurTenancyScalarFieldEnum: {
    id: 'id',
    unitId: 'unitId',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    rent: 'rent',
    rentVal: 'rentVal',
    deposit: 'deposit',
    depositVal: 'depositVal',
    lodged: 'lodged',
    received: 'received',
    tenants: 'tenants',
    phone: 'phone',
    email: 'email',
    lettingType: 'lettingType',
    rentStatus: 'rentStatus',
    commentary: 'commentary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    address: 'address',
    code: 'code'
  };

  export type ArthurTenancyScalarFieldEnum = (typeof ArthurTenancyScalarFieldEnum)[keyof typeof ArthurTenancyScalarFieldEnum]


  export const AdminProfileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    role: 'role',
    updatedAt: 'updatedAt'
  };

  export type AdminProfileScalarFieldEnum = (typeof AdminProfileScalarFieldEnum)[keyof typeof AdminProfileScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    name?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    createdById?: StringWithAggregatesFilter<"Post"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    posts?: PostListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    posts?: PostListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type ArthurTokenWhereInput = {
    AND?: ArthurTokenWhereInput | ArthurTokenWhereInput[]
    OR?: ArthurTokenWhereInput[]
    NOT?: ArthurTokenWhereInput | ArthurTokenWhereInput[]
    id?: StringFilter<"ArthurToken"> | string
    accessToken?: StringFilter<"ArthurToken"> | string
    refreshToken?: StringFilter<"ArthurToken"> | string
    expiresAt?: DateTimeFilter<"ArthurToken"> | Date | string
    updatedAt?: DateTimeFilter<"ArthurToken"> | Date | string
  }

  export type ArthurTokenOrderByWithRelationInput = {
    id?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArthurTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArthurTokenWhereInput | ArthurTokenWhereInput[]
    OR?: ArthurTokenWhereInput[]
    NOT?: ArthurTokenWhereInput | ArthurTokenWhereInput[]
    accessToken?: StringFilter<"ArthurToken"> | string
    refreshToken?: StringFilter<"ArthurToken"> | string
    expiresAt?: DateTimeFilter<"ArthurToken"> | Date | string
    updatedAt?: DateTimeFilter<"ArthurToken"> | Date | string
  }, "id">

  export type ArthurTokenOrderByWithAggregationInput = {
    id?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArthurTokenCountOrderByAggregateInput
    _max?: ArthurTokenMaxOrderByAggregateInput
    _min?: ArthurTokenMinOrderByAggregateInput
  }

  export type ArthurTokenScalarWhereWithAggregatesInput = {
    AND?: ArthurTokenScalarWhereWithAggregatesInput | ArthurTokenScalarWhereWithAggregatesInput[]
    OR?: ArthurTokenScalarWhereWithAggregatesInput[]
    NOT?: ArthurTokenScalarWhereWithAggregatesInput | ArthurTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArthurToken"> | string
    accessToken?: StringWithAggregatesFilter<"ArthurToken"> | string
    refreshToken?: StringWithAggregatesFilter<"ArthurToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"ArthurToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArthurToken"> | Date | string
  }

  export type ArthurPropertyWhereInput = {
    AND?: ArthurPropertyWhereInput | ArthurPropertyWhereInput[]
    OR?: ArthurPropertyWhereInput[]
    NOT?: ArthurPropertyWhereInput | ArthurPropertyWhereInput[]
    id?: StringFilter<"ArthurProperty"> | string
    name?: StringFilter<"ArthurProperty"> | string
    address?: StringFilter<"ArthurProperty"> | string
    createdAt?: DateTimeFilter<"ArthurProperty"> | Date | string
    updatedAt?: DateTimeFilter<"ArthurProperty"> | Date | string
    units?: ArthurUnitListRelationFilter
  }

  export type ArthurPropertyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    units?: ArthurUnitOrderByRelationAggregateInput
  }

  export type ArthurPropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArthurPropertyWhereInput | ArthurPropertyWhereInput[]
    OR?: ArthurPropertyWhereInput[]
    NOT?: ArthurPropertyWhereInput | ArthurPropertyWhereInput[]
    name?: StringFilter<"ArthurProperty"> | string
    address?: StringFilter<"ArthurProperty"> | string
    createdAt?: DateTimeFilter<"ArthurProperty"> | Date | string
    updatedAt?: DateTimeFilter<"ArthurProperty"> | Date | string
    units?: ArthurUnitListRelationFilter
  }, "id">

  export type ArthurPropertyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArthurPropertyCountOrderByAggregateInput
    _max?: ArthurPropertyMaxOrderByAggregateInput
    _min?: ArthurPropertyMinOrderByAggregateInput
  }

  export type ArthurPropertyScalarWhereWithAggregatesInput = {
    AND?: ArthurPropertyScalarWhereWithAggregatesInput | ArthurPropertyScalarWhereWithAggregatesInput[]
    OR?: ArthurPropertyScalarWhereWithAggregatesInput[]
    NOT?: ArthurPropertyScalarWhereWithAggregatesInput | ArthurPropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArthurProperty"> | string
    name?: StringWithAggregatesFilter<"ArthurProperty"> | string
    address?: StringWithAggregatesFilter<"ArthurProperty"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ArthurProperty"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArthurProperty"> | Date | string
  }

  export type ArthurUnitWhereInput = {
    AND?: ArthurUnitWhereInput | ArthurUnitWhereInput[]
    OR?: ArthurUnitWhereInput[]
    NOT?: ArthurUnitWhereInput | ArthurUnitWhereInput[]
    id?: StringFilter<"ArthurUnit"> | string
    propertyId?: StringFilter<"ArthurUnit"> | string
    name?: StringFilter<"ArthurUnit"> | string
    status?: StringFilter<"ArthurUnit"> | string
    createdAt?: DateTimeFilter<"ArthurUnit"> | Date | string
    updatedAt?: DateTimeFilter<"ArthurUnit"> | Date | string
    landlordEntity?: StringNullableFilter<"ArthurUnit"> | string | null
    referenceCode?: StringNullableFilter<"ArthurUnit"> | string | null
    bankName?: StringNullableFilter<"ArthurUnit"> | string | null
    sortCode?: StringNullableFilter<"ArthurUnit"> | string | null
    accountNumber?: StringNullableFilter<"ArthurUnit"> | string | null
    accountName?: StringNullableFilter<"ArthurUnit"> | string | null
    epcRating?: StringNullableFilter<"ArthurUnit"> | string | null
    epcScore?: IntNullableFilter<"ArthurUnit"> | number | null
    epcCertificate?: StringNullableFilter<"ArthurUnit"> | string | null
    epcAssessedDate?: StringNullableFilter<"ArthurUnit"> | string | null
    epcExpiryDate?: StringNullableFilter<"ArthurUnit"> | string | null
    epcAssessor?: StringNullableFilter<"ArthurUnit"> | string | null
    eicSerial?: StringNullableFilter<"ArthurUnit"> | string | null
    eicInspectedDate?: StringNullableFilter<"ArthurUnit"> | string | null
    eicExpiryDate?: StringNullableFilter<"ArthurUnit"> | string | null
    insurancePolicy?: StringNullableFilter<"ArthurUnit"> | string | null
    insuranceStartDate?: StringNullableFilter<"ArthurUnit"> | string | null
    insuranceStatus?: StringNullableFilter<"ArthurUnit"> | string | null
    elecMeterSerial?: StringNullableFilter<"ArthurUnit"> | string | null
    elecMeterCheckInValue?: StringNullableFilter<"ArthurUnit"> | string | null
    elecMeterCheckInDate?: StringNullableFilter<"ArthurUnit"> | string | null
    waterMeterSerial?: StringNullableFilter<"ArthurUnit"> | string | null
    waterMeterCheckInValue?: StringNullableFilter<"ArthurUnit"> | string | null
    waterMeterCheckInDate?: StringNullableFilter<"ArthurUnit"> | string | null
    outstandingDocs?: StringNullableListFilter<"ArthurUnit">
    complianceNotes?: StringNullableFilter<"ArthurUnit"> | string | null
    tenancies?: ArthurTenancyListRelationFilter
    property?: XOR<ArthurPropertyScalarRelationFilter, ArthurPropertyWhereInput>
  }

  export type ArthurUnitOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    landlordEntity?: SortOrderInput | SortOrder
    referenceCode?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    sortCode?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    accountName?: SortOrderInput | SortOrder
    epcRating?: SortOrderInput | SortOrder
    epcScore?: SortOrderInput | SortOrder
    epcCertificate?: SortOrderInput | SortOrder
    epcAssessedDate?: SortOrderInput | SortOrder
    epcExpiryDate?: SortOrderInput | SortOrder
    epcAssessor?: SortOrderInput | SortOrder
    eicSerial?: SortOrderInput | SortOrder
    eicInspectedDate?: SortOrderInput | SortOrder
    eicExpiryDate?: SortOrderInput | SortOrder
    insurancePolicy?: SortOrderInput | SortOrder
    insuranceStartDate?: SortOrderInput | SortOrder
    insuranceStatus?: SortOrderInput | SortOrder
    elecMeterSerial?: SortOrderInput | SortOrder
    elecMeterCheckInValue?: SortOrderInput | SortOrder
    elecMeterCheckInDate?: SortOrderInput | SortOrder
    waterMeterSerial?: SortOrderInput | SortOrder
    waterMeterCheckInValue?: SortOrderInput | SortOrder
    waterMeterCheckInDate?: SortOrderInput | SortOrder
    outstandingDocs?: SortOrder
    complianceNotes?: SortOrderInput | SortOrder
    tenancies?: ArthurTenancyOrderByRelationAggregateInput
    property?: ArthurPropertyOrderByWithRelationInput
  }

  export type ArthurUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArthurUnitWhereInput | ArthurUnitWhereInput[]
    OR?: ArthurUnitWhereInput[]
    NOT?: ArthurUnitWhereInput | ArthurUnitWhereInput[]
    propertyId?: StringFilter<"ArthurUnit"> | string
    name?: StringFilter<"ArthurUnit"> | string
    status?: StringFilter<"ArthurUnit"> | string
    createdAt?: DateTimeFilter<"ArthurUnit"> | Date | string
    updatedAt?: DateTimeFilter<"ArthurUnit"> | Date | string
    landlordEntity?: StringNullableFilter<"ArthurUnit"> | string | null
    referenceCode?: StringNullableFilter<"ArthurUnit"> | string | null
    bankName?: StringNullableFilter<"ArthurUnit"> | string | null
    sortCode?: StringNullableFilter<"ArthurUnit"> | string | null
    accountNumber?: StringNullableFilter<"ArthurUnit"> | string | null
    accountName?: StringNullableFilter<"ArthurUnit"> | string | null
    epcRating?: StringNullableFilter<"ArthurUnit"> | string | null
    epcScore?: IntNullableFilter<"ArthurUnit"> | number | null
    epcCertificate?: StringNullableFilter<"ArthurUnit"> | string | null
    epcAssessedDate?: StringNullableFilter<"ArthurUnit"> | string | null
    epcExpiryDate?: StringNullableFilter<"ArthurUnit"> | string | null
    epcAssessor?: StringNullableFilter<"ArthurUnit"> | string | null
    eicSerial?: StringNullableFilter<"ArthurUnit"> | string | null
    eicInspectedDate?: StringNullableFilter<"ArthurUnit"> | string | null
    eicExpiryDate?: StringNullableFilter<"ArthurUnit"> | string | null
    insurancePolicy?: StringNullableFilter<"ArthurUnit"> | string | null
    insuranceStartDate?: StringNullableFilter<"ArthurUnit"> | string | null
    insuranceStatus?: StringNullableFilter<"ArthurUnit"> | string | null
    elecMeterSerial?: StringNullableFilter<"ArthurUnit"> | string | null
    elecMeterCheckInValue?: StringNullableFilter<"ArthurUnit"> | string | null
    elecMeterCheckInDate?: StringNullableFilter<"ArthurUnit"> | string | null
    waterMeterSerial?: StringNullableFilter<"ArthurUnit"> | string | null
    waterMeterCheckInValue?: StringNullableFilter<"ArthurUnit"> | string | null
    waterMeterCheckInDate?: StringNullableFilter<"ArthurUnit"> | string | null
    outstandingDocs?: StringNullableListFilter<"ArthurUnit">
    complianceNotes?: StringNullableFilter<"ArthurUnit"> | string | null
    tenancies?: ArthurTenancyListRelationFilter
    property?: XOR<ArthurPropertyScalarRelationFilter, ArthurPropertyWhereInput>
  }, "id">

  export type ArthurUnitOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    landlordEntity?: SortOrderInput | SortOrder
    referenceCode?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    sortCode?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    accountName?: SortOrderInput | SortOrder
    epcRating?: SortOrderInput | SortOrder
    epcScore?: SortOrderInput | SortOrder
    epcCertificate?: SortOrderInput | SortOrder
    epcAssessedDate?: SortOrderInput | SortOrder
    epcExpiryDate?: SortOrderInput | SortOrder
    epcAssessor?: SortOrderInput | SortOrder
    eicSerial?: SortOrderInput | SortOrder
    eicInspectedDate?: SortOrderInput | SortOrder
    eicExpiryDate?: SortOrderInput | SortOrder
    insurancePolicy?: SortOrderInput | SortOrder
    insuranceStartDate?: SortOrderInput | SortOrder
    insuranceStatus?: SortOrderInput | SortOrder
    elecMeterSerial?: SortOrderInput | SortOrder
    elecMeterCheckInValue?: SortOrderInput | SortOrder
    elecMeterCheckInDate?: SortOrderInput | SortOrder
    waterMeterSerial?: SortOrderInput | SortOrder
    waterMeterCheckInValue?: SortOrderInput | SortOrder
    waterMeterCheckInDate?: SortOrderInput | SortOrder
    outstandingDocs?: SortOrder
    complianceNotes?: SortOrderInput | SortOrder
    _count?: ArthurUnitCountOrderByAggregateInput
    _avg?: ArthurUnitAvgOrderByAggregateInput
    _max?: ArthurUnitMaxOrderByAggregateInput
    _min?: ArthurUnitMinOrderByAggregateInput
    _sum?: ArthurUnitSumOrderByAggregateInput
  }

  export type ArthurUnitScalarWhereWithAggregatesInput = {
    AND?: ArthurUnitScalarWhereWithAggregatesInput | ArthurUnitScalarWhereWithAggregatesInput[]
    OR?: ArthurUnitScalarWhereWithAggregatesInput[]
    NOT?: ArthurUnitScalarWhereWithAggregatesInput | ArthurUnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArthurUnit"> | string
    propertyId?: StringWithAggregatesFilter<"ArthurUnit"> | string
    name?: StringWithAggregatesFilter<"ArthurUnit"> | string
    status?: StringWithAggregatesFilter<"ArthurUnit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ArthurUnit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArthurUnit"> | Date | string
    landlordEntity?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    referenceCode?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    bankName?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    sortCode?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    accountNumber?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    accountName?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    epcRating?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    epcScore?: IntNullableWithAggregatesFilter<"ArthurUnit"> | number | null
    epcCertificate?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    epcAssessedDate?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    epcExpiryDate?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    epcAssessor?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    eicSerial?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    eicInspectedDate?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    eicExpiryDate?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    insurancePolicy?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    insuranceStartDate?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    insuranceStatus?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    elecMeterSerial?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    elecMeterCheckInValue?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    elecMeterCheckInDate?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    waterMeterSerial?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    waterMeterCheckInValue?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    waterMeterCheckInDate?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
    outstandingDocs?: StringNullableListFilter<"ArthurUnit">
    complianceNotes?: StringNullableWithAggregatesFilter<"ArthurUnit"> | string | null
  }

  export type ArthurTenancyWhereInput = {
    AND?: ArthurTenancyWhereInput | ArthurTenancyWhereInput[]
    OR?: ArthurTenancyWhereInput[]
    NOT?: ArthurTenancyWhereInput | ArthurTenancyWhereInput[]
    id?: StringFilter<"ArthurTenancy"> | string
    unitId?: StringFilter<"ArthurTenancy"> | string
    status?: StringFilter<"ArthurTenancy"> | string
    startDate?: StringNullableFilter<"ArthurTenancy"> | string | null
    endDate?: StringNullableFilter<"ArthurTenancy"> | string | null
    rent?: StringFilter<"ArthurTenancy"> | string
    rentVal?: FloatFilter<"ArthurTenancy"> | number
    deposit?: StringFilter<"ArthurTenancy"> | string
    depositVal?: FloatFilter<"ArthurTenancy"> | number
    lodged?: StringNullableFilter<"ArthurTenancy"> | string | null
    received?: StringNullableFilter<"ArthurTenancy"> | string | null
    tenants?: StringNullableListFilter<"ArthurTenancy">
    phone?: StringNullableListFilter<"ArthurTenancy">
    email?: StringNullableListFilter<"ArthurTenancy">
    lettingType?: StringFilter<"ArthurTenancy"> | string
    rentStatus?: StringFilter<"ArthurTenancy"> | string
    commentary?: StringFilter<"ArthurTenancy"> | string
    createdAt?: DateTimeFilter<"ArthurTenancy"> | Date | string
    updatedAt?: DateTimeFilter<"ArthurTenancy"> | Date | string
    address?: StringNullableFilter<"ArthurTenancy"> | string | null
    code?: StringNullableFilter<"ArthurTenancy"> | string | null
    unit?: XOR<ArthurUnitScalarRelationFilter, ArthurUnitWhereInput>
  }

  export type ArthurTenancyOrderByWithRelationInput = {
    id?: SortOrder
    unitId?: SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    rent?: SortOrder
    rentVal?: SortOrder
    deposit?: SortOrder
    depositVal?: SortOrder
    lodged?: SortOrderInput | SortOrder
    received?: SortOrderInput | SortOrder
    tenants?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    lettingType?: SortOrder
    rentStatus?: SortOrder
    commentary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    unit?: ArthurUnitOrderByWithRelationInput
  }

  export type ArthurTenancyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArthurTenancyWhereInput | ArthurTenancyWhereInput[]
    OR?: ArthurTenancyWhereInput[]
    NOT?: ArthurTenancyWhereInput | ArthurTenancyWhereInput[]
    unitId?: StringFilter<"ArthurTenancy"> | string
    status?: StringFilter<"ArthurTenancy"> | string
    startDate?: StringNullableFilter<"ArthurTenancy"> | string | null
    endDate?: StringNullableFilter<"ArthurTenancy"> | string | null
    rent?: StringFilter<"ArthurTenancy"> | string
    rentVal?: FloatFilter<"ArthurTenancy"> | number
    deposit?: StringFilter<"ArthurTenancy"> | string
    depositVal?: FloatFilter<"ArthurTenancy"> | number
    lodged?: StringNullableFilter<"ArthurTenancy"> | string | null
    received?: StringNullableFilter<"ArthurTenancy"> | string | null
    tenants?: StringNullableListFilter<"ArthurTenancy">
    phone?: StringNullableListFilter<"ArthurTenancy">
    email?: StringNullableListFilter<"ArthurTenancy">
    lettingType?: StringFilter<"ArthurTenancy"> | string
    rentStatus?: StringFilter<"ArthurTenancy"> | string
    commentary?: StringFilter<"ArthurTenancy"> | string
    createdAt?: DateTimeFilter<"ArthurTenancy"> | Date | string
    updatedAt?: DateTimeFilter<"ArthurTenancy"> | Date | string
    address?: StringNullableFilter<"ArthurTenancy"> | string | null
    code?: StringNullableFilter<"ArthurTenancy"> | string | null
    unit?: XOR<ArthurUnitScalarRelationFilter, ArthurUnitWhereInput>
  }, "id">

  export type ArthurTenancyOrderByWithAggregationInput = {
    id?: SortOrder
    unitId?: SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    rent?: SortOrder
    rentVal?: SortOrder
    deposit?: SortOrder
    depositVal?: SortOrder
    lodged?: SortOrderInput | SortOrder
    received?: SortOrderInput | SortOrder
    tenants?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    lettingType?: SortOrder
    rentStatus?: SortOrder
    commentary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    _count?: ArthurTenancyCountOrderByAggregateInput
    _avg?: ArthurTenancyAvgOrderByAggregateInput
    _max?: ArthurTenancyMaxOrderByAggregateInput
    _min?: ArthurTenancyMinOrderByAggregateInput
    _sum?: ArthurTenancySumOrderByAggregateInput
  }

  export type ArthurTenancyScalarWhereWithAggregatesInput = {
    AND?: ArthurTenancyScalarWhereWithAggregatesInput | ArthurTenancyScalarWhereWithAggregatesInput[]
    OR?: ArthurTenancyScalarWhereWithAggregatesInput[]
    NOT?: ArthurTenancyScalarWhereWithAggregatesInput | ArthurTenancyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArthurTenancy"> | string
    unitId?: StringWithAggregatesFilter<"ArthurTenancy"> | string
    status?: StringWithAggregatesFilter<"ArthurTenancy"> | string
    startDate?: StringNullableWithAggregatesFilter<"ArthurTenancy"> | string | null
    endDate?: StringNullableWithAggregatesFilter<"ArthurTenancy"> | string | null
    rent?: StringWithAggregatesFilter<"ArthurTenancy"> | string
    rentVal?: FloatWithAggregatesFilter<"ArthurTenancy"> | number
    deposit?: StringWithAggregatesFilter<"ArthurTenancy"> | string
    depositVal?: FloatWithAggregatesFilter<"ArthurTenancy"> | number
    lodged?: StringNullableWithAggregatesFilter<"ArthurTenancy"> | string | null
    received?: StringNullableWithAggregatesFilter<"ArthurTenancy"> | string | null
    tenants?: StringNullableListFilter<"ArthurTenancy">
    phone?: StringNullableListFilter<"ArthurTenancy">
    email?: StringNullableListFilter<"ArthurTenancy">
    lettingType?: StringWithAggregatesFilter<"ArthurTenancy"> | string
    rentStatus?: StringWithAggregatesFilter<"ArthurTenancy"> | string
    commentary?: StringWithAggregatesFilter<"ArthurTenancy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ArthurTenancy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArthurTenancy"> | Date | string
    address?: StringNullableWithAggregatesFilter<"ArthurTenancy"> | string | null
    code?: StringNullableWithAggregatesFilter<"ArthurTenancy"> | string | null
  }

  export type AdminProfileWhereInput = {
    AND?: AdminProfileWhereInput | AdminProfileWhereInput[]
    OR?: AdminProfileWhereInput[]
    NOT?: AdminProfileWhereInput | AdminProfileWhereInput[]
    id?: StringFilter<"AdminProfile"> | string
    name?: StringFilter<"AdminProfile"> | string
    email?: StringFilter<"AdminProfile"> | string
    phone?: StringFilter<"AdminProfile"> | string
    role?: StringFilter<"AdminProfile"> | string
    updatedAt?: DateTimeFilter<"AdminProfile"> | Date | string
  }

  export type AdminProfileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminProfileWhereInput | AdminProfileWhereInput[]
    OR?: AdminProfileWhereInput[]
    NOT?: AdminProfileWhereInput | AdminProfileWhereInput[]
    name?: StringFilter<"AdminProfile"> | string
    email?: StringFilter<"AdminProfile"> | string
    phone?: StringFilter<"AdminProfile"> | string
    role?: StringFilter<"AdminProfile"> | string
    updatedAt?: DateTimeFilter<"AdminProfile"> | Date | string
  }, "id">

  export type AdminProfileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminProfileCountOrderByAggregateInput
    _max?: AdminProfileMaxOrderByAggregateInput
    _min?: AdminProfileMinOrderByAggregateInput
  }

  export type AdminProfileScalarWhereWithAggregatesInput = {
    AND?: AdminProfileScalarWhereWithAggregatesInput | AdminProfileScalarWhereWithAggregatesInput[]
    OR?: AdminProfileScalarWhereWithAggregatesInput[]
    NOT?: AdminProfileScalarWhereWithAggregatesInput | AdminProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminProfile"> | string
    name?: StringWithAggregatesFilter<"AdminProfile"> | string
    email?: StringWithAggregatesFilter<"AdminProfile"> | string
    phone?: StringWithAggregatesFilter<"AdminProfile"> | string
    role?: StringWithAggregatesFilter<"AdminProfile"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminProfile"> | Date | string
  }

  export type PostCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArthurTokenCreateInput = {
    id?: string
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    updatedAt?: Date | string
  }

  export type ArthurTokenUncheckedCreateInput = {
    id?: string
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    updatedAt?: Date | string
  }

  export type ArthurTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArthurTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArthurTokenCreateManyInput = {
    id?: string
    accessToken: string
    refreshToken: string
    expiresAt: Date | string
    updatedAt?: Date | string
  }

  export type ArthurTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArthurTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArthurPropertyCreateInput = {
    id: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: ArthurUnitCreateNestedManyWithoutPropertyInput
  }

  export type ArthurPropertyUncheckedCreateInput = {
    id: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: ArthurUnitUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type ArthurPropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: ArthurUnitUpdateManyWithoutPropertyNestedInput
  }

  export type ArthurPropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: ArthurUnitUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type ArthurPropertyCreateManyInput = {
    id: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArthurPropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArthurPropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArthurUnitCreateInput = {
    id: string
    name: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    landlordEntity?: string | null
    referenceCode?: string | null
    bankName?: string | null
    sortCode?: string | null
    accountNumber?: string | null
    accountName?: string | null
    epcRating?: string | null
    epcScore?: number | null
    epcCertificate?: string | null
    epcAssessedDate?: string | null
    epcExpiryDate?: string | null
    epcAssessor?: string | null
    eicSerial?: string | null
    eicInspectedDate?: string | null
    eicExpiryDate?: string | null
    insurancePolicy?: string | null
    insuranceStartDate?: string | null
    insuranceStatus?: string | null
    elecMeterSerial?: string | null
    elecMeterCheckInValue?: string | null
    elecMeterCheckInDate?: string | null
    waterMeterSerial?: string | null
    waterMeterCheckInValue?: string | null
    waterMeterCheckInDate?: string | null
    outstandingDocs?: ArthurUnitCreateoutstandingDocsInput | string[]
    complianceNotes?: string | null
    tenancies?: ArthurTenancyCreateNestedManyWithoutUnitInput
    property: ArthurPropertyCreateNestedOneWithoutUnitsInput
  }

  export type ArthurUnitUncheckedCreateInput = {
    id: string
    propertyId: string
    name: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    landlordEntity?: string | null
    referenceCode?: string | null
    bankName?: string | null
    sortCode?: string | null
    accountNumber?: string | null
    accountName?: string | null
    epcRating?: string | null
    epcScore?: number | null
    epcCertificate?: string | null
    epcAssessedDate?: string | null
    epcExpiryDate?: string | null
    epcAssessor?: string | null
    eicSerial?: string | null
    eicInspectedDate?: string | null
    eicExpiryDate?: string | null
    insurancePolicy?: string | null
    insuranceStartDate?: string | null
    insuranceStatus?: string | null
    elecMeterSerial?: string | null
    elecMeterCheckInValue?: string | null
    elecMeterCheckInDate?: string | null
    waterMeterSerial?: string | null
    waterMeterCheckInValue?: string | null
    waterMeterCheckInDate?: string | null
    outstandingDocs?: ArthurUnitCreateoutstandingDocsInput | string[]
    complianceNotes?: string | null
    tenancies?: ArthurTenancyUncheckedCreateNestedManyWithoutUnitInput
  }

  export type ArthurUnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    landlordEntity?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    sortCode?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    epcRating?: NullableStringFieldUpdateOperationsInput | string | null
    epcScore?: NullableIntFieldUpdateOperationsInput | number | null
    epcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessedDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessor?: NullableStringFieldUpdateOperationsInput | string | null
    eicSerial?: NullableStringFieldUpdateOperationsInput | string | null
    eicInspectedDate?: NullableStringFieldUpdateOperationsInput | string | null
    eicExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    insurancePolicy?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    outstandingDocs?: ArthurUnitUpdateoutstandingDocsInput | string[]
    complianceNotes?: NullableStringFieldUpdateOperationsInput | string | null
    tenancies?: ArthurTenancyUpdateManyWithoutUnitNestedInput
    property?: ArthurPropertyUpdateOneRequiredWithoutUnitsNestedInput
  }

  export type ArthurUnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    landlordEntity?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    sortCode?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    epcRating?: NullableStringFieldUpdateOperationsInput | string | null
    epcScore?: NullableIntFieldUpdateOperationsInput | number | null
    epcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessedDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessor?: NullableStringFieldUpdateOperationsInput | string | null
    eicSerial?: NullableStringFieldUpdateOperationsInput | string | null
    eicInspectedDate?: NullableStringFieldUpdateOperationsInput | string | null
    eicExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    insurancePolicy?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    outstandingDocs?: ArthurUnitUpdateoutstandingDocsInput | string[]
    complianceNotes?: NullableStringFieldUpdateOperationsInput | string | null
    tenancies?: ArthurTenancyUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type ArthurUnitCreateManyInput = {
    id: string
    propertyId: string
    name: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    landlordEntity?: string | null
    referenceCode?: string | null
    bankName?: string | null
    sortCode?: string | null
    accountNumber?: string | null
    accountName?: string | null
    epcRating?: string | null
    epcScore?: number | null
    epcCertificate?: string | null
    epcAssessedDate?: string | null
    epcExpiryDate?: string | null
    epcAssessor?: string | null
    eicSerial?: string | null
    eicInspectedDate?: string | null
    eicExpiryDate?: string | null
    insurancePolicy?: string | null
    insuranceStartDate?: string | null
    insuranceStatus?: string | null
    elecMeterSerial?: string | null
    elecMeterCheckInValue?: string | null
    elecMeterCheckInDate?: string | null
    waterMeterSerial?: string | null
    waterMeterCheckInValue?: string | null
    waterMeterCheckInDate?: string | null
    outstandingDocs?: ArthurUnitCreateoutstandingDocsInput | string[]
    complianceNotes?: string | null
  }

  export type ArthurUnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    landlordEntity?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    sortCode?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    epcRating?: NullableStringFieldUpdateOperationsInput | string | null
    epcScore?: NullableIntFieldUpdateOperationsInput | number | null
    epcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessedDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessor?: NullableStringFieldUpdateOperationsInput | string | null
    eicSerial?: NullableStringFieldUpdateOperationsInput | string | null
    eicInspectedDate?: NullableStringFieldUpdateOperationsInput | string | null
    eicExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    insurancePolicy?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    outstandingDocs?: ArthurUnitUpdateoutstandingDocsInput | string[]
    complianceNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArthurUnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    landlordEntity?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    sortCode?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    epcRating?: NullableStringFieldUpdateOperationsInput | string | null
    epcScore?: NullableIntFieldUpdateOperationsInput | number | null
    epcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessedDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessor?: NullableStringFieldUpdateOperationsInput | string | null
    eicSerial?: NullableStringFieldUpdateOperationsInput | string | null
    eicInspectedDate?: NullableStringFieldUpdateOperationsInput | string | null
    eicExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    insurancePolicy?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    outstandingDocs?: ArthurUnitUpdateoutstandingDocsInput | string[]
    complianceNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArthurTenancyCreateInput = {
    id: string
    status: string
    startDate?: string | null
    endDate?: string | null
    rent: string
    rentVal: number
    deposit: string
    depositVal: number
    lodged?: string | null
    received?: string | null
    tenants?: ArthurTenancyCreatetenantsInput | string[]
    phone?: ArthurTenancyCreatephoneInput | string[]
    email?: ArthurTenancyCreateemailInput | string[]
    lettingType: string
    rentStatus: string
    commentary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    code?: string | null
    unit: ArthurUnitCreateNestedOneWithoutTenanciesInput
  }

  export type ArthurTenancyUncheckedCreateInput = {
    id: string
    unitId: string
    status: string
    startDate?: string | null
    endDate?: string | null
    rent: string
    rentVal: number
    deposit: string
    depositVal: number
    lodged?: string | null
    received?: string | null
    tenants?: ArthurTenancyCreatetenantsInput | string[]
    phone?: ArthurTenancyCreatephoneInput | string[]
    email?: ArthurTenancyCreateemailInput | string[]
    lettingType: string
    rentStatus: string
    commentary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    code?: string | null
  }

  export type ArthurTenancyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    rent?: StringFieldUpdateOperationsInput | string
    rentVal?: FloatFieldUpdateOperationsInput | number
    deposit?: StringFieldUpdateOperationsInput | string
    depositVal?: FloatFieldUpdateOperationsInput | number
    lodged?: NullableStringFieldUpdateOperationsInput | string | null
    received?: NullableStringFieldUpdateOperationsInput | string | null
    tenants?: ArthurTenancyUpdatetenantsInput | string[]
    phone?: ArthurTenancyUpdatephoneInput | string[]
    email?: ArthurTenancyUpdateemailInput | string[]
    lettingType?: StringFieldUpdateOperationsInput | string
    rentStatus?: StringFieldUpdateOperationsInput | string
    commentary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: ArthurUnitUpdateOneRequiredWithoutTenanciesNestedInput
  }

  export type ArthurTenancyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    rent?: StringFieldUpdateOperationsInput | string
    rentVal?: FloatFieldUpdateOperationsInput | number
    deposit?: StringFieldUpdateOperationsInput | string
    depositVal?: FloatFieldUpdateOperationsInput | number
    lodged?: NullableStringFieldUpdateOperationsInput | string | null
    received?: NullableStringFieldUpdateOperationsInput | string | null
    tenants?: ArthurTenancyUpdatetenantsInput | string[]
    phone?: ArthurTenancyUpdatephoneInput | string[]
    email?: ArthurTenancyUpdateemailInput | string[]
    lettingType?: StringFieldUpdateOperationsInput | string
    rentStatus?: StringFieldUpdateOperationsInput | string
    commentary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArthurTenancyCreateManyInput = {
    id: string
    unitId: string
    status: string
    startDate?: string | null
    endDate?: string | null
    rent: string
    rentVal: number
    deposit: string
    depositVal: number
    lodged?: string | null
    received?: string | null
    tenants?: ArthurTenancyCreatetenantsInput | string[]
    phone?: ArthurTenancyCreatephoneInput | string[]
    email?: ArthurTenancyCreateemailInput | string[]
    lettingType: string
    rentStatus: string
    commentary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    code?: string | null
  }

  export type ArthurTenancyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    rent?: StringFieldUpdateOperationsInput | string
    rentVal?: FloatFieldUpdateOperationsInput | number
    deposit?: StringFieldUpdateOperationsInput | string
    depositVal?: FloatFieldUpdateOperationsInput | number
    lodged?: NullableStringFieldUpdateOperationsInput | string | null
    received?: NullableStringFieldUpdateOperationsInput | string | null
    tenants?: ArthurTenancyUpdatetenantsInput | string[]
    phone?: ArthurTenancyUpdatephoneInput | string[]
    email?: ArthurTenancyUpdateemailInput | string[]
    lettingType?: StringFieldUpdateOperationsInput | string
    rentStatus?: StringFieldUpdateOperationsInput | string
    commentary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArthurTenancyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    rent?: StringFieldUpdateOperationsInput | string
    rentVal?: FloatFieldUpdateOperationsInput | number
    deposit?: StringFieldUpdateOperationsInput | string
    depositVal?: FloatFieldUpdateOperationsInput | number
    lodged?: NullableStringFieldUpdateOperationsInput | string | null
    received?: NullableStringFieldUpdateOperationsInput | string | null
    tenants?: ArthurTenancyUpdatetenantsInput | string[]
    phone?: ArthurTenancyUpdatephoneInput | string[]
    email?: ArthurTenancyUpdateemailInput | string[]
    lettingType?: StringFieldUpdateOperationsInput | string
    rentStatus?: StringFieldUpdateOperationsInput | string
    commentary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminProfileCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    role: string
    updatedAt?: Date | string
  }

  export type AdminProfileUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    role: string
    updatedAt?: Date | string
  }

  export type AdminProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminProfileCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    role: string
    updatedAt?: Date | string
  }

  export type AdminProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
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
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
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
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type ArthurTokenCountOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArthurTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArthurTokenMinOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArthurUnitListRelationFilter = {
    every?: ArthurUnitWhereInput
    some?: ArthurUnitWhereInput
    none?: ArthurUnitWhereInput
  }

  export type ArthurUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArthurPropertyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArthurPropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArthurPropertyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ArthurTenancyListRelationFilter = {
    every?: ArthurTenancyWhereInput
    some?: ArthurTenancyWhereInput
    none?: ArthurTenancyWhereInput
  }

  export type ArthurPropertyScalarRelationFilter = {
    is?: ArthurPropertyWhereInput
    isNot?: ArthurPropertyWhereInput
  }

  export type ArthurTenancyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArthurUnitCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    landlordEntity?: SortOrder
    referenceCode?: SortOrder
    bankName?: SortOrder
    sortCode?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    epcRating?: SortOrder
    epcScore?: SortOrder
    epcCertificate?: SortOrder
    epcAssessedDate?: SortOrder
    epcExpiryDate?: SortOrder
    epcAssessor?: SortOrder
    eicSerial?: SortOrder
    eicInspectedDate?: SortOrder
    eicExpiryDate?: SortOrder
    insurancePolicy?: SortOrder
    insuranceStartDate?: SortOrder
    insuranceStatus?: SortOrder
    elecMeterSerial?: SortOrder
    elecMeterCheckInValue?: SortOrder
    elecMeterCheckInDate?: SortOrder
    waterMeterSerial?: SortOrder
    waterMeterCheckInValue?: SortOrder
    waterMeterCheckInDate?: SortOrder
    outstandingDocs?: SortOrder
    complianceNotes?: SortOrder
  }

  export type ArthurUnitAvgOrderByAggregateInput = {
    epcScore?: SortOrder
  }

  export type ArthurUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    landlordEntity?: SortOrder
    referenceCode?: SortOrder
    bankName?: SortOrder
    sortCode?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    epcRating?: SortOrder
    epcScore?: SortOrder
    epcCertificate?: SortOrder
    epcAssessedDate?: SortOrder
    epcExpiryDate?: SortOrder
    epcAssessor?: SortOrder
    eicSerial?: SortOrder
    eicInspectedDate?: SortOrder
    eicExpiryDate?: SortOrder
    insurancePolicy?: SortOrder
    insuranceStartDate?: SortOrder
    insuranceStatus?: SortOrder
    elecMeterSerial?: SortOrder
    elecMeterCheckInValue?: SortOrder
    elecMeterCheckInDate?: SortOrder
    waterMeterSerial?: SortOrder
    waterMeterCheckInValue?: SortOrder
    waterMeterCheckInDate?: SortOrder
    complianceNotes?: SortOrder
  }

  export type ArthurUnitMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    landlordEntity?: SortOrder
    referenceCode?: SortOrder
    bankName?: SortOrder
    sortCode?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    epcRating?: SortOrder
    epcScore?: SortOrder
    epcCertificate?: SortOrder
    epcAssessedDate?: SortOrder
    epcExpiryDate?: SortOrder
    epcAssessor?: SortOrder
    eicSerial?: SortOrder
    eicInspectedDate?: SortOrder
    eicExpiryDate?: SortOrder
    insurancePolicy?: SortOrder
    insuranceStartDate?: SortOrder
    insuranceStatus?: SortOrder
    elecMeterSerial?: SortOrder
    elecMeterCheckInValue?: SortOrder
    elecMeterCheckInDate?: SortOrder
    waterMeterSerial?: SortOrder
    waterMeterCheckInValue?: SortOrder
    waterMeterCheckInDate?: SortOrder
    complianceNotes?: SortOrder
  }

  export type ArthurUnitSumOrderByAggregateInput = {
    epcScore?: SortOrder
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

  export type ArthurUnitScalarRelationFilter = {
    is?: ArthurUnitWhereInput
    isNot?: ArthurUnitWhereInput
  }

  export type ArthurTenancyCountOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rent?: SortOrder
    rentVal?: SortOrder
    deposit?: SortOrder
    depositVal?: SortOrder
    lodged?: SortOrder
    received?: SortOrder
    tenants?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    lettingType?: SortOrder
    rentStatus?: SortOrder
    commentary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    code?: SortOrder
  }

  export type ArthurTenancyAvgOrderByAggregateInput = {
    rentVal?: SortOrder
    depositVal?: SortOrder
  }

  export type ArthurTenancyMaxOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rent?: SortOrder
    rentVal?: SortOrder
    deposit?: SortOrder
    depositVal?: SortOrder
    lodged?: SortOrder
    received?: SortOrder
    lettingType?: SortOrder
    rentStatus?: SortOrder
    commentary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    code?: SortOrder
  }

  export type ArthurTenancyMinOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    rent?: SortOrder
    rentVal?: SortOrder
    deposit?: SortOrder
    depositVal?: SortOrder
    lodged?: SortOrder
    received?: SortOrder
    lettingType?: SortOrder
    rentStatus?: SortOrder
    commentary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: SortOrder
    code?: SortOrder
  }

  export type ArthurTenancySumOrderByAggregateInput = {
    rentVal?: SortOrder
    depositVal?: SortOrder
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

  export type AdminProfileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminProfileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PostUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ArthurUnitCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ArthurUnitCreateWithoutPropertyInput, ArthurUnitUncheckedCreateWithoutPropertyInput> | ArthurUnitCreateWithoutPropertyInput[] | ArthurUnitUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ArthurUnitCreateOrConnectWithoutPropertyInput | ArthurUnitCreateOrConnectWithoutPropertyInput[]
    createMany?: ArthurUnitCreateManyPropertyInputEnvelope
    connect?: ArthurUnitWhereUniqueInput | ArthurUnitWhereUniqueInput[]
  }

  export type ArthurUnitUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ArthurUnitCreateWithoutPropertyInput, ArthurUnitUncheckedCreateWithoutPropertyInput> | ArthurUnitCreateWithoutPropertyInput[] | ArthurUnitUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ArthurUnitCreateOrConnectWithoutPropertyInput | ArthurUnitCreateOrConnectWithoutPropertyInput[]
    createMany?: ArthurUnitCreateManyPropertyInputEnvelope
    connect?: ArthurUnitWhereUniqueInput | ArthurUnitWhereUniqueInput[]
  }

  export type ArthurUnitUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ArthurUnitCreateWithoutPropertyInput, ArthurUnitUncheckedCreateWithoutPropertyInput> | ArthurUnitCreateWithoutPropertyInput[] | ArthurUnitUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ArthurUnitCreateOrConnectWithoutPropertyInput | ArthurUnitCreateOrConnectWithoutPropertyInput[]
    upsert?: ArthurUnitUpsertWithWhereUniqueWithoutPropertyInput | ArthurUnitUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ArthurUnitCreateManyPropertyInputEnvelope
    set?: ArthurUnitWhereUniqueInput | ArthurUnitWhereUniqueInput[]
    disconnect?: ArthurUnitWhereUniqueInput | ArthurUnitWhereUniqueInput[]
    delete?: ArthurUnitWhereUniqueInput | ArthurUnitWhereUniqueInput[]
    connect?: ArthurUnitWhereUniqueInput | ArthurUnitWhereUniqueInput[]
    update?: ArthurUnitUpdateWithWhereUniqueWithoutPropertyInput | ArthurUnitUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ArthurUnitUpdateManyWithWhereWithoutPropertyInput | ArthurUnitUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ArthurUnitScalarWhereInput | ArthurUnitScalarWhereInput[]
  }

  export type ArthurUnitUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ArthurUnitCreateWithoutPropertyInput, ArthurUnitUncheckedCreateWithoutPropertyInput> | ArthurUnitCreateWithoutPropertyInput[] | ArthurUnitUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ArthurUnitCreateOrConnectWithoutPropertyInput | ArthurUnitCreateOrConnectWithoutPropertyInput[]
    upsert?: ArthurUnitUpsertWithWhereUniqueWithoutPropertyInput | ArthurUnitUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ArthurUnitCreateManyPropertyInputEnvelope
    set?: ArthurUnitWhereUniqueInput | ArthurUnitWhereUniqueInput[]
    disconnect?: ArthurUnitWhereUniqueInput | ArthurUnitWhereUniqueInput[]
    delete?: ArthurUnitWhereUniqueInput | ArthurUnitWhereUniqueInput[]
    connect?: ArthurUnitWhereUniqueInput | ArthurUnitWhereUniqueInput[]
    update?: ArthurUnitUpdateWithWhereUniqueWithoutPropertyInput | ArthurUnitUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ArthurUnitUpdateManyWithWhereWithoutPropertyInput | ArthurUnitUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ArthurUnitScalarWhereInput | ArthurUnitScalarWhereInput[]
  }

  export type ArthurUnitCreateoutstandingDocsInput = {
    set: string[]
  }

  export type ArthurTenancyCreateNestedManyWithoutUnitInput = {
    create?: XOR<ArthurTenancyCreateWithoutUnitInput, ArthurTenancyUncheckedCreateWithoutUnitInput> | ArthurTenancyCreateWithoutUnitInput[] | ArthurTenancyUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ArthurTenancyCreateOrConnectWithoutUnitInput | ArthurTenancyCreateOrConnectWithoutUnitInput[]
    createMany?: ArthurTenancyCreateManyUnitInputEnvelope
    connect?: ArthurTenancyWhereUniqueInput | ArthurTenancyWhereUniqueInput[]
  }

  export type ArthurPropertyCreateNestedOneWithoutUnitsInput = {
    create?: XOR<ArthurPropertyCreateWithoutUnitsInput, ArthurPropertyUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: ArthurPropertyCreateOrConnectWithoutUnitsInput
    connect?: ArthurPropertyWhereUniqueInput
  }

  export type ArthurTenancyUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<ArthurTenancyCreateWithoutUnitInput, ArthurTenancyUncheckedCreateWithoutUnitInput> | ArthurTenancyCreateWithoutUnitInput[] | ArthurTenancyUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ArthurTenancyCreateOrConnectWithoutUnitInput | ArthurTenancyCreateOrConnectWithoutUnitInput[]
    createMany?: ArthurTenancyCreateManyUnitInputEnvelope
    connect?: ArthurTenancyWhereUniqueInput | ArthurTenancyWhereUniqueInput[]
  }

  export type ArthurUnitUpdateoutstandingDocsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ArthurTenancyUpdateManyWithoutUnitNestedInput = {
    create?: XOR<ArthurTenancyCreateWithoutUnitInput, ArthurTenancyUncheckedCreateWithoutUnitInput> | ArthurTenancyCreateWithoutUnitInput[] | ArthurTenancyUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ArthurTenancyCreateOrConnectWithoutUnitInput | ArthurTenancyCreateOrConnectWithoutUnitInput[]
    upsert?: ArthurTenancyUpsertWithWhereUniqueWithoutUnitInput | ArthurTenancyUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: ArthurTenancyCreateManyUnitInputEnvelope
    set?: ArthurTenancyWhereUniqueInput | ArthurTenancyWhereUniqueInput[]
    disconnect?: ArthurTenancyWhereUniqueInput | ArthurTenancyWhereUniqueInput[]
    delete?: ArthurTenancyWhereUniqueInput | ArthurTenancyWhereUniqueInput[]
    connect?: ArthurTenancyWhereUniqueInput | ArthurTenancyWhereUniqueInput[]
    update?: ArthurTenancyUpdateWithWhereUniqueWithoutUnitInput | ArthurTenancyUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: ArthurTenancyUpdateManyWithWhereWithoutUnitInput | ArthurTenancyUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: ArthurTenancyScalarWhereInput | ArthurTenancyScalarWhereInput[]
  }

  export type ArthurPropertyUpdateOneRequiredWithoutUnitsNestedInput = {
    create?: XOR<ArthurPropertyCreateWithoutUnitsInput, ArthurPropertyUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: ArthurPropertyCreateOrConnectWithoutUnitsInput
    upsert?: ArthurPropertyUpsertWithoutUnitsInput
    connect?: ArthurPropertyWhereUniqueInput
    update?: XOR<XOR<ArthurPropertyUpdateToOneWithWhereWithoutUnitsInput, ArthurPropertyUpdateWithoutUnitsInput>, ArthurPropertyUncheckedUpdateWithoutUnitsInput>
  }

  export type ArthurTenancyUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<ArthurTenancyCreateWithoutUnitInput, ArthurTenancyUncheckedCreateWithoutUnitInput> | ArthurTenancyCreateWithoutUnitInput[] | ArthurTenancyUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ArthurTenancyCreateOrConnectWithoutUnitInput | ArthurTenancyCreateOrConnectWithoutUnitInput[]
    upsert?: ArthurTenancyUpsertWithWhereUniqueWithoutUnitInput | ArthurTenancyUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: ArthurTenancyCreateManyUnitInputEnvelope
    set?: ArthurTenancyWhereUniqueInput | ArthurTenancyWhereUniqueInput[]
    disconnect?: ArthurTenancyWhereUniqueInput | ArthurTenancyWhereUniqueInput[]
    delete?: ArthurTenancyWhereUniqueInput | ArthurTenancyWhereUniqueInput[]
    connect?: ArthurTenancyWhereUniqueInput | ArthurTenancyWhereUniqueInput[]
    update?: ArthurTenancyUpdateWithWhereUniqueWithoutUnitInput | ArthurTenancyUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: ArthurTenancyUpdateManyWithWhereWithoutUnitInput | ArthurTenancyUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: ArthurTenancyScalarWhereInput | ArthurTenancyScalarWhereInput[]
  }

  export type ArthurTenancyCreatetenantsInput = {
    set: string[]
  }

  export type ArthurTenancyCreatephoneInput = {
    set: string[]
  }

  export type ArthurTenancyCreateemailInput = {
    set: string[]
  }

  export type ArthurUnitCreateNestedOneWithoutTenanciesInput = {
    create?: XOR<ArthurUnitCreateWithoutTenanciesInput, ArthurUnitUncheckedCreateWithoutTenanciesInput>
    connectOrCreate?: ArthurUnitCreateOrConnectWithoutTenanciesInput
    connect?: ArthurUnitWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArthurTenancyUpdatetenantsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ArthurTenancyUpdatephoneInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ArthurTenancyUpdateemailInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ArthurUnitUpdateOneRequiredWithoutTenanciesNestedInput = {
    create?: XOR<ArthurUnitCreateWithoutTenanciesInput, ArthurUnitUncheckedCreateWithoutTenanciesInput>
    connectOrCreate?: ArthurUnitCreateOrConnectWithoutTenanciesInput
    upsert?: ArthurUnitUpsertWithoutTenanciesInput
    connect?: ArthurUnitWhereUniqueInput
    update?: XOR<XOR<ArthurUnitUpdateToOneWithWhereWithoutTenanciesInput, ArthurUnitUpdateWithoutTenanciesInput>, ArthurUnitUncheckedUpdateWithoutTenanciesInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type UserCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string | null
    posts?: PostCreateNestedManyWithoutCreatedByInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutCreatedByInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostCreateManyCreatedByInputEnvelope = {
    data: PostCreateManyCreatedByInput | PostCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
  }

  export type PostUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
  }

  export type PostUpdateManyWithWhereWithoutCreatedByInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type ArthurUnitCreateWithoutPropertyInput = {
    id: string
    name: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    landlordEntity?: string | null
    referenceCode?: string | null
    bankName?: string | null
    sortCode?: string | null
    accountNumber?: string | null
    accountName?: string | null
    epcRating?: string | null
    epcScore?: number | null
    epcCertificate?: string | null
    epcAssessedDate?: string | null
    epcExpiryDate?: string | null
    epcAssessor?: string | null
    eicSerial?: string | null
    eicInspectedDate?: string | null
    eicExpiryDate?: string | null
    insurancePolicy?: string | null
    insuranceStartDate?: string | null
    insuranceStatus?: string | null
    elecMeterSerial?: string | null
    elecMeterCheckInValue?: string | null
    elecMeterCheckInDate?: string | null
    waterMeterSerial?: string | null
    waterMeterCheckInValue?: string | null
    waterMeterCheckInDate?: string | null
    outstandingDocs?: ArthurUnitCreateoutstandingDocsInput | string[]
    complianceNotes?: string | null
    tenancies?: ArthurTenancyCreateNestedManyWithoutUnitInput
  }

  export type ArthurUnitUncheckedCreateWithoutPropertyInput = {
    id: string
    name: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    landlordEntity?: string | null
    referenceCode?: string | null
    bankName?: string | null
    sortCode?: string | null
    accountNumber?: string | null
    accountName?: string | null
    epcRating?: string | null
    epcScore?: number | null
    epcCertificate?: string | null
    epcAssessedDate?: string | null
    epcExpiryDate?: string | null
    epcAssessor?: string | null
    eicSerial?: string | null
    eicInspectedDate?: string | null
    eicExpiryDate?: string | null
    insurancePolicy?: string | null
    insuranceStartDate?: string | null
    insuranceStatus?: string | null
    elecMeterSerial?: string | null
    elecMeterCheckInValue?: string | null
    elecMeterCheckInDate?: string | null
    waterMeterSerial?: string | null
    waterMeterCheckInValue?: string | null
    waterMeterCheckInDate?: string | null
    outstandingDocs?: ArthurUnitCreateoutstandingDocsInput | string[]
    complianceNotes?: string | null
    tenancies?: ArthurTenancyUncheckedCreateNestedManyWithoutUnitInput
  }

  export type ArthurUnitCreateOrConnectWithoutPropertyInput = {
    where: ArthurUnitWhereUniqueInput
    create: XOR<ArthurUnitCreateWithoutPropertyInput, ArthurUnitUncheckedCreateWithoutPropertyInput>
  }

  export type ArthurUnitCreateManyPropertyInputEnvelope = {
    data: ArthurUnitCreateManyPropertyInput | ArthurUnitCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type ArthurUnitUpsertWithWhereUniqueWithoutPropertyInput = {
    where: ArthurUnitWhereUniqueInput
    update: XOR<ArthurUnitUpdateWithoutPropertyInput, ArthurUnitUncheckedUpdateWithoutPropertyInput>
    create: XOR<ArthurUnitCreateWithoutPropertyInput, ArthurUnitUncheckedCreateWithoutPropertyInput>
  }

  export type ArthurUnitUpdateWithWhereUniqueWithoutPropertyInput = {
    where: ArthurUnitWhereUniqueInput
    data: XOR<ArthurUnitUpdateWithoutPropertyInput, ArthurUnitUncheckedUpdateWithoutPropertyInput>
  }

  export type ArthurUnitUpdateManyWithWhereWithoutPropertyInput = {
    where: ArthurUnitScalarWhereInput
    data: XOR<ArthurUnitUpdateManyMutationInput, ArthurUnitUncheckedUpdateManyWithoutPropertyInput>
  }

  export type ArthurUnitScalarWhereInput = {
    AND?: ArthurUnitScalarWhereInput | ArthurUnitScalarWhereInput[]
    OR?: ArthurUnitScalarWhereInput[]
    NOT?: ArthurUnitScalarWhereInput | ArthurUnitScalarWhereInput[]
    id?: StringFilter<"ArthurUnit"> | string
    propertyId?: StringFilter<"ArthurUnit"> | string
    name?: StringFilter<"ArthurUnit"> | string
    status?: StringFilter<"ArthurUnit"> | string
    createdAt?: DateTimeFilter<"ArthurUnit"> | Date | string
    updatedAt?: DateTimeFilter<"ArthurUnit"> | Date | string
    landlordEntity?: StringNullableFilter<"ArthurUnit"> | string | null
    referenceCode?: StringNullableFilter<"ArthurUnit"> | string | null
    bankName?: StringNullableFilter<"ArthurUnit"> | string | null
    sortCode?: StringNullableFilter<"ArthurUnit"> | string | null
    accountNumber?: StringNullableFilter<"ArthurUnit"> | string | null
    accountName?: StringNullableFilter<"ArthurUnit"> | string | null
    epcRating?: StringNullableFilter<"ArthurUnit"> | string | null
    epcScore?: IntNullableFilter<"ArthurUnit"> | number | null
    epcCertificate?: StringNullableFilter<"ArthurUnit"> | string | null
    epcAssessedDate?: StringNullableFilter<"ArthurUnit"> | string | null
    epcExpiryDate?: StringNullableFilter<"ArthurUnit"> | string | null
    epcAssessor?: StringNullableFilter<"ArthurUnit"> | string | null
    eicSerial?: StringNullableFilter<"ArthurUnit"> | string | null
    eicInspectedDate?: StringNullableFilter<"ArthurUnit"> | string | null
    eicExpiryDate?: StringNullableFilter<"ArthurUnit"> | string | null
    insurancePolicy?: StringNullableFilter<"ArthurUnit"> | string | null
    insuranceStartDate?: StringNullableFilter<"ArthurUnit"> | string | null
    insuranceStatus?: StringNullableFilter<"ArthurUnit"> | string | null
    elecMeterSerial?: StringNullableFilter<"ArthurUnit"> | string | null
    elecMeterCheckInValue?: StringNullableFilter<"ArthurUnit"> | string | null
    elecMeterCheckInDate?: StringNullableFilter<"ArthurUnit"> | string | null
    waterMeterSerial?: StringNullableFilter<"ArthurUnit"> | string | null
    waterMeterCheckInValue?: StringNullableFilter<"ArthurUnit"> | string | null
    waterMeterCheckInDate?: StringNullableFilter<"ArthurUnit"> | string | null
    outstandingDocs?: StringNullableListFilter<"ArthurUnit">
    complianceNotes?: StringNullableFilter<"ArthurUnit"> | string | null
  }

  export type ArthurTenancyCreateWithoutUnitInput = {
    id: string
    status: string
    startDate?: string | null
    endDate?: string | null
    rent: string
    rentVal: number
    deposit: string
    depositVal: number
    lodged?: string | null
    received?: string | null
    tenants?: ArthurTenancyCreatetenantsInput | string[]
    phone?: ArthurTenancyCreatephoneInput | string[]
    email?: ArthurTenancyCreateemailInput | string[]
    lettingType: string
    rentStatus: string
    commentary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    code?: string | null
  }

  export type ArthurTenancyUncheckedCreateWithoutUnitInput = {
    id: string
    status: string
    startDate?: string | null
    endDate?: string | null
    rent: string
    rentVal: number
    deposit: string
    depositVal: number
    lodged?: string | null
    received?: string | null
    tenants?: ArthurTenancyCreatetenantsInput | string[]
    phone?: ArthurTenancyCreatephoneInput | string[]
    email?: ArthurTenancyCreateemailInput | string[]
    lettingType: string
    rentStatus: string
    commentary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    code?: string | null
  }

  export type ArthurTenancyCreateOrConnectWithoutUnitInput = {
    where: ArthurTenancyWhereUniqueInput
    create: XOR<ArthurTenancyCreateWithoutUnitInput, ArthurTenancyUncheckedCreateWithoutUnitInput>
  }

  export type ArthurTenancyCreateManyUnitInputEnvelope = {
    data: ArthurTenancyCreateManyUnitInput | ArthurTenancyCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type ArthurPropertyCreateWithoutUnitsInput = {
    id: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArthurPropertyUncheckedCreateWithoutUnitsInput = {
    id: string
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArthurPropertyCreateOrConnectWithoutUnitsInput = {
    where: ArthurPropertyWhereUniqueInput
    create: XOR<ArthurPropertyCreateWithoutUnitsInput, ArthurPropertyUncheckedCreateWithoutUnitsInput>
  }

  export type ArthurTenancyUpsertWithWhereUniqueWithoutUnitInput = {
    where: ArthurTenancyWhereUniqueInput
    update: XOR<ArthurTenancyUpdateWithoutUnitInput, ArthurTenancyUncheckedUpdateWithoutUnitInput>
    create: XOR<ArthurTenancyCreateWithoutUnitInput, ArthurTenancyUncheckedCreateWithoutUnitInput>
  }

  export type ArthurTenancyUpdateWithWhereUniqueWithoutUnitInput = {
    where: ArthurTenancyWhereUniqueInput
    data: XOR<ArthurTenancyUpdateWithoutUnitInput, ArthurTenancyUncheckedUpdateWithoutUnitInput>
  }

  export type ArthurTenancyUpdateManyWithWhereWithoutUnitInput = {
    where: ArthurTenancyScalarWhereInput
    data: XOR<ArthurTenancyUpdateManyMutationInput, ArthurTenancyUncheckedUpdateManyWithoutUnitInput>
  }

  export type ArthurTenancyScalarWhereInput = {
    AND?: ArthurTenancyScalarWhereInput | ArthurTenancyScalarWhereInput[]
    OR?: ArthurTenancyScalarWhereInput[]
    NOT?: ArthurTenancyScalarWhereInput | ArthurTenancyScalarWhereInput[]
    id?: StringFilter<"ArthurTenancy"> | string
    unitId?: StringFilter<"ArthurTenancy"> | string
    status?: StringFilter<"ArthurTenancy"> | string
    startDate?: StringNullableFilter<"ArthurTenancy"> | string | null
    endDate?: StringNullableFilter<"ArthurTenancy"> | string | null
    rent?: StringFilter<"ArthurTenancy"> | string
    rentVal?: FloatFilter<"ArthurTenancy"> | number
    deposit?: StringFilter<"ArthurTenancy"> | string
    depositVal?: FloatFilter<"ArthurTenancy"> | number
    lodged?: StringNullableFilter<"ArthurTenancy"> | string | null
    received?: StringNullableFilter<"ArthurTenancy"> | string | null
    tenants?: StringNullableListFilter<"ArthurTenancy">
    phone?: StringNullableListFilter<"ArthurTenancy">
    email?: StringNullableListFilter<"ArthurTenancy">
    lettingType?: StringFilter<"ArthurTenancy"> | string
    rentStatus?: StringFilter<"ArthurTenancy"> | string
    commentary?: StringFilter<"ArthurTenancy"> | string
    createdAt?: DateTimeFilter<"ArthurTenancy"> | Date | string
    updatedAt?: DateTimeFilter<"ArthurTenancy"> | Date | string
    address?: StringNullableFilter<"ArthurTenancy"> | string | null
    code?: StringNullableFilter<"ArthurTenancy"> | string | null
  }

  export type ArthurPropertyUpsertWithoutUnitsInput = {
    update: XOR<ArthurPropertyUpdateWithoutUnitsInput, ArthurPropertyUncheckedUpdateWithoutUnitsInput>
    create: XOR<ArthurPropertyCreateWithoutUnitsInput, ArthurPropertyUncheckedCreateWithoutUnitsInput>
    where?: ArthurPropertyWhereInput
  }

  export type ArthurPropertyUpdateToOneWithWhereWithoutUnitsInput = {
    where?: ArthurPropertyWhereInput
    data: XOR<ArthurPropertyUpdateWithoutUnitsInput, ArthurPropertyUncheckedUpdateWithoutUnitsInput>
  }

  export type ArthurPropertyUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArthurPropertyUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArthurUnitCreateWithoutTenanciesInput = {
    id: string
    name: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    landlordEntity?: string | null
    referenceCode?: string | null
    bankName?: string | null
    sortCode?: string | null
    accountNumber?: string | null
    accountName?: string | null
    epcRating?: string | null
    epcScore?: number | null
    epcCertificate?: string | null
    epcAssessedDate?: string | null
    epcExpiryDate?: string | null
    epcAssessor?: string | null
    eicSerial?: string | null
    eicInspectedDate?: string | null
    eicExpiryDate?: string | null
    insurancePolicy?: string | null
    insuranceStartDate?: string | null
    insuranceStatus?: string | null
    elecMeterSerial?: string | null
    elecMeterCheckInValue?: string | null
    elecMeterCheckInDate?: string | null
    waterMeterSerial?: string | null
    waterMeterCheckInValue?: string | null
    waterMeterCheckInDate?: string | null
    outstandingDocs?: ArthurUnitCreateoutstandingDocsInput | string[]
    complianceNotes?: string | null
    property: ArthurPropertyCreateNestedOneWithoutUnitsInput
  }

  export type ArthurUnitUncheckedCreateWithoutTenanciesInput = {
    id: string
    propertyId: string
    name: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    landlordEntity?: string | null
    referenceCode?: string | null
    bankName?: string | null
    sortCode?: string | null
    accountNumber?: string | null
    accountName?: string | null
    epcRating?: string | null
    epcScore?: number | null
    epcCertificate?: string | null
    epcAssessedDate?: string | null
    epcExpiryDate?: string | null
    epcAssessor?: string | null
    eicSerial?: string | null
    eicInspectedDate?: string | null
    eicExpiryDate?: string | null
    insurancePolicy?: string | null
    insuranceStartDate?: string | null
    insuranceStatus?: string | null
    elecMeterSerial?: string | null
    elecMeterCheckInValue?: string | null
    elecMeterCheckInDate?: string | null
    waterMeterSerial?: string | null
    waterMeterCheckInValue?: string | null
    waterMeterCheckInDate?: string | null
    outstandingDocs?: ArthurUnitCreateoutstandingDocsInput | string[]
    complianceNotes?: string | null
  }

  export type ArthurUnitCreateOrConnectWithoutTenanciesInput = {
    where: ArthurUnitWhereUniqueInput
    create: XOR<ArthurUnitCreateWithoutTenanciesInput, ArthurUnitUncheckedCreateWithoutTenanciesInput>
  }

  export type ArthurUnitUpsertWithoutTenanciesInput = {
    update: XOR<ArthurUnitUpdateWithoutTenanciesInput, ArthurUnitUncheckedUpdateWithoutTenanciesInput>
    create: XOR<ArthurUnitCreateWithoutTenanciesInput, ArthurUnitUncheckedCreateWithoutTenanciesInput>
    where?: ArthurUnitWhereInput
  }

  export type ArthurUnitUpdateToOneWithWhereWithoutTenanciesInput = {
    where?: ArthurUnitWhereInput
    data: XOR<ArthurUnitUpdateWithoutTenanciesInput, ArthurUnitUncheckedUpdateWithoutTenanciesInput>
  }

  export type ArthurUnitUpdateWithoutTenanciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    landlordEntity?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    sortCode?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    epcRating?: NullableStringFieldUpdateOperationsInput | string | null
    epcScore?: NullableIntFieldUpdateOperationsInput | number | null
    epcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessedDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessor?: NullableStringFieldUpdateOperationsInput | string | null
    eicSerial?: NullableStringFieldUpdateOperationsInput | string | null
    eicInspectedDate?: NullableStringFieldUpdateOperationsInput | string | null
    eicExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    insurancePolicy?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    outstandingDocs?: ArthurUnitUpdateoutstandingDocsInput | string[]
    complianceNotes?: NullableStringFieldUpdateOperationsInput | string | null
    property?: ArthurPropertyUpdateOneRequiredWithoutUnitsNestedInput
  }

  export type ArthurUnitUncheckedUpdateWithoutTenanciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    landlordEntity?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    sortCode?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    epcRating?: NullableStringFieldUpdateOperationsInput | string | null
    epcScore?: NullableIntFieldUpdateOperationsInput | number | null
    epcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessedDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessor?: NullableStringFieldUpdateOperationsInput | string | null
    eicSerial?: NullableStringFieldUpdateOperationsInput | string | null
    eicInspectedDate?: NullableStringFieldUpdateOperationsInput | string | null
    eicExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    insurancePolicy?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    outstandingDocs?: ArthurUnitUpdateoutstandingDocsInput | string[]
    complianceNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type PostCreateManyCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArthurUnitCreateManyPropertyInput = {
    id: string
    name: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    landlordEntity?: string | null
    referenceCode?: string | null
    bankName?: string | null
    sortCode?: string | null
    accountNumber?: string | null
    accountName?: string | null
    epcRating?: string | null
    epcScore?: number | null
    epcCertificate?: string | null
    epcAssessedDate?: string | null
    epcExpiryDate?: string | null
    epcAssessor?: string | null
    eicSerial?: string | null
    eicInspectedDate?: string | null
    eicExpiryDate?: string | null
    insurancePolicy?: string | null
    insuranceStartDate?: string | null
    insuranceStatus?: string | null
    elecMeterSerial?: string | null
    elecMeterCheckInValue?: string | null
    elecMeterCheckInDate?: string | null
    waterMeterSerial?: string | null
    waterMeterCheckInValue?: string | null
    waterMeterCheckInDate?: string | null
    outstandingDocs?: ArthurUnitCreateoutstandingDocsInput | string[]
    complianceNotes?: string | null
  }

  export type ArthurUnitUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    landlordEntity?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    sortCode?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    epcRating?: NullableStringFieldUpdateOperationsInput | string | null
    epcScore?: NullableIntFieldUpdateOperationsInput | number | null
    epcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessedDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessor?: NullableStringFieldUpdateOperationsInput | string | null
    eicSerial?: NullableStringFieldUpdateOperationsInput | string | null
    eicInspectedDate?: NullableStringFieldUpdateOperationsInput | string | null
    eicExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    insurancePolicy?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    outstandingDocs?: ArthurUnitUpdateoutstandingDocsInput | string[]
    complianceNotes?: NullableStringFieldUpdateOperationsInput | string | null
    tenancies?: ArthurTenancyUpdateManyWithoutUnitNestedInput
  }

  export type ArthurUnitUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    landlordEntity?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    sortCode?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    epcRating?: NullableStringFieldUpdateOperationsInput | string | null
    epcScore?: NullableIntFieldUpdateOperationsInput | number | null
    epcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessedDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessor?: NullableStringFieldUpdateOperationsInput | string | null
    eicSerial?: NullableStringFieldUpdateOperationsInput | string | null
    eicInspectedDate?: NullableStringFieldUpdateOperationsInput | string | null
    eicExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    insurancePolicy?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    outstandingDocs?: ArthurUnitUpdateoutstandingDocsInput | string[]
    complianceNotes?: NullableStringFieldUpdateOperationsInput | string | null
    tenancies?: ArthurTenancyUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type ArthurUnitUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    landlordEntity?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    sortCode?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    epcRating?: NullableStringFieldUpdateOperationsInput | string | null
    epcScore?: NullableIntFieldUpdateOperationsInput | number | null
    epcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessedDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    epcAssessor?: NullableStringFieldUpdateOperationsInput | string | null
    eicSerial?: NullableStringFieldUpdateOperationsInput | string | null
    eicInspectedDate?: NullableStringFieldUpdateOperationsInput | string | null
    eicExpiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    insurancePolicy?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStartDate?: NullableStringFieldUpdateOperationsInput | string | null
    insuranceStatus?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    elecMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterSerial?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInValue?: NullableStringFieldUpdateOperationsInput | string | null
    waterMeterCheckInDate?: NullableStringFieldUpdateOperationsInput | string | null
    outstandingDocs?: ArthurUnitUpdateoutstandingDocsInput | string[]
    complianceNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArthurTenancyCreateManyUnitInput = {
    id: string
    status: string
    startDate?: string | null
    endDate?: string | null
    rent: string
    rentVal: number
    deposit: string
    depositVal: number
    lodged?: string | null
    received?: string | null
    tenants?: ArthurTenancyCreatetenantsInput | string[]
    phone?: ArthurTenancyCreatephoneInput | string[]
    email?: ArthurTenancyCreateemailInput | string[]
    lettingType: string
    rentStatus: string
    commentary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: string | null
    code?: string | null
  }

  export type ArthurTenancyUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    rent?: StringFieldUpdateOperationsInput | string
    rentVal?: FloatFieldUpdateOperationsInput | number
    deposit?: StringFieldUpdateOperationsInput | string
    depositVal?: FloatFieldUpdateOperationsInput | number
    lodged?: NullableStringFieldUpdateOperationsInput | string | null
    received?: NullableStringFieldUpdateOperationsInput | string | null
    tenants?: ArthurTenancyUpdatetenantsInput | string[]
    phone?: ArthurTenancyUpdatephoneInput | string[]
    email?: ArthurTenancyUpdateemailInput | string[]
    lettingType?: StringFieldUpdateOperationsInput | string
    rentStatus?: StringFieldUpdateOperationsInput | string
    commentary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArthurTenancyUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    rent?: StringFieldUpdateOperationsInput | string
    rentVal?: FloatFieldUpdateOperationsInput | number
    deposit?: StringFieldUpdateOperationsInput | string
    depositVal?: FloatFieldUpdateOperationsInput | number
    lodged?: NullableStringFieldUpdateOperationsInput | string | null
    received?: NullableStringFieldUpdateOperationsInput | string | null
    tenants?: ArthurTenancyUpdatetenantsInput | string[]
    phone?: ArthurTenancyUpdatephoneInput | string[]
    email?: ArthurTenancyUpdateemailInput | string[]
    lettingType?: StringFieldUpdateOperationsInput | string
    rentStatus?: StringFieldUpdateOperationsInput | string
    commentary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArthurTenancyUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startDate?: NullableStringFieldUpdateOperationsInput | string | null
    endDate?: NullableStringFieldUpdateOperationsInput | string | null
    rent?: StringFieldUpdateOperationsInput | string
    rentVal?: FloatFieldUpdateOperationsInput | number
    deposit?: StringFieldUpdateOperationsInput | string
    depositVal?: FloatFieldUpdateOperationsInput | number
    lodged?: NullableStringFieldUpdateOperationsInput | string | null
    received?: NullableStringFieldUpdateOperationsInput | string | null
    tenants?: ArthurTenancyUpdatetenantsInput | string[]
    phone?: ArthurTenancyUpdatephoneInput | string[]
    email?: ArthurTenancyUpdateemailInput | string[]
    lettingType?: StringFieldUpdateOperationsInput | string
    rentStatus?: StringFieldUpdateOperationsInput | string
    commentary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }



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