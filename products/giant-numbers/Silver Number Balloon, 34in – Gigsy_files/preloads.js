
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.-aDo65iI.js","/cdn/shopifycloud/checkout-web/assets/c1/app.CjXFFkf6.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.D9EcAk3I.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.9DIRAirz.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.DW8Lpu3N.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.DgHxor73.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer.DFoc74UK.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.CbOAaaCM.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMethodSelectorSection.AaWE9fFc.js","/cdn/shopifycloud/checkout-web/assets/c1/useEditorShopPayNavigation.BPNEEUzV.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.D8WD2KOy.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.apZV1sdK.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.BV9wpSfC.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.DbjFOlJQ.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.MSS7ZlHm.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.CERhfKWy.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch.B3YzMRpu.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger.ByahNzb7.js","/cdn/shopifycloud/checkout-web/assets/c1/index.BYgtkKy6.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.DJfdC7zH.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.DJnf3a9l.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.Dx_lrSVd.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DeliveryMethodSelectorSection.BvrdqG-K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useEditorShopPayNavigation.CBpWLJzT.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.ClWBj0Dy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.CKAakmU8.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayVerificationSwitch.WW3cs_z5.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0672/2699/2962/files/Gigsy_Logo_Wordmark_Signal_Pink_2x_9f319bd2-9c2a-4175-932e-ea2dfa5c0ff3_x320.png?v=1712071937"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  