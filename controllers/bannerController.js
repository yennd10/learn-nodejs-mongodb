const Banner = require('../models/banner');

// Banner Management Functions
exports.getAddBanner = (req, res, next) => {
  res.render('BannerForm', {
    pageTitle: 'Add Banner',
    path: '/add-banner',
    editing: false
  });
};

exports.postAddBanner = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const bannerUrl = req.body.bannerUrl;

  // Handle file upload
  let imageUrl = '';
  if (req.file) {
    imageUrl = '/uploads/' + req.file.filename;
  }

  const banner = new Banner({
    title: title,
    imageUrl: imageUrl,
    description: description,
    bannerUrl: bannerUrl
  });
  banner
    .save()
    .then(result => {
      console.log('Created Banner');
      res.redirect('/banner-list');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditBanner = (req, res, next) => {
  const editMode = req.query.edit;

  if (editMode !== 'true') {
    console.log('editMode 1:', editMode);
    return res.redirect('/banner-list');
  }

  console.log('editMode 2:', editMode);
  const bannerId = req.params.bannerId;
  Banner.findById(bannerId)
    .then(banner => {
      if (!banner) {
        return res.redirect('/banner-list');
      }
      console.log('editMode 3:', editMode);
      res.render('BannerForm', {
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
  const updatedTitle = req.body.title;
  const updatedDesc = req.body.description;
  const updatedBannerUrl = req.body.bannerUrl;

  Banner.findById(bannerId)
    .then(banner => {
      banner.title = updatedTitle;
      banner.description = updatedDesc;
      banner.bannerUrl = updatedBannerUrl;

      // Handle file upload for edit
      if (req.file) {
        banner.imageUrl = '/uploads/' + req.file.filename;
      }

      return banner.save();
    })
    .then(result => {
      console.log('UPDATED BANNER!');
      res.redirect('/banner-list');
    })
    .catch(err => console.log(err));
};

exports.postDeleteBanner = (req, res, next) => {
  const bannerId = req.body.bannerId;
  Banner.findByIdAndDelete(bannerId)
    .then(() => {
      console.log('DESTROYED BANNER');
      res.redirect('/banner-list');
    })
    .catch(err => console.log(err));
};

// Get Banners List Page
exports.getBannerList = (req, res, next) => {
  Banner.find()
    .then(banners => {
      res.render('BannerList', {
        banners: banners,
        pageTitle: 'Banner List',
        path: '/banner-list'
      });
    })
    .catch(err => console.log(err));
};