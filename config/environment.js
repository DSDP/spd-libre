/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'sparl-core',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      client_id: '=yEvTDB6GU34syMA0n63RD8OQxgCec6w32KDC9Am',
      client_secret: '4BxxY7C4_jM!l4JlYe!1f;LuFRMf=!M;iabG;Mjad:hmnZ.Ma.Go=@9hYqIc5fwKAWg=rr_fxXW6bAP-iRUoZrTDK!fILZ;1u-nf@@ksDHKlX;k!h2jrGMQJ;F70!abw',      
      //host: 'https://spd.hcdn.gob.ar',

       minifyHTML: {
          enabled: true,
          minifierOptions: {
              collapseWhitespace : true,
              removeComments     : true,
              minifyJS           : true,
              minifyCSS          : true
          }
        }      
    },

     pace: {
      color: 'red',
      theme: 'minimal',
      catchupTime: 50,
      initialRate: .01,
      minTime: 100,
      ghostTime: 50,
      maxProgressPerFrame: 20,
      easeFactor: 1.25,
      startOnPageLoad: true,
      restartOnPushState: true,
      restartOnRequestAfter: 500,
      target: 'body',
      elements: {
        checkInterval: 100,
        selectors: ['body', '.ember-view']
      },
      eventLag: {
        minSamples: 10,
        sampleCount: 3,
        lagThreshold: 3
      },
      ajax: {
        trackMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
        trackWebSockets: true,
        ignoreURLs: []
      }
    },
    
    
  };

  if (environment === 'development') {
     ENV.APP.LOG_RESOLVER = false;
     ENV.APP.LOG_ACTIVE_GENERATION = false;
     ENV.APP.LOG_TRANSITIONS = false;
     ENV.APP.LOG_TRANSITIONS_INTERNAL = false;
     ENV.APP.LOG_VIEW_LOOKUPS = false;

     ENV.APP.host = "https://spd.hcdn.gob.ar/";

     ENV['simple-auth'] = {
         authorizer: 'simple-auth-authorizer:oauth2-bearer',
         session: 'session:custom',
         crossOriginWhitelist: ['https://spd.hcdn.gob.ar'],
     };

     ENV['simple-auth-oauth2'] = {
       serverTokenEndpoint: 'https://spd.hcdn.gob.ar/oauth/token/',
     };

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:oauth2-bearer',
      session: 'session:custom'
    };

    ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: 'oauth/token/',
    };
    
    ENV.googleAnalytics = {
      webPropertyId: 'UA-56183065-2'
    };    
  }

  ENV['contentSecurityPolicy'] = {
    'default-src': "'none'",
    'script-src': "* 'self' 'unsafe-inline'",
    'font-src': "* 'self' 'unsafe-inline'",
    'connect-src': "* 'self' 'unsafe-inline'",
    'img-src': "* 'self' 'unsafe-inline'",
    'style-src': "* 'self' 'unsafe-inline'",
    'media-src': "* 'self' 'unsafe-inline' "
  };


  
  return ENV;
};
