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

import {
  CountryResource,
  DataFilesContactsCreatePayload,
  MobileNetworkResource,
  OfferCampaignResource,
  OfferResource,
  OffersCreatePayload,
  OffersDeletePayload,
  OffersUpdatePayload,
  SmsCampaignResource,
  SmsCampaignsCreatePayload,
  SmsCampaignsDeletePayload,
  SmsCampaignSenderidResource,
  SmsCampaignsOffersCreatePayload,
  SmsCampaignsOffersDeletePayload,
  SmsCampaignsOffersUpdatePayload,
  SmsCampaignsSenderidsCreatePayload,
  SmsCampaignsSenderidsDeletePayload,
  SmsCampaignsSenderidsUpdatePayload,
  SmsCampaignsSendManualCreatePayload,
  SmsCampaignsTextsCreatePayload,
  SmsCampaignsTextsDeletePayload,
  SmsCampaignsTextsUpdatePayload,
  SmsCampaignsUpdatePayload,
  SmsCampaignTextResource,
  SmsRouteCompaniesCollection,
  SmsRouteCompanyResource,
  SmsRouteSmppConnectionResource,
  SmsRoutingCompaniesCreatePayload,
  SmsRoutingLogsCollection,
  SmsRoutingPlanResource,
  SmsRoutingPlanRuleResource,
  SmsRoutingPlansCreatePayload,
  SmsRoutingPlansDeletePayload,
  SmsRoutingPlansRulesCreatePayload,
  SmsRoutingPlansRulesDeletePayload,
  SmsRoutingPlansRulesUpdatePayload,
  SmsRoutingPlansUpdatePayload,
  SmsRoutingRateResource,
  SmsRoutingRatesCreatePayload,
  SmsRoutingRatesUpdatePayload,
  SmsRoutingRouteCollection,
  SmsRoutingRouteResource,
  SmsRoutingRoutesCreatePayload,
  SmsRoutingRoutesDeletePayload,
  SmsRoutingRoutesSmppConnectionsCreatePayload,
  SmsRoutingRoutesSmppConnectionsTestCreatePayload,
  TokenLoginCreatePayload,
  TokenLogoutCreatePayload,
  TokenRefreshCreatePayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class V1<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Auth
   * @name TokenLoginCreate
   * @summary Get a JWT via given credentials
   * @request POST:/v1/token/login
   */
  tokenLoginCreate = (data: TokenLoginCreatePayload, params: RequestParams = {}) =>
    this.request<
      {
        access_token: string;
        token_type: string;
        expires_in: string;
      },
      {
        error: string;
      }
    >({
      path: `/v1/token/login`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name TokenRefreshCreate
   * @summary Refresh a token
   * @request POST:/v1/token/refresh
   */
  tokenRefreshCreate = (data: TokenRefreshCreatePayload, params: RequestParams = {}) =>
    this.request<
      {
        access_token: string;
        token_type: string;
        expires_in: string;
      },
      any
    >({
      path: `/v1/token/refresh`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name TokenLogoutCreate
   * @summary Log the user out (Invalidate the token)
   * @request POST:/v1/token/logout
   */
  tokenLogoutCreate = (data: TokenLogoutCreatePayload, params: RequestParams = {}) =>
    this.request<
      {
        message: string;
      },
      any
    >({
      path: `/v1/token/logout`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name UserList
   * @summary Get the authenticated User
   * @request GET:/v1/user
   */
  userList = (params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/v1/user`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags DataFiles
   * @name DataFilesSampleDetail
   * @request GET:/v1/data-files/{id}/sample
   */
  dataFilesSampleDetail = (id: string, params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/v1/data-files/${id}/sample`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags DataFiles
   * @name DataFilesContactsCreate
   * @request POST:/v1/data-files/contacts
   */
  dataFilesContactsCreate = (data: DataFilesContactsCreatePayload, params: RequestParams = {}) =>
    this.request<
      string,
      {
        /** Errors overview. */
        message: string;
        /** A detailed description of each field that failed validation. */
        errors: Record<string, string[]>;
      }
    >({
      path: `/v1/data-files/contacts`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description ⚠️Cannot generate request documentation: Undefined variable $rules
   *
   * @tags DataFiles
   * @name DataFilesImportCreate
   * @request POST:/v1/data-files/{id}/import
   */
  dataFilesImportCreate = (id: string, params: RequestParams = {}) =>
    this.request<
      any,
      | {
          /** Error overview. */
          message: string;
        }
      | {
          /** Errors overview. */
          message: string;
          /** A detailed description of each field that failed validation. */
          errors: Record<string, string[]>;
        }
    >({
      path: `/v1/data-files/${id}/import`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Countries
   * @name CountriesList
   * @request GET:/v1/countries
   */
  countriesList = (params: RequestParams = {}) =>
    this.request<
      {
        data: CountryResource[];
      },
      any
    >({
      path: `/v1/countries`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags MobileNetworks
   * @name SmsRoutingNetworksList
   * @request GET:/v1/sms/routing/networks
   */
  smsRoutingNetworksList = (
    query?: {
      filter_country_id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        data: MobileNetworkResource[];
      },
      {
        /** Errors overview. */
        message: string;
        /** A detailed description of each field that failed validation. */
        errors: Record<string, string[]>;
      }
    >({
      path: `/v1/sms/routing/networks`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingCompanies
   * @name SmsRoutingCompaniesList
   * @request GET:/v1/sms/routing/companies
   */
  smsRoutingCompaniesList = (params: RequestParams = {}) =>
    this.request<
      {
        data: SmsRouteCompaniesCollection;
      },
      any
    >({
      path: `/v1/sms/routing/companies`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingCompanies
   * @name SmsRoutingCompaniesCreate
   * @request POST:/v1/sms/routing/companies
   */
  smsRoutingCompaniesCreate = (data: SmsRoutingCompaniesCreatePayload, params: RequestParams = {}) =>
    this.request<
      {
        data: SmsRouteCompanyResource;
      },
      {
        /** Errors overview. */
        message: string;
        /** A detailed description of each field that failed validation. */
        errors: Record<string, string[]>;
      }
    >({
      path: `/v1/sms/routing/companies`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingRoutes
   * @name SmsRoutingRoutesList
   * @request GET:/v1/sms/routing/routes
   */
  smsRoutingRoutesList = (params: RequestParams = {}) =>
    this.request<
      {
        data: SmsRoutingRouteCollection;
      },
      any
    >({
      path: `/v1/sms/routing/routes`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingRoutes
   * @name SmsRoutingRoutesCreate
   * @request POST:/v1/sms/routing/routes
   */
  smsRoutingRoutesCreate = (data: SmsRoutingRoutesCreatePayload, params: RequestParams = {}) =>
    this.request<
      {
        data: SmsRoutingRouteResource;
      },
      {
        /** Errors overview. */
        message: string;
        /** A detailed description of each field that failed validation. */
        errors: Record<string, string[]>;
      }
    >({
      path: `/v1/sms/routing/routes`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingRoutes
   * @name SmsRoutingRoutesDelete
   * @request DELETE:/v1/sms/routing/routes/{route}
   */
  smsRoutingRoutesDelete = (route: string, data: SmsRoutingRoutesDeletePayload, params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/v1/sms/routing/routes/${route}`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingSmppConnections
   * @name SmsRoutingRoutesSmppConnectionsCreate
   * @request POST:/v1/sms/routing/routes/smpp-connections
   */
  smsRoutingRoutesSmppConnectionsCreate = (
    data: SmsRoutingRoutesSmppConnectionsCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      {
        data: SmsRouteSmppConnectionResource;
      },
      {
        /** Errors overview. */
        message: string;
        /** A detailed description of each field that failed validation. */
        errors: Record<string, string[]>;
      }
    >({
      path: `/v1/sms/routing/routes/smpp-connections`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingSmppConnections
   * @name SmsRoutingRoutesSmppConnectionsTestCreate
   * @request POST:/v1/sms/routing/routes/smpp-connections/test
   */
  smsRoutingRoutesSmppConnectionsTestCreate = (
    data: SmsRoutingRoutesSmppConnectionsTestCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      {
        success: string;
      },
      {
        /** Errors overview. */
        message: string;
        /** A detailed description of each field that failed validation. */
        errors: Record<string, string[]>;
      }
    >({
      path: `/v1/sms/routing/routes/smpp-connections/test`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingSmppConnections
   * @name SmsRoutingRoutesSmppConnectionsViewDetail
   * @request GET:/v1/sms/routing/routes/smpp-connections/{smsRouteSmppConnection}/view
   */
  smsRoutingRoutesSmppConnectionsViewDetail = (smsRouteSmppConnection: number, params: RequestParams = {}) =>
    this.request<
      {
        data: SmsRouteSmppConnectionResource;
      },
      | {
          /**
           * Error overview.
           * @example ""
           */
          message: string;
        }
      | {
          /** Error overview. */
          message: string;
        }
    >({
      path: `/v1/sms/routing/routes/smpp-connections/${smsRouteSmppConnection}/view`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingPlanRules
   * @name SmsRoutingPlansRulesDetail
   * @request GET:/v1/sms/routing/plans/{plan}/rules
   */
  smsRoutingPlansRulesDetail = (plan: number, params: RequestParams = {}) =>
    this.request<
      {
        data: SmsRoutingPlanRuleResource[];
      },
      {
        /** Error overview. */
        message: string;
      }
    >({
      path: `/v1/sms/routing/plans/${plan}/rules`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingPlanRules
   * @name SmsRoutingPlansRulesCreate
   * @request POST:/v1/sms/routing/plans/{plan}/rules
   */
  smsRoutingPlansRulesCreate = (plan: number, data: SmsRoutingPlansRulesCreatePayload, params: RequestParams = {}) =>
    this.request<
      SmsRoutingPlanRuleResource,
      | {
          /** Error overview. */
          message: string;
        }
      | {
          /** Errors overview. */
          message: string;
          /** A detailed description of each field that failed validation. */
          errors: Record<string, string[]>;
        }
    >({
      path: `/v1/sms/routing/plans/${plan}/rules`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingPlanRules
   * @name SmsRoutingPlansRulesDetail2
   * @request GET:/v1/sms/routing/plans/{plan}/rules/{rule}
   * @originalName smsRoutingPlansRulesDetail
   * @duplicate
   */
  smsRoutingPlansRulesDetail2 = (plan: string, rule: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/v1/sms/routing/plans/${plan}/rules/${rule}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingPlanRules
   * @name SmsRoutingPlansRulesUpdate
   * @request PUT:/v1/sms/routing/plans/{plan}/rules/{rule}
   */
  smsRoutingPlansRulesUpdate = (
    plan: number,
    rule: number,
    data: SmsRoutingPlansRulesUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      SmsRoutingPlanRuleResource,
      | {
          /** Error overview. */
          message: string;
        }
      | {
          /** Errors overview. */
          message: string;
          /** A detailed description of each field that failed validation. */
          errors: Record<string, string[]>;
        }
    >({
      path: `/v1/sms/routing/plans/${plan}/rules/${rule}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingPlanRules
   * @name SmsRoutingPlansRulesDelete
   * @request DELETE:/v1/sms/routing/plans/{plan}/rules/{rule}
   */
  smsRoutingPlansRulesDelete = (
    plan: number,
    rule: number,
    data: SmsRoutingPlansRulesDeletePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      null,
      {
        /** Error overview. */
        message: string;
      }
    >({
      path: `/v1/sms/routing/plans/${plan}/rules/${rule}`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingPlans
   * @name SmsRoutingPlansList
   * @request GET:/v1/sms/routing/plans
   */
  smsRoutingPlansList = (params: RequestParams = {}) =>
    this.request<
      {
        data: SmsRoutingPlanResource[];
      },
      any
    >({
      path: `/v1/sms/routing/plans`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingPlans
   * @name SmsRoutingPlansCreate
   * @request POST:/v1/sms/routing/plans
   */
  smsRoutingPlansCreate = (data: SmsRoutingPlansCreatePayload, params: RequestParams = {}) =>
    this.request<
      SmsRoutingPlanResource,
      {
        /** Errors overview. */
        message: string;
        /** A detailed description of each field that failed validation. */
        errors: Record<string, string[]>;
      }
    >({
      path: `/v1/sms/routing/plans`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingPlans
   * @name SmsRoutingPlansDetail
   * @request GET:/v1/sms/routing/plans/{plan}
   */
  smsRoutingPlansDetail = (plan: number, params: RequestParams = {}) =>
    this.request<
      {
        data: SmsRoutingPlanResource;
      },
      {
        /** Error overview. */
        message: string;
      }
    >({
      path: `/v1/sms/routing/plans/${plan}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingPlans
   * @name SmsRoutingPlansUpdate
   * @request PUT:/v1/sms/routing/plans/{plan}
   */
  smsRoutingPlansUpdate = (plan: number, data: SmsRoutingPlansUpdatePayload, params: RequestParams = {}) =>
    this.request<
      {
        data: SmsRoutingPlanResource;
      },
      | {
          /** Error overview. */
          message: string;
        }
      | {
          /** Errors overview. */
          message: string;
          /** A detailed description of each field that failed validation. */
          errors: Record<string, string[]>;
        }
    >({
      path: `/v1/sms/routing/plans/${plan}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingPlans
   * @name SmsRoutingPlansDelete
   * @request DELETE:/v1/sms/routing/plans/{plan}
   */
  smsRoutingPlansDelete = (plan: number, data: SmsRoutingPlansDeletePayload, params: RequestParams = {}) =>
    this.request<
      null,
      {
        /** Error overview. */
        message: string;
      }
    >({
      path: `/v1/sms/routing/plans/${plan}`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingRates
   * @name SmsRoutingRatesList
   * @request GET:/v1/sms/routing/rates
   */
  smsRoutingRatesList = (
    query?: {
      country_id?: number;
      network_id?: number;
      with?: "smsRoute"[];
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        data: SmsRoutingRateResource[];
      },
      {
        /** Errors overview. */
        message: string;
        /** A detailed description of each field that failed validation. */
        errors: Record<string, string[]>;
      }
    >({
      path: `/v1/sms/routing/rates`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingRates
   * @name SmsRoutingRatesCreate
   * @request POST:/v1/sms/routing/rates
   */
  smsRoutingRatesCreate = (data: SmsRoutingRatesCreatePayload, params: RequestParams = {}) =>
    this.request<
      string,
      {
        /** Errors overview. */
        message: string;
        /** A detailed description of each field that failed validation. */
        errors: Record<string, string[]>;
      }
    >({
      path: `/v1/sms/routing/rates`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingRates
   * @name SmsRoutingRatesUpdate
   * @request PUT:/v1/sms/routing/rates/{rate}
   */
  smsRoutingRatesUpdate = (rate: number, data: SmsRoutingRatesUpdatePayload, params: RequestParams = {}) =>
    this.request<
      {
        data: SmsRoutingRateResource;
      },
      | {
          /** Error overview. */
          message: string;
        }
      | {
          /** Errors overview. */
          message: string;
          /** A detailed description of each field that failed validation. */
          errors: Record<string, string[]>;
        }
    >({
      path: `/v1/sms/routing/rates/${rate}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsRoutingRates
   * @name SmsRoutingRatesLogsList
   * @request GET:/v1/sms/routing/rates/logs
   */
  smsRoutingRatesLogsList = (params: RequestParams = {}) =>
    this.request<
      {
        data: SmsRoutingLogsCollection;
      },
      any
    >({
      path: `/v1/sms/routing/rates/logs`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaigns
   * @name SmsCampaignsList
   * @request GET:/v1/sms/campaigns
   */
  smsCampaignsList = (params: RequestParams = {}) =>
    this.request<
      {
        data: SmsCampaignResource[];
      },
      any
    >({
      path: `/v1/sms/campaigns`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaigns
   * @name SmsCampaignsCreate
   * @request POST:/v1/sms/campaigns
   */
  smsCampaignsCreate = (data: SmsCampaignsCreatePayload, params: RequestParams = {}) =>
    this.request<
      SmsCampaignResource,
      {
        /** Errors overview. */
        message: string;
        /** A detailed description of each field that failed validation. */
        errors: Record<string, string[]>;
      }
    >({
      path: `/v1/sms/campaigns`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaigns
   * @name SmsCampaignsUpdate
   * @request PUT:/v1/sms/campaigns/{smsCampaign}
   */
  smsCampaignsUpdate = (smsCampaign: number, data: SmsCampaignsUpdatePayload, params: RequestParams = {}) =>
    this.request<
      SmsCampaignResource,
      | {
          /** Error overview. */
          message: string;
        }
      | {
          /** Errors overview. */
          message: string;
          /** A detailed description of each field that failed validation. */
          errors: Record<string, string[]>;
        }
    >({
      path: `/v1/sms/campaigns/${smsCampaign}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaigns
   * @name SmsCampaignsDelete
   * @request DELETE:/v1/sms/campaigns/{campaign}
   */
  smsCampaignsDelete = (campaign: string, data: SmsCampaignsDeletePayload, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/v1/sms/campaigns/${campaign}`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaignTexts
   * @name SmsCampaignsTextsDetail
   * @request GET:/v1/sms/campaigns/{campaign}/texts
   */
  smsCampaignsTextsDetail = (campaign: number, params: RequestParams = {}) =>
    this.request<
      {
        data: SmsCampaignTextResource[];
      },
      {
        /** Error overview. */
        message: string;
      }
    >({
      path: `/v1/sms/campaigns/${campaign}/texts`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaignTexts
   * @name SmsCampaignsTextsCreate
   * @request POST:/v1/sms/campaigns/{campaign}/texts
   */
  smsCampaignsTextsCreate = (campaign: number, data: SmsCampaignsTextsCreatePayload, params: RequestParams = {}) =>
    this.request<
      SmsCampaignTextResource,
      | {
          /** Error overview. */
          message: string;
        }
      | {
          /** Errors overview. */
          message: string;
          /** A detailed description of each field that failed validation. */
          errors: Record<string, string[]>;
        }
    >({
      path: `/v1/sms/campaigns/${campaign}/texts`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaignTexts
   * @name SmsCampaignsTextsUpdate
   * @request PUT:/v1/sms/campaigns/{campaign}/texts/{text}
   */
  smsCampaignsTextsUpdate = (
    campaign: number,
    text: number,
    data: SmsCampaignsTextsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      SmsCampaignTextResource,
      | {
          /** Error overview. */
          message: string;
        }
      | {
          /** Errors overview. */
          message: string;
          /** A detailed description of each field that failed validation. */
          errors: Record<string, string[]>;
        }
    >({
      path: `/v1/sms/campaigns/${campaign}/texts/${text}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaignTexts
   * @name SmsCampaignsTextsDelete
   * @request DELETE:/v1/sms/campaigns/{campaign}/texts/{text}
   */
  smsCampaignsTextsDelete = (
    campaign: number,
    text: number,
    data: SmsCampaignsTextsDeletePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      null,
      {
        /** Error overview. */
        message: string;
      }
    >({
      path: `/v1/sms/campaigns/${campaign}/texts/${text}`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaignSenderids
   * @name SmsCampaignsSenderidsDetail
   * @request GET:/v1/sms/campaigns/{campaign}/senderids
   */
  smsCampaignsSenderidsDetail = (campaign: number, params: RequestParams = {}) =>
    this.request<
      {
        data: SmsCampaignSenderidResource[];
      },
      {
        /** Error overview. */
        message: string;
      }
    >({
      path: `/v1/sms/campaigns/${campaign}/senderids`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaignSenderids
   * @name SmsCampaignsSenderidsCreate
   * @request POST:/v1/sms/campaigns/{campaign}/senderids
   */
  smsCampaignsSenderidsCreate = (
    campaign: number,
    data: SmsCampaignsSenderidsCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      SmsCampaignSenderidResource,
      | {
          /** Error overview. */
          message: string;
        }
      | {
          /** Errors overview. */
          message: string;
          /** A detailed description of each field that failed validation. */
          errors: Record<string, string[]>;
        }
    >({
      path: `/v1/sms/campaigns/${campaign}/senderids`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaignSenderids
   * @name SmsCampaignsSenderidsUpdate
   * @request PUT:/v1/sms/campaigns/{campaign}/senderids/{senderid}
   */
  smsCampaignsSenderidsUpdate = (
    campaign: number,
    senderid: number,
    data: SmsCampaignsSenderidsUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      SmsCampaignSenderidResource,
      | {
          /** Error overview. */
          message: string;
        }
      | {
          /** Errors overview. */
          message: string;
          /** A detailed description of each field that failed validation. */
          errors: Record<string, string[]>;
        }
    >({
      path: `/v1/sms/campaigns/${campaign}/senderids/${senderid}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaignSenderids
   * @name SmsCampaignsSenderidsDelete
   * @request DELETE:/v1/sms/campaigns/{campaign}/senderids/{senderid}
   */
  smsCampaignsSenderidsDelete = (
    campaign: number,
    senderid: number,
    data: SmsCampaignsSenderidsDeletePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      null,
      {
        /** Error overview. */
        message: string;
      }
    >({
      path: `/v1/sms/campaigns/${campaign}/senderids/${senderid}`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaignOffers
   * @name SmsCampaignsOffersDetail
   * @request GET:/v1/sms/campaigns/{campaign}/offers
   */
  smsCampaignsOffersDetail = (campaign: number, params: RequestParams = {}) =>
    this.request<
      {
        data: OfferCampaignResource[];
      },
      {
        /** Error overview. */
        message: string;
      }
    >({
      path: `/v1/sms/campaigns/${campaign}/offers`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaignOffers
   * @name SmsCampaignsOffersCreate
   * @request POST:/v1/sms/campaigns/{campaign}/offers
   */
  smsCampaignsOffersCreate = (campaign: number, data: SmsCampaignsOffersCreatePayload, params: RequestParams = {}) =>
    this.request<
      OfferCampaignResource,
      | {
          /** Error overview. */
          message: string;
        }
      | {
          /** Errors overview. */
          message: string;
          /** A detailed description of each field that failed validation. */
          errors: Record<string, string[]>;
        }
    >({
      path: `/v1/sms/campaigns/${campaign}/offers`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaignOffers
   * @name SmsCampaignsOffersUpdate
   * @request PUT:/v1/sms/campaigns/{campaign}/offers/{offer}
   */
  smsCampaignsOffersUpdate = (
    campaign: number,
    offer: number,
    data: SmsCampaignsOffersUpdatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      OfferCampaignResource,
      | {
          /** Error overview. */
          message: string;
        }
      | {
          /** Errors overview. */
          message: string;
          /** A detailed description of each field that failed validation. */
          errors: Record<string, string[]>;
        }
    >({
      path: `/v1/sms/campaigns/${campaign}/offers/${offer}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaignOffers
   * @name SmsCampaignsOffersDelete
   * @request DELETE:/v1/sms/campaigns/{campaign}/offers/{offer}
   */
  smsCampaignsOffersDelete = (
    campaign: number,
    offer: number,
    data: SmsCampaignsOffersDeletePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      null,
      {
        /** Error overview. */
        message: string;
      }
    >({
      path: `/v1/sms/campaigns/${campaign}/offers/${offer}`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaigns
   * @name SmsCampaignsSendManualCreate
   * @request POST:/v1/sms/campaigns/{campaign}/send-manual
   */
  smsCampaignsSendManualCreate = (
    campaign: number,
    data: SmsCampaignsSendManualCreatePayload,
    params: RequestParams = {},
  ) =>
    this.request<
      SmsCampaignResource,
      | {
          /** Error overview. */
          message: string;
        }
      | {
          /** Errors overview. */
          message: string;
          /** A detailed description of each field that failed validation. */
          errors: Record<string, string[]>;
        }
    >({
      path: `/v1/sms/campaigns/${campaign}/send-manual`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmsCampaigns
   * @name SmsCampaignsLogsDetail
   * @request GET:/v1/sms/campaigns/{campaign}/logs
   */
  smsCampaignsLogsDetail = (campaign: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/v1/sms/campaigns/${campaign}/logs`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Offers
   * @name OffersList
   * @request GET:/v1/offers
   */
  offersList = (params: RequestParams = {}) =>
    this.request<
      {
        data: OfferResource[];
      },
      any
    >({
      path: `/v1/offers`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Offers
   * @name OffersCreate
   * @request POST:/v1/offers
   */
  offersCreate = (data: OffersCreatePayload, params: RequestParams = {}) =>
    this.request<
      OfferResource,
      {
        /** Errors overview. */
        message: string;
        /** A detailed description of each field that failed validation. */
        errors: Record<string, string[]>;
      }
    >({
      path: `/v1/offers`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Offers
   * @name OffersUpdate
   * @request PUT:/v1/offers/{offer}
   */
  offersUpdate = (offer: number, data: OffersUpdatePayload, params: RequestParams = {}) =>
    this.request<
      OfferResource,
      | {
          /** Error overview. */
          message: string;
        }
      | {
          /** Errors overview. */
          message: string;
          /** A detailed description of each field that failed validation. */
          errors: Record<string, string[]>;
        }
    >({
      path: `/v1/offers/${offer}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Offers
   * @name OffersDelete
   * @request DELETE:/v1/offers/{id}
   */
  offersDelete = (id: string, data: OffersDeletePayload, params: RequestParams = {}) =>
    this.request<null, any>({
      path: `/v1/offers/${id}`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
