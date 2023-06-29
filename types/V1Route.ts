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

export namespace V1 {
  /**
   * No description
   * @tags Auth
   * @name TokenLoginCreate
   * @summary Get a JWT via given credentials
   * @request POST:/v1/token/login
   */
  export namespace TokenLoginCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TokenLoginCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      access_token: string;
      token_type: string;
      expires_in: string;
    };
  }

  /**
   * No description
   * @tags Auth
   * @name TokenRefreshCreate
   * @summary Refresh a token
   * @request POST:/v1/token/refresh
   */
  export namespace TokenRefreshCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TokenRefreshCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      access_token: string;
      token_type: string;
      expires_in: string;
    };
  }

  /**
   * No description
   * @tags Auth
   * @name TokenLogoutCreate
   * @summary Log the user out (Invalidate the token)
   * @request POST:/v1/token/logout
   */
  export namespace TokenLogoutCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TokenLogoutCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      message: string;
    };
  }

  /**
   * No description
   * @tags Auth
   * @name UserList
   * @summary Get the authenticated User
   * @request GET:/v1/user
   */
  export namespace UserList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }

  /**
   * No description
   * @tags DataFiles
   * @name DataFilesSampleDetail
   * @request GET:/v1/data-files/{id}/sample
   */
  export namespace DataFilesSampleDetail {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }

  /**
   * No description
   * @tags DataFiles
   * @name DataFilesContactsCreate
   * @request POST:/v1/data-files/contacts
   */
  export namespace DataFilesContactsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DataFilesContactsCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }

  /**
   * @description ⚠️Cannot generate request documentation: Undefined variable $rules
   * @tags DataFiles
   * @name DataFilesImportCreate
   * @request POST:/v1/data-files/{id}/import
   */
  export namespace DataFilesImportCreate {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * No description
   * @tags Countries
   * @name CountriesList
   * @request GET:/v1/countries
   */
  export namespace CountriesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: CountryResource[];
    };
  }

  /**
   * No description
   * @tags MobileNetworks
   * @name SmsRoutingNetworksList
   * @request GET:/v1/sms/routing/networks
   */
  export namespace SmsRoutingNetworksList {
    export type RequestParams = {};
    export type RequestQuery = {
      filter_country_id?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: MobileNetworkResource[];
    };
  }

  /**
   * No description
   * @tags SmsRoutingCompanies
   * @name SmsRoutingCompaniesList
   * @request GET:/v1/sms/routing/companies
   */
  export namespace SmsRoutingCompaniesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: SmsRouteCompaniesCollection;
    };
  }

  /**
   * No description
   * @tags SmsRoutingCompanies
   * @name SmsRoutingCompaniesCreate
   * @request POST:/v1/sms/routing/companies
   */
  export namespace SmsRoutingCompaniesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SmsRoutingCompaniesCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: SmsRouteCompanyResource;
    };
  }

  /**
   * No description
   * @tags SmsRoutingRoutes
   * @name SmsRoutingRoutesList
   * @request GET:/v1/sms/routing/routes
   */
  export namespace SmsRoutingRoutesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: SmsRoutingRouteCollection;
    };
  }

  /**
   * No description
   * @tags SmsRoutingRoutes
   * @name SmsRoutingRoutesCreate
   * @request POST:/v1/sms/routing/routes
   */
  export namespace SmsRoutingRoutesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SmsRoutingRoutesCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: SmsRoutingRouteResource;
    };
  }

  /**
   * No description
   * @tags SmsRoutingRoutes
   * @name SmsRoutingRoutesDelete
   * @request DELETE:/v1/sms/routing/routes/{route}
   */
  export namespace SmsRoutingRoutesDelete {
    export type RequestParams = {
      route: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsRoutingRoutesDeletePayload;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }

  /**
   * No description
   * @tags SmsRoutingSmppConnections
   * @name SmsRoutingRoutesSmppConnectionsCreate
   * @request POST:/v1/sms/routing/routes/smpp-connections
   */
  export namespace SmsRoutingRoutesSmppConnectionsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SmsRoutingRoutesSmppConnectionsCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: SmsRouteSmppConnectionResource;
    };
  }

  /**
   * No description
   * @tags SmsRoutingSmppConnections
   * @name SmsRoutingRoutesSmppConnectionsTestCreate
   * @request POST:/v1/sms/routing/routes/smpp-connections/test
   */
  export namespace SmsRoutingRoutesSmppConnectionsTestCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SmsRoutingRoutesSmppConnectionsTestCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      success: string;
    };
  }

  /**
   * No description
   * @tags SmsRoutingSmppConnections
   * @name SmsRoutingRoutesSmppConnectionsViewDetail
   * @request GET:/v1/sms/routing/routes/smpp-connections/{smsRouteSmppConnection}/view
   */
  export namespace SmsRoutingRoutesSmppConnectionsViewDetail {
    export type RequestParams = {
      /** The sms route smpp connection ID */
      smsRouteSmppConnection: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: SmsRouteSmppConnectionResource;
    };
  }

  /**
   * No description
   * @tags SmsRoutingPlanRules
   * @name SmsRoutingPlansRulesDetail
   * @request GET:/v1/sms/routing/plans/{plan}/rules
   */
  export namespace SmsRoutingPlansRulesDetail {
    export type RequestParams = {
      /** The plan ID */
      plan: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: SmsRoutingPlanRuleResource[];
    };
  }

  /**
   * No description
   * @tags SmsRoutingPlanRules
   * @name SmsRoutingPlansRulesCreate
   * @request POST:/v1/sms/routing/plans/{plan}/rules
   */
  export namespace SmsRoutingPlansRulesCreate {
    export type RequestParams = {
      /** The plan ID */
      plan: number;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsRoutingPlansRulesCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = SmsRoutingPlanRuleResource;
  }

  /**
   * No description
   * @tags SmsRoutingPlanRules
   * @name SmsRoutingPlansRulesDetail2
   * @request GET:/v1/sms/routing/plans/{plan}/rules/{rule}
   * @originalName smsRoutingPlansRulesDetail
   * @duplicate
   */
  export namespace SmsRoutingPlansRulesDetail2 {
    export type RequestParams = {
      plan: string;
      rule: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * No description
   * @tags SmsRoutingPlanRules
   * @name SmsRoutingPlansRulesUpdate
   * @request PUT:/v1/sms/routing/plans/{plan}/rules/{rule}
   */
  export namespace SmsRoutingPlansRulesUpdate {
    export type RequestParams = {
      /** The plan ID */
      plan: number;
      /** The rule ID */
      rule: number;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsRoutingPlansRulesUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = SmsRoutingPlanRuleResource;
  }

  /**
   * No description
   * @tags SmsRoutingPlanRules
   * @name SmsRoutingPlansRulesDelete
   * @request DELETE:/v1/sms/routing/plans/{plan}/rules/{rule}
   */
  export namespace SmsRoutingPlansRulesDelete {
    export type RequestParams = {
      /** The plan ID */
      plan: number;
      /** The rule ID */
      rule: number;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsRoutingPlansRulesDeletePayload;
    export type RequestHeaders = {};
    export type ResponseBody = null;
  }

  /**
   * No description
   * @tags SmsRoutingPlans
   * @name SmsRoutingPlansList
   * @request GET:/v1/sms/routing/plans
   */
  export namespace SmsRoutingPlansList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: SmsRoutingPlanResource[];
    };
  }

  /**
   * No description
   * @tags SmsRoutingPlans
   * @name SmsRoutingPlansCreate
   * @request POST:/v1/sms/routing/plans
   */
  export namespace SmsRoutingPlansCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SmsRoutingPlansCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = SmsRoutingPlanResource;
  }

  /**
   * No description
   * @tags SmsRoutingPlans
   * @name SmsRoutingPlansDetail
   * @request GET:/v1/sms/routing/plans/{plan}
   */
  export namespace SmsRoutingPlansDetail {
    export type RequestParams = {
      /** The plan ID */
      plan: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: SmsRoutingPlanResource;
    };
  }

  /**
   * No description
   * @tags SmsRoutingPlans
   * @name SmsRoutingPlansUpdate
   * @request PUT:/v1/sms/routing/plans/{plan}
   */
  export namespace SmsRoutingPlansUpdate {
    export type RequestParams = {
      /** The plan ID */
      plan: number;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsRoutingPlansUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: SmsRoutingPlanResource;
    };
  }

  /**
   * No description
   * @tags SmsRoutingPlans
   * @name SmsRoutingPlansDelete
   * @request DELETE:/v1/sms/routing/plans/{plan}
   */
  export namespace SmsRoutingPlansDelete {
    export type RequestParams = {
      /** The plan ID */
      plan: number;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsRoutingPlansDeletePayload;
    export type RequestHeaders = {};
    export type ResponseBody = null;
  }

  /**
   * No description
   * @tags SmsRoutingRates
   * @name SmsRoutingRatesList
   * @request GET:/v1/sms/routing/rates
   */
  export namespace SmsRoutingRatesList {
    export type RequestParams = {};
    export type RequestQuery = {
      country_id?: number;
      network_id?: number;
      with?: "smsRoute"[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: SmsRoutingRateResource[];
    };
  }

  /**
   * No description
   * @tags SmsRoutingRates
   * @name SmsRoutingRatesCreate
   * @request POST:/v1/sms/routing/rates
   */
  export namespace SmsRoutingRatesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SmsRoutingRatesCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }

  /**
   * No description
   * @tags SmsRoutingRates
   * @name SmsRoutingRatesUpdate
   * @request PUT:/v1/sms/routing/rates/{rate}
   */
  export namespace SmsRoutingRatesUpdate {
    export type RequestParams = {
      /** The rate ID */
      rate: number;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsRoutingRatesUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: SmsRoutingRateResource;
    };
  }

  /**
   * No description
   * @tags SmsRoutingRates
   * @name SmsRoutingRatesLogsList
   * @request GET:/v1/sms/routing/rates/logs
   */
  export namespace SmsRoutingRatesLogsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: SmsRoutingLogsCollection;
    };
  }

  /**
   * No description
   * @tags SmsCampaigns
   * @name SmsCampaignsList
   * @request GET:/v1/sms/campaigns
   */
  export namespace SmsCampaignsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: SmsCampaignResource[];
    };
  }

  /**
   * No description
   * @tags SmsCampaigns
   * @name SmsCampaignsCreate
   * @request POST:/v1/sms/campaigns
   */
  export namespace SmsCampaignsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SmsCampaignsCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = SmsCampaignResource;
  }

  /**
   * No description
   * @tags SmsCampaigns
   * @name SmsCampaignsUpdate
   * @request PUT:/v1/sms/campaigns/{smsCampaign}
   */
  export namespace SmsCampaignsUpdate {
    export type RequestParams = {
      /** The sms campaign ID */
      smsCampaign: number;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsCampaignsUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = SmsCampaignResource;
  }

  /**
   * No description
   * @tags SmsCampaigns
   * @name SmsCampaignsDelete
   * @request DELETE:/v1/sms/campaigns/{campaign}
   */
  export namespace SmsCampaignsDelete {
    export type RequestParams = {
      campaign: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsCampaignsDeletePayload;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * No description
   * @tags SmsCampaignTexts
   * @name SmsCampaignsTextsDetail
   * @request GET:/v1/sms/campaigns/{campaign}/texts
   */
  export namespace SmsCampaignsTextsDetail {
    export type RequestParams = {
      /** The campaign ID */
      campaign: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: SmsCampaignTextResource[];
    };
  }

  /**
   * No description
   * @tags SmsCampaignTexts
   * @name SmsCampaignsTextsCreate
   * @request POST:/v1/sms/campaigns/{campaign}/texts
   */
  export namespace SmsCampaignsTextsCreate {
    export type RequestParams = {
      /** The campaign ID */
      campaign: number;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsCampaignsTextsCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = SmsCampaignTextResource;
  }

  /**
   * No description
   * @tags SmsCampaignTexts
   * @name SmsCampaignsTextsUpdate
   * @request PUT:/v1/sms/campaigns/{campaign}/texts/{text}
   */
  export namespace SmsCampaignsTextsUpdate {
    export type RequestParams = {
      /** The campaign ID */
      campaign: number;
      /** The text ID */
      text: number;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsCampaignsTextsUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = SmsCampaignTextResource;
  }

  /**
   * No description
   * @tags SmsCampaignTexts
   * @name SmsCampaignsTextsDelete
   * @request DELETE:/v1/sms/campaigns/{campaign}/texts/{text}
   */
  export namespace SmsCampaignsTextsDelete {
    export type RequestParams = {
      /** The campaign ID */
      campaign: number;
      /** The text ID */
      text: number;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsCampaignsTextsDeletePayload;
    export type RequestHeaders = {};
    export type ResponseBody = null;
  }

  /**
   * No description
   * @tags SmsCampaignSenderids
   * @name SmsCampaignsSenderidsDetail
   * @request GET:/v1/sms/campaigns/{campaign}/senderids
   */
  export namespace SmsCampaignsSenderidsDetail {
    export type RequestParams = {
      /** The campaign ID */
      campaign: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: SmsCampaignSenderidResource[];
    };
  }

  /**
   * No description
   * @tags SmsCampaignSenderids
   * @name SmsCampaignsSenderidsCreate
   * @request POST:/v1/sms/campaigns/{campaign}/senderids
   */
  export namespace SmsCampaignsSenderidsCreate {
    export type RequestParams = {
      /** The campaign ID */
      campaign: number;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsCampaignsSenderidsCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = SmsCampaignSenderidResource;
  }

  /**
   * No description
   * @tags SmsCampaignSenderids
   * @name SmsCampaignsSenderidsUpdate
   * @request PUT:/v1/sms/campaigns/{campaign}/senderids/{senderid}
   */
  export namespace SmsCampaignsSenderidsUpdate {
    export type RequestParams = {
      /** The campaign ID */
      campaign: number;
      /** The senderid ID */
      senderid: number;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsCampaignsSenderidsUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = SmsCampaignSenderidResource;
  }

  /**
   * No description
   * @tags SmsCampaignSenderids
   * @name SmsCampaignsSenderidsDelete
   * @request DELETE:/v1/sms/campaigns/{campaign}/senderids/{senderid}
   */
  export namespace SmsCampaignsSenderidsDelete {
    export type RequestParams = {
      /** The campaign ID */
      campaign: number;
      /** The senderid ID */
      senderid: number;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsCampaignsSenderidsDeletePayload;
    export type RequestHeaders = {};
    export type ResponseBody = null;
  }

  /**
   * No description
   * @tags SmsCampaignOffers
   * @name SmsCampaignsOffersDetail
   * @request GET:/v1/sms/campaigns/{campaign}/offers
   */
  export namespace SmsCampaignsOffersDetail {
    export type RequestParams = {
      /** The campaign ID */
      campaign: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: OfferCampaignResource[];
    };
  }

  /**
   * No description
   * @tags SmsCampaignOffers
   * @name SmsCampaignsOffersCreate
   * @request POST:/v1/sms/campaigns/{campaign}/offers
   */
  export namespace SmsCampaignsOffersCreate {
    export type RequestParams = {
      /** The campaign ID */
      campaign: number;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsCampaignsOffersCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = OfferCampaignResource;
  }

  /**
   * No description
   * @tags SmsCampaignOffers
   * @name SmsCampaignsOffersUpdate
   * @request PUT:/v1/sms/campaigns/{campaign}/offers/{offer}
   */
  export namespace SmsCampaignsOffersUpdate {
    export type RequestParams = {
      /** The campaign ID */
      campaign: number;
      /** The offer ID */
      offer: number;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsCampaignsOffersUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = OfferCampaignResource;
  }

  /**
   * No description
   * @tags SmsCampaignOffers
   * @name SmsCampaignsOffersDelete
   * @request DELETE:/v1/sms/campaigns/{campaign}/offers/{offer}
   */
  export namespace SmsCampaignsOffersDelete {
    export type RequestParams = {
      /** The campaign ID */
      campaign: number;
      /** The offer ID */
      offer: number;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsCampaignsOffersDeletePayload;
    export type RequestHeaders = {};
    export type ResponseBody = null;
  }

  /**
   * No description
   * @tags SmsCampaigns
   * @name SmsCampaignsSendManualCreate
   * @request POST:/v1/sms/campaigns/{campaign}/send-manual
   */
  export namespace SmsCampaignsSendManualCreate {
    export type RequestParams = {
      /** The campaign ID */
      campaign: number;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsCampaignsSendManualCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = SmsCampaignResource;
  }

  /**
   * No description
   * @tags SmsCampaigns
   * @name SmsCampaignsLogsDetail
   * @request GET:/v1/sms/campaigns/{campaign}/logs
   */
  export namespace SmsCampaignsLogsDetail {
    export type RequestParams = {
      campaign: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * No description
   * @tags Offers
   * @name OffersList
   * @request GET:/v1/offers
   */
  export namespace OffersList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data: OfferResource[];
    };
  }

  /**
   * No description
   * @tags Offers
   * @name OffersCreate
   * @request POST:/v1/offers
   */
  export namespace OffersCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = OffersCreatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = OfferResource;
  }

  /**
   * No description
   * @tags Offers
   * @name OffersUpdate
   * @request PUT:/v1/offers/{offer}
   */
  export namespace OffersUpdate {
    export type RequestParams = {
      /** The offer ID */
      offer: number;
    };
    export type RequestQuery = {};
    export type RequestBody = OffersUpdatePayload;
    export type RequestHeaders = {};
    export type ResponseBody = OfferResource;
  }

  /**
   * No description
   * @tags Offers
   * @name OffersDelete
   * @request DELETE:/v1/offers/{id}
   */
  export namespace OffersDelete {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OffersDeletePayload;
    export type RequestHeaders = {};
    export type ResponseBody = null;
  }
}
