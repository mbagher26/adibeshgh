/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * AgeCategory Model Schema
 * AgeCategory Model
 */
export interface AgeCategoryModel {
  /** AgeCategory id */
  ID?: number;
  /** AgeCategory Title */
  Title: string;
  /** From Age */
  From?: number;
  /** To Age */
  To?: number;
}

/**
 * Category Model Schema
 * Category Model
 */
export interface CategoryModel {
  /** Category's id */
  ID?: number;
  /** Category's Title */
  Title: string;
  /** Category's Privacy */
  Private?: string;
  /** Category's Priority */
  Priority?: number;
}

/**
 * Content Model Schema
 * Content Model
 */
export interface ContentModel {
  /** Content's id */
  ID?: number;
  /** Content lessonId */
  LessonID?: number;
  /** Content TypeId */
  ContentTypeID?: number;
  /** Content's Title */
  Title: string;
  /** Content's Text */
  Text?: string;
  /** Content's fileName */
  FileName?: string;
  /** Content's privacy */
  Private?: number;
  /** Content's order */
  Order?: number;
  /** Lesson Model */
  Lesson?: LessonModel;
  /** ContentType Model */
  ContentType?: ContentTypeModel;
}

/**
 * ContentType Model Schema
 * ContentType Model
 */
export interface ContentTypeModel {
  /** ContentType id */
  ID?: number;
  /** ContentType Title */
  Title: string;
  /** Persian Title */
  TitleFa?: string;
}

/**
 * Course Model Schema
 * Course Model
 */
export interface CourseModel {
  /** Course id */
  ID?: number;
  /** Course Title */
  Title: string;
  /** Draft */
  Draft?: number;
  /** Number of users who can join the course */
  Capacity?: number;
  /** Active status of course */
  Active?: number;
  /** Age category id */
  AgeCategoryID?: number;
  /** Cover image id */
  Cover?: string;
  /** Description */
  Description?: string;
  /** Persian End Date */
  EndDateFa?: string;
  /** Persian Start Date */
  StartDateFa?: string;
  /** Number of course lessons */
  LessonCount?: number;
  /** Number of course users */
  EnrolledCount?: number;
  /** Enrollment status of the current user */
  Enrolled?: number;
  /** AgeCategory Model */
  AgeCategory?: AgeCategoryModel;
  /** More inforamtion about the course */
  InfoList?: {
    ID?: number;
    CourseID?: number;
    Type?: "text" | "tell" | "url";
    Title?: string;
    Description?: string;
  };
  /** The Link of the course */
  Link?: string;
  /** New lessons for current user */
  NewLessons?: number;
  /** Privacy of the course */
  Private?: number;
  /** Tag */
  Tag?: string;
}

/**
 * Division Model Schema
 * Division Model
 */
export interface DivisionModel {
  /** Division's id */
  ID?: number;
  /** Division's Type */
  Type?: string;
  /** Division's Title */
  Title?: string;
  /** Division's ParentID */
  ParentID?: number;
  /** Division's LinkID */
  LinkID?: number;
}

/**
 * Lesson Model Schema
 * Lesson Model
 */
export interface LessonModel {
  /** Lesson's id */
  ID?: number;
  /** Lesson's title */
  Title: string;
  /** Lesson's description */
  Description?: string;
  /** Lesson's course id */
  CourseId?: number;
  /** Lesson's section id */
  SectionId?: number;
  /** Course Model */
  Course?: CourseModel;
  /** Section Model */
  Section?: SectionModel;
  /** Lesson's privacy */
  Public?: number;
  /** Lesson's date */
  Date?: string;
  /** Lesson's Ordering */
  Ordering?: number;
}

/**
 * Response Model Schema
 * Response Model
 */
export interface ResponseModel {
  /** user message */
  umsg?: string;
  /** developer message */
  dmsg?: string;
  /** response status code */
  code?: string;
  /** link */
  link?: string;
}

/**
 * Search Model Schema
 * Search Model
 */
export interface SearchModel {
  /** Lesson id */
  ID?: number;
  /** Lesson Title */
  Title?: string;
  /** Lesson Date */
  Date?: string;
  /** Lesson Description */
  Description?: string;
  /** Content Title */
  ContentTitle?: string;
  /** Content Text */
  ContentText?: string;
  /** Section ID */
  SectionID?: number;
  /** Section Title */
  SectionTitle?: string;
  /** Section Description */
  SectionDescription?: string;
  /** Course ID */
  CourseID?: number;
  /** Course Title */
  CourseTitle?: string;
  /** Course Description */
  CourseDescription?: string;
}

/**
 * Section Model Schema
 * Section Model
 */
export interface SectionModel {
  /** Section's id */
  ID?: number;
  /** Section's Title */
  Title: string;
  /** Section's CourseId */
  CourseID?: number;
  /** Section's description */
  Description?: string;
  /** Section's exercise count */
  ExerciseCount?: number;
  /** Section's lessons count */
  LessonCount?: number;
  /** Section's exams count */
  ExamCount?: number;
  /** Section's new lessons */
  NewLessons?: number;
}

/**
 * Slider Model Schema
 * Slider Model
 */
export interface SliderModel {
  /** Slider's id */
  ID?: number;
  /** Slider's Title */
  Title?: string;
  /** Slider's CourseId */
  Type?: string;
  /** Slider's description */
  Description?: string;
  /** Slider's link */
  Link?: string;
  /** Slider's banner */
  Banner?: string;
  /** Slider's hit count */
  HitCount?: number;
}

/**
 * User Model Schema
 * User Model
 */
export interface UserModel {
  /** User's id */
  ID?: number;
  /** User's Name */
  Name?: string;
  /** User's Family */
  Family?: string;
  /** User's Email */
  Email?: string;
  /** User's mobile */
  Mobile?: string;
  /** User's birthdate */
  BirthDate?: string;
  /** User's password */
  Password?: string;
  /** User's ItsMe */
  ItsMe?: boolean;
  /** User's enable */
  Enable?: number;
  /** User's city id */
  CityID?: number;
  /** User's city name */
  CityName?: number;
  /** User's age */
  Age?: number;
  /** User's tag */
  TAG?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:8600/";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Adib API
 * @version 1.0.0
 * @baseUrl http://localhost:8600/
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  attachment = {
    /**
     * @description Get user's enrolled courses
     *
     * @tags File
     * @name Download
     * @summary Enrolled Courses
     * @request GET:/Attachment/{ACK}/dl?filename={filename}
     * @secure
     */
    download: (ack: string, filename: string, params: RequestParams = {}) =>
      this.request<File, void>({
        path: `/Attachment/${ack}/dl?filename=${filename}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  c = {
    /**
     * @description Change active user
     *
     * @tags User
     * @name ChangeActiveUser
     * @summary Change active user
     * @request GET:/C/changeUser/{userId}
     * @secure
     */
    changeActiveUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          ums?: string;
        },
        void
      >({
        path: `/C/changeUser/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of my family
     *
     * @tags User
     * @name GetMyFamilyList
     * @summary My Family Members
     * @request GET:/C/myFamily
     * @secure
     */
    getMyFamilyList: (params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: UserModel[];
          ums?: string;
        },
        void
      >({
        path: `/C/myFamily`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description AddToFamily
     *
     * @tags User
     * @name AddToFamily
     * @summary AddToFamily
     * @request GET:/C/addToFamily?Mobile={name}
     * @secure
     */
    addToFamily: (mobile: string, name: string, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          /** User Model */
          result?: UserModel;
          ums?: string;
        },
        void
      >({
        path: `/C/addToFamily?Mobile=${name}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description AddToFamilyByTag
     *
     * @tags User
     * @name AddToFamilyByTag
     * @summary AddToFamilyByTag
     * @request GET:/C/addToFamilyByTag?Tag={tag}
     * @secure
     */
    addToFamilyByTag: (tag: string, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          /** User Model */
          result?: UserModel;
          ums?: string;
        },
        void
      >({
        path: `/C/addToFamilyByTag?Tag=${tag}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Remove member from family
     *
     * @tags User
     * @name RemoveFromFamily
     * @summary RemoveFromFamily
     * @request DELETE:/C/remFromFamily/{userId}
     * @secure
     */
    removeFromFamily: (userId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          ums?: string;
        },
        void
      >({
        path: `/C/remFromFamily/${userId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get user's enrolled courses
     *
     * @tags User
     * @name GetMyCourses
     * @summary Enrolled Courses
     * @request GET:/C/myCourses/
     * @secure
     */
    getMyCourses: (params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: CourseModel[];
          ums?: string;
        },
        void
      >({
        path: `/C/myCourses/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of xyz
     *
     * @tags User
     * @name Xyz
     * @summary My xyz
     * @request GET:/C/xyz
     * @secure
     */
    xyz: (params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: CourseModel[];
          ums?: string;
        },
        void
      >({
        path: `/C/xyz`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Enroll to the target course
     *
     * @tags Course
     * @name Enroll
     * @summary Enroll course
     * @request GET:/C/enrollCourse/{courseId}
     * @secure
     */
    enroll: (courseId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          ums?: string;
        },
        void
      >({
        path: `/C/enrollCourse/${courseId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Remove from the target course
     *
     * @tags Course
     * @name RemoveCourse
     * @summary Remove course
     * @request GET:/C/removeCourse/{courseId}
     * @secure
     */
    removeCourse: (courseId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          ums?: string;
        },
        void
      >({
        path: `/C/removeCourse/${courseId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of popular courses
     *
     * @tags Course
     * @name GetPopularCourses
     * @summary Popular Courses
     * @request GET:/C/popularCourses
     * @secure
     */
    getPopularCourses: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/C/popularCourses`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the list of categories which course are defined in them
     *
     * @tags Course
     * @name GetCourseCategories
     * @summary Course Categories
     * @request GET:/C/courseCategories
     * @secure
     */
    getCourseCategories: (params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: CategoryModel[];
          ums?: string;
        },
        void
      >({
        path: `/C/courseCategories`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the list of courses in a category
     *
     * @tags Category
     * @name GetCategoryCourses
     * @summary Category Courses
     * @request GET:/C/categoryCourses/{categoryId}
     * @secure
     */
    getCategoryCourses: (categoryId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: CourseModel[];
          ums?: string;
        },
        void
      >({
        path: `/C/categoryCourses/${categoryId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the list of courses in a category
     *
     * @tags Category
     * @name GetAgeCategoryCourses
     * @summary Category Courses
     * @request GET:/C/ageCategoryCourses/{ageCategoryId}
     * @secure
     */
    getAgeCategoryCourses: (ageCategoryId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: CourseModel[];
          ums?: string;
        },
        void
      >({
        path: `/C/ageCategoryCourses/${ageCategoryId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get age category by id
     *
     * @tags AgeCategory
     * @name GetAgeCategoryById
     * @summary Age Category Details
     * @request GET:/C/ageCategory/{ageCategoryId}
     */
    getAgeCategoryById: (ageCategoryId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          /** AgeCategory Model */
          result?: AgeCategoryModel;
          ums?: string;
        },
        void
      >({
        path: `/C/ageCategory/${ageCategoryId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get courses list
     *
     * @tags Course
     * @name GetCourseList
     * @summary Course list
     * @request GET:/C/courseList?categoryID={categoryId}
     * @secure
     */
    getCourseList: (categoryId?: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: CourseModel[];
          ums?: string;
        },
        void
      >({
        path: `/C/courseList?categoryID=${categoryId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get courses list in categories
     *
     * @tags Course
     * @name GetCategorizedCourseList
     * @summary Categorized Course list
     * @request GET:/C/categorizedCourseList
     * @secure
     */
    getCategorizedCourseList: (params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: {
            ID?: number;
            Count?: number;
            Title?: string;
            Records?: string;
          }[];
          ums?: string;
        },
        void
      >({
        path: `/C/categorizedCourseList`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Search
     *
     * @tags Lesson
     * @name Search
     * @summary Search
     * @request GET:/C/search/{phrase}/{index}/{limit}
     * @secure
     */
    search: (phrase: string, index?: number, limit?: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: SearchModel[];
          ums?: string;
        },
        void
      >({
        path: `/C/search/${phrase}/${index}/${limit}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details of a certain course
     *
     * @tags Course
     * @name GetCourseById
     * @summary Course Details
     * @request GET:/C/course/{courseId}
     * @secure
     */
    getCourseById: (courseId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          /** Course Model */
          result?: CourseModel;
          ums?: string;
        },
        void
      >({
        path: `/C/course/${courseId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details of a certain course
     *
     * @tags Lesson
     * @name GetLessonById
     * @summary Course Details
     * @request GET:/C/lesson/{lessonId}
     * @secure
     */
    getLessonById: (lessonId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          /** Lesson Model */
          result?: LessonModel;
          ums?: string;
        },
        void
      >({
        path: `/C/lesson/${lessonId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get category by id
     *
     * @tags Category
     * @name GetCategoryById
     * @summary Category details
     * @request GET:/C/category/{categoryId}
     */
    getCategoryById: (categoryId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          /** Category Model */
          result?: CategoryModel;
          ums?: string;
        },
        void
      >({
        path: `/C/category/${categoryId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get sections of a certain course
     *
     * @tags Course
     * @name GetCourseSections
     * @summary Course Sections
     * @request GET:/C/course/{courseId}/sections
     * @secure
     */
    getCourseSections: (courseId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: SectionModel[];
          ums?: string;
        },
        void
      >({
        path: `/C/course/${courseId}/sections`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get public sections of a certain course
     *
     * @tags Course
     * @name GetCoursePublicSections
     * @summary Course Public Sections
     * @request GET:/C/course/{courseId}/publicSections
     * @secure
     */
    getCoursePublicSections: (courseId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: SectionModel[];
          ums?: string;
        },
        void
      >({
        path: `/C/course/${courseId}/publicSections`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get lessons of a certain course section
     *
     * @tags Section
     * @name GetLessons
     * @summary Section's lessons
     * @request GET:/C/course/{courseId}/{sectionId}/lessons
     * @secure
     */
    getLessons: (courseId: number, sectionId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: LessonModel[];
          ums?: string;
        },
        void
      >({
        path: `/C/course/${courseId}/${sectionId}/lessons`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get lessons of a certain course section
     *
     * @tags Section
     * @name GetPublicLessons
     * @summary Section's lessons
     * @request GET:/C/course/{courseId}/{sectionId}/publicLessons
     * @secure
     */
    getPublicLessons: (courseId: number, sectionId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: LessonModel[];
          ums?: string;
        },
        void
      >({
        path: `/C/course/${courseId}/${sectionId}/publicLessons`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get lesson's contents
     *
     * @tags Lesson
     * @name GetLessonContent
     * @summary Lesson's contents
     * @request GET:/C/course/{courseId}/{sectionId}/{lessonId}/contents
     * @secure
     */
    getLessonContent: (courseId: number, sectionId: number, lessonId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: ContentModel[];
          ums?: string;
        },
        void
      >({
        path: `/C/course/${courseId}/${sectionId}/${lessonId}/contents`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get lesson's contents
     *
     * @tags Lesson
     * @name GetPublicLessonContent
     * @summary Lesson's contents
     * @request GET:/C/course/{courseId}/{sectionId}/{lessonId}/publicContents
     * @secure
     */
    getPublicLessonContent: (courseId: number, sectionId: number, lessonId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: ContentModel[];
          ums?: string;
        },
        void
      >({
        path: `/C/course/${courseId}/${sectionId}/${lessonId}/publicContents`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details of a certain course
     *
     * @tags Course
     * @name GetCourseByTag
     * @summary Course Details by tag
     * @request GET:/C/course/{tag}
     * @secure
     */
    getCourseByTag: (tag: string, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          /** Course Model */
          result?: CourseModel;
          ums?: string;
        },
        void
      >({
        path: `/C/course/${tag}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get home page slides
     *
     * @tags Slider
     * @name GetSlides
     * @summary slides
     * @request GET:/C/sliders
     */
    getSlides: (params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: SliderModel[];
          ums?: string;
        },
        void
      >({
        path: `/C/sliders`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  setting = {
    /**
     * @description Get list of provinces
     *
     * @tags Setting
     * @name GetProvinceList
     * @summary Province List
     * @request GET:/Setting/division
     */
    getProvinceList: (params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: DivisionModel[];
          ums?: string;
        },
        void
      >({
        path: `/Setting/division`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of cities
     *
     * @tags Setting
     * @name GetCityList
     * @summary City List
     * @request GET:/Setting/division?Province={provinceId}
     */
    getCityList: (provinceId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          result?: DivisionModel[];
          ums?: string;
        },
        void
      >({
        path: `/Setting/division?Province=${provinceId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  user = {
    /**
     * @description Get User Profile
     *
     * @tags User
     * @name GetProfile
     * @summary User  Profile
     * @request GET:/User/profile
     * @secure
     */
    getProfile: (params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          /** User Model */
          result?: UserModel;
          ums?: string;
        },
        void
      >({
        path: `/User/profile`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Set Profile
     *
     * @tags User
     * @name SetProfile
     * @summary Set Profile
     * @request POST:/User/profile
     * @secure
     */
    setProfile: (
      data: {
        data?: object;
        reference?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          ums?: string;
        },
        void
      >({
        path: `/User/profile`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  login = {
    /**
     * @description Register
     *
     * @tags User
     * @name Register
     * @summary Register
     * @request GET:/Login/register?Mobile={mobile}&Name={name}&Family={family}&BirthDate={birthdate}&CityID={cityId}
     * @secure
     */
    register: (
      mobile: string,
      name: string,
      family: string,
      birthdate: string,
      cityId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          ums?: string;
        },
        void
      >({
        path: `/Login/register?Mobile=${mobile}&Name=${name}&Family=${family}&BirthDate=${birthdate}&CityID=${cityId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description RegisterTag
     *
     * @tags User
     * @name RegisterTag
     * @summary RegisterTag
     * @request GET:/Login/register_2?Name={name}&Family={family}&BirthDate={birthdate}&CityID={cityId}
     * @secure
     */
    registerTag: (name: string, family: string, birthdate: string, cityId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          /** User Model */
          result?: UserModel;
          ums?: string;
        },
        void
      >({
        path: `/Login/register_2?Name=${name}&Family=${family}&BirthDate=${birthdate}&CityID=${cityId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description EmailRegister
     *
     * @tags User
     * @name EmailRegister
     * @summary EmailRegister
     * @request GET:/Login/emailRegister?Email={email}&Password={password}&Name={name}&Family={family}&Birthdate={birthdate}&CityID={cityId}
     */
    emailRegister: (
      email: string,
      password: string,
      name: string,
      family: string,
      birthdate: string,
      cityId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          ums?: string;
        },
        void
      >({
        path: `/Login/emailRegister?Email=${email}&Password=${password}&Name=${name}&Family=${family}&Birthdate=${birthdate}&CityID=${cityId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Signup
     *
     * @tags User
     * @name Login
     * @summary Signup
     * @request GET:/Login/signup?Mobile={mobile}
     * @secure
     */
    login: (mobile: string, params: RequestParams = {}) =>
      this.request<
        {
          /** Response Model */
          message?: ResponseModel;
          ums?: string;
        },
        void
      >({
        path: `/Login/signup?Mobile=${mobile}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get courses list
     *
     * @tags User
     * @name Verify
     * @summary Verification
     * @request GET:/Login/verify?Mobile={mobile}&Verify={code}
     * @secure
     */
    verify: (mobile: string, code: string, params: RequestParams = {}) =>
      this.request<
        {
          result?: {
            ACK?: string;
            Bearer?: string;
          };
          /** Response Model */
          message?: ResponseModel;
          ums?: string;
        },
        void
      >({
        path: `/Login/verify?Mobile=${mobile}&Verify=${code}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
