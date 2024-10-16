(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{616:function(e,t,o){"use strict";o.r(t);var a=o(1),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("This developer documentation will help you with creating applications for Microsoft Power Platform using TALXIS managed components.\nFirst of all let us introduce ourselves and explain what TALXIS is.")]),e._v(" "),o("p",[o("strong",[e._v("TL;DR")])]),e._v(" "),o("blockquote",[o("p",[e._v("We build apps and make tools supporting scalable declarative development using Microsoft Power Platform")])]),e._v(" "),o("h2",{attrs:{id:"what-is-talxis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-talxis"}},[e._v("#")]),e._v(" What is TALXIS")]),e._v(" "),o("h3",{attrs:{id:"applications-processes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#applications-processes"}},[e._v("#")]),e._v(" Applications & Processes")]),e._v(" "),o("p",[e._v("We build sales, service and marketing applications with extensive options of customizations and offer it in SaaS model. This is made possible because they are built using a low-code platform "),o("a",{attrs:{href:"https://powerplatform.microsoft.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Power Platform"),o("OutboundLink")],1),e._v(". To make building these apps even faster we maintain many utilities which extend what is offered out-of-box.")]),e._v(" "),o("h3",{attrs:{id:"web-client-and-ui-controls"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#web-client-and-ui-controls"}},[e._v("#")]),e._v(" Web Client and UI Controls")]),e._v(" "),o("p",[e._v("In addition to "),o("a",{attrs:{href:"https://powerapps.microsoft.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Apps"),o("OutboundLink")],1),e._v(" we present the same applications to users using a "),o("a",{attrs:{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("React"),o("OutboundLink")],1),e._v("-based portal. It can render "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/powerapps/maker/model-driven-apps/model-driven-app-components",target:"_blank",rel:"noopener noreferrer"}},[e._v("Model-driven applications"),o("OutboundLink")],1),e._v(" using UI metadata from "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/powerapps/maker/data-platform/solutions-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dataverse solutions"),o("OutboundLink")],1),e._v(" including "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/powerapps/developer/component-framework/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("shared PCF UI Components"),o("OutboundLink")],1),e._v(". It uses "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory-b2c/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure AD B2C"),o("OutboundLink")],1),e._v(" and TALXIS backend service mentioned below.")]),e._v(" "),o("p",[e._v("In order to provide the best user experience across "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/powerapps/maker/model-driven-apps/model-driven-app-components",target:"_blank",rel:"noopener noreferrer"}},[e._v("Model-driven"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/getting-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("Canvas"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/powerapps/maker/portals/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Portal"),o("OutboundLink")],1),e._v(" apps we create many specialized UI components using "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/powerapps/developer/component-framework/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Apps Component Framework"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"integration-middleware-tools"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#integration-middleware-tools"}},[e._v("#")]),e._v(" Integration Middleware Tools")]),e._v(" "),o("p",[e._v("To support our applications and offer quick means of integrating them to other data sources we run a set of managed integration tools. We expose every data source as a connector definition backed by an HTTP REST API reverse proxy with an "),o("a",{attrs:{href:"https://www.openapis.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open API specification document"),o("OutboundLink")],1),e._v(". This not just allows users to consume it in Power Apps, Power Automate and "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logic Apps"),o("OutboundLink")],1),e._v(" but developers can also reference it directly from code.\n"),o("a",{attrs:{href:"https://shopify.github.io/liquid/basics/introduction/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Liquid templates"),o("OutboundLink")],1),e._v(" in combination with "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logic Apps"),o("OutboundLink")],1),e._v(" make connecting two systems with mapping and transformation quick and configurable even by consultants.")]),e._v(" "),o("h3",{attrs:{id:"platform-service-cluster-application-backend-mission-control"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#platform-service-cluster-application-backend-mission-control"}},[e._v("#")]),e._v(" Platform - Service Cluster, Application Backend & Mission Control")]),e._v(" "),o("p",[e._v("Some of scenarios require usage of external services for complex tasks. We manage a cluster with shared services like media conversion and geospatial functions which can be consumed by our applications.")]),e._v(" "),o("p",[e._v("Organizational data can be exposed using a secured OData V4 endpoint of our backend service. This makes it easy to consume for developers. It can connect to combination of a managed database, Dataverse and any Power Platform connectors as virtual data sources. "),o("a",{attrs:{href:"https://openid.net/connect/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OIDC compliant"),o("OutboundLink")],1),e._v(" identity providers like "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory-b2c/overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure AD B2C"),o("OutboundLink")],1),e._v(" can be used.")]),e._v(" "),o("p",[e._v("A mission control system helps us internally to provision new customers (including self-service), bill our software or services, distribute updates and manage incidents.")]),e._v(" "),o("h3",{attrs:{id:"standard-data-model"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#standard-data-model"}},[e._v("#")]),e._v(" Standard Data Model")]),e._v(" "),o("p",[e._v("A shared public data schema compliant with "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/common-data-model/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Common Data Model"),o("OutboundLink")],1),e._v(". It is a specification and multiple physical implementations of data schema organized into subject areas.")]),e._v(" "),o("p",[e._v("We implement a wide range of business applications and it is important to standardize data for different domains of expertise for our ability to support these apps in the long term.\nIt makes design, implementation and especially data analysis faster.")]),e._v(" "),o("h3",{attrs:{id:"community-open-source"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#community-open-source"}},[e._v("#")]),e._v(" Community & Open Source")]),e._v(" "),o("p",[e._v("We have built our existence around community and user groups. It has been a source of many good ideas for us and we are committed to continue contributing.\nNETWORG plans to open source well documented parts you can use in your projects except a few of them which are key to our business.\nIf you want to learn or contribute in the meantime let's get in touch using hello@networg.com and ask for publishing components you are interested in.")]),e._v(" "),o("h2",{attrs:{id:"our-motivation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#our-motivation"}},[e._v("#")]),e._v(" Our motivation")]),e._v(" "),o("p",[e._v("NETWORG started as a small team of .NET developers implementing customized CRM solutions based on Dynamics CRM. We were able to spin up a new instance, implement various modifications and go live in a matter of days. For us this was simply amazing because in our past experience ASP.NET apps always took weeks of creating boilerplate code to be even able to start working on business scenarios.")]),e._v(" "),o("p",[e._v("We quickly hit a wall by failing to keep up with high demand. The biggest issue we felt was our ability to hire and onboard skilled devs fast enough. Very few consultants knew Dynamics 365 well enough and it was hard to convince pro developers to use this approach.")]),e._v(" "),o("p",[e._v("In 2018 we started hearing about an emerging trend in enterprise software development called low-code application platform (also known as no-code/LCAP/LCDP/RAD/hpaPaaS). It opens app development to non-devs, offers considerably shorter time from idea to production, and thus provides an interesting opportunity not just for business users but for pro-devs as well.")]),e._v(" "),o("p",[e._v("XRM framework behind Dynamics 365 Customer Engagement we worked with later became known as Common Data Service after Microsoft decoupled Dynamics apps from the platform. They renamed it again in 2020 as Microsoft Dataverse and it was considered a leading low-code platform.")]),e._v(" "),o("h3",{attrs:{id:"why-low-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-low-code"}},[e._v("#")]),e._v(" Why low-code")]),e._v(" "),o("p",[e._v("The difference of approach when compared to imperative programming is a level of abstraction developers work with. We try to do everything in order to focus on WHAT instead of HOW when building new solutions for our customers.")]),e._v(" "),o("p",[e._v("Low code tools come with a platform which takes care of components like security, integration, infrastructure. It often reduces many implementation tasks to drag-and-drop actions in interactive visual designers for user interface and business processes instead of code editors.")]),e._v(" "),o("p",[e._v("Declarative app development is nothing new. The difference now are buzzwords and the hype around it. It has got a large amount of attention especially from corporate IT which caused a big progress in the recent years when it comes to platforms supporting it.")]),e._v(" "),o("p",[e._v("The idea we could deliver the same value for our customers with less effort and lower costs without having to spend hundreds of hours with things like security and app infrastructure sounded very interesting. This came extra handy in times when dev people were short in supply for us.")]),e._v(" "),o("h3",{attrs:{id:"journey"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#journey"}},[e._v("#")]),e._v(" Journey")]),e._v(" "),o("p",[e._v("We did a pretty common thing for software developers. We tried to reduce the necessity of solving the same problems multiple times by creating tools, shared components and frameworks. 😃 This helped us among other important aspects make it a bit more usable and interesting for pro-devs.")]),e._v(" "),o("p",[e._v('With our developer mindsets after some time we turned it upside down. With no official guidance we started applying common development patterns like separation of concerns to plugins and XML declarations generated by UI designers. We put the generated code to a source control with CI/CD pipelines and started shipping updates of the "product" to all of our customers continuously.')]),e._v(" "),o("p",[e._v("In parallel one of our team focused on building a toolset and finding ways for making integrations declarative because we considered it an important but tedious part of all projects.")]),e._v(" "),o("h3",{attrs:{id:"why-microsoft"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-microsoft"}},[e._v("#")]),e._v(" Why Microsoft")]),e._v(" "),o("p",[e._v("We explored Salesforce, Mendix and OutSystems too but given our past and experience it was our first candidate.\nIt has won our hearts because we believe Microsoft, unlike competitors, is the only one with a complete story for both citizen and professional developers. It provides the best out-of-box integration with their own cloud platform, dev tools, productivity suite, business intelligence, process automation and artificial intelligence.")])])}),[],!1,null,null,null);t.default=r.exports}}]);