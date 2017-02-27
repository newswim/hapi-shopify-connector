### Hello!

This is a small, new project, attempting to use Meteor as a build tool and Hapi/Joi for
a RESTful server-side framework. There are a lot of advantages to this structure:

- Meteor as a build tool lets you skip having to setup Webpack or Browserify
- Latest ES6+ features, including `async/await`, `import/export`, etc.
- Authentication Strategies which persist across all routes
- The larger Hapi plugin ecosystem

---

Shopify provides webhooks for the following actions:

- Order cancelation
- Order creation
- Order deletion
- Order fulfillment
- Order payment
- Order update

Plus a bunch of others, but that's what we're concerned with.
