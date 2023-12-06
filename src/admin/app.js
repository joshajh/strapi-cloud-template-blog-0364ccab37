const config = {
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "CAST Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "By The Realization Group",
      "app.components.HomePage.welcome": "Welcome to your CAST Dashboard 👋",
      "app.components.HomePage.welcome.again": "Welcome to your CAST Dashboard 👋",
      "app.components.HomePage.welcomeBlock.content": "CAST from The Realization Group is an API for your content. Create content once, and publish it wherever and however you want.",
      "app.components.HomePage.welcomeBlock.content.again": "CAST from The Realization Group is an API for your content. Create content once, and publish it wherever and however you want.",
      "app.components.HomePage.button.blog": "Read more on the TRG site",
      "app.components.BlockLink.cloud": "Learn CAST",
      "app.components.BlockLink.cloud.content": "A simple, extensible API for modern content operations.",
      "app.components.BlockLink.code.content": "Get started with pre-made elements.",
      "app.components.BlockLink.tutorial.content": "Follow step-by-step instructions to use and customize CAST.",
      "app.components.BlockLink.blog.content": "Read more from The Realization Group.",
      "app.components.HomePage.community": "Resources",
      "app.components.HomePage.community.content": "Need support? TRG is here to help.",
      "Auth.form.welcome.subtitle": "Log in to your CAST account",
      "Auth.form.welcome.title": "Welcome to CAST.",
      "Auth.form.register.subtitle": "Credentials are only used to authenticate in CAST. All saved data will be stored in your database.",
      "Settings.permissions.users.listview.header.subtitle": "All the users who have access to the CAST admin panel",
      "admin.pages.MarketPlacePage.subtitle": "Get more out of CAST",
      "app.components.NpsSurvey.banner-title": "How likely are you to recommend CAST to a colleague?",
      "notification.version.update.message": "A new version of CAST is available!",

    },
  },
  tutorials: false,
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};