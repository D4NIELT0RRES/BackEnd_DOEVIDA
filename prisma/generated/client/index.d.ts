
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
 * Model tbl_agendamento
 * 
 */
export type tbl_agendamento = $Result.DefaultSelection<Prisma.$tbl_agendamentoPayload>
/**
 * Model tbl_banco_sangue
 * 
 */
export type tbl_banco_sangue = $Result.DefaultSelection<Prisma.$tbl_banco_sanguePayload>
/**
 * Model tbl_certificado
 * 
 */
export type tbl_certificado = $Result.DefaultSelection<Prisma.$tbl_certificadoPayload>
/**
 * Model tbl_doacao
 * 
 */
export type tbl_doacao = $Result.DefaultSelection<Prisma.$tbl_doacaoPayload>
/**
 * Model tbl_hospital
 * 
 */
export type tbl_hospital = $Result.DefaultSelection<Prisma.$tbl_hospitalPayload>
/**
 * Model tbl_sexo
 * 
 */
export type tbl_sexo = $Result.DefaultSelection<Prisma.$tbl_sexoPayload>
/**
 * Model tbl_telefone
 * 
 */
export type tbl_telefone = $Result.DefaultSelection<Prisma.$tbl_telefonePayload>
/**
 * Model tbl_tipo_sanguineo
 * 
 */
export type tbl_tipo_sanguineo = $Result.DefaultSelection<Prisma.$tbl_tipo_sanguineoPayload>
/**
 * Model tbl_usuario
 * 
 */
export type tbl_usuario = $Result.DefaultSelection<Prisma.$tbl_usuarioPayload>
/**
 * Model tbl_recuperacao_senha
 * 
 */
export type tbl_recuperacao_senha = $Result.DefaultSelection<Prisma.$tbl_recuperacao_senhaPayload>
/**
 * Model tbl_registro_doacao
 * 
 */
export type tbl_registro_doacao = $Result.DefaultSelection<Prisma.$tbl_registro_doacaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const tbl_agendamento_status: {
  Agendado: 'Agendado',
  Em_espera: 'Em_espera',
  Conclu_do: 'Conclu_do',
  Cancelado: 'Cancelado'
};

export type tbl_agendamento_status = (typeof tbl_agendamento_status)[keyof typeof tbl_agendamento_status]

}

export type tbl_agendamento_status = $Enums.tbl_agendamento_status

export const tbl_agendamento_status: typeof $Enums.tbl_agendamento_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tbl_agendamentos
 * const tbl_agendamentos = await prisma.tbl_agendamento.findMany()
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
   * // Fetch zero or more Tbl_agendamentos
   * const tbl_agendamentos = await prisma.tbl_agendamento.findMany()
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
   * `prisma.tbl_agendamento`: Exposes CRUD operations for the **tbl_agendamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_agendamentos
    * const tbl_agendamentos = await prisma.tbl_agendamento.findMany()
    * ```
    */
  get tbl_agendamento(): Prisma.tbl_agendamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_banco_sangue`: Exposes CRUD operations for the **tbl_banco_sangue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_banco_sangues
    * const tbl_banco_sangues = await prisma.tbl_banco_sangue.findMany()
    * ```
    */
  get tbl_banco_sangue(): Prisma.tbl_banco_sangueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_certificado`: Exposes CRUD operations for the **tbl_certificado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_certificados
    * const tbl_certificados = await prisma.tbl_certificado.findMany()
    * ```
    */
  get tbl_certificado(): Prisma.tbl_certificadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_doacao`: Exposes CRUD operations for the **tbl_doacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_doacaos
    * const tbl_doacaos = await prisma.tbl_doacao.findMany()
    * ```
    */
  get tbl_doacao(): Prisma.tbl_doacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_hospital`: Exposes CRUD operations for the **tbl_hospital** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_hospitals
    * const tbl_hospitals = await prisma.tbl_hospital.findMany()
    * ```
    */
  get tbl_hospital(): Prisma.tbl_hospitalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_sexo`: Exposes CRUD operations for the **tbl_sexo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_sexos
    * const tbl_sexos = await prisma.tbl_sexo.findMany()
    * ```
    */
  get tbl_sexo(): Prisma.tbl_sexoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_telefone`: Exposes CRUD operations for the **tbl_telefone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_telefones
    * const tbl_telefones = await prisma.tbl_telefone.findMany()
    * ```
    */
  get tbl_telefone(): Prisma.tbl_telefoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_tipo_sanguineo`: Exposes CRUD operations for the **tbl_tipo_sanguineo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_tipo_sanguineos
    * const tbl_tipo_sanguineos = await prisma.tbl_tipo_sanguineo.findMany()
    * ```
    */
  get tbl_tipo_sanguineo(): Prisma.tbl_tipo_sanguineoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_usuario`: Exposes CRUD operations for the **tbl_usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_usuarios
    * const tbl_usuarios = await prisma.tbl_usuario.findMany()
    * ```
    */
  get tbl_usuario(): Prisma.tbl_usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_recuperacao_senha`: Exposes CRUD operations for the **tbl_recuperacao_senha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_recuperacao_senhas
    * const tbl_recuperacao_senhas = await prisma.tbl_recuperacao_senha.findMany()
    * ```
    */
  get tbl_recuperacao_senha(): Prisma.tbl_recuperacao_senhaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_registro_doacao`: Exposes CRUD operations for the **tbl_registro_doacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_registro_doacaos
    * const tbl_registro_doacaos = await prisma.tbl_registro_doacao.findMany()
    * ```
    */
  get tbl_registro_doacao(): Prisma.tbl_registro_doacaoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
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
    tbl_agendamento: 'tbl_agendamento',
    tbl_banco_sangue: 'tbl_banco_sangue',
    tbl_certificado: 'tbl_certificado',
    tbl_doacao: 'tbl_doacao',
    tbl_hospital: 'tbl_hospital',
    tbl_sexo: 'tbl_sexo',
    tbl_telefone: 'tbl_telefone',
    tbl_tipo_sanguineo: 'tbl_tipo_sanguineo',
    tbl_usuario: 'tbl_usuario',
    tbl_recuperacao_senha: 'tbl_recuperacao_senha',
    tbl_registro_doacao: 'tbl_registro_doacao'
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
      modelProps: "tbl_agendamento" | "tbl_banco_sangue" | "tbl_certificado" | "tbl_doacao" | "tbl_hospital" | "tbl_sexo" | "tbl_telefone" | "tbl_tipo_sanguineo" | "tbl_usuario" | "tbl_recuperacao_senha" | "tbl_registro_doacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tbl_agendamento: {
        payload: Prisma.$tbl_agendamentoPayload<ExtArgs>
        fields: Prisma.tbl_agendamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_agendamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_agendamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_agendamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_agendamentoPayload>
          }
          findFirst: {
            args: Prisma.tbl_agendamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_agendamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_agendamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_agendamentoPayload>
          }
          findMany: {
            args: Prisma.tbl_agendamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_agendamentoPayload>[]
          }
          create: {
            args: Prisma.tbl_agendamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_agendamentoPayload>
          }
          createMany: {
            args: Prisma.tbl_agendamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_agendamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_agendamentoPayload>
          }
          update: {
            args: Prisma.tbl_agendamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_agendamentoPayload>
          }
          deleteMany: {
            args: Prisma.tbl_agendamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_agendamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_agendamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_agendamentoPayload>
          }
          aggregate: {
            args: Prisma.Tbl_agendamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_agendamento>
          }
          groupBy: {
            args: Prisma.tbl_agendamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_agendamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_agendamentoCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_agendamentoCountAggregateOutputType> | number
          }
        }
      }
      tbl_banco_sangue: {
        payload: Prisma.$tbl_banco_sanguePayload<ExtArgs>
        fields: Prisma.tbl_banco_sangueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_banco_sangueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_banco_sanguePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_banco_sangueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_banco_sanguePayload>
          }
          findFirst: {
            args: Prisma.tbl_banco_sangueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_banco_sanguePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_banco_sangueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_banco_sanguePayload>
          }
          findMany: {
            args: Prisma.tbl_banco_sangueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_banco_sanguePayload>[]
          }
          create: {
            args: Prisma.tbl_banco_sangueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_banco_sanguePayload>
          }
          createMany: {
            args: Prisma.tbl_banco_sangueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_banco_sangueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_banco_sanguePayload>
          }
          update: {
            args: Prisma.tbl_banco_sangueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_banco_sanguePayload>
          }
          deleteMany: {
            args: Prisma.tbl_banco_sangueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_banco_sangueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_banco_sangueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_banco_sanguePayload>
          }
          aggregate: {
            args: Prisma.Tbl_banco_sangueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_banco_sangue>
          }
          groupBy: {
            args: Prisma.tbl_banco_sangueGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_banco_sangueGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_banco_sangueCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_banco_sangueCountAggregateOutputType> | number
          }
        }
      }
      tbl_certificado: {
        payload: Prisma.$tbl_certificadoPayload<ExtArgs>
        fields: Prisma.tbl_certificadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_certificadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_certificadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_certificadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_certificadoPayload>
          }
          findFirst: {
            args: Prisma.tbl_certificadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_certificadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_certificadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_certificadoPayload>
          }
          findMany: {
            args: Prisma.tbl_certificadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_certificadoPayload>[]
          }
          create: {
            args: Prisma.tbl_certificadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_certificadoPayload>
          }
          createMany: {
            args: Prisma.tbl_certificadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_certificadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_certificadoPayload>
          }
          update: {
            args: Prisma.tbl_certificadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_certificadoPayload>
          }
          deleteMany: {
            args: Prisma.tbl_certificadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_certificadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_certificadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_certificadoPayload>
          }
          aggregate: {
            args: Prisma.Tbl_certificadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_certificado>
          }
          groupBy: {
            args: Prisma.tbl_certificadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_certificadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_certificadoCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_certificadoCountAggregateOutputType> | number
          }
        }
      }
      tbl_doacao: {
        payload: Prisma.$tbl_doacaoPayload<ExtArgs>
        fields: Prisma.tbl_doacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_doacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_doacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doacaoPayload>
          }
          findFirst: {
            args: Prisma.tbl_doacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_doacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doacaoPayload>
          }
          findMany: {
            args: Prisma.tbl_doacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doacaoPayload>[]
          }
          create: {
            args: Prisma.tbl_doacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doacaoPayload>
          }
          createMany: {
            args: Prisma.tbl_doacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_doacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doacaoPayload>
          }
          update: {
            args: Prisma.tbl_doacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doacaoPayload>
          }
          deleteMany: {
            args: Prisma.tbl_doacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_doacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_doacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_doacaoPayload>
          }
          aggregate: {
            args: Prisma.Tbl_doacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_doacao>
          }
          groupBy: {
            args: Prisma.tbl_doacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_doacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_doacaoCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_doacaoCountAggregateOutputType> | number
          }
        }
      }
      tbl_hospital: {
        payload: Prisma.$tbl_hospitalPayload<ExtArgs>
        fields: Prisma.tbl_hospitalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_hospitalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_hospitalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_hospitalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_hospitalPayload>
          }
          findFirst: {
            args: Prisma.tbl_hospitalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_hospitalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_hospitalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_hospitalPayload>
          }
          findMany: {
            args: Prisma.tbl_hospitalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_hospitalPayload>[]
          }
          create: {
            args: Prisma.tbl_hospitalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_hospitalPayload>
          }
          createMany: {
            args: Prisma.tbl_hospitalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_hospitalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_hospitalPayload>
          }
          update: {
            args: Prisma.tbl_hospitalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_hospitalPayload>
          }
          deleteMany: {
            args: Prisma.tbl_hospitalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_hospitalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_hospitalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_hospitalPayload>
          }
          aggregate: {
            args: Prisma.Tbl_hospitalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_hospital>
          }
          groupBy: {
            args: Prisma.tbl_hospitalGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_hospitalGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_hospitalCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_hospitalCountAggregateOutputType> | number
          }
        }
      }
      tbl_sexo: {
        payload: Prisma.$tbl_sexoPayload<ExtArgs>
        fields: Prisma.tbl_sexoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_sexoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_sexoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload>
          }
          findFirst: {
            args: Prisma.tbl_sexoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_sexoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload>
          }
          findMany: {
            args: Prisma.tbl_sexoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload>[]
          }
          create: {
            args: Prisma.tbl_sexoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload>
          }
          createMany: {
            args: Prisma.tbl_sexoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_sexoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload>
          }
          update: {
            args: Prisma.tbl_sexoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload>
          }
          deleteMany: {
            args: Prisma.tbl_sexoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_sexoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_sexoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_sexoPayload>
          }
          aggregate: {
            args: Prisma.Tbl_sexoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_sexo>
          }
          groupBy: {
            args: Prisma.tbl_sexoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_sexoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_sexoCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_sexoCountAggregateOutputType> | number
          }
        }
      }
      tbl_telefone: {
        payload: Prisma.$tbl_telefonePayload<ExtArgs>
        fields: Prisma.tbl_telefoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_telefoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_telefonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_telefoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_telefonePayload>
          }
          findFirst: {
            args: Prisma.tbl_telefoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_telefonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_telefoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_telefonePayload>
          }
          findMany: {
            args: Prisma.tbl_telefoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_telefonePayload>[]
          }
          create: {
            args: Prisma.tbl_telefoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_telefonePayload>
          }
          createMany: {
            args: Prisma.tbl_telefoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_telefoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_telefonePayload>
          }
          update: {
            args: Prisma.tbl_telefoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_telefonePayload>
          }
          deleteMany: {
            args: Prisma.tbl_telefoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_telefoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_telefoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_telefonePayload>
          }
          aggregate: {
            args: Prisma.Tbl_telefoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_telefone>
          }
          groupBy: {
            args: Prisma.tbl_telefoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_telefoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_telefoneCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_telefoneCountAggregateOutputType> | number
          }
        }
      }
      tbl_tipo_sanguineo: {
        payload: Prisma.$tbl_tipo_sanguineoPayload<ExtArgs>
        fields: Prisma.tbl_tipo_sanguineoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_tipo_sanguineoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_tipo_sanguineoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_tipo_sanguineoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_tipo_sanguineoPayload>
          }
          findFirst: {
            args: Prisma.tbl_tipo_sanguineoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_tipo_sanguineoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_tipo_sanguineoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_tipo_sanguineoPayload>
          }
          findMany: {
            args: Prisma.tbl_tipo_sanguineoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_tipo_sanguineoPayload>[]
          }
          create: {
            args: Prisma.tbl_tipo_sanguineoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_tipo_sanguineoPayload>
          }
          createMany: {
            args: Prisma.tbl_tipo_sanguineoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_tipo_sanguineoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_tipo_sanguineoPayload>
          }
          update: {
            args: Prisma.tbl_tipo_sanguineoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_tipo_sanguineoPayload>
          }
          deleteMany: {
            args: Prisma.tbl_tipo_sanguineoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_tipo_sanguineoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_tipo_sanguineoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_tipo_sanguineoPayload>
          }
          aggregate: {
            args: Prisma.Tbl_tipo_sanguineoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_tipo_sanguineo>
          }
          groupBy: {
            args: Prisma.tbl_tipo_sanguineoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_tipo_sanguineoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_tipo_sanguineoCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_tipo_sanguineoCountAggregateOutputType> | number
          }
        }
      }
      tbl_usuario: {
        payload: Prisma.$tbl_usuarioPayload<ExtArgs>
        fields: Prisma.tbl_usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuarioPayload>
          }
          findFirst: {
            args: Prisma.tbl_usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuarioPayload>
          }
          findMany: {
            args: Prisma.tbl_usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuarioPayload>[]
          }
          create: {
            args: Prisma.tbl_usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuarioPayload>
          }
          createMany: {
            args: Prisma.tbl_usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuarioPayload>
          }
          update: {
            args: Prisma.tbl_usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuarioPayload>
          }
          deleteMany: {
            args: Prisma.tbl_usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuarioPayload>
          }
          aggregate: {
            args: Prisma.Tbl_usuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_usuario>
          }
          groupBy: {
            args: Prisma.tbl_usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_usuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_usuarioCountAggregateOutputType> | number
          }
        }
      }
      tbl_recuperacao_senha: {
        payload: Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>
        fields: Prisma.tbl_recuperacao_senhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_recuperacao_senhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_recuperacao_senhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload>
          }
          findFirst: {
            args: Prisma.tbl_recuperacao_senhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_recuperacao_senhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload>
          }
          findMany: {
            args: Prisma.tbl_recuperacao_senhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload>[]
          }
          create: {
            args: Prisma.tbl_recuperacao_senhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload>
          }
          createMany: {
            args: Prisma.tbl_recuperacao_senhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_recuperacao_senhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload>
          }
          update: {
            args: Prisma.tbl_recuperacao_senhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload>
          }
          deleteMany: {
            args: Prisma.tbl_recuperacao_senhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_recuperacao_senhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_recuperacao_senhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_recuperacao_senhaPayload>
          }
          aggregate: {
            args: Prisma.Tbl_recuperacao_senhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_recuperacao_senha>
          }
          groupBy: {
            args: Prisma.tbl_recuperacao_senhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_recuperacao_senhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_recuperacao_senhaCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_recuperacao_senhaCountAggregateOutputType> | number
          }
        }
      }
      tbl_registro_doacao: {
        payload: Prisma.$tbl_registro_doacaoPayload<ExtArgs>
        fields: Prisma.tbl_registro_doacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_registro_doacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_registro_doacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_registro_doacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_registro_doacaoPayload>
          }
          findFirst: {
            args: Prisma.tbl_registro_doacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_registro_doacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_registro_doacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_registro_doacaoPayload>
          }
          findMany: {
            args: Prisma.tbl_registro_doacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_registro_doacaoPayload>[]
          }
          create: {
            args: Prisma.tbl_registro_doacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_registro_doacaoPayload>
          }
          createMany: {
            args: Prisma.tbl_registro_doacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbl_registro_doacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_registro_doacaoPayload>
          }
          update: {
            args: Prisma.tbl_registro_doacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_registro_doacaoPayload>
          }
          deleteMany: {
            args: Prisma.tbl_registro_doacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_registro_doacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbl_registro_doacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_registro_doacaoPayload>
          }
          aggregate: {
            args: Prisma.Tbl_registro_doacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_registro_doacao>
          }
          groupBy: {
            args: Prisma.tbl_registro_doacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_registro_doacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_registro_doacaoCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_registro_doacaoCountAggregateOutputType> | number
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
    tbl_agendamento?: tbl_agendamentoOmit
    tbl_banco_sangue?: tbl_banco_sangueOmit
    tbl_certificado?: tbl_certificadoOmit
    tbl_doacao?: tbl_doacaoOmit
    tbl_hospital?: tbl_hospitalOmit
    tbl_sexo?: tbl_sexoOmit
    tbl_telefone?: tbl_telefoneOmit
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoOmit
    tbl_usuario?: tbl_usuarioOmit
    tbl_recuperacao_senha?: tbl_recuperacao_senhaOmit
    tbl_registro_doacao?: tbl_registro_doacaoOmit
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
   * Count Type Tbl_doacaoCountOutputType
   */

  export type Tbl_doacaoCountOutputType = {
    agendamentos: number
  }

  export type Tbl_doacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | Tbl_doacaoCountOutputTypeCountAgendamentosArgs
  }

  // Custom InputTypes
  /**
   * Tbl_doacaoCountOutputType without action
   */
  export type Tbl_doacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_doacaoCountOutputType
     */
    select?: Tbl_doacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_doacaoCountOutputType without action
   */
  export type Tbl_doacaoCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_agendamentoWhereInput
  }


  /**
   * Count Type Tbl_hospitalCountOutputType
   */

  export type Tbl_hospitalCountOutputType = {
    agendamentos: number
    tbl_banco_sangue: number
    tbl_registro_doacao: number
  }

  export type Tbl_hospitalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | Tbl_hospitalCountOutputTypeCountAgendamentosArgs
    tbl_banco_sangue?: boolean | Tbl_hospitalCountOutputTypeCountTbl_banco_sangueArgs
    tbl_registro_doacao?: boolean | Tbl_hospitalCountOutputTypeCountTbl_registro_doacaoArgs
  }

  // Custom InputTypes
  /**
   * Tbl_hospitalCountOutputType without action
   */
  export type Tbl_hospitalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_hospitalCountOutputType
     */
    select?: Tbl_hospitalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_hospitalCountOutputType without action
   */
  export type Tbl_hospitalCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_agendamentoWhereInput
  }

  /**
   * Tbl_hospitalCountOutputType without action
   */
  export type Tbl_hospitalCountOutputTypeCountTbl_banco_sangueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_banco_sangueWhereInput
  }

  /**
   * Tbl_hospitalCountOutputType without action
   */
  export type Tbl_hospitalCountOutputTypeCountTbl_registro_doacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_registro_doacaoWhereInput
  }


  /**
   * Count Type Tbl_sexoCountOutputType
   */

  export type Tbl_sexoCountOutputType = {
    usuarios: number
  }

  export type Tbl_sexoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Tbl_sexoCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * Tbl_sexoCountOutputType without action
   */
  export type Tbl_sexoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_sexoCountOutputType
     */
    select?: Tbl_sexoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_sexoCountOutputType without action
   */
  export type Tbl_sexoCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_usuarioWhereInput
  }


  /**
   * Count Type Tbl_tipo_sanguineoCountOutputType
   */

  export type Tbl_tipo_sanguineoCountOutputType = {
    tbl_banco_sangue: number
    tbl_usuario: number
  }

  export type Tbl_tipo_sanguineoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_banco_sangue?: boolean | Tbl_tipo_sanguineoCountOutputTypeCountTbl_banco_sangueArgs
    tbl_usuario?: boolean | Tbl_tipo_sanguineoCountOutputTypeCountTbl_usuarioArgs
  }

  // Custom InputTypes
  /**
   * Tbl_tipo_sanguineoCountOutputType without action
   */
  export type Tbl_tipo_sanguineoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_tipo_sanguineoCountOutputType
     */
    select?: Tbl_tipo_sanguineoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_tipo_sanguineoCountOutputType without action
   */
  export type Tbl_tipo_sanguineoCountOutputTypeCountTbl_banco_sangueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_banco_sangueWhereInput
  }

  /**
   * Tbl_tipo_sanguineoCountOutputType without action
   */
  export type Tbl_tipo_sanguineoCountOutputTypeCountTbl_usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_usuarioWhereInput
  }


  /**
   * Count Type Tbl_usuarioCountOutputType
   */

  export type Tbl_usuarioCountOutputType = {
    agendamentos: number
    tbl_certificado: number
    tbl_recuperacao_senha: number
    tbl_telefone: number
    tbl_registro_doacao: number
  }

  export type Tbl_usuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | Tbl_usuarioCountOutputTypeCountAgendamentosArgs
    tbl_certificado?: boolean | Tbl_usuarioCountOutputTypeCountTbl_certificadoArgs
    tbl_recuperacao_senha?: boolean | Tbl_usuarioCountOutputTypeCountTbl_recuperacao_senhaArgs
    tbl_telefone?: boolean | Tbl_usuarioCountOutputTypeCountTbl_telefoneArgs
    tbl_registro_doacao?: boolean | Tbl_usuarioCountOutputTypeCountTbl_registro_doacaoArgs
  }

  // Custom InputTypes
  /**
   * Tbl_usuarioCountOutputType without action
   */
  export type Tbl_usuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_usuarioCountOutputType
     */
    select?: Tbl_usuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_usuarioCountOutputType without action
   */
  export type Tbl_usuarioCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_agendamentoWhereInput
  }

  /**
   * Tbl_usuarioCountOutputType without action
   */
  export type Tbl_usuarioCountOutputTypeCountTbl_certificadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_certificadoWhereInput
  }

  /**
   * Tbl_usuarioCountOutputType without action
   */
  export type Tbl_usuarioCountOutputTypeCountTbl_recuperacao_senhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_recuperacao_senhaWhereInput
  }

  /**
   * Tbl_usuarioCountOutputType without action
   */
  export type Tbl_usuarioCountOutputTypeCountTbl_telefoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_telefoneWhereInput
  }

  /**
   * Tbl_usuarioCountOutputType without action
   */
  export type Tbl_usuarioCountOutputTypeCountTbl_registro_doacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_registro_doacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model tbl_agendamento
   */

  export type AggregateTbl_agendamento = {
    _count: Tbl_agendamentoCountAggregateOutputType | null
    _avg: Tbl_agendamentoAvgAggregateOutputType | null
    _sum: Tbl_agendamentoSumAggregateOutputType | null
    _min: Tbl_agendamentoMinAggregateOutputType | null
    _max: Tbl_agendamentoMaxAggregateOutputType | null
  }

  export type Tbl_agendamentoAvgAggregateOutputType = {
    id: number | null
    id_usuario: number | null
    id_doacao: number | null
    id_hospital: number | null
  }

  export type Tbl_agendamentoSumAggregateOutputType = {
    id: number | null
    id_usuario: number | null
    id_doacao: number | null
    id_hospital: number | null
  }

  export type Tbl_agendamentoMinAggregateOutputType = {
    id: number | null
    status: $Enums.tbl_agendamento_status | null
    data: Date | null
    hora: Date | null
    id_usuario: number | null
    id_doacao: number | null
    id_hospital: number | null
  }

  export type Tbl_agendamentoMaxAggregateOutputType = {
    id: number | null
    status: $Enums.tbl_agendamento_status | null
    data: Date | null
    hora: Date | null
    id_usuario: number | null
    id_doacao: number | null
    id_hospital: number | null
  }

  export type Tbl_agendamentoCountAggregateOutputType = {
    id: number
    status: number
    data: number
    hora: number
    id_usuario: number
    id_doacao: number
    id_hospital: number
    _all: number
  }


  export type Tbl_agendamentoAvgAggregateInputType = {
    id?: true
    id_usuario?: true
    id_doacao?: true
    id_hospital?: true
  }

  export type Tbl_agendamentoSumAggregateInputType = {
    id?: true
    id_usuario?: true
    id_doacao?: true
    id_hospital?: true
  }

  export type Tbl_agendamentoMinAggregateInputType = {
    id?: true
    status?: true
    data?: true
    hora?: true
    id_usuario?: true
    id_doacao?: true
    id_hospital?: true
  }

  export type Tbl_agendamentoMaxAggregateInputType = {
    id?: true
    status?: true
    data?: true
    hora?: true
    id_usuario?: true
    id_doacao?: true
    id_hospital?: true
  }

  export type Tbl_agendamentoCountAggregateInputType = {
    id?: true
    status?: true
    data?: true
    hora?: true
    id_usuario?: true
    id_doacao?: true
    id_hospital?: true
    _all?: true
  }

  export type Tbl_agendamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_agendamento to aggregate.
     */
    where?: tbl_agendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_agendamentos to fetch.
     */
    orderBy?: tbl_agendamentoOrderByWithRelationInput | tbl_agendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_agendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_agendamentos
    **/
    _count?: true | Tbl_agendamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_agendamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_agendamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_agendamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_agendamentoMaxAggregateInputType
  }

  export type GetTbl_agendamentoAggregateType<T extends Tbl_agendamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_agendamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_agendamento[P]>
      : GetScalarType<T[P], AggregateTbl_agendamento[P]>
  }




  export type tbl_agendamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_agendamentoWhereInput
    orderBy?: tbl_agendamentoOrderByWithAggregationInput | tbl_agendamentoOrderByWithAggregationInput[]
    by: Tbl_agendamentoScalarFieldEnum[] | Tbl_agendamentoScalarFieldEnum
    having?: tbl_agendamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_agendamentoCountAggregateInputType | true
    _avg?: Tbl_agendamentoAvgAggregateInputType
    _sum?: Tbl_agendamentoSumAggregateInputType
    _min?: Tbl_agendamentoMinAggregateInputType
    _max?: Tbl_agendamentoMaxAggregateInputType
  }

  export type Tbl_agendamentoGroupByOutputType = {
    id: number
    status: $Enums.tbl_agendamento_status
    data: Date
    hora: Date
    id_usuario: number | null
    id_doacao: number | null
    id_hospital: number | null
    _count: Tbl_agendamentoCountAggregateOutputType | null
    _avg: Tbl_agendamentoAvgAggregateOutputType | null
    _sum: Tbl_agendamentoSumAggregateOutputType | null
    _min: Tbl_agendamentoMinAggregateOutputType | null
    _max: Tbl_agendamentoMaxAggregateOutputType | null
  }

  type GetTbl_agendamentoGroupByPayload<T extends tbl_agendamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_agendamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_agendamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_agendamentoGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_agendamentoGroupByOutputType[P]>
        }
      >
    >


  export type tbl_agendamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    data?: boolean
    hora?: boolean
    id_usuario?: boolean
    id_doacao?: boolean
    id_hospital?: boolean
    usuario?: boolean | tbl_agendamento$usuarioArgs<ExtArgs>
    doacao?: boolean | tbl_agendamento$doacaoArgs<ExtArgs>
    hospital?: boolean | tbl_agendamento$hospitalArgs<ExtArgs>
    tbl_registro_doacao?: boolean | tbl_agendamento$tbl_registro_doacaoArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_agendamento"]>



  export type tbl_agendamentoSelectScalar = {
    id?: boolean
    status?: boolean
    data?: boolean
    hora?: boolean
    id_usuario?: boolean
    id_doacao?: boolean
    id_hospital?: boolean
  }

  export type tbl_agendamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "data" | "hora" | "id_usuario" | "id_doacao" | "id_hospital", ExtArgs["result"]["tbl_agendamento"]>
  export type tbl_agendamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | tbl_agendamento$usuarioArgs<ExtArgs>
    doacao?: boolean | tbl_agendamento$doacaoArgs<ExtArgs>
    hospital?: boolean | tbl_agendamento$hospitalArgs<ExtArgs>
    tbl_registro_doacao?: boolean | tbl_agendamento$tbl_registro_doacaoArgs<ExtArgs>
  }

  export type $tbl_agendamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_agendamento"
    objects: {
      usuario: Prisma.$tbl_usuarioPayload<ExtArgs> | null
      doacao: Prisma.$tbl_doacaoPayload<ExtArgs> | null
      hospital: Prisma.$tbl_hospitalPayload<ExtArgs> | null
      tbl_registro_doacao: Prisma.$tbl_registro_doacaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.tbl_agendamento_status
      data: Date
      hora: Date
      id_usuario: number | null
      id_doacao: number | null
      id_hospital: number | null
    }, ExtArgs["result"]["tbl_agendamento"]>
    composites: {}
  }

  type tbl_agendamentoGetPayload<S extends boolean | null | undefined | tbl_agendamentoDefaultArgs> = $Result.GetResult<Prisma.$tbl_agendamentoPayload, S>

  type tbl_agendamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_agendamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_agendamentoCountAggregateInputType | true
    }

  export interface tbl_agendamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_agendamento'], meta: { name: 'tbl_agendamento' } }
    /**
     * Find zero or one Tbl_agendamento that matches the filter.
     * @param {tbl_agendamentoFindUniqueArgs} args - Arguments to find a Tbl_agendamento
     * @example
     * // Get one Tbl_agendamento
     * const tbl_agendamento = await prisma.tbl_agendamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_agendamentoFindUniqueArgs>(args: SelectSubset<T, tbl_agendamentoFindUniqueArgs<ExtArgs>>): Prisma__tbl_agendamentoClient<$Result.GetResult<Prisma.$tbl_agendamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_agendamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_agendamentoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_agendamento
     * @example
     * // Get one Tbl_agendamento
     * const tbl_agendamento = await prisma.tbl_agendamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_agendamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_agendamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_agendamentoClient<$Result.GetResult<Prisma.$tbl_agendamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_agendamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_agendamentoFindFirstArgs} args - Arguments to find a Tbl_agendamento
     * @example
     * // Get one Tbl_agendamento
     * const tbl_agendamento = await prisma.tbl_agendamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_agendamentoFindFirstArgs>(args?: SelectSubset<T, tbl_agendamentoFindFirstArgs<ExtArgs>>): Prisma__tbl_agendamentoClient<$Result.GetResult<Prisma.$tbl_agendamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_agendamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_agendamentoFindFirstOrThrowArgs} args - Arguments to find a Tbl_agendamento
     * @example
     * // Get one Tbl_agendamento
     * const tbl_agendamento = await prisma.tbl_agendamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_agendamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_agendamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_agendamentoClient<$Result.GetResult<Prisma.$tbl_agendamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_agendamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_agendamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_agendamentos
     * const tbl_agendamentos = await prisma.tbl_agendamento.findMany()
     * 
     * // Get first 10 Tbl_agendamentos
     * const tbl_agendamentos = await prisma.tbl_agendamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_agendamentoWithIdOnly = await prisma.tbl_agendamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_agendamentoFindManyArgs>(args?: SelectSubset<T, tbl_agendamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_agendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_agendamento.
     * @param {tbl_agendamentoCreateArgs} args - Arguments to create a Tbl_agendamento.
     * @example
     * // Create one Tbl_agendamento
     * const Tbl_agendamento = await prisma.tbl_agendamento.create({
     *   data: {
     *     // ... data to create a Tbl_agendamento
     *   }
     * })
     * 
     */
    create<T extends tbl_agendamentoCreateArgs>(args: SelectSubset<T, tbl_agendamentoCreateArgs<ExtArgs>>): Prisma__tbl_agendamentoClient<$Result.GetResult<Prisma.$tbl_agendamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_agendamentos.
     * @param {tbl_agendamentoCreateManyArgs} args - Arguments to create many Tbl_agendamentos.
     * @example
     * // Create many Tbl_agendamentos
     * const tbl_agendamento = await prisma.tbl_agendamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_agendamentoCreateManyArgs>(args?: SelectSubset<T, tbl_agendamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_agendamento.
     * @param {tbl_agendamentoDeleteArgs} args - Arguments to delete one Tbl_agendamento.
     * @example
     * // Delete one Tbl_agendamento
     * const Tbl_agendamento = await prisma.tbl_agendamento.delete({
     *   where: {
     *     // ... filter to delete one Tbl_agendamento
     *   }
     * })
     * 
     */
    delete<T extends tbl_agendamentoDeleteArgs>(args: SelectSubset<T, tbl_agendamentoDeleteArgs<ExtArgs>>): Prisma__tbl_agendamentoClient<$Result.GetResult<Prisma.$tbl_agendamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_agendamento.
     * @param {tbl_agendamentoUpdateArgs} args - Arguments to update one Tbl_agendamento.
     * @example
     * // Update one Tbl_agendamento
     * const tbl_agendamento = await prisma.tbl_agendamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_agendamentoUpdateArgs>(args: SelectSubset<T, tbl_agendamentoUpdateArgs<ExtArgs>>): Prisma__tbl_agendamentoClient<$Result.GetResult<Prisma.$tbl_agendamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_agendamentos.
     * @param {tbl_agendamentoDeleteManyArgs} args - Arguments to filter Tbl_agendamentos to delete.
     * @example
     * // Delete a few Tbl_agendamentos
     * const { count } = await prisma.tbl_agendamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_agendamentoDeleteManyArgs>(args?: SelectSubset<T, tbl_agendamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_agendamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_agendamentos
     * const tbl_agendamento = await prisma.tbl_agendamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_agendamentoUpdateManyArgs>(args: SelectSubset<T, tbl_agendamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_agendamento.
     * @param {tbl_agendamentoUpsertArgs} args - Arguments to update or create a Tbl_agendamento.
     * @example
     * // Update or create a Tbl_agendamento
     * const tbl_agendamento = await prisma.tbl_agendamento.upsert({
     *   create: {
     *     // ... data to create a Tbl_agendamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_agendamento we want to update
     *   }
     * })
     */
    upsert<T extends tbl_agendamentoUpsertArgs>(args: SelectSubset<T, tbl_agendamentoUpsertArgs<ExtArgs>>): Prisma__tbl_agendamentoClient<$Result.GetResult<Prisma.$tbl_agendamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_agendamentoCountArgs} args - Arguments to filter Tbl_agendamentos to count.
     * @example
     * // Count the number of Tbl_agendamentos
     * const count = await prisma.tbl_agendamento.count({
     *   where: {
     *     // ... the filter for the Tbl_agendamentos we want to count
     *   }
     * })
    **/
    count<T extends tbl_agendamentoCountArgs>(
      args?: Subset<T, tbl_agendamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_agendamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_agendamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_agendamentoAggregateArgs>(args: Subset<T, Tbl_agendamentoAggregateArgs>): Prisma.PrismaPromise<GetTbl_agendamentoAggregateType<T>>

    /**
     * Group by Tbl_agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_agendamentoGroupByArgs} args - Group by arguments.
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
      T extends tbl_agendamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_agendamentoGroupByArgs['orderBy'] }
        : { orderBy?: tbl_agendamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_agendamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_agendamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_agendamento model
   */
  readonly fields: tbl_agendamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_agendamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_agendamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends tbl_agendamento$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, tbl_agendamento$usuarioArgs<ExtArgs>>): Prisma__tbl_usuarioClient<$Result.GetResult<Prisma.$tbl_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doacao<T extends tbl_agendamento$doacaoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_agendamento$doacaoArgs<ExtArgs>>): Prisma__tbl_doacaoClient<$Result.GetResult<Prisma.$tbl_doacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    hospital<T extends tbl_agendamento$hospitalArgs<ExtArgs> = {}>(args?: Subset<T, tbl_agendamento$hospitalArgs<ExtArgs>>): Prisma__tbl_hospitalClient<$Result.GetResult<Prisma.$tbl_hospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tbl_registro_doacao<T extends tbl_agendamento$tbl_registro_doacaoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_agendamento$tbl_registro_doacaoArgs<ExtArgs>>): Prisma__tbl_registro_doacaoClient<$Result.GetResult<Prisma.$tbl_registro_doacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tbl_agendamento model
   */
  interface tbl_agendamentoFieldRefs {
    readonly id: FieldRef<"tbl_agendamento", 'Int'>
    readonly status: FieldRef<"tbl_agendamento", 'tbl_agendamento_status'>
    readonly data: FieldRef<"tbl_agendamento", 'DateTime'>
    readonly hora: FieldRef<"tbl_agendamento", 'DateTime'>
    readonly id_usuario: FieldRef<"tbl_agendamento", 'Int'>
    readonly id_doacao: FieldRef<"tbl_agendamento", 'Int'>
    readonly id_hospital: FieldRef<"tbl_agendamento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_agendamento findUnique
   */
  export type tbl_agendamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_agendamento
     */
    select?: tbl_agendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_agendamento
     */
    omit?: tbl_agendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_agendamentoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_agendamento to fetch.
     */
    where: tbl_agendamentoWhereUniqueInput
  }

  /**
   * tbl_agendamento findUniqueOrThrow
   */
  export type tbl_agendamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_agendamento
     */
    select?: tbl_agendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_agendamento
     */
    omit?: tbl_agendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_agendamentoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_agendamento to fetch.
     */
    where: tbl_agendamentoWhereUniqueInput
  }

  /**
   * tbl_agendamento findFirst
   */
  export type tbl_agendamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_agendamento
     */
    select?: tbl_agendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_agendamento
     */
    omit?: tbl_agendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_agendamentoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_agendamento to fetch.
     */
    where?: tbl_agendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_agendamentos to fetch.
     */
    orderBy?: tbl_agendamentoOrderByWithRelationInput | tbl_agendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_agendamentos.
     */
    cursor?: tbl_agendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_agendamentos.
     */
    distinct?: Tbl_agendamentoScalarFieldEnum | Tbl_agendamentoScalarFieldEnum[]
  }

  /**
   * tbl_agendamento findFirstOrThrow
   */
  export type tbl_agendamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_agendamento
     */
    select?: tbl_agendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_agendamento
     */
    omit?: tbl_agendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_agendamentoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_agendamento to fetch.
     */
    where?: tbl_agendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_agendamentos to fetch.
     */
    orderBy?: tbl_agendamentoOrderByWithRelationInput | tbl_agendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_agendamentos.
     */
    cursor?: tbl_agendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_agendamentos.
     */
    distinct?: Tbl_agendamentoScalarFieldEnum | Tbl_agendamentoScalarFieldEnum[]
  }

  /**
   * tbl_agendamento findMany
   */
  export type tbl_agendamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_agendamento
     */
    select?: tbl_agendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_agendamento
     */
    omit?: tbl_agendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_agendamentoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_agendamentos to fetch.
     */
    where?: tbl_agendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_agendamentos to fetch.
     */
    orderBy?: tbl_agendamentoOrderByWithRelationInput | tbl_agendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_agendamentos.
     */
    cursor?: tbl_agendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_agendamentos.
     */
    skip?: number
    distinct?: Tbl_agendamentoScalarFieldEnum | Tbl_agendamentoScalarFieldEnum[]
  }

  /**
   * tbl_agendamento create
   */
  export type tbl_agendamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_agendamento
     */
    select?: tbl_agendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_agendamento
     */
    omit?: tbl_agendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_agendamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_agendamento.
     */
    data: XOR<tbl_agendamentoCreateInput, tbl_agendamentoUncheckedCreateInput>
  }

  /**
   * tbl_agendamento createMany
   */
  export type tbl_agendamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_agendamentos.
     */
    data: tbl_agendamentoCreateManyInput | tbl_agendamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_agendamento update
   */
  export type tbl_agendamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_agendamento
     */
    select?: tbl_agendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_agendamento
     */
    omit?: tbl_agendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_agendamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_agendamento.
     */
    data: XOR<tbl_agendamentoUpdateInput, tbl_agendamentoUncheckedUpdateInput>
    /**
     * Choose, which tbl_agendamento to update.
     */
    where: tbl_agendamentoWhereUniqueInput
  }

  /**
   * tbl_agendamento updateMany
   */
  export type tbl_agendamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_agendamentos.
     */
    data: XOR<tbl_agendamentoUpdateManyMutationInput, tbl_agendamentoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_agendamentos to update
     */
    where?: tbl_agendamentoWhereInput
    /**
     * Limit how many tbl_agendamentos to update.
     */
    limit?: number
  }

  /**
   * tbl_agendamento upsert
   */
  export type tbl_agendamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_agendamento
     */
    select?: tbl_agendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_agendamento
     */
    omit?: tbl_agendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_agendamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_agendamento to update in case it exists.
     */
    where: tbl_agendamentoWhereUniqueInput
    /**
     * In case the tbl_agendamento found by the `where` argument doesn't exist, create a new tbl_agendamento with this data.
     */
    create: XOR<tbl_agendamentoCreateInput, tbl_agendamentoUncheckedCreateInput>
    /**
     * In case the tbl_agendamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_agendamentoUpdateInput, tbl_agendamentoUncheckedUpdateInput>
  }

  /**
   * tbl_agendamento delete
   */
  export type tbl_agendamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_agendamento
     */
    select?: tbl_agendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_agendamento
     */
    omit?: tbl_agendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_agendamentoInclude<ExtArgs> | null
    /**
     * Filter which tbl_agendamento to delete.
     */
    where: tbl_agendamentoWhereUniqueInput
  }

  /**
   * tbl_agendamento deleteMany
   */
  export type tbl_agendamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_agendamentos to delete
     */
    where?: tbl_agendamentoWhereInput
    /**
     * Limit how many tbl_agendamentos to delete.
     */
    limit?: number
  }

  /**
   * tbl_agendamento.usuario
   */
  export type tbl_agendamento$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuario
     */
    select?: tbl_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuario
     */
    omit?: tbl_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuarioInclude<ExtArgs> | null
    where?: tbl_usuarioWhereInput
  }

  /**
   * tbl_agendamento.doacao
   */
  export type tbl_agendamento$doacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doacao
     */
    select?: tbl_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doacao
     */
    omit?: tbl_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doacaoInclude<ExtArgs> | null
    where?: tbl_doacaoWhereInput
  }

  /**
   * tbl_agendamento.hospital
   */
  export type tbl_agendamento$hospitalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_hospital
     */
    select?: tbl_hospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_hospital
     */
    omit?: tbl_hospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_hospitalInclude<ExtArgs> | null
    where?: tbl_hospitalWhereInput
  }

  /**
   * tbl_agendamento.tbl_registro_doacao
   */
  export type tbl_agendamento$tbl_registro_doacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_registro_doacao
     */
    select?: tbl_registro_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_registro_doacao
     */
    omit?: tbl_registro_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_registro_doacaoInclude<ExtArgs> | null
    where?: tbl_registro_doacaoWhereInput
  }

  /**
   * tbl_agendamento without action
   */
  export type tbl_agendamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_agendamento
     */
    select?: tbl_agendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_agendamento
     */
    omit?: tbl_agendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_agendamentoInclude<ExtArgs> | null
  }


  /**
   * Model tbl_banco_sangue
   */

  export type AggregateTbl_banco_sangue = {
    _count: Tbl_banco_sangueCountAggregateOutputType | null
    _avg: Tbl_banco_sangueAvgAggregateOutputType | null
    _sum: Tbl_banco_sangueSumAggregateOutputType | null
    _min: Tbl_banco_sangueMinAggregateOutputType | null
    _max: Tbl_banco_sangueMaxAggregateOutputType | null
  }

  export type Tbl_banco_sangueAvgAggregateOutputType = {
    id: number | null
    id_hospital: number | null
    id_tipo_sanguineo: number | null
    quantidade: number | null
  }

  export type Tbl_banco_sangueSumAggregateOutputType = {
    id: number | null
    id_hospital: number | null
    id_tipo_sanguineo: number | null
    quantidade: number | null
  }

  export type Tbl_banco_sangueMinAggregateOutputType = {
    id: number | null
    id_hospital: number | null
    id_tipo_sanguineo: number | null
    quantidade: number | null
  }

  export type Tbl_banco_sangueMaxAggregateOutputType = {
    id: number | null
    id_hospital: number | null
    id_tipo_sanguineo: number | null
    quantidade: number | null
  }

  export type Tbl_banco_sangueCountAggregateOutputType = {
    id: number
    id_hospital: number
    id_tipo_sanguineo: number
    quantidade: number
    _all: number
  }


  export type Tbl_banco_sangueAvgAggregateInputType = {
    id?: true
    id_hospital?: true
    id_tipo_sanguineo?: true
    quantidade?: true
  }

  export type Tbl_banco_sangueSumAggregateInputType = {
    id?: true
    id_hospital?: true
    id_tipo_sanguineo?: true
    quantidade?: true
  }

  export type Tbl_banco_sangueMinAggregateInputType = {
    id?: true
    id_hospital?: true
    id_tipo_sanguineo?: true
    quantidade?: true
  }

  export type Tbl_banco_sangueMaxAggregateInputType = {
    id?: true
    id_hospital?: true
    id_tipo_sanguineo?: true
    quantidade?: true
  }

  export type Tbl_banco_sangueCountAggregateInputType = {
    id?: true
    id_hospital?: true
    id_tipo_sanguineo?: true
    quantidade?: true
    _all?: true
  }

  export type Tbl_banco_sangueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_banco_sangue to aggregate.
     */
    where?: tbl_banco_sangueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_banco_sangues to fetch.
     */
    orderBy?: tbl_banco_sangueOrderByWithRelationInput | tbl_banco_sangueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_banco_sangueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_banco_sangues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_banco_sangues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_banco_sangues
    **/
    _count?: true | Tbl_banco_sangueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_banco_sangueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_banco_sangueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_banco_sangueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_banco_sangueMaxAggregateInputType
  }

  export type GetTbl_banco_sangueAggregateType<T extends Tbl_banco_sangueAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_banco_sangue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_banco_sangue[P]>
      : GetScalarType<T[P], AggregateTbl_banco_sangue[P]>
  }




  export type tbl_banco_sangueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_banco_sangueWhereInput
    orderBy?: tbl_banco_sangueOrderByWithAggregationInput | tbl_banco_sangueOrderByWithAggregationInput[]
    by: Tbl_banco_sangueScalarFieldEnum[] | Tbl_banco_sangueScalarFieldEnum
    having?: tbl_banco_sangueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_banco_sangueCountAggregateInputType | true
    _avg?: Tbl_banco_sangueAvgAggregateInputType
    _sum?: Tbl_banco_sangueSumAggregateInputType
    _min?: Tbl_banco_sangueMinAggregateInputType
    _max?: Tbl_banco_sangueMaxAggregateInputType
  }

  export type Tbl_banco_sangueGroupByOutputType = {
    id: number
    id_hospital: number
    id_tipo_sanguineo: number
    quantidade: number
    _count: Tbl_banco_sangueCountAggregateOutputType | null
    _avg: Tbl_banco_sangueAvgAggregateOutputType | null
    _sum: Tbl_banco_sangueSumAggregateOutputType | null
    _min: Tbl_banco_sangueMinAggregateOutputType | null
    _max: Tbl_banco_sangueMaxAggregateOutputType | null
  }

  type GetTbl_banco_sangueGroupByPayload<T extends tbl_banco_sangueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_banco_sangueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_banco_sangueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_banco_sangueGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_banco_sangueGroupByOutputType[P]>
        }
      >
    >


  export type tbl_banco_sangueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_hospital?: boolean
    id_tipo_sanguineo?: boolean
    quantidade?: boolean
    tbl_hospital?: boolean | tbl_hospitalDefaultArgs<ExtArgs>
    tbl_tipo_sanguineo?: boolean | tbl_tipo_sanguineoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_banco_sangue"]>



  export type tbl_banco_sangueSelectScalar = {
    id?: boolean
    id_hospital?: boolean
    id_tipo_sanguineo?: boolean
    quantidade?: boolean
  }

  export type tbl_banco_sangueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_hospital" | "id_tipo_sanguineo" | "quantidade", ExtArgs["result"]["tbl_banco_sangue"]>
  export type tbl_banco_sangueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_hospital?: boolean | tbl_hospitalDefaultArgs<ExtArgs>
    tbl_tipo_sanguineo?: boolean | tbl_tipo_sanguineoDefaultArgs<ExtArgs>
  }

  export type $tbl_banco_sanguePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_banco_sangue"
    objects: {
      tbl_hospital: Prisma.$tbl_hospitalPayload<ExtArgs>
      tbl_tipo_sanguineo: Prisma.$tbl_tipo_sanguineoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_hospital: number
      id_tipo_sanguineo: number
      quantidade: number
    }, ExtArgs["result"]["tbl_banco_sangue"]>
    composites: {}
  }

  type tbl_banco_sangueGetPayload<S extends boolean | null | undefined | tbl_banco_sangueDefaultArgs> = $Result.GetResult<Prisma.$tbl_banco_sanguePayload, S>

  type tbl_banco_sangueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_banco_sangueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_banco_sangueCountAggregateInputType | true
    }

  export interface tbl_banco_sangueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_banco_sangue'], meta: { name: 'tbl_banco_sangue' } }
    /**
     * Find zero or one Tbl_banco_sangue that matches the filter.
     * @param {tbl_banco_sangueFindUniqueArgs} args - Arguments to find a Tbl_banco_sangue
     * @example
     * // Get one Tbl_banco_sangue
     * const tbl_banco_sangue = await prisma.tbl_banco_sangue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_banco_sangueFindUniqueArgs>(args: SelectSubset<T, tbl_banco_sangueFindUniqueArgs<ExtArgs>>): Prisma__tbl_banco_sangueClient<$Result.GetResult<Prisma.$tbl_banco_sanguePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_banco_sangue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_banco_sangueFindUniqueOrThrowArgs} args - Arguments to find a Tbl_banco_sangue
     * @example
     * // Get one Tbl_banco_sangue
     * const tbl_banco_sangue = await prisma.tbl_banco_sangue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_banco_sangueFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_banco_sangueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_banco_sangueClient<$Result.GetResult<Prisma.$tbl_banco_sanguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_banco_sangue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_banco_sangueFindFirstArgs} args - Arguments to find a Tbl_banco_sangue
     * @example
     * // Get one Tbl_banco_sangue
     * const tbl_banco_sangue = await prisma.tbl_banco_sangue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_banco_sangueFindFirstArgs>(args?: SelectSubset<T, tbl_banco_sangueFindFirstArgs<ExtArgs>>): Prisma__tbl_banco_sangueClient<$Result.GetResult<Prisma.$tbl_banco_sanguePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_banco_sangue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_banco_sangueFindFirstOrThrowArgs} args - Arguments to find a Tbl_banco_sangue
     * @example
     * // Get one Tbl_banco_sangue
     * const tbl_banco_sangue = await prisma.tbl_banco_sangue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_banco_sangueFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_banco_sangueFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_banco_sangueClient<$Result.GetResult<Prisma.$tbl_banco_sanguePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_banco_sangues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_banco_sangueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_banco_sangues
     * const tbl_banco_sangues = await prisma.tbl_banco_sangue.findMany()
     * 
     * // Get first 10 Tbl_banco_sangues
     * const tbl_banco_sangues = await prisma.tbl_banco_sangue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_banco_sangueWithIdOnly = await prisma.tbl_banco_sangue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_banco_sangueFindManyArgs>(args?: SelectSubset<T, tbl_banco_sangueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_banco_sanguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_banco_sangue.
     * @param {tbl_banco_sangueCreateArgs} args - Arguments to create a Tbl_banco_sangue.
     * @example
     * // Create one Tbl_banco_sangue
     * const Tbl_banco_sangue = await prisma.tbl_banco_sangue.create({
     *   data: {
     *     // ... data to create a Tbl_banco_sangue
     *   }
     * })
     * 
     */
    create<T extends tbl_banco_sangueCreateArgs>(args: SelectSubset<T, tbl_banco_sangueCreateArgs<ExtArgs>>): Prisma__tbl_banco_sangueClient<$Result.GetResult<Prisma.$tbl_banco_sanguePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_banco_sangues.
     * @param {tbl_banco_sangueCreateManyArgs} args - Arguments to create many Tbl_banco_sangues.
     * @example
     * // Create many Tbl_banco_sangues
     * const tbl_banco_sangue = await prisma.tbl_banco_sangue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_banco_sangueCreateManyArgs>(args?: SelectSubset<T, tbl_banco_sangueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_banco_sangue.
     * @param {tbl_banco_sangueDeleteArgs} args - Arguments to delete one Tbl_banco_sangue.
     * @example
     * // Delete one Tbl_banco_sangue
     * const Tbl_banco_sangue = await prisma.tbl_banco_sangue.delete({
     *   where: {
     *     // ... filter to delete one Tbl_banco_sangue
     *   }
     * })
     * 
     */
    delete<T extends tbl_banco_sangueDeleteArgs>(args: SelectSubset<T, tbl_banco_sangueDeleteArgs<ExtArgs>>): Prisma__tbl_banco_sangueClient<$Result.GetResult<Prisma.$tbl_banco_sanguePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_banco_sangue.
     * @param {tbl_banco_sangueUpdateArgs} args - Arguments to update one Tbl_banco_sangue.
     * @example
     * // Update one Tbl_banco_sangue
     * const tbl_banco_sangue = await prisma.tbl_banco_sangue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_banco_sangueUpdateArgs>(args: SelectSubset<T, tbl_banco_sangueUpdateArgs<ExtArgs>>): Prisma__tbl_banco_sangueClient<$Result.GetResult<Prisma.$tbl_banco_sanguePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_banco_sangues.
     * @param {tbl_banco_sangueDeleteManyArgs} args - Arguments to filter Tbl_banco_sangues to delete.
     * @example
     * // Delete a few Tbl_banco_sangues
     * const { count } = await prisma.tbl_banco_sangue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_banco_sangueDeleteManyArgs>(args?: SelectSubset<T, tbl_banco_sangueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_banco_sangues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_banco_sangueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_banco_sangues
     * const tbl_banco_sangue = await prisma.tbl_banco_sangue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_banco_sangueUpdateManyArgs>(args: SelectSubset<T, tbl_banco_sangueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_banco_sangue.
     * @param {tbl_banco_sangueUpsertArgs} args - Arguments to update or create a Tbl_banco_sangue.
     * @example
     * // Update or create a Tbl_banco_sangue
     * const tbl_banco_sangue = await prisma.tbl_banco_sangue.upsert({
     *   create: {
     *     // ... data to create a Tbl_banco_sangue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_banco_sangue we want to update
     *   }
     * })
     */
    upsert<T extends tbl_banco_sangueUpsertArgs>(args: SelectSubset<T, tbl_banco_sangueUpsertArgs<ExtArgs>>): Prisma__tbl_banco_sangueClient<$Result.GetResult<Prisma.$tbl_banco_sanguePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_banco_sangues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_banco_sangueCountArgs} args - Arguments to filter Tbl_banco_sangues to count.
     * @example
     * // Count the number of Tbl_banco_sangues
     * const count = await prisma.tbl_banco_sangue.count({
     *   where: {
     *     // ... the filter for the Tbl_banco_sangues we want to count
     *   }
     * })
    **/
    count<T extends tbl_banco_sangueCountArgs>(
      args?: Subset<T, tbl_banco_sangueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_banco_sangueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_banco_sangue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_banco_sangueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_banco_sangueAggregateArgs>(args: Subset<T, Tbl_banco_sangueAggregateArgs>): Prisma.PrismaPromise<GetTbl_banco_sangueAggregateType<T>>

    /**
     * Group by Tbl_banco_sangue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_banco_sangueGroupByArgs} args - Group by arguments.
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
      T extends tbl_banco_sangueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_banco_sangueGroupByArgs['orderBy'] }
        : { orderBy?: tbl_banco_sangueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_banco_sangueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_banco_sangueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_banco_sangue model
   */
  readonly fields: tbl_banco_sangueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_banco_sangue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_banco_sangueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tbl_hospital<T extends tbl_hospitalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_hospitalDefaultArgs<ExtArgs>>): Prisma__tbl_hospitalClient<$Result.GetResult<Prisma.$tbl_hospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tbl_tipo_sanguineo<T extends tbl_tipo_sanguineoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_tipo_sanguineoDefaultArgs<ExtArgs>>): Prisma__tbl_tipo_sanguineoClient<$Result.GetResult<Prisma.$tbl_tipo_sanguineoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tbl_banco_sangue model
   */
  interface tbl_banco_sangueFieldRefs {
    readonly id: FieldRef<"tbl_banco_sangue", 'Int'>
    readonly id_hospital: FieldRef<"tbl_banco_sangue", 'Int'>
    readonly id_tipo_sanguineo: FieldRef<"tbl_banco_sangue", 'Int'>
    readonly quantidade: FieldRef<"tbl_banco_sangue", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_banco_sangue findUnique
   */
  export type tbl_banco_sangueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_banco_sangue
     */
    select?: tbl_banco_sangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_banco_sangue
     */
    omit?: tbl_banco_sangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_banco_sangueInclude<ExtArgs> | null
    /**
     * Filter, which tbl_banco_sangue to fetch.
     */
    where: tbl_banco_sangueWhereUniqueInput
  }

  /**
   * tbl_banco_sangue findUniqueOrThrow
   */
  export type tbl_banco_sangueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_banco_sangue
     */
    select?: tbl_banco_sangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_banco_sangue
     */
    omit?: tbl_banco_sangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_banco_sangueInclude<ExtArgs> | null
    /**
     * Filter, which tbl_banco_sangue to fetch.
     */
    where: tbl_banco_sangueWhereUniqueInput
  }

  /**
   * tbl_banco_sangue findFirst
   */
  export type tbl_banco_sangueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_banco_sangue
     */
    select?: tbl_banco_sangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_banco_sangue
     */
    omit?: tbl_banco_sangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_banco_sangueInclude<ExtArgs> | null
    /**
     * Filter, which tbl_banco_sangue to fetch.
     */
    where?: tbl_banco_sangueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_banco_sangues to fetch.
     */
    orderBy?: tbl_banco_sangueOrderByWithRelationInput | tbl_banco_sangueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_banco_sangues.
     */
    cursor?: tbl_banco_sangueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_banco_sangues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_banco_sangues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_banco_sangues.
     */
    distinct?: Tbl_banco_sangueScalarFieldEnum | Tbl_banco_sangueScalarFieldEnum[]
  }

  /**
   * tbl_banco_sangue findFirstOrThrow
   */
  export type tbl_banco_sangueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_banco_sangue
     */
    select?: tbl_banco_sangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_banco_sangue
     */
    omit?: tbl_banco_sangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_banco_sangueInclude<ExtArgs> | null
    /**
     * Filter, which tbl_banco_sangue to fetch.
     */
    where?: tbl_banco_sangueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_banco_sangues to fetch.
     */
    orderBy?: tbl_banco_sangueOrderByWithRelationInput | tbl_banco_sangueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_banco_sangues.
     */
    cursor?: tbl_banco_sangueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_banco_sangues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_banco_sangues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_banco_sangues.
     */
    distinct?: Tbl_banco_sangueScalarFieldEnum | Tbl_banco_sangueScalarFieldEnum[]
  }

  /**
   * tbl_banco_sangue findMany
   */
  export type tbl_banco_sangueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_banco_sangue
     */
    select?: tbl_banco_sangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_banco_sangue
     */
    omit?: tbl_banco_sangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_banco_sangueInclude<ExtArgs> | null
    /**
     * Filter, which tbl_banco_sangues to fetch.
     */
    where?: tbl_banco_sangueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_banco_sangues to fetch.
     */
    orderBy?: tbl_banco_sangueOrderByWithRelationInput | tbl_banco_sangueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_banco_sangues.
     */
    cursor?: tbl_banco_sangueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_banco_sangues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_banco_sangues.
     */
    skip?: number
    distinct?: Tbl_banco_sangueScalarFieldEnum | Tbl_banco_sangueScalarFieldEnum[]
  }

  /**
   * tbl_banco_sangue create
   */
  export type tbl_banco_sangueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_banco_sangue
     */
    select?: tbl_banco_sangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_banco_sangue
     */
    omit?: tbl_banco_sangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_banco_sangueInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_banco_sangue.
     */
    data: XOR<tbl_banco_sangueCreateInput, tbl_banco_sangueUncheckedCreateInput>
  }

  /**
   * tbl_banco_sangue createMany
   */
  export type tbl_banco_sangueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_banco_sangues.
     */
    data: tbl_banco_sangueCreateManyInput | tbl_banco_sangueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_banco_sangue update
   */
  export type tbl_banco_sangueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_banco_sangue
     */
    select?: tbl_banco_sangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_banco_sangue
     */
    omit?: tbl_banco_sangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_banco_sangueInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_banco_sangue.
     */
    data: XOR<tbl_banco_sangueUpdateInput, tbl_banco_sangueUncheckedUpdateInput>
    /**
     * Choose, which tbl_banco_sangue to update.
     */
    where: tbl_banco_sangueWhereUniqueInput
  }

  /**
   * tbl_banco_sangue updateMany
   */
  export type tbl_banco_sangueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_banco_sangues.
     */
    data: XOR<tbl_banco_sangueUpdateManyMutationInput, tbl_banco_sangueUncheckedUpdateManyInput>
    /**
     * Filter which tbl_banco_sangues to update
     */
    where?: tbl_banco_sangueWhereInput
    /**
     * Limit how many tbl_banco_sangues to update.
     */
    limit?: number
  }

  /**
   * tbl_banco_sangue upsert
   */
  export type tbl_banco_sangueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_banco_sangue
     */
    select?: tbl_banco_sangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_banco_sangue
     */
    omit?: tbl_banco_sangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_banco_sangueInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_banco_sangue to update in case it exists.
     */
    where: tbl_banco_sangueWhereUniqueInput
    /**
     * In case the tbl_banco_sangue found by the `where` argument doesn't exist, create a new tbl_banco_sangue with this data.
     */
    create: XOR<tbl_banco_sangueCreateInput, tbl_banco_sangueUncheckedCreateInput>
    /**
     * In case the tbl_banco_sangue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_banco_sangueUpdateInput, tbl_banco_sangueUncheckedUpdateInput>
  }

  /**
   * tbl_banco_sangue delete
   */
  export type tbl_banco_sangueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_banco_sangue
     */
    select?: tbl_banco_sangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_banco_sangue
     */
    omit?: tbl_banco_sangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_banco_sangueInclude<ExtArgs> | null
    /**
     * Filter which tbl_banco_sangue to delete.
     */
    where: tbl_banco_sangueWhereUniqueInput
  }

  /**
   * tbl_banco_sangue deleteMany
   */
  export type tbl_banco_sangueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_banco_sangues to delete
     */
    where?: tbl_banco_sangueWhereInput
    /**
     * Limit how many tbl_banco_sangues to delete.
     */
    limit?: number
  }

  /**
   * tbl_banco_sangue without action
   */
  export type tbl_banco_sangueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_banco_sangue
     */
    select?: tbl_banco_sangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_banco_sangue
     */
    omit?: tbl_banco_sangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_banco_sangueInclude<ExtArgs> | null
  }


  /**
   * Model tbl_certificado
   */

  export type AggregateTbl_certificado = {
    _count: Tbl_certificadoCountAggregateOutputType | null
    _avg: Tbl_certificadoAvgAggregateOutputType | null
    _sum: Tbl_certificadoSumAggregateOutputType | null
    _min: Tbl_certificadoMinAggregateOutputType | null
    _max: Tbl_certificadoMaxAggregateOutputType | null
  }

  export type Tbl_certificadoAvgAggregateOutputType = {
    id: number | null
    id_usuario: number | null
  }

  export type Tbl_certificadoSumAggregateOutputType = {
    id: number | null
    id_usuario: number | null
  }

  export type Tbl_certificadoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    organizacao: string | null
    data_emissao: Date | null
    id_usuario: number | null
  }

  export type Tbl_certificadoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    organizacao: string | null
    data_emissao: Date | null
    id_usuario: number | null
  }

  export type Tbl_certificadoCountAggregateOutputType = {
    id: number
    titulo: number
    organizacao: number
    data_emissao: number
    id_usuario: number
    _all: number
  }


  export type Tbl_certificadoAvgAggregateInputType = {
    id?: true
    id_usuario?: true
  }

  export type Tbl_certificadoSumAggregateInputType = {
    id?: true
    id_usuario?: true
  }

  export type Tbl_certificadoMinAggregateInputType = {
    id?: true
    titulo?: true
    organizacao?: true
    data_emissao?: true
    id_usuario?: true
  }

  export type Tbl_certificadoMaxAggregateInputType = {
    id?: true
    titulo?: true
    organizacao?: true
    data_emissao?: true
    id_usuario?: true
  }

  export type Tbl_certificadoCountAggregateInputType = {
    id?: true
    titulo?: true
    organizacao?: true
    data_emissao?: true
    id_usuario?: true
    _all?: true
  }

  export type Tbl_certificadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_certificado to aggregate.
     */
    where?: tbl_certificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_certificados to fetch.
     */
    orderBy?: tbl_certificadoOrderByWithRelationInput | tbl_certificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_certificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_certificados
    **/
    _count?: true | Tbl_certificadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_certificadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_certificadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_certificadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_certificadoMaxAggregateInputType
  }

  export type GetTbl_certificadoAggregateType<T extends Tbl_certificadoAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_certificado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_certificado[P]>
      : GetScalarType<T[P], AggregateTbl_certificado[P]>
  }




  export type tbl_certificadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_certificadoWhereInput
    orderBy?: tbl_certificadoOrderByWithAggregationInput | tbl_certificadoOrderByWithAggregationInput[]
    by: Tbl_certificadoScalarFieldEnum[] | Tbl_certificadoScalarFieldEnum
    having?: tbl_certificadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_certificadoCountAggregateInputType | true
    _avg?: Tbl_certificadoAvgAggregateInputType
    _sum?: Tbl_certificadoSumAggregateInputType
    _min?: Tbl_certificadoMinAggregateInputType
    _max?: Tbl_certificadoMaxAggregateInputType
  }

  export type Tbl_certificadoGroupByOutputType = {
    id: number
    titulo: string
    organizacao: string
    data_emissao: Date
    id_usuario: number | null
    _count: Tbl_certificadoCountAggregateOutputType | null
    _avg: Tbl_certificadoAvgAggregateOutputType | null
    _sum: Tbl_certificadoSumAggregateOutputType | null
    _min: Tbl_certificadoMinAggregateOutputType | null
    _max: Tbl_certificadoMaxAggregateOutputType | null
  }

  type GetTbl_certificadoGroupByPayload<T extends tbl_certificadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_certificadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_certificadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_certificadoGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_certificadoGroupByOutputType[P]>
        }
      >
    >


  export type tbl_certificadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    organizacao?: boolean
    data_emissao?: boolean
    id_usuario?: boolean
    tbl_usuario?: boolean | tbl_certificado$tbl_usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_certificado"]>



  export type tbl_certificadoSelectScalar = {
    id?: boolean
    titulo?: boolean
    organizacao?: boolean
    data_emissao?: boolean
    id_usuario?: boolean
  }

  export type tbl_certificadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "organizacao" | "data_emissao" | "id_usuario", ExtArgs["result"]["tbl_certificado"]>
  export type tbl_certificadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_usuario?: boolean | tbl_certificado$tbl_usuarioArgs<ExtArgs>
  }

  export type $tbl_certificadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_certificado"
    objects: {
      tbl_usuario: Prisma.$tbl_usuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      organizacao: string
      data_emissao: Date
      id_usuario: number | null
    }, ExtArgs["result"]["tbl_certificado"]>
    composites: {}
  }

  type tbl_certificadoGetPayload<S extends boolean | null | undefined | tbl_certificadoDefaultArgs> = $Result.GetResult<Prisma.$tbl_certificadoPayload, S>

  type tbl_certificadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_certificadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_certificadoCountAggregateInputType | true
    }

  export interface tbl_certificadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_certificado'], meta: { name: 'tbl_certificado' } }
    /**
     * Find zero or one Tbl_certificado that matches the filter.
     * @param {tbl_certificadoFindUniqueArgs} args - Arguments to find a Tbl_certificado
     * @example
     * // Get one Tbl_certificado
     * const tbl_certificado = await prisma.tbl_certificado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_certificadoFindUniqueArgs>(args: SelectSubset<T, tbl_certificadoFindUniqueArgs<ExtArgs>>): Prisma__tbl_certificadoClient<$Result.GetResult<Prisma.$tbl_certificadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_certificado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_certificadoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_certificado
     * @example
     * // Get one Tbl_certificado
     * const tbl_certificado = await prisma.tbl_certificado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_certificadoFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_certificadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_certificadoClient<$Result.GetResult<Prisma.$tbl_certificadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_certificado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_certificadoFindFirstArgs} args - Arguments to find a Tbl_certificado
     * @example
     * // Get one Tbl_certificado
     * const tbl_certificado = await prisma.tbl_certificado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_certificadoFindFirstArgs>(args?: SelectSubset<T, tbl_certificadoFindFirstArgs<ExtArgs>>): Prisma__tbl_certificadoClient<$Result.GetResult<Prisma.$tbl_certificadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_certificado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_certificadoFindFirstOrThrowArgs} args - Arguments to find a Tbl_certificado
     * @example
     * // Get one Tbl_certificado
     * const tbl_certificado = await prisma.tbl_certificado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_certificadoFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_certificadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_certificadoClient<$Result.GetResult<Prisma.$tbl_certificadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_certificados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_certificadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_certificados
     * const tbl_certificados = await prisma.tbl_certificado.findMany()
     * 
     * // Get first 10 Tbl_certificados
     * const tbl_certificados = await prisma.tbl_certificado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_certificadoWithIdOnly = await prisma.tbl_certificado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_certificadoFindManyArgs>(args?: SelectSubset<T, tbl_certificadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_certificadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_certificado.
     * @param {tbl_certificadoCreateArgs} args - Arguments to create a Tbl_certificado.
     * @example
     * // Create one Tbl_certificado
     * const Tbl_certificado = await prisma.tbl_certificado.create({
     *   data: {
     *     // ... data to create a Tbl_certificado
     *   }
     * })
     * 
     */
    create<T extends tbl_certificadoCreateArgs>(args: SelectSubset<T, tbl_certificadoCreateArgs<ExtArgs>>): Prisma__tbl_certificadoClient<$Result.GetResult<Prisma.$tbl_certificadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_certificados.
     * @param {tbl_certificadoCreateManyArgs} args - Arguments to create many Tbl_certificados.
     * @example
     * // Create many Tbl_certificados
     * const tbl_certificado = await prisma.tbl_certificado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_certificadoCreateManyArgs>(args?: SelectSubset<T, tbl_certificadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_certificado.
     * @param {tbl_certificadoDeleteArgs} args - Arguments to delete one Tbl_certificado.
     * @example
     * // Delete one Tbl_certificado
     * const Tbl_certificado = await prisma.tbl_certificado.delete({
     *   where: {
     *     // ... filter to delete one Tbl_certificado
     *   }
     * })
     * 
     */
    delete<T extends tbl_certificadoDeleteArgs>(args: SelectSubset<T, tbl_certificadoDeleteArgs<ExtArgs>>): Prisma__tbl_certificadoClient<$Result.GetResult<Prisma.$tbl_certificadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_certificado.
     * @param {tbl_certificadoUpdateArgs} args - Arguments to update one Tbl_certificado.
     * @example
     * // Update one Tbl_certificado
     * const tbl_certificado = await prisma.tbl_certificado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_certificadoUpdateArgs>(args: SelectSubset<T, tbl_certificadoUpdateArgs<ExtArgs>>): Prisma__tbl_certificadoClient<$Result.GetResult<Prisma.$tbl_certificadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_certificados.
     * @param {tbl_certificadoDeleteManyArgs} args - Arguments to filter Tbl_certificados to delete.
     * @example
     * // Delete a few Tbl_certificados
     * const { count } = await prisma.tbl_certificado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_certificadoDeleteManyArgs>(args?: SelectSubset<T, tbl_certificadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_certificados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_certificadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_certificados
     * const tbl_certificado = await prisma.tbl_certificado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_certificadoUpdateManyArgs>(args: SelectSubset<T, tbl_certificadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_certificado.
     * @param {tbl_certificadoUpsertArgs} args - Arguments to update or create a Tbl_certificado.
     * @example
     * // Update or create a Tbl_certificado
     * const tbl_certificado = await prisma.tbl_certificado.upsert({
     *   create: {
     *     // ... data to create a Tbl_certificado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_certificado we want to update
     *   }
     * })
     */
    upsert<T extends tbl_certificadoUpsertArgs>(args: SelectSubset<T, tbl_certificadoUpsertArgs<ExtArgs>>): Prisma__tbl_certificadoClient<$Result.GetResult<Prisma.$tbl_certificadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_certificados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_certificadoCountArgs} args - Arguments to filter Tbl_certificados to count.
     * @example
     * // Count the number of Tbl_certificados
     * const count = await prisma.tbl_certificado.count({
     *   where: {
     *     // ... the filter for the Tbl_certificados we want to count
     *   }
     * })
    **/
    count<T extends tbl_certificadoCountArgs>(
      args?: Subset<T, tbl_certificadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_certificadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_certificado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_certificadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_certificadoAggregateArgs>(args: Subset<T, Tbl_certificadoAggregateArgs>): Prisma.PrismaPromise<GetTbl_certificadoAggregateType<T>>

    /**
     * Group by Tbl_certificado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_certificadoGroupByArgs} args - Group by arguments.
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
      T extends tbl_certificadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_certificadoGroupByArgs['orderBy'] }
        : { orderBy?: tbl_certificadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_certificadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_certificadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_certificado model
   */
  readonly fields: tbl_certificadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_certificado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_certificadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tbl_usuario<T extends tbl_certificado$tbl_usuarioArgs<ExtArgs> = {}>(args?: Subset<T, tbl_certificado$tbl_usuarioArgs<ExtArgs>>): Prisma__tbl_usuarioClient<$Result.GetResult<Prisma.$tbl_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tbl_certificado model
   */
  interface tbl_certificadoFieldRefs {
    readonly id: FieldRef<"tbl_certificado", 'Int'>
    readonly titulo: FieldRef<"tbl_certificado", 'String'>
    readonly organizacao: FieldRef<"tbl_certificado", 'String'>
    readonly data_emissao: FieldRef<"tbl_certificado", 'DateTime'>
    readonly id_usuario: FieldRef<"tbl_certificado", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_certificado findUnique
   */
  export type tbl_certificadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_certificado
     */
    select?: tbl_certificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_certificado
     */
    omit?: tbl_certificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_certificadoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_certificado to fetch.
     */
    where: tbl_certificadoWhereUniqueInput
  }

  /**
   * tbl_certificado findUniqueOrThrow
   */
  export type tbl_certificadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_certificado
     */
    select?: tbl_certificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_certificado
     */
    omit?: tbl_certificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_certificadoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_certificado to fetch.
     */
    where: tbl_certificadoWhereUniqueInput
  }

  /**
   * tbl_certificado findFirst
   */
  export type tbl_certificadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_certificado
     */
    select?: tbl_certificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_certificado
     */
    omit?: tbl_certificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_certificadoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_certificado to fetch.
     */
    where?: tbl_certificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_certificados to fetch.
     */
    orderBy?: tbl_certificadoOrderByWithRelationInput | tbl_certificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_certificados.
     */
    cursor?: tbl_certificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_certificados.
     */
    distinct?: Tbl_certificadoScalarFieldEnum | Tbl_certificadoScalarFieldEnum[]
  }

  /**
   * tbl_certificado findFirstOrThrow
   */
  export type tbl_certificadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_certificado
     */
    select?: tbl_certificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_certificado
     */
    omit?: tbl_certificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_certificadoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_certificado to fetch.
     */
    where?: tbl_certificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_certificados to fetch.
     */
    orderBy?: tbl_certificadoOrderByWithRelationInput | tbl_certificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_certificados.
     */
    cursor?: tbl_certificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_certificados.
     */
    distinct?: Tbl_certificadoScalarFieldEnum | Tbl_certificadoScalarFieldEnum[]
  }

  /**
   * tbl_certificado findMany
   */
  export type tbl_certificadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_certificado
     */
    select?: tbl_certificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_certificado
     */
    omit?: tbl_certificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_certificadoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_certificados to fetch.
     */
    where?: tbl_certificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_certificados to fetch.
     */
    orderBy?: tbl_certificadoOrderByWithRelationInput | tbl_certificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_certificados.
     */
    cursor?: tbl_certificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_certificados.
     */
    skip?: number
    distinct?: Tbl_certificadoScalarFieldEnum | Tbl_certificadoScalarFieldEnum[]
  }

  /**
   * tbl_certificado create
   */
  export type tbl_certificadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_certificado
     */
    select?: tbl_certificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_certificado
     */
    omit?: tbl_certificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_certificadoInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_certificado.
     */
    data: XOR<tbl_certificadoCreateInput, tbl_certificadoUncheckedCreateInput>
  }

  /**
   * tbl_certificado createMany
   */
  export type tbl_certificadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_certificados.
     */
    data: tbl_certificadoCreateManyInput | tbl_certificadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_certificado update
   */
  export type tbl_certificadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_certificado
     */
    select?: tbl_certificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_certificado
     */
    omit?: tbl_certificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_certificadoInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_certificado.
     */
    data: XOR<tbl_certificadoUpdateInput, tbl_certificadoUncheckedUpdateInput>
    /**
     * Choose, which tbl_certificado to update.
     */
    where: tbl_certificadoWhereUniqueInput
  }

  /**
   * tbl_certificado updateMany
   */
  export type tbl_certificadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_certificados.
     */
    data: XOR<tbl_certificadoUpdateManyMutationInput, tbl_certificadoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_certificados to update
     */
    where?: tbl_certificadoWhereInput
    /**
     * Limit how many tbl_certificados to update.
     */
    limit?: number
  }

  /**
   * tbl_certificado upsert
   */
  export type tbl_certificadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_certificado
     */
    select?: tbl_certificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_certificado
     */
    omit?: tbl_certificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_certificadoInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_certificado to update in case it exists.
     */
    where: tbl_certificadoWhereUniqueInput
    /**
     * In case the tbl_certificado found by the `where` argument doesn't exist, create a new tbl_certificado with this data.
     */
    create: XOR<tbl_certificadoCreateInput, tbl_certificadoUncheckedCreateInput>
    /**
     * In case the tbl_certificado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_certificadoUpdateInput, tbl_certificadoUncheckedUpdateInput>
  }

  /**
   * tbl_certificado delete
   */
  export type tbl_certificadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_certificado
     */
    select?: tbl_certificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_certificado
     */
    omit?: tbl_certificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_certificadoInclude<ExtArgs> | null
    /**
     * Filter which tbl_certificado to delete.
     */
    where: tbl_certificadoWhereUniqueInput
  }

  /**
   * tbl_certificado deleteMany
   */
  export type tbl_certificadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_certificados to delete
     */
    where?: tbl_certificadoWhereInput
    /**
     * Limit how many tbl_certificados to delete.
     */
    limit?: number
  }

  /**
   * tbl_certificado.tbl_usuario
   */
  export type tbl_certificado$tbl_usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuario
     */
    select?: tbl_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuario
     */
    omit?: tbl_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuarioInclude<ExtArgs> | null
    where?: tbl_usuarioWhereInput
  }

  /**
   * tbl_certificado without action
   */
  export type tbl_certificadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_certificado
     */
    select?: tbl_certificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_certificado
     */
    omit?: tbl_certificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_certificadoInclude<ExtArgs> | null
  }


  /**
   * Model tbl_doacao
   */

  export type AggregateTbl_doacao = {
    _count: Tbl_doacaoCountAggregateOutputType | null
    _avg: Tbl_doacaoAvgAggregateOutputType | null
    _sum: Tbl_doacaoSumAggregateOutputType | null
    _min: Tbl_doacaoMinAggregateOutputType | null
    _max: Tbl_doacaoMaxAggregateOutputType | null
  }

  export type Tbl_doacaoAvgAggregateOutputType = {
    id: number | null
  }

  export type Tbl_doacaoSumAggregateOutputType = {
    id: number | null
  }

  export type Tbl_doacaoMinAggregateOutputType = {
    id: number | null
    data: Date | null
    observacao: string | null
    foto: string | null
  }

  export type Tbl_doacaoMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    observacao: string | null
    foto: string | null
  }

  export type Tbl_doacaoCountAggregateOutputType = {
    id: number
    data: number
    observacao: number
    foto: number
    _all: number
  }


  export type Tbl_doacaoAvgAggregateInputType = {
    id?: true
  }

  export type Tbl_doacaoSumAggregateInputType = {
    id?: true
  }

  export type Tbl_doacaoMinAggregateInputType = {
    id?: true
    data?: true
    observacao?: true
    foto?: true
  }

  export type Tbl_doacaoMaxAggregateInputType = {
    id?: true
    data?: true
    observacao?: true
    foto?: true
  }

  export type Tbl_doacaoCountAggregateInputType = {
    id?: true
    data?: true
    observacao?: true
    foto?: true
    _all?: true
  }

  export type Tbl_doacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_doacao to aggregate.
     */
    where?: tbl_doacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_doacaos to fetch.
     */
    orderBy?: tbl_doacaoOrderByWithRelationInput | tbl_doacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_doacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_doacaos
    **/
    _count?: true | Tbl_doacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_doacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_doacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_doacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_doacaoMaxAggregateInputType
  }

  export type GetTbl_doacaoAggregateType<T extends Tbl_doacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_doacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_doacao[P]>
      : GetScalarType<T[P], AggregateTbl_doacao[P]>
  }




  export type tbl_doacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_doacaoWhereInput
    orderBy?: tbl_doacaoOrderByWithAggregationInput | tbl_doacaoOrderByWithAggregationInput[]
    by: Tbl_doacaoScalarFieldEnum[] | Tbl_doacaoScalarFieldEnum
    having?: tbl_doacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_doacaoCountAggregateInputType | true
    _avg?: Tbl_doacaoAvgAggregateInputType
    _sum?: Tbl_doacaoSumAggregateInputType
    _min?: Tbl_doacaoMinAggregateInputType
    _max?: Tbl_doacaoMaxAggregateInputType
  }

  export type Tbl_doacaoGroupByOutputType = {
    id: number
    data: Date
    observacao: string | null
    foto: string | null
    _count: Tbl_doacaoCountAggregateOutputType | null
    _avg: Tbl_doacaoAvgAggregateOutputType | null
    _sum: Tbl_doacaoSumAggregateOutputType | null
    _min: Tbl_doacaoMinAggregateOutputType | null
    _max: Tbl_doacaoMaxAggregateOutputType | null
  }

  type GetTbl_doacaoGroupByPayload<T extends tbl_doacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_doacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_doacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_doacaoGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_doacaoGroupByOutputType[P]>
        }
      >
    >


  export type tbl_doacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    observacao?: boolean
    foto?: boolean
    agendamentos?: boolean | tbl_doacao$agendamentosArgs<ExtArgs>
    _count?: boolean | Tbl_doacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_doacao"]>



  export type tbl_doacaoSelectScalar = {
    id?: boolean
    data?: boolean
    observacao?: boolean
    foto?: boolean
  }

  export type tbl_doacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "observacao" | "foto", ExtArgs["result"]["tbl_doacao"]>
  export type tbl_doacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | tbl_doacao$agendamentosArgs<ExtArgs>
    _count?: boolean | Tbl_doacaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_doacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_doacao"
    objects: {
      agendamentos: Prisma.$tbl_agendamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      observacao: string | null
      foto: string | null
    }, ExtArgs["result"]["tbl_doacao"]>
    composites: {}
  }

  type tbl_doacaoGetPayload<S extends boolean | null | undefined | tbl_doacaoDefaultArgs> = $Result.GetResult<Prisma.$tbl_doacaoPayload, S>

  type tbl_doacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_doacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_doacaoCountAggregateInputType | true
    }

  export interface tbl_doacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_doacao'], meta: { name: 'tbl_doacao' } }
    /**
     * Find zero or one Tbl_doacao that matches the filter.
     * @param {tbl_doacaoFindUniqueArgs} args - Arguments to find a Tbl_doacao
     * @example
     * // Get one Tbl_doacao
     * const tbl_doacao = await prisma.tbl_doacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_doacaoFindUniqueArgs>(args: SelectSubset<T, tbl_doacaoFindUniqueArgs<ExtArgs>>): Prisma__tbl_doacaoClient<$Result.GetResult<Prisma.$tbl_doacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_doacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_doacaoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_doacao
     * @example
     * // Get one Tbl_doacao
     * const tbl_doacao = await prisma.tbl_doacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_doacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_doacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_doacaoClient<$Result.GetResult<Prisma.$tbl_doacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_doacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_doacaoFindFirstArgs} args - Arguments to find a Tbl_doacao
     * @example
     * // Get one Tbl_doacao
     * const tbl_doacao = await prisma.tbl_doacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_doacaoFindFirstArgs>(args?: SelectSubset<T, tbl_doacaoFindFirstArgs<ExtArgs>>): Prisma__tbl_doacaoClient<$Result.GetResult<Prisma.$tbl_doacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_doacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_doacaoFindFirstOrThrowArgs} args - Arguments to find a Tbl_doacao
     * @example
     * // Get one Tbl_doacao
     * const tbl_doacao = await prisma.tbl_doacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_doacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_doacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_doacaoClient<$Result.GetResult<Prisma.$tbl_doacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_doacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_doacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_doacaos
     * const tbl_doacaos = await prisma.tbl_doacao.findMany()
     * 
     * // Get first 10 Tbl_doacaos
     * const tbl_doacaos = await prisma.tbl_doacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_doacaoWithIdOnly = await prisma.tbl_doacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_doacaoFindManyArgs>(args?: SelectSubset<T, tbl_doacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_doacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_doacao.
     * @param {tbl_doacaoCreateArgs} args - Arguments to create a Tbl_doacao.
     * @example
     * // Create one Tbl_doacao
     * const Tbl_doacao = await prisma.tbl_doacao.create({
     *   data: {
     *     // ... data to create a Tbl_doacao
     *   }
     * })
     * 
     */
    create<T extends tbl_doacaoCreateArgs>(args: SelectSubset<T, tbl_doacaoCreateArgs<ExtArgs>>): Prisma__tbl_doacaoClient<$Result.GetResult<Prisma.$tbl_doacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_doacaos.
     * @param {tbl_doacaoCreateManyArgs} args - Arguments to create many Tbl_doacaos.
     * @example
     * // Create many Tbl_doacaos
     * const tbl_doacao = await prisma.tbl_doacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_doacaoCreateManyArgs>(args?: SelectSubset<T, tbl_doacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_doacao.
     * @param {tbl_doacaoDeleteArgs} args - Arguments to delete one Tbl_doacao.
     * @example
     * // Delete one Tbl_doacao
     * const Tbl_doacao = await prisma.tbl_doacao.delete({
     *   where: {
     *     // ... filter to delete one Tbl_doacao
     *   }
     * })
     * 
     */
    delete<T extends tbl_doacaoDeleteArgs>(args: SelectSubset<T, tbl_doacaoDeleteArgs<ExtArgs>>): Prisma__tbl_doacaoClient<$Result.GetResult<Prisma.$tbl_doacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_doacao.
     * @param {tbl_doacaoUpdateArgs} args - Arguments to update one Tbl_doacao.
     * @example
     * // Update one Tbl_doacao
     * const tbl_doacao = await prisma.tbl_doacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_doacaoUpdateArgs>(args: SelectSubset<T, tbl_doacaoUpdateArgs<ExtArgs>>): Prisma__tbl_doacaoClient<$Result.GetResult<Prisma.$tbl_doacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_doacaos.
     * @param {tbl_doacaoDeleteManyArgs} args - Arguments to filter Tbl_doacaos to delete.
     * @example
     * // Delete a few Tbl_doacaos
     * const { count } = await prisma.tbl_doacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_doacaoDeleteManyArgs>(args?: SelectSubset<T, tbl_doacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_doacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_doacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_doacaos
     * const tbl_doacao = await prisma.tbl_doacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_doacaoUpdateManyArgs>(args: SelectSubset<T, tbl_doacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_doacao.
     * @param {tbl_doacaoUpsertArgs} args - Arguments to update or create a Tbl_doacao.
     * @example
     * // Update or create a Tbl_doacao
     * const tbl_doacao = await prisma.tbl_doacao.upsert({
     *   create: {
     *     // ... data to create a Tbl_doacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_doacao we want to update
     *   }
     * })
     */
    upsert<T extends tbl_doacaoUpsertArgs>(args: SelectSubset<T, tbl_doacaoUpsertArgs<ExtArgs>>): Prisma__tbl_doacaoClient<$Result.GetResult<Prisma.$tbl_doacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_doacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_doacaoCountArgs} args - Arguments to filter Tbl_doacaos to count.
     * @example
     * // Count the number of Tbl_doacaos
     * const count = await prisma.tbl_doacao.count({
     *   where: {
     *     // ... the filter for the Tbl_doacaos we want to count
     *   }
     * })
    **/
    count<T extends tbl_doacaoCountArgs>(
      args?: Subset<T, tbl_doacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_doacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_doacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_doacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_doacaoAggregateArgs>(args: Subset<T, Tbl_doacaoAggregateArgs>): Prisma.PrismaPromise<GetTbl_doacaoAggregateType<T>>

    /**
     * Group by Tbl_doacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_doacaoGroupByArgs} args - Group by arguments.
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
      T extends tbl_doacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_doacaoGroupByArgs['orderBy'] }
        : { orderBy?: tbl_doacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_doacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_doacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_doacao model
   */
  readonly fields: tbl_doacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_doacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_doacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamentos<T extends tbl_doacao$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_doacao$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_agendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_doacao model
   */
  interface tbl_doacaoFieldRefs {
    readonly id: FieldRef<"tbl_doacao", 'Int'>
    readonly data: FieldRef<"tbl_doacao", 'DateTime'>
    readonly observacao: FieldRef<"tbl_doacao", 'String'>
    readonly foto: FieldRef<"tbl_doacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_doacao findUnique
   */
  export type tbl_doacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doacao
     */
    select?: tbl_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doacao
     */
    omit?: tbl_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_doacao to fetch.
     */
    where: tbl_doacaoWhereUniqueInput
  }

  /**
   * tbl_doacao findUniqueOrThrow
   */
  export type tbl_doacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doacao
     */
    select?: tbl_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doacao
     */
    omit?: tbl_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_doacao to fetch.
     */
    where: tbl_doacaoWhereUniqueInput
  }

  /**
   * tbl_doacao findFirst
   */
  export type tbl_doacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doacao
     */
    select?: tbl_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doacao
     */
    omit?: tbl_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_doacao to fetch.
     */
    where?: tbl_doacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_doacaos to fetch.
     */
    orderBy?: tbl_doacaoOrderByWithRelationInput | tbl_doacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_doacaos.
     */
    cursor?: tbl_doacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_doacaos.
     */
    distinct?: Tbl_doacaoScalarFieldEnum | Tbl_doacaoScalarFieldEnum[]
  }

  /**
   * tbl_doacao findFirstOrThrow
   */
  export type tbl_doacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doacao
     */
    select?: tbl_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doacao
     */
    omit?: tbl_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_doacao to fetch.
     */
    where?: tbl_doacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_doacaos to fetch.
     */
    orderBy?: tbl_doacaoOrderByWithRelationInput | tbl_doacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_doacaos.
     */
    cursor?: tbl_doacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_doacaos.
     */
    distinct?: Tbl_doacaoScalarFieldEnum | Tbl_doacaoScalarFieldEnum[]
  }

  /**
   * tbl_doacao findMany
   */
  export type tbl_doacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doacao
     */
    select?: tbl_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doacao
     */
    omit?: tbl_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_doacaos to fetch.
     */
    where?: tbl_doacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_doacaos to fetch.
     */
    orderBy?: tbl_doacaoOrderByWithRelationInput | tbl_doacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_doacaos.
     */
    cursor?: tbl_doacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_doacaos.
     */
    skip?: number
    distinct?: Tbl_doacaoScalarFieldEnum | Tbl_doacaoScalarFieldEnum[]
  }

  /**
   * tbl_doacao create
   */
  export type tbl_doacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doacao
     */
    select?: tbl_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doacao
     */
    omit?: tbl_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_doacao.
     */
    data: XOR<tbl_doacaoCreateInput, tbl_doacaoUncheckedCreateInput>
  }

  /**
   * tbl_doacao createMany
   */
  export type tbl_doacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_doacaos.
     */
    data: tbl_doacaoCreateManyInput | tbl_doacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_doacao update
   */
  export type tbl_doacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doacao
     */
    select?: tbl_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doacao
     */
    omit?: tbl_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_doacao.
     */
    data: XOR<tbl_doacaoUpdateInput, tbl_doacaoUncheckedUpdateInput>
    /**
     * Choose, which tbl_doacao to update.
     */
    where: tbl_doacaoWhereUniqueInput
  }

  /**
   * tbl_doacao updateMany
   */
  export type tbl_doacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_doacaos.
     */
    data: XOR<tbl_doacaoUpdateManyMutationInput, tbl_doacaoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_doacaos to update
     */
    where?: tbl_doacaoWhereInput
    /**
     * Limit how many tbl_doacaos to update.
     */
    limit?: number
  }

  /**
   * tbl_doacao upsert
   */
  export type tbl_doacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doacao
     */
    select?: tbl_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doacao
     */
    omit?: tbl_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_doacao to update in case it exists.
     */
    where: tbl_doacaoWhereUniqueInput
    /**
     * In case the tbl_doacao found by the `where` argument doesn't exist, create a new tbl_doacao with this data.
     */
    create: XOR<tbl_doacaoCreateInput, tbl_doacaoUncheckedCreateInput>
    /**
     * In case the tbl_doacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_doacaoUpdateInput, tbl_doacaoUncheckedUpdateInput>
  }

  /**
   * tbl_doacao delete
   */
  export type tbl_doacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doacao
     */
    select?: tbl_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doacao
     */
    omit?: tbl_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doacaoInclude<ExtArgs> | null
    /**
     * Filter which tbl_doacao to delete.
     */
    where: tbl_doacaoWhereUniqueInput
  }

  /**
   * tbl_doacao deleteMany
   */
  export type tbl_doacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_doacaos to delete
     */
    where?: tbl_doacaoWhereInput
    /**
     * Limit how many tbl_doacaos to delete.
     */
    limit?: number
  }

  /**
   * tbl_doacao.agendamentos
   */
  export type tbl_doacao$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_agendamento
     */
    select?: tbl_agendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_agendamento
     */
    omit?: tbl_agendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_agendamentoInclude<ExtArgs> | null
    where?: tbl_agendamentoWhereInput
    orderBy?: tbl_agendamentoOrderByWithRelationInput | tbl_agendamentoOrderByWithRelationInput[]
    cursor?: tbl_agendamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_agendamentoScalarFieldEnum | Tbl_agendamentoScalarFieldEnum[]
  }

  /**
   * tbl_doacao without action
   */
  export type tbl_doacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_doacao
     */
    select?: tbl_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_doacao
     */
    omit?: tbl_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_doacaoInclude<ExtArgs> | null
  }


  /**
   * Model tbl_hospital
   */

  export type AggregateTbl_hospital = {
    _count: Tbl_hospitalCountAggregateOutputType | null
    _avg: Tbl_hospitalAvgAggregateOutputType | null
    _sum: Tbl_hospitalSumAggregateOutputType | null
    _min: Tbl_hospitalMinAggregateOutputType | null
    _max: Tbl_hospitalMaxAggregateOutputType | null
  }

  export type Tbl_hospitalAvgAggregateOutputType = {
    id: number | null
    capacidade_maxima: number | null
  }

  export type Tbl_hospitalSumAggregateOutputType = {
    id: number | null
    capacidade_maxima: number | null
  }

  export type Tbl_hospitalMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    cnpj: string | null
    crm: string | null
    cep: string | null
    telefone: string | null
    capacidade_maxima: number | null
    convenios: string | null
    horario_abertura: Date | null
    horario_fechamento: Date | null
    foto: string | null
    complemento: string | null
  }

  export type Tbl_hospitalMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    cnpj: string | null
    crm: string | null
    cep: string | null
    telefone: string | null
    capacidade_maxima: number | null
    convenios: string | null
    horario_abertura: Date | null
    horario_fechamento: Date | null
    foto: string | null
    complemento: string | null
  }

  export type Tbl_hospitalCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    cnpj: number
    crm: number
    cep: number
    telefone: number
    capacidade_maxima: number
    convenios: number
    horario_abertura: number
    horario_fechamento: number
    foto: number
    complemento: number
    _all: number
  }


  export type Tbl_hospitalAvgAggregateInputType = {
    id?: true
    capacidade_maxima?: true
  }

  export type Tbl_hospitalSumAggregateInputType = {
    id?: true
    capacidade_maxima?: true
  }

  export type Tbl_hospitalMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    cnpj?: true
    crm?: true
    cep?: true
    telefone?: true
    capacidade_maxima?: true
    convenios?: true
    horario_abertura?: true
    horario_fechamento?: true
    foto?: true
    complemento?: true
  }

  export type Tbl_hospitalMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    cnpj?: true
    crm?: true
    cep?: true
    telefone?: true
    capacidade_maxima?: true
    convenios?: true
    horario_abertura?: true
    horario_fechamento?: true
    foto?: true
    complemento?: true
  }

  export type Tbl_hospitalCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    cnpj?: true
    crm?: true
    cep?: true
    telefone?: true
    capacidade_maxima?: true
    convenios?: true
    horario_abertura?: true
    horario_fechamento?: true
    foto?: true
    complemento?: true
    _all?: true
  }

  export type Tbl_hospitalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_hospital to aggregate.
     */
    where?: tbl_hospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_hospitals to fetch.
     */
    orderBy?: tbl_hospitalOrderByWithRelationInput | tbl_hospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_hospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_hospitals
    **/
    _count?: true | Tbl_hospitalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_hospitalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_hospitalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_hospitalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_hospitalMaxAggregateInputType
  }

  export type GetTbl_hospitalAggregateType<T extends Tbl_hospitalAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_hospital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_hospital[P]>
      : GetScalarType<T[P], AggregateTbl_hospital[P]>
  }




  export type tbl_hospitalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_hospitalWhereInput
    orderBy?: tbl_hospitalOrderByWithAggregationInput | tbl_hospitalOrderByWithAggregationInput[]
    by: Tbl_hospitalScalarFieldEnum[] | Tbl_hospitalScalarFieldEnum
    having?: tbl_hospitalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_hospitalCountAggregateInputType | true
    _avg?: Tbl_hospitalAvgAggregateInputType
    _sum?: Tbl_hospitalSumAggregateInputType
    _min?: Tbl_hospitalMinAggregateInputType
    _max?: Tbl_hospitalMaxAggregateInputType
  }

  export type Tbl_hospitalGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    cnpj: string
    crm: string
    cep: string
    telefone: string
    capacidade_maxima: number
    convenios: string
    horario_abertura: Date
    horario_fechamento: Date
    foto: string
    complemento: string | null
    _count: Tbl_hospitalCountAggregateOutputType | null
    _avg: Tbl_hospitalAvgAggregateOutputType | null
    _sum: Tbl_hospitalSumAggregateOutputType | null
    _min: Tbl_hospitalMinAggregateOutputType | null
    _max: Tbl_hospitalMaxAggregateOutputType | null
  }

  type GetTbl_hospitalGroupByPayload<T extends tbl_hospitalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_hospitalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_hospitalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_hospitalGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_hospitalGroupByOutputType[P]>
        }
      >
    >


  export type tbl_hospitalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cnpj?: boolean
    crm?: boolean
    cep?: boolean
    telefone?: boolean
    capacidade_maxima?: boolean
    convenios?: boolean
    horario_abertura?: boolean
    horario_fechamento?: boolean
    foto?: boolean
    complemento?: boolean
    agendamentos?: boolean | tbl_hospital$agendamentosArgs<ExtArgs>
    tbl_banco_sangue?: boolean | tbl_hospital$tbl_banco_sangueArgs<ExtArgs>
    tbl_registro_doacao?: boolean | tbl_hospital$tbl_registro_doacaoArgs<ExtArgs>
    _count?: boolean | Tbl_hospitalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_hospital"]>



  export type tbl_hospitalSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cnpj?: boolean
    crm?: boolean
    cep?: boolean
    telefone?: boolean
    capacidade_maxima?: boolean
    convenios?: boolean
    horario_abertura?: boolean
    horario_fechamento?: boolean
    foto?: boolean
    complemento?: boolean
  }

  export type tbl_hospitalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "cnpj" | "crm" | "cep" | "telefone" | "capacidade_maxima" | "convenios" | "horario_abertura" | "horario_fechamento" | "foto" | "complemento", ExtArgs["result"]["tbl_hospital"]>
  export type tbl_hospitalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | tbl_hospital$agendamentosArgs<ExtArgs>
    tbl_banco_sangue?: boolean | tbl_hospital$tbl_banco_sangueArgs<ExtArgs>
    tbl_registro_doacao?: boolean | tbl_hospital$tbl_registro_doacaoArgs<ExtArgs>
    _count?: boolean | Tbl_hospitalCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_hospitalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_hospital"
    objects: {
      agendamentos: Prisma.$tbl_agendamentoPayload<ExtArgs>[]
      tbl_banco_sangue: Prisma.$tbl_banco_sanguePayload<ExtArgs>[]
      tbl_registro_doacao: Prisma.$tbl_registro_doacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      cnpj: string
      crm: string
      cep: string
      telefone: string
      capacidade_maxima: number
      convenios: string
      horario_abertura: Date
      horario_fechamento: Date
      foto: string
      complemento: string | null
    }, ExtArgs["result"]["tbl_hospital"]>
    composites: {}
  }

  type tbl_hospitalGetPayload<S extends boolean | null | undefined | tbl_hospitalDefaultArgs> = $Result.GetResult<Prisma.$tbl_hospitalPayload, S>

  type tbl_hospitalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_hospitalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_hospitalCountAggregateInputType | true
    }

  export interface tbl_hospitalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_hospital'], meta: { name: 'tbl_hospital' } }
    /**
     * Find zero or one Tbl_hospital that matches the filter.
     * @param {tbl_hospitalFindUniqueArgs} args - Arguments to find a Tbl_hospital
     * @example
     * // Get one Tbl_hospital
     * const tbl_hospital = await prisma.tbl_hospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_hospitalFindUniqueArgs>(args: SelectSubset<T, tbl_hospitalFindUniqueArgs<ExtArgs>>): Prisma__tbl_hospitalClient<$Result.GetResult<Prisma.$tbl_hospitalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_hospital that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_hospitalFindUniqueOrThrowArgs} args - Arguments to find a Tbl_hospital
     * @example
     * // Get one Tbl_hospital
     * const tbl_hospital = await prisma.tbl_hospital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_hospitalFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_hospitalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_hospitalClient<$Result.GetResult<Prisma.$tbl_hospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_hospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_hospitalFindFirstArgs} args - Arguments to find a Tbl_hospital
     * @example
     * // Get one Tbl_hospital
     * const tbl_hospital = await prisma.tbl_hospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_hospitalFindFirstArgs>(args?: SelectSubset<T, tbl_hospitalFindFirstArgs<ExtArgs>>): Prisma__tbl_hospitalClient<$Result.GetResult<Prisma.$tbl_hospitalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_hospital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_hospitalFindFirstOrThrowArgs} args - Arguments to find a Tbl_hospital
     * @example
     * // Get one Tbl_hospital
     * const tbl_hospital = await prisma.tbl_hospital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_hospitalFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_hospitalFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_hospitalClient<$Result.GetResult<Prisma.$tbl_hospitalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_hospitalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_hospitals
     * const tbl_hospitals = await prisma.tbl_hospital.findMany()
     * 
     * // Get first 10 Tbl_hospitals
     * const tbl_hospitals = await prisma.tbl_hospital.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_hospitalWithIdOnly = await prisma.tbl_hospital.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_hospitalFindManyArgs>(args?: SelectSubset<T, tbl_hospitalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_hospitalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_hospital.
     * @param {tbl_hospitalCreateArgs} args - Arguments to create a Tbl_hospital.
     * @example
     * // Create one Tbl_hospital
     * const Tbl_hospital = await prisma.tbl_hospital.create({
     *   data: {
     *     // ... data to create a Tbl_hospital
     *   }
     * })
     * 
     */
    create<T extends tbl_hospitalCreateArgs>(args: SelectSubset<T, tbl_hospitalCreateArgs<ExtArgs>>): Prisma__tbl_hospitalClient<$Result.GetResult<Prisma.$tbl_hospitalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_hospitals.
     * @param {tbl_hospitalCreateManyArgs} args - Arguments to create many Tbl_hospitals.
     * @example
     * // Create many Tbl_hospitals
     * const tbl_hospital = await prisma.tbl_hospital.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_hospitalCreateManyArgs>(args?: SelectSubset<T, tbl_hospitalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_hospital.
     * @param {tbl_hospitalDeleteArgs} args - Arguments to delete one Tbl_hospital.
     * @example
     * // Delete one Tbl_hospital
     * const Tbl_hospital = await prisma.tbl_hospital.delete({
     *   where: {
     *     // ... filter to delete one Tbl_hospital
     *   }
     * })
     * 
     */
    delete<T extends tbl_hospitalDeleteArgs>(args: SelectSubset<T, tbl_hospitalDeleteArgs<ExtArgs>>): Prisma__tbl_hospitalClient<$Result.GetResult<Prisma.$tbl_hospitalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_hospital.
     * @param {tbl_hospitalUpdateArgs} args - Arguments to update one Tbl_hospital.
     * @example
     * // Update one Tbl_hospital
     * const tbl_hospital = await prisma.tbl_hospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_hospitalUpdateArgs>(args: SelectSubset<T, tbl_hospitalUpdateArgs<ExtArgs>>): Prisma__tbl_hospitalClient<$Result.GetResult<Prisma.$tbl_hospitalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_hospitals.
     * @param {tbl_hospitalDeleteManyArgs} args - Arguments to filter Tbl_hospitals to delete.
     * @example
     * // Delete a few Tbl_hospitals
     * const { count } = await prisma.tbl_hospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_hospitalDeleteManyArgs>(args?: SelectSubset<T, tbl_hospitalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_hospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_hospitals
     * const tbl_hospital = await prisma.tbl_hospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_hospitalUpdateManyArgs>(args: SelectSubset<T, tbl_hospitalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_hospital.
     * @param {tbl_hospitalUpsertArgs} args - Arguments to update or create a Tbl_hospital.
     * @example
     * // Update or create a Tbl_hospital
     * const tbl_hospital = await prisma.tbl_hospital.upsert({
     *   create: {
     *     // ... data to create a Tbl_hospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_hospital we want to update
     *   }
     * })
     */
    upsert<T extends tbl_hospitalUpsertArgs>(args: SelectSubset<T, tbl_hospitalUpsertArgs<ExtArgs>>): Prisma__tbl_hospitalClient<$Result.GetResult<Prisma.$tbl_hospitalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_hospitalCountArgs} args - Arguments to filter Tbl_hospitals to count.
     * @example
     * // Count the number of Tbl_hospitals
     * const count = await prisma.tbl_hospital.count({
     *   where: {
     *     // ... the filter for the Tbl_hospitals we want to count
     *   }
     * })
    **/
    count<T extends tbl_hospitalCountArgs>(
      args?: Subset<T, tbl_hospitalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_hospitalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_hospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_hospitalAggregateArgs>(args: Subset<T, Tbl_hospitalAggregateArgs>): Prisma.PrismaPromise<GetTbl_hospitalAggregateType<T>>

    /**
     * Group by Tbl_hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_hospitalGroupByArgs} args - Group by arguments.
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
      T extends tbl_hospitalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_hospitalGroupByArgs['orderBy'] }
        : { orderBy?: tbl_hospitalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_hospitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_hospitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_hospital model
   */
  readonly fields: tbl_hospitalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_hospital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_hospitalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamentos<T extends tbl_hospital$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_hospital$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_agendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_banco_sangue<T extends tbl_hospital$tbl_banco_sangueArgs<ExtArgs> = {}>(args?: Subset<T, tbl_hospital$tbl_banco_sangueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_banco_sanguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_registro_doacao<T extends tbl_hospital$tbl_registro_doacaoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_hospital$tbl_registro_doacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_registro_doacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_hospital model
   */
  interface tbl_hospitalFieldRefs {
    readonly id: FieldRef<"tbl_hospital", 'Int'>
    readonly nome: FieldRef<"tbl_hospital", 'String'>
    readonly email: FieldRef<"tbl_hospital", 'String'>
    readonly senha: FieldRef<"tbl_hospital", 'String'>
    readonly cnpj: FieldRef<"tbl_hospital", 'String'>
    readonly crm: FieldRef<"tbl_hospital", 'String'>
    readonly cep: FieldRef<"tbl_hospital", 'String'>
    readonly telefone: FieldRef<"tbl_hospital", 'String'>
    readonly capacidade_maxima: FieldRef<"tbl_hospital", 'Int'>
    readonly convenios: FieldRef<"tbl_hospital", 'String'>
    readonly horario_abertura: FieldRef<"tbl_hospital", 'DateTime'>
    readonly horario_fechamento: FieldRef<"tbl_hospital", 'DateTime'>
    readonly foto: FieldRef<"tbl_hospital", 'String'>
    readonly complemento: FieldRef<"tbl_hospital", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_hospital findUnique
   */
  export type tbl_hospitalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_hospital
     */
    select?: tbl_hospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_hospital
     */
    omit?: tbl_hospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_hospitalInclude<ExtArgs> | null
    /**
     * Filter, which tbl_hospital to fetch.
     */
    where: tbl_hospitalWhereUniqueInput
  }

  /**
   * tbl_hospital findUniqueOrThrow
   */
  export type tbl_hospitalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_hospital
     */
    select?: tbl_hospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_hospital
     */
    omit?: tbl_hospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_hospitalInclude<ExtArgs> | null
    /**
     * Filter, which tbl_hospital to fetch.
     */
    where: tbl_hospitalWhereUniqueInput
  }

  /**
   * tbl_hospital findFirst
   */
  export type tbl_hospitalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_hospital
     */
    select?: tbl_hospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_hospital
     */
    omit?: tbl_hospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_hospitalInclude<ExtArgs> | null
    /**
     * Filter, which tbl_hospital to fetch.
     */
    where?: tbl_hospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_hospitals to fetch.
     */
    orderBy?: tbl_hospitalOrderByWithRelationInput | tbl_hospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_hospitals.
     */
    cursor?: tbl_hospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_hospitals.
     */
    distinct?: Tbl_hospitalScalarFieldEnum | Tbl_hospitalScalarFieldEnum[]
  }

  /**
   * tbl_hospital findFirstOrThrow
   */
  export type tbl_hospitalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_hospital
     */
    select?: tbl_hospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_hospital
     */
    omit?: tbl_hospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_hospitalInclude<ExtArgs> | null
    /**
     * Filter, which tbl_hospital to fetch.
     */
    where?: tbl_hospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_hospitals to fetch.
     */
    orderBy?: tbl_hospitalOrderByWithRelationInput | tbl_hospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_hospitals.
     */
    cursor?: tbl_hospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_hospitals.
     */
    distinct?: Tbl_hospitalScalarFieldEnum | Tbl_hospitalScalarFieldEnum[]
  }

  /**
   * tbl_hospital findMany
   */
  export type tbl_hospitalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_hospital
     */
    select?: tbl_hospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_hospital
     */
    omit?: tbl_hospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_hospitalInclude<ExtArgs> | null
    /**
     * Filter, which tbl_hospitals to fetch.
     */
    where?: tbl_hospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_hospitals to fetch.
     */
    orderBy?: tbl_hospitalOrderByWithRelationInput | tbl_hospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_hospitals.
     */
    cursor?: tbl_hospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_hospitals.
     */
    skip?: number
    distinct?: Tbl_hospitalScalarFieldEnum | Tbl_hospitalScalarFieldEnum[]
  }

  /**
   * tbl_hospital create
   */
  export type tbl_hospitalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_hospital
     */
    select?: tbl_hospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_hospital
     */
    omit?: tbl_hospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_hospitalInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_hospital.
     */
    data: XOR<tbl_hospitalCreateInput, tbl_hospitalUncheckedCreateInput>
  }

  /**
   * tbl_hospital createMany
   */
  export type tbl_hospitalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_hospitals.
     */
    data: tbl_hospitalCreateManyInput | tbl_hospitalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_hospital update
   */
  export type tbl_hospitalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_hospital
     */
    select?: tbl_hospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_hospital
     */
    omit?: tbl_hospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_hospitalInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_hospital.
     */
    data: XOR<tbl_hospitalUpdateInput, tbl_hospitalUncheckedUpdateInput>
    /**
     * Choose, which tbl_hospital to update.
     */
    where: tbl_hospitalWhereUniqueInput
  }

  /**
   * tbl_hospital updateMany
   */
  export type tbl_hospitalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_hospitals.
     */
    data: XOR<tbl_hospitalUpdateManyMutationInput, tbl_hospitalUncheckedUpdateManyInput>
    /**
     * Filter which tbl_hospitals to update
     */
    where?: tbl_hospitalWhereInput
    /**
     * Limit how many tbl_hospitals to update.
     */
    limit?: number
  }

  /**
   * tbl_hospital upsert
   */
  export type tbl_hospitalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_hospital
     */
    select?: tbl_hospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_hospital
     */
    omit?: tbl_hospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_hospitalInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_hospital to update in case it exists.
     */
    where: tbl_hospitalWhereUniqueInput
    /**
     * In case the tbl_hospital found by the `where` argument doesn't exist, create a new tbl_hospital with this data.
     */
    create: XOR<tbl_hospitalCreateInput, tbl_hospitalUncheckedCreateInput>
    /**
     * In case the tbl_hospital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_hospitalUpdateInput, tbl_hospitalUncheckedUpdateInput>
  }

  /**
   * tbl_hospital delete
   */
  export type tbl_hospitalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_hospital
     */
    select?: tbl_hospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_hospital
     */
    omit?: tbl_hospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_hospitalInclude<ExtArgs> | null
    /**
     * Filter which tbl_hospital to delete.
     */
    where: tbl_hospitalWhereUniqueInput
  }

  /**
   * tbl_hospital deleteMany
   */
  export type tbl_hospitalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_hospitals to delete
     */
    where?: tbl_hospitalWhereInput
    /**
     * Limit how many tbl_hospitals to delete.
     */
    limit?: number
  }

  /**
   * tbl_hospital.agendamentos
   */
  export type tbl_hospital$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_agendamento
     */
    select?: tbl_agendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_agendamento
     */
    omit?: tbl_agendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_agendamentoInclude<ExtArgs> | null
    where?: tbl_agendamentoWhereInput
    orderBy?: tbl_agendamentoOrderByWithRelationInput | tbl_agendamentoOrderByWithRelationInput[]
    cursor?: tbl_agendamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_agendamentoScalarFieldEnum | Tbl_agendamentoScalarFieldEnum[]
  }

  /**
   * tbl_hospital.tbl_banco_sangue
   */
  export type tbl_hospital$tbl_banco_sangueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_banco_sangue
     */
    select?: tbl_banco_sangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_banco_sangue
     */
    omit?: tbl_banco_sangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_banco_sangueInclude<ExtArgs> | null
    where?: tbl_banco_sangueWhereInput
    orderBy?: tbl_banco_sangueOrderByWithRelationInput | tbl_banco_sangueOrderByWithRelationInput[]
    cursor?: tbl_banco_sangueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_banco_sangueScalarFieldEnum | Tbl_banco_sangueScalarFieldEnum[]
  }

  /**
   * tbl_hospital.tbl_registro_doacao
   */
  export type tbl_hospital$tbl_registro_doacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_registro_doacao
     */
    select?: tbl_registro_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_registro_doacao
     */
    omit?: tbl_registro_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_registro_doacaoInclude<ExtArgs> | null
    where?: tbl_registro_doacaoWhereInput
    orderBy?: tbl_registro_doacaoOrderByWithRelationInput | tbl_registro_doacaoOrderByWithRelationInput[]
    cursor?: tbl_registro_doacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_registro_doacaoScalarFieldEnum | Tbl_registro_doacaoScalarFieldEnum[]
  }

  /**
   * tbl_hospital without action
   */
  export type tbl_hospitalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_hospital
     */
    select?: tbl_hospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_hospital
     */
    omit?: tbl_hospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_hospitalInclude<ExtArgs> | null
  }


  /**
   * Model tbl_sexo
   */

  export type AggregateTbl_sexo = {
    _count: Tbl_sexoCountAggregateOutputType | null
    _avg: Tbl_sexoAvgAggregateOutputType | null
    _sum: Tbl_sexoSumAggregateOutputType | null
    _min: Tbl_sexoMinAggregateOutputType | null
    _max: Tbl_sexoMaxAggregateOutputType | null
  }

  export type Tbl_sexoAvgAggregateOutputType = {
    id: number | null
  }

  export type Tbl_sexoSumAggregateOutputType = {
    id: number | null
  }

  export type Tbl_sexoMinAggregateOutputType = {
    id: number | null
    sexo: string | null
  }

  export type Tbl_sexoMaxAggregateOutputType = {
    id: number | null
    sexo: string | null
  }

  export type Tbl_sexoCountAggregateOutputType = {
    id: number
    sexo: number
    _all: number
  }


  export type Tbl_sexoAvgAggregateInputType = {
    id?: true
  }

  export type Tbl_sexoSumAggregateInputType = {
    id?: true
  }

  export type Tbl_sexoMinAggregateInputType = {
    id?: true
    sexo?: true
  }

  export type Tbl_sexoMaxAggregateInputType = {
    id?: true
    sexo?: true
  }

  export type Tbl_sexoCountAggregateInputType = {
    id?: true
    sexo?: true
    _all?: true
  }

  export type Tbl_sexoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_sexo to aggregate.
     */
    where?: tbl_sexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_sexos to fetch.
     */
    orderBy?: tbl_sexoOrderByWithRelationInput | tbl_sexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_sexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_sexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_sexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_sexos
    **/
    _count?: true | Tbl_sexoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_sexoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_sexoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_sexoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_sexoMaxAggregateInputType
  }

  export type GetTbl_sexoAggregateType<T extends Tbl_sexoAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_sexo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_sexo[P]>
      : GetScalarType<T[P], AggregateTbl_sexo[P]>
  }




  export type tbl_sexoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_sexoWhereInput
    orderBy?: tbl_sexoOrderByWithAggregationInput | tbl_sexoOrderByWithAggregationInput[]
    by: Tbl_sexoScalarFieldEnum[] | Tbl_sexoScalarFieldEnum
    having?: tbl_sexoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_sexoCountAggregateInputType | true
    _avg?: Tbl_sexoAvgAggregateInputType
    _sum?: Tbl_sexoSumAggregateInputType
    _min?: Tbl_sexoMinAggregateInputType
    _max?: Tbl_sexoMaxAggregateInputType
  }

  export type Tbl_sexoGroupByOutputType = {
    id: number
    sexo: string
    _count: Tbl_sexoCountAggregateOutputType | null
    _avg: Tbl_sexoAvgAggregateOutputType | null
    _sum: Tbl_sexoSumAggregateOutputType | null
    _min: Tbl_sexoMinAggregateOutputType | null
    _max: Tbl_sexoMaxAggregateOutputType | null
  }

  type GetTbl_sexoGroupByPayload<T extends tbl_sexoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_sexoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_sexoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_sexoGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_sexoGroupByOutputType[P]>
        }
      >
    >


  export type tbl_sexoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sexo?: boolean
    usuarios?: boolean | tbl_sexo$usuariosArgs<ExtArgs>
    _count?: boolean | Tbl_sexoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_sexo"]>



  export type tbl_sexoSelectScalar = {
    id?: boolean
    sexo?: boolean
  }

  export type tbl_sexoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sexo", ExtArgs["result"]["tbl_sexo"]>
  export type tbl_sexoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | tbl_sexo$usuariosArgs<ExtArgs>
    _count?: boolean | Tbl_sexoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_sexoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_sexo"
    objects: {
      usuarios: Prisma.$tbl_usuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sexo: string
    }, ExtArgs["result"]["tbl_sexo"]>
    composites: {}
  }

  type tbl_sexoGetPayload<S extends boolean | null | undefined | tbl_sexoDefaultArgs> = $Result.GetResult<Prisma.$tbl_sexoPayload, S>

  type tbl_sexoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_sexoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_sexoCountAggregateInputType | true
    }

  export interface tbl_sexoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_sexo'], meta: { name: 'tbl_sexo' } }
    /**
     * Find zero or one Tbl_sexo that matches the filter.
     * @param {tbl_sexoFindUniqueArgs} args - Arguments to find a Tbl_sexo
     * @example
     * // Get one Tbl_sexo
     * const tbl_sexo = await prisma.tbl_sexo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_sexoFindUniqueArgs>(args: SelectSubset<T, tbl_sexoFindUniqueArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_sexo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_sexoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_sexo
     * @example
     * // Get one Tbl_sexo
     * const tbl_sexo = await prisma.tbl_sexo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_sexoFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_sexoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_sexo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_sexoFindFirstArgs} args - Arguments to find a Tbl_sexo
     * @example
     * // Get one Tbl_sexo
     * const tbl_sexo = await prisma.tbl_sexo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_sexoFindFirstArgs>(args?: SelectSubset<T, tbl_sexoFindFirstArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_sexo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_sexoFindFirstOrThrowArgs} args - Arguments to find a Tbl_sexo
     * @example
     * // Get one Tbl_sexo
     * const tbl_sexo = await prisma.tbl_sexo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_sexoFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_sexoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_sexos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_sexoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_sexos
     * const tbl_sexos = await prisma.tbl_sexo.findMany()
     * 
     * // Get first 10 Tbl_sexos
     * const tbl_sexos = await prisma.tbl_sexo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_sexoWithIdOnly = await prisma.tbl_sexo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_sexoFindManyArgs>(args?: SelectSubset<T, tbl_sexoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_sexo.
     * @param {tbl_sexoCreateArgs} args - Arguments to create a Tbl_sexo.
     * @example
     * // Create one Tbl_sexo
     * const Tbl_sexo = await prisma.tbl_sexo.create({
     *   data: {
     *     // ... data to create a Tbl_sexo
     *   }
     * })
     * 
     */
    create<T extends tbl_sexoCreateArgs>(args: SelectSubset<T, tbl_sexoCreateArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_sexos.
     * @param {tbl_sexoCreateManyArgs} args - Arguments to create many Tbl_sexos.
     * @example
     * // Create many Tbl_sexos
     * const tbl_sexo = await prisma.tbl_sexo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_sexoCreateManyArgs>(args?: SelectSubset<T, tbl_sexoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_sexo.
     * @param {tbl_sexoDeleteArgs} args - Arguments to delete one Tbl_sexo.
     * @example
     * // Delete one Tbl_sexo
     * const Tbl_sexo = await prisma.tbl_sexo.delete({
     *   where: {
     *     // ... filter to delete one Tbl_sexo
     *   }
     * })
     * 
     */
    delete<T extends tbl_sexoDeleteArgs>(args: SelectSubset<T, tbl_sexoDeleteArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_sexo.
     * @param {tbl_sexoUpdateArgs} args - Arguments to update one Tbl_sexo.
     * @example
     * // Update one Tbl_sexo
     * const tbl_sexo = await prisma.tbl_sexo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_sexoUpdateArgs>(args: SelectSubset<T, tbl_sexoUpdateArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_sexos.
     * @param {tbl_sexoDeleteManyArgs} args - Arguments to filter Tbl_sexos to delete.
     * @example
     * // Delete a few Tbl_sexos
     * const { count } = await prisma.tbl_sexo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_sexoDeleteManyArgs>(args?: SelectSubset<T, tbl_sexoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_sexos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_sexoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_sexos
     * const tbl_sexo = await prisma.tbl_sexo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_sexoUpdateManyArgs>(args: SelectSubset<T, tbl_sexoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_sexo.
     * @param {tbl_sexoUpsertArgs} args - Arguments to update or create a Tbl_sexo.
     * @example
     * // Update or create a Tbl_sexo
     * const tbl_sexo = await prisma.tbl_sexo.upsert({
     *   create: {
     *     // ... data to create a Tbl_sexo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_sexo we want to update
     *   }
     * })
     */
    upsert<T extends tbl_sexoUpsertArgs>(args: SelectSubset<T, tbl_sexoUpsertArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_sexos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_sexoCountArgs} args - Arguments to filter Tbl_sexos to count.
     * @example
     * // Count the number of Tbl_sexos
     * const count = await prisma.tbl_sexo.count({
     *   where: {
     *     // ... the filter for the Tbl_sexos we want to count
     *   }
     * })
    **/
    count<T extends tbl_sexoCountArgs>(
      args?: Subset<T, tbl_sexoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_sexoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_sexo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_sexoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_sexoAggregateArgs>(args: Subset<T, Tbl_sexoAggregateArgs>): Prisma.PrismaPromise<GetTbl_sexoAggregateType<T>>

    /**
     * Group by Tbl_sexo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_sexoGroupByArgs} args - Group by arguments.
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
      T extends tbl_sexoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_sexoGroupByArgs['orderBy'] }
        : { orderBy?: tbl_sexoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_sexoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_sexoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_sexo model
   */
  readonly fields: tbl_sexoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_sexo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_sexoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends tbl_sexo$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_sexo$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_sexo model
   */
  interface tbl_sexoFieldRefs {
    readonly id: FieldRef<"tbl_sexo", 'Int'>
    readonly sexo: FieldRef<"tbl_sexo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_sexo findUnique
   */
  export type tbl_sexoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_sexo to fetch.
     */
    where: tbl_sexoWhereUniqueInput
  }

  /**
   * tbl_sexo findUniqueOrThrow
   */
  export type tbl_sexoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_sexo to fetch.
     */
    where: tbl_sexoWhereUniqueInput
  }

  /**
   * tbl_sexo findFirst
   */
  export type tbl_sexoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_sexo to fetch.
     */
    where?: tbl_sexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_sexos to fetch.
     */
    orderBy?: tbl_sexoOrderByWithRelationInput | tbl_sexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_sexos.
     */
    cursor?: tbl_sexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_sexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_sexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_sexos.
     */
    distinct?: Tbl_sexoScalarFieldEnum | Tbl_sexoScalarFieldEnum[]
  }

  /**
   * tbl_sexo findFirstOrThrow
   */
  export type tbl_sexoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_sexo to fetch.
     */
    where?: tbl_sexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_sexos to fetch.
     */
    orderBy?: tbl_sexoOrderByWithRelationInput | tbl_sexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_sexos.
     */
    cursor?: tbl_sexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_sexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_sexos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_sexos.
     */
    distinct?: Tbl_sexoScalarFieldEnum | Tbl_sexoScalarFieldEnum[]
  }

  /**
   * tbl_sexo findMany
   */
  export type tbl_sexoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_sexos to fetch.
     */
    where?: tbl_sexoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_sexos to fetch.
     */
    orderBy?: tbl_sexoOrderByWithRelationInput | tbl_sexoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_sexos.
     */
    cursor?: tbl_sexoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_sexos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_sexos.
     */
    skip?: number
    distinct?: Tbl_sexoScalarFieldEnum | Tbl_sexoScalarFieldEnum[]
  }

  /**
   * tbl_sexo create
   */
  export type tbl_sexoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_sexo.
     */
    data: XOR<tbl_sexoCreateInput, tbl_sexoUncheckedCreateInput>
  }

  /**
   * tbl_sexo createMany
   */
  export type tbl_sexoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_sexos.
     */
    data: tbl_sexoCreateManyInput | tbl_sexoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_sexo update
   */
  export type tbl_sexoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_sexo.
     */
    data: XOR<tbl_sexoUpdateInput, tbl_sexoUncheckedUpdateInput>
    /**
     * Choose, which tbl_sexo to update.
     */
    where: tbl_sexoWhereUniqueInput
  }

  /**
   * tbl_sexo updateMany
   */
  export type tbl_sexoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_sexos.
     */
    data: XOR<tbl_sexoUpdateManyMutationInput, tbl_sexoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_sexos to update
     */
    where?: tbl_sexoWhereInput
    /**
     * Limit how many tbl_sexos to update.
     */
    limit?: number
  }

  /**
   * tbl_sexo upsert
   */
  export type tbl_sexoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_sexo to update in case it exists.
     */
    where: tbl_sexoWhereUniqueInput
    /**
     * In case the tbl_sexo found by the `where` argument doesn't exist, create a new tbl_sexo with this data.
     */
    create: XOR<tbl_sexoCreateInput, tbl_sexoUncheckedCreateInput>
    /**
     * In case the tbl_sexo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_sexoUpdateInput, tbl_sexoUncheckedUpdateInput>
  }

  /**
   * tbl_sexo delete
   */
  export type tbl_sexoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    /**
     * Filter which tbl_sexo to delete.
     */
    where: tbl_sexoWhereUniqueInput
  }

  /**
   * tbl_sexo deleteMany
   */
  export type tbl_sexoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_sexos to delete
     */
    where?: tbl_sexoWhereInput
    /**
     * Limit how many tbl_sexos to delete.
     */
    limit?: number
  }

  /**
   * tbl_sexo.usuarios
   */
  export type tbl_sexo$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuario
     */
    select?: tbl_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuario
     */
    omit?: tbl_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuarioInclude<ExtArgs> | null
    where?: tbl_usuarioWhereInput
    orderBy?: tbl_usuarioOrderByWithRelationInput | tbl_usuarioOrderByWithRelationInput[]
    cursor?: tbl_usuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_usuarioScalarFieldEnum | Tbl_usuarioScalarFieldEnum[]
  }

  /**
   * tbl_sexo without action
   */
  export type tbl_sexoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
  }


  /**
   * Model tbl_telefone
   */

  export type AggregateTbl_telefone = {
    _count: Tbl_telefoneCountAggregateOutputType | null
    _avg: Tbl_telefoneAvgAggregateOutputType | null
    _sum: Tbl_telefoneSumAggregateOutputType | null
    _min: Tbl_telefoneMinAggregateOutputType | null
    _max: Tbl_telefoneMaxAggregateOutputType | null
  }

  export type Tbl_telefoneAvgAggregateOutputType = {
    id: number | null
    id_usuario: number | null
  }

  export type Tbl_telefoneSumAggregateOutputType = {
    id: number | null
    id_usuario: number | null
  }

  export type Tbl_telefoneMinAggregateOutputType = {
    id: number | null
    tipo: string | null
    numero: string | null
    id_usuario: number | null
  }

  export type Tbl_telefoneMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
    numero: string | null
    id_usuario: number | null
  }

  export type Tbl_telefoneCountAggregateOutputType = {
    id: number
    tipo: number
    numero: number
    id_usuario: number
    _all: number
  }


  export type Tbl_telefoneAvgAggregateInputType = {
    id?: true
    id_usuario?: true
  }

  export type Tbl_telefoneSumAggregateInputType = {
    id?: true
    id_usuario?: true
  }

  export type Tbl_telefoneMinAggregateInputType = {
    id?: true
    tipo?: true
    numero?: true
    id_usuario?: true
  }

  export type Tbl_telefoneMaxAggregateInputType = {
    id?: true
    tipo?: true
    numero?: true
    id_usuario?: true
  }

  export type Tbl_telefoneCountAggregateInputType = {
    id?: true
    tipo?: true
    numero?: true
    id_usuario?: true
    _all?: true
  }

  export type Tbl_telefoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_telefone to aggregate.
     */
    where?: tbl_telefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_telefones to fetch.
     */
    orderBy?: tbl_telefoneOrderByWithRelationInput | tbl_telefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_telefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_telefones
    **/
    _count?: true | Tbl_telefoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_telefoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_telefoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_telefoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_telefoneMaxAggregateInputType
  }

  export type GetTbl_telefoneAggregateType<T extends Tbl_telefoneAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_telefone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_telefone[P]>
      : GetScalarType<T[P], AggregateTbl_telefone[P]>
  }




  export type tbl_telefoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_telefoneWhereInput
    orderBy?: tbl_telefoneOrderByWithAggregationInput | tbl_telefoneOrderByWithAggregationInput[]
    by: Tbl_telefoneScalarFieldEnum[] | Tbl_telefoneScalarFieldEnum
    having?: tbl_telefoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_telefoneCountAggregateInputType | true
    _avg?: Tbl_telefoneAvgAggregateInputType
    _sum?: Tbl_telefoneSumAggregateInputType
    _min?: Tbl_telefoneMinAggregateInputType
    _max?: Tbl_telefoneMaxAggregateInputType
  }

  export type Tbl_telefoneGroupByOutputType = {
    id: number
    tipo: string
    numero: string
    id_usuario: number | null
    _count: Tbl_telefoneCountAggregateOutputType | null
    _avg: Tbl_telefoneAvgAggregateOutputType | null
    _sum: Tbl_telefoneSumAggregateOutputType | null
    _min: Tbl_telefoneMinAggregateOutputType | null
    _max: Tbl_telefoneMaxAggregateOutputType | null
  }

  type GetTbl_telefoneGroupByPayload<T extends tbl_telefoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_telefoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_telefoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_telefoneGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_telefoneGroupByOutputType[P]>
        }
      >
    >


  export type tbl_telefoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    numero?: boolean
    id_usuario?: boolean
    tbl_usuario?: boolean | tbl_telefone$tbl_usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_telefone"]>



  export type tbl_telefoneSelectScalar = {
    id?: boolean
    tipo?: boolean
    numero?: boolean
    id_usuario?: boolean
  }

  export type tbl_telefoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "numero" | "id_usuario", ExtArgs["result"]["tbl_telefone"]>
  export type tbl_telefoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_usuario?: boolean | tbl_telefone$tbl_usuarioArgs<ExtArgs>
  }

  export type $tbl_telefonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_telefone"
    objects: {
      tbl_usuario: Prisma.$tbl_usuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
      numero: string
      id_usuario: number | null
    }, ExtArgs["result"]["tbl_telefone"]>
    composites: {}
  }

  type tbl_telefoneGetPayload<S extends boolean | null | undefined | tbl_telefoneDefaultArgs> = $Result.GetResult<Prisma.$tbl_telefonePayload, S>

  type tbl_telefoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_telefoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_telefoneCountAggregateInputType | true
    }

  export interface tbl_telefoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_telefone'], meta: { name: 'tbl_telefone' } }
    /**
     * Find zero or one Tbl_telefone that matches the filter.
     * @param {tbl_telefoneFindUniqueArgs} args - Arguments to find a Tbl_telefone
     * @example
     * // Get one Tbl_telefone
     * const tbl_telefone = await prisma.tbl_telefone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_telefoneFindUniqueArgs>(args: SelectSubset<T, tbl_telefoneFindUniqueArgs<ExtArgs>>): Prisma__tbl_telefoneClient<$Result.GetResult<Prisma.$tbl_telefonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_telefone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_telefoneFindUniqueOrThrowArgs} args - Arguments to find a Tbl_telefone
     * @example
     * // Get one Tbl_telefone
     * const tbl_telefone = await prisma.tbl_telefone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_telefoneFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_telefoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_telefoneClient<$Result.GetResult<Prisma.$tbl_telefonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_telefone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_telefoneFindFirstArgs} args - Arguments to find a Tbl_telefone
     * @example
     * // Get one Tbl_telefone
     * const tbl_telefone = await prisma.tbl_telefone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_telefoneFindFirstArgs>(args?: SelectSubset<T, tbl_telefoneFindFirstArgs<ExtArgs>>): Prisma__tbl_telefoneClient<$Result.GetResult<Prisma.$tbl_telefonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_telefone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_telefoneFindFirstOrThrowArgs} args - Arguments to find a Tbl_telefone
     * @example
     * // Get one Tbl_telefone
     * const tbl_telefone = await prisma.tbl_telefone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_telefoneFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_telefoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_telefoneClient<$Result.GetResult<Prisma.$tbl_telefonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_telefones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_telefoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_telefones
     * const tbl_telefones = await prisma.tbl_telefone.findMany()
     * 
     * // Get first 10 Tbl_telefones
     * const tbl_telefones = await prisma.tbl_telefone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_telefoneWithIdOnly = await prisma.tbl_telefone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_telefoneFindManyArgs>(args?: SelectSubset<T, tbl_telefoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_telefonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_telefone.
     * @param {tbl_telefoneCreateArgs} args - Arguments to create a Tbl_telefone.
     * @example
     * // Create one Tbl_telefone
     * const Tbl_telefone = await prisma.tbl_telefone.create({
     *   data: {
     *     // ... data to create a Tbl_telefone
     *   }
     * })
     * 
     */
    create<T extends tbl_telefoneCreateArgs>(args: SelectSubset<T, tbl_telefoneCreateArgs<ExtArgs>>): Prisma__tbl_telefoneClient<$Result.GetResult<Prisma.$tbl_telefonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_telefones.
     * @param {tbl_telefoneCreateManyArgs} args - Arguments to create many Tbl_telefones.
     * @example
     * // Create many Tbl_telefones
     * const tbl_telefone = await prisma.tbl_telefone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_telefoneCreateManyArgs>(args?: SelectSubset<T, tbl_telefoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_telefone.
     * @param {tbl_telefoneDeleteArgs} args - Arguments to delete one Tbl_telefone.
     * @example
     * // Delete one Tbl_telefone
     * const Tbl_telefone = await prisma.tbl_telefone.delete({
     *   where: {
     *     // ... filter to delete one Tbl_telefone
     *   }
     * })
     * 
     */
    delete<T extends tbl_telefoneDeleteArgs>(args: SelectSubset<T, tbl_telefoneDeleteArgs<ExtArgs>>): Prisma__tbl_telefoneClient<$Result.GetResult<Prisma.$tbl_telefonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_telefone.
     * @param {tbl_telefoneUpdateArgs} args - Arguments to update one Tbl_telefone.
     * @example
     * // Update one Tbl_telefone
     * const tbl_telefone = await prisma.tbl_telefone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_telefoneUpdateArgs>(args: SelectSubset<T, tbl_telefoneUpdateArgs<ExtArgs>>): Prisma__tbl_telefoneClient<$Result.GetResult<Prisma.$tbl_telefonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_telefones.
     * @param {tbl_telefoneDeleteManyArgs} args - Arguments to filter Tbl_telefones to delete.
     * @example
     * // Delete a few Tbl_telefones
     * const { count } = await prisma.tbl_telefone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_telefoneDeleteManyArgs>(args?: SelectSubset<T, tbl_telefoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_telefones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_telefoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_telefones
     * const tbl_telefone = await prisma.tbl_telefone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_telefoneUpdateManyArgs>(args: SelectSubset<T, tbl_telefoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_telefone.
     * @param {tbl_telefoneUpsertArgs} args - Arguments to update or create a Tbl_telefone.
     * @example
     * // Update or create a Tbl_telefone
     * const tbl_telefone = await prisma.tbl_telefone.upsert({
     *   create: {
     *     // ... data to create a Tbl_telefone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_telefone we want to update
     *   }
     * })
     */
    upsert<T extends tbl_telefoneUpsertArgs>(args: SelectSubset<T, tbl_telefoneUpsertArgs<ExtArgs>>): Prisma__tbl_telefoneClient<$Result.GetResult<Prisma.$tbl_telefonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_telefones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_telefoneCountArgs} args - Arguments to filter Tbl_telefones to count.
     * @example
     * // Count the number of Tbl_telefones
     * const count = await prisma.tbl_telefone.count({
     *   where: {
     *     // ... the filter for the Tbl_telefones we want to count
     *   }
     * })
    **/
    count<T extends tbl_telefoneCountArgs>(
      args?: Subset<T, tbl_telefoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_telefoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_telefone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_telefoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_telefoneAggregateArgs>(args: Subset<T, Tbl_telefoneAggregateArgs>): Prisma.PrismaPromise<GetTbl_telefoneAggregateType<T>>

    /**
     * Group by Tbl_telefone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_telefoneGroupByArgs} args - Group by arguments.
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
      T extends tbl_telefoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_telefoneGroupByArgs['orderBy'] }
        : { orderBy?: tbl_telefoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_telefoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_telefoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_telefone model
   */
  readonly fields: tbl_telefoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_telefone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_telefoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tbl_usuario<T extends tbl_telefone$tbl_usuarioArgs<ExtArgs> = {}>(args?: Subset<T, tbl_telefone$tbl_usuarioArgs<ExtArgs>>): Prisma__tbl_usuarioClient<$Result.GetResult<Prisma.$tbl_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tbl_telefone model
   */
  interface tbl_telefoneFieldRefs {
    readonly id: FieldRef<"tbl_telefone", 'Int'>
    readonly tipo: FieldRef<"tbl_telefone", 'String'>
    readonly numero: FieldRef<"tbl_telefone", 'String'>
    readonly id_usuario: FieldRef<"tbl_telefone", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbl_telefone findUnique
   */
  export type tbl_telefoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_telefone
     */
    select?: tbl_telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_telefone
     */
    omit?: tbl_telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_telefoneInclude<ExtArgs> | null
    /**
     * Filter, which tbl_telefone to fetch.
     */
    where: tbl_telefoneWhereUniqueInput
  }

  /**
   * tbl_telefone findUniqueOrThrow
   */
  export type tbl_telefoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_telefone
     */
    select?: tbl_telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_telefone
     */
    omit?: tbl_telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_telefoneInclude<ExtArgs> | null
    /**
     * Filter, which tbl_telefone to fetch.
     */
    where: tbl_telefoneWhereUniqueInput
  }

  /**
   * tbl_telefone findFirst
   */
  export type tbl_telefoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_telefone
     */
    select?: tbl_telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_telefone
     */
    omit?: tbl_telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_telefoneInclude<ExtArgs> | null
    /**
     * Filter, which tbl_telefone to fetch.
     */
    where?: tbl_telefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_telefones to fetch.
     */
    orderBy?: tbl_telefoneOrderByWithRelationInput | tbl_telefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_telefones.
     */
    cursor?: tbl_telefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_telefones.
     */
    distinct?: Tbl_telefoneScalarFieldEnum | Tbl_telefoneScalarFieldEnum[]
  }

  /**
   * tbl_telefone findFirstOrThrow
   */
  export type tbl_telefoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_telefone
     */
    select?: tbl_telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_telefone
     */
    omit?: tbl_telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_telefoneInclude<ExtArgs> | null
    /**
     * Filter, which tbl_telefone to fetch.
     */
    where?: tbl_telefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_telefones to fetch.
     */
    orderBy?: tbl_telefoneOrderByWithRelationInput | tbl_telefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_telefones.
     */
    cursor?: tbl_telefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_telefones.
     */
    distinct?: Tbl_telefoneScalarFieldEnum | Tbl_telefoneScalarFieldEnum[]
  }

  /**
   * tbl_telefone findMany
   */
  export type tbl_telefoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_telefone
     */
    select?: tbl_telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_telefone
     */
    omit?: tbl_telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_telefoneInclude<ExtArgs> | null
    /**
     * Filter, which tbl_telefones to fetch.
     */
    where?: tbl_telefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_telefones to fetch.
     */
    orderBy?: tbl_telefoneOrderByWithRelationInput | tbl_telefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_telefones.
     */
    cursor?: tbl_telefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_telefones.
     */
    skip?: number
    distinct?: Tbl_telefoneScalarFieldEnum | Tbl_telefoneScalarFieldEnum[]
  }

  /**
   * tbl_telefone create
   */
  export type tbl_telefoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_telefone
     */
    select?: tbl_telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_telefone
     */
    omit?: tbl_telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_telefoneInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_telefone.
     */
    data: XOR<tbl_telefoneCreateInput, tbl_telefoneUncheckedCreateInput>
  }

  /**
   * tbl_telefone createMany
   */
  export type tbl_telefoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_telefones.
     */
    data: tbl_telefoneCreateManyInput | tbl_telefoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_telefone update
   */
  export type tbl_telefoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_telefone
     */
    select?: tbl_telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_telefone
     */
    omit?: tbl_telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_telefoneInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_telefone.
     */
    data: XOR<tbl_telefoneUpdateInput, tbl_telefoneUncheckedUpdateInput>
    /**
     * Choose, which tbl_telefone to update.
     */
    where: tbl_telefoneWhereUniqueInput
  }

  /**
   * tbl_telefone updateMany
   */
  export type tbl_telefoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_telefones.
     */
    data: XOR<tbl_telefoneUpdateManyMutationInput, tbl_telefoneUncheckedUpdateManyInput>
    /**
     * Filter which tbl_telefones to update
     */
    where?: tbl_telefoneWhereInput
    /**
     * Limit how many tbl_telefones to update.
     */
    limit?: number
  }

  /**
   * tbl_telefone upsert
   */
  export type tbl_telefoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_telefone
     */
    select?: tbl_telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_telefone
     */
    omit?: tbl_telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_telefoneInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_telefone to update in case it exists.
     */
    where: tbl_telefoneWhereUniqueInput
    /**
     * In case the tbl_telefone found by the `where` argument doesn't exist, create a new tbl_telefone with this data.
     */
    create: XOR<tbl_telefoneCreateInput, tbl_telefoneUncheckedCreateInput>
    /**
     * In case the tbl_telefone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_telefoneUpdateInput, tbl_telefoneUncheckedUpdateInput>
  }

  /**
   * tbl_telefone delete
   */
  export type tbl_telefoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_telefone
     */
    select?: tbl_telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_telefone
     */
    omit?: tbl_telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_telefoneInclude<ExtArgs> | null
    /**
     * Filter which tbl_telefone to delete.
     */
    where: tbl_telefoneWhereUniqueInput
  }

  /**
   * tbl_telefone deleteMany
   */
  export type tbl_telefoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_telefones to delete
     */
    where?: tbl_telefoneWhereInput
    /**
     * Limit how many tbl_telefones to delete.
     */
    limit?: number
  }

  /**
   * tbl_telefone.tbl_usuario
   */
  export type tbl_telefone$tbl_usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuario
     */
    select?: tbl_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuario
     */
    omit?: tbl_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuarioInclude<ExtArgs> | null
    where?: tbl_usuarioWhereInput
  }

  /**
   * tbl_telefone without action
   */
  export type tbl_telefoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_telefone
     */
    select?: tbl_telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_telefone
     */
    omit?: tbl_telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_telefoneInclude<ExtArgs> | null
  }


  /**
   * Model tbl_tipo_sanguineo
   */

  export type AggregateTbl_tipo_sanguineo = {
    _count: Tbl_tipo_sanguineoCountAggregateOutputType | null
    _avg: Tbl_tipo_sanguineoAvgAggregateOutputType | null
    _sum: Tbl_tipo_sanguineoSumAggregateOutputType | null
    _min: Tbl_tipo_sanguineoMinAggregateOutputType | null
    _max: Tbl_tipo_sanguineoMaxAggregateOutputType | null
  }

  export type Tbl_tipo_sanguineoAvgAggregateOutputType = {
    id: number | null
  }

  export type Tbl_tipo_sanguineoSumAggregateOutputType = {
    id: number | null
  }

  export type Tbl_tipo_sanguineoMinAggregateOutputType = {
    id: number | null
    tipo: string | null
  }

  export type Tbl_tipo_sanguineoMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
  }

  export type Tbl_tipo_sanguineoCountAggregateOutputType = {
    id: number
    tipo: number
    _all: number
  }


  export type Tbl_tipo_sanguineoAvgAggregateInputType = {
    id?: true
  }

  export type Tbl_tipo_sanguineoSumAggregateInputType = {
    id?: true
  }

  export type Tbl_tipo_sanguineoMinAggregateInputType = {
    id?: true
    tipo?: true
  }

  export type Tbl_tipo_sanguineoMaxAggregateInputType = {
    id?: true
    tipo?: true
  }

  export type Tbl_tipo_sanguineoCountAggregateInputType = {
    id?: true
    tipo?: true
    _all?: true
  }

  export type Tbl_tipo_sanguineoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_tipo_sanguineo to aggregate.
     */
    where?: tbl_tipo_sanguineoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_tipo_sanguineos to fetch.
     */
    orderBy?: tbl_tipo_sanguineoOrderByWithRelationInput | tbl_tipo_sanguineoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_tipo_sanguineoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_tipo_sanguineos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_tipo_sanguineos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_tipo_sanguineos
    **/
    _count?: true | Tbl_tipo_sanguineoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_tipo_sanguineoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_tipo_sanguineoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_tipo_sanguineoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_tipo_sanguineoMaxAggregateInputType
  }

  export type GetTbl_tipo_sanguineoAggregateType<T extends Tbl_tipo_sanguineoAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_tipo_sanguineo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_tipo_sanguineo[P]>
      : GetScalarType<T[P], AggregateTbl_tipo_sanguineo[P]>
  }




  export type tbl_tipo_sanguineoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_tipo_sanguineoWhereInput
    orderBy?: tbl_tipo_sanguineoOrderByWithAggregationInput | tbl_tipo_sanguineoOrderByWithAggregationInput[]
    by: Tbl_tipo_sanguineoScalarFieldEnum[] | Tbl_tipo_sanguineoScalarFieldEnum
    having?: tbl_tipo_sanguineoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_tipo_sanguineoCountAggregateInputType | true
    _avg?: Tbl_tipo_sanguineoAvgAggregateInputType
    _sum?: Tbl_tipo_sanguineoSumAggregateInputType
    _min?: Tbl_tipo_sanguineoMinAggregateInputType
    _max?: Tbl_tipo_sanguineoMaxAggregateInputType
  }

  export type Tbl_tipo_sanguineoGroupByOutputType = {
    id: number
    tipo: string
    _count: Tbl_tipo_sanguineoCountAggregateOutputType | null
    _avg: Tbl_tipo_sanguineoAvgAggregateOutputType | null
    _sum: Tbl_tipo_sanguineoSumAggregateOutputType | null
    _min: Tbl_tipo_sanguineoMinAggregateOutputType | null
    _max: Tbl_tipo_sanguineoMaxAggregateOutputType | null
  }

  type GetTbl_tipo_sanguineoGroupByPayload<T extends tbl_tipo_sanguineoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_tipo_sanguineoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_tipo_sanguineoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_tipo_sanguineoGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_tipo_sanguineoGroupByOutputType[P]>
        }
      >
    >


  export type tbl_tipo_sanguineoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    tbl_banco_sangue?: boolean | tbl_tipo_sanguineo$tbl_banco_sangueArgs<ExtArgs>
    tbl_usuario?: boolean | tbl_tipo_sanguineo$tbl_usuarioArgs<ExtArgs>
    _count?: boolean | Tbl_tipo_sanguineoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_tipo_sanguineo"]>



  export type tbl_tipo_sanguineoSelectScalar = {
    id?: boolean
    tipo?: boolean
  }

  export type tbl_tipo_sanguineoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo", ExtArgs["result"]["tbl_tipo_sanguineo"]>
  export type tbl_tipo_sanguineoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_banco_sangue?: boolean | tbl_tipo_sanguineo$tbl_banco_sangueArgs<ExtArgs>
    tbl_usuario?: boolean | tbl_tipo_sanguineo$tbl_usuarioArgs<ExtArgs>
    _count?: boolean | Tbl_tipo_sanguineoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_tipo_sanguineoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_tipo_sanguineo"
    objects: {
      tbl_banco_sangue: Prisma.$tbl_banco_sanguePayload<ExtArgs>[]
      tbl_usuario: Prisma.$tbl_usuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
    }, ExtArgs["result"]["tbl_tipo_sanguineo"]>
    composites: {}
  }

  type tbl_tipo_sanguineoGetPayload<S extends boolean | null | undefined | tbl_tipo_sanguineoDefaultArgs> = $Result.GetResult<Prisma.$tbl_tipo_sanguineoPayload, S>

  type tbl_tipo_sanguineoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_tipo_sanguineoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_tipo_sanguineoCountAggregateInputType | true
    }

  export interface tbl_tipo_sanguineoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_tipo_sanguineo'], meta: { name: 'tbl_tipo_sanguineo' } }
    /**
     * Find zero or one Tbl_tipo_sanguineo that matches the filter.
     * @param {tbl_tipo_sanguineoFindUniqueArgs} args - Arguments to find a Tbl_tipo_sanguineo
     * @example
     * // Get one Tbl_tipo_sanguineo
     * const tbl_tipo_sanguineo = await prisma.tbl_tipo_sanguineo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_tipo_sanguineoFindUniqueArgs>(args: SelectSubset<T, tbl_tipo_sanguineoFindUniqueArgs<ExtArgs>>): Prisma__tbl_tipo_sanguineoClient<$Result.GetResult<Prisma.$tbl_tipo_sanguineoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_tipo_sanguineo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_tipo_sanguineoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_tipo_sanguineo
     * @example
     * // Get one Tbl_tipo_sanguineo
     * const tbl_tipo_sanguineo = await prisma.tbl_tipo_sanguineo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_tipo_sanguineoFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_tipo_sanguineoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_tipo_sanguineoClient<$Result.GetResult<Prisma.$tbl_tipo_sanguineoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_tipo_sanguineo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_sanguineoFindFirstArgs} args - Arguments to find a Tbl_tipo_sanguineo
     * @example
     * // Get one Tbl_tipo_sanguineo
     * const tbl_tipo_sanguineo = await prisma.tbl_tipo_sanguineo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_tipo_sanguineoFindFirstArgs>(args?: SelectSubset<T, tbl_tipo_sanguineoFindFirstArgs<ExtArgs>>): Prisma__tbl_tipo_sanguineoClient<$Result.GetResult<Prisma.$tbl_tipo_sanguineoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_tipo_sanguineo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_sanguineoFindFirstOrThrowArgs} args - Arguments to find a Tbl_tipo_sanguineo
     * @example
     * // Get one Tbl_tipo_sanguineo
     * const tbl_tipo_sanguineo = await prisma.tbl_tipo_sanguineo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_tipo_sanguineoFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_tipo_sanguineoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_tipo_sanguineoClient<$Result.GetResult<Prisma.$tbl_tipo_sanguineoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_tipo_sanguineos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_sanguineoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_tipo_sanguineos
     * const tbl_tipo_sanguineos = await prisma.tbl_tipo_sanguineo.findMany()
     * 
     * // Get first 10 Tbl_tipo_sanguineos
     * const tbl_tipo_sanguineos = await prisma.tbl_tipo_sanguineo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_tipo_sanguineoWithIdOnly = await prisma.tbl_tipo_sanguineo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_tipo_sanguineoFindManyArgs>(args?: SelectSubset<T, tbl_tipo_sanguineoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_tipo_sanguineoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_tipo_sanguineo.
     * @param {tbl_tipo_sanguineoCreateArgs} args - Arguments to create a Tbl_tipo_sanguineo.
     * @example
     * // Create one Tbl_tipo_sanguineo
     * const Tbl_tipo_sanguineo = await prisma.tbl_tipo_sanguineo.create({
     *   data: {
     *     // ... data to create a Tbl_tipo_sanguineo
     *   }
     * })
     * 
     */
    create<T extends tbl_tipo_sanguineoCreateArgs>(args: SelectSubset<T, tbl_tipo_sanguineoCreateArgs<ExtArgs>>): Prisma__tbl_tipo_sanguineoClient<$Result.GetResult<Prisma.$tbl_tipo_sanguineoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_tipo_sanguineos.
     * @param {tbl_tipo_sanguineoCreateManyArgs} args - Arguments to create many Tbl_tipo_sanguineos.
     * @example
     * // Create many Tbl_tipo_sanguineos
     * const tbl_tipo_sanguineo = await prisma.tbl_tipo_sanguineo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_tipo_sanguineoCreateManyArgs>(args?: SelectSubset<T, tbl_tipo_sanguineoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_tipo_sanguineo.
     * @param {tbl_tipo_sanguineoDeleteArgs} args - Arguments to delete one Tbl_tipo_sanguineo.
     * @example
     * // Delete one Tbl_tipo_sanguineo
     * const Tbl_tipo_sanguineo = await prisma.tbl_tipo_sanguineo.delete({
     *   where: {
     *     // ... filter to delete one Tbl_tipo_sanguineo
     *   }
     * })
     * 
     */
    delete<T extends tbl_tipo_sanguineoDeleteArgs>(args: SelectSubset<T, tbl_tipo_sanguineoDeleteArgs<ExtArgs>>): Prisma__tbl_tipo_sanguineoClient<$Result.GetResult<Prisma.$tbl_tipo_sanguineoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_tipo_sanguineo.
     * @param {tbl_tipo_sanguineoUpdateArgs} args - Arguments to update one Tbl_tipo_sanguineo.
     * @example
     * // Update one Tbl_tipo_sanguineo
     * const tbl_tipo_sanguineo = await prisma.tbl_tipo_sanguineo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_tipo_sanguineoUpdateArgs>(args: SelectSubset<T, tbl_tipo_sanguineoUpdateArgs<ExtArgs>>): Prisma__tbl_tipo_sanguineoClient<$Result.GetResult<Prisma.$tbl_tipo_sanguineoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_tipo_sanguineos.
     * @param {tbl_tipo_sanguineoDeleteManyArgs} args - Arguments to filter Tbl_tipo_sanguineos to delete.
     * @example
     * // Delete a few Tbl_tipo_sanguineos
     * const { count } = await prisma.tbl_tipo_sanguineo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_tipo_sanguineoDeleteManyArgs>(args?: SelectSubset<T, tbl_tipo_sanguineoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_tipo_sanguineos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_sanguineoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_tipo_sanguineos
     * const tbl_tipo_sanguineo = await prisma.tbl_tipo_sanguineo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_tipo_sanguineoUpdateManyArgs>(args: SelectSubset<T, tbl_tipo_sanguineoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_tipo_sanguineo.
     * @param {tbl_tipo_sanguineoUpsertArgs} args - Arguments to update or create a Tbl_tipo_sanguineo.
     * @example
     * // Update or create a Tbl_tipo_sanguineo
     * const tbl_tipo_sanguineo = await prisma.tbl_tipo_sanguineo.upsert({
     *   create: {
     *     // ... data to create a Tbl_tipo_sanguineo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_tipo_sanguineo we want to update
     *   }
     * })
     */
    upsert<T extends tbl_tipo_sanguineoUpsertArgs>(args: SelectSubset<T, tbl_tipo_sanguineoUpsertArgs<ExtArgs>>): Prisma__tbl_tipo_sanguineoClient<$Result.GetResult<Prisma.$tbl_tipo_sanguineoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_tipo_sanguineos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_sanguineoCountArgs} args - Arguments to filter Tbl_tipo_sanguineos to count.
     * @example
     * // Count the number of Tbl_tipo_sanguineos
     * const count = await prisma.tbl_tipo_sanguineo.count({
     *   where: {
     *     // ... the filter for the Tbl_tipo_sanguineos we want to count
     *   }
     * })
    **/
    count<T extends tbl_tipo_sanguineoCountArgs>(
      args?: Subset<T, tbl_tipo_sanguineoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_tipo_sanguineoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_tipo_sanguineo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_tipo_sanguineoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_tipo_sanguineoAggregateArgs>(args: Subset<T, Tbl_tipo_sanguineoAggregateArgs>): Prisma.PrismaPromise<GetTbl_tipo_sanguineoAggregateType<T>>

    /**
     * Group by Tbl_tipo_sanguineo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_tipo_sanguineoGroupByArgs} args - Group by arguments.
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
      T extends tbl_tipo_sanguineoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_tipo_sanguineoGroupByArgs['orderBy'] }
        : { orderBy?: tbl_tipo_sanguineoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_tipo_sanguineoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_tipo_sanguineoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_tipo_sanguineo model
   */
  readonly fields: tbl_tipo_sanguineoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_tipo_sanguineo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_tipo_sanguineoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tbl_banco_sangue<T extends tbl_tipo_sanguineo$tbl_banco_sangueArgs<ExtArgs> = {}>(args?: Subset<T, tbl_tipo_sanguineo$tbl_banco_sangueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_banco_sanguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_usuario<T extends tbl_tipo_sanguineo$tbl_usuarioArgs<ExtArgs> = {}>(args?: Subset<T, tbl_tipo_sanguineo$tbl_usuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_tipo_sanguineo model
   */
  interface tbl_tipo_sanguineoFieldRefs {
    readonly id: FieldRef<"tbl_tipo_sanguineo", 'Int'>
    readonly tipo: FieldRef<"tbl_tipo_sanguineo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_tipo_sanguineo findUnique
   */
  export type tbl_tipo_sanguineoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_sanguineo
     */
    select?: tbl_tipo_sanguineoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tipo_sanguineo
     */
    omit?: tbl_tipo_sanguineoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_tipo_sanguineoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_tipo_sanguineo to fetch.
     */
    where: tbl_tipo_sanguineoWhereUniqueInput
  }

  /**
   * tbl_tipo_sanguineo findUniqueOrThrow
   */
  export type tbl_tipo_sanguineoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_sanguineo
     */
    select?: tbl_tipo_sanguineoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tipo_sanguineo
     */
    omit?: tbl_tipo_sanguineoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_tipo_sanguineoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_tipo_sanguineo to fetch.
     */
    where: tbl_tipo_sanguineoWhereUniqueInput
  }

  /**
   * tbl_tipo_sanguineo findFirst
   */
  export type tbl_tipo_sanguineoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_sanguineo
     */
    select?: tbl_tipo_sanguineoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tipo_sanguineo
     */
    omit?: tbl_tipo_sanguineoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_tipo_sanguineoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_tipo_sanguineo to fetch.
     */
    where?: tbl_tipo_sanguineoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_tipo_sanguineos to fetch.
     */
    orderBy?: tbl_tipo_sanguineoOrderByWithRelationInput | tbl_tipo_sanguineoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_tipo_sanguineos.
     */
    cursor?: tbl_tipo_sanguineoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_tipo_sanguineos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_tipo_sanguineos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_tipo_sanguineos.
     */
    distinct?: Tbl_tipo_sanguineoScalarFieldEnum | Tbl_tipo_sanguineoScalarFieldEnum[]
  }

  /**
   * tbl_tipo_sanguineo findFirstOrThrow
   */
  export type tbl_tipo_sanguineoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_sanguineo
     */
    select?: tbl_tipo_sanguineoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tipo_sanguineo
     */
    omit?: tbl_tipo_sanguineoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_tipo_sanguineoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_tipo_sanguineo to fetch.
     */
    where?: tbl_tipo_sanguineoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_tipo_sanguineos to fetch.
     */
    orderBy?: tbl_tipo_sanguineoOrderByWithRelationInput | tbl_tipo_sanguineoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_tipo_sanguineos.
     */
    cursor?: tbl_tipo_sanguineoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_tipo_sanguineos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_tipo_sanguineos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_tipo_sanguineos.
     */
    distinct?: Tbl_tipo_sanguineoScalarFieldEnum | Tbl_tipo_sanguineoScalarFieldEnum[]
  }

  /**
   * tbl_tipo_sanguineo findMany
   */
  export type tbl_tipo_sanguineoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_sanguineo
     */
    select?: tbl_tipo_sanguineoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tipo_sanguineo
     */
    omit?: tbl_tipo_sanguineoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_tipo_sanguineoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_tipo_sanguineos to fetch.
     */
    where?: tbl_tipo_sanguineoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_tipo_sanguineos to fetch.
     */
    orderBy?: tbl_tipo_sanguineoOrderByWithRelationInput | tbl_tipo_sanguineoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_tipo_sanguineos.
     */
    cursor?: tbl_tipo_sanguineoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_tipo_sanguineos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_tipo_sanguineos.
     */
    skip?: number
    distinct?: Tbl_tipo_sanguineoScalarFieldEnum | Tbl_tipo_sanguineoScalarFieldEnum[]
  }

  /**
   * tbl_tipo_sanguineo create
   */
  export type tbl_tipo_sanguineoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_sanguineo
     */
    select?: tbl_tipo_sanguineoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tipo_sanguineo
     */
    omit?: tbl_tipo_sanguineoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_tipo_sanguineoInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_tipo_sanguineo.
     */
    data: XOR<tbl_tipo_sanguineoCreateInput, tbl_tipo_sanguineoUncheckedCreateInput>
  }

  /**
   * tbl_tipo_sanguineo createMany
   */
  export type tbl_tipo_sanguineoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_tipo_sanguineos.
     */
    data: tbl_tipo_sanguineoCreateManyInput | tbl_tipo_sanguineoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_tipo_sanguineo update
   */
  export type tbl_tipo_sanguineoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_sanguineo
     */
    select?: tbl_tipo_sanguineoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tipo_sanguineo
     */
    omit?: tbl_tipo_sanguineoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_tipo_sanguineoInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_tipo_sanguineo.
     */
    data: XOR<tbl_tipo_sanguineoUpdateInput, tbl_tipo_sanguineoUncheckedUpdateInput>
    /**
     * Choose, which tbl_tipo_sanguineo to update.
     */
    where: tbl_tipo_sanguineoWhereUniqueInput
  }

  /**
   * tbl_tipo_sanguineo updateMany
   */
  export type tbl_tipo_sanguineoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_tipo_sanguineos.
     */
    data: XOR<tbl_tipo_sanguineoUpdateManyMutationInput, tbl_tipo_sanguineoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_tipo_sanguineos to update
     */
    where?: tbl_tipo_sanguineoWhereInput
    /**
     * Limit how many tbl_tipo_sanguineos to update.
     */
    limit?: number
  }

  /**
   * tbl_tipo_sanguineo upsert
   */
  export type tbl_tipo_sanguineoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_sanguineo
     */
    select?: tbl_tipo_sanguineoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tipo_sanguineo
     */
    omit?: tbl_tipo_sanguineoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_tipo_sanguineoInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_tipo_sanguineo to update in case it exists.
     */
    where: tbl_tipo_sanguineoWhereUniqueInput
    /**
     * In case the tbl_tipo_sanguineo found by the `where` argument doesn't exist, create a new tbl_tipo_sanguineo with this data.
     */
    create: XOR<tbl_tipo_sanguineoCreateInput, tbl_tipo_sanguineoUncheckedCreateInput>
    /**
     * In case the tbl_tipo_sanguineo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_tipo_sanguineoUpdateInput, tbl_tipo_sanguineoUncheckedUpdateInput>
  }

  /**
   * tbl_tipo_sanguineo delete
   */
  export type tbl_tipo_sanguineoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_sanguineo
     */
    select?: tbl_tipo_sanguineoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tipo_sanguineo
     */
    omit?: tbl_tipo_sanguineoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_tipo_sanguineoInclude<ExtArgs> | null
    /**
     * Filter which tbl_tipo_sanguineo to delete.
     */
    where: tbl_tipo_sanguineoWhereUniqueInput
  }

  /**
   * tbl_tipo_sanguineo deleteMany
   */
  export type tbl_tipo_sanguineoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_tipo_sanguineos to delete
     */
    where?: tbl_tipo_sanguineoWhereInput
    /**
     * Limit how many tbl_tipo_sanguineos to delete.
     */
    limit?: number
  }

  /**
   * tbl_tipo_sanguineo.tbl_banco_sangue
   */
  export type tbl_tipo_sanguineo$tbl_banco_sangueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_banco_sangue
     */
    select?: tbl_banco_sangueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_banco_sangue
     */
    omit?: tbl_banco_sangueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_banco_sangueInclude<ExtArgs> | null
    where?: tbl_banco_sangueWhereInput
    orderBy?: tbl_banco_sangueOrderByWithRelationInput | tbl_banco_sangueOrderByWithRelationInput[]
    cursor?: tbl_banco_sangueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_banco_sangueScalarFieldEnum | Tbl_banco_sangueScalarFieldEnum[]
  }

  /**
   * tbl_tipo_sanguineo.tbl_usuario
   */
  export type tbl_tipo_sanguineo$tbl_usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuario
     */
    select?: tbl_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuario
     */
    omit?: tbl_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuarioInclude<ExtArgs> | null
    where?: tbl_usuarioWhereInput
    orderBy?: tbl_usuarioOrderByWithRelationInput | tbl_usuarioOrderByWithRelationInput[]
    cursor?: tbl_usuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_usuarioScalarFieldEnum | Tbl_usuarioScalarFieldEnum[]
  }

  /**
   * tbl_tipo_sanguineo without action
   */
  export type tbl_tipo_sanguineoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_sanguineo
     */
    select?: tbl_tipo_sanguineoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tipo_sanguineo
     */
    omit?: tbl_tipo_sanguineoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_tipo_sanguineoInclude<ExtArgs> | null
  }


  /**
   * Model tbl_usuario
   */

  export type AggregateTbl_usuario = {
    _count: Tbl_usuarioCountAggregateOutputType | null
    _avg: Tbl_usuarioAvgAggregateOutputType | null
    _sum: Tbl_usuarioSumAggregateOutputType | null
    _min: Tbl_usuarioMinAggregateOutputType | null
    _max: Tbl_usuarioMaxAggregateOutputType | null
  }

  export type Tbl_usuarioAvgAggregateOutputType = {
    id: number | null
    id_tipo_sanguineo: number | null
    id_sexo: number | null
  }

  export type Tbl_usuarioSumAggregateOutputType = {
    id: number | null
    id_tipo_sanguineo: number | null
    id_sexo: number | null
  }

  export type Tbl_usuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    cpf: string | null
    cep: string | null
    logradouro: string | null
    bairro: string | null
    localidade: string | null
    uf: string | null
    numero: string | null
    data_nascimento: Date | null
    foto_perfil: string | null
    id_tipo_sanguineo: number | null
    id_sexo: number | null
    data_criacao: Date | null
    data_atualizacao: Date | null
  }

  export type Tbl_usuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    cpf: string | null
    cep: string | null
    logradouro: string | null
    bairro: string | null
    localidade: string | null
    uf: string | null
    numero: string | null
    data_nascimento: Date | null
    foto_perfil: string | null
    id_tipo_sanguineo: number | null
    id_sexo: number | null
    data_criacao: Date | null
    data_atualizacao: Date | null
  }

  export type Tbl_usuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha_hash: number
    cpf: number
    cep: number
    logradouro: number
    bairro: number
    localidade: number
    uf: number
    numero: number
    data_nascimento: number
    foto_perfil: number
    id_tipo_sanguineo: number
    id_sexo: number
    data_criacao: number
    data_atualizacao: number
    _all: number
  }


  export type Tbl_usuarioAvgAggregateInputType = {
    id?: true
    id_tipo_sanguineo?: true
    id_sexo?: true
  }

  export type Tbl_usuarioSumAggregateInputType = {
    id?: true
    id_tipo_sanguineo?: true
    id_sexo?: true
  }

  export type Tbl_usuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    cpf?: true
    cep?: true
    logradouro?: true
    bairro?: true
    localidade?: true
    uf?: true
    numero?: true
    data_nascimento?: true
    foto_perfil?: true
    id_tipo_sanguineo?: true
    id_sexo?: true
    data_criacao?: true
    data_atualizacao?: true
  }

  export type Tbl_usuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    cpf?: true
    cep?: true
    logradouro?: true
    bairro?: true
    localidade?: true
    uf?: true
    numero?: true
    data_nascimento?: true
    foto_perfil?: true
    id_tipo_sanguineo?: true
    id_sexo?: true
    data_criacao?: true
    data_atualizacao?: true
  }

  export type Tbl_usuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    cpf?: true
    cep?: true
    logradouro?: true
    bairro?: true
    localidade?: true
    uf?: true
    numero?: true
    data_nascimento?: true
    foto_perfil?: true
    id_tipo_sanguineo?: true
    id_sexo?: true
    data_criacao?: true
    data_atualizacao?: true
    _all?: true
  }

  export type Tbl_usuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_usuario to aggregate.
     */
    where?: tbl_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_usuarios to fetch.
     */
    orderBy?: tbl_usuarioOrderByWithRelationInput | tbl_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_usuarios
    **/
    _count?: true | Tbl_usuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_usuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_usuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_usuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_usuarioMaxAggregateInputType
  }

  export type GetTbl_usuarioAggregateType<T extends Tbl_usuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_usuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_usuario[P]>
      : GetScalarType<T[P], AggregateTbl_usuario[P]>
  }




  export type tbl_usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_usuarioWhereInput
    orderBy?: tbl_usuarioOrderByWithAggregationInput | tbl_usuarioOrderByWithAggregationInput[]
    by: Tbl_usuarioScalarFieldEnum[] | Tbl_usuarioScalarFieldEnum
    having?: tbl_usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_usuarioCountAggregateInputType | true
    _avg?: Tbl_usuarioAvgAggregateInputType
    _sum?: Tbl_usuarioSumAggregateInputType
    _min?: Tbl_usuarioMinAggregateInputType
    _max?: Tbl_usuarioMaxAggregateInputType
  }

  export type Tbl_usuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha_hash: string
    cpf: string | null
    cep: string | null
    logradouro: string | null
    bairro: string | null
    localidade: string | null
    uf: string | null
    numero: string | null
    data_nascimento: Date | null
    foto_perfil: string | null
    id_tipo_sanguineo: number | null
    id_sexo: number | null
    data_criacao: Date | null
    data_atualizacao: Date | null
    _count: Tbl_usuarioCountAggregateOutputType | null
    _avg: Tbl_usuarioAvgAggregateOutputType | null
    _sum: Tbl_usuarioSumAggregateOutputType | null
    _min: Tbl_usuarioMinAggregateOutputType | null
    _max: Tbl_usuarioMaxAggregateOutputType | null
  }

  type GetTbl_usuarioGroupByPayload<T extends tbl_usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_usuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_usuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_usuarioGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_usuarioGroupByOutputType[P]>
        }
      >
    >


  export type tbl_usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    cpf?: boolean
    cep?: boolean
    logradouro?: boolean
    bairro?: boolean
    localidade?: boolean
    uf?: boolean
    numero?: boolean
    data_nascimento?: boolean
    foto_perfil?: boolean
    id_tipo_sanguineo?: boolean
    id_sexo?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
    agendamentos?: boolean | tbl_usuario$agendamentosArgs<ExtArgs>
    tbl_certificado?: boolean | tbl_usuario$tbl_certificadoArgs<ExtArgs>
    tbl_recuperacao_senha?: boolean | tbl_usuario$tbl_recuperacao_senhaArgs<ExtArgs>
    tbl_telefone?: boolean | tbl_usuario$tbl_telefoneArgs<ExtArgs>
    tbl_registro_doacao?: boolean | tbl_usuario$tbl_registro_doacaoArgs<ExtArgs>
    tbl_tipo_sanguineo?: boolean | tbl_usuario$tbl_tipo_sanguineoArgs<ExtArgs>
    sexo?: boolean | tbl_usuario$sexoArgs<ExtArgs>
    _count?: boolean | Tbl_usuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_usuario"]>



  export type tbl_usuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    cpf?: boolean
    cep?: boolean
    logradouro?: boolean
    bairro?: boolean
    localidade?: boolean
    uf?: boolean
    numero?: boolean
    data_nascimento?: boolean
    foto_perfil?: boolean
    id_tipo_sanguineo?: boolean
    id_sexo?: boolean
    data_criacao?: boolean
    data_atualizacao?: boolean
  }

  export type tbl_usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha_hash" | "cpf" | "cep" | "logradouro" | "bairro" | "localidade" | "uf" | "numero" | "data_nascimento" | "foto_perfil" | "id_tipo_sanguineo" | "id_sexo" | "data_criacao" | "data_atualizacao", ExtArgs["result"]["tbl_usuario"]>
  export type tbl_usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | tbl_usuario$agendamentosArgs<ExtArgs>
    tbl_certificado?: boolean | tbl_usuario$tbl_certificadoArgs<ExtArgs>
    tbl_recuperacao_senha?: boolean | tbl_usuario$tbl_recuperacao_senhaArgs<ExtArgs>
    tbl_telefone?: boolean | tbl_usuario$tbl_telefoneArgs<ExtArgs>
    tbl_registro_doacao?: boolean | tbl_usuario$tbl_registro_doacaoArgs<ExtArgs>
    tbl_tipo_sanguineo?: boolean | tbl_usuario$tbl_tipo_sanguineoArgs<ExtArgs>
    sexo?: boolean | tbl_usuario$sexoArgs<ExtArgs>
    _count?: boolean | Tbl_usuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbl_usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_usuario"
    objects: {
      agendamentos: Prisma.$tbl_agendamentoPayload<ExtArgs>[]
      tbl_certificado: Prisma.$tbl_certificadoPayload<ExtArgs>[]
      tbl_recuperacao_senha: Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>[]
      tbl_telefone: Prisma.$tbl_telefonePayload<ExtArgs>[]
      tbl_registro_doacao: Prisma.$tbl_registro_doacaoPayload<ExtArgs>[]
      tbl_tipo_sanguineo: Prisma.$tbl_tipo_sanguineoPayload<ExtArgs> | null
      sexo: Prisma.$tbl_sexoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha_hash: string
      cpf: string | null
      cep: string | null
      logradouro: string | null
      bairro: string | null
      localidade: string | null
      uf: string | null
      numero: string | null
      data_nascimento: Date | null
      foto_perfil: string | null
      id_tipo_sanguineo: number | null
      id_sexo: number | null
      data_criacao: Date | null
      data_atualizacao: Date | null
    }, ExtArgs["result"]["tbl_usuario"]>
    composites: {}
  }

  type tbl_usuarioGetPayload<S extends boolean | null | undefined | tbl_usuarioDefaultArgs> = $Result.GetResult<Prisma.$tbl_usuarioPayload, S>

  type tbl_usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_usuarioCountAggregateInputType | true
    }

  export interface tbl_usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_usuario'], meta: { name: 'tbl_usuario' } }
    /**
     * Find zero or one Tbl_usuario that matches the filter.
     * @param {tbl_usuarioFindUniqueArgs} args - Arguments to find a Tbl_usuario
     * @example
     * // Get one Tbl_usuario
     * const tbl_usuario = await prisma.tbl_usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_usuarioFindUniqueArgs>(args: SelectSubset<T, tbl_usuarioFindUniqueArgs<ExtArgs>>): Prisma__tbl_usuarioClient<$Result.GetResult<Prisma.$tbl_usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_usuarioFindUniqueOrThrowArgs} args - Arguments to find a Tbl_usuario
     * @example
     * // Get one Tbl_usuario
     * const tbl_usuario = await prisma.tbl_usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_usuarioClient<$Result.GetResult<Prisma.$tbl_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usuarioFindFirstArgs} args - Arguments to find a Tbl_usuario
     * @example
     * // Get one Tbl_usuario
     * const tbl_usuario = await prisma.tbl_usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_usuarioFindFirstArgs>(args?: SelectSubset<T, tbl_usuarioFindFirstArgs<ExtArgs>>): Prisma__tbl_usuarioClient<$Result.GetResult<Prisma.$tbl_usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usuarioFindFirstOrThrowArgs} args - Arguments to find a Tbl_usuario
     * @example
     * // Get one Tbl_usuario
     * const tbl_usuario = await prisma.tbl_usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_usuarioClient<$Result.GetResult<Prisma.$tbl_usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_usuarios
     * const tbl_usuarios = await prisma.tbl_usuario.findMany()
     * 
     * // Get first 10 Tbl_usuarios
     * const tbl_usuarios = await prisma.tbl_usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_usuarioWithIdOnly = await prisma.tbl_usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_usuarioFindManyArgs>(args?: SelectSubset<T, tbl_usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_usuario.
     * @param {tbl_usuarioCreateArgs} args - Arguments to create a Tbl_usuario.
     * @example
     * // Create one Tbl_usuario
     * const Tbl_usuario = await prisma.tbl_usuario.create({
     *   data: {
     *     // ... data to create a Tbl_usuario
     *   }
     * })
     * 
     */
    create<T extends tbl_usuarioCreateArgs>(args: SelectSubset<T, tbl_usuarioCreateArgs<ExtArgs>>): Prisma__tbl_usuarioClient<$Result.GetResult<Prisma.$tbl_usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_usuarios.
     * @param {tbl_usuarioCreateManyArgs} args - Arguments to create many Tbl_usuarios.
     * @example
     * // Create many Tbl_usuarios
     * const tbl_usuario = await prisma.tbl_usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_usuarioCreateManyArgs>(args?: SelectSubset<T, tbl_usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_usuario.
     * @param {tbl_usuarioDeleteArgs} args - Arguments to delete one Tbl_usuario.
     * @example
     * // Delete one Tbl_usuario
     * const Tbl_usuario = await prisma.tbl_usuario.delete({
     *   where: {
     *     // ... filter to delete one Tbl_usuario
     *   }
     * })
     * 
     */
    delete<T extends tbl_usuarioDeleteArgs>(args: SelectSubset<T, tbl_usuarioDeleteArgs<ExtArgs>>): Prisma__tbl_usuarioClient<$Result.GetResult<Prisma.$tbl_usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_usuario.
     * @param {tbl_usuarioUpdateArgs} args - Arguments to update one Tbl_usuario.
     * @example
     * // Update one Tbl_usuario
     * const tbl_usuario = await prisma.tbl_usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_usuarioUpdateArgs>(args: SelectSubset<T, tbl_usuarioUpdateArgs<ExtArgs>>): Prisma__tbl_usuarioClient<$Result.GetResult<Prisma.$tbl_usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_usuarios.
     * @param {tbl_usuarioDeleteManyArgs} args - Arguments to filter Tbl_usuarios to delete.
     * @example
     * // Delete a few Tbl_usuarios
     * const { count } = await prisma.tbl_usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_usuarioDeleteManyArgs>(args?: SelectSubset<T, tbl_usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_usuarios
     * const tbl_usuario = await prisma.tbl_usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_usuarioUpdateManyArgs>(args: SelectSubset<T, tbl_usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_usuario.
     * @param {tbl_usuarioUpsertArgs} args - Arguments to update or create a Tbl_usuario.
     * @example
     * // Update or create a Tbl_usuario
     * const tbl_usuario = await prisma.tbl_usuario.upsert({
     *   create: {
     *     // ... data to create a Tbl_usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_usuario we want to update
     *   }
     * })
     */
    upsert<T extends tbl_usuarioUpsertArgs>(args: SelectSubset<T, tbl_usuarioUpsertArgs<ExtArgs>>): Prisma__tbl_usuarioClient<$Result.GetResult<Prisma.$tbl_usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usuarioCountArgs} args - Arguments to filter Tbl_usuarios to count.
     * @example
     * // Count the number of Tbl_usuarios
     * const count = await prisma.tbl_usuario.count({
     *   where: {
     *     // ... the filter for the Tbl_usuarios we want to count
     *   }
     * })
    **/
    count<T extends tbl_usuarioCountArgs>(
      args?: Subset<T, tbl_usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_usuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_usuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_usuarioAggregateArgs>(args: Subset<T, Tbl_usuarioAggregateArgs>): Prisma.PrismaPromise<GetTbl_usuarioAggregateType<T>>

    /**
     * Group by Tbl_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usuarioGroupByArgs} args - Group by arguments.
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
      T extends tbl_usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_usuarioGroupByArgs['orderBy'] }
        : { orderBy?: tbl_usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_usuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_usuario model
   */
  readonly fields: tbl_usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamentos<T extends tbl_usuario$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_usuario$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_agendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_certificado<T extends tbl_usuario$tbl_certificadoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_usuario$tbl_certificadoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_certificadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_recuperacao_senha<T extends tbl_usuario$tbl_recuperacao_senhaArgs<ExtArgs> = {}>(args?: Subset<T, tbl_usuario$tbl_recuperacao_senhaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_telefone<T extends tbl_usuario$tbl_telefoneArgs<ExtArgs> = {}>(args?: Subset<T, tbl_usuario$tbl_telefoneArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_telefonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_registro_doacao<T extends tbl_usuario$tbl_registro_doacaoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_usuario$tbl_registro_doacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_registro_doacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tbl_tipo_sanguineo<T extends tbl_usuario$tbl_tipo_sanguineoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_usuario$tbl_tipo_sanguineoArgs<ExtArgs>>): Prisma__tbl_tipo_sanguineoClient<$Result.GetResult<Prisma.$tbl_tipo_sanguineoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sexo<T extends tbl_usuario$sexoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_usuario$sexoArgs<ExtArgs>>): Prisma__tbl_sexoClient<$Result.GetResult<Prisma.$tbl_sexoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tbl_usuario model
   */
  interface tbl_usuarioFieldRefs {
    readonly id: FieldRef<"tbl_usuario", 'Int'>
    readonly nome: FieldRef<"tbl_usuario", 'String'>
    readonly email: FieldRef<"tbl_usuario", 'String'>
    readonly senha_hash: FieldRef<"tbl_usuario", 'String'>
    readonly cpf: FieldRef<"tbl_usuario", 'String'>
    readonly cep: FieldRef<"tbl_usuario", 'String'>
    readonly logradouro: FieldRef<"tbl_usuario", 'String'>
    readonly bairro: FieldRef<"tbl_usuario", 'String'>
    readonly localidade: FieldRef<"tbl_usuario", 'String'>
    readonly uf: FieldRef<"tbl_usuario", 'String'>
    readonly numero: FieldRef<"tbl_usuario", 'String'>
    readonly data_nascimento: FieldRef<"tbl_usuario", 'DateTime'>
    readonly foto_perfil: FieldRef<"tbl_usuario", 'String'>
    readonly id_tipo_sanguineo: FieldRef<"tbl_usuario", 'Int'>
    readonly id_sexo: FieldRef<"tbl_usuario", 'Int'>
    readonly data_criacao: FieldRef<"tbl_usuario", 'DateTime'>
    readonly data_atualizacao: FieldRef<"tbl_usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_usuario findUnique
   */
  export type tbl_usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuario
     */
    select?: tbl_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuario
     */
    omit?: tbl_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_usuario to fetch.
     */
    where: tbl_usuarioWhereUniqueInput
  }

  /**
   * tbl_usuario findUniqueOrThrow
   */
  export type tbl_usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuario
     */
    select?: tbl_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuario
     */
    omit?: tbl_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_usuario to fetch.
     */
    where: tbl_usuarioWhereUniqueInput
  }

  /**
   * tbl_usuario findFirst
   */
  export type tbl_usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuario
     */
    select?: tbl_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuario
     */
    omit?: tbl_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_usuario to fetch.
     */
    where?: tbl_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_usuarios to fetch.
     */
    orderBy?: tbl_usuarioOrderByWithRelationInput | tbl_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_usuarios.
     */
    cursor?: tbl_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_usuarios.
     */
    distinct?: Tbl_usuarioScalarFieldEnum | Tbl_usuarioScalarFieldEnum[]
  }

  /**
   * tbl_usuario findFirstOrThrow
   */
  export type tbl_usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuario
     */
    select?: tbl_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuario
     */
    omit?: tbl_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_usuario to fetch.
     */
    where?: tbl_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_usuarios to fetch.
     */
    orderBy?: tbl_usuarioOrderByWithRelationInput | tbl_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_usuarios.
     */
    cursor?: tbl_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_usuarios.
     */
    distinct?: Tbl_usuarioScalarFieldEnum | Tbl_usuarioScalarFieldEnum[]
  }

  /**
   * tbl_usuario findMany
   */
  export type tbl_usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuario
     */
    select?: tbl_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuario
     */
    omit?: tbl_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_usuarios to fetch.
     */
    where?: tbl_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_usuarios to fetch.
     */
    orderBy?: tbl_usuarioOrderByWithRelationInput | tbl_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_usuarios.
     */
    cursor?: tbl_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_usuarios.
     */
    skip?: number
    distinct?: Tbl_usuarioScalarFieldEnum | Tbl_usuarioScalarFieldEnum[]
  }

  /**
   * tbl_usuario create
   */
  export type tbl_usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuario
     */
    select?: tbl_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuario
     */
    omit?: tbl_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_usuario.
     */
    data: XOR<tbl_usuarioCreateInput, tbl_usuarioUncheckedCreateInput>
  }

  /**
   * tbl_usuario createMany
   */
  export type tbl_usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_usuarios.
     */
    data: tbl_usuarioCreateManyInput | tbl_usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_usuario update
   */
  export type tbl_usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuario
     */
    select?: tbl_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuario
     */
    omit?: tbl_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_usuario.
     */
    data: XOR<tbl_usuarioUpdateInput, tbl_usuarioUncheckedUpdateInput>
    /**
     * Choose, which tbl_usuario to update.
     */
    where: tbl_usuarioWhereUniqueInput
  }

  /**
   * tbl_usuario updateMany
   */
  export type tbl_usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_usuarios.
     */
    data: XOR<tbl_usuarioUpdateManyMutationInput, tbl_usuarioUncheckedUpdateManyInput>
    /**
     * Filter which tbl_usuarios to update
     */
    where?: tbl_usuarioWhereInput
    /**
     * Limit how many tbl_usuarios to update.
     */
    limit?: number
  }

  /**
   * tbl_usuario upsert
   */
  export type tbl_usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuario
     */
    select?: tbl_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuario
     */
    omit?: tbl_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_usuario to update in case it exists.
     */
    where: tbl_usuarioWhereUniqueInput
    /**
     * In case the tbl_usuario found by the `where` argument doesn't exist, create a new tbl_usuario with this data.
     */
    create: XOR<tbl_usuarioCreateInput, tbl_usuarioUncheckedCreateInput>
    /**
     * In case the tbl_usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_usuarioUpdateInput, tbl_usuarioUncheckedUpdateInput>
  }

  /**
   * tbl_usuario delete
   */
  export type tbl_usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuario
     */
    select?: tbl_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuario
     */
    omit?: tbl_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuarioInclude<ExtArgs> | null
    /**
     * Filter which tbl_usuario to delete.
     */
    where: tbl_usuarioWhereUniqueInput
  }

  /**
   * tbl_usuario deleteMany
   */
  export type tbl_usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_usuarios to delete
     */
    where?: tbl_usuarioWhereInput
    /**
     * Limit how many tbl_usuarios to delete.
     */
    limit?: number
  }

  /**
   * tbl_usuario.agendamentos
   */
  export type tbl_usuario$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_agendamento
     */
    select?: tbl_agendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_agendamento
     */
    omit?: tbl_agendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_agendamentoInclude<ExtArgs> | null
    where?: tbl_agendamentoWhereInput
    orderBy?: tbl_agendamentoOrderByWithRelationInput | tbl_agendamentoOrderByWithRelationInput[]
    cursor?: tbl_agendamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_agendamentoScalarFieldEnum | Tbl_agendamentoScalarFieldEnum[]
  }

  /**
   * tbl_usuario.tbl_certificado
   */
  export type tbl_usuario$tbl_certificadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_certificado
     */
    select?: tbl_certificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_certificado
     */
    omit?: tbl_certificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_certificadoInclude<ExtArgs> | null
    where?: tbl_certificadoWhereInput
    orderBy?: tbl_certificadoOrderByWithRelationInput | tbl_certificadoOrderByWithRelationInput[]
    cursor?: tbl_certificadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_certificadoScalarFieldEnum | Tbl_certificadoScalarFieldEnum[]
  }

  /**
   * tbl_usuario.tbl_recuperacao_senha
   */
  export type tbl_usuario$tbl_recuperacao_senhaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    where?: tbl_recuperacao_senhaWhereInput
    orderBy?: tbl_recuperacao_senhaOrderByWithRelationInput | tbl_recuperacao_senhaOrderByWithRelationInput[]
    cursor?: tbl_recuperacao_senhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_recuperacao_senhaScalarFieldEnum | Tbl_recuperacao_senhaScalarFieldEnum[]
  }

  /**
   * tbl_usuario.tbl_telefone
   */
  export type tbl_usuario$tbl_telefoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_telefone
     */
    select?: tbl_telefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_telefone
     */
    omit?: tbl_telefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_telefoneInclude<ExtArgs> | null
    where?: tbl_telefoneWhereInput
    orderBy?: tbl_telefoneOrderByWithRelationInput | tbl_telefoneOrderByWithRelationInput[]
    cursor?: tbl_telefoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_telefoneScalarFieldEnum | Tbl_telefoneScalarFieldEnum[]
  }

  /**
   * tbl_usuario.tbl_registro_doacao
   */
  export type tbl_usuario$tbl_registro_doacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_registro_doacao
     */
    select?: tbl_registro_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_registro_doacao
     */
    omit?: tbl_registro_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_registro_doacaoInclude<ExtArgs> | null
    where?: tbl_registro_doacaoWhereInput
    orderBy?: tbl_registro_doacaoOrderByWithRelationInput | tbl_registro_doacaoOrderByWithRelationInput[]
    cursor?: tbl_registro_doacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_registro_doacaoScalarFieldEnum | Tbl_registro_doacaoScalarFieldEnum[]
  }

  /**
   * tbl_usuario.tbl_tipo_sanguineo
   */
  export type tbl_usuario$tbl_tipo_sanguineoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_tipo_sanguineo
     */
    select?: tbl_tipo_sanguineoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_tipo_sanguineo
     */
    omit?: tbl_tipo_sanguineoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_tipo_sanguineoInclude<ExtArgs> | null
    where?: tbl_tipo_sanguineoWhereInput
  }

  /**
   * tbl_usuario.sexo
   */
  export type tbl_usuario$sexoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_sexo
     */
    select?: tbl_sexoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_sexo
     */
    omit?: tbl_sexoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_sexoInclude<ExtArgs> | null
    where?: tbl_sexoWhereInput
  }

  /**
   * tbl_usuario without action
   */
  export type tbl_usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuario
     */
    select?: tbl_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuario
     */
    omit?: tbl_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuarioInclude<ExtArgs> | null
  }


  /**
   * Model tbl_recuperacao_senha
   */

  export type AggregateTbl_recuperacao_senha = {
    _count: Tbl_recuperacao_senhaCountAggregateOutputType | null
    _avg: Tbl_recuperacao_senhaAvgAggregateOutputType | null
    _sum: Tbl_recuperacao_senhaSumAggregateOutputType | null
    _min: Tbl_recuperacao_senhaMinAggregateOutputType | null
    _max: Tbl_recuperacao_senhaMaxAggregateOutputType | null
  }

  export type Tbl_recuperacao_senhaAvgAggregateOutputType = {
    id: number | null
    id_usuario: number | null
  }

  export type Tbl_recuperacao_senhaSumAggregateOutputType = {
    id: number | null
    id_usuario: number | null
  }

  export type Tbl_recuperacao_senhaMinAggregateOutputType = {
    id: number | null
    id_usuario: number | null
    codigo: string | null
    criado_em: Date | null
    usado: boolean | null
  }

  export type Tbl_recuperacao_senhaMaxAggregateOutputType = {
    id: number | null
    id_usuario: number | null
    codigo: string | null
    criado_em: Date | null
    usado: boolean | null
  }

  export type Tbl_recuperacao_senhaCountAggregateOutputType = {
    id: number
    id_usuario: number
    codigo: number
    criado_em: number
    usado: number
    _all: number
  }


  export type Tbl_recuperacao_senhaAvgAggregateInputType = {
    id?: true
    id_usuario?: true
  }

  export type Tbl_recuperacao_senhaSumAggregateInputType = {
    id?: true
    id_usuario?: true
  }

  export type Tbl_recuperacao_senhaMinAggregateInputType = {
    id?: true
    id_usuario?: true
    codigo?: true
    criado_em?: true
    usado?: true
  }

  export type Tbl_recuperacao_senhaMaxAggregateInputType = {
    id?: true
    id_usuario?: true
    codigo?: true
    criado_em?: true
    usado?: true
  }

  export type Tbl_recuperacao_senhaCountAggregateInputType = {
    id?: true
    id_usuario?: true
    codigo?: true
    criado_em?: true
    usado?: true
    _all?: true
  }

  export type Tbl_recuperacao_senhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_recuperacao_senha to aggregate.
     */
    where?: tbl_recuperacao_senhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_recuperacao_senhas to fetch.
     */
    orderBy?: tbl_recuperacao_senhaOrderByWithRelationInput | tbl_recuperacao_senhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_recuperacao_senhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_recuperacao_senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_recuperacao_senhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_recuperacao_senhas
    **/
    _count?: true | Tbl_recuperacao_senhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_recuperacao_senhaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_recuperacao_senhaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_recuperacao_senhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_recuperacao_senhaMaxAggregateInputType
  }

  export type GetTbl_recuperacao_senhaAggregateType<T extends Tbl_recuperacao_senhaAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_recuperacao_senha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_recuperacao_senha[P]>
      : GetScalarType<T[P], AggregateTbl_recuperacao_senha[P]>
  }




  export type tbl_recuperacao_senhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_recuperacao_senhaWhereInput
    orderBy?: tbl_recuperacao_senhaOrderByWithAggregationInput | tbl_recuperacao_senhaOrderByWithAggregationInput[]
    by: Tbl_recuperacao_senhaScalarFieldEnum[] | Tbl_recuperacao_senhaScalarFieldEnum
    having?: tbl_recuperacao_senhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_recuperacao_senhaCountAggregateInputType | true
    _avg?: Tbl_recuperacao_senhaAvgAggregateInputType
    _sum?: Tbl_recuperacao_senhaSumAggregateInputType
    _min?: Tbl_recuperacao_senhaMinAggregateInputType
    _max?: Tbl_recuperacao_senhaMaxAggregateInputType
  }

  export type Tbl_recuperacao_senhaGroupByOutputType = {
    id: number
    id_usuario: number
    codigo: string
    criado_em: Date | null
    usado: boolean | null
    _count: Tbl_recuperacao_senhaCountAggregateOutputType | null
    _avg: Tbl_recuperacao_senhaAvgAggregateOutputType | null
    _sum: Tbl_recuperacao_senhaSumAggregateOutputType | null
    _min: Tbl_recuperacao_senhaMinAggregateOutputType | null
    _max: Tbl_recuperacao_senhaMaxAggregateOutputType | null
  }

  type GetTbl_recuperacao_senhaGroupByPayload<T extends tbl_recuperacao_senhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_recuperacao_senhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_recuperacao_senhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_recuperacao_senhaGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_recuperacao_senhaGroupByOutputType[P]>
        }
      >
    >


  export type tbl_recuperacao_senhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_usuario?: boolean
    codigo?: boolean
    criado_em?: boolean
    usado?: boolean
    tbl_usuario?: boolean | tbl_usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_recuperacao_senha"]>



  export type tbl_recuperacao_senhaSelectScalar = {
    id?: boolean
    id_usuario?: boolean
    codigo?: boolean
    criado_em?: boolean
    usado?: boolean
  }

  export type tbl_recuperacao_senhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_usuario" | "codigo" | "criado_em" | "usado", ExtArgs["result"]["tbl_recuperacao_senha"]>
  export type tbl_recuperacao_senhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_usuario?: boolean | tbl_usuarioDefaultArgs<ExtArgs>
  }

  export type $tbl_recuperacao_senhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_recuperacao_senha"
    objects: {
      tbl_usuario: Prisma.$tbl_usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_usuario: number
      codigo: string
      criado_em: Date | null
      usado: boolean | null
    }, ExtArgs["result"]["tbl_recuperacao_senha"]>
    composites: {}
  }

  type tbl_recuperacao_senhaGetPayload<S extends boolean | null | undefined | tbl_recuperacao_senhaDefaultArgs> = $Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload, S>

  type tbl_recuperacao_senhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_recuperacao_senhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_recuperacao_senhaCountAggregateInputType | true
    }

  export interface tbl_recuperacao_senhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_recuperacao_senha'], meta: { name: 'tbl_recuperacao_senha' } }
    /**
     * Find zero or one Tbl_recuperacao_senha that matches the filter.
     * @param {tbl_recuperacao_senhaFindUniqueArgs} args - Arguments to find a Tbl_recuperacao_senha
     * @example
     * // Get one Tbl_recuperacao_senha
     * const tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_recuperacao_senhaFindUniqueArgs>(args: SelectSubset<T, tbl_recuperacao_senhaFindUniqueArgs<ExtArgs>>): Prisma__tbl_recuperacao_senhaClient<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_recuperacao_senha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_recuperacao_senhaFindUniqueOrThrowArgs} args - Arguments to find a Tbl_recuperacao_senha
     * @example
     * // Get one Tbl_recuperacao_senha
     * const tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_recuperacao_senhaFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_recuperacao_senhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_recuperacao_senhaClient<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_recuperacao_senha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_recuperacao_senhaFindFirstArgs} args - Arguments to find a Tbl_recuperacao_senha
     * @example
     * // Get one Tbl_recuperacao_senha
     * const tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_recuperacao_senhaFindFirstArgs>(args?: SelectSubset<T, tbl_recuperacao_senhaFindFirstArgs<ExtArgs>>): Prisma__tbl_recuperacao_senhaClient<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_recuperacao_senha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_recuperacao_senhaFindFirstOrThrowArgs} args - Arguments to find a Tbl_recuperacao_senha
     * @example
     * // Get one Tbl_recuperacao_senha
     * const tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_recuperacao_senhaFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_recuperacao_senhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_recuperacao_senhaClient<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_recuperacao_senhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_recuperacao_senhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_recuperacao_senhas
     * const tbl_recuperacao_senhas = await prisma.tbl_recuperacao_senha.findMany()
     * 
     * // Get first 10 Tbl_recuperacao_senhas
     * const tbl_recuperacao_senhas = await prisma.tbl_recuperacao_senha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_recuperacao_senhaWithIdOnly = await prisma.tbl_recuperacao_senha.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_recuperacao_senhaFindManyArgs>(args?: SelectSubset<T, tbl_recuperacao_senhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_recuperacao_senha.
     * @param {tbl_recuperacao_senhaCreateArgs} args - Arguments to create a Tbl_recuperacao_senha.
     * @example
     * // Create one Tbl_recuperacao_senha
     * const Tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.create({
     *   data: {
     *     // ... data to create a Tbl_recuperacao_senha
     *   }
     * })
     * 
     */
    create<T extends tbl_recuperacao_senhaCreateArgs>(args: SelectSubset<T, tbl_recuperacao_senhaCreateArgs<ExtArgs>>): Prisma__tbl_recuperacao_senhaClient<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_recuperacao_senhas.
     * @param {tbl_recuperacao_senhaCreateManyArgs} args - Arguments to create many Tbl_recuperacao_senhas.
     * @example
     * // Create many Tbl_recuperacao_senhas
     * const tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_recuperacao_senhaCreateManyArgs>(args?: SelectSubset<T, tbl_recuperacao_senhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_recuperacao_senha.
     * @param {tbl_recuperacao_senhaDeleteArgs} args - Arguments to delete one Tbl_recuperacao_senha.
     * @example
     * // Delete one Tbl_recuperacao_senha
     * const Tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.delete({
     *   where: {
     *     // ... filter to delete one Tbl_recuperacao_senha
     *   }
     * })
     * 
     */
    delete<T extends tbl_recuperacao_senhaDeleteArgs>(args: SelectSubset<T, tbl_recuperacao_senhaDeleteArgs<ExtArgs>>): Prisma__tbl_recuperacao_senhaClient<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_recuperacao_senha.
     * @param {tbl_recuperacao_senhaUpdateArgs} args - Arguments to update one Tbl_recuperacao_senha.
     * @example
     * // Update one Tbl_recuperacao_senha
     * const tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_recuperacao_senhaUpdateArgs>(args: SelectSubset<T, tbl_recuperacao_senhaUpdateArgs<ExtArgs>>): Prisma__tbl_recuperacao_senhaClient<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_recuperacao_senhas.
     * @param {tbl_recuperacao_senhaDeleteManyArgs} args - Arguments to filter Tbl_recuperacao_senhas to delete.
     * @example
     * // Delete a few Tbl_recuperacao_senhas
     * const { count } = await prisma.tbl_recuperacao_senha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_recuperacao_senhaDeleteManyArgs>(args?: SelectSubset<T, tbl_recuperacao_senhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_recuperacao_senhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_recuperacao_senhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_recuperacao_senhas
     * const tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_recuperacao_senhaUpdateManyArgs>(args: SelectSubset<T, tbl_recuperacao_senhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_recuperacao_senha.
     * @param {tbl_recuperacao_senhaUpsertArgs} args - Arguments to update or create a Tbl_recuperacao_senha.
     * @example
     * // Update or create a Tbl_recuperacao_senha
     * const tbl_recuperacao_senha = await prisma.tbl_recuperacao_senha.upsert({
     *   create: {
     *     // ... data to create a Tbl_recuperacao_senha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_recuperacao_senha we want to update
     *   }
     * })
     */
    upsert<T extends tbl_recuperacao_senhaUpsertArgs>(args: SelectSubset<T, tbl_recuperacao_senhaUpsertArgs<ExtArgs>>): Prisma__tbl_recuperacao_senhaClient<$Result.GetResult<Prisma.$tbl_recuperacao_senhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_recuperacao_senhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_recuperacao_senhaCountArgs} args - Arguments to filter Tbl_recuperacao_senhas to count.
     * @example
     * // Count the number of Tbl_recuperacao_senhas
     * const count = await prisma.tbl_recuperacao_senha.count({
     *   where: {
     *     // ... the filter for the Tbl_recuperacao_senhas we want to count
     *   }
     * })
    **/
    count<T extends tbl_recuperacao_senhaCountArgs>(
      args?: Subset<T, tbl_recuperacao_senhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_recuperacao_senhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_recuperacao_senha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_recuperacao_senhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_recuperacao_senhaAggregateArgs>(args: Subset<T, Tbl_recuperacao_senhaAggregateArgs>): Prisma.PrismaPromise<GetTbl_recuperacao_senhaAggregateType<T>>

    /**
     * Group by Tbl_recuperacao_senha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_recuperacao_senhaGroupByArgs} args - Group by arguments.
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
      T extends tbl_recuperacao_senhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_recuperacao_senhaGroupByArgs['orderBy'] }
        : { orderBy?: tbl_recuperacao_senhaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_recuperacao_senhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_recuperacao_senhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_recuperacao_senha model
   */
  readonly fields: tbl_recuperacao_senhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_recuperacao_senha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_recuperacao_senhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tbl_usuario<T extends tbl_usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_usuarioDefaultArgs<ExtArgs>>): Prisma__tbl_usuarioClient<$Result.GetResult<Prisma.$tbl_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tbl_recuperacao_senha model
   */
  interface tbl_recuperacao_senhaFieldRefs {
    readonly id: FieldRef<"tbl_recuperacao_senha", 'Int'>
    readonly id_usuario: FieldRef<"tbl_recuperacao_senha", 'Int'>
    readonly codigo: FieldRef<"tbl_recuperacao_senha", 'String'>
    readonly criado_em: FieldRef<"tbl_recuperacao_senha", 'DateTime'>
    readonly usado: FieldRef<"tbl_recuperacao_senha", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * tbl_recuperacao_senha findUnique
   */
  export type tbl_recuperacao_senhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_recuperacao_senha to fetch.
     */
    where: tbl_recuperacao_senhaWhereUniqueInput
  }

  /**
   * tbl_recuperacao_senha findUniqueOrThrow
   */
  export type tbl_recuperacao_senhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_recuperacao_senha to fetch.
     */
    where: tbl_recuperacao_senhaWhereUniqueInput
  }

  /**
   * tbl_recuperacao_senha findFirst
   */
  export type tbl_recuperacao_senhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_recuperacao_senha to fetch.
     */
    where?: tbl_recuperacao_senhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_recuperacao_senhas to fetch.
     */
    orderBy?: tbl_recuperacao_senhaOrderByWithRelationInput | tbl_recuperacao_senhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_recuperacao_senhas.
     */
    cursor?: tbl_recuperacao_senhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_recuperacao_senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_recuperacao_senhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_recuperacao_senhas.
     */
    distinct?: Tbl_recuperacao_senhaScalarFieldEnum | Tbl_recuperacao_senhaScalarFieldEnum[]
  }

  /**
   * tbl_recuperacao_senha findFirstOrThrow
   */
  export type tbl_recuperacao_senhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_recuperacao_senha to fetch.
     */
    where?: tbl_recuperacao_senhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_recuperacao_senhas to fetch.
     */
    orderBy?: tbl_recuperacao_senhaOrderByWithRelationInput | tbl_recuperacao_senhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_recuperacao_senhas.
     */
    cursor?: tbl_recuperacao_senhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_recuperacao_senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_recuperacao_senhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_recuperacao_senhas.
     */
    distinct?: Tbl_recuperacao_senhaScalarFieldEnum | Tbl_recuperacao_senhaScalarFieldEnum[]
  }

  /**
   * tbl_recuperacao_senha findMany
   */
  export type tbl_recuperacao_senhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * Filter, which tbl_recuperacao_senhas to fetch.
     */
    where?: tbl_recuperacao_senhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_recuperacao_senhas to fetch.
     */
    orderBy?: tbl_recuperacao_senhaOrderByWithRelationInput | tbl_recuperacao_senhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_recuperacao_senhas.
     */
    cursor?: tbl_recuperacao_senhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_recuperacao_senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_recuperacao_senhas.
     */
    skip?: number
    distinct?: Tbl_recuperacao_senhaScalarFieldEnum | Tbl_recuperacao_senhaScalarFieldEnum[]
  }

  /**
   * tbl_recuperacao_senha create
   */
  export type tbl_recuperacao_senhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_recuperacao_senha.
     */
    data: XOR<tbl_recuperacao_senhaCreateInput, tbl_recuperacao_senhaUncheckedCreateInput>
  }

  /**
   * tbl_recuperacao_senha createMany
   */
  export type tbl_recuperacao_senhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_recuperacao_senhas.
     */
    data: tbl_recuperacao_senhaCreateManyInput | tbl_recuperacao_senhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_recuperacao_senha update
   */
  export type tbl_recuperacao_senhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_recuperacao_senha.
     */
    data: XOR<tbl_recuperacao_senhaUpdateInput, tbl_recuperacao_senhaUncheckedUpdateInput>
    /**
     * Choose, which tbl_recuperacao_senha to update.
     */
    where: tbl_recuperacao_senhaWhereUniqueInput
  }

  /**
   * tbl_recuperacao_senha updateMany
   */
  export type tbl_recuperacao_senhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_recuperacao_senhas.
     */
    data: XOR<tbl_recuperacao_senhaUpdateManyMutationInput, tbl_recuperacao_senhaUncheckedUpdateManyInput>
    /**
     * Filter which tbl_recuperacao_senhas to update
     */
    where?: tbl_recuperacao_senhaWhereInput
    /**
     * Limit how many tbl_recuperacao_senhas to update.
     */
    limit?: number
  }

  /**
   * tbl_recuperacao_senha upsert
   */
  export type tbl_recuperacao_senhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_recuperacao_senha to update in case it exists.
     */
    where: tbl_recuperacao_senhaWhereUniqueInput
    /**
     * In case the tbl_recuperacao_senha found by the `where` argument doesn't exist, create a new tbl_recuperacao_senha with this data.
     */
    create: XOR<tbl_recuperacao_senhaCreateInput, tbl_recuperacao_senhaUncheckedCreateInput>
    /**
     * In case the tbl_recuperacao_senha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_recuperacao_senhaUpdateInput, tbl_recuperacao_senhaUncheckedUpdateInput>
  }

  /**
   * tbl_recuperacao_senha delete
   */
  export type tbl_recuperacao_senhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
    /**
     * Filter which tbl_recuperacao_senha to delete.
     */
    where: tbl_recuperacao_senhaWhereUniqueInput
  }

  /**
   * tbl_recuperacao_senha deleteMany
   */
  export type tbl_recuperacao_senhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_recuperacao_senhas to delete
     */
    where?: tbl_recuperacao_senhaWhereInput
    /**
     * Limit how many tbl_recuperacao_senhas to delete.
     */
    limit?: number
  }

  /**
   * tbl_recuperacao_senha without action
   */
  export type tbl_recuperacao_senhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_recuperacao_senha
     */
    select?: tbl_recuperacao_senhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_recuperacao_senha
     */
    omit?: tbl_recuperacao_senhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_recuperacao_senhaInclude<ExtArgs> | null
  }


  /**
   * Model tbl_registro_doacao
   */

  export type AggregateTbl_registro_doacao = {
    _count: Tbl_registro_doacaoCountAggregateOutputType | null
    _avg: Tbl_registro_doacaoAvgAggregateOutputType | null
    _sum: Tbl_registro_doacaoSumAggregateOutputType | null
    _min: Tbl_registro_doacaoMinAggregateOutputType | null
    _max: Tbl_registro_doacaoMaxAggregateOutputType | null
  }

  export type Tbl_registro_doacaoAvgAggregateOutputType = {
    id: number | null
    id_agendamento: number | null
    id_usuario: number | null
    id_hospital: number | null
  }

  export type Tbl_registro_doacaoSumAggregateOutputType = {
    id: number | null
    id_agendamento: number | null
    id_usuario: number | null
    id_hospital: number | null
  }

  export type Tbl_registro_doacaoMinAggregateOutputType = {
    id: number | null
    id_agendamento: number | null
    id_usuario: number | null
    id_hospital: number | null
    data_doacao: Date | null
    local_doacao: string | null
    observacao: string | null
    foto_comprovante: string | null
    data_registro: Date | null
  }

  export type Tbl_registro_doacaoMaxAggregateOutputType = {
    id: number | null
    id_agendamento: number | null
    id_usuario: number | null
    id_hospital: number | null
    data_doacao: Date | null
    local_doacao: string | null
    observacao: string | null
    foto_comprovante: string | null
    data_registro: Date | null
  }

  export type Tbl_registro_doacaoCountAggregateOutputType = {
    id: number
    id_agendamento: number
    id_usuario: number
    id_hospital: number
    data_doacao: number
    local_doacao: number
    observacao: number
    foto_comprovante: number
    data_registro: number
    _all: number
  }


  export type Tbl_registro_doacaoAvgAggregateInputType = {
    id?: true
    id_agendamento?: true
    id_usuario?: true
    id_hospital?: true
  }

  export type Tbl_registro_doacaoSumAggregateInputType = {
    id?: true
    id_agendamento?: true
    id_usuario?: true
    id_hospital?: true
  }

  export type Tbl_registro_doacaoMinAggregateInputType = {
    id?: true
    id_agendamento?: true
    id_usuario?: true
    id_hospital?: true
    data_doacao?: true
    local_doacao?: true
    observacao?: true
    foto_comprovante?: true
    data_registro?: true
  }

  export type Tbl_registro_doacaoMaxAggregateInputType = {
    id?: true
    id_agendamento?: true
    id_usuario?: true
    id_hospital?: true
    data_doacao?: true
    local_doacao?: true
    observacao?: true
    foto_comprovante?: true
    data_registro?: true
  }

  export type Tbl_registro_doacaoCountAggregateInputType = {
    id?: true
    id_agendamento?: true
    id_usuario?: true
    id_hospital?: true
    data_doacao?: true
    local_doacao?: true
    observacao?: true
    foto_comprovante?: true
    data_registro?: true
    _all?: true
  }

  export type Tbl_registro_doacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_registro_doacao to aggregate.
     */
    where?: tbl_registro_doacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_registro_doacaos to fetch.
     */
    orderBy?: tbl_registro_doacaoOrderByWithRelationInput | tbl_registro_doacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_registro_doacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_registro_doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_registro_doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_registro_doacaos
    **/
    _count?: true | Tbl_registro_doacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_registro_doacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_registro_doacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_registro_doacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_registro_doacaoMaxAggregateInputType
  }

  export type GetTbl_registro_doacaoAggregateType<T extends Tbl_registro_doacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_registro_doacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_registro_doacao[P]>
      : GetScalarType<T[P], AggregateTbl_registro_doacao[P]>
  }




  export type tbl_registro_doacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_registro_doacaoWhereInput
    orderBy?: tbl_registro_doacaoOrderByWithAggregationInput | tbl_registro_doacaoOrderByWithAggregationInput[]
    by: Tbl_registro_doacaoScalarFieldEnum[] | Tbl_registro_doacaoScalarFieldEnum
    having?: tbl_registro_doacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_registro_doacaoCountAggregateInputType | true
    _avg?: Tbl_registro_doacaoAvgAggregateInputType
    _sum?: Tbl_registro_doacaoSumAggregateInputType
    _min?: Tbl_registro_doacaoMinAggregateInputType
    _max?: Tbl_registro_doacaoMaxAggregateInputType
  }

  export type Tbl_registro_doacaoGroupByOutputType = {
    id: number
    id_agendamento: number
    id_usuario: number
    id_hospital: number
    data_doacao: Date
    local_doacao: string
    observacao: string | null
    foto_comprovante: string | null
    data_registro: Date | null
    _count: Tbl_registro_doacaoCountAggregateOutputType | null
    _avg: Tbl_registro_doacaoAvgAggregateOutputType | null
    _sum: Tbl_registro_doacaoSumAggregateOutputType | null
    _min: Tbl_registro_doacaoMinAggregateOutputType | null
    _max: Tbl_registro_doacaoMaxAggregateOutputType | null
  }

  type GetTbl_registro_doacaoGroupByPayload<T extends tbl_registro_doacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_registro_doacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_registro_doacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_registro_doacaoGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_registro_doacaoGroupByOutputType[P]>
        }
      >
    >


  export type tbl_registro_doacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_agendamento?: boolean
    id_usuario?: boolean
    id_hospital?: boolean
    data_doacao?: boolean
    local_doacao?: boolean
    observacao?: boolean
    foto_comprovante?: boolean
    data_registro?: boolean
    tbl_agendamento?: boolean | tbl_agendamentoDefaultArgs<ExtArgs>
    tbl_usuario?: boolean | tbl_usuarioDefaultArgs<ExtArgs>
    tbl_hospital?: boolean | tbl_hospitalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_registro_doacao"]>



  export type tbl_registro_doacaoSelectScalar = {
    id?: boolean
    id_agendamento?: boolean
    id_usuario?: boolean
    id_hospital?: boolean
    data_doacao?: boolean
    local_doacao?: boolean
    observacao?: boolean
    foto_comprovante?: boolean
    data_registro?: boolean
  }

  export type tbl_registro_doacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_agendamento" | "id_usuario" | "id_hospital" | "data_doacao" | "local_doacao" | "observacao" | "foto_comprovante" | "data_registro", ExtArgs["result"]["tbl_registro_doacao"]>
  export type tbl_registro_doacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tbl_agendamento?: boolean | tbl_agendamentoDefaultArgs<ExtArgs>
    tbl_usuario?: boolean | tbl_usuarioDefaultArgs<ExtArgs>
    tbl_hospital?: boolean | tbl_hospitalDefaultArgs<ExtArgs>
  }

  export type $tbl_registro_doacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_registro_doacao"
    objects: {
      tbl_agendamento: Prisma.$tbl_agendamentoPayload<ExtArgs>
      tbl_usuario: Prisma.$tbl_usuarioPayload<ExtArgs>
      tbl_hospital: Prisma.$tbl_hospitalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_agendamento: number
      id_usuario: number
      id_hospital: number
      data_doacao: Date
      local_doacao: string
      observacao: string | null
      foto_comprovante: string | null
      data_registro: Date | null
    }, ExtArgs["result"]["tbl_registro_doacao"]>
    composites: {}
  }

  type tbl_registro_doacaoGetPayload<S extends boolean | null | undefined | tbl_registro_doacaoDefaultArgs> = $Result.GetResult<Prisma.$tbl_registro_doacaoPayload, S>

  type tbl_registro_doacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_registro_doacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_registro_doacaoCountAggregateInputType | true
    }

  export interface tbl_registro_doacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_registro_doacao'], meta: { name: 'tbl_registro_doacao' } }
    /**
     * Find zero or one Tbl_registro_doacao that matches the filter.
     * @param {tbl_registro_doacaoFindUniqueArgs} args - Arguments to find a Tbl_registro_doacao
     * @example
     * // Get one Tbl_registro_doacao
     * const tbl_registro_doacao = await prisma.tbl_registro_doacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_registro_doacaoFindUniqueArgs>(args: SelectSubset<T, tbl_registro_doacaoFindUniqueArgs<ExtArgs>>): Prisma__tbl_registro_doacaoClient<$Result.GetResult<Prisma.$tbl_registro_doacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_registro_doacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_registro_doacaoFindUniqueOrThrowArgs} args - Arguments to find a Tbl_registro_doacao
     * @example
     * // Get one Tbl_registro_doacao
     * const tbl_registro_doacao = await prisma.tbl_registro_doacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_registro_doacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_registro_doacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_registro_doacaoClient<$Result.GetResult<Prisma.$tbl_registro_doacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_registro_doacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_registro_doacaoFindFirstArgs} args - Arguments to find a Tbl_registro_doacao
     * @example
     * // Get one Tbl_registro_doacao
     * const tbl_registro_doacao = await prisma.tbl_registro_doacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_registro_doacaoFindFirstArgs>(args?: SelectSubset<T, tbl_registro_doacaoFindFirstArgs<ExtArgs>>): Prisma__tbl_registro_doacaoClient<$Result.GetResult<Prisma.$tbl_registro_doacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_registro_doacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_registro_doacaoFindFirstOrThrowArgs} args - Arguments to find a Tbl_registro_doacao
     * @example
     * // Get one Tbl_registro_doacao
     * const tbl_registro_doacao = await prisma.tbl_registro_doacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_registro_doacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_registro_doacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_registro_doacaoClient<$Result.GetResult<Prisma.$tbl_registro_doacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_registro_doacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_registro_doacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_registro_doacaos
     * const tbl_registro_doacaos = await prisma.tbl_registro_doacao.findMany()
     * 
     * // Get first 10 Tbl_registro_doacaos
     * const tbl_registro_doacaos = await prisma.tbl_registro_doacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbl_registro_doacaoWithIdOnly = await prisma.tbl_registro_doacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbl_registro_doacaoFindManyArgs>(args?: SelectSubset<T, tbl_registro_doacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_registro_doacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_registro_doacao.
     * @param {tbl_registro_doacaoCreateArgs} args - Arguments to create a Tbl_registro_doacao.
     * @example
     * // Create one Tbl_registro_doacao
     * const Tbl_registro_doacao = await prisma.tbl_registro_doacao.create({
     *   data: {
     *     // ... data to create a Tbl_registro_doacao
     *   }
     * })
     * 
     */
    create<T extends tbl_registro_doacaoCreateArgs>(args: SelectSubset<T, tbl_registro_doacaoCreateArgs<ExtArgs>>): Prisma__tbl_registro_doacaoClient<$Result.GetResult<Prisma.$tbl_registro_doacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_registro_doacaos.
     * @param {tbl_registro_doacaoCreateManyArgs} args - Arguments to create many Tbl_registro_doacaos.
     * @example
     * // Create many Tbl_registro_doacaos
     * const tbl_registro_doacao = await prisma.tbl_registro_doacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_registro_doacaoCreateManyArgs>(args?: SelectSubset<T, tbl_registro_doacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbl_registro_doacao.
     * @param {tbl_registro_doacaoDeleteArgs} args - Arguments to delete one Tbl_registro_doacao.
     * @example
     * // Delete one Tbl_registro_doacao
     * const Tbl_registro_doacao = await prisma.tbl_registro_doacao.delete({
     *   where: {
     *     // ... filter to delete one Tbl_registro_doacao
     *   }
     * })
     * 
     */
    delete<T extends tbl_registro_doacaoDeleteArgs>(args: SelectSubset<T, tbl_registro_doacaoDeleteArgs<ExtArgs>>): Prisma__tbl_registro_doacaoClient<$Result.GetResult<Prisma.$tbl_registro_doacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_registro_doacao.
     * @param {tbl_registro_doacaoUpdateArgs} args - Arguments to update one Tbl_registro_doacao.
     * @example
     * // Update one Tbl_registro_doacao
     * const tbl_registro_doacao = await prisma.tbl_registro_doacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_registro_doacaoUpdateArgs>(args: SelectSubset<T, tbl_registro_doacaoUpdateArgs<ExtArgs>>): Prisma__tbl_registro_doacaoClient<$Result.GetResult<Prisma.$tbl_registro_doacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_registro_doacaos.
     * @param {tbl_registro_doacaoDeleteManyArgs} args - Arguments to filter Tbl_registro_doacaos to delete.
     * @example
     * // Delete a few Tbl_registro_doacaos
     * const { count } = await prisma.tbl_registro_doacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_registro_doacaoDeleteManyArgs>(args?: SelectSubset<T, tbl_registro_doacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_registro_doacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_registro_doacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_registro_doacaos
     * const tbl_registro_doacao = await prisma.tbl_registro_doacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_registro_doacaoUpdateManyArgs>(args: SelectSubset<T, tbl_registro_doacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbl_registro_doacao.
     * @param {tbl_registro_doacaoUpsertArgs} args - Arguments to update or create a Tbl_registro_doacao.
     * @example
     * // Update or create a Tbl_registro_doacao
     * const tbl_registro_doacao = await prisma.tbl_registro_doacao.upsert({
     *   create: {
     *     // ... data to create a Tbl_registro_doacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_registro_doacao we want to update
     *   }
     * })
     */
    upsert<T extends tbl_registro_doacaoUpsertArgs>(args: SelectSubset<T, tbl_registro_doacaoUpsertArgs<ExtArgs>>): Prisma__tbl_registro_doacaoClient<$Result.GetResult<Prisma.$tbl_registro_doacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_registro_doacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_registro_doacaoCountArgs} args - Arguments to filter Tbl_registro_doacaos to count.
     * @example
     * // Count the number of Tbl_registro_doacaos
     * const count = await prisma.tbl_registro_doacao.count({
     *   where: {
     *     // ... the filter for the Tbl_registro_doacaos we want to count
     *   }
     * })
    **/
    count<T extends tbl_registro_doacaoCountArgs>(
      args?: Subset<T, tbl_registro_doacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_registro_doacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_registro_doacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_registro_doacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_registro_doacaoAggregateArgs>(args: Subset<T, Tbl_registro_doacaoAggregateArgs>): Prisma.PrismaPromise<GetTbl_registro_doacaoAggregateType<T>>

    /**
     * Group by Tbl_registro_doacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_registro_doacaoGroupByArgs} args - Group by arguments.
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
      T extends tbl_registro_doacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_registro_doacaoGroupByArgs['orderBy'] }
        : { orderBy?: tbl_registro_doacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_registro_doacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_registro_doacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_registro_doacao model
   */
  readonly fields: tbl_registro_doacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_registro_doacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_registro_doacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tbl_agendamento<T extends tbl_agendamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_agendamentoDefaultArgs<ExtArgs>>): Prisma__tbl_agendamentoClient<$Result.GetResult<Prisma.$tbl_agendamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tbl_usuario<T extends tbl_usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_usuarioDefaultArgs<ExtArgs>>): Prisma__tbl_usuarioClient<$Result.GetResult<Prisma.$tbl_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tbl_hospital<T extends tbl_hospitalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_hospitalDefaultArgs<ExtArgs>>): Prisma__tbl_hospitalClient<$Result.GetResult<Prisma.$tbl_hospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tbl_registro_doacao model
   */
  interface tbl_registro_doacaoFieldRefs {
    readonly id: FieldRef<"tbl_registro_doacao", 'Int'>
    readonly id_agendamento: FieldRef<"tbl_registro_doacao", 'Int'>
    readonly id_usuario: FieldRef<"tbl_registro_doacao", 'Int'>
    readonly id_hospital: FieldRef<"tbl_registro_doacao", 'Int'>
    readonly data_doacao: FieldRef<"tbl_registro_doacao", 'DateTime'>
    readonly local_doacao: FieldRef<"tbl_registro_doacao", 'String'>
    readonly observacao: FieldRef<"tbl_registro_doacao", 'String'>
    readonly foto_comprovante: FieldRef<"tbl_registro_doacao", 'String'>
    readonly data_registro: FieldRef<"tbl_registro_doacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_registro_doacao findUnique
   */
  export type tbl_registro_doacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_registro_doacao
     */
    select?: tbl_registro_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_registro_doacao
     */
    omit?: tbl_registro_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_registro_doacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_registro_doacao to fetch.
     */
    where: tbl_registro_doacaoWhereUniqueInput
  }

  /**
   * tbl_registro_doacao findUniqueOrThrow
   */
  export type tbl_registro_doacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_registro_doacao
     */
    select?: tbl_registro_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_registro_doacao
     */
    omit?: tbl_registro_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_registro_doacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_registro_doacao to fetch.
     */
    where: tbl_registro_doacaoWhereUniqueInput
  }

  /**
   * tbl_registro_doacao findFirst
   */
  export type tbl_registro_doacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_registro_doacao
     */
    select?: tbl_registro_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_registro_doacao
     */
    omit?: tbl_registro_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_registro_doacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_registro_doacao to fetch.
     */
    where?: tbl_registro_doacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_registro_doacaos to fetch.
     */
    orderBy?: tbl_registro_doacaoOrderByWithRelationInput | tbl_registro_doacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_registro_doacaos.
     */
    cursor?: tbl_registro_doacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_registro_doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_registro_doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_registro_doacaos.
     */
    distinct?: Tbl_registro_doacaoScalarFieldEnum | Tbl_registro_doacaoScalarFieldEnum[]
  }

  /**
   * tbl_registro_doacao findFirstOrThrow
   */
  export type tbl_registro_doacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_registro_doacao
     */
    select?: tbl_registro_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_registro_doacao
     */
    omit?: tbl_registro_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_registro_doacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_registro_doacao to fetch.
     */
    where?: tbl_registro_doacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_registro_doacaos to fetch.
     */
    orderBy?: tbl_registro_doacaoOrderByWithRelationInput | tbl_registro_doacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_registro_doacaos.
     */
    cursor?: tbl_registro_doacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_registro_doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_registro_doacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_registro_doacaos.
     */
    distinct?: Tbl_registro_doacaoScalarFieldEnum | Tbl_registro_doacaoScalarFieldEnum[]
  }

  /**
   * tbl_registro_doacao findMany
   */
  export type tbl_registro_doacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_registro_doacao
     */
    select?: tbl_registro_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_registro_doacao
     */
    omit?: tbl_registro_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_registro_doacaoInclude<ExtArgs> | null
    /**
     * Filter, which tbl_registro_doacaos to fetch.
     */
    where?: tbl_registro_doacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_registro_doacaos to fetch.
     */
    orderBy?: tbl_registro_doacaoOrderByWithRelationInput | tbl_registro_doacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_registro_doacaos.
     */
    cursor?: tbl_registro_doacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_registro_doacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_registro_doacaos.
     */
    skip?: number
    distinct?: Tbl_registro_doacaoScalarFieldEnum | Tbl_registro_doacaoScalarFieldEnum[]
  }

  /**
   * tbl_registro_doacao create
   */
  export type tbl_registro_doacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_registro_doacao
     */
    select?: tbl_registro_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_registro_doacao
     */
    omit?: tbl_registro_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_registro_doacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_registro_doacao.
     */
    data: XOR<tbl_registro_doacaoCreateInput, tbl_registro_doacaoUncheckedCreateInput>
  }

  /**
   * tbl_registro_doacao createMany
   */
  export type tbl_registro_doacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_registro_doacaos.
     */
    data: tbl_registro_doacaoCreateManyInput | tbl_registro_doacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_registro_doacao update
   */
  export type tbl_registro_doacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_registro_doacao
     */
    select?: tbl_registro_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_registro_doacao
     */
    omit?: tbl_registro_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_registro_doacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_registro_doacao.
     */
    data: XOR<tbl_registro_doacaoUpdateInput, tbl_registro_doacaoUncheckedUpdateInput>
    /**
     * Choose, which tbl_registro_doacao to update.
     */
    where: tbl_registro_doacaoWhereUniqueInput
  }

  /**
   * tbl_registro_doacao updateMany
   */
  export type tbl_registro_doacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_registro_doacaos.
     */
    data: XOR<tbl_registro_doacaoUpdateManyMutationInput, tbl_registro_doacaoUncheckedUpdateManyInput>
    /**
     * Filter which tbl_registro_doacaos to update
     */
    where?: tbl_registro_doacaoWhereInput
    /**
     * Limit how many tbl_registro_doacaos to update.
     */
    limit?: number
  }

  /**
   * tbl_registro_doacao upsert
   */
  export type tbl_registro_doacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_registro_doacao
     */
    select?: tbl_registro_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_registro_doacao
     */
    omit?: tbl_registro_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_registro_doacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_registro_doacao to update in case it exists.
     */
    where: tbl_registro_doacaoWhereUniqueInput
    /**
     * In case the tbl_registro_doacao found by the `where` argument doesn't exist, create a new tbl_registro_doacao with this data.
     */
    create: XOR<tbl_registro_doacaoCreateInput, tbl_registro_doacaoUncheckedCreateInput>
    /**
     * In case the tbl_registro_doacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_registro_doacaoUpdateInput, tbl_registro_doacaoUncheckedUpdateInput>
  }

  /**
   * tbl_registro_doacao delete
   */
  export type tbl_registro_doacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_registro_doacao
     */
    select?: tbl_registro_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_registro_doacao
     */
    omit?: tbl_registro_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_registro_doacaoInclude<ExtArgs> | null
    /**
     * Filter which tbl_registro_doacao to delete.
     */
    where: tbl_registro_doacaoWhereUniqueInput
  }

  /**
   * tbl_registro_doacao deleteMany
   */
  export type tbl_registro_doacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_registro_doacaos to delete
     */
    where?: tbl_registro_doacaoWhereInput
    /**
     * Limit how many tbl_registro_doacaos to delete.
     */
    limit?: number
  }

  /**
   * tbl_registro_doacao without action
   */
  export type tbl_registro_doacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_registro_doacao
     */
    select?: tbl_registro_doacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_registro_doacao
     */
    omit?: tbl_registro_doacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_registro_doacaoInclude<ExtArgs> | null
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


  export const Tbl_agendamentoScalarFieldEnum: {
    id: 'id',
    status: 'status',
    data: 'data',
    hora: 'hora',
    id_usuario: 'id_usuario',
    id_doacao: 'id_doacao',
    id_hospital: 'id_hospital'
  };

  export type Tbl_agendamentoScalarFieldEnum = (typeof Tbl_agendamentoScalarFieldEnum)[keyof typeof Tbl_agendamentoScalarFieldEnum]


  export const Tbl_banco_sangueScalarFieldEnum: {
    id: 'id',
    id_hospital: 'id_hospital',
    id_tipo_sanguineo: 'id_tipo_sanguineo',
    quantidade: 'quantidade'
  };

  export type Tbl_banco_sangueScalarFieldEnum = (typeof Tbl_banco_sangueScalarFieldEnum)[keyof typeof Tbl_banco_sangueScalarFieldEnum]


  export const Tbl_certificadoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    organizacao: 'organizacao',
    data_emissao: 'data_emissao',
    id_usuario: 'id_usuario'
  };

  export type Tbl_certificadoScalarFieldEnum = (typeof Tbl_certificadoScalarFieldEnum)[keyof typeof Tbl_certificadoScalarFieldEnum]


  export const Tbl_doacaoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    observacao: 'observacao',
    foto: 'foto'
  };

  export type Tbl_doacaoScalarFieldEnum = (typeof Tbl_doacaoScalarFieldEnum)[keyof typeof Tbl_doacaoScalarFieldEnum]


  export const Tbl_hospitalScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    cnpj: 'cnpj',
    crm: 'crm',
    cep: 'cep',
    telefone: 'telefone',
    capacidade_maxima: 'capacidade_maxima',
    convenios: 'convenios',
    horario_abertura: 'horario_abertura',
    horario_fechamento: 'horario_fechamento',
    foto: 'foto',
    complemento: 'complemento'
  };

  export type Tbl_hospitalScalarFieldEnum = (typeof Tbl_hospitalScalarFieldEnum)[keyof typeof Tbl_hospitalScalarFieldEnum]


  export const Tbl_sexoScalarFieldEnum: {
    id: 'id',
    sexo: 'sexo'
  };

  export type Tbl_sexoScalarFieldEnum = (typeof Tbl_sexoScalarFieldEnum)[keyof typeof Tbl_sexoScalarFieldEnum]


  export const Tbl_telefoneScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    numero: 'numero',
    id_usuario: 'id_usuario'
  };

  export type Tbl_telefoneScalarFieldEnum = (typeof Tbl_telefoneScalarFieldEnum)[keyof typeof Tbl_telefoneScalarFieldEnum]


  export const Tbl_tipo_sanguineoScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo'
  };

  export type Tbl_tipo_sanguineoScalarFieldEnum = (typeof Tbl_tipo_sanguineoScalarFieldEnum)[keyof typeof Tbl_tipo_sanguineoScalarFieldEnum]


  export const Tbl_usuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash',
    cpf: 'cpf',
    cep: 'cep',
    logradouro: 'logradouro',
    bairro: 'bairro',
    localidade: 'localidade',
    uf: 'uf',
    numero: 'numero',
    data_nascimento: 'data_nascimento',
    foto_perfil: 'foto_perfil',
    id_tipo_sanguineo: 'id_tipo_sanguineo',
    id_sexo: 'id_sexo',
    data_criacao: 'data_criacao',
    data_atualizacao: 'data_atualizacao'
  };

  export type Tbl_usuarioScalarFieldEnum = (typeof Tbl_usuarioScalarFieldEnum)[keyof typeof Tbl_usuarioScalarFieldEnum]


  export const Tbl_recuperacao_senhaScalarFieldEnum: {
    id: 'id',
    id_usuario: 'id_usuario',
    codigo: 'codigo',
    criado_em: 'criado_em',
    usado: 'usado'
  };

  export type Tbl_recuperacao_senhaScalarFieldEnum = (typeof Tbl_recuperacao_senhaScalarFieldEnum)[keyof typeof Tbl_recuperacao_senhaScalarFieldEnum]


  export const Tbl_registro_doacaoScalarFieldEnum: {
    id: 'id',
    id_agendamento: 'id_agendamento',
    id_usuario: 'id_usuario',
    id_hospital: 'id_hospital',
    data_doacao: 'data_doacao',
    local_doacao: 'local_doacao',
    observacao: 'observacao',
    foto_comprovante: 'foto_comprovante',
    data_registro: 'data_registro'
  };

  export type Tbl_registro_doacaoScalarFieldEnum = (typeof Tbl_registro_doacaoScalarFieldEnum)[keyof typeof Tbl_registro_doacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const tbl_certificadoOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    organizacao: 'organizacao'
  };

  export type tbl_certificadoOrderByRelevanceFieldEnum = (typeof tbl_certificadoOrderByRelevanceFieldEnum)[keyof typeof tbl_certificadoOrderByRelevanceFieldEnum]


  export const tbl_doacaoOrderByRelevanceFieldEnum: {
    observacao: 'observacao',
    foto: 'foto'
  };

  export type tbl_doacaoOrderByRelevanceFieldEnum = (typeof tbl_doacaoOrderByRelevanceFieldEnum)[keyof typeof tbl_doacaoOrderByRelevanceFieldEnum]


  export const tbl_hospitalOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    cnpj: 'cnpj',
    crm: 'crm',
    cep: 'cep',
    telefone: 'telefone',
    convenios: 'convenios',
    foto: 'foto',
    complemento: 'complemento'
  };

  export type tbl_hospitalOrderByRelevanceFieldEnum = (typeof tbl_hospitalOrderByRelevanceFieldEnum)[keyof typeof tbl_hospitalOrderByRelevanceFieldEnum]


  export const tbl_sexoOrderByRelevanceFieldEnum: {
    sexo: 'sexo'
  };

  export type tbl_sexoOrderByRelevanceFieldEnum = (typeof tbl_sexoOrderByRelevanceFieldEnum)[keyof typeof tbl_sexoOrderByRelevanceFieldEnum]


  export const tbl_telefoneOrderByRelevanceFieldEnum: {
    tipo: 'tipo',
    numero: 'numero'
  };

  export type tbl_telefoneOrderByRelevanceFieldEnum = (typeof tbl_telefoneOrderByRelevanceFieldEnum)[keyof typeof tbl_telefoneOrderByRelevanceFieldEnum]


  export const tbl_tipo_sanguineoOrderByRelevanceFieldEnum: {
    tipo: 'tipo'
  };

  export type tbl_tipo_sanguineoOrderByRelevanceFieldEnum = (typeof tbl_tipo_sanguineoOrderByRelevanceFieldEnum)[keyof typeof tbl_tipo_sanguineoOrderByRelevanceFieldEnum]


  export const tbl_usuarioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash',
    cpf: 'cpf',
    cep: 'cep',
    logradouro: 'logradouro',
    bairro: 'bairro',
    localidade: 'localidade',
    uf: 'uf',
    numero: 'numero',
    foto_perfil: 'foto_perfil'
  };

  export type tbl_usuarioOrderByRelevanceFieldEnum = (typeof tbl_usuarioOrderByRelevanceFieldEnum)[keyof typeof tbl_usuarioOrderByRelevanceFieldEnum]


  export const tbl_recuperacao_senhaOrderByRelevanceFieldEnum: {
    codigo: 'codigo'
  };

  export type tbl_recuperacao_senhaOrderByRelevanceFieldEnum = (typeof tbl_recuperacao_senhaOrderByRelevanceFieldEnum)[keyof typeof tbl_recuperacao_senhaOrderByRelevanceFieldEnum]


  export const tbl_registro_doacaoOrderByRelevanceFieldEnum: {
    local_doacao: 'local_doacao',
    observacao: 'observacao',
    foto_comprovante: 'foto_comprovante'
  };

  export type tbl_registro_doacaoOrderByRelevanceFieldEnum = (typeof tbl_registro_doacaoOrderByRelevanceFieldEnum)[keyof typeof tbl_registro_doacaoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'tbl_agendamento_status'
   */
  export type Enumtbl_agendamento_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tbl_agendamento_status'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type tbl_agendamentoWhereInput = {
    AND?: tbl_agendamentoWhereInput | tbl_agendamentoWhereInput[]
    OR?: tbl_agendamentoWhereInput[]
    NOT?: tbl_agendamentoWhereInput | tbl_agendamentoWhereInput[]
    id?: IntFilter<"tbl_agendamento"> | number
    status?: Enumtbl_agendamento_statusFilter<"tbl_agendamento"> | $Enums.tbl_agendamento_status
    data?: DateTimeFilter<"tbl_agendamento"> | Date | string
    hora?: DateTimeFilter<"tbl_agendamento"> | Date | string
    id_usuario?: IntNullableFilter<"tbl_agendamento"> | number | null
    id_doacao?: IntNullableFilter<"tbl_agendamento"> | number | null
    id_hospital?: IntNullableFilter<"tbl_agendamento"> | number | null
    usuario?: XOR<Tbl_usuarioNullableScalarRelationFilter, tbl_usuarioWhereInput> | null
    doacao?: XOR<Tbl_doacaoNullableScalarRelationFilter, tbl_doacaoWhereInput> | null
    hospital?: XOR<Tbl_hospitalNullableScalarRelationFilter, tbl_hospitalWhereInput> | null
    tbl_registro_doacao?: XOR<Tbl_registro_doacaoNullableScalarRelationFilter, tbl_registro_doacaoWhereInput> | null
  }

  export type tbl_agendamentoOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    data?: SortOrder
    hora?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    id_doacao?: SortOrderInput | SortOrder
    id_hospital?: SortOrderInput | SortOrder
    usuario?: tbl_usuarioOrderByWithRelationInput
    doacao?: tbl_doacaoOrderByWithRelationInput
    hospital?: tbl_hospitalOrderByWithRelationInput
    tbl_registro_doacao?: tbl_registro_doacaoOrderByWithRelationInput
  }

  export type tbl_agendamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_agendamentoWhereInput | tbl_agendamentoWhereInput[]
    OR?: tbl_agendamentoWhereInput[]
    NOT?: tbl_agendamentoWhereInput | tbl_agendamentoWhereInput[]
    status?: Enumtbl_agendamento_statusFilter<"tbl_agendamento"> | $Enums.tbl_agendamento_status
    data?: DateTimeFilter<"tbl_agendamento"> | Date | string
    hora?: DateTimeFilter<"tbl_agendamento"> | Date | string
    id_usuario?: IntNullableFilter<"tbl_agendamento"> | number | null
    id_doacao?: IntNullableFilter<"tbl_agendamento"> | number | null
    id_hospital?: IntNullableFilter<"tbl_agendamento"> | number | null
    usuario?: XOR<Tbl_usuarioNullableScalarRelationFilter, tbl_usuarioWhereInput> | null
    doacao?: XOR<Tbl_doacaoNullableScalarRelationFilter, tbl_doacaoWhereInput> | null
    hospital?: XOR<Tbl_hospitalNullableScalarRelationFilter, tbl_hospitalWhereInput> | null
    tbl_registro_doacao?: XOR<Tbl_registro_doacaoNullableScalarRelationFilter, tbl_registro_doacaoWhereInput> | null
  }, "id">

  export type tbl_agendamentoOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    data?: SortOrder
    hora?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    id_doacao?: SortOrderInput | SortOrder
    id_hospital?: SortOrderInput | SortOrder
    _count?: tbl_agendamentoCountOrderByAggregateInput
    _avg?: tbl_agendamentoAvgOrderByAggregateInput
    _max?: tbl_agendamentoMaxOrderByAggregateInput
    _min?: tbl_agendamentoMinOrderByAggregateInput
    _sum?: tbl_agendamentoSumOrderByAggregateInput
  }

  export type tbl_agendamentoScalarWhereWithAggregatesInput = {
    AND?: tbl_agendamentoScalarWhereWithAggregatesInput | tbl_agendamentoScalarWhereWithAggregatesInput[]
    OR?: tbl_agendamentoScalarWhereWithAggregatesInput[]
    NOT?: tbl_agendamentoScalarWhereWithAggregatesInput | tbl_agendamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_agendamento"> | number
    status?: Enumtbl_agendamento_statusWithAggregatesFilter<"tbl_agendamento"> | $Enums.tbl_agendamento_status
    data?: DateTimeWithAggregatesFilter<"tbl_agendamento"> | Date | string
    hora?: DateTimeWithAggregatesFilter<"tbl_agendamento"> | Date | string
    id_usuario?: IntNullableWithAggregatesFilter<"tbl_agendamento"> | number | null
    id_doacao?: IntNullableWithAggregatesFilter<"tbl_agendamento"> | number | null
    id_hospital?: IntNullableWithAggregatesFilter<"tbl_agendamento"> | number | null
  }

  export type tbl_banco_sangueWhereInput = {
    AND?: tbl_banco_sangueWhereInput | tbl_banco_sangueWhereInput[]
    OR?: tbl_banco_sangueWhereInput[]
    NOT?: tbl_banco_sangueWhereInput | tbl_banco_sangueWhereInput[]
    id?: IntFilter<"tbl_banco_sangue"> | number
    id_hospital?: IntFilter<"tbl_banco_sangue"> | number
    id_tipo_sanguineo?: IntFilter<"tbl_banco_sangue"> | number
    quantidade?: IntFilter<"tbl_banco_sangue"> | number
    tbl_hospital?: XOR<Tbl_hospitalScalarRelationFilter, tbl_hospitalWhereInput>
    tbl_tipo_sanguineo?: XOR<Tbl_tipo_sanguineoScalarRelationFilter, tbl_tipo_sanguineoWhereInput>
  }

  export type tbl_banco_sangueOrderByWithRelationInput = {
    id?: SortOrder
    id_hospital?: SortOrder
    id_tipo_sanguineo?: SortOrder
    quantidade?: SortOrder
    tbl_hospital?: tbl_hospitalOrderByWithRelationInput
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoOrderByWithRelationInput
  }

  export type tbl_banco_sangueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_banco_sangueWhereInput | tbl_banco_sangueWhereInput[]
    OR?: tbl_banco_sangueWhereInput[]
    NOT?: tbl_banco_sangueWhereInput | tbl_banco_sangueWhereInput[]
    id_hospital?: IntFilter<"tbl_banco_sangue"> | number
    id_tipo_sanguineo?: IntFilter<"tbl_banco_sangue"> | number
    quantidade?: IntFilter<"tbl_banco_sangue"> | number
    tbl_hospital?: XOR<Tbl_hospitalScalarRelationFilter, tbl_hospitalWhereInput>
    tbl_tipo_sanguineo?: XOR<Tbl_tipo_sanguineoScalarRelationFilter, tbl_tipo_sanguineoWhereInput>
  }, "id">

  export type tbl_banco_sangueOrderByWithAggregationInput = {
    id?: SortOrder
    id_hospital?: SortOrder
    id_tipo_sanguineo?: SortOrder
    quantidade?: SortOrder
    _count?: tbl_banco_sangueCountOrderByAggregateInput
    _avg?: tbl_banco_sangueAvgOrderByAggregateInput
    _max?: tbl_banco_sangueMaxOrderByAggregateInput
    _min?: tbl_banco_sangueMinOrderByAggregateInput
    _sum?: tbl_banco_sangueSumOrderByAggregateInput
  }

  export type tbl_banco_sangueScalarWhereWithAggregatesInput = {
    AND?: tbl_banco_sangueScalarWhereWithAggregatesInput | tbl_banco_sangueScalarWhereWithAggregatesInput[]
    OR?: tbl_banco_sangueScalarWhereWithAggregatesInput[]
    NOT?: tbl_banco_sangueScalarWhereWithAggregatesInput | tbl_banco_sangueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_banco_sangue"> | number
    id_hospital?: IntWithAggregatesFilter<"tbl_banco_sangue"> | number
    id_tipo_sanguineo?: IntWithAggregatesFilter<"tbl_banco_sangue"> | number
    quantidade?: IntWithAggregatesFilter<"tbl_banco_sangue"> | number
  }

  export type tbl_certificadoWhereInput = {
    AND?: tbl_certificadoWhereInput | tbl_certificadoWhereInput[]
    OR?: tbl_certificadoWhereInput[]
    NOT?: tbl_certificadoWhereInput | tbl_certificadoWhereInput[]
    id?: IntFilter<"tbl_certificado"> | number
    titulo?: StringFilter<"tbl_certificado"> | string
    organizacao?: StringFilter<"tbl_certificado"> | string
    data_emissao?: DateTimeFilter<"tbl_certificado"> | Date | string
    id_usuario?: IntNullableFilter<"tbl_certificado"> | number | null
    tbl_usuario?: XOR<Tbl_usuarioNullableScalarRelationFilter, tbl_usuarioWhereInput> | null
  }

  export type tbl_certificadoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    organizacao?: SortOrder
    data_emissao?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    tbl_usuario?: tbl_usuarioOrderByWithRelationInput
    _relevance?: tbl_certificadoOrderByRelevanceInput
  }

  export type tbl_certificadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_certificadoWhereInput | tbl_certificadoWhereInput[]
    OR?: tbl_certificadoWhereInput[]
    NOT?: tbl_certificadoWhereInput | tbl_certificadoWhereInput[]
    titulo?: StringFilter<"tbl_certificado"> | string
    organizacao?: StringFilter<"tbl_certificado"> | string
    data_emissao?: DateTimeFilter<"tbl_certificado"> | Date | string
    id_usuario?: IntNullableFilter<"tbl_certificado"> | number | null
    tbl_usuario?: XOR<Tbl_usuarioNullableScalarRelationFilter, tbl_usuarioWhereInput> | null
  }, "id">

  export type tbl_certificadoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    organizacao?: SortOrder
    data_emissao?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    _count?: tbl_certificadoCountOrderByAggregateInput
    _avg?: tbl_certificadoAvgOrderByAggregateInput
    _max?: tbl_certificadoMaxOrderByAggregateInput
    _min?: tbl_certificadoMinOrderByAggregateInput
    _sum?: tbl_certificadoSumOrderByAggregateInput
  }

  export type tbl_certificadoScalarWhereWithAggregatesInput = {
    AND?: tbl_certificadoScalarWhereWithAggregatesInput | tbl_certificadoScalarWhereWithAggregatesInput[]
    OR?: tbl_certificadoScalarWhereWithAggregatesInput[]
    NOT?: tbl_certificadoScalarWhereWithAggregatesInput | tbl_certificadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_certificado"> | number
    titulo?: StringWithAggregatesFilter<"tbl_certificado"> | string
    organizacao?: StringWithAggregatesFilter<"tbl_certificado"> | string
    data_emissao?: DateTimeWithAggregatesFilter<"tbl_certificado"> | Date | string
    id_usuario?: IntNullableWithAggregatesFilter<"tbl_certificado"> | number | null
  }

  export type tbl_doacaoWhereInput = {
    AND?: tbl_doacaoWhereInput | tbl_doacaoWhereInput[]
    OR?: tbl_doacaoWhereInput[]
    NOT?: tbl_doacaoWhereInput | tbl_doacaoWhereInput[]
    id?: IntFilter<"tbl_doacao"> | number
    data?: DateTimeFilter<"tbl_doacao"> | Date | string
    observacao?: StringNullableFilter<"tbl_doacao"> | string | null
    foto?: StringNullableFilter<"tbl_doacao"> | string | null
    agendamentos?: Tbl_agendamentoListRelationFilter
  }

  export type tbl_doacaoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    observacao?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    agendamentos?: tbl_agendamentoOrderByRelationAggregateInput
    _relevance?: tbl_doacaoOrderByRelevanceInput
  }

  export type tbl_doacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_doacaoWhereInput | tbl_doacaoWhereInput[]
    OR?: tbl_doacaoWhereInput[]
    NOT?: tbl_doacaoWhereInput | tbl_doacaoWhereInput[]
    data?: DateTimeFilter<"tbl_doacao"> | Date | string
    observacao?: StringNullableFilter<"tbl_doacao"> | string | null
    foto?: StringNullableFilter<"tbl_doacao"> | string | null
    agendamentos?: Tbl_agendamentoListRelationFilter
  }, "id">

  export type tbl_doacaoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    observacao?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    _count?: tbl_doacaoCountOrderByAggregateInput
    _avg?: tbl_doacaoAvgOrderByAggregateInput
    _max?: tbl_doacaoMaxOrderByAggregateInput
    _min?: tbl_doacaoMinOrderByAggregateInput
    _sum?: tbl_doacaoSumOrderByAggregateInput
  }

  export type tbl_doacaoScalarWhereWithAggregatesInput = {
    AND?: tbl_doacaoScalarWhereWithAggregatesInput | tbl_doacaoScalarWhereWithAggregatesInput[]
    OR?: tbl_doacaoScalarWhereWithAggregatesInput[]
    NOT?: tbl_doacaoScalarWhereWithAggregatesInput | tbl_doacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_doacao"> | number
    data?: DateTimeWithAggregatesFilter<"tbl_doacao"> | Date | string
    observacao?: StringNullableWithAggregatesFilter<"tbl_doacao"> | string | null
    foto?: StringNullableWithAggregatesFilter<"tbl_doacao"> | string | null
  }

  export type tbl_hospitalWhereInput = {
    AND?: tbl_hospitalWhereInput | tbl_hospitalWhereInput[]
    OR?: tbl_hospitalWhereInput[]
    NOT?: tbl_hospitalWhereInput | tbl_hospitalWhereInput[]
    id?: IntFilter<"tbl_hospital"> | number
    nome?: StringFilter<"tbl_hospital"> | string
    email?: StringFilter<"tbl_hospital"> | string
    senha?: StringFilter<"tbl_hospital"> | string
    cnpj?: StringFilter<"tbl_hospital"> | string
    crm?: StringFilter<"tbl_hospital"> | string
    cep?: StringFilter<"tbl_hospital"> | string
    telefone?: StringFilter<"tbl_hospital"> | string
    capacidade_maxima?: IntFilter<"tbl_hospital"> | number
    convenios?: StringFilter<"tbl_hospital"> | string
    horario_abertura?: DateTimeFilter<"tbl_hospital"> | Date | string
    horario_fechamento?: DateTimeFilter<"tbl_hospital"> | Date | string
    foto?: StringFilter<"tbl_hospital"> | string
    complemento?: StringNullableFilter<"tbl_hospital"> | string | null
    agendamentos?: Tbl_agendamentoListRelationFilter
    tbl_banco_sangue?: Tbl_banco_sangueListRelationFilter
    tbl_registro_doacao?: Tbl_registro_doacaoListRelationFilter
  }

  export type tbl_hospitalOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cnpj?: SortOrder
    crm?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
    capacidade_maxima?: SortOrder
    convenios?: SortOrder
    horario_abertura?: SortOrder
    horario_fechamento?: SortOrder
    foto?: SortOrder
    complemento?: SortOrderInput | SortOrder
    agendamentos?: tbl_agendamentoOrderByRelationAggregateInput
    tbl_banco_sangue?: tbl_banco_sangueOrderByRelationAggregateInput
    tbl_registro_doacao?: tbl_registro_doacaoOrderByRelationAggregateInput
    _relevance?: tbl_hospitalOrderByRelevanceInput
  }

  export type tbl_hospitalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cnpj?: string
    AND?: tbl_hospitalWhereInput | tbl_hospitalWhereInput[]
    OR?: tbl_hospitalWhereInput[]
    NOT?: tbl_hospitalWhereInput | tbl_hospitalWhereInput[]
    nome?: StringFilter<"tbl_hospital"> | string
    senha?: StringFilter<"tbl_hospital"> | string
    crm?: StringFilter<"tbl_hospital"> | string
    cep?: StringFilter<"tbl_hospital"> | string
    telefone?: StringFilter<"tbl_hospital"> | string
    capacidade_maxima?: IntFilter<"tbl_hospital"> | number
    convenios?: StringFilter<"tbl_hospital"> | string
    horario_abertura?: DateTimeFilter<"tbl_hospital"> | Date | string
    horario_fechamento?: DateTimeFilter<"tbl_hospital"> | Date | string
    foto?: StringFilter<"tbl_hospital"> | string
    complemento?: StringNullableFilter<"tbl_hospital"> | string | null
    agendamentos?: Tbl_agendamentoListRelationFilter
    tbl_banco_sangue?: Tbl_banco_sangueListRelationFilter
    tbl_registro_doacao?: Tbl_registro_doacaoListRelationFilter
  }, "id" | "email" | "cnpj">

  export type tbl_hospitalOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cnpj?: SortOrder
    crm?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
    capacidade_maxima?: SortOrder
    convenios?: SortOrder
    horario_abertura?: SortOrder
    horario_fechamento?: SortOrder
    foto?: SortOrder
    complemento?: SortOrderInput | SortOrder
    _count?: tbl_hospitalCountOrderByAggregateInput
    _avg?: tbl_hospitalAvgOrderByAggregateInput
    _max?: tbl_hospitalMaxOrderByAggregateInput
    _min?: tbl_hospitalMinOrderByAggregateInput
    _sum?: tbl_hospitalSumOrderByAggregateInput
  }

  export type tbl_hospitalScalarWhereWithAggregatesInput = {
    AND?: tbl_hospitalScalarWhereWithAggregatesInput | tbl_hospitalScalarWhereWithAggregatesInput[]
    OR?: tbl_hospitalScalarWhereWithAggregatesInput[]
    NOT?: tbl_hospitalScalarWhereWithAggregatesInput | tbl_hospitalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_hospital"> | number
    nome?: StringWithAggregatesFilter<"tbl_hospital"> | string
    email?: StringWithAggregatesFilter<"tbl_hospital"> | string
    senha?: StringWithAggregatesFilter<"tbl_hospital"> | string
    cnpj?: StringWithAggregatesFilter<"tbl_hospital"> | string
    crm?: StringWithAggregatesFilter<"tbl_hospital"> | string
    cep?: StringWithAggregatesFilter<"tbl_hospital"> | string
    telefone?: StringWithAggregatesFilter<"tbl_hospital"> | string
    capacidade_maxima?: IntWithAggregatesFilter<"tbl_hospital"> | number
    convenios?: StringWithAggregatesFilter<"tbl_hospital"> | string
    horario_abertura?: DateTimeWithAggregatesFilter<"tbl_hospital"> | Date | string
    horario_fechamento?: DateTimeWithAggregatesFilter<"tbl_hospital"> | Date | string
    foto?: StringWithAggregatesFilter<"tbl_hospital"> | string
    complemento?: StringNullableWithAggregatesFilter<"tbl_hospital"> | string | null
  }

  export type tbl_sexoWhereInput = {
    AND?: tbl_sexoWhereInput | tbl_sexoWhereInput[]
    OR?: tbl_sexoWhereInput[]
    NOT?: tbl_sexoWhereInput | tbl_sexoWhereInput[]
    id?: IntFilter<"tbl_sexo"> | number
    sexo?: StringFilter<"tbl_sexo"> | string
    usuarios?: Tbl_usuarioListRelationFilter
  }

  export type tbl_sexoOrderByWithRelationInput = {
    id?: SortOrder
    sexo?: SortOrder
    usuarios?: tbl_usuarioOrderByRelationAggregateInput
    _relevance?: tbl_sexoOrderByRelevanceInput
  }

  export type tbl_sexoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_sexoWhereInput | tbl_sexoWhereInput[]
    OR?: tbl_sexoWhereInput[]
    NOT?: tbl_sexoWhereInput | tbl_sexoWhereInput[]
    sexo?: StringFilter<"tbl_sexo"> | string
    usuarios?: Tbl_usuarioListRelationFilter
  }, "id">

  export type tbl_sexoOrderByWithAggregationInput = {
    id?: SortOrder
    sexo?: SortOrder
    _count?: tbl_sexoCountOrderByAggregateInput
    _avg?: tbl_sexoAvgOrderByAggregateInput
    _max?: tbl_sexoMaxOrderByAggregateInput
    _min?: tbl_sexoMinOrderByAggregateInput
    _sum?: tbl_sexoSumOrderByAggregateInput
  }

  export type tbl_sexoScalarWhereWithAggregatesInput = {
    AND?: tbl_sexoScalarWhereWithAggregatesInput | tbl_sexoScalarWhereWithAggregatesInput[]
    OR?: tbl_sexoScalarWhereWithAggregatesInput[]
    NOT?: tbl_sexoScalarWhereWithAggregatesInput | tbl_sexoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_sexo"> | number
    sexo?: StringWithAggregatesFilter<"tbl_sexo"> | string
  }

  export type tbl_telefoneWhereInput = {
    AND?: tbl_telefoneWhereInput | tbl_telefoneWhereInput[]
    OR?: tbl_telefoneWhereInput[]
    NOT?: tbl_telefoneWhereInput | tbl_telefoneWhereInput[]
    id?: IntFilter<"tbl_telefone"> | number
    tipo?: StringFilter<"tbl_telefone"> | string
    numero?: StringFilter<"tbl_telefone"> | string
    id_usuario?: IntNullableFilter<"tbl_telefone"> | number | null
    tbl_usuario?: XOR<Tbl_usuarioNullableScalarRelationFilter, tbl_usuarioWhereInput> | null
  }

  export type tbl_telefoneOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    numero?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    tbl_usuario?: tbl_usuarioOrderByWithRelationInput
    _relevance?: tbl_telefoneOrderByRelevanceInput
  }

  export type tbl_telefoneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_telefoneWhereInput | tbl_telefoneWhereInput[]
    OR?: tbl_telefoneWhereInput[]
    NOT?: tbl_telefoneWhereInput | tbl_telefoneWhereInput[]
    tipo?: StringFilter<"tbl_telefone"> | string
    numero?: StringFilter<"tbl_telefone"> | string
    id_usuario?: IntNullableFilter<"tbl_telefone"> | number | null
    tbl_usuario?: XOR<Tbl_usuarioNullableScalarRelationFilter, tbl_usuarioWhereInput> | null
  }, "id">

  export type tbl_telefoneOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    numero?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    _count?: tbl_telefoneCountOrderByAggregateInput
    _avg?: tbl_telefoneAvgOrderByAggregateInput
    _max?: tbl_telefoneMaxOrderByAggregateInput
    _min?: tbl_telefoneMinOrderByAggregateInput
    _sum?: tbl_telefoneSumOrderByAggregateInput
  }

  export type tbl_telefoneScalarWhereWithAggregatesInput = {
    AND?: tbl_telefoneScalarWhereWithAggregatesInput | tbl_telefoneScalarWhereWithAggregatesInput[]
    OR?: tbl_telefoneScalarWhereWithAggregatesInput[]
    NOT?: tbl_telefoneScalarWhereWithAggregatesInput | tbl_telefoneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_telefone"> | number
    tipo?: StringWithAggregatesFilter<"tbl_telefone"> | string
    numero?: StringWithAggregatesFilter<"tbl_telefone"> | string
    id_usuario?: IntNullableWithAggregatesFilter<"tbl_telefone"> | number | null
  }

  export type tbl_tipo_sanguineoWhereInput = {
    AND?: tbl_tipo_sanguineoWhereInput | tbl_tipo_sanguineoWhereInput[]
    OR?: tbl_tipo_sanguineoWhereInput[]
    NOT?: tbl_tipo_sanguineoWhereInput | tbl_tipo_sanguineoWhereInput[]
    id?: IntFilter<"tbl_tipo_sanguineo"> | number
    tipo?: StringFilter<"tbl_tipo_sanguineo"> | string
    tbl_banco_sangue?: Tbl_banco_sangueListRelationFilter
    tbl_usuario?: Tbl_usuarioListRelationFilter
  }

  export type tbl_tipo_sanguineoOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    tbl_banco_sangue?: tbl_banco_sangueOrderByRelationAggregateInput
    tbl_usuario?: tbl_usuarioOrderByRelationAggregateInput
    _relevance?: tbl_tipo_sanguineoOrderByRelevanceInput
  }

  export type tbl_tipo_sanguineoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tipo?: string
    AND?: tbl_tipo_sanguineoWhereInput | tbl_tipo_sanguineoWhereInput[]
    OR?: tbl_tipo_sanguineoWhereInput[]
    NOT?: tbl_tipo_sanguineoWhereInput | tbl_tipo_sanguineoWhereInput[]
    tbl_banco_sangue?: Tbl_banco_sangueListRelationFilter
    tbl_usuario?: Tbl_usuarioListRelationFilter
  }, "id" | "tipo">

  export type tbl_tipo_sanguineoOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    _count?: tbl_tipo_sanguineoCountOrderByAggregateInput
    _avg?: tbl_tipo_sanguineoAvgOrderByAggregateInput
    _max?: tbl_tipo_sanguineoMaxOrderByAggregateInput
    _min?: tbl_tipo_sanguineoMinOrderByAggregateInput
    _sum?: tbl_tipo_sanguineoSumOrderByAggregateInput
  }

  export type tbl_tipo_sanguineoScalarWhereWithAggregatesInput = {
    AND?: tbl_tipo_sanguineoScalarWhereWithAggregatesInput | tbl_tipo_sanguineoScalarWhereWithAggregatesInput[]
    OR?: tbl_tipo_sanguineoScalarWhereWithAggregatesInput[]
    NOT?: tbl_tipo_sanguineoScalarWhereWithAggregatesInput | tbl_tipo_sanguineoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_tipo_sanguineo"> | number
    tipo?: StringWithAggregatesFilter<"tbl_tipo_sanguineo"> | string
  }

  export type tbl_usuarioWhereInput = {
    AND?: tbl_usuarioWhereInput | tbl_usuarioWhereInput[]
    OR?: tbl_usuarioWhereInput[]
    NOT?: tbl_usuarioWhereInput | tbl_usuarioWhereInput[]
    id?: IntFilter<"tbl_usuario"> | number
    nome?: StringFilter<"tbl_usuario"> | string
    email?: StringFilter<"tbl_usuario"> | string
    senha_hash?: StringFilter<"tbl_usuario"> | string
    cpf?: StringNullableFilter<"tbl_usuario"> | string | null
    cep?: StringNullableFilter<"tbl_usuario"> | string | null
    logradouro?: StringNullableFilter<"tbl_usuario"> | string | null
    bairro?: StringNullableFilter<"tbl_usuario"> | string | null
    localidade?: StringNullableFilter<"tbl_usuario"> | string | null
    uf?: StringNullableFilter<"tbl_usuario"> | string | null
    numero?: StringNullableFilter<"tbl_usuario"> | string | null
    data_nascimento?: DateTimeNullableFilter<"tbl_usuario"> | Date | string | null
    foto_perfil?: StringNullableFilter<"tbl_usuario"> | string | null
    id_tipo_sanguineo?: IntNullableFilter<"tbl_usuario"> | number | null
    id_sexo?: IntNullableFilter<"tbl_usuario"> | number | null
    data_criacao?: DateTimeNullableFilter<"tbl_usuario"> | Date | string | null
    data_atualizacao?: DateTimeNullableFilter<"tbl_usuario"> | Date | string | null
    agendamentos?: Tbl_agendamentoListRelationFilter
    tbl_certificado?: Tbl_certificadoListRelationFilter
    tbl_recuperacao_senha?: Tbl_recuperacao_senhaListRelationFilter
    tbl_telefone?: Tbl_telefoneListRelationFilter
    tbl_registro_doacao?: Tbl_registro_doacaoListRelationFilter
    tbl_tipo_sanguineo?: XOR<Tbl_tipo_sanguineoNullableScalarRelationFilter, tbl_tipo_sanguineoWhereInput> | null
    sexo?: XOR<Tbl_sexoNullableScalarRelationFilter, tbl_sexoWhereInput> | null
  }

  export type tbl_usuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    cpf?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    logradouro?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    localidade?: SortOrderInput | SortOrder
    uf?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    foto_perfil?: SortOrderInput | SortOrder
    id_tipo_sanguineo?: SortOrderInput | SortOrder
    id_sexo?: SortOrderInput | SortOrder
    data_criacao?: SortOrderInput | SortOrder
    data_atualizacao?: SortOrderInput | SortOrder
    agendamentos?: tbl_agendamentoOrderByRelationAggregateInput
    tbl_certificado?: tbl_certificadoOrderByRelationAggregateInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaOrderByRelationAggregateInput
    tbl_telefone?: tbl_telefoneOrderByRelationAggregateInput
    tbl_registro_doacao?: tbl_registro_doacaoOrderByRelationAggregateInput
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoOrderByWithRelationInput
    sexo?: tbl_sexoOrderByWithRelationInput
    _relevance?: tbl_usuarioOrderByRelevanceInput
  }

  export type tbl_usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    AND?: tbl_usuarioWhereInput | tbl_usuarioWhereInput[]
    OR?: tbl_usuarioWhereInput[]
    NOT?: tbl_usuarioWhereInput | tbl_usuarioWhereInput[]
    nome?: StringFilter<"tbl_usuario"> | string
    senha_hash?: StringFilter<"tbl_usuario"> | string
    cep?: StringNullableFilter<"tbl_usuario"> | string | null
    logradouro?: StringNullableFilter<"tbl_usuario"> | string | null
    bairro?: StringNullableFilter<"tbl_usuario"> | string | null
    localidade?: StringNullableFilter<"tbl_usuario"> | string | null
    uf?: StringNullableFilter<"tbl_usuario"> | string | null
    numero?: StringNullableFilter<"tbl_usuario"> | string | null
    data_nascimento?: DateTimeNullableFilter<"tbl_usuario"> | Date | string | null
    foto_perfil?: StringNullableFilter<"tbl_usuario"> | string | null
    id_tipo_sanguineo?: IntNullableFilter<"tbl_usuario"> | number | null
    id_sexo?: IntNullableFilter<"tbl_usuario"> | number | null
    data_criacao?: DateTimeNullableFilter<"tbl_usuario"> | Date | string | null
    data_atualizacao?: DateTimeNullableFilter<"tbl_usuario"> | Date | string | null
    agendamentos?: Tbl_agendamentoListRelationFilter
    tbl_certificado?: Tbl_certificadoListRelationFilter
    tbl_recuperacao_senha?: Tbl_recuperacao_senhaListRelationFilter
    tbl_telefone?: Tbl_telefoneListRelationFilter
    tbl_registro_doacao?: Tbl_registro_doacaoListRelationFilter
    tbl_tipo_sanguineo?: XOR<Tbl_tipo_sanguineoNullableScalarRelationFilter, tbl_tipo_sanguineoWhereInput> | null
    sexo?: XOR<Tbl_sexoNullableScalarRelationFilter, tbl_sexoWhereInput> | null
  }, "id" | "email" | "cpf">

  export type tbl_usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    cpf?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    logradouro?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    localidade?: SortOrderInput | SortOrder
    uf?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    foto_perfil?: SortOrderInput | SortOrder
    id_tipo_sanguineo?: SortOrderInput | SortOrder
    id_sexo?: SortOrderInput | SortOrder
    data_criacao?: SortOrderInput | SortOrder
    data_atualizacao?: SortOrderInput | SortOrder
    _count?: tbl_usuarioCountOrderByAggregateInput
    _avg?: tbl_usuarioAvgOrderByAggregateInput
    _max?: tbl_usuarioMaxOrderByAggregateInput
    _min?: tbl_usuarioMinOrderByAggregateInput
    _sum?: tbl_usuarioSumOrderByAggregateInput
  }

  export type tbl_usuarioScalarWhereWithAggregatesInput = {
    AND?: tbl_usuarioScalarWhereWithAggregatesInput | tbl_usuarioScalarWhereWithAggregatesInput[]
    OR?: tbl_usuarioScalarWhereWithAggregatesInput[]
    NOT?: tbl_usuarioScalarWhereWithAggregatesInput | tbl_usuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_usuario"> | number
    nome?: StringWithAggregatesFilter<"tbl_usuario"> | string
    email?: StringWithAggregatesFilter<"tbl_usuario"> | string
    senha_hash?: StringWithAggregatesFilter<"tbl_usuario"> | string
    cpf?: StringNullableWithAggregatesFilter<"tbl_usuario"> | string | null
    cep?: StringNullableWithAggregatesFilter<"tbl_usuario"> | string | null
    logradouro?: StringNullableWithAggregatesFilter<"tbl_usuario"> | string | null
    bairro?: StringNullableWithAggregatesFilter<"tbl_usuario"> | string | null
    localidade?: StringNullableWithAggregatesFilter<"tbl_usuario"> | string | null
    uf?: StringNullableWithAggregatesFilter<"tbl_usuario"> | string | null
    numero?: StringNullableWithAggregatesFilter<"tbl_usuario"> | string | null
    data_nascimento?: DateTimeNullableWithAggregatesFilter<"tbl_usuario"> | Date | string | null
    foto_perfil?: StringNullableWithAggregatesFilter<"tbl_usuario"> | string | null
    id_tipo_sanguineo?: IntNullableWithAggregatesFilter<"tbl_usuario"> | number | null
    id_sexo?: IntNullableWithAggregatesFilter<"tbl_usuario"> | number | null
    data_criacao?: DateTimeNullableWithAggregatesFilter<"tbl_usuario"> | Date | string | null
    data_atualizacao?: DateTimeNullableWithAggregatesFilter<"tbl_usuario"> | Date | string | null
  }

  export type tbl_recuperacao_senhaWhereInput = {
    AND?: tbl_recuperacao_senhaWhereInput | tbl_recuperacao_senhaWhereInput[]
    OR?: tbl_recuperacao_senhaWhereInput[]
    NOT?: tbl_recuperacao_senhaWhereInput | tbl_recuperacao_senhaWhereInput[]
    id?: IntFilter<"tbl_recuperacao_senha"> | number
    id_usuario?: IntFilter<"tbl_recuperacao_senha"> | number
    codigo?: StringFilter<"tbl_recuperacao_senha"> | string
    criado_em?: DateTimeNullableFilter<"tbl_recuperacao_senha"> | Date | string | null
    usado?: BoolNullableFilter<"tbl_recuperacao_senha"> | boolean | null
    tbl_usuario?: XOR<Tbl_usuarioScalarRelationFilter, tbl_usuarioWhereInput>
  }

  export type tbl_recuperacao_senhaOrderByWithRelationInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    codigo?: SortOrder
    criado_em?: SortOrderInput | SortOrder
    usado?: SortOrderInput | SortOrder
    tbl_usuario?: tbl_usuarioOrderByWithRelationInput
    _relevance?: tbl_recuperacao_senhaOrderByRelevanceInput
  }

  export type tbl_recuperacao_senhaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tbl_recuperacao_senhaWhereInput | tbl_recuperacao_senhaWhereInput[]
    OR?: tbl_recuperacao_senhaWhereInput[]
    NOT?: tbl_recuperacao_senhaWhereInput | tbl_recuperacao_senhaWhereInput[]
    id_usuario?: IntFilter<"tbl_recuperacao_senha"> | number
    codigo?: StringFilter<"tbl_recuperacao_senha"> | string
    criado_em?: DateTimeNullableFilter<"tbl_recuperacao_senha"> | Date | string | null
    usado?: BoolNullableFilter<"tbl_recuperacao_senha"> | boolean | null
    tbl_usuario?: XOR<Tbl_usuarioScalarRelationFilter, tbl_usuarioWhereInput>
  }, "id">

  export type tbl_recuperacao_senhaOrderByWithAggregationInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    codigo?: SortOrder
    criado_em?: SortOrderInput | SortOrder
    usado?: SortOrderInput | SortOrder
    _count?: tbl_recuperacao_senhaCountOrderByAggregateInput
    _avg?: tbl_recuperacao_senhaAvgOrderByAggregateInput
    _max?: tbl_recuperacao_senhaMaxOrderByAggregateInput
    _min?: tbl_recuperacao_senhaMinOrderByAggregateInput
    _sum?: tbl_recuperacao_senhaSumOrderByAggregateInput
  }

  export type tbl_recuperacao_senhaScalarWhereWithAggregatesInput = {
    AND?: tbl_recuperacao_senhaScalarWhereWithAggregatesInput | tbl_recuperacao_senhaScalarWhereWithAggregatesInput[]
    OR?: tbl_recuperacao_senhaScalarWhereWithAggregatesInput[]
    NOT?: tbl_recuperacao_senhaScalarWhereWithAggregatesInput | tbl_recuperacao_senhaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_recuperacao_senha"> | number
    id_usuario?: IntWithAggregatesFilter<"tbl_recuperacao_senha"> | number
    codigo?: StringWithAggregatesFilter<"tbl_recuperacao_senha"> | string
    criado_em?: DateTimeNullableWithAggregatesFilter<"tbl_recuperacao_senha"> | Date | string | null
    usado?: BoolNullableWithAggregatesFilter<"tbl_recuperacao_senha"> | boolean | null
  }

  export type tbl_registro_doacaoWhereInput = {
    AND?: tbl_registro_doacaoWhereInput | tbl_registro_doacaoWhereInput[]
    OR?: tbl_registro_doacaoWhereInput[]
    NOT?: tbl_registro_doacaoWhereInput | tbl_registro_doacaoWhereInput[]
    id?: IntFilter<"tbl_registro_doacao"> | number
    id_agendamento?: IntFilter<"tbl_registro_doacao"> | number
    id_usuario?: IntFilter<"tbl_registro_doacao"> | number
    id_hospital?: IntFilter<"tbl_registro_doacao"> | number
    data_doacao?: DateTimeFilter<"tbl_registro_doacao"> | Date | string
    local_doacao?: StringFilter<"tbl_registro_doacao"> | string
    observacao?: StringNullableFilter<"tbl_registro_doacao"> | string | null
    foto_comprovante?: StringNullableFilter<"tbl_registro_doacao"> | string | null
    data_registro?: DateTimeNullableFilter<"tbl_registro_doacao"> | Date | string | null
    tbl_agendamento?: XOR<Tbl_agendamentoScalarRelationFilter, tbl_agendamentoWhereInput>
    tbl_usuario?: XOR<Tbl_usuarioScalarRelationFilter, tbl_usuarioWhereInput>
    tbl_hospital?: XOR<Tbl_hospitalScalarRelationFilter, tbl_hospitalWhereInput>
  }

  export type tbl_registro_doacaoOrderByWithRelationInput = {
    id?: SortOrder
    id_agendamento?: SortOrder
    id_usuario?: SortOrder
    id_hospital?: SortOrder
    data_doacao?: SortOrder
    local_doacao?: SortOrder
    observacao?: SortOrderInput | SortOrder
    foto_comprovante?: SortOrderInput | SortOrder
    data_registro?: SortOrderInput | SortOrder
    tbl_agendamento?: tbl_agendamentoOrderByWithRelationInput
    tbl_usuario?: tbl_usuarioOrderByWithRelationInput
    tbl_hospital?: tbl_hospitalOrderByWithRelationInput
    _relevance?: tbl_registro_doacaoOrderByRelevanceInput
  }

  export type tbl_registro_doacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_agendamento?: number
    AND?: tbl_registro_doacaoWhereInput | tbl_registro_doacaoWhereInput[]
    OR?: tbl_registro_doacaoWhereInput[]
    NOT?: tbl_registro_doacaoWhereInput | tbl_registro_doacaoWhereInput[]
    id_usuario?: IntFilter<"tbl_registro_doacao"> | number
    id_hospital?: IntFilter<"tbl_registro_doacao"> | number
    data_doacao?: DateTimeFilter<"tbl_registro_doacao"> | Date | string
    local_doacao?: StringFilter<"tbl_registro_doacao"> | string
    observacao?: StringNullableFilter<"tbl_registro_doacao"> | string | null
    foto_comprovante?: StringNullableFilter<"tbl_registro_doacao"> | string | null
    data_registro?: DateTimeNullableFilter<"tbl_registro_doacao"> | Date | string | null
    tbl_agendamento?: XOR<Tbl_agendamentoScalarRelationFilter, tbl_agendamentoWhereInput>
    tbl_usuario?: XOR<Tbl_usuarioScalarRelationFilter, tbl_usuarioWhereInput>
    tbl_hospital?: XOR<Tbl_hospitalScalarRelationFilter, tbl_hospitalWhereInput>
  }, "id" | "id_agendamento">

  export type tbl_registro_doacaoOrderByWithAggregationInput = {
    id?: SortOrder
    id_agendamento?: SortOrder
    id_usuario?: SortOrder
    id_hospital?: SortOrder
    data_doacao?: SortOrder
    local_doacao?: SortOrder
    observacao?: SortOrderInput | SortOrder
    foto_comprovante?: SortOrderInput | SortOrder
    data_registro?: SortOrderInput | SortOrder
    _count?: tbl_registro_doacaoCountOrderByAggregateInput
    _avg?: tbl_registro_doacaoAvgOrderByAggregateInput
    _max?: tbl_registro_doacaoMaxOrderByAggregateInput
    _min?: tbl_registro_doacaoMinOrderByAggregateInput
    _sum?: tbl_registro_doacaoSumOrderByAggregateInput
  }

  export type tbl_registro_doacaoScalarWhereWithAggregatesInput = {
    AND?: tbl_registro_doacaoScalarWhereWithAggregatesInput | tbl_registro_doacaoScalarWhereWithAggregatesInput[]
    OR?: tbl_registro_doacaoScalarWhereWithAggregatesInput[]
    NOT?: tbl_registro_doacaoScalarWhereWithAggregatesInput | tbl_registro_doacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbl_registro_doacao"> | number
    id_agendamento?: IntWithAggregatesFilter<"tbl_registro_doacao"> | number
    id_usuario?: IntWithAggregatesFilter<"tbl_registro_doacao"> | number
    id_hospital?: IntWithAggregatesFilter<"tbl_registro_doacao"> | number
    data_doacao?: DateTimeWithAggregatesFilter<"tbl_registro_doacao"> | Date | string
    local_doacao?: StringWithAggregatesFilter<"tbl_registro_doacao"> | string
    observacao?: StringNullableWithAggregatesFilter<"tbl_registro_doacao"> | string | null
    foto_comprovante?: StringNullableWithAggregatesFilter<"tbl_registro_doacao"> | string | null
    data_registro?: DateTimeNullableWithAggregatesFilter<"tbl_registro_doacao"> | Date | string | null
  }

  export type tbl_agendamentoCreateInput = {
    status?: $Enums.tbl_agendamento_status
    data: Date | string
    hora: Date | string
    usuario?: tbl_usuarioCreateNestedOneWithoutAgendamentosInput
    doacao?: tbl_doacaoCreateNestedOneWithoutAgendamentosInput
    hospital?: tbl_hospitalCreateNestedOneWithoutAgendamentosInput
    tbl_registro_doacao?: tbl_registro_doacaoCreateNestedOneWithoutTbl_agendamentoInput
  }

  export type tbl_agendamentoUncheckedCreateInput = {
    id?: number
    status?: $Enums.tbl_agendamento_status
    data: Date | string
    hora: Date | string
    id_usuario?: number | null
    id_doacao?: number | null
    id_hospital?: number | null
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedCreateNestedOneWithoutTbl_agendamentoInput
  }

  export type tbl_agendamentoUpdateInput = {
    status?: Enumtbl_agendamento_statusFieldUpdateOperationsInput | $Enums.tbl_agendamento_status
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: tbl_usuarioUpdateOneWithoutAgendamentosNestedInput
    doacao?: tbl_doacaoUpdateOneWithoutAgendamentosNestedInput
    hospital?: tbl_hospitalUpdateOneWithoutAgendamentosNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUpdateOneWithoutTbl_agendamentoNestedInput
  }

  export type tbl_agendamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enumtbl_agendamento_statusFieldUpdateOperationsInput | $Enums.tbl_agendamento_status
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_doacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_hospital?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedUpdateOneWithoutTbl_agendamentoNestedInput
  }

  export type tbl_agendamentoCreateManyInput = {
    id?: number
    status?: $Enums.tbl_agendamento_status
    data: Date | string
    hora: Date | string
    id_usuario?: number | null
    id_doacao?: number | null
    id_hospital?: number | null
  }

  export type tbl_agendamentoUpdateManyMutationInput = {
    status?: Enumtbl_agendamento_statusFieldUpdateOperationsInput | $Enums.tbl_agendamento_status
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_agendamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enumtbl_agendamento_statusFieldUpdateOperationsInput | $Enums.tbl_agendamento_status
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_doacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_hospital?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tbl_banco_sangueCreateInput = {
    quantidade?: number
    tbl_hospital: tbl_hospitalCreateNestedOneWithoutTbl_banco_sangueInput
    tbl_tipo_sanguineo: tbl_tipo_sanguineoCreateNestedOneWithoutTbl_banco_sangueInput
  }

  export type tbl_banco_sangueUncheckedCreateInput = {
    id?: number
    id_hospital: number
    id_tipo_sanguineo: number
    quantidade?: number
  }

  export type tbl_banco_sangueUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    tbl_hospital?: tbl_hospitalUpdateOneRequiredWithoutTbl_banco_sangueNestedInput
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoUpdateOneRequiredWithoutTbl_banco_sangueNestedInput
  }

  export type tbl_banco_sangueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_hospital?: IntFieldUpdateOperationsInput | number
    id_tipo_sanguineo?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_banco_sangueCreateManyInput = {
    id?: number
    id_hospital: number
    id_tipo_sanguineo: number
    quantidade?: number
  }

  export type tbl_banco_sangueUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_banco_sangueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_hospital?: IntFieldUpdateOperationsInput | number
    id_tipo_sanguineo?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_certificadoCreateInput = {
    titulo: string
    organizacao: string
    data_emissao: Date | string
    tbl_usuario?: tbl_usuarioCreateNestedOneWithoutTbl_certificadoInput
  }

  export type tbl_certificadoUncheckedCreateInput = {
    id?: number
    titulo: string
    organizacao: string
    data_emissao: Date | string
    id_usuario?: number | null
  }

  export type tbl_certificadoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    organizacao?: StringFieldUpdateOperationsInput | string
    data_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    tbl_usuario?: tbl_usuarioUpdateOneWithoutTbl_certificadoNestedInput
  }

  export type tbl_certificadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    organizacao?: StringFieldUpdateOperationsInput | string
    data_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tbl_certificadoCreateManyInput = {
    id?: number
    titulo: string
    organizacao: string
    data_emissao: Date | string
    id_usuario?: number | null
  }

  export type tbl_certificadoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    organizacao?: StringFieldUpdateOperationsInput | string
    data_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_certificadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    organizacao?: StringFieldUpdateOperationsInput | string
    data_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tbl_doacaoCreateInput = {
    data: Date | string
    observacao?: string | null
    foto?: string | null
    agendamentos?: tbl_agendamentoCreateNestedManyWithoutDoacaoInput
  }

  export type tbl_doacaoUncheckedCreateInput = {
    id?: number
    data: Date | string
    observacao?: string | null
    foto?: string | null
    agendamentos?: tbl_agendamentoUncheckedCreateNestedManyWithoutDoacaoInput
  }

  export type tbl_doacaoUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: tbl_agendamentoUpdateManyWithoutDoacaoNestedInput
  }

  export type tbl_doacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: tbl_agendamentoUncheckedUpdateManyWithoutDoacaoNestedInput
  }

  export type tbl_doacaoCreateManyInput = {
    id?: number
    data: Date | string
    observacao?: string | null
    foto?: string | null
  }

  export type tbl_doacaoUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_doacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_hospitalCreateInput = {
    nome: string
    email: string
    senha: string
    cnpj: string
    crm: string
    cep: string
    telefone: string
    capacidade_maxima?: number
    convenios: string
    horario_abertura?: Date | string
    horario_fechamento?: Date | string
    foto: string
    complemento?: string | null
    agendamentos?: tbl_agendamentoCreateNestedManyWithoutHospitalInput
    tbl_banco_sangue?: tbl_banco_sangueCreateNestedManyWithoutTbl_hospitalInput
    tbl_registro_doacao?: tbl_registro_doacaoCreateNestedManyWithoutTbl_hospitalInput
  }

  export type tbl_hospitalUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cnpj: string
    crm: string
    cep: string
    telefone: string
    capacidade_maxima?: number
    convenios: string
    horario_abertura?: Date | string
    horario_fechamento?: Date | string
    foto: string
    complemento?: string | null
    agendamentos?: tbl_agendamentoUncheckedCreateNestedManyWithoutHospitalInput
    tbl_banco_sangue?: tbl_banco_sangueUncheckedCreateNestedManyWithoutTbl_hospitalInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedCreateNestedManyWithoutTbl_hospitalInput
  }

  export type tbl_hospitalUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    capacidade_maxima?: IntFieldUpdateOperationsInput | number
    convenios?: StringFieldUpdateOperationsInput | string
    horario_abertura?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: tbl_agendamentoUpdateManyWithoutHospitalNestedInput
    tbl_banco_sangue?: tbl_banco_sangueUpdateManyWithoutTbl_hospitalNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUpdateManyWithoutTbl_hospitalNestedInput
  }

  export type tbl_hospitalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    capacidade_maxima?: IntFieldUpdateOperationsInput | number
    convenios?: StringFieldUpdateOperationsInput | string
    horario_abertura?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: tbl_agendamentoUncheckedUpdateManyWithoutHospitalNestedInput
    tbl_banco_sangue?: tbl_banco_sangueUncheckedUpdateManyWithoutTbl_hospitalNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedUpdateManyWithoutTbl_hospitalNestedInput
  }

  export type tbl_hospitalCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cnpj: string
    crm: string
    cep: string
    telefone: string
    capacidade_maxima?: number
    convenios: string
    horario_abertura?: Date | string
    horario_fechamento?: Date | string
    foto: string
    complemento?: string | null
  }

  export type tbl_hospitalUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    capacidade_maxima?: IntFieldUpdateOperationsInput | number
    convenios?: StringFieldUpdateOperationsInput | string
    horario_abertura?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_hospitalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    capacidade_maxima?: IntFieldUpdateOperationsInput | number
    convenios?: StringFieldUpdateOperationsInput | string
    horario_abertura?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_sexoCreateInput = {
    sexo: string
    usuarios?: tbl_usuarioCreateNestedManyWithoutSexoInput
  }

  export type tbl_sexoUncheckedCreateInput = {
    id?: number
    sexo: string
    usuarios?: tbl_usuarioUncheckedCreateNestedManyWithoutSexoInput
  }

  export type tbl_sexoUpdateInput = {
    sexo?: StringFieldUpdateOperationsInput | string
    usuarios?: tbl_usuarioUpdateManyWithoutSexoNestedInput
  }

  export type tbl_sexoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    usuarios?: tbl_usuarioUncheckedUpdateManyWithoutSexoNestedInput
  }

  export type tbl_sexoCreateManyInput = {
    id?: number
    sexo: string
  }

  export type tbl_sexoUpdateManyMutationInput = {
    sexo?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_sexoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_telefoneCreateInput = {
    tipo: string
    numero: string
    tbl_usuario?: tbl_usuarioCreateNestedOneWithoutTbl_telefoneInput
  }

  export type tbl_telefoneUncheckedCreateInput = {
    id?: number
    tipo: string
    numero: string
    id_usuario?: number | null
  }

  export type tbl_telefoneUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    tbl_usuario?: tbl_usuarioUpdateOneWithoutTbl_telefoneNestedInput
  }

  export type tbl_telefoneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tbl_telefoneCreateManyInput = {
    id?: number
    tipo: string
    numero: string
    id_usuario?: number | null
  }

  export type tbl_telefoneUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_telefoneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tbl_tipo_sanguineoCreateInput = {
    tipo: string
    tbl_banco_sangue?: tbl_banco_sangueCreateNestedManyWithoutTbl_tipo_sanguineoInput
    tbl_usuario?: tbl_usuarioCreateNestedManyWithoutTbl_tipo_sanguineoInput
  }

  export type tbl_tipo_sanguineoUncheckedCreateInput = {
    id?: number
    tipo: string
    tbl_banco_sangue?: tbl_banco_sangueUncheckedCreateNestedManyWithoutTbl_tipo_sanguineoInput
    tbl_usuario?: tbl_usuarioUncheckedCreateNestedManyWithoutTbl_tipo_sanguineoInput
  }

  export type tbl_tipo_sanguineoUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    tbl_banco_sangue?: tbl_banco_sangueUpdateManyWithoutTbl_tipo_sanguineoNestedInput
    tbl_usuario?: tbl_usuarioUpdateManyWithoutTbl_tipo_sanguineoNestedInput
  }

  export type tbl_tipo_sanguineoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    tbl_banco_sangue?: tbl_banco_sangueUncheckedUpdateManyWithoutTbl_tipo_sanguineoNestedInput
    tbl_usuario?: tbl_usuarioUncheckedUpdateManyWithoutTbl_tipo_sanguineoNestedInput
  }

  export type tbl_tipo_sanguineoCreateManyInput = {
    id?: number
    tipo: string
  }

  export type tbl_tipo_sanguineoUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_tipo_sanguineoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_usuarioCreateInput = {
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
    agendamentos?: tbl_agendamentoCreateNestedManyWithoutUsuarioInput
    tbl_certificado?: tbl_certificadoCreateNestedManyWithoutTbl_usuarioInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaCreateNestedManyWithoutTbl_usuarioInput
    tbl_telefone?: tbl_telefoneCreateNestedManyWithoutTbl_usuarioInput
    tbl_registro_doacao?: tbl_registro_doacaoCreateNestedManyWithoutTbl_usuarioInput
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoCreateNestedOneWithoutTbl_usuarioInput
    sexo?: tbl_sexoCreateNestedOneWithoutUsuariosInput
  }

  export type tbl_usuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    id_tipo_sanguineo?: number | null
    id_sexo?: number | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
    agendamentos?: tbl_agendamentoUncheckedCreateNestedManyWithoutUsuarioInput
    tbl_certificado?: tbl_certificadoUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_telefone?: tbl_telefoneUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedCreateNestedManyWithoutTbl_usuarioInput
  }

  export type tbl_usuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agendamentos?: tbl_agendamentoUpdateManyWithoutUsuarioNestedInput
    tbl_certificado?: tbl_certificadoUpdateManyWithoutTbl_usuarioNestedInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUpdateManyWithoutTbl_usuarioNestedInput
    tbl_telefone?: tbl_telefoneUpdateManyWithoutTbl_usuarioNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUpdateManyWithoutTbl_usuarioNestedInput
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoUpdateOneWithoutTbl_usuarioNestedInput
    sexo?: tbl_sexoUpdateOneWithoutUsuariosNestedInput
  }

  export type tbl_usuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    id_tipo_sanguineo?: NullableIntFieldUpdateOperationsInput | number | null
    id_sexo?: NullableIntFieldUpdateOperationsInput | number | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agendamentos?: tbl_agendamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    tbl_certificado?: tbl_certificadoUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_telefone?: tbl_telefoneUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedUpdateManyWithoutTbl_usuarioNestedInput
  }

  export type tbl_usuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    id_tipo_sanguineo?: number | null
    id_sexo?: number | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
  }

  export type tbl_usuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_usuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    id_tipo_sanguineo?: NullableIntFieldUpdateOperationsInput | number | null
    id_sexo?: NullableIntFieldUpdateOperationsInput | number | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_recuperacao_senhaCreateInput = {
    codigo: string
    criado_em?: Date | string | null
    usado?: boolean | null
    tbl_usuario: tbl_usuarioCreateNestedOneWithoutTbl_recuperacao_senhaInput
  }

  export type tbl_recuperacao_senhaUncheckedCreateInput = {
    id?: number
    id_usuario: number
    codigo: string
    criado_em?: Date | string | null
    usado?: boolean | null
  }

  export type tbl_recuperacao_senhaUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tbl_usuario?: tbl_usuarioUpdateOneRequiredWithoutTbl_recuperacao_senhaNestedInput
  }

  export type tbl_recuperacao_senhaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_recuperacao_senhaCreateManyInput = {
    id?: number
    id_usuario: number
    codigo: string
    criado_em?: Date | string | null
    usado?: boolean | null
  }

  export type tbl_recuperacao_senhaUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_recuperacao_senhaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_registro_doacaoCreateInput = {
    data_doacao: Date | string
    local_doacao: string
    observacao?: string | null
    foto_comprovante?: string | null
    data_registro?: Date | string | null
    tbl_agendamento: tbl_agendamentoCreateNestedOneWithoutTbl_registro_doacaoInput
    tbl_usuario: tbl_usuarioCreateNestedOneWithoutTbl_registro_doacaoInput
    tbl_hospital: tbl_hospitalCreateNestedOneWithoutTbl_registro_doacaoInput
  }

  export type tbl_registro_doacaoUncheckedCreateInput = {
    id?: number
    id_agendamento: number
    id_usuario: number
    id_hospital: number
    data_doacao: Date | string
    local_doacao: string
    observacao?: string | null
    foto_comprovante?: string | null
    data_registro?: Date | string | null
  }

  export type tbl_registro_doacaoUpdateInput = {
    data_doacao?: DateTimeFieldUpdateOperationsInput | Date | string
    local_doacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_comprovante?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tbl_agendamento?: tbl_agendamentoUpdateOneRequiredWithoutTbl_registro_doacaoNestedInput
    tbl_usuario?: tbl_usuarioUpdateOneRequiredWithoutTbl_registro_doacaoNestedInput
    tbl_hospital?: tbl_hospitalUpdateOneRequiredWithoutTbl_registro_doacaoNestedInput
  }

  export type tbl_registro_doacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_agendamento?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_hospital?: IntFieldUpdateOperationsInput | number
    data_doacao?: DateTimeFieldUpdateOperationsInput | Date | string
    local_doacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_comprovante?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_registro_doacaoCreateManyInput = {
    id?: number
    id_agendamento: number
    id_usuario: number
    id_hospital: number
    data_doacao: Date | string
    local_doacao: string
    observacao?: string | null
    foto_comprovante?: string | null
    data_registro?: Date | string | null
  }

  export type tbl_registro_doacaoUpdateManyMutationInput = {
    data_doacao?: DateTimeFieldUpdateOperationsInput | Date | string
    local_doacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_comprovante?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_registro_doacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_agendamento?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_hospital?: IntFieldUpdateOperationsInput | number
    data_doacao?: DateTimeFieldUpdateOperationsInput | Date | string
    local_doacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_comprovante?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Enumtbl_agendamento_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.tbl_agendamento_status | Enumtbl_agendamento_statusFieldRefInput<$PrismaModel>
    in?: $Enums.tbl_agendamento_status[]
    notIn?: $Enums.tbl_agendamento_status[]
    not?: NestedEnumtbl_agendamento_statusFilter<$PrismaModel> | $Enums.tbl_agendamento_status
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Tbl_usuarioNullableScalarRelationFilter = {
    is?: tbl_usuarioWhereInput | null
    isNot?: tbl_usuarioWhereInput | null
  }

  export type Tbl_doacaoNullableScalarRelationFilter = {
    is?: tbl_doacaoWhereInput | null
    isNot?: tbl_doacaoWhereInput | null
  }

  export type Tbl_hospitalNullableScalarRelationFilter = {
    is?: tbl_hospitalWhereInput | null
    isNot?: tbl_hospitalWhereInput | null
  }

  export type Tbl_registro_doacaoNullableScalarRelationFilter = {
    is?: tbl_registro_doacaoWhereInput | null
    isNot?: tbl_registro_doacaoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tbl_agendamentoCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    data?: SortOrder
    hora?: SortOrder
    id_usuario?: SortOrder
    id_doacao?: SortOrder
    id_hospital?: SortOrder
  }

  export type tbl_agendamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    id_doacao?: SortOrder
    id_hospital?: SortOrder
  }

  export type tbl_agendamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    data?: SortOrder
    hora?: SortOrder
    id_usuario?: SortOrder
    id_doacao?: SortOrder
    id_hospital?: SortOrder
  }

  export type tbl_agendamentoMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    data?: SortOrder
    hora?: SortOrder
    id_usuario?: SortOrder
    id_doacao?: SortOrder
    id_hospital?: SortOrder
  }

  export type tbl_agendamentoSumOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    id_doacao?: SortOrder
    id_hospital?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type Enumtbl_agendamento_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tbl_agendamento_status | Enumtbl_agendamento_statusFieldRefInput<$PrismaModel>
    in?: $Enums.tbl_agendamento_status[]
    notIn?: $Enums.tbl_agendamento_status[]
    not?: NestedEnumtbl_agendamento_statusWithAggregatesFilter<$PrismaModel> | $Enums.tbl_agendamento_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtbl_agendamento_statusFilter<$PrismaModel>
    _max?: NestedEnumtbl_agendamento_statusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type Tbl_hospitalScalarRelationFilter = {
    is?: tbl_hospitalWhereInput
    isNot?: tbl_hospitalWhereInput
  }

  export type Tbl_tipo_sanguineoScalarRelationFilter = {
    is?: tbl_tipo_sanguineoWhereInput
    isNot?: tbl_tipo_sanguineoWhereInput
  }

  export type tbl_banco_sangueCountOrderByAggregateInput = {
    id?: SortOrder
    id_hospital?: SortOrder
    id_tipo_sanguineo?: SortOrder
    quantidade?: SortOrder
  }

  export type tbl_banco_sangueAvgOrderByAggregateInput = {
    id?: SortOrder
    id_hospital?: SortOrder
    id_tipo_sanguineo?: SortOrder
    quantidade?: SortOrder
  }

  export type tbl_banco_sangueMaxOrderByAggregateInput = {
    id?: SortOrder
    id_hospital?: SortOrder
    id_tipo_sanguineo?: SortOrder
    quantidade?: SortOrder
  }

  export type tbl_banco_sangueMinOrderByAggregateInput = {
    id?: SortOrder
    id_hospital?: SortOrder
    id_tipo_sanguineo?: SortOrder
    quantidade?: SortOrder
  }

  export type tbl_banco_sangueSumOrderByAggregateInput = {
    id?: SortOrder
    id_hospital?: SortOrder
    id_tipo_sanguineo?: SortOrder
    quantidade?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type tbl_certificadoOrderByRelevanceInput = {
    fields: tbl_certificadoOrderByRelevanceFieldEnum | tbl_certificadoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_certificadoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    organizacao?: SortOrder
    data_emissao?: SortOrder
    id_usuario?: SortOrder
  }

  export type tbl_certificadoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
  }

  export type tbl_certificadoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    organizacao?: SortOrder
    data_emissao?: SortOrder
    id_usuario?: SortOrder
  }

  export type tbl_certificadoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    organizacao?: SortOrder
    data_emissao?: SortOrder
    id_usuario?: SortOrder
  }

  export type tbl_certificadoSumOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type Tbl_agendamentoListRelationFilter = {
    every?: tbl_agendamentoWhereInput
    some?: tbl_agendamentoWhereInput
    none?: tbl_agendamentoWhereInput
  }

  export type tbl_agendamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_doacaoOrderByRelevanceInput = {
    fields: tbl_doacaoOrderByRelevanceFieldEnum | tbl_doacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_doacaoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    observacao?: SortOrder
    foto?: SortOrder
  }

  export type tbl_doacaoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tbl_doacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    observacao?: SortOrder
    foto?: SortOrder
  }

  export type tbl_doacaoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    observacao?: SortOrder
    foto?: SortOrder
  }

  export type tbl_doacaoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type Tbl_banco_sangueListRelationFilter = {
    every?: tbl_banco_sangueWhereInput
    some?: tbl_banco_sangueWhereInput
    none?: tbl_banco_sangueWhereInput
  }

  export type Tbl_registro_doacaoListRelationFilter = {
    every?: tbl_registro_doacaoWhereInput
    some?: tbl_registro_doacaoWhereInput
    none?: tbl_registro_doacaoWhereInput
  }

  export type tbl_banco_sangueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_registro_doacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_hospitalOrderByRelevanceInput = {
    fields: tbl_hospitalOrderByRelevanceFieldEnum | tbl_hospitalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_hospitalCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cnpj?: SortOrder
    crm?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
    capacidade_maxima?: SortOrder
    convenios?: SortOrder
    horario_abertura?: SortOrder
    horario_fechamento?: SortOrder
    foto?: SortOrder
    complemento?: SortOrder
  }

  export type tbl_hospitalAvgOrderByAggregateInput = {
    id?: SortOrder
    capacidade_maxima?: SortOrder
  }

  export type tbl_hospitalMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cnpj?: SortOrder
    crm?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
    capacidade_maxima?: SortOrder
    convenios?: SortOrder
    horario_abertura?: SortOrder
    horario_fechamento?: SortOrder
    foto?: SortOrder
    complemento?: SortOrder
  }

  export type tbl_hospitalMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cnpj?: SortOrder
    crm?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
    capacidade_maxima?: SortOrder
    convenios?: SortOrder
    horario_abertura?: SortOrder
    horario_fechamento?: SortOrder
    foto?: SortOrder
    complemento?: SortOrder
  }

  export type tbl_hospitalSumOrderByAggregateInput = {
    id?: SortOrder
    capacidade_maxima?: SortOrder
  }

  export type Tbl_usuarioListRelationFilter = {
    every?: tbl_usuarioWhereInput
    some?: tbl_usuarioWhereInput
    none?: tbl_usuarioWhereInput
  }

  export type tbl_usuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_sexoOrderByRelevanceInput = {
    fields: tbl_sexoOrderByRelevanceFieldEnum | tbl_sexoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_sexoCountOrderByAggregateInput = {
    id?: SortOrder
    sexo?: SortOrder
  }

  export type tbl_sexoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tbl_sexoMaxOrderByAggregateInput = {
    id?: SortOrder
    sexo?: SortOrder
  }

  export type tbl_sexoMinOrderByAggregateInput = {
    id?: SortOrder
    sexo?: SortOrder
  }

  export type tbl_sexoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tbl_telefoneOrderByRelevanceInput = {
    fields: tbl_telefoneOrderByRelevanceFieldEnum | tbl_telefoneOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_telefoneCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    numero?: SortOrder
    id_usuario?: SortOrder
  }

  export type tbl_telefoneAvgOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
  }

  export type tbl_telefoneMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    numero?: SortOrder
    id_usuario?: SortOrder
  }

  export type tbl_telefoneMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    numero?: SortOrder
    id_usuario?: SortOrder
  }

  export type tbl_telefoneSumOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
  }

  export type tbl_tipo_sanguineoOrderByRelevanceInput = {
    fields: tbl_tipo_sanguineoOrderByRelevanceFieldEnum | tbl_tipo_sanguineoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_tipo_sanguineoCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
  }

  export type tbl_tipo_sanguineoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tbl_tipo_sanguineoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
  }

  export type tbl_tipo_sanguineoMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
  }

  export type tbl_tipo_sanguineoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Tbl_certificadoListRelationFilter = {
    every?: tbl_certificadoWhereInput
    some?: tbl_certificadoWhereInput
    none?: tbl_certificadoWhereInput
  }

  export type Tbl_recuperacao_senhaListRelationFilter = {
    every?: tbl_recuperacao_senhaWhereInput
    some?: tbl_recuperacao_senhaWhereInput
    none?: tbl_recuperacao_senhaWhereInput
  }

  export type Tbl_telefoneListRelationFilter = {
    every?: tbl_telefoneWhereInput
    some?: tbl_telefoneWhereInput
    none?: tbl_telefoneWhereInput
  }

  export type Tbl_tipo_sanguineoNullableScalarRelationFilter = {
    is?: tbl_tipo_sanguineoWhereInput | null
    isNot?: tbl_tipo_sanguineoWhereInput | null
  }

  export type Tbl_sexoNullableScalarRelationFilter = {
    is?: tbl_sexoWhereInput | null
    isNot?: tbl_sexoWhereInput | null
  }

  export type tbl_certificadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_recuperacao_senhaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_telefoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_usuarioOrderByRelevanceInput = {
    fields: tbl_usuarioOrderByRelevanceFieldEnum | tbl_usuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    cpf?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    bairro?: SortOrder
    localidade?: SortOrder
    uf?: SortOrder
    numero?: SortOrder
    data_nascimento?: SortOrder
    foto_perfil?: SortOrder
    id_tipo_sanguineo?: SortOrder
    id_sexo?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
  }

  export type tbl_usuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    id_tipo_sanguineo?: SortOrder
    id_sexo?: SortOrder
  }

  export type tbl_usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    cpf?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    bairro?: SortOrder
    localidade?: SortOrder
    uf?: SortOrder
    numero?: SortOrder
    data_nascimento?: SortOrder
    foto_perfil?: SortOrder
    id_tipo_sanguineo?: SortOrder
    id_sexo?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
  }

  export type tbl_usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    cpf?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    bairro?: SortOrder
    localidade?: SortOrder
    uf?: SortOrder
    numero?: SortOrder
    data_nascimento?: SortOrder
    foto_perfil?: SortOrder
    id_tipo_sanguineo?: SortOrder
    id_sexo?: SortOrder
    data_criacao?: SortOrder
    data_atualizacao?: SortOrder
  }

  export type tbl_usuarioSumOrderByAggregateInput = {
    id?: SortOrder
    id_tipo_sanguineo?: SortOrder
    id_sexo?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Tbl_usuarioScalarRelationFilter = {
    is?: tbl_usuarioWhereInput
    isNot?: tbl_usuarioWhereInput
  }

  export type tbl_recuperacao_senhaOrderByRelevanceInput = {
    fields: tbl_recuperacao_senhaOrderByRelevanceFieldEnum | tbl_recuperacao_senhaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_recuperacao_senhaCountOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    codigo?: SortOrder
    criado_em?: SortOrder
    usado?: SortOrder
  }

  export type tbl_recuperacao_senhaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
  }

  export type tbl_recuperacao_senhaMaxOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    codigo?: SortOrder
    criado_em?: SortOrder
    usado?: SortOrder
  }

  export type tbl_recuperacao_senhaMinOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    codigo?: SortOrder
    criado_em?: SortOrder
    usado?: SortOrder
  }

  export type tbl_recuperacao_senhaSumOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Tbl_agendamentoScalarRelationFilter = {
    is?: tbl_agendamentoWhereInput
    isNot?: tbl_agendamentoWhereInput
  }

  export type tbl_registro_doacaoOrderByRelevanceInput = {
    fields: tbl_registro_doacaoOrderByRelevanceFieldEnum | tbl_registro_doacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tbl_registro_doacaoCountOrderByAggregateInput = {
    id?: SortOrder
    id_agendamento?: SortOrder
    id_usuario?: SortOrder
    id_hospital?: SortOrder
    data_doacao?: SortOrder
    local_doacao?: SortOrder
    observacao?: SortOrder
    foto_comprovante?: SortOrder
    data_registro?: SortOrder
  }

  export type tbl_registro_doacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_agendamento?: SortOrder
    id_usuario?: SortOrder
    id_hospital?: SortOrder
  }

  export type tbl_registro_doacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_agendamento?: SortOrder
    id_usuario?: SortOrder
    id_hospital?: SortOrder
    data_doacao?: SortOrder
    local_doacao?: SortOrder
    observacao?: SortOrder
    foto_comprovante?: SortOrder
    data_registro?: SortOrder
  }

  export type tbl_registro_doacaoMinOrderByAggregateInput = {
    id?: SortOrder
    id_agendamento?: SortOrder
    id_usuario?: SortOrder
    id_hospital?: SortOrder
    data_doacao?: SortOrder
    local_doacao?: SortOrder
    observacao?: SortOrder
    foto_comprovante?: SortOrder
    data_registro?: SortOrder
  }

  export type tbl_registro_doacaoSumOrderByAggregateInput = {
    id?: SortOrder
    id_agendamento?: SortOrder
    id_usuario?: SortOrder
    id_hospital?: SortOrder
  }

  export type tbl_usuarioCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<tbl_usuarioCreateWithoutAgendamentosInput, tbl_usuarioUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutAgendamentosInput
    connect?: tbl_usuarioWhereUniqueInput
  }

  export type tbl_doacaoCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<tbl_doacaoCreateWithoutAgendamentosInput, tbl_doacaoUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: tbl_doacaoCreateOrConnectWithoutAgendamentosInput
    connect?: tbl_doacaoWhereUniqueInput
  }

  export type tbl_hospitalCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<tbl_hospitalCreateWithoutAgendamentosInput, tbl_hospitalUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: tbl_hospitalCreateOrConnectWithoutAgendamentosInput
    connect?: tbl_hospitalWhereUniqueInput
  }

  export type tbl_registro_doacaoCreateNestedOneWithoutTbl_agendamentoInput = {
    create?: XOR<tbl_registro_doacaoCreateWithoutTbl_agendamentoInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_agendamentoInput>
    connectOrCreate?: tbl_registro_doacaoCreateOrConnectWithoutTbl_agendamentoInput
    connect?: tbl_registro_doacaoWhereUniqueInput
  }

  export type tbl_registro_doacaoUncheckedCreateNestedOneWithoutTbl_agendamentoInput = {
    create?: XOR<tbl_registro_doacaoCreateWithoutTbl_agendamentoInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_agendamentoInput>
    connectOrCreate?: tbl_registro_doacaoCreateOrConnectWithoutTbl_agendamentoInput
    connect?: tbl_registro_doacaoWhereUniqueInput
  }

  export type Enumtbl_agendamento_statusFieldUpdateOperationsInput = {
    set?: $Enums.tbl_agendamento_status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tbl_usuarioUpdateOneWithoutAgendamentosNestedInput = {
    create?: XOR<tbl_usuarioCreateWithoutAgendamentosInput, tbl_usuarioUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutAgendamentosInput
    upsert?: tbl_usuarioUpsertWithoutAgendamentosInput
    disconnect?: tbl_usuarioWhereInput | boolean
    delete?: tbl_usuarioWhereInput | boolean
    connect?: tbl_usuarioWhereUniqueInput
    update?: XOR<XOR<tbl_usuarioUpdateToOneWithWhereWithoutAgendamentosInput, tbl_usuarioUpdateWithoutAgendamentosInput>, tbl_usuarioUncheckedUpdateWithoutAgendamentosInput>
  }

  export type tbl_doacaoUpdateOneWithoutAgendamentosNestedInput = {
    create?: XOR<tbl_doacaoCreateWithoutAgendamentosInput, tbl_doacaoUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: tbl_doacaoCreateOrConnectWithoutAgendamentosInput
    upsert?: tbl_doacaoUpsertWithoutAgendamentosInput
    disconnect?: tbl_doacaoWhereInput | boolean
    delete?: tbl_doacaoWhereInput | boolean
    connect?: tbl_doacaoWhereUniqueInput
    update?: XOR<XOR<tbl_doacaoUpdateToOneWithWhereWithoutAgendamentosInput, tbl_doacaoUpdateWithoutAgendamentosInput>, tbl_doacaoUncheckedUpdateWithoutAgendamentosInput>
  }

  export type tbl_hospitalUpdateOneWithoutAgendamentosNestedInput = {
    create?: XOR<tbl_hospitalCreateWithoutAgendamentosInput, tbl_hospitalUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: tbl_hospitalCreateOrConnectWithoutAgendamentosInput
    upsert?: tbl_hospitalUpsertWithoutAgendamentosInput
    disconnect?: tbl_hospitalWhereInput | boolean
    delete?: tbl_hospitalWhereInput | boolean
    connect?: tbl_hospitalWhereUniqueInput
    update?: XOR<XOR<tbl_hospitalUpdateToOneWithWhereWithoutAgendamentosInput, tbl_hospitalUpdateWithoutAgendamentosInput>, tbl_hospitalUncheckedUpdateWithoutAgendamentosInput>
  }

  export type tbl_registro_doacaoUpdateOneWithoutTbl_agendamentoNestedInput = {
    create?: XOR<tbl_registro_doacaoCreateWithoutTbl_agendamentoInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_agendamentoInput>
    connectOrCreate?: tbl_registro_doacaoCreateOrConnectWithoutTbl_agendamentoInput
    upsert?: tbl_registro_doacaoUpsertWithoutTbl_agendamentoInput
    disconnect?: tbl_registro_doacaoWhereInput | boolean
    delete?: tbl_registro_doacaoWhereInput | boolean
    connect?: tbl_registro_doacaoWhereUniqueInput
    update?: XOR<XOR<tbl_registro_doacaoUpdateToOneWithWhereWithoutTbl_agendamentoInput, tbl_registro_doacaoUpdateWithoutTbl_agendamentoInput>, tbl_registro_doacaoUncheckedUpdateWithoutTbl_agendamentoInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tbl_registro_doacaoUncheckedUpdateOneWithoutTbl_agendamentoNestedInput = {
    create?: XOR<tbl_registro_doacaoCreateWithoutTbl_agendamentoInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_agendamentoInput>
    connectOrCreate?: tbl_registro_doacaoCreateOrConnectWithoutTbl_agendamentoInput
    upsert?: tbl_registro_doacaoUpsertWithoutTbl_agendamentoInput
    disconnect?: tbl_registro_doacaoWhereInput | boolean
    delete?: tbl_registro_doacaoWhereInput | boolean
    connect?: tbl_registro_doacaoWhereUniqueInput
    update?: XOR<XOR<tbl_registro_doacaoUpdateToOneWithWhereWithoutTbl_agendamentoInput, tbl_registro_doacaoUpdateWithoutTbl_agendamentoInput>, tbl_registro_doacaoUncheckedUpdateWithoutTbl_agendamentoInput>
  }

  export type tbl_hospitalCreateNestedOneWithoutTbl_banco_sangueInput = {
    create?: XOR<tbl_hospitalCreateWithoutTbl_banco_sangueInput, tbl_hospitalUncheckedCreateWithoutTbl_banco_sangueInput>
    connectOrCreate?: tbl_hospitalCreateOrConnectWithoutTbl_banco_sangueInput
    connect?: tbl_hospitalWhereUniqueInput
  }

  export type tbl_tipo_sanguineoCreateNestedOneWithoutTbl_banco_sangueInput = {
    create?: XOR<tbl_tipo_sanguineoCreateWithoutTbl_banco_sangueInput, tbl_tipo_sanguineoUncheckedCreateWithoutTbl_banco_sangueInput>
    connectOrCreate?: tbl_tipo_sanguineoCreateOrConnectWithoutTbl_banco_sangueInput
    connect?: tbl_tipo_sanguineoWhereUniqueInput
  }

  export type tbl_hospitalUpdateOneRequiredWithoutTbl_banco_sangueNestedInput = {
    create?: XOR<tbl_hospitalCreateWithoutTbl_banco_sangueInput, tbl_hospitalUncheckedCreateWithoutTbl_banco_sangueInput>
    connectOrCreate?: tbl_hospitalCreateOrConnectWithoutTbl_banco_sangueInput
    upsert?: tbl_hospitalUpsertWithoutTbl_banco_sangueInput
    connect?: tbl_hospitalWhereUniqueInput
    update?: XOR<XOR<tbl_hospitalUpdateToOneWithWhereWithoutTbl_banco_sangueInput, tbl_hospitalUpdateWithoutTbl_banco_sangueInput>, tbl_hospitalUncheckedUpdateWithoutTbl_banco_sangueInput>
  }

  export type tbl_tipo_sanguineoUpdateOneRequiredWithoutTbl_banco_sangueNestedInput = {
    create?: XOR<tbl_tipo_sanguineoCreateWithoutTbl_banco_sangueInput, tbl_tipo_sanguineoUncheckedCreateWithoutTbl_banco_sangueInput>
    connectOrCreate?: tbl_tipo_sanguineoCreateOrConnectWithoutTbl_banco_sangueInput
    upsert?: tbl_tipo_sanguineoUpsertWithoutTbl_banco_sangueInput
    connect?: tbl_tipo_sanguineoWhereUniqueInput
    update?: XOR<XOR<tbl_tipo_sanguineoUpdateToOneWithWhereWithoutTbl_banco_sangueInput, tbl_tipo_sanguineoUpdateWithoutTbl_banco_sangueInput>, tbl_tipo_sanguineoUncheckedUpdateWithoutTbl_banco_sangueInput>
  }

  export type tbl_usuarioCreateNestedOneWithoutTbl_certificadoInput = {
    create?: XOR<tbl_usuarioCreateWithoutTbl_certificadoInput, tbl_usuarioUncheckedCreateWithoutTbl_certificadoInput>
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutTbl_certificadoInput
    connect?: tbl_usuarioWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type tbl_usuarioUpdateOneWithoutTbl_certificadoNestedInput = {
    create?: XOR<tbl_usuarioCreateWithoutTbl_certificadoInput, tbl_usuarioUncheckedCreateWithoutTbl_certificadoInput>
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutTbl_certificadoInput
    upsert?: tbl_usuarioUpsertWithoutTbl_certificadoInput
    disconnect?: tbl_usuarioWhereInput | boolean
    delete?: tbl_usuarioWhereInput | boolean
    connect?: tbl_usuarioWhereUniqueInput
    update?: XOR<XOR<tbl_usuarioUpdateToOneWithWhereWithoutTbl_certificadoInput, tbl_usuarioUpdateWithoutTbl_certificadoInput>, tbl_usuarioUncheckedUpdateWithoutTbl_certificadoInput>
  }

  export type tbl_agendamentoCreateNestedManyWithoutDoacaoInput = {
    create?: XOR<tbl_agendamentoCreateWithoutDoacaoInput, tbl_agendamentoUncheckedCreateWithoutDoacaoInput> | tbl_agendamentoCreateWithoutDoacaoInput[] | tbl_agendamentoUncheckedCreateWithoutDoacaoInput[]
    connectOrCreate?: tbl_agendamentoCreateOrConnectWithoutDoacaoInput | tbl_agendamentoCreateOrConnectWithoutDoacaoInput[]
    createMany?: tbl_agendamentoCreateManyDoacaoInputEnvelope
    connect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
  }

  export type tbl_agendamentoUncheckedCreateNestedManyWithoutDoacaoInput = {
    create?: XOR<tbl_agendamentoCreateWithoutDoacaoInput, tbl_agendamentoUncheckedCreateWithoutDoacaoInput> | tbl_agendamentoCreateWithoutDoacaoInput[] | tbl_agendamentoUncheckedCreateWithoutDoacaoInput[]
    connectOrCreate?: tbl_agendamentoCreateOrConnectWithoutDoacaoInput | tbl_agendamentoCreateOrConnectWithoutDoacaoInput[]
    createMany?: tbl_agendamentoCreateManyDoacaoInputEnvelope
    connect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type tbl_agendamentoUpdateManyWithoutDoacaoNestedInput = {
    create?: XOR<tbl_agendamentoCreateWithoutDoacaoInput, tbl_agendamentoUncheckedCreateWithoutDoacaoInput> | tbl_agendamentoCreateWithoutDoacaoInput[] | tbl_agendamentoUncheckedCreateWithoutDoacaoInput[]
    connectOrCreate?: tbl_agendamentoCreateOrConnectWithoutDoacaoInput | tbl_agendamentoCreateOrConnectWithoutDoacaoInput[]
    upsert?: tbl_agendamentoUpsertWithWhereUniqueWithoutDoacaoInput | tbl_agendamentoUpsertWithWhereUniqueWithoutDoacaoInput[]
    createMany?: tbl_agendamentoCreateManyDoacaoInputEnvelope
    set?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    disconnect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    delete?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    connect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    update?: tbl_agendamentoUpdateWithWhereUniqueWithoutDoacaoInput | tbl_agendamentoUpdateWithWhereUniqueWithoutDoacaoInput[]
    updateMany?: tbl_agendamentoUpdateManyWithWhereWithoutDoacaoInput | tbl_agendamentoUpdateManyWithWhereWithoutDoacaoInput[]
    deleteMany?: tbl_agendamentoScalarWhereInput | tbl_agendamentoScalarWhereInput[]
  }

  export type tbl_agendamentoUncheckedUpdateManyWithoutDoacaoNestedInput = {
    create?: XOR<tbl_agendamentoCreateWithoutDoacaoInput, tbl_agendamentoUncheckedCreateWithoutDoacaoInput> | tbl_agendamentoCreateWithoutDoacaoInput[] | tbl_agendamentoUncheckedCreateWithoutDoacaoInput[]
    connectOrCreate?: tbl_agendamentoCreateOrConnectWithoutDoacaoInput | tbl_agendamentoCreateOrConnectWithoutDoacaoInput[]
    upsert?: tbl_agendamentoUpsertWithWhereUniqueWithoutDoacaoInput | tbl_agendamentoUpsertWithWhereUniqueWithoutDoacaoInput[]
    createMany?: tbl_agendamentoCreateManyDoacaoInputEnvelope
    set?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    disconnect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    delete?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    connect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    update?: tbl_agendamentoUpdateWithWhereUniqueWithoutDoacaoInput | tbl_agendamentoUpdateWithWhereUniqueWithoutDoacaoInput[]
    updateMany?: tbl_agendamentoUpdateManyWithWhereWithoutDoacaoInput | tbl_agendamentoUpdateManyWithWhereWithoutDoacaoInput[]
    deleteMany?: tbl_agendamentoScalarWhereInput | tbl_agendamentoScalarWhereInput[]
  }

  export type tbl_agendamentoCreateNestedManyWithoutHospitalInput = {
    create?: XOR<tbl_agendamentoCreateWithoutHospitalInput, tbl_agendamentoUncheckedCreateWithoutHospitalInput> | tbl_agendamentoCreateWithoutHospitalInput[] | tbl_agendamentoUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: tbl_agendamentoCreateOrConnectWithoutHospitalInput | tbl_agendamentoCreateOrConnectWithoutHospitalInput[]
    createMany?: tbl_agendamentoCreateManyHospitalInputEnvelope
    connect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
  }

  export type tbl_banco_sangueCreateNestedManyWithoutTbl_hospitalInput = {
    create?: XOR<tbl_banco_sangueCreateWithoutTbl_hospitalInput, tbl_banco_sangueUncheckedCreateWithoutTbl_hospitalInput> | tbl_banco_sangueCreateWithoutTbl_hospitalInput[] | tbl_banco_sangueUncheckedCreateWithoutTbl_hospitalInput[]
    connectOrCreate?: tbl_banco_sangueCreateOrConnectWithoutTbl_hospitalInput | tbl_banco_sangueCreateOrConnectWithoutTbl_hospitalInput[]
    createMany?: tbl_banco_sangueCreateManyTbl_hospitalInputEnvelope
    connect?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
  }

  export type tbl_registro_doacaoCreateNestedManyWithoutTbl_hospitalInput = {
    create?: XOR<tbl_registro_doacaoCreateWithoutTbl_hospitalInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_hospitalInput> | tbl_registro_doacaoCreateWithoutTbl_hospitalInput[] | tbl_registro_doacaoUncheckedCreateWithoutTbl_hospitalInput[]
    connectOrCreate?: tbl_registro_doacaoCreateOrConnectWithoutTbl_hospitalInput | tbl_registro_doacaoCreateOrConnectWithoutTbl_hospitalInput[]
    createMany?: tbl_registro_doacaoCreateManyTbl_hospitalInputEnvelope
    connect?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
  }

  export type tbl_agendamentoUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<tbl_agendamentoCreateWithoutHospitalInput, tbl_agendamentoUncheckedCreateWithoutHospitalInput> | tbl_agendamentoCreateWithoutHospitalInput[] | tbl_agendamentoUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: tbl_agendamentoCreateOrConnectWithoutHospitalInput | tbl_agendamentoCreateOrConnectWithoutHospitalInput[]
    createMany?: tbl_agendamentoCreateManyHospitalInputEnvelope
    connect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
  }

  export type tbl_banco_sangueUncheckedCreateNestedManyWithoutTbl_hospitalInput = {
    create?: XOR<tbl_banco_sangueCreateWithoutTbl_hospitalInput, tbl_banco_sangueUncheckedCreateWithoutTbl_hospitalInput> | tbl_banco_sangueCreateWithoutTbl_hospitalInput[] | tbl_banco_sangueUncheckedCreateWithoutTbl_hospitalInput[]
    connectOrCreate?: tbl_banco_sangueCreateOrConnectWithoutTbl_hospitalInput | tbl_banco_sangueCreateOrConnectWithoutTbl_hospitalInput[]
    createMany?: tbl_banco_sangueCreateManyTbl_hospitalInputEnvelope
    connect?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
  }

  export type tbl_registro_doacaoUncheckedCreateNestedManyWithoutTbl_hospitalInput = {
    create?: XOR<tbl_registro_doacaoCreateWithoutTbl_hospitalInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_hospitalInput> | tbl_registro_doacaoCreateWithoutTbl_hospitalInput[] | tbl_registro_doacaoUncheckedCreateWithoutTbl_hospitalInput[]
    connectOrCreate?: tbl_registro_doacaoCreateOrConnectWithoutTbl_hospitalInput | tbl_registro_doacaoCreateOrConnectWithoutTbl_hospitalInput[]
    createMany?: tbl_registro_doacaoCreateManyTbl_hospitalInputEnvelope
    connect?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
  }

  export type tbl_agendamentoUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<tbl_agendamentoCreateWithoutHospitalInput, tbl_agendamentoUncheckedCreateWithoutHospitalInput> | tbl_agendamentoCreateWithoutHospitalInput[] | tbl_agendamentoUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: tbl_agendamentoCreateOrConnectWithoutHospitalInput | tbl_agendamentoCreateOrConnectWithoutHospitalInput[]
    upsert?: tbl_agendamentoUpsertWithWhereUniqueWithoutHospitalInput | tbl_agendamentoUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: tbl_agendamentoCreateManyHospitalInputEnvelope
    set?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    disconnect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    delete?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    connect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    update?: tbl_agendamentoUpdateWithWhereUniqueWithoutHospitalInput | tbl_agendamentoUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: tbl_agendamentoUpdateManyWithWhereWithoutHospitalInput | tbl_agendamentoUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: tbl_agendamentoScalarWhereInput | tbl_agendamentoScalarWhereInput[]
  }

  export type tbl_banco_sangueUpdateManyWithoutTbl_hospitalNestedInput = {
    create?: XOR<tbl_banco_sangueCreateWithoutTbl_hospitalInput, tbl_banco_sangueUncheckedCreateWithoutTbl_hospitalInput> | tbl_banco_sangueCreateWithoutTbl_hospitalInput[] | tbl_banco_sangueUncheckedCreateWithoutTbl_hospitalInput[]
    connectOrCreate?: tbl_banco_sangueCreateOrConnectWithoutTbl_hospitalInput | tbl_banco_sangueCreateOrConnectWithoutTbl_hospitalInput[]
    upsert?: tbl_banco_sangueUpsertWithWhereUniqueWithoutTbl_hospitalInput | tbl_banco_sangueUpsertWithWhereUniqueWithoutTbl_hospitalInput[]
    createMany?: tbl_banco_sangueCreateManyTbl_hospitalInputEnvelope
    set?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
    disconnect?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
    delete?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
    connect?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
    update?: tbl_banco_sangueUpdateWithWhereUniqueWithoutTbl_hospitalInput | tbl_banco_sangueUpdateWithWhereUniqueWithoutTbl_hospitalInput[]
    updateMany?: tbl_banco_sangueUpdateManyWithWhereWithoutTbl_hospitalInput | tbl_banco_sangueUpdateManyWithWhereWithoutTbl_hospitalInput[]
    deleteMany?: tbl_banco_sangueScalarWhereInput | tbl_banco_sangueScalarWhereInput[]
  }

  export type tbl_registro_doacaoUpdateManyWithoutTbl_hospitalNestedInput = {
    create?: XOR<tbl_registro_doacaoCreateWithoutTbl_hospitalInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_hospitalInput> | tbl_registro_doacaoCreateWithoutTbl_hospitalInput[] | tbl_registro_doacaoUncheckedCreateWithoutTbl_hospitalInput[]
    connectOrCreate?: tbl_registro_doacaoCreateOrConnectWithoutTbl_hospitalInput | tbl_registro_doacaoCreateOrConnectWithoutTbl_hospitalInput[]
    upsert?: tbl_registro_doacaoUpsertWithWhereUniqueWithoutTbl_hospitalInput | tbl_registro_doacaoUpsertWithWhereUniqueWithoutTbl_hospitalInput[]
    createMany?: tbl_registro_doacaoCreateManyTbl_hospitalInputEnvelope
    set?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
    disconnect?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
    delete?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
    connect?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
    update?: tbl_registro_doacaoUpdateWithWhereUniqueWithoutTbl_hospitalInput | tbl_registro_doacaoUpdateWithWhereUniqueWithoutTbl_hospitalInput[]
    updateMany?: tbl_registro_doacaoUpdateManyWithWhereWithoutTbl_hospitalInput | tbl_registro_doacaoUpdateManyWithWhereWithoutTbl_hospitalInput[]
    deleteMany?: tbl_registro_doacaoScalarWhereInput | tbl_registro_doacaoScalarWhereInput[]
  }

  export type tbl_agendamentoUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<tbl_agendamentoCreateWithoutHospitalInput, tbl_agendamentoUncheckedCreateWithoutHospitalInput> | tbl_agendamentoCreateWithoutHospitalInput[] | tbl_agendamentoUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: tbl_agendamentoCreateOrConnectWithoutHospitalInput | tbl_agendamentoCreateOrConnectWithoutHospitalInput[]
    upsert?: tbl_agendamentoUpsertWithWhereUniqueWithoutHospitalInput | tbl_agendamentoUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: tbl_agendamentoCreateManyHospitalInputEnvelope
    set?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    disconnect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    delete?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    connect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    update?: tbl_agendamentoUpdateWithWhereUniqueWithoutHospitalInput | tbl_agendamentoUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: tbl_agendamentoUpdateManyWithWhereWithoutHospitalInput | tbl_agendamentoUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: tbl_agendamentoScalarWhereInput | tbl_agendamentoScalarWhereInput[]
  }

  export type tbl_banco_sangueUncheckedUpdateManyWithoutTbl_hospitalNestedInput = {
    create?: XOR<tbl_banco_sangueCreateWithoutTbl_hospitalInput, tbl_banco_sangueUncheckedCreateWithoutTbl_hospitalInput> | tbl_banco_sangueCreateWithoutTbl_hospitalInput[] | tbl_banco_sangueUncheckedCreateWithoutTbl_hospitalInput[]
    connectOrCreate?: tbl_banco_sangueCreateOrConnectWithoutTbl_hospitalInput | tbl_banco_sangueCreateOrConnectWithoutTbl_hospitalInput[]
    upsert?: tbl_banco_sangueUpsertWithWhereUniqueWithoutTbl_hospitalInput | tbl_banco_sangueUpsertWithWhereUniqueWithoutTbl_hospitalInput[]
    createMany?: tbl_banco_sangueCreateManyTbl_hospitalInputEnvelope
    set?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
    disconnect?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
    delete?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
    connect?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
    update?: tbl_banco_sangueUpdateWithWhereUniqueWithoutTbl_hospitalInput | tbl_banco_sangueUpdateWithWhereUniqueWithoutTbl_hospitalInput[]
    updateMany?: tbl_banco_sangueUpdateManyWithWhereWithoutTbl_hospitalInput | tbl_banco_sangueUpdateManyWithWhereWithoutTbl_hospitalInput[]
    deleteMany?: tbl_banco_sangueScalarWhereInput | tbl_banco_sangueScalarWhereInput[]
  }

  export type tbl_registro_doacaoUncheckedUpdateManyWithoutTbl_hospitalNestedInput = {
    create?: XOR<tbl_registro_doacaoCreateWithoutTbl_hospitalInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_hospitalInput> | tbl_registro_doacaoCreateWithoutTbl_hospitalInput[] | tbl_registro_doacaoUncheckedCreateWithoutTbl_hospitalInput[]
    connectOrCreate?: tbl_registro_doacaoCreateOrConnectWithoutTbl_hospitalInput | tbl_registro_doacaoCreateOrConnectWithoutTbl_hospitalInput[]
    upsert?: tbl_registro_doacaoUpsertWithWhereUniqueWithoutTbl_hospitalInput | tbl_registro_doacaoUpsertWithWhereUniqueWithoutTbl_hospitalInput[]
    createMany?: tbl_registro_doacaoCreateManyTbl_hospitalInputEnvelope
    set?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
    disconnect?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
    delete?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
    connect?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
    update?: tbl_registro_doacaoUpdateWithWhereUniqueWithoutTbl_hospitalInput | tbl_registro_doacaoUpdateWithWhereUniqueWithoutTbl_hospitalInput[]
    updateMany?: tbl_registro_doacaoUpdateManyWithWhereWithoutTbl_hospitalInput | tbl_registro_doacaoUpdateManyWithWhereWithoutTbl_hospitalInput[]
    deleteMany?: tbl_registro_doacaoScalarWhereInput | tbl_registro_doacaoScalarWhereInput[]
  }

  export type tbl_usuarioCreateNestedManyWithoutSexoInput = {
    create?: XOR<tbl_usuarioCreateWithoutSexoInput, tbl_usuarioUncheckedCreateWithoutSexoInput> | tbl_usuarioCreateWithoutSexoInput[] | tbl_usuarioUncheckedCreateWithoutSexoInput[]
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutSexoInput | tbl_usuarioCreateOrConnectWithoutSexoInput[]
    createMany?: tbl_usuarioCreateManySexoInputEnvelope
    connect?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
  }

  export type tbl_usuarioUncheckedCreateNestedManyWithoutSexoInput = {
    create?: XOR<tbl_usuarioCreateWithoutSexoInput, tbl_usuarioUncheckedCreateWithoutSexoInput> | tbl_usuarioCreateWithoutSexoInput[] | tbl_usuarioUncheckedCreateWithoutSexoInput[]
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutSexoInput | tbl_usuarioCreateOrConnectWithoutSexoInput[]
    createMany?: tbl_usuarioCreateManySexoInputEnvelope
    connect?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
  }

  export type tbl_usuarioUpdateManyWithoutSexoNestedInput = {
    create?: XOR<tbl_usuarioCreateWithoutSexoInput, tbl_usuarioUncheckedCreateWithoutSexoInput> | tbl_usuarioCreateWithoutSexoInput[] | tbl_usuarioUncheckedCreateWithoutSexoInput[]
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutSexoInput | tbl_usuarioCreateOrConnectWithoutSexoInput[]
    upsert?: tbl_usuarioUpsertWithWhereUniqueWithoutSexoInput | tbl_usuarioUpsertWithWhereUniqueWithoutSexoInput[]
    createMany?: tbl_usuarioCreateManySexoInputEnvelope
    set?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
    disconnect?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
    delete?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
    connect?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
    update?: tbl_usuarioUpdateWithWhereUniqueWithoutSexoInput | tbl_usuarioUpdateWithWhereUniqueWithoutSexoInput[]
    updateMany?: tbl_usuarioUpdateManyWithWhereWithoutSexoInput | tbl_usuarioUpdateManyWithWhereWithoutSexoInput[]
    deleteMany?: tbl_usuarioScalarWhereInput | tbl_usuarioScalarWhereInput[]
  }

  export type tbl_usuarioUncheckedUpdateManyWithoutSexoNestedInput = {
    create?: XOR<tbl_usuarioCreateWithoutSexoInput, tbl_usuarioUncheckedCreateWithoutSexoInput> | tbl_usuarioCreateWithoutSexoInput[] | tbl_usuarioUncheckedCreateWithoutSexoInput[]
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutSexoInput | tbl_usuarioCreateOrConnectWithoutSexoInput[]
    upsert?: tbl_usuarioUpsertWithWhereUniqueWithoutSexoInput | tbl_usuarioUpsertWithWhereUniqueWithoutSexoInput[]
    createMany?: tbl_usuarioCreateManySexoInputEnvelope
    set?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
    disconnect?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
    delete?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
    connect?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
    update?: tbl_usuarioUpdateWithWhereUniqueWithoutSexoInput | tbl_usuarioUpdateWithWhereUniqueWithoutSexoInput[]
    updateMany?: tbl_usuarioUpdateManyWithWhereWithoutSexoInput | tbl_usuarioUpdateManyWithWhereWithoutSexoInput[]
    deleteMany?: tbl_usuarioScalarWhereInput | tbl_usuarioScalarWhereInput[]
  }

  export type tbl_usuarioCreateNestedOneWithoutTbl_telefoneInput = {
    create?: XOR<tbl_usuarioCreateWithoutTbl_telefoneInput, tbl_usuarioUncheckedCreateWithoutTbl_telefoneInput>
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutTbl_telefoneInput
    connect?: tbl_usuarioWhereUniqueInput
  }

  export type tbl_usuarioUpdateOneWithoutTbl_telefoneNestedInput = {
    create?: XOR<tbl_usuarioCreateWithoutTbl_telefoneInput, tbl_usuarioUncheckedCreateWithoutTbl_telefoneInput>
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutTbl_telefoneInput
    upsert?: tbl_usuarioUpsertWithoutTbl_telefoneInput
    disconnect?: tbl_usuarioWhereInput | boolean
    delete?: tbl_usuarioWhereInput | boolean
    connect?: tbl_usuarioWhereUniqueInput
    update?: XOR<XOR<tbl_usuarioUpdateToOneWithWhereWithoutTbl_telefoneInput, tbl_usuarioUpdateWithoutTbl_telefoneInput>, tbl_usuarioUncheckedUpdateWithoutTbl_telefoneInput>
  }

  export type tbl_banco_sangueCreateNestedManyWithoutTbl_tipo_sanguineoInput = {
    create?: XOR<tbl_banco_sangueCreateWithoutTbl_tipo_sanguineoInput, tbl_banco_sangueUncheckedCreateWithoutTbl_tipo_sanguineoInput> | tbl_banco_sangueCreateWithoutTbl_tipo_sanguineoInput[] | tbl_banco_sangueUncheckedCreateWithoutTbl_tipo_sanguineoInput[]
    connectOrCreate?: tbl_banco_sangueCreateOrConnectWithoutTbl_tipo_sanguineoInput | tbl_banco_sangueCreateOrConnectWithoutTbl_tipo_sanguineoInput[]
    createMany?: tbl_banco_sangueCreateManyTbl_tipo_sanguineoInputEnvelope
    connect?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
  }

  export type tbl_usuarioCreateNestedManyWithoutTbl_tipo_sanguineoInput = {
    create?: XOR<tbl_usuarioCreateWithoutTbl_tipo_sanguineoInput, tbl_usuarioUncheckedCreateWithoutTbl_tipo_sanguineoInput> | tbl_usuarioCreateWithoutTbl_tipo_sanguineoInput[] | tbl_usuarioUncheckedCreateWithoutTbl_tipo_sanguineoInput[]
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutTbl_tipo_sanguineoInput | tbl_usuarioCreateOrConnectWithoutTbl_tipo_sanguineoInput[]
    createMany?: tbl_usuarioCreateManyTbl_tipo_sanguineoInputEnvelope
    connect?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
  }

  export type tbl_banco_sangueUncheckedCreateNestedManyWithoutTbl_tipo_sanguineoInput = {
    create?: XOR<tbl_banco_sangueCreateWithoutTbl_tipo_sanguineoInput, tbl_banco_sangueUncheckedCreateWithoutTbl_tipo_sanguineoInput> | tbl_banco_sangueCreateWithoutTbl_tipo_sanguineoInput[] | tbl_banco_sangueUncheckedCreateWithoutTbl_tipo_sanguineoInput[]
    connectOrCreate?: tbl_banco_sangueCreateOrConnectWithoutTbl_tipo_sanguineoInput | tbl_banco_sangueCreateOrConnectWithoutTbl_tipo_sanguineoInput[]
    createMany?: tbl_banco_sangueCreateManyTbl_tipo_sanguineoInputEnvelope
    connect?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
  }

  export type tbl_usuarioUncheckedCreateNestedManyWithoutTbl_tipo_sanguineoInput = {
    create?: XOR<tbl_usuarioCreateWithoutTbl_tipo_sanguineoInput, tbl_usuarioUncheckedCreateWithoutTbl_tipo_sanguineoInput> | tbl_usuarioCreateWithoutTbl_tipo_sanguineoInput[] | tbl_usuarioUncheckedCreateWithoutTbl_tipo_sanguineoInput[]
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutTbl_tipo_sanguineoInput | tbl_usuarioCreateOrConnectWithoutTbl_tipo_sanguineoInput[]
    createMany?: tbl_usuarioCreateManyTbl_tipo_sanguineoInputEnvelope
    connect?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
  }

  export type tbl_banco_sangueUpdateManyWithoutTbl_tipo_sanguineoNestedInput = {
    create?: XOR<tbl_banco_sangueCreateWithoutTbl_tipo_sanguineoInput, tbl_banco_sangueUncheckedCreateWithoutTbl_tipo_sanguineoInput> | tbl_banco_sangueCreateWithoutTbl_tipo_sanguineoInput[] | tbl_banco_sangueUncheckedCreateWithoutTbl_tipo_sanguineoInput[]
    connectOrCreate?: tbl_banco_sangueCreateOrConnectWithoutTbl_tipo_sanguineoInput | tbl_banco_sangueCreateOrConnectWithoutTbl_tipo_sanguineoInput[]
    upsert?: tbl_banco_sangueUpsertWithWhereUniqueWithoutTbl_tipo_sanguineoInput | tbl_banco_sangueUpsertWithWhereUniqueWithoutTbl_tipo_sanguineoInput[]
    createMany?: tbl_banco_sangueCreateManyTbl_tipo_sanguineoInputEnvelope
    set?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
    disconnect?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
    delete?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
    connect?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
    update?: tbl_banco_sangueUpdateWithWhereUniqueWithoutTbl_tipo_sanguineoInput | tbl_banco_sangueUpdateWithWhereUniqueWithoutTbl_tipo_sanguineoInput[]
    updateMany?: tbl_banco_sangueUpdateManyWithWhereWithoutTbl_tipo_sanguineoInput | tbl_banco_sangueUpdateManyWithWhereWithoutTbl_tipo_sanguineoInput[]
    deleteMany?: tbl_banco_sangueScalarWhereInput | tbl_banco_sangueScalarWhereInput[]
  }

  export type tbl_usuarioUpdateManyWithoutTbl_tipo_sanguineoNestedInput = {
    create?: XOR<tbl_usuarioCreateWithoutTbl_tipo_sanguineoInput, tbl_usuarioUncheckedCreateWithoutTbl_tipo_sanguineoInput> | tbl_usuarioCreateWithoutTbl_tipo_sanguineoInput[] | tbl_usuarioUncheckedCreateWithoutTbl_tipo_sanguineoInput[]
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutTbl_tipo_sanguineoInput | tbl_usuarioCreateOrConnectWithoutTbl_tipo_sanguineoInput[]
    upsert?: tbl_usuarioUpsertWithWhereUniqueWithoutTbl_tipo_sanguineoInput | tbl_usuarioUpsertWithWhereUniqueWithoutTbl_tipo_sanguineoInput[]
    createMany?: tbl_usuarioCreateManyTbl_tipo_sanguineoInputEnvelope
    set?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
    disconnect?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
    delete?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
    connect?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
    update?: tbl_usuarioUpdateWithWhereUniqueWithoutTbl_tipo_sanguineoInput | tbl_usuarioUpdateWithWhereUniqueWithoutTbl_tipo_sanguineoInput[]
    updateMany?: tbl_usuarioUpdateManyWithWhereWithoutTbl_tipo_sanguineoInput | tbl_usuarioUpdateManyWithWhereWithoutTbl_tipo_sanguineoInput[]
    deleteMany?: tbl_usuarioScalarWhereInput | tbl_usuarioScalarWhereInput[]
  }

  export type tbl_banco_sangueUncheckedUpdateManyWithoutTbl_tipo_sanguineoNestedInput = {
    create?: XOR<tbl_banco_sangueCreateWithoutTbl_tipo_sanguineoInput, tbl_banco_sangueUncheckedCreateWithoutTbl_tipo_sanguineoInput> | tbl_banco_sangueCreateWithoutTbl_tipo_sanguineoInput[] | tbl_banco_sangueUncheckedCreateWithoutTbl_tipo_sanguineoInput[]
    connectOrCreate?: tbl_banco_sangueCreateOrConnectWithoutTbl_tipo_sanguineoInput | tbl_banco_sangueCreateOrConnectWithoutTbl_tipo_sanguineoInput[]
    upsert?: tbl_banco_sangueUpsertWithWhereUniqueWithoutTbl_tipo_sanguineoInput | tbl_banco_sangueUpsertWithWhereUniqueWithoutTbl_tipo_sanguineoInput[]
    createMany?: tbl_banco_sangueCreateManyTbl_tipo_sanguineoInputEnvelope
    set?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
    disconnect?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
    delete?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
    connect?: tbl_banco_sangueWhereUniqueInput | tbl_banco_sangueWhereUniqueInput[]
    update?: tbl_banco_sangueUpdateWithWhereUniqueWithoutTbl_tipo_sanguineoInput | tbl_banco_sangueUpdateWithWhereUniqueWithoutTbl_tipo_sanguineoInput[]
    updateMany?: tbl_banco_sangueUpdateManyWithWhereWithoutTbl_tipo_sanguineoInput | tbl_banco_sangueUpdateManyWithWhereWithoutTbl_tipo_sanguineoInput[]
    deleteMany?: tbl_banco_sangueScalarWhereInput | tbl_banco_sangueScalarWhereInput[]
  }

  export type tbl_usuarioUncheckedUpdateManyWithoutTbl_tipo_sanguineoNestedInput = {
    create?: XOR<tbl_usuarioCreateWithoutTbl_tipo_sanguineoInput, tbl_usuarioUncheckedCreateWithoutTbl_tipo_sanguineoInput> | tbl_usuarioCreateWithoutTbl_tipo_sanguineoInput[] | tbl_usuarioUncheckedCreateWithoutTbl_tipo_sanguineoInput[]
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutTbl_tipo_sanguineoInput | tbl_usuarioCreateOrConnectWithoutTbl_tipo_sanguineoInput[]
    upsert?: tbl_usuarioUpsertWithWhereUniqueWithoutTbl_tipo_sanguineoInput | tbl_usuarioUpsertWithWhereUniqueWithoutTbl_tipo_sanguineoInput[]
    createMany?: tbl_usuarioCreateManyTbl_tipo_sanguineoInputEnvelope
    set?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
    disconnect?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
    delete?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
    connect?: tbl_usuarioWhereUniqueInput | tbl_usuarioWhereUniqueInput[]
    update?: tbl_usuarioUpdateWithWhereUniqueWithoutTbl_tipo_sanguineoInput | tbl_usuarioUpdateWithWhereUniqueWithoutTbl_tipo_sanguineoInput[]
    updateMany?: tbl_usuarioUpdateManyWithWhereWithoutTbl_tipo_sanguineoInput | tbl_usuarioUpdateManyWithWhereWithoutTbl_tipo_sanguineoInput[]
    deleteMany?: tbl_usuarioScalarWhereInput | tbl_usuarioScalarWhereInput[]
  }

  export type tbl_agendamentoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<tbl_agendamentoCreateWithoutUsuarioInput, tbl_agendamentoUncheckedCreateWithoutUsuarioInput> | tbl_agendamentoCreateWithoutUsuarioInput[] | tbl_agendamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tbl_agendamentoCreateOrConnectWithoutUsuarioInput | tbl_agendamentoCreateOrConnectWithoutUsuarioInput[]
    createMany?: tbl_agendamentoCreateManyUsuarioInputEnvelope
    connect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
  }

  export type tbl_certificadoCreateNestedManyWithoutTbl_usuarioInput = {
    create?: XOR<tbl_certificadoCreateWithoutTbl_usuarioInput, tbl_certificadoUncheckedCreateWithoutTbl_usuarioInput> | tbl_certificadoCreateWithoutTbl_usuarioInput[] | tbl_certificadoUncheckedCreateWithoutTbl_usuarioInput[]
    connectOrCreate?: tbl_certificadoCreateOrConnectWithoutTbl_usuarioInput | tbl_certificadoCreateOrConnectWithoutTbl_usuarioInput[]
    createMany?: tbl_certificadoCreateManyTbl_usuarioInputEnvelope
    connect?: tbl_certificadoWhereUniqueInput | tbl_certificadoWhereUniqueInput[]
  }

  export type tbl_recuperacao_senhaCreateNestedManyWithoutTbl_usuarioInput = {
    create?: XOR<tbl_recuperacao_senhaCreateWithoutTbl_usuarioInput, tbl_recuperacao_senhaUncheckedCreateWithoutTbl_usuarioInput> | tbl_recuperacao_senhaCreateWithoutTbl_usuarioInput[] | tbl_recuperacao_senhaUncheckedCreateWithoutTbl_usuarioInput[]
    connectOrCreate?: tbl_recuperacao_senhaCreateOrConnectWithoutTbl_usuarioInput | tbl_recuperacao_senhaCreateOrConnectWithoutTbl_usuarioInput[]
    createMany?: tbl_recuperacao_senhaCreateManyTbl_usuarioInputEnvelope
    connect?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
  }

  export type tbl_telefoneCreateNestedManyWithoutTbl_usuarioInput = {
    create?: XOR<tbl_telefoneCreateWithoutTbl_usuarioInput, tbl_telefoneUncheckedCreateWithoutTbl_usuarioInput> | tbl_telefoneCreateWithoutTbl_usuarioInput[] | tbl_telefoneUncheckedCreateWithoutTbl_usuarioInput[]
    connectOrCreate?: tbl_telefoneCreateOrConnectWithoutTbl_usuarioInput | tbl_telefoneCreateOrConnectWithoutTbl_usuarioInput[]
    createMany?: tbl_telefoneCreateManyTbl_usuarioInputEnvelope
    connect?: tbl_telefoneWhereUniqueInput | tbl_telefoneWhereUniqueInput[]
  }

  export type tbl_registro_doacaoCreateNestedManyWithoutTbl_usuarioInput = {
    create?: XOR<tbl_registro_doacaoCreateWithoutTbl_usuarioInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_usuarioInput> | tbl_registro_doacaoCreateWithoutTbl_usuarioInput[] | tbl_registro_doacaoUncheckedCreateWithoutTbl_usuarioInput[]
    connectOrCreate?: tbl_registro_doacaoCreateOrConnectWithoutTbl_usuarioInput | tbl_registro_doacaoCreateOrConnectWithoutTbl_usuarioInput[]
    createMany?: tbl_registro_doacaoCreateManyTbl_usuarioInputEnvelope
    connect?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
  }

  export type tbl_tipo_sanguineoCreateNestedOneWithoutTbl_usuarioInput = {
    create?: XOR<tbl_tipo_sanguineoCreateWithoutTbl_usuarioInput, tbl_tipo_sanguineoUncheckedCreateWithoutTbl_usuarioInput>
    connectOrCreate?: tbl_tipo_sanguineoCreateOrConnectWithoutTbl_usuarioInput
    connect?: tbl_tipo_sanguineoWhereUniqueInput
  }

  export type tbl_sexoCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<tbl_sexoCreateWithoutUsuariosInput, tbl_sexoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: tbl_sexoCreateOrConnectWithoutUsuariosInput
    connect?: tbl_sexoWhereUniqueInput
  }

  export type tbl_agendamentoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<tbl_agendamentoCreateWithoutUsuarioInput, tbl_agendamentoUncheckedCreateWithoutUsuarioInput> | tbl_agendamentoCreateWithoutUsuarioInput[] | tbl_agendamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tbl_agendamentoCreateOrConnectWithoutUsuarioInput | tbl_agendamentoCreateOrConnectWithoutUsuarioInput[]
    createMany?: tbl_agendamentoCreateManyUsuarioInputEnvelope
    connect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
  }

  export type tbl_certificadoUncheckedCreateNestedManyWithoutTbl_usuarioInput = {
    create?: XOR<tbl_certificadoCreateWithoutTbl_usuarioInput, tbl_certificadoUncheckedCreateWithoutTbl_usuarioInput> | tbl_certificadoCreateWithoutTbl_usuarioInput[] | tbl_certificadoUncheckedCreateWithoutTbl_usuarioInput[]
    connectOrCreate?: tbl_certificadoCreateOrConnectWithoutTbl_usuarioInput | tbl_certificadoCreateOrConnectWithoutTbl_usuarioInput[]
    createMany?: tbl_certificadoCreateManyTbl_usuarioInputEnvelope
    connect?: tbl_certificadoWhereUniqueInput | tbl_certificadoWhereUniqueInput[]
  }

  export type tbl_recuperacao_senhaUncheckedCreateNestedManyWithoutTbl_usuarioInput = {
    create?: XOR<tbl_recuperacao_senhaCreateWithoutTbl_usuarioInput, tbl_recuperacao_senhaUncheckedCreateWithoutTbl_usuarioInput> | tbl_recuperacao_senhaCreateWithoutTbl_usuarioInput[] | tbl_recuperacao_senhaUncheckedCreateWithoutTbl_usuarioInput[]
    connectOrCreate?: tbl_recuperacao_senhaCreateOrConnectWithoutTbl_usuarioInput | tbl_recuperacao_senhaCreateOrConnectWithoutTbl_usuarioInput[]
    createMany?: tbl_recuperacao_senhaCreateManyTbl_usuarioInputEnvelope
    connect?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
  }

  export type tbl_telefoneUncheckedCreateNestedManyWithoutTbl_usuarioInput = {
    create?: XOR<tbl_telefoneCreateWithoutTbl_usuarioInput, tbl_telefoneUncheckedCreateWithoutTbl_usuarioInput> | tbl_telefoneCreateWithoutTbl_usuarioInput[] | tbl_telefoneUncheckedCreateWithoutTbl_usuarioInput[]
    connectOrCreate?: tbl_telefoneCreateOrConnectWithoutTbl_usuarioInput | tbl_telefoneCreateOrConnectWithoutTbl_usuarioInput[]
    createMany?: tbl_telefoneCreateManyTbl_usuarioInputEnvelope
    connect?: tbl_telefoneWhereUniqueInput | tbl_telefoneWhereUniqueInput[]
  }

  export type tbl_registro_doacaoUncheckedCreateNestedManyWithoutTbl_usuarioInput = {
    create?: XOR<tbl_registro_doacaoCreateWithoutTbl_usuarioInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_usuarioInput> | tbl_registro_doacaoCreateWithoutTbl_usuarioInput[] | tbl_registro_doacaoUncheckedCreateWithoutTbl_usuarioInput[]
    connectOrCreate?: tbl_registro_doacaoCreateOrConnectWithoutTbl_usuarioInput | tbl_registro_doacaoCreateOrConnectWithoutTbl_usuarioInput[]
    createMany?: tbl_registro_doacaoCreateManyTbl_usuarioInputEnvelope
    connect?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type tbl_agendamentoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<tbl_agendamentoCreateWithoutUsuarioInput, tbl_agendamentoUncheckedCreateWithoutUsuarioInput> | tbl_agendamentoCreateWithoutUsuarioInput[] | tbl_agendamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tbl_agendamentoCreateOrConnectWithoutUsuarioInput | tbl_agendamentoCreateOrConnectWithoutUsuarioInput[]
    upsert?: tbl_agendamentoUpsertWithWhereUniqueWithoutUsuarioInput | tbl_agendamentoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: tbl_agendamentoCreateManyUsuarioInputEnvelope
    set?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    disconnect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    delete?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    connect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    update?: tbl_agendamentoUpdateWithWhereUniqueWithoutUsuarioInput | tbl_agendamentoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: tbl_agendamentoUpdateManyWithWhereWithoutUsuarioInput | tbl_agendamentoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: tbl_agendamentoScalarWhereInput | tbl_agendamentoScalarWhereInput[]
  }

  export type tbl_certificadoUpdateManyWithoutTbl_usuarioNestedInput = {
    create?: XOR<tbl_certificadoCreateWithoutTbl_usuarioInput, tbl_certificadoUncheckedCreateWithoutTbl_usuarioInput> | tbl_certificadoCreateWithoutTbl_usuarioInput[] | tbl_certificadoUncheckedCreateWithoutTbl_usuarioInput[]
    connectOrCreate?: tbl_certificadoCreateOrConnectWithoutTbl_usuarioInput | tbl_certificadoCreateOrConnectWithoutTbl_usuarioInput[]
    upsert?: tbl_certificadoUpsertWithWhereUniqueWithoutTbl_usuarioInput | tbl_certificadoUpsertWithWhereUniqueWithoutTbl_usuarioInput[]
    createMany?: tbl_certificadoCreateManyTbl_usuarioInputEnvelope
    set?: tbl_certificadoWhereUniqueInput | tbl_certificadoWhereUniqueInput[]
    disconnect?: tbl_certificadoWhereUniqueInput | tbl_certificadoWhereUniqueInput[]
    delete?: tbl_certificadoWhereUniqueInput | tbl_certificadoWhereUniqueInput[]
    connect?: tbl_certificadoWhereUniqueInput | tbl_certificadoWhereUniqueInput[]
    update?: tbl_certificadoUpdateWithWhereUniqueWithoutTbl_usuarioInput | tbl_certificadoUpdateWithWhereUniqueWithoutTbl_usuarioInput[]
    updateMany?: tbl_certificadoUpdateManyWithWhereWithoutTbl_usuarioInput | tbl_certificadoUpdateManyWithWhereWithoutTbl_usuarioInput[]
    deleteMany?: tbl_certificadoScalarWhereInput | tbl_certificadoScalarWhereInput[]
  }

  export type tbl_recuperacao_senhaUpdateManyWithoutTbl_usuarioNestedInput = {
    create?: XOR<tbl_recuperacao_senhaCreateWithoutTbl_usuarioInput, tbl_recuperacao_senhaUncheckedCreateWithoutTbl_usuarioInput> | tbl_recuperacao_senhaCreateWithoutTbl_usuarioInput[] | tbl_recuperacao_senhaUncheckedCreateWithoutTbl_usuarioInput[]
    connectOrCreate?: tbl_recuperacao_senhaCreateOrConnectWithoutTbl_usuarioInput | tbl_recuperacao_senhaCreateOrConnectWithoutTbl_usuarioInput[]
    upsert?: tbl_recuperacao_senhaUpsertWithWhereUniqueWithoutTbl_usuarioInput | tbl_recuperacao_senhaUpsertWithWhereUniqueWithoutTbl_usuarioInput[]
    createMany?: tbl_recuperacao_senhaCreateManyTbl_usuarioInputEnvelope
    set?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
    disconnect?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
    delete?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
    connect?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
    update?: tbl_recuperacao_senhaUpdateWithWhereUniqueWithoutTbl_usuarioInput | tbl_recuperacao_senhaUpdateWithWhereUniqueWithoutTbl_usuarioInput[]
    updateMany?: tbl_recuperacao_senhaUpdateManyWithWhereWithoutTbl_usuarioInput | tbl_recuperacao_senhaUpdateManyWithWhereWithoutTbl_usuarioInput[]
    deleteMany?: tbl_recuperacao_senhaScalarWhereInput | tbl_recuperacao_senhaScalarWhereInput[]
  }

  export type tbl_telefoneUpdateManyWithoutTbl_usuarioNestedInput = {
    create?: XOR<tbl_telefoneCreateWithoutTbl_usuarioInput, tbl_telefoneUncheckedCreateWithoutTbl_usuarioInput> | tbl_telefoneCreateWithoutTbl_usuarioInput[] | tbl_telefoneUncheckedCreateWithoutTbl_usuarioInput[]
    connectOrCreate?: tbl_telefoneCreateOrConnectWithoutTbl_usuarioInput | tbl_telefoneCreateOrConnectWithoutTbl_usuarioInput[]
    upsert?: tbl_telefoneUpsertWithWhereUniqueWithoutTbl_usuarioInput | tbl_telefoneUpsertWithWhereUniqueWithoutTbl_usuarioInput[]
    createMany?: tbl_telefoneCreateManyTbl_usuarioInputEnvelope
    set?: tbl_telefoneWhereUniqueInput | tbl_telefoneWhereUniqueInput[]
    disconnect?: tbl_telefoneWhereUniqueInput | tbl_telefoneWhereUniqueInput[]
    delete?: tbl_telefoneWhereUniqueInput | tbl_telefoneWhereUniqueInput[]
    connect?: tbl_telefoneWhereUniqueInput | tbl_telefoneWhereUniqueInput[]
    update?: tbl_telefoneUpdateWithWhereUniqueWithoutTbl_usuarioInput | tbl_telefoneUpdateWithWhereUniqueWithoutTbl_usuarioInput[]
    updateMany?: tbl_telefoneUpdateManyWithWhereWithoutTbl_usuarioInput | tbl_telefoneUpdateManyWithWhereWithoutTbl_usuarioInput[]
    deleteMany?: tbl_telefoneScalarWhereInput | tbl_telefoneScalarWhereInput[]
  }

  export type tbl_registro_doacaoUpdateManyWithoutTbl_usuarioNestedInput = {
    create?: XOR<tbl_registro_doacaoCreateWithoutTbl_usuarioInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_usuarioInput> | tbl_registro_doacaoCreateWithoutTbl_usuarioInput[] | tbl_registro_doacaoUncheckedCreateWithoutTbl_usuarioInput[]
    connectOrCreate?: tbl_registro_doacaoCreateOrConnectWithoutTbl_usuarioInput | tbl_registro_doacaoCreateOrConnectWithoutTbl_usuarioInput[]
    upsert?: tbl_registro_doacaoUpsertWithWhereUniqueWithoutTbl_usuarioInput | tbl_registro_doacaoUpsertWithWhereUniqueWithoutTbl_usuarioInput[]
    createMany?: tbl_registro_doacaoCreateManyTbl_usuarioInputEnvelope
    set?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
    disconnect?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
    delete?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
    connect?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
    update?: tbl_registro_doacaoUpdateWithWhereUniqueWithoutTbl_usuarioInput | tbl_registro_doacaoUpdateWithWhereUniqueWithoutTbl_usuarioInput[]
    updateMany?: tbl_registro_doacaoUpdateManyWithWhereWithoutTbl_usuarioInput | tbl_registro_doacaoUpdateManyWithWhereWithoutTbl_usuarioInput[]
    deleteMany?: tbl_registro_doacaoScalarWhereInput | tbl_registro_doacaoScalarWhereInput[]
  }

  export type tbl_tipo_sanguineoUpdateOneWithoutTbl_usuarioNestedInput = {
    create?: XOR<tbl_tipo_sanguineoCreateWithoutTbl_usuarioInput, tbl_tipo_sanguineoUncheckedCreateWithoutTbl_usuarioInput>
    connectOrCreate?: tbl_tipo_sanguineoCreateOrConnectWithoutTbl_usuarioInput
    upsert?: tbl_tipo_sanguineoUpsertWithoutTbl_usuarioInput
    disconnect?: tbl_tipo_sanguineoWhereInput | boolean
    delete?: tbl_tipo_sanguineoWhereInput | boolean
    connect?: tbl_tipo_sanguineoWhereUniqueInput
    update?: XOR<XOR<tbl_tipo_sanguineoUpdateToOneWithWhereWithoutTbl_usuarioInput, tbl_tipo_sanguineoUpdateWithoutTbl_usuarioInput>, tbl_tipo_sanguineoUncheckedUpdateWithoutTbl_usuarioInput>
  }

  export type tbl_sexoUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<tbl_sexoCreateWithoutUsuariosInput, tbl_sexoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: tbl_sexoCreateOrConnectWithoutUsuariosInput
    upsert?: tbl_sexoUpsertWithoutUsuariosInput
    disconnect?: tbl_sexoWhereInput | boolean
    delete?: tbl_sexoWhereInput | boolean
    connect?: tbl_sexoWhereUniqueInput
    update?: XOR<XOR<tbl_sexoUpdateToOneWithWhereWithoutUsuariosInput, tbl_sexoUpdateWithoutUsuariosInput>, tbl_sexoUncheckedUpdateWithoutUsuariosInput>
  }

  export type tbl_agendamentoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<tbl_agendamentoCreateWithoutUsuarioInput, tbl_agendamentoUncheckedCreateWithoutUsuarioInput> | tbl_agendamentoCreateWithoutUsuarioInput[] | tbl_agendamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tbl_agendamentoCreateOrConnectWithoutUsuarioInput | tbl_agendamentoCreateOrConnectWithoutUsuarioInput[]
    upsert?: tbl_agendamentoUpsertWithWhereUniqueWithoutUsuarioInput | tbl_agendamentoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: tbl_agendamentoCreateManyUsuarioInputEnvelope
    set?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    disconnect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    delete?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    connect?: tbl_agendamentoWhereUniqueInput | tbl_agendamentoWhereUniqueInput[]
    update?: tbl_agendamentoUpdateWithWhereUniqueWithoutUsuarioInput | tbl_agendamentoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: tbl_agendamentoUpdateManyWithWhereWithoutUsuarioInput | tbl_agendamentoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: tbl_agendamentoScalarWhereInput | tbl_agendamentoScalarWhereInput[]
  }

  export type tbl_certificadoUncheckedUpdateManyWithoutTbl_usuarioNestedInput = {
    create?: XOR<tbl_certificadoCreateWithoutTbl_usuarioInput, tbl_certificadoUncheckedCreateWithoutTbl_usuarioInput> | tbl_certificadoCreateWithoutTbl_usuarioInput[] | tbl_certificadoUncheckedCreateWithoutTbl_usuarioInput[]
    connectOrCreate?: tbl_certificadoCreateOrConnectWithoutTbl_usuarioInput | tbl_certificadoCreateOrConnectWithoutTbl_usuarioInput[]
    upsert?: tbl_certificadoUpsertWithWhereUniqueWithoutTbl_usuarioInput | tbl_certificadoUpsertWithWhereUniqueWithoutTbl_usuarioInput[]
    createMany?: tbl_certificadoCreateManyTbl_usuarioInputEnvelope
    set?: tbl_certificadoWhereUniqueInput | tbl_certificadoWhereUniqueInput[]
    disconnect?: tbl_certificadoWhereUniqueInput | tbl_certificadoWhereUniqueInput[]
    delete?: tbl_certificadoWhereUniqueInput | tbl_certificadoWhereUniqueInput[]
    connect?: tbl_certificadoWhereUniqueInput | tbl_certificadoWhereUniqueInput[]
    update?: tbl_certificadoUpdateWithWhereUniqueWithoutTbl_usuarioInput | tbl_certificadoUpdateWithWhereUniqueWithoutTbl_usuarioInput[]
    updateMany?: tbl_certificadoUpdateManyWithWhereWithoutTbl_usuarioInput | tbl_certificadoUpdateManyWithWhereWithoutTbl_usuarioInput[]
    deleteMany?: tbl_certificadoScalarWhereInput | tbl_certificadoScalarWhereInput[]
  }

  export type tbl_recuperacao_senhaUncheckedUpdateManyWithoutTbl_usuarioNestedInput = {
    create?: XOR<tbl_recuperacao_senhaCreateWithoutTbl_usuarioInput, tbl_recuperacao_senhaUncheckedCreateWithoutTbl_usuarioInput> | tbl_recuperacao_senhaCreateWithoutTbl_usuarioInput[] | tbl_recuperacao_senhaUncheckedCreateWithoutTbl_usuarioInput[]
    connectOrCreate?: tbl_recuperacao_senhaCreateOrConnectWithoutTbl_usuarioInput | tbl_recuperacao_senhaCreateOrConnectWithoutTbl_usuarioInput[]
    upsert?: tbl_recuperacao_senhaUpsertWithWhereUniqueWithoutTbl_usuarioInput | tbl_recuperacao_senhaUpsertWithWhereUniqueWithoutTbl_usuarioInput[]
    createMany?: tbl_recuperacao_senhaCreateManyTbl_usuarioInputEnvelope
    set?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
    disconnect?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
    delete?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
    connect?: tbl_recuperacao_senhaWhereUniqueInput | tbl_recuperacao_senhaWhereUniqueInput[]
    update?: tbl_recuperacao_senhaUpdateWithWhereUniqueWithoutTbl_usuarioInput | tbl_recuperacao_senhaUpdateWithWhereUniqueWithoutTbl_usuarioInput[]
    updateMany?: tbl_recuperacao_senhaUpdateManyWithWhereWithoutTbl_usuarioInput | tbl_recuperacao_senhaUpdateManyWithWhereWithoutTbl_usuarioInput[]
    deleteMany?: tbl_recuperacao_senhaScalarWhereInput | tbl_recuperacao_senhaScalarWhereInput[]
  }

  export type tbl_telefoneUncheckedUpdateManyWithoutTbl_usuarioNestedInput = {
    create?: XOR<tbl_telefoneCreateWithoutTbl_usuarioInput, tbl_telefoneUncheckedCreateWithoutTbl_usuarioInput> | tbl_telefoneCreateWithoutTbl_usuarioInput[] | tbl_telefoneUncheckedCreateWithoutTbl_usuarioInput[]
    connectOrCreate?: tbl_telefoneCreateOrConnectWithoutTbl_usuarioInput | tbl_telefoneCreateOrConnectWithoutTbl_usuarioInput[]
    upsert?: tbl_telefoneUpsertWithWhereUniqueWithoutTbl_usuarioInput | tbl_telefoneUpsertWithWhereUniqueWithoutTbl_usuarioInput[]
    createMany?: tbl_telefoneCreateManyTbl_usuarioInputEnvelope
    set?: tbl_telefoneWhereUniqueInput | tbl_telefoneWhereUniqueInput[]
    disconnect?: tbl_telefoneWhereUniqueInput | tbl_telefoneWhereUniqueInput[]
    delete?: tbl_telefoneWhereUniqueInput | tbl_telefoneWhereUniqueInput[]
    connect?: tbl_telefoneWhereUniqueInput | tbl_telefoneWhereUniqueInput[]
    update?: tbl_telefoneUpdateWithWhereUniqueWithoutTbl_usuarioInput | tbl_telefoneUpdateWithWhereUniqueWithoutTbl_usuarioInput[]
    updateMany?: tbl_telefoneUpdateManyWithWhereWithoutTbl_usuarioInput | tbl_telefoneUpdateManyWithWhereWithoutTbl_usuarioInput[]
    deleteMany?: tbl_telefoneScalarWhereInput | tbl_telefoneScalarWhereInput[]
  }

  export type tbl_registro_doacaoUncheckedUpdateManyWithoutTbl_usuarioNestedInput = {
    create?: XOR<tbl_registro_doacaoCreateWithoutTbl_usuarioInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_usuarioInput> | tbl_registro_doacaoCreateWithoutTbl_usuarioInput[] | tbl_registro_doacaoUncheckedCreateWithoutTbl_usuarioInput[]
    connectOrCreate?: tbl_registro_doacaoCreateOrConnectWithoutTbl_usuarioInput | tbl_registro_doacaoCreateOrConnectWithoutTbl_usuarioInput[]
    upsert?: tbl_registro_doacaoUpsertWithWhereUniqueWithoutTbl_usuarioInput | tbl_registro_doacaoUpsertWithWhereUniqueWithoutTbl_usuarioInput[]
    createMany?: tbl_registro_doacaoCreateManyTbl_usuarioInputEnvelope
    set?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
    disconnect?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
    delete?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
    connect?: tbl_registro_doacaoWhereUniqueInput | tbl_registro_doacaoWhereUniqueInput[]
    update?: tbl_registro_doacaoUpdateWithWhereUniqueWithoutTbl_usuarioInput | tbl_registro_doacaoUpdateWithWhereUniqueWithoutTbl_usuarioInput[]
    updateMany?: tbl_registro_doacaoUpdateManyWithWhereWithoutTbl_usuarioInput | tbl_registro_doacaoUpdateManyWithWhereWithoutTbl_usuarioInput[]
    deleteMany?: tbl_registro_doacaoScalarWhereInput | tbl_registro_doacaoScalarWhereInput[]
  }

  export type tbl_usuarioCreateNestedOneWithoutTbl_recuperacao_senhaInput = {
    create?: XOR<tbl_usuarioCreateWithoutTbl_recuperacao_senhaInput, tbl_usuarioUncheckedCreateWithoutTbl_recuperacao_senhaInput>
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutTbl_recuperacao_senhaInput
    connect?: tbl_usuarioWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type tbl_usuarioUpdateOneRequiredWithoutTbl_recuperacao_senhaNestedInput = {
    create?: XOR<tbl_usuarioCreateWithoutTbl_recuperacao_senhaInput, tbl_usuarioUncheckedCreateWithoutTbl_recuperacao_senhaInput>
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutTbl_recuperacao_senhaInput
    upsert?: tbl_usuarioUpsertWithoutTbl_recuperacao_senhaInput
    connect?: tbl_usuarioWhereUniqueInput
    update?: XOR<XOR<tbl_usuarioUpdateToOneWithWhereWithoutTbl_recuperacao_senhaInput, tbl_usuarioUpdateWithoutTbl_recuperacao_senhaInput>, tbl_usuarioUncheckedUpdateWithoutTbl_recuperacao_senhaInput>
  }

  export type tbl_agendamentoCreateNestedOneWithoutTbl_registro_doacaoInput = {
    create?: XOR<tbl_agendamentoCreateWithoutTbl_registro_doacaoInput, tbl_agendamentoUncheckedCreateWithoutTbl_registro_doacaoInput>
    connectOrCreate?: tbl_agendamentoCreateOrConnectWithoutTbl_registro_doacaoInput
    connect?: tbl_agendamentoWhereUniqueInput
  }

  export type tbl_usuarioCreateNestedOneWithoutTbl_registro_doacaoInput = {
    create?: XOR<tbl_usuarioCreateWithoutTbl_registro_doacaoInput, tbl_usuarioUncheckedCreateWithoutTbl_registro_doacaoInput>
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutTbl_registro_doacaoInput
    connect?: tbl_usuarioWhereUniqueInput
  }

  export type tbl_hospitalCreateNestedOneWithoutTbl_registro_doacaoInput = {
    create?: XOR<tbl_hospitalCreateWithoutTbl_registro_doacaoInput, tbl_hospitalUncheckedCreateWithoutTbl_registro_doacaoInput>
    connectOrCreate?: tbl_hospitalCreateOrConnectWithoutTbl_registro_doacaoInput
    connect?: tbl_hospitalWhereUniqueInput
  }

  export type tbl_agendamentoUpdateOneRequiredWithoutTbl_registro_doacaoNestedInput = {
    create?: XOR<tbl_agendamentoCreateWithoutTbl_registro_doacaoInput, tbl_agendamentoUncheckedCreateWithoutTbl_registro_doacaoInput>
    connectOrCreate?: tbl_agendamentoCreateOrConnectWithoutTbl_registro_doacaoInput
    upsert?: tbl_agendamentoUpsertWithoutTbl_registro_doacaoInput
    connect?: tbl_agendamentoWhereUniqueInput
    update?: XOR<XOR<tbl_agendamentoUpdateToOneWithWhereWithoutTbl_registro_doacaoInput, tbl_agendamentoUpdateWithoutTbl_registro_doacaoInput>, tbl_agendamentoUncheckedUpdateWithoutTbl_registro_doacaoInput>
  }

  export type tbl_usuarioUpdateOneRequiredWithoutTbl_registro_doacaoNestedInput = {
    create?: XOR<tbl_usuarioCreateWithoutTbl_registro_doacaoInput, tbl_usuarioUncheckedCreateWithoutTbl_registro_doacaoInput>
    connectOrCreate?: tbl_usuarioCreateOrConnectWithoutTbl_registro_doacaoInput
    upsert?: tbl_usuarioUpsertWithoutTbl_registro_doacaoInput
    connect?: tbl_usuarioWhereUniqueInput
    update?: XOR<XOR<tbl_usuarioUpdateToOneWithWhereWithoutTbl_registro_doacaoInput, tbl_usuarioUpdateWithoutTbl_registro_doacaoInput>, tbl_usuarioUncheckedUpdateWithoutTbl_registro_doacaoInput>
  }

  export type tbl_hospitalUpdateOneRequiredWithoutTbl_registro_doacaoNestedInput = {
    create?: XOR<tbl_hospitalCreateWithoutTbl_registro_doacaoInput, tbl_hospitalUncheckedCreateWithoutTbl_registro_doacaoInput>
    connectOrCreate?: tbl_hospitalCreateOrConnectWithoutTbl_registro_doacaoInput
    upsert?: tbl_hospitalUpsertWithoutTbl_registro_doacaoInput
    connect?: tbl_hospitalWhereUniqueInput
    update?: XOR<XOR<tbl_hospitalUpdateToOneWithWhereWithoutTbl_registro_doacaoInput, tbl_hospitalUpdateWithoutTbl_registro_doacaoInput>, tbl_hospitalUncheckedUpdateWithoutTbl_registro_doacaoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumtbl_agendamento_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.tbl_agendamento_status | Enumtbl_agendamento_statusFieldRefInput<$PrismaModel>
    in?: $Enums.tbl_agendamento_status[]
    notIn?: $Enums.tbl_agendamento_status[]
    not?: NestedEnumtbl_agendamento_statusFilter<$PrismaModel> | $Enums.tbl_agendamento_status
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumtbl_agendamento_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tbl_agendamento_status | Enumtbl_agendamento_statusFieldRefInput<$PrismaModel>
    in?: $Enums.tbl_agendamento_status[]
    notIn?: $Enums.tbl_agendamento_status[]
    not?: NestedEnumtbl_agendamento_statusWithAggregatesFilter<$PrismaModel> | $Enums.tbl_agendamento_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtbl_agendamento_statusFilter<$PrismaModel>
    _max?: NestedEnumtbl_agendamento_statusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type tbl_usuarioCreateWithoutAgendamentosInput = {
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
    tbl_certificado?: tbl_certificadoCreateNestedManyWithoutTbl_usuarioInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaCreateNestedManyWithoutTbl_usuarioInput
    tbl_telefone?: tbl_telefoneCreateNestedManyWithoutTbl_usuarioInput
    tbl_registro_doacao?: tbl_registro_doacaoCreateNestedManyWithoutTbl_usuarioInput
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoCreateNestedOneWithoutTbl_usuarioInput
    sexo?: tbl_sexoCreateNestedOneWithoutUsuariosInput
  }

  export type tbl_usuarioUncheckedCreateWithoutAgendamentosInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    id_tipo_sanguineo?: number | null
    id_sexo?: number | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
    tbl_certificado?: tbl_certificadoUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_telefone?: tbl_telefoneUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedCreateNestedManyWithoutTbl_usuarioInput
  }

  export type tbl_usuarioCreateOrConnectWithoutAgendamentosInput = {
    where: tbl_usuarioWhereUniqueInput
    create: XOR<tbl_usuarioCreateWithoutAgendamentosInput, tbl_usuarioUncheckedCreateWithoutAgendamentosInput>
  }

  export type tbl_doacaoCreateWithoutAgendamentosInput = {
    data: Date | string
    observacao?: string | null
    foto?: string | null
  }

  export type tbl_doacaoUncheckedCreateWithoutAgendamentosInput = {
    id?: number
    data: Date | string
    observacao?: string | null
    foto?: string | null
  }

  export type tbl_doacaoCreateOrConnectWithoutAgendamentosInput = {
    where: tbl_doacaoWhereUniqueInput
    create: XOR<tbl_doacaoCreateWithoutAgendamentosInput, tbl_doacaoUncheckedCreateWithoutAgendamentosInput>
  }

  export type tbl_hospitalCreateWithoutAgendamentosInput = {
    nome: string
    email: string
    senha: string
    cnpj: string
    crm: string
    cep: string
    telefone: string
    capacidade_maxima?: number
    convenios: string
    horario_abertura?: Date | string
    horario_fechamento?: Date | string
    foto: string
    complemento?: string | null
    tbl_banco_sangue?: tbl_banco_sangueCreateNestedManyWithoutTbl_hospitalInput
    tbl_registro_doacao?: tbl_registro_doacaoCreateNestedManyWithoutTbl_hospitalInput
  }

  export type tbl_hospitalUncheckedCreateWithoutAgendamentosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cnpj: string
    crm: string
    cep: string
    telefone: string
    capacidade_maxima?: number
    convenios: string
    horario_abertura?: Date | string
    horario_fechamento?: Date | string
    foto: string
    complemento?: string | null
    tbl_banco_sangue?: tbl_banco_sangueUncheckedCreateNestedManyWithoutTbl_hospitalInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedCreateNestedManyWithoutTbl_hospitalInput
  }

  export type tbl_hospitalCreateOrConnectWithoutAgendamentosInput = {
    where: tbl_hospitalWhereUniqueInput
    create: XOR<tbl_hospitalCreateWithoutAgendamentosInput, tbl_hospitalUncheckedCreateWithoutAgendamentosInput>
  }

  export type tbl_registro_doacaoCreateWithoutTbl_agendamentoInput = {
    data_doacao: Date | string
    local_doacao: string
    observacao?: string | null
    foto_comprovante?: string | null
    data_registro?: Date | string | null
    tbl_usuario: tbl_usuarioCreateNestedOneWithoutTbl_registro_doacaoInput
    tbl_hospital: tbl_hospitalCreateNestedOneWithoutTbl_registro_doacaoInput
  }

  export type tbl_registro_doacaoUncheckedCreateWithoutTbl_agendamentoInput = {
    id?: number
    id_usuario: number
    id_hospital: number
    data_doacao: Date | string
    local_doacao: string
    observacao?: string | null
    foto_comprovante?: string | null
    data_registro?: Date | string | null
  }

  export type tbl_registro_doacaoCreateOrConnectWithoutTbl_agendamentoInput = {
    where: tbl_registro_doacaoWhereUniqueInput
    create: XOR<tbl_registro_doacaoCreateWithoutTbl_agendamentoInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_agendamentoInput>
  }

  export type tbl_usuarioUpsertWithoutAgendamentosInput = {
    update: XOR<tbl_usuarioUpdateWithoutAgendamentosInput, tbl_usuarioUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<tbl_usuarioCreateWithoutAgendamentosInput, tbl_usuarioUncheckedCreateWithoutAgendamentosInput>
    where?: tbl_usuarioWhereInput
  }

  export type tbl_usuarioUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: tbl_usuarioWhereInput
    data: XOR<tbl_usuarioUpdateWithoutAgendamentosInput, tbl_usuarioUncheckedUpdateWithoutAgendamentosInput>
  }

  export type tbl_usuarioUpdateWithoutAgendamentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tbl_certificado?: tbl_certificadoUpdateManyWithoutTbl_usuarioNestedInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUpdateManyWithoutTbl_usuarioNestedInput
    tbl_telefone?: tbl_telefoneUpdateManyWithoutTbl_usuarioNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUpdateManyWithoutTbl_usuarioNestedInput
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoUpdateOneWithoutTbl_usuarioNestedInput
    sexo?: tbl_sexoUpdateOneWithoutUsuariosNestedInput
  }

  export type tbl_usuarioUncheckedUpdateWithoutAgendamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    id_tipo_sanguineo?: NullableIntFieldUpdateOperationsInput | number | null
    id_sexo?: NullableIntFieldUpdateOperationsInput | number | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tbl_certificado?: tbl_certificadoUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_telefone?: tbl_telefoneUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedUpdateManyWithoutTbl_usuarioNestedInput
  }

  export type tbl_doacaoUpsertWithoutAgendamentosInput = {
    update: XOR<tbl_doacaoUpdateWithoutAgendamentosInput, tbl_doacaoUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<tbl_doacaoCreateWithoutAgendamentosInput, tbl_doacaoUncheckedCreateWithoutAgendamentosInput>
    where?: tbl_doacaoWhereInput
  }

  export type tbl_doacaoUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: tbl_doacaoWhereInput
    data: XOR<tbl_doacaoUpdateWithoutAgendamentosInput, tbl_doacaoUncheckedUpdateWithoutAgendamentosInput>
  }

  export type tbl_doacaoUpdateWithoutAgendamentosInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_doacaoUncheckedUpdateWithoutAgendamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_hospitalUpsertWithoutAgendamentosInput = {
    update: XOR<tbl_hospitalUpdateWithoutAgendamentosInput, tbl_hospitalUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<tbl_hospitalCreateWithoutAgendamentosInput, tbl_hospitalUncheckedCreateWithoutAgendamentosInput>
    where?: tbl_hospitalWhereInput
  }

  export type tbl_hospitalUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: tbl_hospitalWhereInput
    data: XOR<tbl_hospitalUpdateWithoutAgendamentosInput, tbl_hospitalUncheckedUpdateWithoutAgendamentosInput>
  }

  export type tbl_hospitalUpdateWithoutAgendamentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    capacidade_maxima?: IntFieldUpdateOperationsInput | number
    convenios?: StringFieldUpdateOperationsInput | string
    horario_abertura?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    tbl_banco_sangue?: tbl_banco_sangueUpdateManyWithoutTbl_hospitalNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUpdateManyWithoutTbl_hospitalNestedInput
  }

  export type tbl_hospitalUncheckedUpdateWithoutAgendamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    capacidade_maxima?: IntFieldUpdateOperationsInput | number
    convenios?: StringFieldUpdateOperationsInput | string
    horario_abertura?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    tbl_banco_sangue?: tbl_banco_sangueUncheckedUpdateManyWithoutTbl_hospitalNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedUpdateManyWithoutTbl_hospitalNestedInput
  }

  export type tbl_registro_doacaoUpsertWithoutTbl_agendamentoInput = {
    update: XOR<tbl_registro_doacaoUpdateWithoutTbl_agendamentoInput, tbl_registro_doacaoUncheckedUpdateWithoutTbl_agendamentoInput>
    create: XOR<tbl_registro_doacaoCreateWithoutTbl_agendamentoInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_agendamentoInput>
    where?: tbl_registro_doacaoWhereInput
  }

  export type tbl_registro_doacaoUpdateToOneWithWhereWithoutTbl_agendamentoInput = {
    where?: tbl_registro_doacaoWhereInput
    data: XOR<tbl_registro_doacaoUpdateWithoutTbl_agendamentoInput, tbl_registro_doacaoUncheckedUpdateWithoutTbl_agendamentoInput>
  }

  export type tbl_registro_doacaoUpdateWithoutTbl_agendamentoInput = {
    data_doacao?: DateTimeFieldUpdateOperationsInput | Date | string
    local_doacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_comprovante?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tbl_usuario?: tbl_usuarioUpdateOneRequiredWithoutTbl_registro_doacaoNestedInput
    tbl_hospital?: tbl_hospitalUpdateOneRequiredWithoutTbl_registro_doacaoNestedInput
  }

  export type tbl_registro_doacaoUncheckedUpdateWithoutTbl_agendamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_hospital?: IntFieldUpdateOperationsInput | number
    data_doacao?: DateTimeFieldUpdateOperationsInput | Date | string
    local_doacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_comprovante?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_hospitalCreateWithoutTbl_banco_sangueInput = {
    nome: string
    email: string
    senha: string
    cnpj: string
    crm: string
    cep: string
    telefone: string
    capacidade_maxima?: number
    convenios: string
    horario_abertura?: Date | string
    horario_fechamento?: Date | string
    foto: string
    complemento?: string | null
    agendamentos?: tbl_agendamentoCreateNestedManyWithoutHospitalInput
    tbl_registro_doacao?: tbl_registro_doacaoCreateNestedManyWithoutTbl_hospitalInput
  }

  export type tbl_hospitalUncheckedCreateWithoutTbl_banco_sangueInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cnpj: string
    crm: string
    cep: string
    telefone: string
    capacidade_maxima?: number
    convenios: string
    horario_abertura?: Date | string
    horario_fechamento?: Date | string
    foto: string
    complemento?: string | null
    agendamentos?: tbl_agendamentoUncheckedCreateNestedManyWithoutHospitalInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedCreateNestedManyWithoutTbl_hospitalInput
  }

  export type tbl_hospitalCreateOrConnectWithoutTbl_banco_sangueInput = {
    where: tbl_hospitalWhereUniqueInput
    create: XOR<tbl_hospitalCreateWithoutTbl_banco_sangueInput, tbl_hospitalUncheckedCreateWithoutTbl_banco_sangueInput>
  }

  export type tbl_tipo_sanguineoCreateWithoutTbl_banco_sangueInput = {
    tipo: string
    tbl_usuario?: tbl_usuarioCreateNestedManyWithoutTbl_tipo_sanguineoInput
  }

  export type tbl_tipo_sanguineoUncheckedCreateWithoutTbl_banco_sangueInput = {
    id?: number
    tipo: string
    tbl_usuario?: tbl_usuarioUncheckedCreateNestedManyWithoutTbl_tipo_sanguineoInput
  }

  export type tbl_tipo_sanguineoCreateOrConnectWithoutTbl_banco_sangueInput = {
    where: tbl_tipo_sanguineoWhereUniqueInput
    create: XOR<tbl_tipo_sanguineoCreateWithoutTbl_banco_sangueInput, tbl_tipo_sanguineoUncheckedCreateWithoutTbl_banco_sangueInput>
  }

  export type tbl_hospitalUpsertWithoutTbl_banco_sangueInput = {
    update: XOR<tbl_hospitalUpdateWithoutTbl_banco_sangueInput, tbl_hospitalUncheckedUpdateWithoutTbl_banco_sangueInput>
    create: XOR<tbl_hospitalCreateWithoutTbl_banco_sangueInput, tbl_hospitalUncheckedCreateWithoutTbl_banco_sangueInput>
    where?: tbl_hospitalWhereInput
  }

  export type tbl_hospitalUpdateToOneWithWhereWithoutTbl_banco_sangueInput = {
    where?: tbl_hospitalWhereInput
    data: XOR<tbl_hospitalUpdateWithoutTbl_banco_sangueInput, tbl_hospitalUncheckedUpdateWithoutTbl_banco_sangueInput>
  }

  export type tbl_hospitalUpdateWithoutTbl_banco_sangueInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    capacidade_maxima?: IntFieldUpdateOperationsInput | number
    convenios?: StringFieldUpdateOperationsInput | string
    horario_abertura?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: tbl_agendamentoUpdateManyWithoutHospitalNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUpdateManyWithoutTbl_hospitalNestedInput
  }

  export type tbl_hospitalUncheckedUpdateWithoutTbl_banco_sangueInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    capacidade_maxima?: IntFieldUpdateOperationsInput | number
    convenios?: StringFieldUpdateOperationsInput | string
    horario_abertura?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: tbl_agendamentoUncheckedUpdateManyWithoutHospitalNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedUpdateManyWithoutTbl_hospitalNestedInput
  }

  export type tbl_tipo_sanguineoUpsertWithoutTbl_banco_sangueInput = {
    update: XOR<tbl_tipo_sanguineoUpdateWithoutTbl_banco_sangueInput, tbl_tipo_sanguineoUncheckedUpdateWithoutTbl_banco_sangueInput>
    create: XOR<tbl_tipo_sanguineoCreateWithoutTbl_banco_sangueInput, tbl_tipo_sanguineoUncheckedCreateWithoutTbl_banco_sangueInput>
    where?: tbl_tipo_sanguineoWhereInput
  }

  export type tbl_tipo_sanguineoUpdateToOneWithWhereWithoutTbl_banco_sangueInput = {
    where?: tbl_tipo_sanguineoWhereInput
    data: XOR<tbl_tipo_sanguineoUpdateWithoutTbl_banco_sangueInput, tbl_tipo_sanguineoUncheckedUpdateWithoutTbl_banco_sangueInput>
  }

  export type tbl_tipo_sanguineoUpdateWithoutTbl_banco_sangueInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    tbl_usuario?: tbl_usuarioUpdateManyWithoutTbl_tipo_sanguineoNestedInput
  }

  export type tbl_tipo_sanguineoUncheckedUpdateWithoutTbl_banco_sangueInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    tbl_usuario?: tbl_usuarioUncheckedUpdateManyWithoutTbl_tipo_sanguineoNestedInput
  }

  export type tbl_usuarioCreateWithoutTbl_certificadoInput = {
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
    agendamentos?: tbl_agendamentoCreateNestedManyWithoutUsuarioInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaCreateNestedManyWithoutTbl_usuarioInput
    tbl_telefone?: tbl_telefoneCreateNestedManyWithoutTbl_usuarioInput
    tbl_registro_doacao?: tbl_registro_doacaoCreateNestedManyWithoutTbl_usuarioInput
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoCreateNestedOneWithoutTbl_usuarioInput
    sexo?: tbl_sexoCreateNestedOneWithoutUsuariosInput
  }

  export type tbl_usuarioUncheckedCreateWithoutTbl_certificadoInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    id_tipo_sanguineo?: number | null
    id_sexo?: number | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
    agendamentos?: tbl_agendamentoUncheckedCreateNestedManyWithoutUsuarioInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_telefone?: tbl_telefoneUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedCreateNestedManyWithoutTbl_usuarioInput
  }

  export type tbl_usuarioCreateOrConnectWithoutTbl_certificadoInput = {
    where: tbl_usuarioWhereUniqueInput
    create: XOR<tbl_usuarioCreateWithoutTbl_certificadoInput, tbl_usuarioUncheckedCreateWithoutTbl_certificadoInput>
  }

  export type tbl_usuarioUpsertWithoutTbl_certificadoInput = {
    update: XOR<tbl_usuarioUpdateWithoutTbl_certificadoInput, tbl_usuarioUncheckedUpdateWithoutTbl_certificadoInput>
    create: XOR<tbl_usuarioCreateWithoutTbl_certificadoInput, tbl_usuarioUncheckedCreateWithoutTbl_certificadoInput>
    where?: tbl_usuarioWhereInput
  }

  export type tbl_usuarioUpdateToOneWithWhereWithoutTbl_certificadoInput = {
    where?: tbl_usuarioWhereInput
    data: XOR<tbl_usuarioUpdateWithoutTbl_certificadoInput, tbl_usuarioUncheckedUpdateWithoutTbl_certificadoInput>
  }

  export type tbl_usuarioUpdateWithoutTbl_certificadoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agendamentos?: tbl_agendamentoUpdateManyWithoutUsuarioNestedInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUpdateManyWithoutTbl_usuarioNestedInput
    tbl_telefone?: tbl_telefoneUpdateManyWithoutTbl_usuarioNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUpdateManyWithoutTbl_usuarioNestedInput
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoUpdateOneWithoutTbl_usuarioNestedInput
    sexo?: tbl_sexoUpdateOneWithoutUsuariosNestedInput
  }

  export type tbl_usuarioUncheckedUpdateWithoutTbl_certificadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    id_tipo_sanguineo?: NullableIntFieldUpdateOperationsInput | number | null
    id_sexo?: NullableIntFieldUpdateOperationsInput | number | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agendamentos?: tbl_agendamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_telefone?: tbl_telefoneUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedUpdateManyWithoutTbl_usuarioNestedInput
  }

  export type tbl_agendamentoCreateWithoutDoacaoInput = {
    status?: $Enums.tbl_agendamento_status
    data: Date | string
    hora: Date | string
    usuario?: tbl_usuarioCreateNestedOneWithoutAgendamentosInput
    hospital?: tbl_hospitalCreateNestedOneWithoutAgendamentosInput
    tbl_registro_doacao?: tbl_registro_doacaoCreateNestedOneWithoutTbl_agendamentoInput
  }

  export type tbl_agendamentoUncheckedCreateWithoutDoacaoInput = {
    id?: number
    status?: $Enums.tbl_agendamento_status
    data: Date | string
    hora: Date | string
    id_usuario?: number | null
    id_hospital?: number | null
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedCreateNestedOneWithoutTbl_agendamentoInput
  }

  export type tbl_agendamentoCreateOrConnectWithoutDoacaoInput = {
    where: tbl_agendamentoWhereUniqueInput
    create: XOR<tbl_agendamentoCreateWithoutDoacaoInput, tbl_agendamentoUncheckedCreateWithoutDoacaoInput>
  }

  export type tbl_agendamentoCreateManyDoacaoInputEnvelope = {
    data: tbl_agendamentoCreateManyDoacaoInput | tbl_agendamentoCreateManyDoacaoInput[]
    skipDuplicates?: boolean
  }

  export type tbl_agendamentoUpsertWithWhereUniqueWithoutDoacaoInput = {
    where: tbl_agendamentoWhereUniqueInput
    update: XOR<tbl_agendamentoUpdateWithoutDoacaoInput, tbl_agendamentoUncheckedUpdateWithoutDoacaoInput>
    create: XOR<tbl_agendamentoCreateWithoutDoacaoInput, tbl_agendamentoUncheckedCreateWithoutDoacaoInput>
  }

  export type tbl_agendamentoUpdateWithWhereUniqueWithoutDoacaoInput = {
    where: tbl_agendamentoWhereUniqueInput
    data: XOR<tbl_agendamentoUpdateWithoutDoacaoInput, tbl_agendamentoUncheckedUpdateWithoutDoacaoInput>
  }

  export type tbl_agendamentoUpdateManyWithWhereWithoutDoacaoInput = {
    where: tbl_agendamentoScalarWhereInput
    data: XOR<tbl_agendamentoUpdateManyMutationInput, tbl_agendamentoUncheckedUpdateManyWithoutDoacaoInput>
  }

  export type tbl_agendamentoScalarWhereInput = {
    AND?: tbl_agendamentoScalarWhereInput | tbl_agendamentoScalarWhereInput[]
    OR?: tbl_agendamentoScalarWhereInput[]
    NOT?: tbl_agendamentoScalarWhereInput | tbl_agendamentoScalarWhereInput[]
    id?: IntFilter<"tbl_agendamento"> | number
    status?: Enumtbl_agendamento_statusFilter<"tbl_agendamento"> | $Enums.tbl_agendamento_status
    data?: DateTimeFilter<"tbl_agendamento"> | Date | string
    hora?: DateTimeFilter<"tbl_agendamento"> | Date | string
    id_usuario?: IntNullableFilter<"tbl_agendamento"> | number | null
    id_doacao?: IntNullableFilter<"tbl_agendamento"> | number | null
    id_hospital?: IntNullableFilter<"tbl_agendamento"> | number | null
  }

  export type tbl_agendamentoCreateWithoutHospitalInput = {
    status?: $Enums.tbl_agendamento_status
    data: Date | string
    hora: Date | string
    usuario?: tbl_usuarioCreateNestedOneWithoutAgendamentosInput
    doacao?: tbl_doacaoCreateNestedOneWithoutAgendamentosInput
    tbl_registro_doacao?: tbl_registro_doacaoCreateNestedOneWithoutTbl_agendamentoInput
  }

  export type tbl_agendamentoUncheckedCreateWithoutHospitalInput = {
    id?: number
    status?: $Enums.tbl_agendamento_status
    data: Date | string
    hora: Date | string
    id_usuario?: number | null
    id_doacao?: number | null
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedCreateNestedOneWithoutTbl_agendamentoInput
  }

  export type tbl_agendamentoCreateOrConnectWithoutHospitalInput = {
    where: tbl_agendamentoWhereUniqueInput
    create: XOR<tbl_agendamentoCreateWithoutHospitalInput, tbl_agendamentoUncheckedCreateWithoutHospitalInput>
  }

  export type tbl_agendamentoCreateManyHospitalInputEnvelope = {
    data: tbl_agendamentoCreateManyHospitalInput | tbl_agendamentoCreateManyHospitalInput[]
    skipDuplicates?: boolean
  }

  export type tbl_banco_sangueCreateWithoutTbl_hospitalInput = {
    quantidade?: number
    tbl_tipo_sanguineo: tbl_tipo_sanguineoCreateNestedOneWithoutTbl_banco_sangueInput
  }

  export type tbl_banco_sangueUncheckedCreateWithoutTbl_hospitalInput = {
    id?: number
    id_tipo_sanguineo: number
    quantidade?: number
  }

  export type tbl_banco_sangueCreateOrConnectWithoutTbl_hospitalInput = {
    where: tbl_banco_sangueWhereUniqueInput
    create: XOR<tbl_banco_sangueCreateWithoutTbl_hospitalInput, tbl_banco_sangueUncheckedCreateWithoutTbl_hospitalInput>
  }

  export type tbl_banco_sangueCreateManyTbl_hospitalInputEnvelope = {
    data: tbl_banco_sangueCreateManyTbl_hospitalInput | tbl_banco_sangueCreateManyTbl_hospitalInput[]
    skipDuplicates?: boolean
  }

  export type tbl_registro_doacaoCreateWithoutTbl_hospitalInput = {
    data_doacao: Date | string
    local_doacao: string
    observacao?: string | null
    foto_comprovante?: string | null
    data_registro?: Date | string | null
    tbl_agendamento: tbl_agendamentoCreateNestedOneWithoutTbl_registro_doacaoInput
    tbl_usuario: tbl_usuarioCreateNestedOneWithoutTbl_registro_doacaoInput
  }

  export type tbl_registro_doacaoUncheckedCreateWithoutTbl_hospitalInput = {
    id?: number
    id_agendamento: number
    id_usuario: number
    data_doacao: Date | string
    local_doacao: string
    observacao?: string | null
    foto_comprovante?: string | null
    data_registro?: Date | string | null
  }

  export type tbl_registro_doacaoCreateOrConnectWithoutTbl_hospitalInput = {
    where: tbl_registro_doacaoWhereUniqueInput
    create: XOR<tbl_registro_doacaoCreateWithoutTbl_hospitalInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_hospitalInput>
  }

  export type tbl_registro_doacaoCreateManyTbl_hospitalInputEnvelope = {
    data: tbl_registro_doacaoCreateManyTbl_hospitalInput | tbl_registro_doacaoCreateManyTbl_hospitalInput[]
    skipDuplicates?: boolean
  }

  export type tbl_agendamentoUpsertWithWhereUniqueWithoutHospitalInput = {
    where: tbl_agendamentoWhereUniqueInput
    update: XOR<tbl_agendamentoUpdateWithoutHospitalInput, tbl_agendamentoUncheckedUpdateWithoutHospitalInput>
    create: XOR<tbl_agendamentoCreateWithoutHospitalInput, tbl_agendamentoUncheckedCreateWithoutHospitalInput>
  }

  export type tbl_agendamentoUpdateWithWhereUniqueWithoutHospitalInput = {
    where: tbl_agendamentoWhereUniqueInput
    data: XOR<tbl_agendamentoUpdateWithoutHospitalInput, tbl_agendamentoUncheckedUpdateWithoutHospitalInput>
  }

  export type tbl_agendamentoUpdateManyWithWhereWithoutHospitalInput = {
    where: tbl_agendamentoScalarWhereInput
    data: XOR<tbl_agendamentoUpdateManyMutationInput, tbl_agendamentoUncheckedUpdateManyWithoutHospitalInput>
  }

  export type tbl_banco_sangueUpsertWithWhereUniqueWithoutTbl_hospitalInput = {
    where: tbl_banco_sangueWhereUniqueInput
    update: XOR<tbl_banco_sangueUpdateWithoutTbl_hospitalInput, tbl_banco_sangueUncheckedUpdateWithoutTbl_hospitalInput>
    create: XOR<tbl_banco_sangueCreateWithoutTbl_hospitalInput, tbl_banco_sangueUncheckedCreateWithoutTbl_hospitalInput>
  }

  export type tbl_banco_sangueUpdateWithWhereUniqueWithoutTbl_hospitalInput = {
    where: tbl_banco_sangueWhereUniqueInput
    data: XOR<tbl_banco_sangueUpdateWithoutTbl_hospitalInput, tbl_banco_sangueUncheckedUpdateWithoutTbl_hospitalInput>
  }

  export type tbl_banco_sangueUpdateManyWithWhereWithoutTbl_hospitalInput = {
    where: tbl_banco_sangueScalarWhereInput
    data: XOR<tbl_banco_sangueUpdateManyMutationInput, tbl_banco_sangueUncheckedUpdateManyWithoutTbl_hospitalInput>
  }

  export type tbl_banco_sangueScalarWhereInput = {
    AND?: tbl_banco_sangueScalarWhereInput | tbl_banco_sangueScalarWhereInput[]
    OR?: tbl_banco_sangueScalarWhereInput[]
    NOT?: tbl_banco_sangueScalarWhereInput | tbl_banco_sangueScalarWhereInput[]
    id?: IntFilter<"tbl_banco_sangue"> | number
    id_hospital?: IntFilter<"tbl_banco_sangue"> | number
    id_tipo_sanguineo?: IntFilter<"tbl_banco_sangue"> | number
    quantidade?: IntFilter<"tbl_banco_sangue"> | number
  }

  export type tbl_registro_doacaoUpsertWithWhereUniqueWithoutTbl_hospitalInput = {
    where: tbl_registro_doacaoWhereUniqueInput
    update: XOR<tbl_registro_doacaoUpdateWithoutTbl_hospitalInput, tbl_registro_doacaoUncheckedUpdateWithoutTbl_hospitalInput>
    create: XOR<tbl_registro_doacaoCreateWithoutTbl_hospitalInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_hospitalInput>
  }

  export type tbl_registro_doacaoUpdateWithWhereUniqueWithoutTbl_hospitalInput = {
    where: tbl_registro_doacaoWhereUniqueInput
    data: XOR<tbl_registro_doacaoUpdateWithoutTbl_hospitalInput, tbl_registro_doacaoUncheckedUpdateWithoutTbl_hospitalInput>
  }

  export type tbl_registro_doacaoUpdateManyWithWhereWithoutTbl_hospitalInput = {
    where: tbl_registro_doacaoScalarWhereInput
    data: XOR<tbl_registro_doacaoUpdateManyMutationInput, tbl_registro_doacaoUncheckedUpdateManyWithoutTbl_hospitalInput>
  }

  export type tbl_registro_doacaoScalarWhereInput = {
    AND?: tbl_registro_doacaoScalarWhereInput | tbl_registro_doacaoScalarWhereInput[]
    OR?: tbl_registro_doacaoScalarWhereInput[]
    NOT?: tbl_registro_doacaoScalarWhereInput | tbl_registro_doacaoScalarWhereInput[]
    id?: IntFilter<"tbl_registro_doacao"> | number
    id_agendamento?: IntFilter<"tbl_registro_doacao"> | number
    id_usuario?: IntFilter<"tbl_registro_doacao"> | number
    id_hospital?: IntFilter<"tbl_registro_doacao"> | number
    data_doacao?: DateTimeFilter<"tbl_registro_doacao"> | Date | string
    local_doacao?: StringFilter<"tbl_registro_doacao"> | string
    observacao?: StringNullableFilter<"tbl_registro_doacao"> | string | null
    foto_comprovante?: StringNullableFilter<"tbl_registro_doacao"> | string | null
    data_registro?: DateTimeNullableFilter<"tbl_registro_doacao"> | Date | string | null
  }

  export type tbl_usuarioCreateWithoutSexoInput = {
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
    agendamentos?: tbl_agendamentoCreateNestedManyWithoutUsuarioInput
    tbl_certificado?: tbl_certificadoCreateNestedManyWithoutTbl_usuarioInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaCreateNestedManyWithoutTbl_usuarioInput
    tbl_telefone?: tbl_telefoneCreateNestedManyWithoutTbl_usuarioInput
    tbl_registro_doacao?: tbl_registro_doacaoCreateNestedManyWithoutTbl_usuarioInput
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoCreateNestedOneWithoutTbl_usuarioInput
  }

  export type tbl_usuarioUncheckedCreateWithoutSexoInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    id_tipo_sanguineo?: number | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
    agendamentos?: tbl_agendamentoUncheckedCreateNestedManyWithoutUsuarioInput
    tbl_certificado?: tbl_certificadoUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_telefone?: tbl_telefoneUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedCreateNestedManyWithoutTbl_usuarioInput
  }

  export type tbl_usuarioCreateOrConnectWithoutSexoInput = {
    where: tbl_usuarioWhereUniqueInput
    create: XOR<tbl_usuarioCreateWithoutSexoInput, tbl_usuarioUncheckedCreateWithoutSexoInput>
  }

  export type tbl_usuarioCreateManySexoInputEnvelope = {
    data: tbl_usuarioCreateManySexoInput | tbl_usuarioCreateManySexoInput[]
    skipDuplicates?: boolean
  }

  export type tbl_usuarioUpsertWithWhereUniqueWithoutSexoInput = {
    where: tbl_usuarioWhereUniqueInput
    update: XOR<tbl_usuarioUpdateWithoutSexoInput, tbl_usuarioUncheckedUpdateWithoutSexoInput>
    create: XOR<tbl_usuarioCreateWithoutSexoInput, tbl_usuarioUncheckedCreateWithoutSexoInput>
  }

  export type tbl_usuarioUpdateWithWhereUniqueWithoutSexoInput = {
    where: tbl_usuarioWhereUniqueInput
    data: XOR<tbl_usuarioUpdateWithoutSexoInput, tbl_usuarioUncheckedUpdateWithoutSexoInput>
  }

  export type tbl_usuarioUpdateManyWithWhereWithoutSexoInput = {
    where: tbl_usuarioScalarWhereInput
    data: XOR<tbl_usuarioUpdateManyMutationInput, tbl_usuarioUncheckedUpdateManyWithoutSexoInput>
  }

  export type tbl_usuarioScalarWhereInput = {
    AND?: tbl_usuarioScalarWhereInput | tbl_usuarioScalarWhereInput[]
    OR?: tbl_usuarioScalarWhereInput[]
    NOT?: tbl_usuarioScalarWhereInput | tbl_usuarioScalarWhereInput[]
    id?: IntFilter<"tbl_usuario"> | number
    nome?: StringFilter<"tbl_usuario"> | string
    email?: StringFilter<"tbl_usuario"> | string
    senha_hash?: StringFilter<"tbl_usuario"> | string
    cpf?: StringNullableFilter<"tbl_usuario"> | string | null
    cep?: StringNullableFilter<"tbl_usuario"> | string | null
    logradouro?: StringNullableFilter<"tbl_usuario"> | string | null
    bairro?: StringNullableFilter<"tbl_usuario"> | string | null
    localidade?: StringNullableFilter<"tbl_usuario"> | string | null
    uf?: StringNullableFilter<"tbl_usuario"> | string | null
    numero?: StringNullableFilter<"tbl_usuario"> | string | null
    data_nascimento?: DateTimeNullableFilter<"tbl_usuario"> | Date | string | null
    foto_perfil?: StringNullableFilter<"tbl_usuario"> | string | null
    id_tipo_sanguineo?: IntNullableFilter<"tbl_usuario"> | number | null
    id_sexo?: IntNullableFilter<"tbl_usuario"> | number | null
    data_criacao?: DateTimeNullableFilter<"tbl_usuario"> | Date | string | null
    data_atualizacao?: DateTimeNullableFilter<"tbl_usuario"> | Date | string | null
  }

  export type tbl_usuarioCreateWithoutTbl_telefoneInput = {
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
    agendamentos?: tbl_agendamentoCreateNestedManyWithoutUsuarioInput
    tbl_certificado?: tbl_certificadoCreateNestedManyWithoutTbl_usuarioInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaCreateNestedManyWithoutTbl_usuarioInput
    tbl_registro_doacao?: tbl_registro_doacaoCreateNestedManyWithoutTbl_usuarioInput
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoCreateNestedOneWithoutTbl_usuarioInput
    sexo?: tbl_sexoCreateNestedOneWithoutUsuariosInput
  }

  export type tbl_usuarioUncheckedCreateWithoutTbl_telefoneInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    id_tipo_sanguineo?: number | null
    id_sexo?: number | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
    agendamentos?: tbl_agendamentoUncheckedCreateNestedManyWithoutUsuarioInput
    tbl_certificado?: tbl_certificadoUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedCreateNestedManyWithoutTbl_usuarioInput
  }

  export type tbl_usuarioCreateOrConnectWithoutTbl_telefoneInput = {
    where: tbl_usuarioWhereUniqueInput
    create: XOR<tbl_usuarioCreateWithoutTbl_telefoneInput, tbl_usuarioUncheckedCreateWithoutTbl_telefoneInput>
  }

  export type tbl_usuarioUpsertWithoutTbl_telefoneInput = {
    update: XOR<tbl_usuarioUpdateWithoutTbl_telefoneInput, tbl_usuarioUncheckedUpdateWithoutTbl_telefoneInput>
    create: XOR<tbl_usuarioCreateWithoutTbl_telefoneInput, tbl_usuarioUncheckedCreateWithoutTbl_telefoneInput>
    where?: tbl_usuarioWhereInput
  }

  export type tbl_usuarioUpdateToOneWithWhereWithoutTbl_telefoneInput = {
    where?: tbl_usuarioWhereInput
    data: XOR<tbl_usuarioUpdateWithoutTbl_telefoneInput, tbl_usuarioUncheckedUpdateWithoutTbl_telefoneInput>
  }

  export type tbl_usuarioUpdateWithoutTbl_telefoneInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agendamentos?: tbl_agendamentoUpdateManyWithoutUsuarioNestedInput
    tbl_certificado?: tbl_certificadoUpdateManyWithoutTbl_usuarioNestedInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUpdateManyWithoutTbl_usuarioNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUpdateManyWithoutTbl_usuarioNestedInput
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoUpdateOneWithoutTbl_usuarioNestedInput
    sexo?: tbl_sexoUpdateOneWithoutUsuariosNestedInput
  }

  export type tbl_usuarioUncheckedUpdateWithoutTbl_telefoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    id_tipo_sanguineo?: NullableIntFieldUpdateOperationsInput | number | null
    id_sexo?: NullableIntFieldUpdateOperationsInput | number | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agendamentos?: tbl_agendamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    tbl_certificado?: tbl_certificadoUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedUpdateManyWithoutTbl_usuarioNestedInput
  }

  export type tbl_banco_sangueCreateWithoutTbl_tipo_sanguineoInput = {
    quantidade?: number
    tbl_hospital: tbl_hospitalCreateNestedOneWithoutTbl_banco_sangueInput
  }

  export type tbl_banco_sangueUncheckedCreateWithoutTbl_tipo_sanguineoInput = {
    id?: number
    id_hospital: number
    quantidade?: number
  }

  export type tbl_banco_sangueCreateOrConnectWithoutTbl_tipo_sanguineoInput = {
    where: tbl_banco_sangueWhereUniqueInput
    create: XOR<tbl_banco_sangueCreateWithoutTbl_tipo_sanguineoInput, tbl_banco_sangueUncheckedCreateWithoutTbl_tipo_sanguineoInput>
  }

  export type tbl_banco_sangueCreateManyTbl_tipo_sanguineoInputEnvelope = {
    data: tbl_banco_sangueCreateManyTbl_tipo_sanguineoInput | tbl_banco_sangueCreateManyTbl_tipo_sanguineoInput[]
    skipDuplicates?: boolean
  }

  export type tbl_usuarioCreateWithoutTbl_tipo_sanguineoInput = {
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
    agendamentos?: tbl_agendamentoCreateNestedManyWithoutUsuarioInput
    tbl_certificado?: tbl_certificadoCreateNestedManyWithoutTbl_usuarioInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaCreateNestedManyWithoutTbl_usuarioInput
    tbl_telefone?: tbl_telefoneCreateNestedManyWithoutTbl_usuarioInput
    tbl_registro_doacao?: tbl_registro_doacaoCreateNestedManyWithoutTbl_usuarioInput
    sexo?: tbl_sexoCreateNestedOneWithoutUsuariosInput
  }

  export type tbl_usuarioUncheckedCreateWithoutTbl_tipo_sanguineoInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    id_sexo?: number | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
    agendamentos?: tbl_agendamentoUncheckedCreateNestedManyWithoutUsuarioInput
    tbl_certificado?: tbl_certificadoUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_telefone?: tbl_telefoneUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedCreateNestedManyWithoutTbl_usuarioInput
  }

  export type tbl_usuarioCreateOrConnectWithoutTbl_tipo_sanguineoInput = {
    where: tbl_usuarioWhereUniqueInput
    create: XOR<tbl_usuarioCreateWithoutTbl_tipo_sanguineoInput, tbl_usuarioUncheckedCreateWithoutTbl_tipo_sanguineoInput>
  }

  export type tbl_usuarioCreateManyTbl_tipo_sanguineoInputEnvelope = {
    data: tbl_usuarioCreateManyTbl_tipo_sanguineoInput | tbl_usuarioCreateManyTbl_tipo_sanguineoInput[]
    skipDuplicates?: boolean
  }

  export type tbl_banco_sangueUpsertWithWhereUniqueWithoutTbl_tipo_sanguineoInput = {
    where: tbl_banco_sangueWhereUniqueInput
    update: XOR<tbl_banco_sangueUpdateWithoutTbl_tipo_sanguineoInput, tbl_banco_sangueUncheckedUpdateWithoutTbl_tipo_sanguineoInput>
    create: XOR<tbl_banco_sangueCreateWithoutTbl_tipo_sanguineoInput, tbl_banco_sangueUncheckedCreateWithoutTbl_tipo_sanguineoInput>
  }

  export type tbl_banco_sangueUpdateWithWhereUniqueWithoutTbl_tipo_sanguineoInput = {
    where: tbl_banco_sangueWhereUniqueInput
    data: XOR<tbl_banco_sangueUpdateWithoutTbl_tipo_sanguineoInput, tbl_banco_sangueUncheckedUpdateWithoutTbl_tipo_sanguineoInput>
  }

  export type tbl_banco_sangueUpdateManyWithWhereWithoutTbl_tipo_sanguineoInput = {
    where: tbl_banco_sangueScalarWhereInput
    data: XOR<tbl_banco_sangueUpdateManyMutationInput, tbl_banco_sangueUncheckedUpdateManyWithoutTbl_tipo_sanguineoInput>
  }

  export type tbl_usuarioUpsertWithWhereUniqueWithoutTbl_tipo_sanguineoInput = {
    where: tbl_usuarioWhereUniqueInput
    update: XOR<tbl_usuarioUpdateWithoutTbl_tipo_sanguineoInput, tbl_usuarioUncheckedUpdateWithoutTbl_tipo_sanguineoInput>
    create: XOR<tbl_usuarioCreateWithoutTbl_tipo_sanguineoInput, tbl_usuarioUncheckedCreateWithoutTbl_tipo_sanguineoInput>
  }

  export type tbl_usuarioUpdateWithWhereUniqueWithoutTbl_tipo_sanguineoInput = {
    where: tbl_usuarioWhereUniqueInput
    data: XOR<tbl_usuarioUpdateWithoutTbl_tipo_sanguineoInput, tbl_usuarioUncheckedUpdateWithoutTbl_tipo_sanguineoInput>
  }

  export type tbl_usuarioUpdateManyWithWhereWithoutTbl_tipo_sanguineoInput = {
    where: tbl_usuarioScalarWhereInput
    data: XOR<tbl_usuarioUpdateManyMutationInput, tbl_usuarioUncheckedUpdateManyWithoutTbl_tipo_sanguineoInput>
  }

  export type tbl_agendamentoCreateWithoutUsuarioInput = {
    status?: $Enums.tbl_agendamento_status
    data: Date | string
    hora: Date | string
    doacao?: tbl_doacaoCreateNestedOneWithoutAgendamentosInput
    hospital?: tbl_hospitalCreateNestedOneWithoutAgendamentosInput
    tbl_registro_doacao?: tbl_registro_doacaoCreateNestedOneWithoutTbl_agendamentoInput
  }

  export type tbl_agendamentoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    status?: $Enums.tbl_agendamento_status
    data: Date | string
    hora: Date | string
    id_doacao?: number | null
    id_hospital?: number | null
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedCreateNestedOneWithoutTbl_agendamentoInput
  }

  export type tbl_agendamentoCreateOrConnectWithoutUsuarioInput = {
    where: tbl_agendamentoWhereUniqueInput
    create: XOR<tbl_agendamentoCreateWithoutUsuarioInput, tbl_agendamentoUncheckedCreateWithoutUsuarioInput>
  }

  export type tbl_agendamentoCreateManyUsuarioInputEnvelope = {
    data: tbl_agendamentoCreateManyUsuarioInput | tbl_agendamentoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type tbl_certificadoCreateWithoutTbl_usuarioInput = {
    titulo: string
    organizacao: string
    data_emissao: Date | string
  }

  export type tbl_certificadoUncheckedCreateWithoutTbl_usuarioInput = {
    id?: number
    titulo: string
    organizacao: string
    data_emissao: Date | string
  }

  export type tbl_certificadoCreateOrConnectWithoutTbl_usuarioInput = {
    where: tbl_certificadoWhereUniqueInput
    create: XOR<tbl_certificadoCreateWithoutTbl_usuarioInput, tbl_certificadoUncheckedCreateWithoutTbl_usuarioInput>
  }

  export type tbl_certificadoCreateManyTbl_usuarioInputEnvelope = {
    data: tbl_certificadoCreateManyTbl_usuarioInput | tbl_certificadoCreateManyTbl_usuarioInput[]
    skipDuplicates?: boolean
  }

  export type tbl_recuperacao_senhaCreateWithoutTbl_usuarioInput = {
    codigo: string
    criado_em?: Date | string | null
    usado?: boolean | null
  }

  export type tbl_recuperacao_senhaUncheckedCreateWithoutTbl_usuarioInput = {
    id?: number
    codigo: string
    criado_em?: Date | string | null
    usado?: boolean | null
  }

  export type tbl_recuperacao_senhaCreateOrConnectWithoutTbl_usuarioInput = {
    where: tbl_recuperacao_senhaWhereUniqueInput
    create: XOR<tbl_recuperacao_senhaCreateWithoutTbl_usuarioInput, tbl_recuperacao_senhaUncheckedCreateWithoutTbl_usuarioInput>
  }

  export type tbl_recuperacao_senhaCreateManyTbl_usuarioInputEnvelope = {
    data: tbl_recuperacao_senhaCreateManyTbl_usuarioInput | tbl_recuperacao_senhaCreateManyTbl_usuarioInput[]
    skipDuplicates?: boolean
  }

  export type tbl_telefoneCreateWithoutTbl_usuarioInput = {
    tipo: string
    numero: string
  }

  export type tbl_telefoneUncheckedCreateWithoutTbl_usuarioInput = {
    id?: number
    tipo: string
    numero: string
  }

  export type tbl_telefoneCreateOrConnectWithoutTbl_usuarioInput = {
    where: tbl_telefoneWhereUniqueInput
    create: XOR<tbl_telefoneCreateWithoutTbl_usuarioInput, tbl_telefoneUncheckedCreateWithoutTbl_usuarioInput>
  }

  export type tbl_telefoneCreateManyTbl_usuarioInputEnvelope = {
    data: tbl_telefoneCreateManyTbl_usuarioInput | tbl_telefoneCreateManyTbl_usuarioInput[]
    skipDuplicates?: boolean
  }

  export type tbl_registro_doacaoCreateWithoutTbl_usuarioInput = {
    data_doacao: Date | string
    local_doacao: string
    observacao?: string | null
    foto_comprovante?: string | null
    data_registro?: Date | string | null
    tbl_agendamento: tbl_agendamentoCreateNestedOneWithoutTbl_registro_doacaoInput
    tbl_hospital: tbl_hospitalCreateNestedOneWithoutTbl_registro_doacaoInput
  }

  export type tbl_registro_doacaoUncheckedCreateWithoutTbl_usuarioInput = {
    id?: number
    id_agendamento: number
    id_hospital: number
    data_doacao: Date | string
    local_doacao: string
    observacao?: string | null
    foto_comprovante?: string | null
    data_registro?: Date | string | null
  }

  export type tbl_registro_doacaoCreateOrConnectWithoutTbl_usuarioInput = {
    where: tbl_registro_doacaoWhereUniqueInput
    create: XOR<tbl_registro_doacaoCreateWithoutTbl_usuarioInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_usuarioInput>
  }

  export type tbl_registro_doacaoCreateManyTbl_usuarioInputEnvelope = {
    data: tbl_registro_doacaoCreateManyTbl_usuarioInput | tbl_registro_doacaoCreateManyTbl_usuarioInput[]
    skipDuplicates?: boolean
  }

  export type tbl_tipo_sanguineoCreateWithoutTbl_usuarioInput = {
    tipo: string
    tbl_banco_sangue?: tbl_banco_sangueCreateNestedManyWithoutTbl_tipo_sanguineoInput
  }

  export type tbl_tipo_sanguineoUncheckedCreateWithoutTbl_usuarioInput = {
    id?: number
    tipo: string
    tbl_banco_sangue?: tbl_banco_sangueUncheckedCreateNestedManyWithoutTbl_tipo_sanguineoInput
  }

  export type tbl_tipo_sanguineoCreateOrConnectWithoutTbl_usuarioInput = {
    where: tbl_tipo_sanguineoWhereUniqueInput
    create: XOR<tbl_tipo_sanguineoCreateWithoutTbl_usuarioInput, tbl_tipo_sanguineoUncheckedCreateWithoutTbl_usuarioInput>
  }

  export type tbl_sexoCreateWithoutUsuariosInput = {
    sexo: string
  }

  export type tbl_sexoUncheckedCreateWithoutUsuariosInput = {
    id?: number
    sexo: string
  }

  export type tbl_sexoCreateOrConnectWithoutUsuariosInput = {
    where: tbl_sexoWhereUniqueInput
    create: XOR<tbl_sexoCreateWithoutUsuariosInput, tbl_sexoUncheckedCreateWithoutUsuariosInput>
  }

  export type tbl_agendamentoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: tbl_agendamentoWhereUniqueInput
    update: XOR<tbl_agendamentoUpdateWithoutUsuarioInput, tbl_agendamentoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<tbl_agendamentoCreateWithoutUsuarioInput, tbl_agendamentoUncheckedCreateWithoutUsuarioInput>
  }

  export type tbl_agendamentoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: tbl_agendamentoWhereUniqueInput
    data: XOR<tbl_agendamentoUpdateWithoutUsuarioInput, tbl_agendamentoUncheckedUpdateWithoutUsuarioInput>
  }

  export type tbl_agendamentoUpdateManyWithWhereWithoutUsuarioInput = {
    where: tbl_agendamentoScalarWhereInput
    data: XOR<tbl_agendamentoUpdateManyMutationInput, tbl_agendamentoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type tbl_certificadoUpsertWithWhereUniqueWithoutTbl_usuarioInput = {
    where: tbl_certificadoWhereUniqueInput
    update: XOR<tbl_certificadoUpdateWithoutTbl_usuarioInput, tbl_certificadoUncheckedUpdateWithoutTbl_usuarioInput>
    create: XOR<tbl_certificadoCreateWithoutTbl_usuarioInput, tbl_certificadoUncheckedCreateWithoutTbl_usuarioInput>
  }

  export type tbl_certificadoUpdateWithWhereUniqueWithoutTbl_usuarioInput = {
    where: tbl_certificadoWhereUniqueInput
    data: XOR<tbl_certificadoUpdateWithoutTbl_usuarioInput, tbl_certificadoUncheckedUpdateWithoutTbl_usuarioInput>
  }

  export type tbl_certificadoUpdateManyWithWhereWithoutTbl_usuarioInput = {
    where: tbl_certificadoScalarWhereInput
    data: XOR<tbl_certificadoUpdateManyMutationInput, tbl_certificadoUncheckedUpdateManyWithoutTbl_usuarioInput>
  }

  export type tbl_certificadoScalarWhereInput = {
    AND?: tbl_certificadoScalarWhereInput | tbl_certificadoScalarWhereInput[]
    OR?: tbl_certificadoScalarWhereInput[]
    NOT?: tbl_certificadoScalarWhereInput | tbl_certificadoScalarWhereInput[]
    id?: IntFilter<"tbl_certificado"> | number
    titulo?: StringFilter<"tbl_certificado"> | string
    organizacao?: StringFilter<"tbl_certificado"> | string
    data_emissao?: DateTimeFilter<"tbl_certificado"> | Date | string
    id_usuario?: IntNullableFilter<"tbl_certificado"> | number | null
  }

  export type tbl_recuperacao_senhaUpsertWithWhereUniqueWithoutTbl_usuarioInput = {
    where: tbl_recuperacao_senhaWhereUniqueInput
    update: XOR<tbl_recuperacao_senhaUpdateWithoutTbl_usuarioInput, tbl_recuperacao_senhaUncheckedUpdateWithoutTbl_usuarioInput>
    create: XOR<tbl_recuperacao_senhaCreateWithoutTbl_usuarioInput, tbl_recuperacao_senhaUncheckedCreateWithoutTbl_usuarioInput>
  }

  export type tbl_recuperacao_senhaUpdateWithWhereUniqueWithoutTbl_usuarioInput = {
    where: tbl_recuperacao_senhaWhereUniqueInput
    data: XOR<tbl_recuperacao_senhaUpdateWithoutTbl_usuarioInput, tbl_recuperacao_senhaUncheckedUpdateWithoutTbl_usuarioInput>
  }

  export type tbl_recuperacao_senhaUpdateManyWithWhereWithoutTbl_usuarioInput = {
    where: tbl_recuperacao_senhaScalarWhereInput
    data: XOR<tbl_recuperacao_senhaUpdateManyMutationInput, tbl_recuperacao_senhaUncheckedUpdateManyWithoutTbl_usuarioInput>
  }

  export type tbl_recuperacao_senhaScalarWhereInput = {
    AND?: tbl_recuperacao_senhaScalarWhereInput | tbl_recuperacao_senhaScalarWhereInput[]
    OR?: tbl_recuperacao_senhaScalarWhereInput[]
    NOT?: tbl_recuperacao_senhaScalarWhereInput | tbl_recuperacao_senhaScalarWhereInput[]
    id?: IntFilter<"tbl_recuperacao_senha"> | number
    id_usuario?: IntFilter<"tbl_recuperacao_senha"> | number
    codigo?: StringFilter<"tbl_recuperacao_senha"> | string
    criado_em?: DateTimeNullableFilter<"tbl_recuperacao_senha"> | Date | string | null
    usado?: BoolNullableFilter<"tbl_recuperacao_senha"> | boolean | null
  }

  export type tbl_telefoneUpsertWithWhereUniqueWithoutTbl_usuarioInput = {
    where: tbl_telefoneWhereUniqueInput
    update: XOR<tbl_telefoneUpdateWithoutTbl_usuarioInput, tbl_telefoneUncheckedUpdateWithoutTbl_usuarioInput>
    create: XOR<tbl_telefoneCreateWithoutTbl_usuarioInput, tbl_telefoneUncheckedCreateWithoutTbl_usuarioInput>
  }

  export type tbl_telefoneUpdateWithWhereUniqueWithoutTbl_usuarioInput = {
    where: tbl_telefoneWhereUniqueInput
    data: XOR<tbl_telefoneUpdateWithoutTbl_usuarioInput, tbl_telefoneUncheckedUpdateWithoutTbl_usuarioInput>
  }

  export type tbl_telefoneUpdateManyWithWhereWithoutTbl_usuarioInput = {
    where: tbl_telefoneScalarWhereInput
    data: XOR<tbl_telefoneUpdateManyMutationInput, tbl_telefoneUncheckedUpdateManyWithoutTbl_usuarioInput>
  }

  export type tbl_telefoneScalarWhereInput = {
    AND?: tbl_telefoneScalarWhereInput | tbl_telefoneScalarWhereInput[]
    OR?: tbl_telefoneScalarWhereInput[]
    NOT?: tbl_telefoneScalarWhereInput | tbl_telefoneScalarWhereInput[]
    id?: IntFilter<"tbl_telefone"> | number
    tipo?: StringFilter<"tbl_telefone"> | string
    numero?: StringFilter<"tbl_telefone"> | string
    id_usuario?: IntNullableFilter<"tbl_telefone"> | number | null
  }

  export type tbl_registro_doacaoUpsertWithWhereUniqueWithoutTbl_usuarioInput = {
    where: tbl_registro_doacaoWhereUniqueInput
    update: XOR<tbl_registro_doacaoUpdateWithoutTbl_usuarioInput, tbl_registro_doacaoUncheckedUpdateWithoutTbl_usuarioInput>
    create: XOR<tbl_registro_doacaoCreateWithoutTbl_usuarioInput, tbl_registro_doacaoUncheckedCreateWithoutTbl_usuarioInput>
  }

  export type tbl_registro_doacaoUpdateWithWhereUniqueWithoutTbl_usuarioInput = {
    where: tbl_registro_doacaoWhereUniqueInput
    data: XOR<tbl_registro_doacaoUpdateWithoutTbl_usuarioInput, tbl_registro_doacaoUncheckedUpdateWithoutTbl_usuarioInput>
  }

  export type tbl_registro_doacaoUpdateManyWithWhereWithoutTbl_usuarioInput = {
    where: tbl_registro_doacaoScalarWhereInput
    data: XOR<tbl_registro_doacaoUpdateManyMutationInput, tbl_registro_doacaoUncheckedUpdateManyWithoutTbl_usuarioInput>
  }

  export type tbl_tipo_sanguineoUpsertWithoutTbl_usuarioInput = {
    update: XOR<tbl_tipo_sanguineoUpdateWithoutTbl_usuarioInput, tbl_tipo_sanguineoUncheckedUpdateWithoutTbl_usuarioInput>
    create: XOR<tbl_tipo_sanguineoCreateWithoutTbl_usuarioInput, tbl_tipo_sanguineoUncheckedCreateWithoutTbl_usuarioInput>
    where?: tbl_tipo_sanguineoWhereInput
  }

  export type tbl_tipo_sanguineoUpdateToOneWithWhereWithoutTbl_usuarioInput = {
    where?: tbl_tipo_sanguineoWhereInput
    data: XOR<tbl_tipo_sanguineoUpdateWithoutTbl_usuarioInput, tbl_tipo_sanguineoUncheckedUpdateWithoutTbl_usuarioInput>
  }

  export type tbl_tipo_sanguineoUpdateWithoutTbl_usuarioInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    tbl_banco_sangue?: tbl_banco_sangueUpdateManyWithoutTbl_tipo_sanguineoNestedInput
  }

  export type tbl_tipo_sanguineoUncheckedUpdateWithoutTbl_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    tbl_banco_sangue?: tbl_banco_sangueUncheckedUpdateManyWithoutTbl_tipo_sanguineoNestedInput
  }

  export type tbl_sexoUpsertWithoutUsuariosInput = {
    update: XOR<tbl_sexoUpdateWithoutUsuariosInput, tbl_sexoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<tbl_sexoCreateWithoutUsuariosInput, tbl_sexoUncheckedCreateWithoutUsuariosInput>
    where?: tbl_sexoWhereInput
  }

  export type tbl_sexoUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: tbl_sexoWhereInput
    data: XOR<tbl_sexoUpdateWithoutUsuariosInput, tbl_sexoUncheckedUpdateWithoutUsuariosInput>
  }

  export type tbl_sexoUpdateWithoutUsuariosInput = {
    sexo?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_sexoUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_usuarioCreateWithoutTbl_recuperacao_senhaInput = {
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
    agendamentos?: tbl_agendamentoCreateNestedManyWithoutUsuarioInput
    tbl_certificado?: tbl_certificadoCreateNestedManyWithoutTbl_usuarioInput
    tbl_telefone?: tbl_telefoneCreateNestedManyWithoutTbl_usuarioInput
    tbl_registro_doacao?: tbl_registro_doacaoCreateNestedManyWithoutTbl_usuarioInput
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoCreateNestedOneWithoutTbl_usuarioInput
    sexo?: tbl_sexoCreateNestedOneWithoutUsuariosInput
  }

  export type tbl_usuarioUncheckedCreateWithoutTbl_recuperacao_senhaInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    id_tipo_sanguineo?: number | null
    id_sexo?: number | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
    agendamentos?: tbl_agendamentoUncheckedCreateNestedManyWithoutUsuarioInput
    tbl_certificado?: tbl_certificadoUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_telefone?: tbl_telefoneUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedCreateNestedManyWithoutTbl_usuarioInput
  }

  export type tbl_usuarioCreateOrConnectWithoutTbl_recuperacao_senhaInput = {
    where: tbl_usuarioWhereUniqueInput
    create: XOR<tbl_usuarioCreateWithoutTbl_recuperacao_senhaInput, tbl_usuarioUncheckedCreateWithoutTbl_recuperacao_senhaInput>
  }

  export type tbl_usuarioUpsertWithoutTbl_recuperacao_senhaInput = {
    update: XOR<tbl_usuarioUpdateWithoutTbl_recuperacao_senhaInput, tbl_usuarioUncheckedUpdateWithoutTbl_recuperacao_senhaInput>
    create: XOR<tbl_usuarioCreateWithoutTbl_recuperacao_senhaInput, tbl_usuarioUncheckedCreateWithoutTbl_recuperacao_senhaInput>
    where?: tbl_usuarioWhereInput
  }

  export type tbl_usuarioUpdateToOneWithWhereWithoutTbl_recuperacao_senhaInput = {
    where?: tbl_usuarioWhereInput
    data: XOR<tbl_usuarioUpdateWithoutTbl_recuperacao_senhaInput, tbl_usuarioUncheckedUpdateWithoutTbl_recuperacao_senhaInput>
  }

  export type tbl_usuarioUpdateWithoutTbl_recuperacao_senhaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agendamentos?: tbl_agendamentoUpdateManyWithoutUsuarioNestedInput
    tbl_certificado?: tbl_certificadoUpdateManyWithoutTbl_usuarioNestedInput
    tbl_telefone?: tbl_telefoneUpdateManyWithoutTbl_usuarioNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUpdateManyWithoutTbl_usuarioNestedInput
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoUpdateOneWithoutTbl_usuarioNestedInput
    sexo?: tbl_sexoUpdateOneWithoutUsuariosNestedInput
  }

  export type tbl_usuarioUncheckedUpdateWithoutTbl_recuperacao_senhaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    id_tipo_sanguineo?: NullableIntFieldUpdateOperationsInput | number | null
    id_sexo?: NullableIntFieldUpdateOperationsInput | number | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agendamentos?: tbl_agendamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    tbl_certificado?: tbl_certificadoUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_telefone?: tbl_telefoneUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedUpdateManyWithoutTbl_usuarioNestedInput
  }

  export type tbl_agendamentoCreateWithoutTbl_registro_doacaoInput = {
    status?: $Enums.tbl_agendamento_status
    data: Date | string
    hora: Date | string
    usuario?: tbl_usuarioCreateNestedOneWithoutAgendamentosInput
    doacao?: tbl_doacaoCreateNestedOneWithoutAgendamentosInput
    hospital?: tbl_hospitalCreateNestedOneWithoutAgendamentosInput
  }

  export type tbl_agendamentoUncheckedCreateWithoutTbl_registro_doacaoInput = {
    id?: number
    status?: $Enums.tbl_agendamento_status
    data: Date | string
    hora: Date | string
    id_usuario?: number | null
    id_doacao?: number | null
    id_hospital?: number | null
  }

  export type tbl_agendamentoCreateOrConnectWithoutTbl_registro_doacaoInput = {
    where: tbl_agendamentoWhereUniqueInput
    create: XOR<tbl_agendamentoCreateWithoutTbl_registro_doacaoInput, tbl_agendamentoUncheckedCreateWithoutTbl_registro_doacaoInput>
  }

  export type tbl_usuarioCreateWithoutTbl_registro_doacaoInput = {
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
    agendamentos?: tbl_agendamentoCreateNestedManyWithoutUsuarioInput
    tbl_certificado?: tbl_certificadoCreateNestedManyWithoutTbl_usuarioInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaCreateNestedManyWithoutTbl_usuarioInput
    tbl_telefone?: tbl_telefoneCreateNestedManyWithoutTbl_usuarioInput
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoCreateNestedOneWithoutTbl_usuarioInput
    sexo?: tbl_sexoCreateNestedOneWithoutUsuariosInput
  }

  export type tbl_usuarioUncheckedCreateWithoutTbl_registro_doacaoInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    id_tipo_sanguineo?: number | null
    id_sexo?: number | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
    agendamentos?: tbl_agendamentoUncheckedCreateNestedManyWithoutUsuarioInput
    tbl_certificado?: tbl_certificadoUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUncheckedCreateNestedManyWithoutTbl_usuarioInput
    tbl_telefone?: tbl_telefoneUncheckedCreateNestedManyWithoutTbl_usuarioInput
  }

  export type tbl_usuarioCreateOrConnectWithoutTbl_registro_doacaoInput = {
    where: tbl_usuarioWhereUniqueInput
    create: XOR<tbl_usuarioCreateWithoutTbl_registro_doacaoInput, tbl_usuarioUncheckedCreateWithoutTbl_registro_doacaoInput>
  }

  export type tbl_hospitalCreateWithoutTbl_registro_doacaoInput = {
    nome: string
    email: string
    senha: string
    cnpj: string
    crm: string
    cep: string
    telefone: string
    capacidade_maxima?: number
    convenios: string
    horario_abertura?: Date | string
    horario_fechamento?: Date | string
    foto: string
    complemento?: string | null
    agendamentos?: tbl_agendamentoCreateNestedManyWithoutHospitalInput
    tbl_banco_sangue?: tbl_banco_sangueCreateNestedManyWithoutTbl_hospitalInput
  }

  export type tbl_hospitalUncheckedCreateWithoutTbl_registro_doacaoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cnpj: string
    crm: string
    cep: string
    telefone: string
    capacidade_maxima?: number
    convenios: string
    horario_abertura?: Date | string
    horario_fechamento?: Date | string
    foto: string
    complemento?: string | null
    agendamentos?: tbl_agendamentoUncheckedCreateNestedManyWithoutHospitalInput
    tbl_banco_sangue?: tbl_banco_sangueUncheckedCreateNestedManyWithoutTbl_hospitalInput
  }

  export type tbl_hospitalCreateOrConnectWithoutTbl_registro_doacaoInput = {
    where: tbl_hospitalWhereUniqueInput
    create: XOR<tbl_hospitalCreateWithoutTbl_registro_doacaoInput, tbl_hospitalUncheckedCreateWithoutTbl_registro_doacaoInput>
  }

  export type tbl_agendamentoUpsertWithoutTbl_registro_doacaoInput = {
    update: XOR<tbl_agendamentoUpdateWithoutTbl_registro_doacaoInput, tbl_agendamentoUncheckedUpdateWithoutTbl_registro_doacaoInput>
    create: XOR<tbl_agendamentoCreateWithoutTbl_registro_doacaoInput, tbl_agendamentoUncheckedCreateWithoutTbl_registro_doacaoInput>
    where?: tbl_agendamentoWhereInput
  }

  export type tbl_agendamentoUpdateToOneWithWhereWithoutTbl_registro_doacaoInput = {
    where?: tbl_agendamentoWhereInput
    data: XOR<tbl_agendamentoUpdateWithoutTbl_registro_doacaoInput, tbl_agendamentoUncheckedUpdateWithoutTbl_registro_doacaoInput>
  }

  export type tbl_agendamentoUpdateWithoutTbl_registro_doacaoInput = {
    status?: Enumtbl_agendamento_statusFieldUpdateOperationsInput | $Enums.tbl_agendamento_status
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: tbl_usuarioUpdateOneWithoutAgendamentosNestedInput
    doacao?: tbl_doacaoUpdateOneWithoutAgendamentosNestedInput
    hospital?: tbl_hospitalUpdateOneWithoutAgendamentosNestedInput
  }

  export type tbl_agendamentoUncheckedUpdateWithoutTbl_registro_doacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enumtbl_agendamento_statusFieldUpdateOperationsInput | $Enums.tbl_agendamento_status
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_doacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_hospital?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tbl_usuarioUpsertWithoutTbl_registro_doacaoInput = {
    update: XOR<tbl_usuarioUpdateWithoutTbl_registro_doacaoInput, tbl_usuarioUncheckedUpdateWithoutTbl_registro_doacaoInput>
    create: XOR<tbl_usuarioCreateWithoutTbl_registro_doacaoInput, tbl_usuarioUncheckedCreateWithoutTbl_registro_doacaoInput>
    where?: tbl_usuarioWhereInput
  }

  export type tbl_usuarioUpdateToOneWithWhereWithoutTbl_registro_doacaoInput = {
    where?: tbl_usuarioWhereInput
    data: XOR<tbl_usuarioUpdateWithoutTbl_registro_doacaoInput, tbl_usuarioUncheckedUpdateWithoutTbl_registro_doacaoInput>
  }

  export type tbl_usuarioUpdateWithoutTbl_registro_doacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agendamentos?: tbl_agendamentoUpdateManyWithoutUsuarioNestedInput
    tbl_certificado?: tbl_certificadoUpdateManyWithoutTbl_usuarioNestedInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUpdateManyWithoutTbl_usuarioNestedInput
    tbl_telefone?: tbl_telefoneUpdateManyWithoutTbl_usuarioNestedInput
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoUpdateOneWithoutTbl_usuarioNestedInput
    sexo?: tbl_sexoUpdateOneWithoutUsuariosNestedInput
  }

  export type tbl_usuarioUncheckedUpdateWithoutTbl_registro_doacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    id_tipo_sanguineo?: NullableIntFieldUpdateOperationsInput | number | null
    id_sexo?: NullableIntFieldUpdateOperationsInput | number | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agendamentos?: tbl_agendamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    tbl_certificado?: tbl_certificadoUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_telefone?: tbl_telefoneUncheckedUpdateManyWithoutTbl_usuarioNestedInput
  }

  export type tbl_hospitalUpsertWithoutTbl_registro_doacaoInput = {
    update: XOR<tbl_hospitalUpdateWithoutTbl_registro_doacaoInput, tbl_hospitalUncheckedUpdateWithoutTbl_registro_doacaoInput>
    create: XOR<tbl_hospitalCreateWithoutTbl_registro_doacaoInput, tbl_hospitalUncheckedCreateWithoutTbl_registro_doacaoInput>
    where?: tbl_hospitalWhereInput
  }

  export type tbl_hospitalUpdateToOneWithWhereWithoutTbl_registro_doacaoInput = {
    where?: tbl_hospitalWhereInput
    data: XOR<tbl_hospitalUpdateWithoutTbl_registro_doacaoInput, tbl_hospitalUncheckedUpdateWithoutTbl_registro_doacaoInput>
  }

  export type tbl_hospitalUpdateWithoutTbl_registro_doacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    capacidade_maxima?: IntFieldUpdateOperationsInput | number
    convenios?: StringFieldUpdateOperationsInput | string
    horario_abertura?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: tbl_agendamentoUpdateManyWithoutHospitalNestedInput
    tbl_banco_sangue?: tbl_banco_sangueUpdateManyWithoutTbl_hospitalNestedInput
  }

  export type tbl_hospitalUncheckedUpdateWithoutTbl_registro_doacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    crm?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    capacidade_maxima?: IntFieldUpdateOperationsInput | number
    convenios?: StringFieldUpdateOperationsInput | string
    horario_abertura?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_fechamento?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: tbl_agendamentoUncheckedUpdateManyWithoutHospitalNestedInput
    tbl_banco_sangue?: tbl_banco_sangueUncheckedUpdateManyWithoutTbl_hospitalNestedInput
  }

  export type tbl_agendamentoCreateManyDoacaoInput = {
    id?: number
    status?: $Enums.tbl_agendamento_status
    data: Date | string
    hora: Date | string
    id_usuario?: number | null
    id_hospital?: number | null
  }

  export type tbl_agendamentoUpdateWithoutDoacaoInput = {
    status?: Enumtbl_agendamento_statusFieldUpdateOperationsInput | $Enums.tbl_agendamento_status
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: tbl_usuarioUpdateOneWithoutAgendamentosNestedInput
    hospital?: tbl_hospitalUpdateOneWithoutAgendamentosNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUpdateOneWithoutTbl_agendamentoNestedInput
  }

  export type tbl_agendamentoUncheckedUpdateWithoutDoacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enumtbl_agendamento_statusFieldUpdateOperationsInput | $Enums.tbl_agendamento_status
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_hospital?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedUpdateOneWithoutTbl_agendamentoNestedInput
  }

  export type tbl_agendamentoUncheckedUpdateManyWithoutDoacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enumtbl_agendamento_statusFieldUpdateOperationsInput | $Enums.tbl_agendamento_status
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_hospital?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tbl_agendamentoCreateManyHospitalInput = {
    id?: number
    status?: $Enums.tbl_agendamento_status
    data: Date | string
    hora: Date | string
    id_usuario?: number | null
    id_doacao?: number | null
  }

  export type tbl_banco_sangueCreateManyTbl_hospitalInput = {
    id?: number
    id_tipo_sanguineo: number
    quantidade?: number
  }

  export type tbl_registro_doacaoCreateManyTbl_hospitalInput = {
    id?: number
    id_agendamento: number
    id_usuario: number
    data_doacao: Date | string
    local_doacao: string
    observacao?: string | null
    foto_comprovante?: string | null
    data_registro?: Date | string | null
  }

  export type tbl_agendamentoUpdateWithoutHospitalInput = {
    status?: Enumtbl_agendamento_statusFieldUpdateOperationsInput | $Enums.tbl_agendamento_status
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: tbl_usuarioUpdateOneWithoutAgendamentosNestedInput
    doacao?: tbl_doacaoUpdateOneWithoutAgendamentosNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUpdateOneWithoutTbl_agendamentoNestedInput
  }

  export type tbl_agendamentoUncheckedUpdateWithoutHospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enumtbl_agendamento_statusFieldUpdateOperationsInput | $Enums.tbl_agendamento_status
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_doacao?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedUpdateOneWithoutTbl_agendamentoNestedInput
  }

  export type tbl_agendamentoUncheckedUpdateManyWithoutHospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enumtbl_agendamento_statusFieldUpdateOperationsInput | $Enums.tbl_agendamento_status
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    id_doacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tbl_banco_sangueUpdateWithoutTbl_hospitalInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoUpdateOneRequiredWithoutTbl_banco_sangueNestedInput
  }

  export type tbl_banco_sangueUncheckedUpdateWithoutTbl_hospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_tipo_sanguineo?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_banco_sangueUncheckedUpdateManyWithoutTbl_hospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_tipo_sanguineo?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_registro_doacaoUpdateWithoutTbl_hospitalInput = {
    data_doacao?: DateTimeFieldUpdateOperationsInput | Date | string
    local_doacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_comprovante?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tbl_agendamento?: tbl_agendamentoUpdateOneRequiredWithoutTbl_registro_doacaoNestedInput
    tbl_usuario?: tbl_usuarioUpdateOneRequiredWithoutTbl_registro_doacaoNestedInput
  }

  export type tbl_registro_doacaoUncheckedUpdateWithoutTbl_hospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_agendamento?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    data_doacao?: DateTimeFieldUpdateOperationsInput | Date | string
    local_doacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_comprovante?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_registro_doacaoUncheckedUpdateManyWithoutTbl_hospitalInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_agendamento?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    data_doacao?: DateTimeFieldUpdateOperationsInput | Date | string
    local_doacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_comprovante?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_usuarioCreateManySexoInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    id_tipo_sanguineo?: number | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
  }

  export type tbl_usuarioUpdateWithoutSexoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agendamentos?: tbl_agendamentoUpdateManyWithoutUsuarioNestedInput
    tbl_certificado?: tbl_certificadoUpdateManyWithoutTbl_usuarioNestedInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUpdateManyWithoutTbl_usuarioNestedInput
    tbl_telefone?: tbl_telefoneUpdateManyWithoutTbl_usuarioNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUpdateManyWithoutTbl_usuarioNestedInput
    tbl_tipo_sanguineo?: tbl_tipo_sanguineoUpdateOneWithoutTbl_usuarioNestedInput
  }

  export type tbl_usuarioUncheckedUpdateWithoutSexoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    id_tipo_sanguineo?: NullableIntFieldUpdateOperationsInput | number | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agendamentos?: tbl_agendamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    tbl_certificado?: tbl_certificadoUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_telefone?: tbl_telefoneUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedUpdateManyWithoutTbl_usuarioNestedInput
  }

  export type tbl_usuarioUncheckedUpdateManyWithoutSexoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    id_tipo_sanguineo?: NullableIntFieldUpdateOperationsInput | number | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_banco_sangueCreateManyTbl_tipo_sanguineoInput = {
    id?: number
    id_hospital: number
    quantidade?: number
  }

  export type tbl_usuarioCreateManyTbl_tipo_sanguineoInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    cpf?: string | null
    cep?: string | null
    logradouro?: string | null
    bairro?: string | null
    localidade?: string | null
    uf?: string | null
    numero?: string | null
    data_nascimento?: Date | string | null
    foto_perfil?: string | null
    id_sexo?: number | null
    data_criacao?: Date | string | null
    data_atualizacao?: Date | string | null
  }

  export type tbl_banco_sangueUpdateWithoutTbl_tipo_sanguineoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    tbl_hospital?: tbl_hospitalUpdateOneRequiredWithoutTbl_banco_sangueNestedInput
  }

  export type tbl_banco_sangueUncheckedUpdateWithoutTbl_tipo_sanguineoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_hospital?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_banco_sangueUncheckedUpdateManyWithoutTbl_tipo_sanguineoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_hospital?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type tbl_usuarioUpdateWithoutTbl_tipo_sanguineoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agendamentos?: tbl_agendamentoUpdateManyWithoutUsuarioNestedInput
    tbl_certificado?: tbl_certificadoUpdateManyWithoutTbl_usuarioNestedInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUpdateManyWithoutTbl_usuarioNestedInput
    tbl_telefone?: tbl_telefoneUpdateManyWithoutTbl_usuarioNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUpdateManyWithoutTbl_usuarioNestedInput
    sexo?: tbl_sexoUpdateOneWithoutUsuariosNestedInput
  }

  export type tbl_usuarioUncheckedUpdateWithoutTbl_tipo_sanguineoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    id_sexo?: NullableIntFieldUpdateOperationsInput | number | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agendamentos?: tbl_agendamentoUncheckedUpdateManyWithoutUsuarioNestedInput
    tbl_certificado?: tbl_certificadoUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_recuperacao_senha?: tbl_recuperacao_senhaUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_telefone?: tbl_telefoneUncheckedUpdateManyWithoutTbl_usuarioNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedUpdateManyWithoutTbl_usuarioNestedInput
  }

  export type tbl_usuarioUncheckedUpdateManyWithoutTbl_tipo_sanguineoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    localidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    id_sexo?: NullableIntFieldUpdateOperationsInput | number | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_atualizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_agendamentoCreateManyUsuarioInput = {
    id?: number
    status?: $Enums.tbl_agendamento_status
    data: Date | string
    hora: Date | string
    id_doacao?: number | null
    id_hospital?: number | null
  }

  export type tbl_certificadoCreateManyTbl_usuarioInput = {
    id?: number
    titulo: string
    organizacao: string
    data_emissao: Date | string
  }

  export type tbl_recuperacao_senhaCreateManyTbl_usuarioInput = {
    id?: number
    codigo: string
    criado_em?: Date | string | null
    usado?: boolean | null
  }

  export type tbl_telefoneCreateManyTbl_usuarioInput = {
    id?: number
    tipo: string
    numero: string
  }

  export type tbl_registro_doacaoCreateManyTbl_usuarioInput = {
    id?: number
    id_agendamento: number
    id_hospital: number
    data_doacao: Date | string
    local_doacao: string
    observacao?: string | null
    foto_comprovante?: string | null
    data_registro?: Date | string | null
  }

  export type tbl_agendamentoUpdateWithoutUsuarioInput = {
    status?: Enumtbl_agendamento_statusFieldUpdateOperationsInput | $Enums.tbl_agendamento_status
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    doacao?: tbl_doacaoUpdateOneWithoutAgendamentosNestedInput
    hospital?: tbl_hospitalUpdateOneWithoutAgendamentosNestedInput
    tbl_registro_doacao?: tbl_registro_doacaoUpdateOneWithoutTbl_agendamentoNestedInput
  }

  export type tbl_agendamentoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enumtbl_agendamento_statusFieldUpdateOperationsInput | $Enums.tbl_agendamento_status
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    id_doacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_hospital?: NullableIntFieldUpdateOperationsInput | number | null
    tbl_registro_doacao?: tbl_registro_doacaoUncheckedUpdateOneWithoutTbl_agendamentoNestedInput
  }

  export type tbl_agendamentoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enumtbl_agendamento_statusFieldUpdateOperationsInput | $Enums.tbl_agendamento_status
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    id_doacao?: NullableIntFieldUpdateOperationsInput | number | null
    id_hospital?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tbl_certificadoUpdateWithoutTbl_usuarioInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    organizacao?: StringFieldUpdateOperationsInput | string
    data_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_certificadoUncheckedUpdateWithoutTbl_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    organizacao?: StringFieldUpdateOperationsInput | string
    data_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_certificadoUncheckedUpdateManyWithoutTbl_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    organizacao?: StringFieldUpdateOperationsInput | string
    data_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_recuperacao_senhaUpdateWithoutTbl_usuarioInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_recuperacao_senhaUncheckedUpdateWithoutTbl_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_recuperacao_senhaUncheckedUpdateManyWithoutTbl_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tbl_telefoneUpdateWithoutTbl_usuarioInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_telefoneUncheckedUpdateWithoutTbl_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_telefoneUncheckedUpdateManyWithoutTbl_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_registro_doacaoUpdateWithoutTbl_usuarioInput = {
    data_doacao?: DateTimeFieldUpdateOperationsInput | Date | string
    local_doacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_comprovante?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tbl_agendamento?: tbl_agendamentoUpdateOneRequiredWithoutTbl_registro_doacaoNestedInput
    tbl_hospital?: tbl_hospitalUpdateOneRequiredWithoutTbl_registro_doacaoNestedInput
  }

  export type tbl_registro_doacaoUncheckedUpdateWithoutTbl_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_agendamento?: IntFieldUpdateOperationsInput | number
    id_hospital?: IntFieldUpdateOperationsInput | number
    data_doacao?: DateTimeFieldUpdateOperationsInput | Date | string
    local_doacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_comprovante?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tbl_registro_doacaoUncheckedUpdateManyWithoutTbl_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_agendamento?: IntFieldUpdateOperationsInput | number
    id_hospital?: IntFieldUpdateOperationsInput | number
    data_doacao?: DateTimeFieldUpdateOperationsInput | Date | string
    local_doacao?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_comprovante?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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