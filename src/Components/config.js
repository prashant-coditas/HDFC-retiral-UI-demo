//import dataSample from '../components/datasample.json';
module.exports = {
    THEME_SETTINGS: {
        logoImageURL: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
        menuBannerURL: '../images/menu-banner.png',
        //splashImageURL: require('../images/splash.jpg'),
        menuID: 17
    },
    HOMEPAGES_BANNER_TOP: {},
    HOMEPAGES_CONFIG: [ {
          name: 'Top stories',
          widgets: [
          {
              title: '',
              type: 'article_list_widget_static', // 'article_list_widget_static' || 'wordpress_article_list'
              limit: 1,
              layout: 'Card', // "TwoColumn" || "ThreeColumn" || "Card" || "CardType2" || "Portfolio" || "PortfolioType2" || "List" || "ListType2"
              titleFontSize: 26
          },
          {
              title: '',
              type: 'article_list_widget_static', // 'article_list_widget_static' || 'wordpress_article_list'
              limit: 2,
              layout: 'List', // "TwoColumn" || "ThreeColumn" || "Card" || "CardType2" || "Portfolio" || "PortfolioType2" || "List" || "ListType2"
              darkTheme: true,
          },
          {
              title: 'Feature & Analysis',
              type: 'article_list_widget_static', // 'article_list_widget_static' || 'wordpress_article_list'
        // blogID || dataJson
              limit: 1,
              layout: 'Card', // "TwoColumn" || "ThreeColumn" || "Card" || "CardType2" || "Portfolio" || "PortfolioType2" || "List" || "ListType2"
              titleFontSize: 18
          },
          {
              title: '',
              type: 'article_list_widget_static', // 'article_list_widget_static' || 'wordpress_article_list'
              //value: dataSample[0].yourReadingList, // blogID || dataJson
              limit: 4,
              layout: 'TwoColumn', // "TwoColumn" || "ThreeColumn" || "Card" || "CardType2" || "Portfolio" || "PortfolioType2" || "List" || "ListType2"
              darkTheme: false
          },
          {
              title: 'Afirca',
              type: 'article_list_widget_static', // 'article_list_widget_static' || 'wordpress_article_list'
              //value: dataSample[0].yourReadingList, // blogID || dataJson
              limit: 2,
              layout: 'List', // "TwoColumn" || "ThreeColumn" || "Card" || "CardType2" || "Portfolio" || "PortfolioType2" || "List" || "ListType2"
          },
          {
              title: '',
              type: 'article_list_widget_static', // 'article_list_widget_static' || 'wordpress_article_list'
              //value: dataSample[0].yourReadingList, // blogID || dataJson
              limit: 1,
              layout: 'Portfolio', // "TwoColumn" || "ThreeColumn" || "Card" || "CardType2" || "Portfolio" || "PortfolioType2" || "List" || "ListType2"
          }
        ]
      },
      {
          name: 'Video',
          widgets: [
          {
              title: '',
              type: 'video_player', // 'article_list_widget_static' || 'wordpress_article_list'
              apiKey: 'AIzaSyBJ3ntReiv0L19H2RoYW62LpRdIuyPhIpw', // blogID || dataJson
              channelId: 'UCQzdMyuz0Lf4zo4uGcEujFw',
              limit: 10,
              horizontal: false,
              layout: 'TwoColumn' // "LargeItem" || "TwoColumn" || "ThreeColumn" || "Card" || "CardType2" || "Portfolio" || "PortfolioType2" || "List" || "ListType2"
          },
        ]
      },
      {
          name: 'My News',
          widgets: [
          {
              title: '',
              type: 'article_list_widget_static', // 'article_list_widget_static' || 'wordpress_article_list'
              //value: dataSample[0].yourReadingList, // blogID || dataJson
              limit: 20,
              layout: 'List' // "TwoColumn" || "ThreeColumn" || "Card" || "CardType2" || "Portfolio" || "PortfolioType2" || "List" || "ListType2"
          }
        ]
      },
      {
          name: 'Poppular',
          widgets: [
          {
              title: '',
              type: 'article_list_widget_static', // 'article_list_widget_static' || 'wordpress_article_list'
              //value: dataSample[0].yourReadingList, // blogID || dataJson
              limit: 20,
              layout: 'List' // "TwoColumn" || "ThreeColumn" || "Card" || "CardType2" || "Portfolio" || "PortfolioType2" || "List" || "ListType2"
          }
        ]
      }
    ],
    SECTIONS_MENU: [
      
  	],
}
