    fragment Role on Role {
        id
        createdAt
        updatedAt
        code
        description
        permissions
        channels {
            id
            code
            token
        }
    }
`,Rf=H.gql`
    fragment Administrator on Administrator {
        id
        createdAt
        updatedAt
        firstName
        lastName
        emailAddress
        user {
            id
            identifier
            lastLogin
            roles {
                ...Role
            }
        }
    }
    ${Tf}
`,Zf=H.gql`
    query GetAdministrators($options: AdministratorListOptions) {
        administrators(options: $options) {
            items {
                ...Administrator
            }
            totalItems
        }
    }
    ${Rf}
`,Nf=H.gql`
    query GetActiveAdministrator {
        activeAdministrator {
            ...Administrator
        }
    }
    ${Rf}
`,Ff=H.gql`
    query GetAdministrator($id: ID!) {
        administrator(id: $id) {
            ...Administrator
        }
    }
    ${Rf}
`,jf=H.gql`
    mutation CreateAdministrator($input: CreateAdministratorInput!) {
        createAdministrator(input: $input) {
            ...Administrator
        }
    }
    ${Rf}
`,Bf=H.gql`
    mutation UpdateAdministrator($input: UpdateAdministratorInput!) {
        updateAdministrator(input: $input) {
            ...Administrator
        }
    }
    ${Rf}
`,zf=H.gql`
    mutation UpdateActiveAdministrator($input: UpdateActiveAdministratorInput!) {
        updateActiveAdministrator(input: $input) {
            ...Administrator
        }
    }
    ${Rf}
`,Uf=H.gql`
    mutation DeleteAdministrator($id: ID!) {
        deleteAdministrator(id: $id) {
            result
            message
        }
    }
`,$f=H.gql`
    query GetRoles($options: RoleListOptions) {
        roles(options: $options) {
            items {
                ...Role
            }
            totalItems
        }
    }
    ${Tf}
`,qf=H.gql`
    query GetRole($id: ID!) {
        role(id: $id) {
            ...Role
        }
    }
    ${Tf}
`,Gf=H.gql`
    mutation CreateRole($input: CreateRoleInput!) {
        createRole(input: $input) {
            ...Role
        }
    }
    ${Tf}
`,Wf=H.gql`
    mutation UpdateRole($input: UpdateRoleInput!) {
        updateRole(input: $input) {
            ...Role
        }
    }
    ${Tf}
`,Yf=H.gql`
    mutation DeleteRole($id: ID!) {
        deleteRole(id: $id) {
            result
            message
        }
    }
`;H.gql`
    mutation AssignRoleToAdministrator($administratorId: ID!, $roleId: ID!) {
        assignRoleToAdministrator(administratorId: $administratorId, roleId: $roleId) {
            ...Administrator
        }
    }
    ${Rf}
`;class Qf{constructor(e){this.baseDataService=e}getAdministrators(e=10,t=0){return this.baseDataService.query(Zf,{options:{take:e,skip:t}})}getActiveAdministrator(e="cache-first"){return this.baseDataService.query(Nf,{},e)}getAdministrator(e){return this.baseDataService.query(Ff,{id:e})}createAdministrator(e){return this.baseDataService.mutate(jf,{input:e})}updateAdministrator(e){return this.baseDataService.mutate(Bf,{input:e})}updateActiveAdministrator(e){return this.baseDataService.mutate(zf,{input:e})}deleteAdministrator(e){return this.baseDataService.mutate(Uf,{id:e})}getRoles(e=10,t=0){return this.baseDataService.query($f,{options:{take:e,skip:t}})}getRole(e){return this.baseDataService.query(qf,{id:e})}createRole(e){return this.baseDataService.mutate(Gf,{input:e})}updateRole(e){return this.baseDataService.mutate(Wf,{input:e})}deleteRole(e){return this.baseDataService.mutate(Yf,{id:e})}}const Xf=H.gql`
    fragment ConfigurableOperation on ConfigurableOperation {
        args {
            name
            value
        }
        code
    }
`,Kf=H.gql`
    fragment ConfigurableOperationDef on ConfigurableOperationDefinition {
        args {
            name
            type
            required
            defaultValue
            list
            ui
            label
        }
        code
        description
    }
`,Jf=H.gql`
    fragment ErrorResult on ErrorResult {
        errorCode
        message
    }
`,eg=H.gql`
    fragment CurrentUser on CurrentUser {
        id
        identifier
        channels {
            id
            code
            token
            permissions
        }
    }
`,tg=H.gql`
    mutation AttemptLogin($username: String!, $password: String!, $rememberMe: Boolean!) {
        login(username: $username, password: $password, rememberMe: $rememberMe) {
            ...CurrentUser
            ...ErrorResult
        }
    }
    ${eg}
    ${Jf}
`,ng=H.gql`
    mutation LogOut {
        logout {
            success
        }
    }
`,rg=H.gql`
    query GetCurrentUser {
        me {
            ...CurrentUser
        }
    }
    ${eg}
`;class ig{constructor(e){this.baseDataService=e}currentUser(){return this.baseDataService.query(rg)}attemptLogin(e,t,n){return this.baseDataService.mutate(tg,{username:e,password:t,rememberMe:n})}logOut(){return this.baseDataService.mutate(ng)}}class sg{constructor(e){this.location=e}set(e,t){const n=this.keyName(e);localStorage.setItem(n,JSON.stringify(t))}setForCurrentLocation(e,t){const n=this.getLocationBasedKey(e);this.set(n,t)}setForSession(e,t){const n=this.keyName(e);sessionStorage.setItem(n,JSON.stringify(t))}get(e){const t=this.keyName(e),n=sessionStorage.getItem(t)||localStorage.getItem(t);let r;try{r=JSON.parse(n||"null")}catch(i){console.error(`Could not parse the localStorage value for "${e}" (${n})`)}return r}getForCurrentLocation(e){const t=this.getLocationBasedKey(e);return this.get(t)}remove(e){const t=this.keyName(e);sessionStorage.removeItem(t),localStorage.removeItem(t)}getLocationBasedKey(e){return e+this.location.path()}keyName(e){return"vnd_"+e}}sg.\u0275fac=function(e){return new(e||sg)(r.mc(i.l))},sg.\u0275prov=Object(r.Yb)({factory:function(){return new sg(Object(r.mc)(i.l))},token:sg,providedIn:"root"}),sg.ctorParameters=()=>[{type:i.l}];const ag=H.gql`
    mutation RequestStarted {
        requestStarted @client
    }
`,og=H.gql`
    mutation RequestCompleted {
        requestCompleted @client
    }
`,cg=H.gql`
    fragment UserStatus on UserStatus {
        username
        isLoggedIn
        loginTime
        activeChannelId
        permissions
        channels {
            id
            code
            token
            permissions
        }
    }
`,lg=H.gql`
    mutation SetAsLoggedIn($input: UserStatusInput!) {
        setAsLoggedIn(input: $input) @client {
            ...UserStatus
        }
    }
    ${cg}
`,ug=H.gql`
    mutation SetAsLoggedOut {
        setAsLoggedOut @client {
            ...UserStatus
        }
    }
    ${cg}
`,hg=H.gql`
    mutation SetUiLanguage($languageCode: LanguageCode!) {
        setUiLanguage(languageCode: $languageCode) @client
    }
`,dg=H.gql`
    mutation SetUiTheme($theme: String!) {
        setUiTheme(theme: $theme) @client
    }
`,pg=H.gql`
    query GetNetworkStatus {
        networkStatus @client {
            inFlightRequests
        }
    }
`,fg=H.gql`
    query GetUserStatus {
        userStatus @client {
            ...UserStatus
        }
    }
    ${cg}
`,gg=H.gql`
    query GetUiState {
        uiState @client {
            language
            theme
        }
    }
`,mg=H.gql`
    query GetClientState {
        networkStatus @client {
            inFlightRequests
        }
        userStatus @client {
            ...UserStatus
        }
        uiState @client {
            language
            theme
        }
    }
    ${cg}
`,yg=H.gql`
    mutation SetActiveChannel($channelId: ID!) {
        setActiveChannel(channelId: $channelId) @client {
            ...UserStatus
        }
    }
    ${cg}
`,bg=H.gql`
    mutation UpdateUserChannels($channels: [CurrentUserChannelInput!]!) {
        updateUserChannels(channels: $channels) @client {
            ...UserStatus
        }
    }
    ${cg}
`;class vg{constructor(e,t){this.queryRef=e,this.apollo=t,this.completed$=new Fe.a,this.valueChanges=e.valueChanges}refetchOnChannelChange(){const e=this.apollo.watchQuery({query:fg}).valueChanges,t=e.pipe(Object(s.a)(e=>e.data.userStatus.activeChannelId),Object(a.a)(Ne.notNullOrUndefined),Object(o.a)(),l(1),Object(d.a)(this.completed$)),n=e.pipe(Object(s.a)(e=>e.data.userStatus.isLoggedIn),Object(o.a)(),l(1),Object(a.a)(e=>!e),Object(d.a)(this.completed$));return this.valueChanges=Object(je.a)(t,this.queryRef.valueChanges).pipe(Object(p.a)(e=>{"string"==typeof e&&new Promise(e=>setTimeout(e,50)).then(()=>this.queryRef.refetch())}),Object(a.a)(e=>"string"!=typeof e),Object(d.a)(n),Object(d.a)(this.completed$)),this.queryRef.valueChanges=this.valueChanges,this}get single$(){return this.valueChanges.pipe(Object(a.a)(e=>e.networkStatus===H.NetworkStatus.ready),Object(f.a)(1),Object(s.a)(e=>e.data),Object(g.a)(()=>{this.completed$.next(),this.completed$.complete()}))}get stream$(){return this.valueChanges.pipe(Object(a.a)(e=>e.networkStatus===H.NetworkStatus.ready),Object(s.a)(e=>e.data),Object(g.a)(()=>{this.completed$.next(),this.completed$.complete()}))}get ref(){return this.queryRef}mapSingle(e){return this.single$.pipe(Object(s.a)(e))}mapStream(e){return this.stream$.pipe(Object(s.a)(e))}}const Cg=H.gql`
    fragment Country on Country {
        id
        createdAt
        updatedAt
        code
        name
        enabled
        translations {
            id
            languageCode
            name
        }
    }
`,Sg=H.gql`
    query GetCountryList($options: CountryListOptions) {
        countries(options: $options) {
            items {
                id
                code
                name
                enabled
            }
            totalItems
        }
    }
`,wg=H.gql`
    query GetAvailableCountries {
        countries(options: { filter: { enabled: { eq: true } } }) {
            items {
                id
                code
                name
                enabled
            }
        }
    }
`,_g=H.gql`
    query GetCountry($id: ID!) {
        country(id: $id) {
            ...Country
        }
    }
    ${Cg}
`,Ag=H.gql`
    mutation CreateCountry($input: CreateCountryInput!) {
        createCountry(input: $input) {
            ...Country
        }
    }
    ${Cg}
`,Og=H.gql`
    mutation UpdateCountry($input: UpdateCountryInput!) {
        updateCountry(input: $input) {
            ...Country
        }
    }
    ${Cg}
`,xg=H.gql`
    mutation DeleteCountry($id: ID!) {
        deleteCountry(id: $id) {
            result
            message
        }
    }
`,Mg=H.gql`
    fragment Zone on Zone {
        id
        name
        members {
            ...Country
        }
    }
    ${Cg}
`,Vg=H.gql`
    query GetZones {
        zones {
            id
            createdAt
            updatedAt
            name
            members {
                createdAt
                updatedAt
                id
                name
                code
                enabled
            }
        }
    }
`,Eg=(H.gql`
    query GetZone($id: ID!) {
        zone(id: $id) {
            ...Zone
        }
    }
    ${Mg}
`,H.gql`
    mutation CreateZone($input: CreateZoneInput!) {
        createZone(input: $input) {
            ...Zone
        }
    }
    ${Mg}
`),Dg=H.gql`
    mutation UpdateZone($input: UpdateZoneInput!) {
        updateZone(input: $input) {
            ...Zone
        }
    }
    ${Mg}
`,Lg=H.gql`
    mutation DeleteZone($id: ID!) {
        deleteZone(id: $id) {
            message
            result
        }
    }
`,kg=H.gql`
    mutation AddMembersToZone($zoneId: ID!, $memberIds: [ID!]!) {
        addMembersToZone(zoneId: $zoneId, memberIds: $memberIds) {
            ...Zone
        }
    }
    ${Mg}
`,Ig=H.gql`
    mutation RemoveMembersFromZone($zoneId: ID!, $memberIds: [ID!]!) {
        removeMembersFromZone(zoneId: $zoneId, memberIds: $memberIds) {
            ...Zone
        }
    }
    ${Mg}
`,Hg=H.gql`
    fragment TaxCategory on TaxCategory {
        id
        createdAt
        updatedAt
        name
    }
`,Pg=H.gql`
    query GetTaxCategories {
        taxCategories {
            ...TaxCategory
        }
    }
    ${Hg}
`,Tg=H.gql`
    query GetTaxCategory($id: ID!) {
        taxCategory(id: $id) {
            ...TaxCategory
        }
    }
    ${Hg}
`,Rg=H.gql`
    mutation CreateTaxCategory($input: CreateTaxCategoryInput!) {
        createTaxCategory(input: $input) {
            ...TaxCategory
        }
    }
    ${Hg}
`,Zg=H.gql`
    mutation UpdateTaxCategory($input: UpdateTaxCategoryInput!) {
        updateTaxCategory(input: $input) {
            ...TaxCategory
        }
    }
    ${Hg}
`,Ng=H.gql`
    mutation DeleteTaxCategory($id: ID!) {
        deleteTaxCategory(id: $id) {
            result
            message
        }
    }
`,Fg=H.gql`
    fragment TaxRate on TaxRate {
        id
        createdAt
        updatedAt
        name
        enabled
        value
        category {
            id
            name
        }
        zone {
            id
            name
        }
        customerGroup {
            id
            name
        }
    }
`,jg=H.gql`
    query GetTaxRateList($options: TaxRateListOptions) {
        taxRates(options: $options) {
            items {
                ...TaxRate
            }
            totalItems
        }
    }
    ${Fg}
`,Bg=H.gql`
    query GetTaxRate($id: ID!) {
        taxRate(id: $id) {
            ...TaxRate
        }
    }
    ${Fg}
`,zg=H.gql`
    mutation CreateTaxRate($input: CreateTaxRateInput!) {
        createTaxRate(input: $input) {
            ...TaxRate
        }
    }
    ${Fg}
`,Ug=H.gql`
    mutation UpdateTaxRate($input: UpdateTaxRateInput!) {
        updateTaxRate(input: $input) {
            ...TaxRate
        }
    }
    ${Fg}
`,$g=H.gql`
    mutation DeleteTaxRate($id: ID!) {
        deleteTaxRate(id: $id) {
            result
            message
        }
    }
`,qg=H.gql`
    fragment Channel on Channel {
        id
        createdAt
        updatedAt
        code
        token
        pricesIncludeTax
        currencyCode
        defaultLanguageCode
        defaultShippingZone {
            id
            name
        }
        defaultTaxZone {
            id
            name
        }
    }
`,Gg=H.gql`
    query GetChannels {
        channels {
            ...Channel
        }
    }
    ${qg}
`,Wg=H.gql`
    query GetChannel($id: ID!) {
        channel(id: $id) {
            ...Channel
        }
    }
    ${qg}
`,Yg=H.gql`
    query GetActiveChannel {
        activeChannel {
            ...Channel
        }
    }
    ${qg}
`,Qg=H.gql`
    mutation CreateChannel($input: CreateChannelInput!) {
        createChannel(input: $input) {
            ...Channel
            ...ErrorResult
        }
    }
    ${qg}
    ${Jf}
`,Xg=H.gql`
    mutation UpdateChannel($input: UpdateChannelInput!) {
        updateChannel(input: $input) {
            ...Channel
            ...ErrorResult
        }
    }
    ${qg}
    ${Jf}
`,Kg=H.gql`
    mutation DeleteChannel($id: ID!) {
        deleteChannel(id: $id) {
            result
            message
        }
    }
`,Jg=H.gql`
    fragment PaymentMethod on PaymentMethod {
        id
        createdAt
        updatedAt
        code
        enabled
        configArgs {
            name
            value
        }
        definition {
            ...ConfigurableOperationDef
        }
    }
    ${Kf}
`,em=H.gql`
    query GetPaymentMethodList($options: PaymentMethodListOptions!) {
        paymentMethods(options: $options) {
            items {
                ...PaymentMethod
            }
            totalItems
        }
    }
    ${Jg}
`,tm=H.gql`
    query GetPaymentMethod($id: ID!) {
        paymentMethod(id: $id) {
            ...PaymentMethod
        }
    }
    ${Jg}
`,nm=H.gql`
    mutation UpdatePaymentMethod($input: UpdatePaymentMethodInput!) {
        updatePaymentMethod(input: $input) {
            ...PaymentMethod
        }
    }
    ${Jg}
`,rm=H.gql`
    fragment GlobalSettings on GlobalSettings {
        id
        availableLanguages
        trackInventory
        outOfStockThreshold
        serverConfig {
            permissions {
                name
                description
                assignable
            }
            orderProcess {
                name
            }
        }
    }
`,im=H.gql`
    query GetGlobalSettings {
        globalSettings {
            ...GlobalSettings
        }
    }
    ${rm}
`,sm=H.gql`
    mutation UpdateGlobalSettings($input: UpdateGlobalSettingsInput!) {
        updateGlobalSettings(input: $input) {
            ...GlobalSettings
            ...ErrorResult
        }
    }
    ${rm}
    ${Jf}
`,am=H.gql`
    fragment CustomFieldConfig on CustomField {
        name
        type
        list
        description {
            languageCode
            value
        }
        label {
            languageCode
            value
        }
        readonly
    }
`,om=H.gql`
    fragment StringCustomField on StringCustomFieldConfig {
        ...CustomFieldConfig
        pattern
        options {
            label {
                languageCode
                value
            }
            value
        }
    }
    ${am}
`,cm=H.gql`
    fragment LocaleStringCustomField on LocaleStringCustomFieldConfig {
        ...CustomFieldConfig
        pattern
    }
    ${am}
`,lm=H.gql`
    fragment BooleanCustomField on BooleanCustomFieldConfig {
        ...CustomFieldConfig
    }
    ${am}
`,um=H.gql`
    fragment IntCustomField on IntCustomFieldConfig {
        ...CustomFieldConfig
        intMin: min
        intMax: max
        intStep: step
    }
    ${am}
`,hm=H.gql`
    fragment FloatCustomField on FloatCustomFieldConfig {
        ...CustomFieldConfig
        floatMin: min
        floatMax: max
        floatStep: step
    }
    ${am}
`,dm=H.gql`
    fragment DateTimeCustomField on DateTimeCustomFieldConfig {
        ...CustomFieldConfig
        datetimeMin: min
        datetimeMax: max
        datetimeStep: step
    }
    ${am}
`,pm=H.gql`
    fragment CustomFields on CustomField {
        ... on StringCustomFieldConfig {
            ...StringCustomField
        }
        ... on LocaleStringCustomFieldConfig {
            ...LocaleStringCustomField
        }
        ... on BooleanCustomFieldConfig {
            ...BooleanCustomField
        }
        ... on IntCustomFieldConfig {
            ...IntCustomField
        }
        ... on FloatCustomFieldConfig {
            ...FloatCustomField
        }
        ... on DateTimeCustomFieldConfig {
            ...DateTimeCustomField
        }
    }
    ${om}
    ${cm}
    ${lm}
    ${um}
    ${hm}
    ${dm}
`,fm=H.gql`
    query GetServerConfig {
        globalSettings {
            id
            serverConfig {
                orderProcess {
                    name
                    to
                }
                permittedAssetTypes
                permissions {
                    name
                    description
                    assignable
                }
                customFieldConfig {
                    Address {
                        ...CustomFields
                    }
                    Collection {
                        ...CustomFields
                    }
                    Customer {
                        ...CustomFields
                    }
                    Facet {
                        ...CustomFields
                    }
                    FacetValue {
                        ...CustomFields
                    }
                    Fulfillment {
                        ...CustomFields
                    }
                    GlobalSettings {
                        ...CustomFields
                    }
                    Order {
                        ...CustomFields
                    }
                    OrderLine {
                        ...CustomFields
                    }
                    Product {
                        ...CustomFields
                    }
                    ProductOption {
                        ...CustomFields
                    }
                    ProductOptionGroup {
                        ...CustomFields
                    }
                    ProductVariant {
                        ...CustomFields
                    }
                    ShippingMethod {
                        ...CustomFields
                    }
                    User {
                        ...CustomFields
                    }
                }
            }
        }
    }
    ${pm}
`,gm=H.gql`
    fragment JobInfo on Job {
        id
        createdAt
        startedAt
        settledAt
        queueName
        state
        isSettled
        progress
        duration
        data
        result
        error
    }
`,mm=H.gql`
    query GetJobInfo($id: ID!) {
        job(jobId: $id) {
            ...JobInfo
        }
    }
    ${gm}
`,ym=H.gql`
    query GetAllJobs($options: JobListOptions) {
        jobs(options: $options) {
            items {
                ...JobInfo
            }
            totalItems
        }
    }
    ${gm}
`,bm=H.gql`
    query GetJobsById($ids: [ID!]!) {
        jobsById(jobIds: $ids) {
            ...JobInfo
        }
    }
    ${gm}
`,vm=H.gql`
    query GetJobQueueList {
        jobQueues {
            name
            running
        }
    }
`,Cm=H.gql`
    mutation CancelJob($id: ID!) {
        cancelJob(jobId: $id) {
            ...JobInfo
        }
    }
    ${gm}
`,Sm=H.gql`
    mutation Reindex {
        reindex {
            ...JobInfo
        }
    }
    ${gm}
`;class wm{constructor(e){this.injector=e,this._serverConfig={}}get baseDataService(){return this.injector.get(Im)}init(){return()=>this.getServerConfig()}getServerConfig(){return this.baseDataService.query(fm).single$.toPromise().then(e=>{this._serverConfig=e.globalSettings.serverConfig},e=>{})}getAvailableLanguages(){return this.baseDataService.query(im,{},"cache-first").mapSingle(e=>e.globalSettings.availableLanguages)}refreshGlobalSettings(){return this.baseDataService.query(im,{},"network-only").single$}getCustomFieldsFor(e){return this.serverConfig.customFieldConfig[e]||[]}getOrderProcessStates(){return this.serverConfig.orderProcess}getPermittedAssetTypes(){return this.serverConfig.permittedAssetTypes}getPermissionDefinitions(){return this.serverConfig.permissions}get serverConfig(){return this._serverConfig}}function _m(e,t){const n=e.definitions.filter(Am);for(const r of n){let e=r.typeCondition.name.value;"OrderAddress"===e&&(e="Address");const n=t[e];if(n&&n.length){r.selectionSet.selections.push({name:{kind:Qe.a.NAME,value:"customFields"},kind:Qe.a.FIELD,selectionSet:{kind:Qe.a.SELECTION_SET,selections:n.map(e=>({kind:Qe.a.FIELD,name:{kind:Qe.a.NAME,value:e.name}}))}});const e=n.filter(e=>"localeString"===e.type),t=r.selectionSet.selections.filter(Om).find(e=>"translations"===e.name.value);e.length&&t&&t.selectionSet&&t.selectionSet.selections.push({name:{kind:Qe.a.NAME,value:"customFields"},kind:Qe.a.FIELD,selectionSet:{kind:Qe.a.SELECTION_SET,selections:e.map(e=>({kind:Qe.a.FIELD,name:{kind:Qe.a.NAME,value:e.name}}))}})}}return e}function Am(e){return e.kind===Qe.a.FRAGMENT_DEFINITION}function Om(e){return e.kind===Qe.a.FIELD}wm.\u0275fac=function(e){return new(e||wm)(r.mc(r.C))},wm.\u0275prov=r.Yb({token:wm,factory:wm.\u0275fac}),wm.ctorParameters=()=>[{type:r.C}];const xm=/Create([A-Za-z]+)Input/,Mm=/Update([A-Za-z]+)Input/;function Vm(e){const t=function(e,t){for(var n=null,r=0,i=e.definitions;r<i.length;r++){var s,a=i[r];if(a.kind===Qe.a.OPERATION_DEFINITION)if(null==t){if(n)return null;n=a}else if((null===(s=a.name)||void 0===s?void 0:s.value)===t)return a}return n}(e,null);if(t&&t.variableDefinitions)for(const n of t.variableDefinitions){const e=Em(n.type).name.value,t=e.match(xm);if(t)return t[1];const r=e.match(Mm);if(r)return r[1]}}function Em(e){return"NonNullType"===e.kind||"ListType"===e.kind?Em(e.type):e}function Dm(e,t){for(const n of t)if(n.readonly)if("localeString"===n.type){if(km(e))for(const t of e.translations)Lm(t)&&void 0!==t.customFields[n.name]&&delete t.customFields[n.name]}else Lm(e)&&void 0!==e.customFields[n.name]&&delete e.customFields[n.name];return e}function Lm(e){return null!=e&&e.hasOwnProperty("customFields")}function km(e){return null!=e&&e.hasOwnProperty("translations")}class Im{constructor(e,t,n,r){this.apollo=e,this.httpClient=t,this.localStorageService=n,this.serverConfigService=r}get customFields(){return this.serverConfigService.serverConfig.customFieldConfig||{}}query(e,t,n="cache-and-network"){const r=_m(e,this.customFields),i=this.apollo.watchQuery({query:r,variables:t,fetchPolicy:n});return new vg(i,this.apollo)}mutate(e,t,n){const r=_m(e,this.customFields),i=this.removeReadonlyCustomFieldsFromVariables(e,t);return this.apollo.mutate({mutation:r,variables:i,update:n}).pipe(Object(s.a)(e=>e.data))}removeReadonlyCustomFieldsFromVariables(e,t){const n=Vm(e);if(n){const e=this.customFields[n];if(t&&e)return function(e,t){const n=Object(Ke.simpleDeepClone)(e);return n.input&&Dm(n.input,t),Dm(n,t)}(t,e)}return t}}Im.\u0275fac=function(e){return new(e||Im)(r.mc(Y),r.mc(ye),r.mc(sg),r.mc(wm))},Im.\u0275prov=r.Yb({token:Im,factory:Im.\u0275fac}),Im.ctorParameters=()=>[{type:Y},{type:ye},{type:sg},{type:wm}];class Hm{constructor(e){this.baseDataService=e}startRequest(){return this.baseDataService.mutate(ag)}completeRequest(){return this.baseDataService.mutate(og)}getNetworkStatus(){return this.baseDataService.query(pg,{},"cache-first")}loginSuccess(e,t,n){return this.baseDataService.mutate(lg,{input:{username:e,loginTime:Date.now().toString(),activeChannelId:t,channels:n}})}logOut(){return this.baseDataService.mutate(ug)}userStatus(){return this.baseDataService.query(fg,{},"cache-first")}uiState(){return this.baseDataService.query(gg,{},"cache-first")}setUiLanguage(e){return this.baseDataService.mutate(hg,{languageCode:e})}setUiTheme(e){return this.baseDataService.mutate(dg,{theme:e})}setActiveChannel(e){return this.baseDataService.mutate(yg,{channelId:e})}updateUserChannels(e){return this.baseDataService.mutate(bg,{channels:e})}}const Pm=H.gql`
    fragment Asset on Asset {
        id
        createdAt
        updatedAt
        name
        fileSize
        mimeType
        type
        preview
        source
        width
        height
        focalPoint {
            x
            y
        }
    }
`,Tm=H.gql`
    fragment ProductOptionGroup on ProductOptionGroup {
        id
        code
        languageCode
        name
        translations {
            id
            languageCode
            name
        }
    }
`,Rm=H.gql`
    fragment ProductOption on ProductOption {
        id
        code
        languageCode
        name
        groupId
        translations {
            id
            languageCode
            name
        }
    }
`,Zm=H.gql`
    fragment ProductVariant on ProductVariant {
        id
        createdAt
        updatedAt
        enabled
        languageCode
        name
        price
        currencyCode
        priceWithTax
        stockOnHand
        stockAllocated
        trackInventory
        outOfStockThreshold
        useGlobalOutOfStockThreshold
        taxRateApplied {
            id
            name
            value
        }
        taxCategory {
            id
            name
        }
        sku
        options {
            ...ProductOption
        }
        facetValues {
            id
            code
            name
            facet {
                id
                name
            }
        }
        featuredAsset {
            ...Asset
        }
        assets {
            ...Asset
        }
        translations {
            id
            languageCode
            name
        }
        channels {
            id
            code
        }
    }
    ${Rm}
    ${Pm}
`,Nm=H.gql`
    fragment ProductWithVariants on Product {
        id
        createdAt
        updatedAt
        enabled
        languageCode
        name
        slug
        description
        featuredAsset {
            ...Asset
        }
        assets {
            ...Asset
        }
        translations {
            id
            languageCode
            name
            slug
            description
        }
        optionGroups {
            ...ProductOptionGroup
        }
        variants {
            ...ProductVariant
        }
        facetValues {
            id
            code
            name
            facet {
                id
                name
            }
        }
        channels {
            id
            code
        }
    }
    ${Tm}
    ${Zm}
    ${Pm}
`,Fm=H.gql`
    fragment ProductOptionGroupWithOptions on ProductOptionGroup {
        id
        createdAt
        updatedAt
        languageCode
        code
        name
        translations {
            id
            name
        }
        options {
            id
            languageCode
            name
            code
            translations {
                name
            }
        }
    }
`,jm=H.gql`
    mutation UpdateProduct($input: UpdateProductInput!) {
        updateProduct(input: $input) {
            ...ProductWithVariants
        }
    }
    ${Nm}
`,Bm=H.gql`
    mutation CreateProduct($input: CreateProductInput!) {
        createProduct(input: $input) {
            ...ProductWithVariants
        }
    }
    ${Nm}
`,zm=H.gql`
    mutation DeleteProduct($id: ID!) {
        deleteProduct(id: $id) {
            result
            message
        }
    }
`,Um=H.gql`
    mutation CreateProductVariants($input: [CreateProductVariantInput!]!) {
        createProductVariants(input: $input) {
            ...ProductVariant
        }
    }
    ${Zm}
`,$m=H.gql`
    mutation UpdateProductVariants($input: [UpdateProductVariantInput!]!) {
        updateProductVariants(input: $input) {
            ...ProductVariant
        }
    }
    ${Zm}
`,qm=H.gql`
    mutation CreateProductOptionGroup($input: CreateProductOptionGroupInput!) {
        createProductOptionGroup(input: $input) {
            ...ProductOptionGroupWithOptions
        }
    }
    ${Fm}
`,Gm=H.gql`
    query GetProductOptionGroup($id: ID!) {
        productOptionGroup(id: $id) {
            ...ProductOptionGroupWithOptions
        }
    }
    ${Fm}
`,Wm=H.gql`
    mutation AddOptionToGroup($input: CreateProductOptionInput!) {
        createProductOption(input: $input) {
            id
            createdAt
            updatedAt
            name
            code
            groupId
        }
    }
`,Ym=H.gql`
    mutation AddOptionGroupToProduct($productId: ID!, $optionGroupId: ID!) {
        addOptionGroupToProduct(productId: $productId, optionGroupId: $optionGroupId) {
            id
            createdAt
            updatedAt
            optionGroups {
                id
                createdAt
                updatedAt
                code
                options {
                    id
                    createdAt
                    updatedAt
                    code
                }
            }
        }
    }
`,Qm=H.gql`
    mutation RemoveOptionGroupFromProduct($productId: ID!, $optionGroupId: ID!) {
        removeOptionGroupFromProduct(productId: $productId, optionGroupId: $optionGroupId) {
            ... on Product {
                id
                createdAt
                updatedAt
                optionGroups {
                    id
                    createdAt
                    updatedAt
                    code
                    options {
                        id
                        createdAt
                        updatedAt
                        code
                    }
                }
            }
            ...ErrorResult
        }
    }
    ${Jf}
`,Xm=H.gql`
    query GetProductWithVariants($id: ID!) {
        product(id: $id) {
            ...ProductWithVariants
        }
    }
    ${Nm}
`,Km=H.gql`
    query GetProductList($options: ProductListOptions) {
        products(options: $options) {
            items {
                id
                createdAt
                updatedAt
                enabled
                languageCode
                name
                slug
                featuredAsset {
                    id
                    createdAt
                    updatedAt
                    preview
                }
            }
            totalItems
        }
    }
`,Jm=H.gql`
    query GetProductOptionGroups($filterTerm: String) {
        productOptionGroups(filterTerm: $filterTerm) {
            id
            createdAt
            updatedAt
            languageCode
            code
            name
            options {
                id
                createdAt
                updatedAt
                languageCode
                code
                name
            }
        }
    }
`,ey=H.gql`
    query GetAssetList($options: AssetListOptions) {
        assets(options: $options) {
            items {
                ...Asset
            }
            totalItems
        }
    }
    ${Pm}
`,ty=H.gql`
    query GetAsset($id: ID!) {
        asset(id: $id) {
            ...Asset
        }
    }
    ${Pm}
`,ny=H.gql`
    mutation CreateAssets($input: [CreateAssetInput!]!) {
        createAssets(input: $input) {
            ...Asset
            ... on ErrorResult {
                message
            }
        }
    }
    ${Pm}
`,ry=H.gql`
    mutation UpdateAsset($input: UpdateAssetInput!) {
        updateAsset(input: $input) {
            ...Asset
        }
    }
    ${Pm}
`,iy=H.gql`
    mutation DeleteAssets($ids: [ID!]!, $force: Boolean) {
        deleteAssets(ids: $ids, force: $force) {
            result
            message
        }
    }
`,sy=H.gql`
    query SearchProducts($input: SearchInput!) {
        search(input: $input) {
            totalItems
            items {
                enabled
                productId
                productName
                productAsset {
                    id
                    preview
                    focalPoint {
                        x
                        y
                    }
                }
                productVariantId
                productVariantName
                productVariantAsset {
                    id
                    preview
                    focalPoint {
                        x
                        y
                    }
                }
                sku
                channelIds
            }
            facetValues {
                count
                facetValue {
                    id
                    createdAt
                    updatedAt
                    name
                    facet {
                        id
                        createdAt
                        updatedAt
                        name
                    }
                }
            }
        }
    }
`,ay=H.gql`
    query ProductSelectorSearch($term: String!, $take: Int!) {
        search(input: { groupByProduct: false, term: $term, take: $take }) {
            items {
                productVariantId
                productVariantName
                productPreview
                productAsset {
                    id
                    preview
                    focalPoint {
                        x
                        y
                    }
                }
                price {
                    ... on SinglePrice {
                        value
                    }
                }
                priceWithTax {
                    ... on SinglePrice {
                        value
                    }
                }
                sku
            }
        }
    }
`,oy=H.gql`
    mutation UpdateProductOption($input: UpdateProductOptionInput!) {
        updateProductOption(input: $input) {
            ...ProductOption
        }
    }
    ${Rm}
`,cy=H.gql`
    mutation DeleteProductVariant($id: ID!) {
        deleteProductVariant(id: $id) {
            result
            message
        }
    }
`,ly=H.gql`
    query GetProductVariantOptions($id: ID!) {
        product(id: $id) {
            id
            createdAt
            updatedAt
            name
            optionGroups {
                id
                name
                code
                options {
                    ...ProductOption
                }
            }
            variants {
                id
                createdAt
                updatedAt
                enabled
                name
                sku
                price
                stockOnHand
                enabled
                options {
                    id
                    createdAt
                    updatedAt
                    name
                    code
                    groupId
                }
            }
        }
    }
    ${Rm}
`,uy=H.gql`
    mutation AssignProductsToChannel($input: AssignProductsToChannelInput!) {
        assignProductsToChannel(input: $input) {
            id
            channels {
                id
                code
            }
        }
    }
`,hy=H.gql`
    mutation AssignVariantsToChannel($input: AssignProductVariantsToChannelInput!) {
        assignProductVariantsToChannel(input: $input) {
            id
            channels {
                id
                code
            }
        }
    }
`,dy=H.gql`
    mutation RemoveProductsFromChannel($input: RemoveProductsFromChannelInput!) {
        removeProductsFromChannel(input: $input) {
            id
            channels {
                id
                code
            }
        }
    }
`,py=H.gql`
    mutation RemoveVariantsFromChannel($input: RemoveProductVariantsFromChannelInput!) {
        removeProductVariantsFromChannel(input: $input) {
            id
            channels {
                id
                code
            }
        }
    }
`,fy=H.gql`
    query GetProductVariant($id: ID!) {
        productVariant(id: $id) {
            id
            name
            sku
            product {
                id
                featuredAsset {
                    id
                    preview
                    focalPoint {
                        x
                        y
                    }
                }
            }
        }
    }
`,gy=H.gql`
    query GetCollectionFilters {
        collectionFilters {
            ...ConfigurableOperationDef
        }
    }
    ${Kf}
`,my=H.gql`
    fragment Collection on Collection {
        id
        createdAt
        updatedAt
        name
        slug
        description
        isPrivate
        languageCode
        featuredAsset {
            ...Asset
        }
        assets {
            ...Asset
        }
        filters {
            ...ConfigurableOperation
        }
        translations {
            id
            languageCode
            name
            slug
            description
        }
        parent {
            id
            name
        }
        children {
            id
            name
        }
    }
    ${Pm}
    ${Xf}
`,yy=H.gql`
    query GetCollectionList($options: CollectionListOptions) {
        collections(options: $options) {
            items {
                id
                name
                slug
                description
                isPrivate
                featuredAsset {
                    ...Asset
                }
                parent {
                    id
                }
            }
            totalItems
        }
    }
    ${Pm}
`,by=H.gql`
    query GetCollection($id: ID!) {
        collection(id: $id) {
            ...Collection
        }
    }
    ${my}
`,vy=H.gql`
    mutation CreateCollection($input: CreateCollectionInput!) {
        createCollection(input: $input) {
            ...Collection
        }
    }
    ${my}
`,Cy=H.gql`
    mutation UpdateCollection($input: UpdateCollectionInput!) {
        updateCollection(input: $input) {
            ...Collection
        }
    }
    ${my}
`,Sy=H.gql`
    mutation MoveCollection($input: MoveCollectionInput!) {
        moveCollection(input: $input) {
            ...Collection
        }
    }
    ${my}
`,wy=H.gql`
    mutation DeleteCollection($id: ID!) {
        deleteCollection(id: $id) {
            result
            message
        }
    }
`,_y=H.gql`
    query GetCollectionContents($id: ID!, $options: ProductVariantListOptions) {
        collection(id: $id) {
            id
            name
            productVariants(options: $options) {
                items {
                    id
                    productId
                    name
                }
                totalItems
            }
        }
    }
`;class Ay{constructor(e){this.baseDataService=e}getCollectionFilters(){return this.baseDataService.query(gy)}getCollections(e=10,t=0){return this.baseDataService.query(yy,{options:{take:e,skip:t}})}getCollection(e){return this.baseDataService.query(by,{id:e})}createCollection(e){return this.baseDataService.mutate(vy,{input:Object(Je.pick)(e,["translations","parentId","assetIds","featuredAssetId","filters","customFields"])})}updateCollection(e){return this.baseDataService.mutate(Cy,{input:Object(Je.pick)(e,["id","isPrivate","translations","assetIds","featuredAssetId","filters","customFields"])})}moveCollection(e){return Object(Z.a)(e).pipe(Object(m.a)(e=>this.baseDataService.mutate(Sy,{input:e})),function(e,t=null){return function(n){return n.lift(new y(e,t))}}(e.length))}deleteCollection(e){return this.baseDataService.mutate(wy,{id:e})}getCollectionContents(e,t=10,n=0,r){const i=r?{name:{contains:r}}:void 0;return this.baseDataService.query(_y,{id:e,options:{skip:n,take:t,filter:i}})}}const Oy=H.gql`
    fragment Address on Address {
        id
        createdAt
        updatedAt
        fullName
        company
        streetLine1
        streetLine2
        city
        province
        postalCode
        country {
            id
            code
            name
        }
        phoneNumber
        defaultShippingAddress
        defaultBillingAddress
    }
`,xy=H.gql`
    fragment Customer on Customer {
        id
        createdAt
        updatedAt
        title
        firstName
        lastName
        phoneNumber
        emailAddress
        user {
            id
            identifier
            verified
            lastLogin
        }
        addresses {
            ...Address
        }
    }
    ${Oy}
`,My=H.gql`
    query GetCustomerList($options: CustomerListOptions) {
        customers(options: $options) {
            items {
                id
                createdAt
                updatedAt
                title
                firstName
                lastName
                emailAddress
                user {
                    id
                    verified
                }
            }
            totalItems
        }
    }
`,Vy=H.gql`
    query GetCustomer($id: ID!, $orderListOptions: OrderListOptions) {
        customer(id: $id) {
            ...Customer
            groups {
                id
                name
            }
            orders(options: $orderListOptions) {
                items {
                    id
                    code
                    state
                    total
                    currencyCode
                    updatedAt
                }
                totalItems
            }
        }
    }
    ${xy}
`,Ey=H.gql`
    mutation CreateCustomer($input: CreateCustomerInput!, $password: String) {
        createCustomer(input: $input, password: $password) {
            ...Customer
            ...ErrorResult
        }
    }
    ${xy}
    ${Jf}
`,Dy=H.gql`
    mutation UpdateCustomer($input: UpdateCustomerInput!) {
        updateCustomer(input: $input) {
            ...Customer
            ...ErrorResult
        }
    }
    ${xy}
    ${Jf}
`,Ly=H.gql`
    mutation DeleteCustomer($id: ID!) {
        deleteCustomer(id: $id) {
            result
            message
        }
    }
`,ky=H.gql`
    mutation CreateCustomerAddress($customerId: ID!, $input: CreateAddressInput!) {
        createCustomerAddress(customerId: $customerId, input: $input) {
            ...Address
        }
    }
    ${Oy}
`,Iy=H.gql`
    mutation UpdateCustomerAddress($input: UpdateAddressInput!) {
        updateCustomerAddress(input: $input) {
            ...Address
        }
    }
    ${Oy}
`,Hy=H.gql`
    mutation CreateCustomerGroup($input: CreateCustomerGroupInput!) {
        createCustomerGroup(input: $input) {
            id
            createdAt
            updatedAt
            name
        }
    }
`,Py=H.gql`
    mutation UpdateCustomerGroup($input: UpdateCustomerGroupInput!) {
        updateCustomerGroup(input: $input) {
            id
            createdAt
            updatedAt
            name
        }
    }
`,Ty=H.gql`
    mutation DeleteCustomerGroup($id: ID!) {
        deleteCustomerGroup(id: $id) {
            result
            message
        }
    }
`,Ry=H.gql`
    query GetCustomerGroups($options: CustomerGroupListOptions) {
        customerGroups(options: $options) {
            items {
                id
                createdAt
                updatedAt
                name
            }
            totalItems
        }
    }
`,Zy=H.gql`
    query GetCustomerGroupWithCustomers($id: ID!, $options: CustomerListOptions) {
        customerGroup(id: $id) {
            id
            createdAt
            updatedAt
            name
            customers(options: $options) {
                items {
                    id
                    createdAt
                    updatedAt
                    emailAddress
                    firstName
                    lastName
                }
                totalItems
            }
        }
    }
`,Ny=H.gql`
    mutation AddCustomersToGroup($groupId: ID!, $customerIds: [ID!]!) {
        addCustomersToGroup(customerGroupId: $groupId, customerIds: $customerIds) {
            id
            createdAt
            updatedAt
            name
        }
    }
`,Fy=H.gql`
    mutation RemoveCustomersFromGroup($groupId: ID!, $customerIds: [ID!]!) {
        removeCustomersFromGroup(customerGroupId: $groupId, customerIds: $customerIds) {
            id
            createdAt
            updatedAt
            name
        }
    }
`,jy=H.gql`
    query GetCustomerHistory($id: ID!, $options: HistoryEntryListOptions) {
        customer(id: $id) {
            id
            history(options: $options) {
                totalItems
                items {
                    id
                    type
                    createdAt
                    isPublic
                    administrator {
                        id
                        firstName
                        lastName
                    }
                    data
                }
            }
        }
    }
`,By=H.gql`
    mutation AddNoteToCustomer($input: AddNoteToCustomerInput!) {
        addNoteToCustomer(input: $input) {
            id
        }
    }
`,zy=H.gql`
    mutation UpdateCustomerNote($input: UpdateCustomerNoteInput!) {
        updateCustomerNote(input: $input) {
            id
            data
            isPublic
        }
    }
`,Uy=H.gql`
    mutation DeleteCustomerNote($id: ID!) {
        deleteCustomerNote(id: $id) {
            result
            message
        }
    }
`;class $y{constructor(e){this.baseDataService=e}getCustomerList(e=10,t=0,n){const r=n?{filter:{emailAddress:{contains:n}}}:{};return this.baseDataService.query(My,{options:Object.assign({take:e,skip:t},r)})}getCustomer(e,t){return this.baseDataService.query(Vy,{id:e,orderListOptions:t})}createCustomer(e,t){return this.baseDataService.mutate(Ey,{input:e,password:t})}updateCustomer(e){return this.baseDataService.mutate(Dy,{input:e})}deleteCustomer(e){return this.baseDataService.mutate(Ly,{id:e})}createCustomerAddress(e,t){return this.baseDataService.mutate(ky,{customerId:e,input:t})}updateCustomerAddress(e){return this.baseDataService.mutate(Iy,{input:e})}createCustomerGroup(e){return this.baseDataService.mutate(Hy,{input:e})}updateCustomerGroup(e){return this.baseDataService.mutate(Py,{input:e})}deleteCustomerGroup(e){return this.baseDataService.mutate(Ty,{id:e})}getCustomerGroupList(e){return this.baseDataService.query(Ry,{options:e})}getCustomerGroupWithCustomers(e,t){return this.baseDataService.query(Zy,{id:e,options:t})}addCustomersToGroup(e,t){return this.baseDataService.mutate(Ny,{groupId:e,customerIds:t})}removeCustomersFromGroup(e,t){return this.baseDataService.mutate(Fy,{groupId:e,customerIds:t})}getCustomerHistory(e,t){return this.baseDataService.query(jy,{id:e,options:t})}addNoteToCustomer(e,t){return this.baseDataService.mutate(By,{input:{note:t,isPublic:!1,id:e}})}updateCustomerNote(e){return this.baseDataService.mutate(zy,{input:e})}deleteCustomerNote(e){return this.baseDataService.mutate(Uy,{id:e})}}const qy=H.gql`
    fragment FacetValue on FacetValue {
        id
        createdAt
        updatedAt
        languageCode
        code
        name
        translations {
            id
            languageCode
            name
        }
        facet {
            id
            createdAt
            updatedAt
            name
        }
    }
`,Gy=H.gql`
    fragment FacetWithValues on Facet {
        id
        createdAt
        updatedAt
        languageCode
        isPrivate
        code
        name
        translations {
            id
            languageCode
            name
        }
        values {
            ...FacetValue
        }
    }
    ${qy}
`,Wy=H.gql`
    mutation CreateFacet($input: CreateFacetInput!) {
        createFacet(input: $input) {
            ...FacetWithValues
        }
    }
    ${Gy}
`,Yy=H.gql`
    mutation UpdateFacet($input: UpdateFacetInput!) {
        updateFacet(input: $input) {
            ...FacetWithValues
        }
    }
    ${Gy}
`,Qy=H.gql`
    mutation DeleteFacet($id: ID!, $force: Boolean) {
        deleteFacet(id: $id, force: $force) {
            result
            message
        }
    }
`,Xy=H.gql`
    mutation CreateFacetValues($input: [CreateFacetValueInput!]!) {
        createFacetValues(input: $input) {
            ...FacetValue
        }
    }
    ${qy}
`,Ky=H.gql`
    mutation UpdateFacetValues($input: [UpdateFacetValueInput!]!) {
        updateFacetValues(input: $input) {
            ...FacetValue
        }
    }
    ${qy}
`,Jy=H.gql`
    mutation DeleteFacetValues($ids: [ID!]!, $force: Boolean) {
        deleteFacetValues(ids: $ids, force: $force) {
            result
            message
        }
    }
`,eb=H.gql`
    query GetFacetList($options: FacetListOptions) {
        facets(options: $options) {
            items {
                ...FacetWithValues
            }
            totalItems
        }
    }
    ${Gy}
`,tb=H.gql`
    query GetFacetWithValues($id: ID!) {
        facet(id: $id) {
            ...FacetWithValues
        }
    }
    ${Gy}
`;class nb{constructor(e){this.baseDataService=e}getFacets(e=10,t=0){return this.baseDataService.query(eb,{options:{take:e,skip:t}})}getAllFacets(e=!1){return this.baseDataService.query(eb,{},e?"network-only":"cache-first")}getFacet(e){return this.baseDataService.query(tb,{id:e})}createFacet(e){const t={input:Object(Je.pick)(e,["code","isPrivate","translations","values","customFields"])};return this.baseDataService.mutate(Wy,t)}updateFacet(e){const t={input:Object(Je.pick)(e,["id","code","isPrivate","translations","customFields"])};return this.baseDataService.mutate(Yy,t)}deleteFacet(e,t){return this.baseDataService.mutate(Qy,{id:e,force:t})}createFacetValues(e){const t={input:e.map(Object(Je.pick)(["facetId","code","translations","customFields"]))};return this.baseDataService.mutate(Xy,t)}updateFacetValues(e){const t={input:e.map(Object(Je.pick)(["id","code","translations","customFields"]))};return this.baseDataService.mutate(Ky,t)}deleteFacetValues(e,t){return this.baseDataService.mutate(Jy,{ids:e,force:t})}}const rb=H.gql`
    fragment Adjustment on Adjustment {
        adjustmentSource
        amount
        description
        type
    }
`,ib=H.gql`
    fragment Refund on Refund {
        id
        state
        items
        shipping
        adjustment
        transactionId
        paymentId
    }
`,sb=H.gql`
    fragment OrderAddress on OrderAddress {
        fullName
        company
        streetLine1
        streetLine2
        city
        province
        postalCode
        country
        countryCode
        phoneNumber
    }
`,ab=H.gql`
    fragment Order on Order {
        id
        createdAt
        updatedAt
        orderPlacedAt
        code
        state
        nextStates
        total
        currencyCode
        customer {
            id
            firstName
            lastName
        }
        shippingLines {
            shippingMethod {
                name
            }
        }
    }
`,ob=H.gql`
    fragment Fulfillment on Fulfillment {
        id
        state
        nextStates
        createdAt
        updatedAt
        method
        orderItems {
            id
        }
        trackingCode
    }
`,cb=H.gql`
    fragment OrderLine on OrderLine {
        id
        featuredAsset {
            preview
        }
        productVariant {
            id
            name
            sku
            trackInventory
            stockOnHand
        }
        discounts {
            ...Adjustment
        }
        unitPrice
        unitPriceWithTax
        proratedUnitPrice
        proratedUnitPriceWithTax
        quantity
        items {
            id
            unitPrice
            unitPriceWithTax
            taxRate
            refundId
            cancelled
            fulfillment {
                ...Fulfillment
            }
        }
        linePrice
        lineTax
        linePriceWithTax
        discountedLinePrice
        discountedLinePriceWithTax
    }
`,lb=H.gql`
    fragment OrderDetail on Order {
        id
        createdAt
        updatedAt
        code
        state
        nextStates
        active
        customer {
            id
            firstName
            lastName
        }
        lines {
            ...OrderLine
        }
        surcharges {
            id
            sku
            description
            price
            priceWithTax
            taxRate
        }
        discounts {
            ...Adjustment
        }
        promotions {
            id
            couponCode
        }
        subTotal
        subTotalWithTax
        total
        totalWithTax
        currencyCode
        shipping
        shippingWithTax
        shippingLines {
            shippingMethod {
                id
                code
                name
                fulfillmentHandlerCode
                description
            }
        }
        taxSummary {
            description
            taxBase
            taxRate
            taxTotal
        }
        shippingAddress {
            ...OrderAddress
        }
        billingAddress {
            ...OrderAddress
        }
        payments {
            id
            createdAt
            transactionId
            amount
            method
            state
            metadata
            refunds {
                id
                createdAt
                state
                items
                adjustment
                total
                paymentId
                reason
                transactionId
                method
                metadata
                orderItems {
                    id
                }
            }
        }
        fulfillments {
            ...Fulfillment
        }
        modifications {
            id
            createdAt
            isSettled
            priceChange
            note
            payment {
                id
                amount
            }
            orderItems {
                id
            }
            refund {
                id
                paymentId
                total
            }
            surcharges {
                id
            }
        }
    }
    ${rb}
    ${sb}
    ${ob}
    ${cb}
`,ub=H.gql`
    query GetOrderList($options: OrderListOptions) {
        orders(options: $options) {
            items {
                ...Order
            }
            totalItems
        }
    }
    ${ab}
`,hb=H.gql`
    query GetOrder($id: ID!) {
        order(id: $id) {
            ...OrderDetail
        }
    }
    ${lb}
`,db=H.gql`
    mutation SettlePayment($id: ID!) {
        settlePayment(id: $id) {
            ... on Payment {
                id
                transactionId
                amount
                method
                state
                metadata
            }
            ...ErrorResult
            ... on SettlePaymentError {
                paymentErrorMessage
            }
            ... on PaymentStateTransitionError {
                transitionError
            }
            ... on OrderStateTransitionError {
                transitionError
            }
        }
    }
    ${Jf}
`,pb=H.gql`
    mutation CreateFulfillment($input: FulfillOrderInput!) {
        addFulfillmentToOrder(input: $input) {
            ...Fulfillment
            ...ErrorResult
        }
    }
    ${ob}
    ${Jf}
`,fb=H.gql`
    mutation CancelOrder($input: CancelOrderInput!) {
        cancelOrder(input: $input) {
            ...OrderDetail
            ...ErrorResult
        }
    }
    ${lb}
    ${Jf}
`,gb=H.gql`
    mutation RefundOrder($input: RefundOrderInput!) {
        refundOrder(input: $input) {
            ...Refund
            ...ErrorResult
        }
    }
    ${ib}
    ${Jf}
`,mb=H.gql`
    mutation SettleRefund($input: SettleRefundInput!) {
        settleRefund(input: $input) {
            ...Refund
            ...ErrorResult
        }
    }
    ${ib}
    ${Jf}
`,yb=H.gql`
    query GetOrderHistory($id: ID!, $options: HistoryEntryListOptions) {
        order(id: $id) {
            id
            history(options: $options) {
                totalItems
                items {
                    id
                    type
                    createdAt
                    isPublic
                    administrator {
                        id
                        firstName
                        lastName
                    }
                    data
                }
            }
        }
    }
`,bb=H.gql`
    mutation AddNoteToOrder($input: AddNoteToOrderInput!) {
        addNoteToOrder(input: $input) {
            id
        }
    }
`,vb=H.gql`
    mutation UpdateOrderNote($input: UpdateOrderNoteInput!) {
        updateOrderNote(input: $input) {
            id
            data
            isPublic
        }
    }
`,Cb=H.gql`
    mutation DeleteOrderNote($id: ID!) {
        deleteOrderNote(id: $id) {
            result
            message
        }
    }
`,Sb=H.gql`
    mutation TransitionOrderToState($id: ID!, $state: String!) {
        transitionOrderToState(id: $id, state: $state) {
            ...Order
            ...ErrorResult
            ... on OrderStateTransitionError {
                transitionError
            }
        }
    }
    ${ab}
    ${Jf}
`,wb=H.gql`
    mutation UpdateOrderCustomFields($input: UpdateOrderInput!) {
        setOrderCustomFields(input: $input) {
            ...Order
        }
    }
    ${ab}
`,_b=H.gql`
    mutation TransitionFulfillmentToState($id: ID!, $state: String!) {
        transitionFulfillmentToState(id: $id, state: $state) {
            ...Fulfillment
            ...ErrorResult
            ... on FulfillmentStateTransitionError {
                transitionError
            }
        }
    }
    ${ob}
    ${Jf}
`,Ab=H.gql`
    query GetOrderSummary($start: DateTime!, $end: DateTime!) {
        orders(options: { filter: { orderPlacedAt: { between: { start: $start, end: $end } } } }) {
            totalItems
            items {
                id
                total
                currencyCode
            }
        }
    }
`,Ob=H.gql`
    mutation ModifyOrder($input: ModifyOrderInput!) {
        modifyOrder(input: $input) {
            ...OrderDetail
            ...ErrorResult
        }
    }
    ${lb}
    ${Jf}
`,xb=H.gql`
    mutation AddManualPayment($input: ManualPaymentInput!) {
        addManualPaymentToOrder(input: $input) {
            ...OrderDetail
            ...ErrorResult
        }
    }
    ${lb}
    ${Jf}
    fragment Promotion on Promotion {
        id
        createdAt
        updatedAt
        name
        enabled
        couponCode
        perCustomerUsageLimit
        startsAt
        endsAt
        conditions {
            ...ConfigurableOperation
        }
        actions {
            ...ConfigurableOperation
        }
    }
    ${Xf}
`,zb=H.gql`
            }