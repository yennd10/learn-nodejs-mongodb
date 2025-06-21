const Banner = require('../models/banner');

exports.getAddBanner = (req, res, next) => {
  res.render('form-banner', {
    pageTitle: 'Add Banner',
    path: '/add-banner',
    editing: false
  });
};

exports.postAddBanner = (req, res, next) => {
  const imageUrl = req.body.imageUrl;
  const title = req.body.title;
  const description = req.body.description;
  const bannerUrl = req.body.bannerUrl

  //khoi tao banner Model Object and save banner Object
  const banner = new Banner(imageUrl, title, description, bannerUrl);

  banner
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Banner');
      res.redirect('/banners');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditBanner = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }

  // get bannId on Url
  const bannerId = req.params.bannerId;

  Banner.findById(bannerId)
    .then(banner => {
      if (!banner) {
        return res.redirect('/');
      }

      res.render('form-banner', {
        pageTitle: 'Edit Banner',
        path: '/edit-banner',
        editing: editMode,
        banner: banner
      });
    })
    .catch(err => console.log(err));
};

exports.postEditBanner = (req, res, next) => {
  const bannerId = req.body.bannerId;
  const updatedImageUrl = req.body.imageUrl;
  const updatedTitle = req.body.title;
  const updatedDesc = req.body.description;
  const updatedBannerUrl = req.body.bannerUrl;

  const banner = new Banner(
    bannerId,
    updatedImageUrl,
    updatedTitle,
    updatedDesc,
    updatedBannerUrl
  );
  banner
    .save()
    .then(result => {
      console.log('UPDATED BANNER!');
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.getBanners = (req, res, next) => {
  Banner.fetchAll()
    .then(banners => {
      res.render('banners', {
        banners: banners,
        pageTitle: 'All Banner',
        path: '/banners'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteBanner = (req, res, next) => {
  const bannerId = req.body.bannerId;
  Banner.deleteById(bannerId)
    .then(() => {
      console.log('DESTROYED BANNER');
      res.redirect('/');
    })
    .catch(err => console.log(err));
};
